import { streamText, stepCountIs } from "ai";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { emit } from "./bus";
import { OrchestratorAgent } from "./agents/orchestratorAgent";
import { DirectoryScrapeAgent } from "./agents/directoryScrapeAgent";
import { ProviderScrapeAgent } from "./agents/providerScrapeAgent";
import { EventType } from "@in-need-of-time/types/agentEvents";
import type { RoutableAgent } from "./agents/orchestratorAgent";
import type { Agent } from "./types";
import type { ModelMessage, ToolSet, StopCondition, LanguageModelUsage } from "ai";

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
// The AI SDK doesn't attribute token cost to an individual tool call — the
// closest real correlation is per internal step, since each step's usage
// covers whatever tool call(s) prompted it.
type StepUsage = { toolNames: string[]; usage: LanguageModelUsage };
type Turn = {
  text: string;
  output: unknown;
  toolCalls: ToolCall[];
  responseMessages: ModelMessage[];
  usage: LanguageModelUsage;
  steps: StepUsage[];
};

// DBOS step so a completed turn is checkpointed and never re-billed.
async function modelTurn(jobId: string, workflowId: string, agent: Agent, context: ModelMessage[]): Promise<Turn> {
  const { textStream, toolCalls, text, output, responseMessages, usage, steps } = streamText({
    model: agent.model,
    system: agent.systemPrompt,
    tools: agent.tools,
    output: agent.output,
    // Let the SDK resolve hosted tools (web_search) and produce the final
    // structured output within this single call, rather than the manual loop.
    stopWhen: [stepCountIs(MAX_STEPS), noPendingToolCalls],
    messages: context,
  });

  for await (const part of textStream) {
    await emit(jobId, { type: EventType.ModelDelta, workflowId, text: part }, false);
  }

  return {
    text: await text,
    output: await output,
    toolCalls: (await toolCalls).map((c) => ({
      toolCallId: c.toolCallId,
      toolName: c.toolName,
      input: c.input as Record<string, unknown>,
      providerExecuted: c.providerExecuted ?? false,
    })),
    responseMessages: await responseMessages,
    usage: await usage,
    steps: (await steps).map((step) => ({
      toolNames: step.toolCalls.map((c) => c.toolName),
      usage: step.usage,
    })),
  };
}

// Running total of tokens used per job, across every turn — the orchestrator,
// the top-level agent, and each fanned-out child. Per-process only: if DBOS
// ever distributes workflow execution across multiple executor processes,
// this won't aggregate correctly across them.
const jobTokenTotals = new Map<string, number>();

// Runs a single agent's turn to completion. Every current tool is either
// provider-executed (e.g. web_search) or self-executing via its own
// `execute()`, so streamText's own stopWhen-driven loop (see modelTurn)
// already resolves everything internally in one call — no manual multi-step
// handling needed here. If that stops being true (a tool with no `execute()`
// is added), this will need a real loop that runs it and feeds back a result.
async function runAgentLoop(
  jobId: string,
  workflowId: string,
  agent: Agent,
  messages: ModelMessage[],
): Promise<{ text: string; output: unknown; messages: ModelMessage[] }> {
  const turn = await DBOS.runStep(() => modelTurn(jobId, workflowId, agent, messages), {
    name: `${agent.name}-model`,
  });
  messages.push(...turn.responseMessages);

  let totalTokens = jobTokenTotals.get(jobId) ?? 0;
  for (const step of turn.steps) {
    const stepTokens = step.usage.totalTokens ?? 0;
    totalTokens += stepTokens;
    const toolNames = step.toolNames.join(",") || "none";
    console.log(
      `[${jobId}/${workflowId}] agent=${agent.name} tools=${toolNames} stepTokens=${stepTokens} totalTokens=${totalTokens}`,
    );
  }
  jobTokenTotals.set(jobId, totalTokens);

  return { text: turn.text, output: turn.output, messages };
}

