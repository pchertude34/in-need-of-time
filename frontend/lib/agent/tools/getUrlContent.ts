// getUrlContent.ts

import { z } from "zod";
import FirecrawlApp from "@mendable/firecrawl-js";
import { type ToolFn } from "../types";

const app = new FirecrawlApp({
  apiKey: process.env.FIRECRAWL_API_KEY,
});

export const getUrlContentToolDefinition = {
  name: "get_url_content",
  parameters: z.object({
    url: z.string().describe("The URL of the webpage to fetch content from"),
  }),
  description:
    "Fetches the content of a webpage and returns the text content. Only run this tool if the user enters a URL.",
};

type Args = z.infer<typeof getUrlContentToolDefinition.parameters>;

export const getUrlContent: ToolFn<Args, string> = async ({ toolArgs, userMessage }) => {
  try {
    const result = await app.scrape(toolArgs.url, {
      onlyMainContent: false,
      formats: [
        {
          type: "markdown",
        },
      ],
    });

    return result.markdown || "";
  } catch (err) {
    throw `Failed to fetch content from URL`;
  }
};
