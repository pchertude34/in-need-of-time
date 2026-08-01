import { Output } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { tools } from "./tools";
import type { Agent } from "./types";

const portableTextBlockSchema = z.object({
  _type: z.literal("block"),
  children: z.array(
    z.object({
      _type: z.literal("span"),
      text: z.string(),
    }),
  ),
  markDefs: z.array(z.object({ _key: z.string(), _type: z.string() })),
  style: z.string(),
});

const providerScrapeOutputSchema = z.object({
  providers: z
    .array(
      z.object({
        name: z.string().describe("The provider's name, as written on the page."),
        description: z
          .array(portableTextBlockSchema)
          .describe(
            "1-5 sentences about the organization's mission, services, population served, requirements, and upcoming schedule changes, as Sanity Portable Text blocks.",
          ),
        address: z.string().nullable().describe("Street address, city, state, and ZIP. Null if not found."),
        location: z
          .object({ latitude: z.number(), longitude: z.number() })
          .nullable()
          .describe("Geolocation of the address. Null if not found."),
        serviceTypes: z
          .array(z.object({ _id: z.string() }))
          .describe("The _id values of service types (from get_service_types) that this provider offers."),
        hoursOfOperation: z
          .object({
            periods: z.array(
              z.object({
                open: z.object({ day: z.number(), time: z.string() }),
                close: z.object({ day: z.number(), time: z.string() }),
              }),
            ),
            weekdayText: z.array(z.string()),
          })
          .nullable()
          .describe(
            "Hours of operation in Google Places API shape. `day` is 0 (Sunday) through 6 (Saturday); `time` is 24-hour, e.g. '0900'. Null if not found.",
          ),
        contact: z.object({
          phone: z.string().nullable(),
          email: z.string().nullable(),
          website: z.string().nullable(),
        }),
        url: z
          .string()
          .nullable()
          .describe("A direct URL to this provider's own page, if the source page links to one; otherwise null."),
        reason: z.string().describe("A brief justification for why this provider fits In Need of Time's criteria."),
      }),
    )
    .describe("Every provider found on the page that fits In Need of Time's criteria. Empty if none qualify."),
});

export const ProviderScrapeAgent: Agent = {
  name: "page scraper",
  model: openai("gpt-5.5"),
  systemPrompt: `You are an AI assistant that scans a web page to find every provider that fits In Need of Time's mission: connecting people in crisis — single parents, people experiencing homelessness, and people recently released from prison — with support services such as health clinics, food banks, shelters, and free-clothing programs.

## Task
Given a URL, examine its content and identify every distinct provider on the page that offers a qualifying service. A page may describe a single organization, or it may be a directory listing many organizations — handle both cases.

## Workflow
1. Retrieve the content of the given URL using your available tools. Do this once per unique URL — do not re-fetch or re-search for the same URL more than once.
2. Read through the retrieved content and identify each distinct provider mentioned. For a directory-style page, treat each listed organization as a separate provider.
3. For each provider found, judge whether it fits In Need of Time's criteria:
   - It offers a qualifying service (health clinic, food bank, shelter, free-clothing program, or a similar service aimed at people in crisis).
   - It appears to be a real, currently operating organization — not a defunct listing, an unrelated business, or a generic informational page.
4. Exclude anything that does not clearly qualify. When in doubt, leave it out rather than guessing.
5. Call \`get_service_types\` once and use it to select the service type(s) each qualifying provider offers.
6. For each qualifying provider, capture:
   - Name
   - Description (1-5 sentences on mission, services, population served, requirements, and upcoming schedule changes)
   - Address (street, city, state, ZIP) and its geolocation
   - Hours of operation
   - Contact info (phone, email, website)
   - A direct URL to its own page, if the source page links out to one
   - A brief reason it fits In Need of Time's criteria
   Leave any field you can't determine from the page unset rather than guessing.

## Rules
- Only fetch each unique URL once. Do not retry or repeat calls for the same URL.
- Call \`get_service_types\` once per run, not once per provider.
- Do not fabricate providers or details that aren't supported by the page's content.
- If the page contains no qualifying providers, return an empty list rather than forcing a match.
- If the provider contains no matching services from the get_service_types tool call, return an empty list
- Do not include organizations that are out of scope for In Need of Time (e.g. general business directories, unrelated commercial services).
- If the provider has a mobile or rotating schedule, try to determine its next stop based on the current date.`,
  tools: {
    // web_search: openai.tools.webSearch(),
    get_service_types: tools.fetchServiceTypes,
  },
  output: Output.object({ schema: providerScrapeOutputSchema }),
};
