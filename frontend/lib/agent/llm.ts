import { openai } from "./ai";
import { zodFunction, zodResponseFormat } from "openai/helpers/zod";
import { systemPrompt as defaultSystemPrompt } from "./systemPrompt";
import type { AIMessage } from "./types";
import { z } from "zod";

type RunLLMArgs = {
  messages: AIMessage[];
  tools?: any[];
  temperature?: number;
  systemPrompt?: string;
};

export async function runLLM(args: RunLLMArgs) {
  const { messages, tools = [], temperature = 0.1, systemPrompt } = args;

  const formattedTools = tools.map(zodFunction);

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    temperature,
    messages: [{ role: "system", content: systemPrompt || defaultSystemPrompt }, ...messages],
    ...(formattedTools.length > 0 && {
      tools: formattedTools,
      tool_choice: "auto",
      parallel_tool_calls: false,
    }),
  });

  return response.choices[0].message;
}
