import express from "express";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { createServer } from "node:http";
import { WebSocketServer, type WebSocket } from "ws";
import { subscribe, history, runAgentWorkflow } from "@in-need-of-time/agent-core";
import type { ClientMessage } from "@in-need-of-time/types/agentEvents";

const port = process.env.PORT ?? 4000;

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
        // Start the durable workflow in the background. It reports progress via
        // the event stream; we don't wait for the result here.
        await DBOS.startWorkflow(runAgentWorkflow)(message.input);
      }
    });

    for (const event of await history()) socket.send(JSON.stringify(event));
  });

  // app.post("/agent", async (req, res) => {
  //   const { input } = req.body as { input?: string };
  //   console.log("Received request to start agent workflow with input:", input);
  //   if (!input) {
  //     return res.status(400).json({ error: "Missing 'input' in request body" });
  //   }

  //   const workflowId = DBOS.workflowID || "unknown";
  //   await DBOS.startWorkflow(runAgentWorkflow, { workflowID: workflowId })(input, workflowId);
  //   // const output = await handle.getResult();

  //   // res.json({ workflowId, output });
  //   res.send("cool");
  // });

  server.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
}

main().catch((err) => {
  console.error("Error starting the server:", err);
  process.exit(1);
});
