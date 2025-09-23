import { runLLM } from "./llm";
import { runTool } from "./toolRunner";
import { AIMessage } from "./types";
import { getUrlContentToolDefinition } from "./tools/getUrlContent";
import { getServiceTypesToolDefinition } from "./tools/getServiceTypes";

type RunAgentArgs = {
  userMessage: string;
  // tools: any[];
};

const tools = [getUrlContentToolDefinition, getServiceTypesToolDefinition];

export async function runAgent(args: RunAgentArgs) {
  const { userMessage } = args;

  // Add the initial user message to the messages array
  const messages: AIMessage[] = [{ role: "user", content: userMessage }];

  // Continue to run the agent until we get a response
  while (true) {
    // console.log("messages :>> ", messages);
    const response = await runLLM({ messages, tools });
    messages.push(response);

    // The agent responded with a message. Exit the loop and return the message.
    if (response.content) {
      return response;
    }

    // If a tool call was made, run the tool
    if (response.tool_calls) {
      const toolCall = response.tool_calls[0];
      console.log("response.tool_calls :>> ", response.tool_calls);
      try {
        const toolResposne = await runTool(toolCall, userMessage);
        // The agent requires us to respond with a tool response and a tool_call_id that matches the tool call id
        // from the first response from the agent (after the user message).

        console.log({ role: "tool", tool_call_id: toolCall.id });
        messages.push({ role: "tool", content: toolResposne, tool_call_id: toolCall.id });
      } catch (error: any) {
        console.log("error :>> ", error);
        throw error;
      }
    }
  }
}
