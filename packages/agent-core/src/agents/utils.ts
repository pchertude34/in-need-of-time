export const GPT_LIGHTWEIGHT_MODEL = "gpt-5.6-luna";

const USER_LOCATION_COUNTRY = "US";

/**
 * Builds the `userLocation` config for OpenAI's web search tools, biasing
 * results toward the state a job was scoped to.
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
