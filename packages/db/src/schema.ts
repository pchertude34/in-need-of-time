import {
  integer,
  text,
  timestamp,
  pgTable,
  varchar,
  jsonb,
  pgEnum,
  bigserial,
  uuid,
  primaryKey,
} from "drizzle-orm/pg-core";
import type { AgentEvent } from "@in-need-of-time/types/agentEvents";

export const statusEnum = pgEnum("status", ["PENDING", "COMPLETED", "FAILED"]);

export const agentJobsTable = pgTable("agent_jobs", {
  jobId: uuid().primaryKey().defaultRandom(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
  user_id: varchar(),
  output: jsonb(),
  messages: jsonb(),
  status: statusEnum().notNull().default("PENDING"),
  error: text(),
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
