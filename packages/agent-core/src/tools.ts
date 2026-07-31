import { tool } from "ai";
import { z } from "zod";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "",
  dataset: process.env.SANITY_DATASET ?? "",
  apiVersion: "2023-06-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export const tools = {
  fetchServiceTypes: tool({
    description: `Fetches a list of all of the service types supported by In Time of Need.`,
    inputSchema: z.object({}),
    outputSchema: z.array(
      z.object({
        _id: z.string(),
        name: z.string().optional(),
        description: z.string().optional(),
      }),
    ),
    execute: async () => {
      const query = `*[_type == "serviceType"]{_id, name, description}`;
      const serviceTypes = await client.fetch(query);
      return serviceTypes;
    },
  }),
};

// I don't think I really need this
export async function runTool(name: string, args: Record<string, unknown>): Promise<Record<string, unknown>> {
  switch (name) {
    case "web_search":
      // Implement web search logic here
      return { result: "Web search results" };
    case "data_analysis":
      // Implement data analysis logic here
      return { result: "Data analysis results" };
    default:
      throw new Error(`Unknown tool: ${name}`);
  }
}
