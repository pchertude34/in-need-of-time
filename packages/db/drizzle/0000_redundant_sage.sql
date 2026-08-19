CREATE TYPE "public"."status" AS ENUM('PENDING', 'COMPLETED', 'FAILED');--> statement-breakpoint
CREATE TABLE "agent_event_log" (
	"jobId" uuid NOT NULL,
	"seq" bigserial NOT NULL,
	"data" jsonb NOT NULL,
	CONSTRAINT "agent_event_log_jobId_seq_pk" PRIMARY KEY("jobId","seq")
);
--> statement-breakpoint
CREATE TABLE "agent_jobs" (
	"jobId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"timestamp" timestamp DEFAULT now() NOT NULL,
	"user_id" varchar,
	"output" jsonb,
	"messages" jsonb,
	"status" "status" DEFAULT 'PENDING' NOT NULL,
	"error" text
);
--> statement-breakpoint
ALTER TABLE "agent_event_log" ADD CONSTRAINT "agent_event_log_jobId_agent_jobs_jobId_fk" FOREIGN KEY ("jobId") REFERENCES "public"."agent_jobs"("jobId") ON DELETE cascade ON UPDATE no action;