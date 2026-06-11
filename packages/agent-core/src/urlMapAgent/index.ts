import { Agent } from "@openai/agents";
import { z } from "zod";
import { urlMapTool } from "../tools/urlMapTool";
import { systemPrompt } from "./prompt";
import { getServiceTypesTool } from "../tools/getServiceTypes";

export const urlMapAgent = new Agent({
  name: "URL Map Agent",
  instructions: systemPrompt,
  model: "gpt-5.5",
  tools: [urlMapTool, getServiceTypesTool],
});
