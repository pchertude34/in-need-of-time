import { Output } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { tools } from "../tools";
import type { Agent } from "../types";

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

// Takes ProviderExtractAgent's prose findings and structures them. No
// web_fetch/web_search here — it never sees the raw page, only the already-
// distilled text — and it's meant to resolve in a single step so the large
// output schema is only ever sent once, not resent across a multi-step
// tool-calling exchange.
export const ProviderFormatAgent: Agent = {
  name: "provider formatter",
  model: openai("gpt-5.6-luna"),
  systemPrompt: `You are an AI assistant that converts a colleague's research notes about one or more service providers into structured data for In Need of Time's directory.

## Task
You will be given prose findings about one or more providers that another agent already vetted against In Need of Time's criteria — do not re-judge whether they qualify, and do not add providers that aren't in the notes. Your job is only to structure what's there.

## Workflow
1. Call \`get_service_types\` once and use it to select the service type(s) each provider offers, based on the notes.
2. For each provider described in the notes, produce:
   - Name
   - Description (1-5 sentences on mission, services, population served, requirements, and upcoming schedule changes), as Sanity Portable Text blocks
   - Address and its geolocation, if stated
   - Hours of operation, if stated
   - Contact info (phone, email, website)
   - A direct URL to its own page, if mentioned
   - The reason it fits In Need of Time's criteria, as given in the notes
   Leave any field the notes don't cover unset rather than guessing.
3. If the notes say no providers qualified, return an empty list.

## Rules
- Call \`get_service_types\` once per run, not once per provider.
- If a provider has no matching service type from the \`get_service_types\` result, return an empty list.
- Do not fabricate details that aren't in the notes, and do not second-guess which providers qualify — that judgment was already made.`,
  tools: {
    get_service_types: tools.fetchServiceTypes,
  },
  output: Output.object({ schema: providerScrapeOutputSchema }),
};
