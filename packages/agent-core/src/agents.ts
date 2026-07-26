import { ToolSet, ToolLoopAgent } from "ai";
import { openai } from "@ai-sdk/openai";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { EventType } from "@in-need-of-time/types/agentEvents";
import { emit } from "./bus";

export type Agent = {
  name: string;
  systemPrompt: string;
  tools: ToolSet;
};

export function createAgent(workflowId: string) {
  return new ToolLoopAgent({
    model: openai("gpt-5"),
    instructions: "You are a helpful agent",
    tools: { web_search: openai.tools.webSearch({}) },
    onStart: async (event) => {
      await DBOS.runStep(
        () => emit({ type: EventType.WorkflowStarted, workflowId, input: JSON.stringify(event.messages) }),
        { name: "workflow-started" },
      );
    },
    onStepEnd: async (step) => {
      await DBOS.runStep(() => emit({ type: EventType.ModelCompleted, workflowId, text: step.text }), {
        name: "model-completed",
      });
    },
    onToolExecutionStart: async (event) => {
      await DBOS.runStep(
        () =>
          emit({
            type: EventType.ToolRequested,
            workflowId,
            toolCallId: event.toolCall.toolCallId,
            name: event.toolCall.toolName,
            args: event.toolCall.input,
          }),
        { name: "tool-requested" },
      );
    },
    onToolExecutionEnd: async (event) => {
      const toolOutput = event.toolOutput;
      if (toolOutput.type === "tool-error") {
        await DBOS.runStep(
          () =>
            emit({
              type: EventType.ToolFailed,
              workflowId,
              toolCallId: event.toolCall.toolCallId,
              error: String(toolOutput.error),
            }),
          { name: "tool-failed" },
        );
      } else {
        await DBOS.runStep(
          () =>
            emit({
              type: EventType.ToolCompleted,
              workflowId,
              toolCallId: event.toolCall.toolCallId,
              result: toolOutput.output,
            }),
          { name: "tool-completed" },
        );
      }
    },
    onEnd: async (event) => {
      await DBOS.runStep(() => emit({ type: EventType.WorkflowCompleted, workflowId, output: event.text }), {
        name: "workflow-completed",
      });
    },
  });
}
