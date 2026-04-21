CREATE TYPE "public"."status" AS ENUM('PENDING', 'COMPLETED', 'FAILED');--> statement-breakpoint
CREATE TABLE "agent_audit_log" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "agent_audit_log_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"user_id" varchar,
	"input" jsonb,
	"output" jsonb,
	"agent_messages" jsonb,
	"status" "status" DEFAULT 'PENDING' NOT NULL,
	"error" text
);
