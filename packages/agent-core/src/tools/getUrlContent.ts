import { tool } from "@openai/agents";
import { z } from "zod";

export const getUrlContentTool = tool({
  name: "get_url_content",
  description: "Fetches the content of a URL.",
  parameters: z.object({
    url: z.string(),
  }),
  async execute({ url }) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch URL: ${response.status} ${response.statusText}`);
      }
      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        return await response.json();
      } else {
        return await response.text();
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error occurred while fetching URL content";
      throw new Error(`Error fetching URL content: ${message}`);
    }
  },
});
