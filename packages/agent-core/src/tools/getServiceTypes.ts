import { tool } from "@openai/agents";
import { z } from "zod";

export const getServiceTypesTool = tool({
  name: "get_service_types",
  description: "Returns a list of service types that we can use to categorize the services offered by a business.",
  parameters: z.object({}),
  async execute() {
    console.log("Executing getServiceTypesTool");
    return ["Health", "Education", "Finance", "Legal", "Transportation"];
  },
});
