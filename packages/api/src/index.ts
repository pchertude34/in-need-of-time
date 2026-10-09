import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import type { WebSocketServer } from "ws";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { providerAgentRouter, attachProviderAgentWebSocket } from "./routes/providerAgent";
import { geocodeRouter } from "./routes/geocode";
import { authRouter } from "./routes/auth";
import { requireSession } from "./middleware/requireSession";
import { API_PORT, CORS_ALLOWED_ORIGINS, DATABASE_URL } from "./env";

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
  DBOS.setConfig({ name: "harness", systemDatabaseUrl: DATABASE_URL, adminPort: 3011 });
  await DBOS.launch();

  const app = express();
  app.use(cors({ origin: CORS_ALLOWED_ORIGINS }));
  app.use(express.json());

  // Open: the platform's health check runs before anything has a session, and
  // the response says nothing a caller couldn't learn by connecting at all.
  app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
  });

  // Open by definition — this is where a session comes from.
  app.use("/auth", authRouter);

  // Everything else is members-only. CORS is not an access control (browsers
  // honour it, `curl` doesn't); `requireSession` is.
  app.use("/provider-agent", requireSession, providerAgentRouter);
  app.use("/geocode", requireSession, geocodeRouter);

  server = createServer(app);
  wss = attachProviderAgentWebSocket(server);

  // listen() doesn't reject on bind failure (e.g. EADDRINUSE) — it emits an
  // async 'error' event instead — so wrap it in a promise the caller can await/catch.
  await new Promise<void>((resolve, reject) => {
    server!.once("error", reject);
    server!.listen(API_PORT, () => {
      console.log(`API listening on port ${API_PORT}`);
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
