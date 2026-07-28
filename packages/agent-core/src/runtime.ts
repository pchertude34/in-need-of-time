import { streamText } from "ai";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { createAgent } from "./agents";
import { GPT_5 } from "./model";
import { emit } from "./bus";
import { runTool } from "./tools";
import { EventType } from "@in-need-of-time/types/agentEvents";
import type { ModelMessage, JSONValue, ToolSet } from "ai";

const MAX_STEPS = 10;

type ToolCall = { toolCallId: string; toolName: string; input: Record<string, unknown> };
type Turn = { text: string; toolCalls: ToolCall[]; responseMessages: ModelMessage[] };

// DBOS step so a completed turn is checkpointed and never re-billed.
async function modelTurn(workflowId: string, context: ModelMessage[], agentTools: ToolSet = {}): Promise<Turn> {
  const { textStream, toolCalls, text, responseMessages } = streamText({
    model: GPT_5,
    system: "you are an agent boi",
    messages: context,
    tools: agentTools,
  });

  for await (const part of textStream) {
    await emit({ type: EventType.ModelDelta, workflowId, text: part });
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
async function toolStep(workflowId: string, call: ToolCall): Promise<Record<string, unknown>> {
  await emit({
    type: EventType.ToolRequested,
    workflowId,
    toolCallId: call.toolCallId,
    name: call.toolName,
    args: call.input,
  });
  const output = await runTool(call.toolName, call.input);
  await emit({
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

async function agentWorkflow(input: string) {
  const workflowId = "hello-world";
  console.log("Starting agent workflow with input:", input, "and workflowId:", workflowId);
  await DBOS.runStep(() => emit({ type: EventType.WorkflowStarted, workflowId, input }), { name: "workflow-started" });

  const messages: ModelMessage[] = [{ role: "user", content: input }];

  // const turns: ModelMessage[][] = [];
  let step = 0;

  while (step < MAX_STEPS) {
    const turn = await DBOS.runStep(() => modelTurn(workflowId, messages), {
      name: `model-${step}`,
    });
    messages.push(...turn.responseMessages);

    if (turn.toolCalls.length === 0) {
      await DBOS.runStep(() => emit({ type: EventType.ModelCompleted, workflowId, text: turn.text }), {
        name: `model-done-${step}`,
      });
      await DBOS.runStep(() => emit({ type: EventType.WorkflowCompleted, workflowId, output: turn.text }), {
        name: "workflow-completed",
      });
      return turn.text;
    }

    for (const call of turn.toolCalls) {
      const output = await DBOS.runStep(() => toolStep(workflowId, call), { name: `tool-${call.toolName}}` });
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

  await DBOS.runStep(() => emit({ type: EventType.WorkflowFailed, workflowId, error: "Max steps exceeded" }), {
    name: "workflow-failed",
  });
  return "";
}

export const runAgentWorkflow = DBOS.registerWorkflow(agentWorkflow, {
  name: "agentWorkflow",
});
