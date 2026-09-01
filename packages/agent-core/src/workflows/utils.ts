import { registerAiSdkTelemetry, Laminar, observe } from "@lmnr-ai/lmnr";
import { generateText, stepCountIs } from "ai";
import { EventType } from "@in-need-of-time/types/agentEvents";
import { emit } from "../bus";
import type { Agent } from "../types";
import type { ModelMessage, LanguageModelUsage } from "ai";

registerAiSdkTelemetry();

const MAX_STEPS = 10;

type StepUsage = {
  toolCalls: { toolName: string; input: Record<string, unknown> }[];
  usage: LanguageModelUsage;
};

export async function runAgent(
  jobId: string,
  workflowId: string,
  messages: ModelMessage[],
  agent: Agent,
  task: string,
) {
  return observe({ name: "runAgent" }, async () => {
    Laminar.setTraceSessionId(`job-${jobId}`);

    await emit(jobId, { type: EventType.AgentStarted, workflowId, agent: agent.name, task });

    let result: Awaited<ReturnType<typeof generateText>>;
    try {
      result = await generateText({
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
    } catch (err) {
      await emit(jobId, {
        type: EventType.AgentFailed,
        workflowId,
        agent: agent.name,
        error: err instanceof Error ? err.message : String(err),
      });
      throw err;
    }

    const { text, output, steps } = result;
    logStepTokens(agent, steps as StepUsage[]);

    await emit(jobId, { type: EventType.AgentCompleted, workflowId, agent: agent.name });

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
