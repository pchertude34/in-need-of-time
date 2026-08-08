import express from "express";
import { createServer } from "node:http";
import { WebSocketServer, type WebSocket } from "ws";
import { eq } from "drizzle-orm";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { subscribe, history, runAgentWorkflow } from "@in-need-of-time/agent-core";
import { db, agentJobsTable } from "@in-need-of-time/db";
import type { ModelMessage } from "ai";
import type { ClientMessage } from "@in-need-of-time/types/agentEvents";

const port = process.env.PORT ?? 4011;

let server: ReturnType<typeof createServer> | undefined;
let wss: WebSocketServer | undefined;

async function closeServer() {
  for (const client of wss?.clients ?? []) client.close();
  wss?.close();
  server?.close();
  try {
    await DBOS.shutdown();
  } catch (err) {
    console.error("Error shutting down DBOS:", err);
  }
}

async function main() {
  // adminPort must differ from the Express `port` below — DBOS's admin
  // server also defaults to 3001, which silently wins the port and makes
  // this app's own routes unreachable.
  DBOS.setConfig({ name: "harness", systemDatabaseUrl: process.env.DATABASE_URL, adminPort: 3011 });
  await DBOS.launch();

  const app = express();
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  server = createServer(app);
  wss = new WebSocketServer({ server, path: "/ws" });

  // subscribe((event) => {
  //   const data = JSON.stringify(event);
  //   for (const client of wss.clients) {
  //     if (client.readyState === client.OPEN) {
  //       client.send(data);
  //     }
  //   }
  // });

  wss.on("connection", async (socket: WebSocket, request) => {
    const requestedJobId = new URL(request.url ?? "", "http://localhost").searchParams.get("jobId") ?? undefined;

    let [agentJob] = requestedJobId
      ? await db.select().from(agentJobsTable).where(eq(agentJobsTable.jobId, requestedJobId))
      : [];

    if (!agentJob) {
      [agentJob] = await db
        .insert(agentJobsTable)
        .values({ ...(requestedJobId ? { jobId: requestedJobId } : {}), messages: [] })
        .returning();
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

  // listen() doesn't reject on bind failure (e.g. EADDRINUSE) — it emits an
  // async 'error' event instead — so wrap it in a promise the caller can await/catch.
  await new Promise<void>((resolve, reject) => {
    server!.once("error", reject);
    server!.listen(port, () => {
      console.log(`API listening on port ${port}`);
      resolve();
    });
  });

  // This can probably be removed, or only used when running locally
  // But this prevents dangling ports when the process is killed.
  let shuttingDown = false;
  async function shutdown(signal: NodeJS.Signals) {
    if (shuttingDown) return;
    shuttingDown = true;
    console.log(`Received ${signal}, shutting down...`);

    const forceExit = setTimeout(() => {
      console.error("Shutdown timed out, forcing exit");
      process.exit(1);
    }, 5000);

    await closeServer();

    clearTimeout(forceExit);
    process.exit(0);
  }

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

main().catch(async (err) => {
  console.error("Error starting the server:", err);
  await closeServer();
  process.exit(1);
});
