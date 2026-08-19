import { registerAiSdkTelemetry, Laminar, observe } from "@lmnr-ai/lmnr";
import { EventType } from "@in-need-of-time/types/agentEvents";
import { streamText, stepCountIs } from "ai";
import { emit } from "../bus";
import type { Agent } from "../types";
import type { ModelMessage, LanguageModelUsage } from "ai";

registerAiSdkTelemetry();

const MAX_STEPS = 10;

type StepUsage = {
  toolCalls: { toolName: string; input: Record<string, unknown> }[];
  usage: LanguageModelUsage;
};

export async function runAgent(jobId: string, workflowId: string, messages: ModelMessage[], agent: Agent) {
  return observe({ name: "runAgent" }, async () => {
    Laminar.setTraceSessionId(`job-${jobId}`);

    const { textStream, text, output, steps } = streamText({
      model: agent.model,
      system: agent.systemPrompt,
      tools: agent.tools,
      output: agent.output,
      messages,
      stopWhen: [stepCountIs(MAX_STEPS)],
      runtimeContext: {
        jobId,
      },
      telemetry: {
        functionId: "release-notes",
        includeRuntimeContext: {
          jobId: true,
        },
      },
    });

    for await (const part of textStream) {
      await emit(jobId, { type: EventType.ModelDelta, workflowId, text: part }, false);
    }

    logStepTokens(agent, (await steps) as StepUsage[]);

    return {
      text: await text,
      output: await output,
    };
  });
}

function logStepTokens(agent: Agent, steps: StepUsage[]) {
  for (const step of steps) {
    const toolNames = step.toolCalls.map((c) => c.toolName).join(", ") || "none";
    console.log(`Agent: ${agent.name}, Tool Calls: ${toolNames}, Tokens Used: ${step.usage.totalTokens}`);
  }
}

export function buildContext(messages: ModelMessage[], content: string): ModelMessage[] {
  return [...messages, { role: "user", content }];
}
