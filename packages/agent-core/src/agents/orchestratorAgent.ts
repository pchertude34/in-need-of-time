import { Output } from "ai";
import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import type { Agent } from "../types";

// The set of agents the orchestrator can currently route to. Extend this list
// (and the prompt below) as new specialized agents are added.
export const ROUTABLE_AGENTS = ["directory_scrape", "provider_scrape"] as const;
export type RoutableAgent = (typeof ROUTABLE_AGENTS)[number];

const orchestratorOutputSchema = z.object({
  agent: z.enum(ROUTABLE_AGENTS).describe("Which specialized agent should handle this input first."),
  reason: z.string().describe("A brief justification for the choice."),
});

export const OrchestratorAgent: Agent = {
  name: "orchestrator",
  model: openai("gpt-5.5"),
  systemPrompt: `You are a routing assistant for In Need of Time's provider-discovery pipeline. Given a user's input (typically a URL), decide which specialized agent should handle it first:

- "directory_scrape": the input is (or might be) a directory-style page listing multiple provider organizations — e.g. a community resource directory, membership listing, or search results page. This agent also correctly detects and handles the case where the page turns out to be a single provider's own site instead, so prefer this option whenever you're unsure.
- "provider_scrape": the input is clearly a single provider organization's own website (e.g. its homepage or about page), not a directory of multiple organizations.

Make this decision quickly, based on the input itself (e.g. its URL structure, wording, or stated purpose) — you do not have tools to inspect the page's actual content, and you don't need them: the downstream agents will do that.`,
  tools: {},
  output: Output.object({ schema: orchestratorOutputSchema }),
};
