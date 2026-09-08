import { Router } from "express";
import type { Server } from "node:http";
import { WebSocketServer, type WebSocket } from "ws";
import { subscribe, history, createJob, getJob, listJobs } from "@in-need-of-time/agent-core";
import type { AgentJobUser } from "@in-need-of-time/agent-core";
import type { ClientMessage } from "@in-need-of-time/types/agentEvents";

const WS_PATH = "/provider-agent/ws";

export const providerAgentRouter = Router();

// POST /provider-agent/jobs — create a new job on the provider agent and return the
// job id to the client. Use the websocket endpoint to receive updates on the job's progress.
//
// `location` is the full state name the search is scoped to, e.g. "Oregon" — it
// biases the agents' web searches toward that state.
//
// `user` is who the client says triggered the run. There's no auth on this API,
// so it's recorded as reported, not verified.
providerAgentRouter.post("/jobs", async (req, res) => {
  const { message, location, user } = req.body as {
    message: ClientMessage;
    location?: string;
    user?: AgentJobUser;
  };
  const agentJob = await createJob({ message: message.input, location }, user);

  res.status(201).json({ jobId: agentJob.jobId });
});

// GET /provider-agent/jobs — fetch all jobs.
providerAgentRouter.get("/jobs", async (_req, res) => {
  res.json(await listJobs());
});

// GET /provider-agent/jobs/:jobId — fetch a job's current status/result, for
// polling clients or reconnecting after a dropped socket.
providerAgentRouter.get("/jobs/:jobId", async (req, res) => {
  const { jobId } = req.params;
  const agentJob = await getJob(jobId);

  if (!agentJob) {
    res.status(404).json({ error: `Job ${jobId} not found` });
    return;
  }

  res.json(agentJob);
});

// Attaches the /provider-agent/ws websocket endpoint to the given HTTP
// server. Must be called after `createServer(app)` — `ws` upgrades the raw
// HTTP server's connections, it isn't an Express route.
//
// The socket is one-way: it replays a job's timeline and streams what follows.
// Submitting work goes through POST /jobs, which starts one workflow per job —
// a second run on an existing job would be invisible to that job's run state.
export function attachProviderAgentWebSocket(server: Server) {
  const wss = new WebSocketServer({ server, path: WS_PATH });

  wss.on("connection", async (socket: WebSocket, request) => {
    const jobId = new URL(request.url ?? "", "http://localhost").searchParams.get("jobId");

    if (!jobId) {
      socket.send(JSON.stringify({ type: "error", message: "jobId query param is required" }));
      socket.close();
      return;
    }

    const agentJob = await getJob(jobId);
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
    for (const event of pastEvents) {
      socket.send(JSON.stringify(event));
    }

    socket.send(JSON.stringify({ type: "connected", jobId: agentJob.jobId }));
  });

  return wss;
}
