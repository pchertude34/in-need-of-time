// A job as `GET /provider-agent/jobs` returns it: the row's own data plus a
// status derived from its DBOS workflow. The agent's `output` is deliberately
// not in the list response — it's far too large — and comes from
// `GET /provider-agent/jobs/:jobId` instead.
export type AgentJobStatus = "PENDING" | "COMPLETED" | "FAILED";

export type AgentJob = {
  jobId: string;
  timestamp: string;
  /** What the job was submitted with, e.g. the provider name and the state. */
  input: { message: string; location?: string };
  status: AgentJobStatus;
  error: string | null;
};
