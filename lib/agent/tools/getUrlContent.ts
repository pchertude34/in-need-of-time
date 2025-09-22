// getUrlContent.ts

import { z } from "zod";
import { type ToolFn } from "../types";
import FirecrawlApp from "@mendable/firecrawl-js";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

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

const schema = z.array(
  z.object({
    name: z.string(),
    description: z.array(
      z.object({
        _type: z.literal("block"),
        children: z.array(
          z.object({
            _type: z.literal("span"),
            text: z.string(),
          }),
        ),
        markDefs: z.array(z.any()),
        style: z.string(),
      }),
    ),
    address: z.string().optional(),
    location: z
      .object({
        latitude: z.number(),
        longitude: z.number(),
      })
      .optional(),
    hoursOfOperation: z
      .object({
        periods: z.array(
          z.object({
            open: z.object({
              day: z.number(),
              time: z.string(),
            }),
            close: z.object({
              day: z.number(),
              time: z.string(),
            }),
          }),
        ),
        weekdayText: z.array(z.string()),
      })
      .optional(),
    contact: z
      .object({
        phone: z.string().optional(),
        email: z.string().optional(),
        website: z.string().optional(),
      })
      .optional(),
  }),
);

type Args = z.infer<typeof getUrlContentToolDefinition.parameters>;

export const getUrlContent: ToolFn<Args, string> = async ({ toolArgs, userMessage }) => {
  try {
    console.log("running getUrlContent tool with URL:", toolArgs.url);
    const result = await app.scrape(toolArgs.url, {
      onlyMainContent: false,
      formats: [
        {
          type: "markdown",
          // prompt: userMessage,
          // schema,
        },
      ],
    });

    return result.markdown || "";
  } catch (err) {
    throw `Failed to fetch content from URL`;
  }
};
