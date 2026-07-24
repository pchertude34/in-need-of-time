import { ToolSet, ToolLoopAgent } from "ai";
import { openai } from "@ai-sdk/openai";
import { anthropic } from "@ai-sdk/anthropic";

export type Agent = {
  name: string;
  systemPrompt: string;
  tools: ToolSet;
};

export const PageScrapeAgent = new ToolLoopAgent({
  model: openai("gpt-5"),
  instructions: "You are a helpful agent",
  tools: { web_search: openai.tools.webSearch({}) },
});
