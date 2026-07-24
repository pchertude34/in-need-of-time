import { integer, text, timestamp, pgTable, varchar, jsonb, pgEnum, bigserial } from "drizzle-orm/pg-core";
import type { AgentEvent } from "@in-need-of-time/types/agentEvents";

export const statusEnum = pgEnum("status", ["PENDING", "COMPLETED", "FAILED"]);

export const agentAuditLogTable = pgTable("agent_audit_log", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
  user_id: varchar(),
  input: jsonb(),
  output: jsonb(),
  agent_messages: jsonb(),
  status: statusEnum().notNull().default("PENDING"),
  error: text(),
});

export const agentEventLog = pgTable("agent_event_log", {
  seq: bigserial("seq", { mode: "number" }).primaryKey(), // global order
  data: jsonb("data").$type<AgentEvent>().notNull(),
});
