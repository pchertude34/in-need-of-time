import { DBOS } from "@dbos-inc/dbos-sdk";
import { emit } from "../bus";
import { EventType } from "@in-need-of-time/types/agentEvents";
import { runProviderScrape, PROVIDER_SCRAPE_PIPELINE_NAME } from "../runtime";

// Runs the provider pipeline for a single URL as its own durable workflow, so
// a directory's fanned-out URLs can be started concurrently (see
// agentWorkflow) and each one is independently resumable if it crashes.
async function providerScrapeWorkflow(jobId: string, url: string) {
  const workflowId = DBOS.workflowID ?? "unknown";

  await DBOS.runStep(
    () =>
      emit(jobId, {
        type: EventType.SubagentStarted,
        workflowId,
        stepId: url,
        agent: PROVIDER_SCRAPE_PIPELINE_NAME,
        objective: url,
      }),
    { name: "subagent-started" },
  );

  try {
    const result = await runProviderScrape(jobId, workflowId, [{ role: "user", content: url }]);
    await DBOS.runStep(
      () =>
        emit(jobId, {
          type: EventType.SubagentCompleted,
          workflowId,
          stepId: url,
          agent: PROVIDER_SCRAPE_PIPELINE_NAME,
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
          agent: PROVIDER_SCRAPE_PIPELINE_NAME,
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