// Runs ProviderScrapeAgent for a single URL as its own durable workflow, so a
// directory's fanned-out URLs can be started concurrently (see agentWorkflow)
// and each one is independently resumable if it crashes.
async function providerScrapeWorkflow(jobId: string, url: string) {
  const workflowId = DBOS.workflowID ?? "unknown";

  await DBOS.runStep(
    () =>
      emit(jobId, {
        type: EventType.SubagentStarted,
        workflowId,
        stepId: url,
        agent: ProviderScrapeAgent.name,
        objective: url,
      }),
    { name: "subagent-started" },
  );

  try {
    const result = await runAgentLoop(jobId, workflowId, ProviderScrapeAgent, [{ role: "user", content: url }]);
    await DBOS.runStep(
      () =>
        emit(jobId, {
          type: EventType.SubagentCompleted,
          workflowId,
          stepId: url,
          agent: ProviderScrapeAgent.name,
          findings: result.text,
        }),
      { name: "subagent-completed" },
    );
    return { url, output: result.output };
  } catch (err) {
    await DBOS.runStep(
      () =>
        emit(jobId, {
          type: EventType.SubagentFailed,
          workflowId,
          stepId: url,
          agent: ProviderScrapeAgent.name,
          error: err instanceof Error ? err.message : String(err),
        }),
      { name: "subagent-failed" },
    );
    throw err;
  }
}

export const runProviderScrapeWorkflow = DBOS.registerWorkflow(providerScrapeWorkflow, {
  name: "providerScrapeWorkflow",
});

async function agentWorkflow(jobId: string, messages: ModelMessage[]) {
  const workflowId = DBOS.workflowID ?? "unknown";
  const lastMessage = messages.at(-1);
  const input = typeof lastMessage?.content === "string" ? lastMessage.content : JSON.stringify(lastMessage?.content);

  await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowStarted, workflowId, input }), {
    name: "workflow-started",
  });

  // Classify on a copy of the conversation — the orchestrator's own
  // reasoning is a private routing decision, not part of the persisted job.
  const orchestratorResult = await runAgentLoop(jobId, workflowId, OrchestratorAgent, [...messages]);
  const decision = orchestratorResult.output as { agent: RoutableAgent; reason: string };

  await DBOS.runStep(
    () =>
      emit(jobId, {
        type: EventType.AgentHandoff,
        workflowId,
        from: OrchestratorAgent.name,
        to: decision.agent,
        reason: decision.reason,
      }),
    { name: "agent-handoff" },
  );

  let text: string;

  if (decision.agent === "provider_scrape") {
    const result = await runAgentLoop(jobId, workflowId, ProviderScrapeAgent, messages);
    text = result.text;
  } else {
    const directoryResult = await runAgentLoop(jobId, workflowId, DirectoryScrapeAgent, messages);
    const { urls } = directoryResult.output as { urls: string[] };

    await DBOS.runStep(
      () =>
        emit(jobId, {
          type: EventType.PlanCreated,
          workflowId,
          steps: urls.map((url, i) => ({ id: `${i}`, agent: ProviderScrapeAgent.name, objective: url })),
        }),
      { name: "plan-created" },
    );

    // Each URL runs as its own durable child workflow, started concurrently
    // so they execute in parallel; a failed one doesn't sink the others.
    const handles = await Promise.all(urls.map((url) => DBOS.startWorkflow(runProviderScrapeWorkflow)(jobId, url)));
    const results = await Promise.allSettled(handles.map((handle) => handle.getResult()));

    const providers = results.flatMap((result) =>
      result.status === "fulfilled"
        ? ((result.value.output as { providers?: unknown[] } | undefined)?.providers ?? [])
        : [],
    );

    text = JSON.stringify({ providers });
  }

  await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowCompleted, workflowId, output: text }), {
    name: "workflow-completed",
  });

  return { text, messages };
}

export const runAgentWorkflow = DBOS.registerWorkflow(agentWorkflow, {
  name: "agentWorkflow",
});
