import type { ToolSet } from "ai";
import type { openai } from "@ai-sdk/openai";

export type Agent = {
  name: string;
  model: ReturnType<typeof openai>;
  systemPrompt: string;
  tools: ToolSet;
  output?: any;
};
