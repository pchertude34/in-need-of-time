import { randomUUID } from "node:crypto";
import express from "express";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { createServer } from "node:http";
import { WebSocketServer, type WebSocket } from "ws";
import { eq } from "drizzle-orm";
import { subscribe, history, runAgentWorkflow } from "@in-need-of-time/agent-core";
import { db, agentJobsTable } from "@in-need-of-time/db";
import type { ClientMessage } from "@in-need-of-time/types/agentEvents";
import type { ModelMessage } from "ai";

const port = process.env.PORT ?? 4011;

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

  const server = createServer(app);
  const wss = new WebSocketServer({ server, path: "/ws" });

  subscribe((event) => {
    const data = JSON.stringify(event);
    for (const client of wss.clients) {
      if (client.readyState === client.OPEN) {
        client.send(data);
      }
    }
  });

  wss.on("connection", async (socket: WebSocket) => {
    socket.on("message", async (raw) => {
      let message: ClientMessage;
      try {
        message = JSON.parse(raw.toString());
      } catch (err) {
        console.error("Failed to parse message:", err);
        return;
      }

      if (message.type === "submit_task") {
        let [agentJob] = message.jobId
          ? await db.select().from(agentJobsTable).where(eq(agentJobsTable.jobId, message.jobId))
          : [];

        if (!agentJob) {
          [agentJob] = await db
            .insert(agentJobsTable)
            .values({ ...(message.jobId ? { jobId: message.jobId } : {}), messages: [] })
            .returning();
        }

        let priorMessages: ModelMessage[] = [];
        // if (targetConversationId !== undefined) {
        //   const [existing] = await db
        //     .select()
        //     .from(agentAuditLogTable)
        //     .where(eq(agentAuditLogTable.id, targetConversationId));
        //   if (!existing) {
        //     socket.send(JSON.stringify({ type: "error", error: `No conversation found for conversationId ${targetConversationId}` }));
        //     return;
        //   }
        //   priorMessages = (existing.agent_messages as ModelMessage[] | null) ?? [];
        // }

        const messages: ModelMessage[] = [
          ...((agentJob.messages as any[]) || []),
          { role: "user", content: message.input },
        ];

        // const [log] = await db
        //   .insert(agentAuditLogTable)
        //   .values({ input: message.input, agent_messages: messages, status: "PENDING" })
        //   .returning();

        // conversationId = log.id;
        // socket.send(JSON.stringify({ type: "conversation", conversationId: log.id }));

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
        } catch (err) {
          await db
            .update(agentJobsTable)
            .set({ status: "FAILED", error: err instanceof Error ? err.message : String(err) })
            .where(eq(agentJobsTable.jobId, agentJob.jobId));
        }

        socket.send(JSON.stringify({ type: "workflow_result", jobId: agentJob.jobId, result }));
        // agentResult.getResult().then(
        //   async ({ text, messages: updatedMessages }) => {
        //     await db
        //       .update(agentJobsTable)
        //       .set({ output: text, messages: updatedMessages, status: "COMPLETED" })
        //       .where(eq(agentJobsTable.jobId, agentJob.jobId));
        //   },
        //   async (err) => {
        //     await db
        //       .update(agentJobsTable)
        //       .set({ status: "FAILED", error: err instanceof Error ? err.message : String(err) })
        //       .where(eq(agentJobsTable.jobId, agentJob.jobId));
        //   },
        // );
        // handle.getResult().then(
        //   async ({ text, messages: updatedMessages }) => {
        //     await db
        //       .update(agentAuditLogTable)
        //       .set({ output: text, agent_messages: updatedMessages, status: "COMPLETED" })
        //       .where(eq(agentAuditLogTable.id, log.id));
        //   },
        //   async (err) => {
        //     await db
        //       .update(agentAuditLogTable)
        //       .set({ status: "FAILED", error: err instanceof Error ? err.message : String(err) })
        //       .where(eq(agentAuditLogTable.id, log.id));
        //   },
        // );
      }
    });

    // for (const event of await history()) socket.send(JSON.stringify(event));
    // socket.send(JSON.stringify({}));
  });

  server.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
}

main().catch((err) => {
  console.error("Error starting the server:", err);
  process.exit(1);
});
