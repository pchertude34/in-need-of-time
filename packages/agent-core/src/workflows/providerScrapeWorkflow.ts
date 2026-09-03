import { DBOS } from "@dbos-inc/dbos-sdk";
import { emit } from "../bus";
import { EventType } from "@in-need-of-time/types/agentEvents";
import { runAgent, buildContext } from "./utils";
import { ModelMessage } from "ai";
import { createProviderResearchAgent, type ProviderResearchOutput } from "../agents/providerResearchAgent";
import { createProviderExtractAgent } from "../agents/providerExtractAgent";
import { ProviderFormatAgent } from "../agents/providerFormatAgent";

export const PROVIDER_SCRAPE_PIPELINE_NAME = "provider scrape";

// `location` is the state the job was scoped to, e.g. "Oregon". It's threaded
// down to the agents that search the web so their results are biased toward it.
export async function runProviderScrape(
  jobId: string,
  workflowId: string,
  messages: ModelMessage[],
  location?: string,
) {
  const research = await runAgent(
    jobId,
    workflowId,
    messages,
    createProviderResearchAgent(location),
    "Researching websites with information about this provider",
  );

  const { urls } = research.output as ProviderResearchOutput;
  console.log(
    "Provider research found URLs:",
    urls.map((u) => u.url),
  );
  const extractionContext = buildContext(
    messages,
    `Websites found by an earlier research step — investigate these along with anything else you find:\n${urls
      .map((u) => `- ${u.url} (${u.isThirdParty ? "third-party" : "provider's own site"})`)
      .join("\n")}`,
  );

  const providerInfo = await runAgent(
    jobId,
    workflowId,
    extractionContext,
    createProviderExtractAgent(location),
    "Extracting and vetting provider details from the researched websites",
  );

  console.log("Provider info extracted:", providerInfo.text);
  const formatContext = buildContext(extractionContext, providerInfo.text);
  const formattedProvider = await runAgent(
    jobId,
    workflowId,
    formatContext,
    ProviderFormatAgent,
    "Structuring the provider's details into the directory's schema",
  );

  return {
    text: formattedProvider.text,
    output: formattedProvider.output,
  };
}

// Runs the provider pipeline for a single URL as its own durable workflow, so
// a directory's fanned-out URLs can be started concurrently (see
// agentWorkflow) and each one is independently resumable if it crashes.
async function providerScrapeWorkflow(jobId: string, url: string, location?: string) {
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
    const result = await runProviderScrape(jobId, workflowId, [{ role: "user", content: url }], location);
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
