// import { config } from "dotenv";
// import { runAgentTUI } from "@ai-sdk/tui";
// import { registerTelemetry } from "ai";
// import { DevToolsTelemetry } from "@ai-sdk/devtools";
// import { DBOS } from "@dbos-inc/dbos-sdk";
// import { runAgentWorkflow } from "./runtime";

// registerTelemetry(DevToolsTelemetry());

// config({ path: "../../.env.local" });

// Loaded after `config()` so `./agents` (via `./bus`) sees DATABASE_URL:
// static imports evaluate before this module's own body runs.
// Registers pageScrapeAgentWorkflow with DBOS as a side effect of import;
// must happen before DBOS.launch().
// await import("./runtime");

// DBOS.setConfig({ name: "harness", systemDatabaseUrl: process.env.DATABASE_URL });
// await DBOS.launch();

// await DBOS.startWorkflow(runAgentWorkflow)({ workflowId: "b9ddcf72-c89e-4c5e-a0d2-95504f66a644" });

export { runAgentWorkflow } from "./workflows/agentWorkflow";
export { subscribe, history } from "./bus";
