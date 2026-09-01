import { Router } from "express";
import type { Server } from "node:http";
import { WebSocketServer, type WebSocket } from "ws";
import { eq } from "drizzle-orm";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { subscribe, runAgentWorkflow, history } from "@in-need-of-time/agent-core";
import { db, agentJobsTable } from "@in-need-of-time/db";
import type { ModelMessage } from "ai";
import type { ClientMessage } from "@in-need-of-time/types/agentEvents";

const WS_PATH = "/provider-agent/ws";

export const providerAgentRouter = Router();

// POST /provider-agent/jobs — create a new job on the provider agent and return the
// job id to the client. Use the websocket endpoint to receive updates on the job's progress.
providerAgentRouter.post("/jobs", async (req, res) => {
  const { message } = req.body as { message: ClientMessage };
  const [agentJob] = await db.insert(agentJobsTable).values({ messages: [] }).returning();

  const messages: ModelMessage[] = [{ role: "user", content: message.input }];
  // Fire off the agent
  await DBOS.startWorkflow(runAgentWorkflow)(agentJob.jobId, messages);
  res.status(201).json({ jobId: agentJob.jobId });
});

// GET /provider-agent/jobs — fetch all jobs.
providerAgentRouter.get("/jobs", async (_req, res) => {
  const agentJobs = await db.select().from(agentJobsTable);
  res.json(agentJobs);
});

// GET /provider-agent/jobs/:jobId — fetch a job's current status/result, for
// polling clients or reconnecting after a dropped socket.
providerAgentRouter.get("/jobs/:jobId", async (req, res) => {
  const { jobId } = req.params;

  const [agentJob] = await db.select().from(agentJobsTable).where(eq(agentJobsTable.jobId, jobId));
  if (!agentJob) {
    res.status(404).json({ error: `Job ${jobId} not found` });
    return;
  }

  res.json(agentJob);
});

// Attaches the /provider-agent/ws websocket endpoint to the given HTTP
// server. Must be called after `createServer(app)` — `ws` upgrades the raw
// HTTP server's connections, it isn't an Express route.
export function attachProviderAgentWebSocket(server: Server) {
  const wss = new WebSocketServer({ server, path: WS_PATH });

  wss.on("connection", async (socket: WebSocket, request) => {
    const jobId = new URL(request.url ?? "", "http://localhost").searchParams.get("jobId");

    if (!jobId) {
      socket.send(JSON.stringify({ type: "error", message: "jobId query param is required" }));
      socket.close();
      return;
    }

    let [agentJob] = await db.select().from(agentJobsTable).where(eq(agentJobsTable.jobId, jobId));
    if (!agentJob) {
      socket.send(JSON.stringify({ type: "error", message: `Job ${jobId} not found` }));
      socket.close();
      return;
    }

    // Subscribe before reading history so an event emitted mid-query is
    // never dropped — worst case it's sent twice (once from history, once
    // live), never missed.
    const unsubscribe = subscribe((eventJobId, event) => {
      if (eventJobId === jobId && socket.readyState === socket.OPEN) {
        socket.send(JSON.stringify(event));
      }
    });

    socket.on("close", unsubscribe);

    const pastEvents = await history(jobId);
    console.log(pastEvents);
    for (const event of pastEvents) {
      socket.send(JSON.stringify(event));
    }

    socket.send(JSON.stringify({ type: "connected", jobId: agentJob.jobId }));

    socket.on("message", async (raw) => {
      let message: ClientMessage;
      try {
        message = JSON.parse(raw.toString());
        console.log("message received :>> ", message);
      } catch (err) {
        console.error("Failed to parse message:", err);
        return;
      }

      const messages: ModelMessage[] = [
        ...((agentJob.messages as any[]) || []),
        { role: "user", content: message.input },
      ];

      // Start the durable workflow in the background. It reports progress via
      // the event stream; we don't wait for the result here — but we do
      // attach to it so the conversation's history gets persisted once done.
      const agentResult = await DBOS.startWorkflow(runAgentWorkflow)(agentJob.jobId, messages);

      let result: any;
      try {
        result = await agentResult.getResult();
        await db
          .update(agentJobsTable)
          .set({ output: result.text, messages: result.messages, status: "COMPLETED" })
          .where(eq(agentJobsTable.jobId, agentJob.jobId));
        // Keep the connection-scoped job in sync so the next message on this
        // socket builds on this turn's history without re-fetching it.
        agentJob = { ...agentJob, messages: result.messages, output: result.text, status: "COMPLETED" };
      } catch (err) {
        await db
          .update(agentJobsTable)
          .set({ status: "FAILED", error: err instanceof Error ? err.message : String(err) })
          .where(eq(agentJobsTable.jobId, agentJob.jobId));
      }

      socket.send(JSON.stringify({ jobId: agentJob.jobId, result: result.text }));
    });
  });

  return wss;
}
