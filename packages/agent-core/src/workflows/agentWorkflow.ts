import { DBOS } from "@dbos-inc/dbos-sdk";
import { eq } from "drizzle-orm";
import { db, agentJobsTable } from "@in-need-of-time/db";
import { EventType } from "@in-need-of-time/types/agentEvents";
import { emit } from "../bus";
import { OrchestratorAgent } from "../agents/orchestratorAgent";
import { runProviderScrape } from "./providerScrapeWorkflow";
import { runAgent } from "./utils";
import type { ModelMessage } from "ai";
import type { RoutableAgent } from "../agents/orchestratorAgent";

// Only the job's application data is written back — its status, error and
// timing are DBOS's own record of this workflow, read back by `getJob`.
async function saveJobResult(jobId: string, output: string, messages: ModelMessage[]) {
  await db.update(agentJobsTable).set({ output, messages }).where(eq(agentJobsTable.jobId, jobId));
}

// `location` is the state the job was scoped to, e.g. "Oregon". It's optional
// so a job submitted without one still runs, just without a geographic bias on
// the agents' web searches.
async function agentWorkflow(jobId: string, messages: ModelMessage[], location?: string) {
  const workflowId = DBOS.workflowID ?? "unknown";
  const lastMessage = messages.at(-1);
  const message = typeof lastMessage?.content === "string" ? lastMessage.content : JSON.stringify(lastMessage?.content);

  // The whole submitted payload goes on the event, so the UI can render what a
  // job was asked to do without re-fetching the job itself.
  await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowStarted, workflowId, input: { message, location } }), {
    name: "workflow-started",
  });

  try {
    // Classify on a copy of the conversation — the orchestrator's own
    // reasoning is a private routing decision, not part of the persisted job.
    const orchestratorResult = await runAgent(
      jobId,
      workflowId,
      [...messages],
      OrchestratorAgent,
      "Classifying the input to decide which specialized agent should handle it",
    );
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

    // if (decision.agent === "provider_scrape") {
    //   const result = await runProviderScrape(jobId, workflowId, messages, location);
    //   text = result.text;
    // } else {
    //   // Runs on its own copy — its web_search/pagination tool-calling
    //   // transcript is only useful for finding the URLs, so it's not merged
    //   // into the caller's persisted conversation (same reasoning as
    //   // runProviderScrape's extraction step).
    //   const directoryResult = await runAgentLoop(jobId, workflowId, createDirectoryScrapeAgent(location), [...messages]);
    //   const { urls } = directoryResult.output as { urls: string[] };

    //   // Only the final answer becomes part of the persisted conversation, not
    //   // the raw tool-calling transcript that produced it.
    //   messages.push({ role: "assistant", content: directoryResult.text });

    //   await DBOS.runStep(
    //     () =>
    //       emit(jobId, {
    //         type: EventType.PlanCreated,
    //         workflowId,
    //         steps: urls.map((url, i) => ({ id: `${i}`, agent: PROVIDER_SCRAPE_PIPELINE_NAME, objective: url })),
    //       }),
    //     { name: "plan-created" },
    //   );

    //   // Each URL runs as its own durable child workflow, started concurrently
    //   // so they execute in parallel; a failed one doesn't sink the others.
    //   const handles = await Promise.all(
    //     urls.map((url) => DBOS.startWorkflow(runProviderScrapeWorkflow)(jobId, url, location)),
    //   );
    //   const results = await Promise.allSettled(handles.map((handle) => handle.getResult()));

    //   const providers = results.flatMap((result) =>
    //     result.status === "fulfilled"
    //       ? ((result.value.output as { providers?: unknown[] } | undefined)?.providers ?? [])
    //       : [],
    //   );

    //   text = JSON.stringify({ providers });
    // }

    const result = await runProviderScrape(jobId, workflowId, messages, location);
    text = result.text;

    await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowCompleted, workflowId, output: text }), {
      name: "workflow-completed",
    });

    await DBOS.runStep(() => saveJobResult(jobId, text, messages), { name: "job-result-saved" });

    return { text, messages };
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);

    await DBOS.runStep(() => emit(jobId, { type: EventType.WorkflowFailed, workflowId, error }), {
      name: "workflow-failed",
    });

    // Rethrow so DBOS records the workflow as failed — that record is now the
    // only place a job's failure is stored.
    throw err;
  }
}

export const runAgentWorkflow = DBOS.registerWorkflow(agentWorkflow, {
  name: "agentWorkflow",
});
