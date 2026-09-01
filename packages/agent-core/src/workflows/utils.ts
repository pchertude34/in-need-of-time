import { registerAiSdkTelemetry, Laminar, observe } from "@lmnr-ai/lmnr";
import { generateText, stepCountIs } from "ai";
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

    const { text, output, steps } = await generateText({
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

    logStepTokens(agent, steps as StepUsage[]);

    return { text, output };
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
