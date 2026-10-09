// A job as `GET /provider-agent/jobs` returns it: the row's own data plus a
// status derived from its DBOS workflow. The agent's `output` is deliberately
// not in the list response — it's far too large — and comes from
// `GET /provider-agent/jobs/:jobId` instead.
export type AgentJobStatus = "PENDING" | "COMPLETED" | "FAILED";

export type AgentJob = {
  jobId: string;
  timestamp: string;
  /**
   * What the job was submitted with. Null for runs created before the column
   * existed, so treat it as missing rather than assuming it's there.
   */
  input: { message?: string; location?: string } | null;
  /** Who triggered the run, as reported by the client that submitted it. */
  user: { id: string; name?: string; profileImage?: string } | null;
  status: AgentJobStatus;
  error: string | null;
};
