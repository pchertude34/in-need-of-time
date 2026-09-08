import { DBOS } from "@dbos-inc/dbos-sdk";
import { eq, desc } from "drizzle-orm";
import { db, agentJobsTable } from "@in-need-of-time/db";
import { runAgentWorkflow } from "./workflows/agentWorkflow";
import type { ModelMessage } from "ai";
import type { WorkflowStatus } from "@dbos-inc/dbos-sdk";

// DBOS has more run states than a reader of the job list cares about. Anything
// still on its way through the system reads as PENDING; anything that stopped
// short of succeeding reads as FAILED.
const JOB_STATUS_BY_WORKFLOW_STATUS: Record<string, AgentJobStatus> = {
  ENQUEUED: "PENDING",
  PENDING: "PENDING",
  DELAYED: "PENDING",
  SUCCESS: "COMPLETED",
  ERROR: "FAILED",
  CANCELLED: "FAILED",
  MAX_RECOVERY_ATTEMPTS_EXCEEDED: "FAILED",
};

export type AgentJobStatus = "PENDING" | "COMPLETED" | "FAILED";

/** What a job was submitted with. Stored as-is on the row and echoed back to clients. */
export type AgentJobInput = {
  message: string;
  location?: string;
};

/**
 * Who triggered a run, as reported by the Sanity app that submitted it.
 *
 * Nothing verifies this — the API has no auth, so it's the client's word. It's
 * here to answer "who ran this?" among colleagues, not to be relied on as proof.
 */
export type AgentJobUser = {
  id: string;
  name?: string;
  profileImage?: string;
};

export type AgentJobSummary = {
  jobId: string;
  timestamp: Date;
  input: AgentJobInput;
  user: AgentJobUser | null;
  /** Derived from the job's DBOS workflow, not stored on the row. */
  status: AgentJobStatus;
  error: string | null;
};

/** A single job, with the agent's result. Kept out of list responses, where it would dominate the payload. */
export type AgentJob = AgentJobSummary & {
  output: unknown;
};

// DBOS records a workflow's error as whatever was thrown, serialized.
function toErrorMessage(error: unknown): string | null {
  if (!error) {
    return null;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return typeof error === "string" ? error : JSON.stringify(error);
}

function toJobStatus(workflow?: WorkflowStatus): AgentJobStatus {
  // A job with no workflow yet was inserted a moment ago, or its start didn't
  // survive a crash — either way it isn't finished.
  if (!workflow) {
    return "PENDING";
  }

  return JOB_STATUS_BY_WORKFLOW_STATUS[workflow.status] ?? "PENDING";
}

function toAgentJobSummary(
  row: { jobId: string; timestamp: Date; input: unknown; user: unknown },
  workflow?: WorkflowStatus,
): AgentJobSummary {
  return {
    jobId: row.jobId,
    timestamp: row.timestamp,
    input: row.input as AgentJobInput,
    user: (row.user as AgentJobUser | null) ?? null,
    status: toJobStatus(workflow),
    error: toErrorMessage(workflow?.error),
  };
}

/**
 * Creates a job and starts its agent run.
 *
 * The workflow takes the job's own id, which is what lets a job's run state be
 * read straight off DBOS instead of mirrored onto the row. It also makes the
 * run idempotent per job: starting the same job twice returns the first run
 * rather than beginning a second.
 */
export async function createJob(input: AgentJobInput, user?: AgentJobUser): Promise<AgentJobSummary> {
  const [row] = await db
    .insert(agentJobsTable)
    .values({ input, user: user ?? null })
    .returning();
  const messages: ModelMessage[] = [{ role: "user", content: input.message }];

  await DBOS.startWorkflow(runAgentWorkflow, { workflowID: row.jobId })(row.jobId, messages, input.location);

  return toAgentJobSummary(row);
}

export async function listJobs(): Promise<AgentJobSummary[]> {
  const rows = await db
    .select({
      jobId: agentJobsTable.jobId,
      timestamp: agentJobsTable.timestamp,
      input: agentJobsTable.input,
      user: agentJobsTable.user,
    })
    .from(agentJobsTable)
    .orderBy(desc(agentJobsTable.timestamp));

  if (rows.length === 0) {
    return [];
  }

  // One query for every job's run state, rather than one per row.
  const workflows = await DBOS.listWorkflows({ workflowIDs: rows.map((row) => row.jobId) });
  const workflowsById = new Map(workflows.map((workflow) => [workflow.workflowID, workflow]));

  return rows.map((row) => toAgentJobSummary(row, workflowsById.get(row.jobId)));
}

// A job's run lives in DBOS, so removing the row isn't enough — the workflow
// record would outlive it, and a still-running agent would keep working on a
// job nobody can see. A job whose workflow never started, or was already
// removed, still deletes.
async function removeWorkflow(jobId: string) {
  try {
    await DBOS.cancelWorkflow(jobId, { cancelChildren: true });
    await DBOS.deleteWorkflow(jobId, true);
  } catch (err) {
    console.warn(`Could not remove workflow ${jobId}:`, err);
  }
}

/** Deletes a job, its DBOS run, and its event log. Returns false if there was no such job. */
export async function deleteJob(jobId: string): Promise<boolean> {
  await removeWorkflow(jobId);

  // The event log cascades from this row's foreign key.
  const deleted = await db.delete(agentJobsTable).where(eq(agentJobsTable.jobId, jobId)).returning();

  return deleted.length > 0;
}

export async function getJob(jobId: string): Promise<AgentJob | undefined> {
  const [row] = await db.select().from(agentJobsTable).where(eq(agentJobsTable.jobId, jobId));

  if (!row) {
    return undefined;
  }

  const workflow = (await DBOS.getWorkflowStatus(jobId)) ?? undefined;

  return { ...toAgentJobSummary(row, workflow), output: row.output };
}
