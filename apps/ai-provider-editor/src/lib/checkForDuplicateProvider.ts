import type { SanityInstance } from "@sanity/sdk";
import { classifyDuplicateMatches, parseCoordinates, type DuplicateCheckResult } from "@in-need-of-time/utils";
import { fetchDuplicateProviders } from "../queries";

export const NO_DUPLICATE_RESULT: DuplicateCheckResult = { status: "none", matches: [] };

type DuplicateCheckInput = {
  name: string;
  latitude: string;
  longitude: string;
};

/**
 * Checks whether a provider matches an existing one: same address (via
 * geocoded coordinates) plus a similar name. Callers decide when this runs —
 * there's no debounce or auto-rerun here.
 *
 * A provider whose address hasn't been geocoded yet (or couldn't be) gets no
 * check — there's no reliable location signal to match on.
 */
export async function checkForDuplicateProvider(
  instance: SanityInstance,
  provider: DuplicateCheckInput,
): Promise<DuplicateCheckResult> {
  const coordinates = parseCoordinates(provider.latitude, provider.longitude);

  if (!coordinates) {
    return NO_DUPLICATE_RESULT;
  }

  const candidates = await fetchDuplicateProviders(instance, coordinates);
  console.log("candidates");
  console.log(candidates);
  return classifyDuplicateMatches(candidates, provider.name);
}
