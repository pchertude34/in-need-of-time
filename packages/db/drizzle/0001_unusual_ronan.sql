CREATE TABLE "event_log" (
	"seq" bigserial PRIMARY KEY NOT NULL,
	"data" jsonb NOT NULL
);
