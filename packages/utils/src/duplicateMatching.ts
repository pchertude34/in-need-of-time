// Below this, two same-address providers are treated as different orgs that
// happen to share a building (e.g. a shelter and a clinic in the same
// complex) rather than the same org under a different name.
export const NAME_SIMILARITY_LIKELY_THRESHOLD = 0.6;

export type DuplicateCheckStatus = "none" | "potential" | "likely";

/** An existing provider that shares an address with the one being checked. */
export type DuplicateProviderMatch = {
  _id: string;
  title: string;
  address: string;
  nameSimilarity: number;
};

export type DuplicateCheckResult = {
  status: DuplicateCheckStatus;
  matches: DuplicateProviderMatch[];
};

/** A same-address candidate, before it's been scored against the current name. */
export type DuplicateProviderCandidate = {
  _id: string;
  title: string;
  address: string;
};

export function normalizeProviderName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function bigrams(value: string): string[] {
  if (value.length < 2) return [value];
  return Array.from({ length: value.length - 1 }, (_, i) => value.slice(i, i + 2));
}

/**
 * Sørensen–Dice coefficient over character bigrams of the normalized names,
 * 0 (nothing in common) to 1 (identical). Tolerant of typos and reordered
 * words, e.g. "St. Austin's Day Care" vs "Saint Austins Daycare".
 */
export function nameSimilarity(a: string, b: string): number {
  const bigramsA = bigrams(normalizeProviderName(a));
  const bigramsB = bigrams(normalizeProviderName(b));

  if (bigramsA.length === 0 || bigramsB.length === 0) {
    return bigramsA.length === bigramsB.length ? 1 : 0;
  }

  const bagB = new Map<string, number>();
  for (const bigram of bigramsB) {
    bagB.set(bigram, (bagB.get(bigram) ?? 0) + 1);
  }

  let overlap = 0;
  for (const bigram of bigramsA) {
    const remaining = bagB.get(bigram) ?? 0;
    if (remaining > 0) {
      overlap += 1;
      bagB.set(bigram, remaining - 1);
    }
  }

  return (2 * overlap) / (bigramsA.length + bigramsB.length);
}

/** Scores same-address candidates against the current name and classifies the result. */
export function classifyDuplicateMatches(
  candidates: DuplicateProviderCandidate[],
  currentName: string,
): DuplicateCheckResult {
  if (candidates.length === 0) {
    return { status: "none", matches: [] };
  }

  const matches = candidates
    .map((candidate) => ({ ...candidate, nameSimilarity: nameSimilarity(candidate.title, currentName) }))
    .sort((a, b) => b.nameSimilarity - a.nameSimilarity);

  const status: DuplicateCheckStatus = matches.some((match) => match.nameSimilarity >= NAME_SIMILARITY_LIKELY_THRESHOLD)
    ? "likely"
    : "potential";

  return { status, matches };
}
