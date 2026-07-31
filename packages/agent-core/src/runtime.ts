import { streamText, stepCountIs } from "ai";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { GPT_5 } from "./model";
import { emit } from "./bus";
import { runTool } from "./tools";
import { ProviderScrapeAgent } from "./agents";
import { EventType } from "@in-need-of-time/types/agentEvents";
import type { ModelMessage, JSONValue, ToolSet, StopCondition } from "ai";

const MAX_STEPS = 10;

// Safety net: the SDK's own deferred-result bookkeeping for provider-executed
// tools (e.g. web_search) doesn't always clear once resolved, which can keep
// the internal step loop going — re-generating an already-complete answer —
// until it hits the step-count cap. Stop as soon as a step has no tool calls
// left to resolve, regardless of that bookkeeping.
const noPendingToolCalls: StopCondition<ToolSet> = ({ steps }) => {
  const last = steps.at(-1);
  return last !== undefined && last.toolCalls.length === 0;
};

// `providerExecuted` marks hosted tools (e.g. openai web_search) that the
// provider runs itself — their call + result already live in responseMessages,
// so the manual loop below must NOT re-run them or inject a client result.
type ToolCall = { toolCallId: string; toolName: string; input: Record<string, unknown>; providerExecuted: boolean };
type Turn = { text: string; toolCalls: ToolCall[]; responseMessages: ModelMessage[] };

// DBOS step so a completed turn is checkpointed and never re-billed.
async function modelTurn(
  jobId: string,
  workflowId: string,
  context: ModelMessage[],
  agentTools: ToolSet = {},
): Promise<Turn> {
  const { textStream, toolCalls, text, responseMessages } = streamText({
    model: ProviderScrapeAgent.model,
    system: ProviderScrapeAgent.systemPrompt,
    tools: ProviderScrapeAgent.tools,
    output: ProviderScrapeAgent.output,
    // Let the SDK resolve hosted tools (web_search) and produce the final
    // structured output within this single call, rather than the manual loop.
    stopWhen: [stepCountIs(MAX_STEPS)],
    messages: context,
  });

  for await (const part of textStream) {
    await emit(jobId, { type: EventType.ModelDelta, workflowId, text: part }, false);
  }

  return {
    text: await text,
    toolCalls: (await toolCalls).map((c) => ({
      toolCallId: c.toolCallId,
      toolName: c.toolName,
      input: c.input as Record<string, unknown>,
      providerExecuted: c.providerExecuted ?? false,
    })),
    responseMessages: await responseMessages,
  };
}

// Execute one tool. Run as a DBOS step so its side effect runs exactly once.
async function toolStep(jobId: string, workflowId: string, call: ToolCall): Promise<Record<string, unknown>> {
  await emit(jobId, {
    type: EventType.ToolRequested,
    workflowId,
    toolCallId: call.toolCallId,
    name: call.toolName,
    args: call.input,
  });
  const output = await runTool(call.toolName, call.input);
  await emit(jobId, {
    type: EventType.ToolCompleted,
    workflowId,
    toolCallId: call.toolCallId,
    result: output,
  });

  return output;
}

function toolResultMessage(call: ToolCall, value: JSONValue): ModelMessage {
  return {
    role: "tool",
    content: [
      {
        type: "tool-result",
        toolCallId: call.toolCallId,
        toolName: call.toolName,
        output: { type: "json", value },
      },
    ],
  };
}

async function agentWorkflow(jobId: string, messages: ModelMessage[]) {
  const workflowId = DBOS.workflowID ?? "unknown";
  const lastMessage = messages.at(-1);
  const input = typeof lastMessage?.content === "string" ? lastMessage.content : JSON.stringify(lastMessage?.content);

  await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowStarted, workflowId, input }), {
    name: "workflow-started",
  });

  let step = 0;

  while (step < MAX_STEPS) {
    console.log("step", step);
    const turn = await DBOS.runStep(() => modelTurn(jobId, workflowId, messages), {
      name: `model-${step}`,
    });
    messages.push(...turn.responseMessages);

    // Provider-executed tools are already resolved inside responseMessages;
    // only client tools need the manual run-and-inject loop below.
    const clientToolCalls = turn.toolCalls.filter((c) => !c.providerExecuted);
    console.log("tool call count", clientToolCalls.length);
    if (clientToolCalls.length === 0) {
      await DBOS.runStep(() => emit(jobId, { type: EventType.ModelCompleted, workflowId, text: turn.text }), {
        name: `model-done-${step}`,
      });
      await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowCompleted, workflowId, output: turn.text }), {
        name: "workflow-completed",
      });
      return { text: turn.text, messages };
    }

    // for (const call of clientToolCalls) {
    //   const output = await DBOS.runStep(() => toolStep(jobId, workflowId, call), { name: `tool-${call.toolName}}` });
    //   messages.push(toolResultMessage(call, output as JSONValue));
    // }
    step++;
  }

  await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowFailed, workflowId, error: "Max steps exceeded" }), {
    name: "workflow-failed",
  });
  return { text: "", messages };
}

export const runAgentWorkflow = DBOS.registerWorkflow(agentWorkflow, {
  name: "agentWorkflow",
});
