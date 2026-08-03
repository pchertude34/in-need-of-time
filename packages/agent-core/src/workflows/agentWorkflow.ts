import { DBOS } from "@dbos-inc/dbos-sdk";
import { emit } from "../bus";
import { OrchestratorAgent } from "../agents/orchestratorAgent";
import { DirectoryScrapeAgent } from "../agents/directoryScrapeAgent";
import { EventType } from "@in-need-of-time/types/agentEvents";
import { runAgentLoop, runProviderScrape, PROVIDER_SCRAPE_PIPELINE_NAME } from "../runtime";
import { runProviderScrapeWorkflow } from "./providerScrapeWorkflow";
import type { RoutableAgent } from "../agents/orchestratorAgent";
import type { ModelMessage } from "ai";

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
    const result = await runProviderScrape(jobId, workflowId, messages);
    text = result.text;
  } else {
    // Runs on its own copy — its web_search/pagination tool-calling
    // transcript is only useful for finding the URLs, so it's not merged
    // into the caller's persisted conversation (same reasoning as
    // runProviderScrape's extraction step).
    const directoryResult = await runAgentLoop(jobId, workflowId, DirectoryScrapeAgent, [...messages]);
    const { urls } = directoryResult.output as { urls: string[] };

    // Only the final answer becomes part of the persisted conversation, not
    // the raw tool-calling transcript that produced it.
    messages.push({ role: "assistant", content: directoryResult.text });

    await DBOS.runStep(
      () =>
        emit(jobId, {
          type: EventType.PlanCreated,
          workflowId,
          steps: urls.map((url, i) => ({ id: `${i}`, agent: PROVIDER_SCRAPE_PIPELINE_NAME, objective: url })),
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
