// A row of `agent_jobs` as `GET /provider-agent/jobs` returns it. Only the
// fields the table renders are declared — the endpoint also returns the job's
// `messages` and `output`, which are far too large to belong in a list view.
export type AgentJobStatus = "PENDING" | "COMPLETED" | "FAILED";

export type AgentJob = {
  jobId: string;
  timestamp: string;
  status: AgentJobStatus;
  error: string | null;
};
