// getUrlContent.ts
import axios from "axios";
import * as cheerio from "cheerio";
import { z } from "zod";
import { type ToolFn } from "../types";
import FirecrawlApp from "@mendable/firecrawl-js";

const app = new FirecrawlApp({
  apiKey: "fc-de60073bc9ff46fbaf4982fc716c806d",
});

export const getUrlContentToolDefinition = {
  name: "get_url_content",
  parameters: z.object({
    url: z.string().describe("The URL of the webpage to fetch content from"),
  }),
  description:
    "Fetches the content of a webpage and returns the text content. Only run this tool if the user enters a URL.",
};

const schema = z.object({
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
});

type Args = z.infer<typeof getUrlContentToolDefinition.parameters>;

export const getUrlContent: ToolFn<Args, string> = async ({ toolArgs, userMessage }) => {
  try {
    const result = await app.scrape(toolArgs.url, {
      onlyMainContent: false,

      formats: [
        {
          type: "json",
          prompt: userMessage,
          schema,
        },
      ],
    });

    console.log("result :>> ", result);

    return result.json ? JSON.stringify(result.json, null, 2) : "No structured data found.";
    // const response = await axios(toolArgs.url);
    // const html = response.data;

    // const $ = cheerio.load(html);
    // $("script, style, noscript").remove(); // Remove non-content elements

    // console.log('$("body") :>> ', $("body").html());

    // return $("body").html() || "";

    // const text = $("body").text();
    // const cleaned = text.replace(/\s+/g, " ").trim();

    // return cleaned.slice(0, 5000); // Optional: limit response length
  } catch (err) {
    throw `Failed to fetch content from URL`;
  }
};
