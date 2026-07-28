import { randomUUID } from "node:crypto";
import express from "express";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { subscribe, runAgentWorkflow } from "@in-need-of-time/agent-core";

const port = process.env.PORT ?? 3001;

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

  app.post("/agent", async (req, res) => {
    const { input } = req.body as { input?: string };
    if (!input) {
      return res.status(400).json({ error: "Missing 'input' in request body" });
    }

    const workflowId = DBOS.workflowID;
    const handle = await DBOS.startWorkflow(runAgentWorkflow, { workflowID: workflowId })(input, workflowId);
    const output = await handle.getResult();

    res.json({ workflowId, output });
  });

  app.listen(port, () => {
    console.log(`API listening on port ${port}`);
  });
}

main().catch((err) => {
  console.error("Error starting the server:", err);
  process.exit(1);
});
