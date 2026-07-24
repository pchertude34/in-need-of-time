import { DBOS } from "@dbos-inc/dbos-sdk";
import { createAgent } from "./agents";
import { runAgentTUI } from "@ai-sdk/tui";

async function agentWorkflow({ input, workflowId }: { input?: string; workflowId: string }) {
  const PageScrapeAgent = createAgent(workflowId);

  await runAgentTUI({
    title: "Page Scrape Agent",
    agent: PageScrapeAgent,
  });
}

export const runAgentWorkflow = DBOS.registerWorkflow(agentWorkflow, {
  name: "agentWorkflow",
});
