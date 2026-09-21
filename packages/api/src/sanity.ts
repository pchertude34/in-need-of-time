import { createClient } from "@sanity/client";

/**
 * Read client for Sanity content this API serves.
 *
 * `perspective: "drafts"` is load-bearing: every provider the ai-provider-editor
 * saves is an unpublished draft, so a published-only read can't see the very
 * documents worth matching against. Reading drafts needs a token, which is why
 * this lookup lives here rather than in the browser — the SDK's client there
 * resolves its token asynchronously and silently reads anonymously until it does.
 */
export const sanityClient = createClient({
  projectId: process.env.SANITY_PROJECT_ID ?? "",
  dataset: process.env.SANITY_DATASET ?? "",
  apiVersion: "2024-03-09",
  useCdn: false,
  perspective: "drafts",
  token: process.env.SANITY_API_TOKEN,
});
