// getUrlContent.ts
import axios from "axios";
import * as cheerio from "cheerio";
import { z } from "zod";
import { type ToolFn } from "../types";

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
    const response = await axios(toolArgs.url);
    const html = response.data;

    const $ = cheerio.load(html);
    $("script, style, noscript").remove(); // Remove non-content elements

    const text = $("body").text();
    const cleaned = text.replace(/\s+/g, " ").trim();

    return cleaned.slice(0, 5000); // Optional: limit response length
  } catch (err) {
    throw `Failed to fetch content from URL`;
  }
};
