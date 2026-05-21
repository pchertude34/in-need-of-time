import type { FreshnessReviewCandidate } from "../types/freshness";
import type { HoursPeriod, SanityBlock, SanityProviderCandidate } from "../types/pipeline";

type SanityWriteClient = {
  fetch: <TResult>(query: string, params?: Record<string, unknown>) => Promise<TResult>;
  patch: (documentId: string) => {
    set: (attributes: Record<string, unknown>) => {
      commit: <TResult>() => Promise<TResult>;
    };
  };
};

type ServiceTypeDocument = {
  _id: string;
  name?: string;
  slug?: string;
};

type ExistingProviderPatchContext = {
  place?: {
    name?: string;
    address?: string;
    placeId?: string;
    location?: {
      _type: "geopoint";
      lat?: number;
      lng?: number;
    };
    type?: string;
  };
};

const SERVICE_TYPE_QUERY = `*[_type == "serviceType"] {
  _id,
  name,
  "slug": slug.current
}`;

const PROVIDER_CONTEXT_QUERY = `*[_type == "provider" && _id == $providerId][0] {
  place
}`;

function compactString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeLookupKey(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[_\s]+/g, "-")
    .replace(/[^\p{L}\p{N}-]+/gu, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function getServiceTypeAliasKeys(value: string): string[] {
  const key = normalizeLookupKey(value);
  const aliasMap: Record<string, string[]> = {
    "food-assistance": ["food-pantry"],
    "food-bank": ["food-pantry"],
    "food-pantry": ["food-pantry"],
    "food-box": ["food-boxes"],
    "food-boxes": ["food-boxes"],
    "food-delivery": ["food-delivery"],
    "hot-meal": ["hot-meals"],
    "hot-meals": ["hot-meals"],
    "meal-program": ["hot-meals"],
    shelter: ["temporary-shelter-anyone"],
    "temporary-shelter": ["temporary-shelter-anyone"],
  };

  return [key, ...(aliasMap[key] ?? [])];
}

function stableKey(prefix: string, index: number): string {
  return `${prefix}${index.toString(36)}${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
}

function toGeopoint(candidate: SanityProviderCandidate) {
  const latitude = candidate.location?.latitude;
  const longitude = candidate.location?.longitude;

  if (typeof latitude !== "number" || typeof longitude !== "number") return undefined;

  return {
    _type: "geopoint",
    lat: latitude,
    lng: longitude,
  };
}

function withPortableTextKeys(blocks: SanityBlock[]): SanityBlock[] {
  return blocks.map((block, blockIndex) => ({
    ...block,
    _key: block._key ?? stableKey("block", blockIndex),
    markDefs: block.markDefs ?? [],
    children: block.children.map((child, childIndex) => ({
      ...child,
      _key: child._key ?? stableKey("span", childIndex),
      marks: child.marks ?? [],
    })),
  }));
}

function buildServiceTypeLookup(serviceTypes: ServiceTypeDocument[]): Map<string, ServiceTypeDocument> {
  const lookup = new Map<string, ServiceTypeDocument>();

  for (const serviceType of serviceTypes) {
    for (const value of [serviceType._id, serviceType.name, serviceType.slug]) {
      if (!value) continue;
      lookup.set(normalizeLookupKey(value), serviceType);
    }
  }

  return lookup;
}

async function resolveServiceTypeReferences(client: SanityWriteClient, candidate: SanityProviderCandidate) {
  const serviceTypes = await client.fetch<ServiceTypeDocument[]>(SERVICE_TYPE_QUERY);
  const lookup = buildServiceTypeLookup(serviceTypes);
  const references: Array<{ _key: string; _type: "reference"; _ref: string }> = [];
  const seenDocumentIds = new Set<string>();

  for (const rawServiceType of candidate.serviceTypes ?? []) {
    const rawValue = compactString(rawServiceType._id);
    if (!rawValue) continue;

    const serviceType = getServiceTypeAliasKeys(rawValue)
      .map((key) => lookup.get(key))
      .find((value): value is ServiceTypeDocument => Boolean(value));

    if (!serviceType || seenDocumentIds.has(serviceType._id)) continue;
    seenDocumentIds.add(serviceType._id);
    references.push({
      _key: stableKey("serviceType", references.length),
      _type: "reference",
      _ref: serviceType._id,
    });
  }

  if (!references.length) {
    throw new Error("No matching Sanity service types were found for the reviewed stale-check result.");
  }

  return references;
}

function buildHours(periods: HoursPeriod[] | undefined) {
  return (periods ?? []).map((period, index) => ({
    _key: stableKey("hours", index),
    open: period.open,
    close: period.close,
  }));
}

function freshnessPatch(
  review: FreshnessReviewCandidate,
  jobId: string,
  summary: string,
  reviewedCandidate: SanityProviderCandidate = review.candidate,
) {
  const now = new Date().toISOString();
  return {
    sourceUrl:
      compactString(reviewedCandidate.contact?.website) || review.diagnostics.finalUrl || review.diagnostics.sourceUrl,
    lastCheckedAt: now,
    lastSuccessfulScrapeAt: review.diagnostics.fetchedAt || now,
    status: "current",
    lastCheckSummary: summary,
    lastDiffFields: review.changedFields,
    lastRunId: jobId,
  };
}

export async function writeApprovedFreshnessProviderToSanity(
  client: SanityWriteClient,
  review: FreshnessReviewCandidate,
  editedCandidate: SanityProviderCandidate,
  jobId: string,
): Promise<void> {
  const existing = await client.fetch<ExistingProviderPatchContext | null>(PROVIDER_CONTEXT_QUERY, {
    providerId: review.providerId,
  });
  const serviceTypes = await resolveServiceTypeReferences(client, editedCandidate);
  const title = compactString(editedCandidate.name);
  const address = compactString(editedCandidate.address);
  const geopoint = toGeopoint(editedCandidate);
  const phone = compactString(editedCandidate.contact?.phone);
  const email = compactString(editedCandidate.contact?.email);
  const website = compactString(editedCandidate.contact?.website);

  await client
    .patch(review.providerId)
    .set({
      title,
      address,
      ...(geopoint ? { location: geopoint } : {}),
      place: {
        ...(existing?.place ?? {}),
        name: title,
        address,
        ...(geopoint ? { location: geopoint } : {}),
        type: existing?.place?.type ?? "ai_generated",
      },
      hoursOfOperation: buildHours(editedCandidate.hoursOfOperation?.periods),
      serviceTypes,
      publicContact: {
        ...(phone ? { phone } : {}),
        ...(email ? { email } : {}),
        ...(website ? { website } : {}),
      },
      description: withPortableTextKeys(editedCandidate.description ?? []),
      freshness: freshnessPatch(review, jobId, "Approved stale-check result.", editedCandidate),
    })
    .commit();
}

export async function writeDeniedFreshnessProviderToSanity(
  client: SanityWriteClient,
  review: FreshnessReviewCandidate,
  jobId: string,
): Promise<void> {
  await client
    .patch(review.providerId)
    .set({
      freshness: freshnessPatch(review, jobId, "Denied as false positive."),
    })
    .commit();
}
