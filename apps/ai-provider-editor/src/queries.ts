import { queryOptions } from "@tanstack/react-query";
import { SANITY_APP_PROVIDER_AGENT_API_URL } from "../env";
import type { AgentJob } from "./pages/AgentRuns/types";

// Every query's key starts here, so a mutation can invalidate one job's data or
// the whole agent-jobs cache without guessing at key shapes.
export const AGENT_JOBS_QUERY_KEY = ["agent-jobs"];

async function fetchAgentJobs(): Promise<AgentJob[]> {
  const response = await fetch(`${SANITY_APP_PROVIDER_AGENT_API_URL}/provider-agent/jobs`);

  if (!response.ok) {
    throw new Error(`Could not load runs: request failed with ${response.status}`);
  }

  return response.json();
}

/** Every job the provider agent has run, newest first. */
export function agentJobsQuery() {
  return queryOptions({ queryKey: AGENT_JOBS_QUERY_KEY, queryFn: fetchAgentJobs });
}

/** Permanently removes a job, its timeline, and its run. Cancels the run if it's still going. */
export async function deleteAgentJob(jobId: string) {
  const response = await fetch(`${SANITY_APP_PROVIDER_AGENT_API_URL}/provider-agent/jobs/${jobId}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error(`Could not delete run: request failed with ${response.status}`);
  }
}
