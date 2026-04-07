import { integer, text, timestamp, pgTable, varchar, jsonb, pgEnum } from "drizzle-orm/pg-core";

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
