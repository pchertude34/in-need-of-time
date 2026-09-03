export const GPT_LIGHTWEIGHT_MODEL = "gpt-5.6-luna";

const USER_LOCATION_COUNTRY = "US";

/**
 * Builds the `userLocation` config for OpenAI's web search tools, biasing
 * results toward the state a job was scoped to.
 *
 * This is why the agents below are factories rather than constants: web search
 * is a provider-executed tool, so `userLocation` is baked into the tool
 * definition when it's constructed. It can't be supplied through tool context
 * (there's no local `execute` to receive it) or swapped in `prepareStep`
 * (which can override the model, tool choice and active tools, but not the
 * tool definitions themselves) — the toolset has to be built per run.
 *
 * `region` is free text, and is passed through as given — callers are expected
 * to supply a full state name ("Oregon"), not a postal code.
 */
export function createUserLocation(location?: string) {
  if (!location) {
    return undefined;
  }

  return { type: "approximate", country: USER_LOCATION_COUNTRY, region: location } as const;
}
