import type OpenAI from "openai";
import { getUrlContent, getUrlContentToolDefinition } from "./tools/getUrlContent";
import { getServiceTypes, getServiceTypesToolDefinition } from "./tools/getServiceTypes";

export const runTool = async (toolCall: OpenAI.Chat.Completions.ChatCompletionMessageToolCall, userMessage: string) => {
  const input = {
    userMessage,
    toolArgs: JSON.parse(toolCall.function.arguments || "{}"),
  };

  switch (toolCall.function.name) {
    case getUrlContentToolDefinition.name:
      return getUrlContent(input);
    case getServiceTypesToolDefinition.name:
      return getServiceTypes(input);
    default:
      throw new Error(`Tool ${toolCall.function.name} not found`);
  }
};
