import { streamText, stepCountIs } from "ai";
import { DBOS } from "@dbos-inc/dbos-sdk";
import { emit } from "./bus";
import { ProviderExtractAgent } from "./agents/providerExtractAgent";
import { ProviderSearchAgent } from "./agents/providerSearchAgent";
import { ProviderFormatAgent } from "./agents/providerFormatAgent";
import { EventType } from "@in-need-of-time/types/agentEvents";
import type { Agent } from "./types";
import type { ModelMessage, ToolSet, StopCondition, LanguageModelUsage } from "ai";

const MAX_STEPS = 10;

export const PROVIDER_SCRAPE_PIPELINE_NAME = "provider scrape";

// Safety net: the SDK's own deferred-result bookkeeping for provider-executed
// tools (e.g. web_search) doesn't always clear once resolved, which can keep
// the internal step loop going — re-generating an already-complete answer —
// until it hits the step-count cap. Stop as soon as a step has no tool calls
// left to resolve, regardless of that bookkeeping.
const noPendingToolCalls: StopCondition<ToolSet> = ({ steps }) => {
  const last = steps.at(-1);
  return last !== undefined && last.toolCalls.length === 0;
};

// `providerExecuted` marks hosted tools (e.g. openai web_search) that the
// provider runs itself — their call + result already live in responseMessages,
// so the manual loop below must NOT re-run them or inject a client result.
type ToolCall = { toolCallId: string; toolName: string; input: Record<string, unknown>; providerExecuted: boolean };
// The AI SDK doesn't attribute token cost to an individual tool call — the
// closest real correlation is per internal step, since each step's usage
// covers whatever tool call(s) prompted it.
type StepUsage = {
  toolCalls: { toolName: string; input: Record<string, unknown> }[];
  usage: LanguageModelUsage;
};
type Turn = {
  text: string;
  output: unknown;
  toolCalls: ToolCall[];
  responseMessages: ModelMessage[];
  usage: LanguageModelUsage;
  steps: StepUsage[];
  urls: string[];
};

// DBOS step so a completed turn is checkpointed and never re-billed.
async function modelTurn(jobId: string, workflowId: string, agent: Agent, context: ModelMessage[]): Promise<Turn> {
  const { textStream, toolCalls, text, output, responseMessages, usage, steps, sources } = streamText({
    model: agent.model,
    system: agent.systemPrompt,
    tools: agent.tools,
    output: agent.output,
    // Let the SDK resolve hosted tools (web_search) and produce the final
    // structured output within this single call, rather than the manual loop.
    stopWhen: [stepCountIs(MAX_STEPS), noPendingToolCalls],
    messages: context,
  });

  for await (const part of textStream) {
    await emit(jobId, { type: EventType.ModelDelta, workflowId, text: part }, false);
  }

  return {
    text: await text,
    output: await output,
    toolCalls: (await toolCalls).map((c) => ({
      toolCallId: c.toolCallId,
      toolName: c.toolName,
      input: c.input as Record<string, unknown>,
      providerExecuted: c.providerExecuted ?? false,
    })),
    responseMessages: await responseMessages,
    usage: await usage,
    steps: (await steps).map((step) => ({
      toolCalls: step.toolCalls.map((c) => ({
        toolName: c.toolName,
        input: c.input as Record<string, unknown>,
      })),
      usage: step.usage,
    })),
    urls: (await sources).flatMap((source) => (source.sourceType === "url" ? [source.url] : [])),
  };
}

// Running total of tokens used per job, across every turn — the orchestrator,
// the top-level agent, and each fanned-out child. Per-process only: if DBOS
// ever distributes workflow execution across multiple executor processes,
// this won't aggregate correctly across them.
const jobTokenTotals = new Map<string, number>();

// Runs a single agent's turn to completion. Every current tool is either
// provider-executed (e.g. web_search) or self-executing via its own
// `execute()`, so streamText's own stopWhen-driven loop (see modelTurn)
// already resolves everything internally in one call — no manual multi-step
// handling needed here. If that stops being true (a tool with no `execute()`
// is added), this will need a real loop that runs it and feeds back a result.
export async function runAgentLoop(
  jobId: string,
  workflowId: string,
  agent: Agent,
  messages: ModelMessage[],
): Promise<{ text: string; output: unknown; urls: string[] }> {
  const turn = await DBOS.runStep(() => modelTurn(jobId, workflowId, agent, messages), {
    name: `${agent.name}-model`,
  });

  let totalTokens = jobTokenTotals.get(jobId) ?? 0;
  for (const step of turn.steps) {
    const stepTokens = step.usage.totalTokens ?? 0;
    totalTokens += stepTokens;
    const toolNames = step.toolCalls.map((c) => c.toolName).join(",") || "none";
    console.log(
      `[${jobId}/${workflowId}] agent=${agent.name} tools=${toolNames} inputTokens=${step.usage.inputTokens ?? 0} stepTokens=${stepTokens} totalTokens=${totalTokens}`,
    );
  }
  jobTokenTotals.set(jobId, totalTokens);

  return { text: turn.text, output: turn.output, urls: turn.urls };
}

// Three-step provider pipeline: ProviderExtractAgent reads the given URL
// first and writes up its findings in plain text; ProviderSearchAgent then
// researches the same provider more broadly across the web, writing up to 5
// more site-tagged findings (first-party vs. third-party). Neither carries an
// `output` schema, so their own multi-step web_search exchanges never carry
// the schema's token cost. ProviderFormatAgent then converts both write-ups
// into the final structured object in a single step, on a fresh context that
// never sees either agent's own search history — the extra sources let it
// judge confidence (agreement/conflicts, first- vs. third-party) properly.
export async function runProviderScrape(
  jobId: string,
  workflowId: string,
  messages: ModelMessage[],
): Promise<{ text: string; output: unknown }> {
  // Both run on their own copies — their web_search tool-call and result
  // content is large and only useful for producing this one answer, so it's
  // never merged into the caller's persisted conversation.
  const extraction = await runAgentLoop(jobId, workflowId, ProviderExtractAgent, [...messages]);
  console.log(`[${jobId}/${workflowId}] agent=${ProviderExtractAgent.name} findings=${extraction.text}`);
  for (const url of extraction.urls) {
    console.log(`[${jobId}/${workflowId}] agent=${ProviderExtractAgent.name} searched=${url}`);
  }

  // const search = await runAgentLoop(jobId, workflowId, ProviderSearchAgent, [...messages]);

  const formatted = await runAgentLoop(jobId, workflowId, ProviderFormatAgent, [
    { role: "user", content: `${extraction.text}` },
  ]);

  // Only the final structured answer becomes part of the persisted
  // conversation, not either agent's raw search transcript.
  messages.push({ role: "assistant", content: formatted.text });

  return { text: formatted.text, output: formatted.output };
}
