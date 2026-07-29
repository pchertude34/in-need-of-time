import { ToolSet } from "ai";

export type Agent = {
  name: string;
  systemPrompt: string;
  tools: ToolSet;
};
