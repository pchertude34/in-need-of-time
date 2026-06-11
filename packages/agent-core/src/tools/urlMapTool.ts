import { tool } from "@openai/agents";
import { Firecrawl } from "firecrawl";
import { z } from "zod";

export const urlMapTool = tool({
  name: "url_map",
  description:
    "From a given URL, return a list of discovered URLs that may contain relevant information about the business.",
  parameters: z.object({
    url: z.string(),
  }),
  async execute({ url }) {
    const firecrawl = new Firecrawl({
      apiKey: process.env.FIRECRAWL_API_KEY || "",
    });
    const site = await firecrawl.crawl(url, {
      limit: 10,
      scrapeOptions: {
        formats: ["markdown"],
        onlyMainContent: true,
      },
    });

    // console.log(site);
    return site;
  },
});
