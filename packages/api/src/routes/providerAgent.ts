import { Router } from "express";
import type { IncomingMessage, Server } from "node:http";
import { WebSocketServer, type WebSocket } from "ws";
import { subscribe, history, createJob, getJob, listJobs, deleteJob } from "@in-need-of-time/agent-core";
import { readSession } from "../auth/session";

const WS_PATH = "/provider-agent/ws";

/**
 * Subprotocol carrying the session token on a websocket connection.
 *
 * A browser can't set headers on `new WebSocket()`, so the token has to travel
 * some other way. `Sec-WebSocket-Protocol` is the one route that doesn't put a
 * credential in the URL, where it would land in every access log along the way.
 * The client offers `["bearer", "<token>"]`; the server echoes back "bearer".
 */
const WS_AUTH_PROTOCOL = "bearer";

export const providerAgentRouter = Router();

// POST /provider-agent/jobs — create a new job on the provider agent and return the
// job id to the client. Use the websocket endpoint to receive updates on the job's progress.
//
// Body: `{ input, location }`.
//   `input`    — what to research, e.g. a provider's name.
//   `location` — the full state name the search is scoped to, e.g. "Oregon". It
//                biases the agents' web searches toward that state.
//
// Who triggered the run comes from the session, not the body — the client can
// say what it likes about itself, but only the token decides who it is.
providerAgentRouter.post("/jobs", async (req, res) => {
  const { input, location } = req.body as {
    input: string;
    location?: string;
  };
  const agentJob = await createJob({ message: input, location }, req.user);

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

// DELETE /provider-agent/jobs/:jobId — permanently remove a job, its event
// timeline, and its DBOS run. A run still in progress is cancelled first.
providerAgentRouter.delete("/jobs/:jobId", async (req, res) => {
  const { jobId } = req.params;

  if (!(await deleteJob(jobId))) {
    res.status(404).json({ error: `Job ${jobId} not found` });
    return;
  }

  res.status(204).end();
});

// Attaches the /provider-agent/ws websocket endpoint to the given HTTP
// server. Must be called after `createServer(app)` — `ws` upgrades the raw
// HTTP server's connections, it isn't an Express route.
//
// The socket is one-way: it replays a job's timeline and streams what follows.
// Submitting work goes through POST /jobs, which starts one workflow per job —
// a second run on an existing job would be invisible to that job's run state.
export function attachProviderAgentWebSocket(server: Server) {
  // `noServer` rather than handing `ws` the server: the session has to be
  // checked *during* the upgrade, so an unauthenticated client is refused a
  // connection instead of being given one and told off over it.
  const wss = new WebSocketServer({
    noServer: true,
    handleProtocols: (protocols) => (protocols.has(WS_AUTH_PROTOCOL) ? WS_AUTH_PROTOCOL : false),
  });

  server.on("upgrade", async (request, socket, head) => {
    const { pathname } = new URL(request.url ?? "", "http://localhost");

    // This is the only websocket on the server, so anything else is a mistake.
    // Answering closes the socket rather than leaving the client hanging.
    if (pathname !== WS_PATH) {
      rejectUpgrade(socket, 404, "Not Found");
      return;
    }

    try {
      const token = readSocketToken(request);
      const user = token ? await readSession(token) : null;

      if (!user) {
        rejectUpgrade(socket, 401, "Unauthorized");
        return;
      }

      wss.handleUpgrade(request, socket, head, (ws) => wss.emit("connection", ws, request));
    } catch (error) {
      console.error("Error authenticating a websocket connection:", error);
      rejectUpgrade(socket, 500, "Internal Server Error");
    }
  });

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

/**
 * The session token a client offered as a websocket subprotocol.
 *
 * The header is a comma-separated list, and the client sends the marker first
 * so the token is unambiguously the second entry: `bearer, <token>`.
 */
function readSocketToken(request: IncomingMessage): string | null {
  const offered = (request.headers["sec-websocket-protocol"] ?? "").split(",").map((protocol) => protocol.trim());

  return offered[0] === WS_AUTH_PROTOCOL && offered[1] ? offered[1] : null;
}

/** Turns away an upgrade before the handshake completes. */
function rejectUpgrade(socket: { write: (data: string) => void; destroy: () => void }, status: number, reason: string) {
  socket.write(`HTTP/1.1 ${status} ${reason}\r\nConnection: close\r\n\r\n`);
  socket.destroy();
}
