import { Agent, run, tool } from "@openai/agents";
import { z } from "zod";
import { getUrlContentTool } from "./tools/getUrlContent";
import { urlMapTool } from "./tools/urlMapTool";
import { urlMapAgent } from "./urlMapAgent";

const historyFunFact = tool({
  name: "history_fun_fact",
  description: "Returna a short history fact.",
  parameters: z.object({}),
  async execute() {
    return "Sharks are older than trees";
  },
});

const agent = new Agent({
  name: "History tutor",
  instructions: "You answer history questions clearly and concisely.",
  model: "gpt-5.5",
  tools: [historyFunFact, urlMapTool],
});

const result = await run(
  urlMapAgent,
  "Fetch a map of the relevant urls from https://cascadiahealth.org/health-centers/",
);

console.log(result.finalOutput);
