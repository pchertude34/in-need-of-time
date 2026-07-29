import { streamText } from "ai";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { GPT_5 } from "./model";
import { emit } from "./bus";
import { runTool } from "./tools";
import { EventType } from "@in-need-of-time/types/agentEvents";
import type { ModelMessage, JSONValue, ToolSet } from "ai";

const MAX_STEPS = 10;

type ToolCall = { toolCallId: string; toolName: string; input: Record<string, unknown> };
type Turn = { text: string; toolCalls: ToolCall[]; responseMessages: ModelMessage[] };

// DBOS step so a completed turn is checkpointed and never re-billed.
async function modelTurn(
  jobId: string,
  workflowId: string,
  context: ModelMessage[],
  agentTools: ToolSet = {},
): Promise<Turn> {
  const { textStream, toolCalls, text, responseMessages } = streamText({
    model: GPT_5,
    system: "you are an agent boi",
    messages: context,
    tools: agentTools,
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

function toolResultMessage(call: ToolCall, value: JSONValue) {
  return {
    role: "tool",
    content: [{ type: "tool-result", toolCallId: call.toolCallId, toolName: call.toolName, output: value }],
  };
}

async function agentWorkflow(jobId: string, messages: ModelMessage[]) {
  const workflowId = DBOS.workflowID ?? "unknown";
  const lastMessage = messages.at(-1);
  const input = typeof lastMessage?.content === "string" ? lastMessage.content : JSON.stringify(lastMessage?.content);
  console.log("Starting agent workflow with input:", input, "and workflowId:", workflowId);
  await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowStarted, workflowId, input }), {
    name: "workflow-started",
  });

  let step = 0;

  while (step < MAX_STEPS) {
    const turn = await DBOS.runStep(() => modelTurn(jobId, workflowId, messages), {
      name: `model-${step}`,
    });
    messages.push(...turn.responseMessages);

    if (turn.toolCalls.length === 0) {
      await DBOS.runStep(() => emit(jobId, { type: EventType.ModelCompleted, workflowId, text: turn.text }), {
        name: `model-done-${step}`,
      });
      await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowCompleted, workflowId, output: turn.text }), {
        name: "workflow-completed",
      });
      return { text: turn.text, messages };
    }

    for (const call of turn.toolCalls) {
      const output = await DBOS.runStep(() => toolStep(jobId, workflowId, call), { name: `tool-${call.toolName}}` });
      messages.push({
        role: "tool",
        content: [
          {
            type: "tool-result",
            toolCallId: call.toolCallId,
            toolName: call.toolName,
            output: { type: "json", value: output as JSONValue },
          },
        ],
      });
    }
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
