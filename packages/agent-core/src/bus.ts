import { randomUUID } from "node:crypto";
import { db, agentEventLog } from "@in-need-of-time/db";
import type { AgentEvent, EventInput } from "@in-need-of-time/types/agentEvents";

// The harness event bus. Two jobs now:
//   1. DURABLY persist every event to Postgres (so the timeline survives a crash)
//   2. broadcast it live to any connected inspector
//
// `emit` is async now — we write to the database before we hand the event out.

type Listener = (jobId: string, event: AgentEvent) => void;
const listeners = new Set<Listener>();

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export async function emit(jobId: string, input: EventInput, store: boolean = true): Promise<void> {
  const event: AgentEvent = { ...input, id: randomUUID(), ts: Date.now() };
  if (store) {
    await db.insert(agentEventLog).values({ jobId, data: event }); // durable, ordered by `seq`
  }
  for (const listener of listeners) listener(jobId, event); // live
}

// The full timeline so far, in order — read back from Postgres on every connect.
export async function history(): Promise<AgentEvent[]> {
  const rows = await db.select().from(agentEventLog).orderBy(agentEventLog.seq);
  return rows.map((row) => row.data);
}
