import { tool } from "ai";
import { z } from "zod";
import { createClient } from "@sanity/client";
import Firecrawl from "firecrawl";

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "",
  dataset: process.env.SANITY_DATASET ?? "",
  apiVersion: "2023-06-01",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

const firecrawl = new Firecrawl(process.env.FIRECRAWL_API_KEY);

type ServiceType = { _id: string; name?: string; description?: string };

// Service types rarely change, but ProviderScrapeAgent calls this once per
// fanned-out URL — without caching, that's a repeated Sanity fetch (and the
// full list re-billed as tokens) for every provider in a directory. A short
// TTL keeps Studio edits from taking too long to show up without refetching
// on every single call.
const SERVICE_TYPES_CACHE_TTL_MS = 30 * 60 * 1000;
let serviceTypesCache: { data: ServiceType[]; fetchedAt: number } | null = null;

async function getServiceTypes(): Promise<ServiceType[]> {
  if (serviceTypesCache && Date.now() - serviceTypesCache.fetchedAt < SERVICE_TYPES_CACHE_TTL_MS) {
    return serviceTypesCache.data;
  }
  // const query = `*[_type == "serviceType"]{_id, name, description}`;
  // const data: ServiceType[] = await client.fetch(query);
  // serviceTypesCache = { data, fetchedAt: Date.now() };
  return [
    {
      _id: "food",
      name: "Food Assistance",
      description: "Food banks, meal programs, and other food assistance services.",
    },
    {
      _id: "shelter",
      name: "Shelter",
      description: "Emergency shelters, transitional housing, and other shelter services.",
    },
    {
      _id: "clothing",
      name: "Clothing Assistance",
      description: "Free clothing programs and clothing assistance services.",
    },
    {
      _id: "healthcare",
      name: "Healthcare Services",
      description: "Health clinics, medical services, and other healthcare assistance.",
    },
    { _id: "legal", name: "Legal Aid", description: "Legal aid services for individuals in need." },
  ];
}

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
    execute: getServiceTypes,
  }),
  fetchUrlContent: tool({
    description: `Fetches the markdown content of exactly the given URL. Does not search the web or visit any other page.`,
    inputSchema: z.object({ url: z.string().describe("The exact URL to fetch.") }),
    outputSchema: z.object({
      markdown: z.string().nullable().describe("The page's content as markdown, or null if it couldn't be fetched."),
    }),
    execute: async ({ url }) => {
      // TEMP: mocked out to isolate fetchServiceTypes' context-window impact.
      // const doc = await firecrawl.scrape(url, { formats: ["markdown"] });
      // return { markdown: doc.markdown ?? null };
      return { markdown: `# Test Provider\n\nA food bank at ${url}. Open Mon-Fri 9-5. Call 555-1234.` };
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
