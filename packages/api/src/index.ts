import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import type { WebSocketServer } from "ws";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { providerAgentRouter, attachProviderAgentWebSocket } from "./routes/providerAgent";

const port = process.env.PORT ?? 4011;
// Defaults cover this repo's local dev servers: the Next.js frontend (3000)
// and the ai-provider-editor Sanity app (3333).
const allowedOrigins = (process.env.CORS_ALLOWED_ORIGINS ?? "http://localhost:3000,http://localhost:3333").split(",");

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
  app.use(cors({ origin: allowedOrigins }));
  app.use(express.json());

  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  app.use("/provider-agent", providerAgentRouter);

  server = createServer(app);
  wss = attachProviderAgentWebSocket(server);

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
