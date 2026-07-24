import { config } from "dotenv";
import { PageScrapeAgent } from "./agents";
import { runAgentTUI } from "@ai-sdk/tui";
import { registerTelemetry } from "ai";
import { DevToolsTelemetry } from "@ai-sdk/devtools";

registerTelemetry(DevToolsTelemetry());

config({ path: "../../.env.local" });
// const result = PageScrapeAgent.stream({
//   prompt: "What are the hours of westcoaststrength in Keizer oregon",
// });

await runAgentTUI({
  title: "Page Scrape Agent",
  agent: PageScrapeAgent,
});

// for await (const chunk of result) {
//   process.stdout.write(chunk.text);
// }

// console.log(result.text);
// console.log(result.steps);
