import { tool } from "ai";
import { z } from "zod";
import { createClient } from "@sanity/client";
import type { ServiceType } from "@in-need-of-time/types/sanity";

// const client = createClient({
//   projectId: process.env.SANITY_PROJECT_ID ?? "",
//   dataset: process.env.SANITY_DATASET ?? "",
//   apiVersion: "2023-06-01",
//   useCdn: false,
//   token: process.env.SANITY_API_TOKEN,
// });

export const tools = {
  fetchServiceTypes: tool({
    description: `Fetches a list of all of the service types supported by In Time of Need.`,
    inputSchema: z.object({}),
    // outputSchema: z.object({}),
    execute: async () => {
      console.log("Fetching service types from Sanity...");
      // const query = `*[_type == "serviceType"]{_id, name, description}`;
      // const serviceTypes = await client.fetch(query);
      const serviceTypes = [{ _id: "food_pantry", name: "Food Pantry", description: "Food for the community" }];
      return serviceTypes;
    },
  }),
};

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
