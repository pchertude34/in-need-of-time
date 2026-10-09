import { integer, text, timestamp, pgTable, jsonb, bigserial, uuid, primaryKey } from "drizzle-orm/pg-core";
import type { AgentEvent } from "@in-need-of-time/types/agentEvents";

// A read model for a job's application data. Its run state — status, error,
// timing — is DBOS's, derived from the workflow whose id is this `jobId`, so
// there's nothing here to keep in sync with it.
export const agentJobsTable = pgTable("agent_jobs", {
  jobId: uuid().primaryKey().defaultRandom(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
  // Who triggered the run, denormalized from Sanity: `{ id, name, profileImage }`.
  // Stored rather than looked up so the runs list needs no per-row fetch — the
  // cost is that a name here is the one they had when the job ran.
  user: jsonb(),
  // What the user submitted, e.g. `{ message, location }`. Untyped for the same
  // reason the `workflow.started` event's input is: each agent decides its own
  // input shape, and this column holds all of them.
  input: jsonb(),
  output: jsonb(),
});

export const agentEventLog = pgTable(
  "agent_event_log",
  {
    jobId: uuid()
      .notNull()
      .references(() => agentJobsTable.jobId, { onDelete: "cascade" }),
    seq: bigserial("seq", { mode: "number" }).notNull(), // per-job order
    data: jsonb("data").$type<AgentEvent>().notNull(),
  },
  (table) => [primaryKey({ columns: [table.jobId, table.seq] })],
);
