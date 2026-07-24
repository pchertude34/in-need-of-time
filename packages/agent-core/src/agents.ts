import { ToolSet, ToolLoopAgent } from "ai";
import { openai } from "@ai-sdk/openai";
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
    onStart: (event) => {
      void emit({
        type: EventType.WorkflowStarted,
        workflowId,
        input: JSON.stringify(event.messages),
      });
    },
    onStepStart: (step) => {
      // void emit({
      //   type: EventType.ModelDelta,
      // })
    },
    onStepEnd: (step) => {
      void emit({ type: EventType.ModelCompleted, workflowId, text: step.text });
    },
    onToolExecutionStart: (event) => {
      void emit({
        type: EventType.ToolRequested,
        workflowId,
        toolCallId: event.toolCall.toolCallId,
        name: event.toolCall.toolName,
        args: event.toolCall.input,
      });
    },
    onToolExecutionEnd: (event) => {
      if (event.toolOutput.type === "tool-error") {
        void emit({
          type: EventType.ToolFailed,
          workflowId,
          toolCallId: event.toolCall.toolCallId,
          error: String(event.toolOutput.error),
        });
      } else {
        void emit({
          type: EventType.ToolCompleted,
          workflowId,
          toolCallId: event.toolCall.toolCallId,
          result: event.toolOutput.output,
        });
      }
    },
    onEnd: (event) => {
      void emit({ type: EventType.WorkflowCompleted, workflowId, output: event.text });
    },
  });
}
