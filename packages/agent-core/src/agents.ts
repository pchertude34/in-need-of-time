import { ToolSet, ToolLoopAgent } from "ai";
import { openai } from "@ai-sdk/openai";

export type Agent = {
  name: string;
  systemPrompt: string;
  tools: ToolSet;
};

export const PageScrapeAgent = new ToolLoopAgent({
  model: openai("gpt-4o-mini"),
  instructions: "You are a helpful agent",
  tools: {},
});
