import { integer, text, timestamp, pgTable, varchar, jsonb, bigserial, uuid, primaryKey } from "drizzle-orm/pg-core";
import type { AgentEvent } from "@in-need-of-time/types/agentEvents";

// A read model for a job's application data. Its run state — status, error,
// timing — is DBOS's, derived from the workflow whose id is this `jobId`, so
// there's nothing here to keep in sync with it.
export const agentJobsTable = pgTable("agent_jobs", {
  jobId: uuid().primaryKey().defaultRandom(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
  user_id: varchar(),
  output: jsonb(),
  messages: jsonb(),
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
