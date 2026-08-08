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

const hoursOfOperationSchema = z
  .object({
    periods: z.array(
      z.object({
        open: z.object({ day: z.number(), time: z.string() }),
        close: z.object({ day: z.number(), time: z.string() }),
      }),
    ),
    weekdayText: z.array(z.string()),
  })
  .describe(
    "Hours of operation in Google Places API shape. `day` is 0 (Sunday) through 6 (Saturday); `time` is 24-hour, e.g. '0900'.",
  );

const confidenceLevelSchema = z
  .enum(["very_low", "low", "medium", "high", "very_high"])
  .describe(
    "Confidence that this field is accurate, based on the research notes. Weigh how recent/authoritative the source looks, whether multiple sources agree, and whether any conflict (e.g. one page listing different hours than another). Use `very_low` if the field wasn't found at all. Only use `very_high` when the notes say the field was confirmed on the provider's own website — never for a field sourced only from a third-party directory or listing site.",
  );

// Pairs a field's value with a confidence level, so the caller can tell a
// well-sourced fact from a guess or a stale/conflicting one.
function withConfidence<T extends z.ZodTypeAny>(value: T) {
  return z.object({ value, confidence: confidenceLevelSchema });
}

const providerSchema = z.object({
  name: withConfidence(z.string().describe("The provider's name, as written on the page.")),
  description: withConfidence(
    z
      .array(portableTextBlockSchema)
      .describe(
        "1-5 sentences about the organization's mission, services, population served, requirements, and upcoming schedule changes, as Sanity Portable Text blocks.",
      ),
  ),
  address: withConfidence(z.string().nullable().describe("Street address, city, state, and ZIP. Null if not found.")),
  location: withConfidence(
    z
      .object({ latitude: z.number(), longitude: z.number() })
      .nullable()
      .describe(
        "The result of geocoding `address` with `geocode_address`. Null if `address` is null or couldn't be geocoded.",
      ),
  ),
  serviceTypes: z
    .array(
      z.object({
        _id: z.string(),
        hoursOfOperation: withConfidence(
          hoursOfOperationSchema
            .nullable()
            .describe(
              "This service's own hours, only if they differ from the provider's overall hours below. Null if this service follows the provider's general hours, or its specific hours aren't known.",
            ),
        ),
      }),
    )
    .describe("The service types (from get_service_types) that this provider offers."),
  hoursOfOperation: withConfidence(
    hoursOfOperationSchema
      .nullable()
      .describe(
        "The provider's overall hours — used when every service shares the same schedule. Null if not found, or if hours vary per service (see `serviceTypes[].hoursOfOperation` instead).",
      ),
  ),
  contact: z.object({
    phone: withConfidence(z.string().nullable().describe("Phone number, if found.")),
    email: withConfidence(z.string().nullable().describe("Email address, if found.")),
    website: withConfidence(z.string().nullable().describe("Website URL, if found.")),
  }),
  url: withConfidence(
    z
      .string()
      .nullable()
      .describe("A direct URL to this provider's own page, if the source page links to one; otherwise null."),
  ),
  reason: z.string().describe("A brief justification for why this provider fits In Need of Time's criteria."),
});

const providerScrapeOutputSchema = z.object({
  provider: providerSchema
    .nullable()
    .describe("The provider described in the notes, or null if it doesn't fit In Need of Time's criteria."),
});

// Takes ProviderExtractAgent's prose findings and structures them. No
// web_fetch/web_search here — it never sees the raw page, only the already-
// distilled text — and it's meant to resolve in a single step so the large
// output schema is only ever sent once, not resent across a multi-step
// tool-calling exchange.
export const ProviderFormatAgent: Agent = {
  name: "provider formatter",
  model: openai("gpt-5.6-luna"),
  systemPrompt: `You are an AI assistant that converts a colleague's research notes about a single service provider into structured data for In Need of Time's directory.

## Task
You will be given prose findings about one provider that another agent already vetted against In Need of Time's criteria — do not re-judge whether it qualifies. If the notes describe more than one provider, structure only the first one. Your job is only to structure what's there.

## Workflow
1. Call \`get_service_types\` once and use it to select the service type(s) the provider offers, based on the notes.
2. Produce:
   - Name
   - Description (1-5 sentences on mission, services, population served, requirements, and upcoming schedule changes), as Sanity Portable Text blocks
   - Address, if stated
   - Location: if you found an address, call \`geocode_address\` with it to get its coordinates. Leave location null if there's no address, or if \`geocode_address\` couldn't match it.
   - Hours of operation: if the notes give one schedule for the whole provider, put it in the top-level \`hoursOfOperation\` field. If the notes give different hours per service, leave the top-level field null and put each service's hours on its own entry in \`serviceTypes\` instead.
   - Contact info (phone, email, website)
   - A direct URL to its own page, if mentioned
   - The reason it fits In Need of Time's criteria, as given in the notes
   Leave any field the notes don't cover unset rather than guessing.
3. For each field above (other than the reason and location), assign a confidence level — \`very_low\`, \`low\`, \`medium\`, \`high\`, or \`very_high\` — based only on what the notes say about that field's source: how recent it looked, whether multiple sources agreed, and whether the notes flag any conflict (e.g. different hours on different pages). Use \`very_low\` when the notes say the field wasn't found. Only use \`very_high\` when the notes say the field came from the provider's own website — if it only came from a third-party directory or listing site, cap it at \`high\` even if the source otherwise looks solid. Give location the same confidence as address, since it's derived from it.
4. If the notes say no provider qualified, return \`null\`.

## Rules
- Call \`get_service_types\` once per run.
- Call \`geocode_address\` at most once per run, only if you have an address.
- If the provider has no matching service type from the \`get_service_types\` result, return \`null\`.
- Do not fabricate details that aren't in the notes, and do not second-guess whether the provider qualifies — that judgment was already made.
- Never guess coordinates yourself — location must come from \`geocode_address\`, never from the notes or your own knowledge.
- Base confidence only on what the notes actually say about a source — don't invent recency or agreement signals the notes don't mention.
- Never assign \`very_high\` confidence to a field sourced only from a third-party directory or listing site — reserve it for fields the notes say were confirmed on the provider's own website.`,
  tools: {
    get_service_types: tools.fetchServiceTypes,
    geocode_address: tools.geocodeAddress,
  },
  output: Output.object({ schema: providerScrapeOutputSchema }),
};
