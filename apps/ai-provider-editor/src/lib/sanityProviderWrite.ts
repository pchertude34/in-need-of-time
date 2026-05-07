import type { PipelineJob, SanityBlock, SanityProviderCandidate } from "../types/pipeline";

type SanityWriteClient = {
  fetch: <TResult>(query: string, params?: Record<string, unknown>) => Promise<TResult>;
  patch: (documentId: string) => {
    set: (attributes: Record<string, unknown>) => {
      commit: <TResult>() => Promise<TResult>;
    };
  };
  create: <TDocument extends Record<string, unknown>>(document: TDocument) => Promise<TDocument>;
};

type SanityProviderDocument = {
  _id?: string;
  _type: "provider";
  title: string;
  agentRequest: string;
  place?: {
    name?: string;
    address?: string;
    placeId?: string;
    location?: {
      _type: "geopoint";
      lat?: number;
      lng?: number;
    };
    type: string;
  };
  address?: string;
  location?: {
    _type: "geopoint";
    lat?: number;
    lng?: number;
  };
  hoursOfOperation: Array<{
    _key: string;
    open: {
      day: number;
      time: string;
    };
    close: {
      day: number;
      time: string;
    };
  }>;
  serviceTypes: Array<{
    _key: string;
    _type: "reference";
    _ref: string;
  }>;
  publicContact: {
    phone?: string;
    email?: string;
    website?: string;
  };
  description: SanityBlock[];
};

type ProviderWriteResult = {
  documentId: string;
  action: "created" | "updated";
  skippedServiceTypes: string[];
};

const PROVIDER_QUERY = `*[
  _type == "provider" &&
  (
    ($website != "" && publicContact.website == $website) ||
    (title == $title && coalesce(place.address, address, "") == $address)
  )
][0]._id`;

const SERVICE_TYPE_QUERY = `*[_type == "serviceType"] {
  _id,
  name,
  "slug": slug.current
}`;

type ServiceTypeDocument = {
  _id: string;
  name?: string;
  slug?: string;
};

type ResolvedServiceTypeReferences = {
  references: SanityProviderDocument["serviceTypes"];
  skipped: string[];
};

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

function buildDocumentId(job: PipelineJob, index: number): string {
  return `provider-ai-${job.id}-${index}`.replace(/[^A-Za-z0-9._-]/g, "-");
}

function buildSyntheticPlaceId(candidate: SanityProviderCandidate): string {
  const source =
    compactString(candidate.contact?.website) || `${compactString(candidate.name)}-${compactString(candidate.address)}`;
  const normalizedSource = normalizeLookupKey(source);

  return `ai-generated-${normalizedSource || crypto.randomUUID()}`.slice(0, 180);
}

function toGeopoint(candidate: SanityProviderCandidate): SanityProviderDocument["location"] | undefined {
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

function buildProviderDocument(
  candidate: SanityProviderCandidate,
  job: PipelineJob,
  serviceTypes: SanityProviderDocument["serviceTypes"],
): SanityProviderDocument {
  const title = compactString(candidate.name);
  const address = compactString(candidate.address);
  const geopoint = toGeopoint(candidate);
  const website = compactString(candidate.contact?.website);
  const phone = compactString(candidate.contact?.phone);
  const email = compactString(candidate.contact?.email);

  return {
    _type: "provider",
    title,
    agentRequest: [
      `Approved AI provider candidate from pipeline job ${job.id}.`,
      `Input: ${job.input.city}, ${job.input.state}, ${job.input.category}.`,
      job.outputFile ? `Pipeline output: ${job.outputFile}.` : "",
      job.sanityFile ? `Sanity output: ${job.sanityFile}.` : "",
    ]
      .filter(Boolean)
      .join("\n"),
    address,
    ...(geopoint ? { location: geopoint } : {}),
    place: {
      name: title,
      address,
      placeId: buildSyntheticPlaceId(candidate),
      ...(geopoint ? { location: geopoint } : {}),
      type: "ai_generated",
    },
    hoursOfOperation: (candidate.hoursOfOperation?.periods ?? []).map((period, index) => ({
      _key: stableKey("hours", index),
      open: period.open,
      close: period.close,
    })),
    serviceTypes,
    publicContact: {
      ...(phone ? { phone } : {}),
      ...(email ? { email } : {}),
      ...(website ? { website } : {}),
    },
    description: withPortableTextKeys(candidate.description ?? []),
  };
}

async function findExistingProviderId(
  client: SanityWriteClient,
  candidate: SanityProviderCandidate,
): Promise<string | null> {
  const title = compactString(candidate.name);
  const address = compactString(candidate.address);
  const website = compactString(candidate.contact?.website);

  if (!title && !website) return null;

  const result = await client.fetch<string | null>(PROVIDER_QUERY, {
    title,
    address,
    website,
  });

  return result ?? null;
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

async function resolveServiceTypeReferences(
  client: SanityWriteClient,
  candidate: SanityProviderCandidate,
  candidateIndex: number,
): Promise<ResolvedServiceTypeReferences> {
  const serviceTypes = await client.fetch<ServiceTypeDocument[]>(SERVICE_TYPE_QUERY);
  const lookup = buildServiceTypeLookup(serviceTypes);
  const references: SanityProviderDocument["serviceTypes"] = [];
  const skipped: string[] = [];
  const seenDocumentIds = new Set<string>();

  for (const rawServiceType of candidate.serviceTypes ?? []) {
    const rawValue = compactString(rawServiceType._id);
    if (!rawValue) continue;

    const serviceType = getServiceTypeAliasKeys(rawValue)
      .map((key) => lookup.get(key))
      .find((value): value is ServiceTypeDocument => Boolean(value));

    if (!serviceType) {
      skipped.push(rawValue);
      continue;
    }

    if (seenDocumentIds.has(serviceType._id)) continue;
    seenDocumentIds.add(serviceType._id);
    references.push({
      _key: stableKey("serviceType", references.length),
      _type: "reference",
      _ref: serviceType._id,
    });
  }

  if (!references.length) {
    const availableNames = serviceTypes
      .map((serviceType) => serviceType.name)
      .filter(Boolean)
      .join(", ");
    throw new Error(
      `Provider candidate ${candidateIndex + 1} has no matching Sanity service types. Use one of: ${availableNames}.`,
    );
  }

  return { references, skipped };
}

export function validateProviderCandidates(value: unknown): SanityProviderCandidate[] {
  if (!Array.isArray(value)) {
    throw new Error("Reviewed JSON must be an array of provider candidates.");
  }

  value.forEach((candidate, index) => {
    if (!candidate || typeof candidate !== "object") {
      throw new Error(`Provider candidate ${index + 1} must be an object.`);
    }

    const record = candidate as Partial<SanityProviderCandidate>;
    if (!compactString(record.name)) {
      throw new Error(`Provider candidate ${index + 1} is missing a name.`);
    }

    if (!Array.isArray(record.description)) {
      throw new Error(`Provider candidate ${index + 1} must include description as a Sanity block array.`);
    }

    if (!record.contact || typeof record.contact !== "object") {
      throw new Error(`Provider candidate ${index + 1} is missing contact information.`);
    }

    if (!Array.isArray(record.serviceTypes)) {
      throw new Error(`Provider candidate ${index + 1} must include serviceTypes as an array.`);
    }
  });

  return value as SanityProviderCandidate[];
}

export async function writeApprovedProvidersToSanity(
  client: SanityWriteClient,
  candidates: SanityProviderCandidate[],
  job: PipelineJob,
): Promise<ProviderWriteResult[]> {
  const results: ProviderWriteResult[] = [];

  for (const [index, candidate] of candidates.entries()) {
    const existingProviderId = await findExistingProviderId(client, candidate);
    const resolvedServiceTypes = await resolveServiceTypeReferences(client, candidate, index);
    const providerDocument = buildProviderDocument(candidate, job, resolvedServiceTypes.references);

    if (existingProviderId) {
      const { _type, ...providerPatch } = providerDocument;
      const updated = await client.patch(existingProviderId).set(providerPatch).commit<{ _id: string }>();
      results.push({
        documentId: updated._id,
        action: "updated",
        skippedServiceTypes: resolvedServiceTypes.skipped,
      });
      continue;
    }

    const created = await client.create<SanityProviderDocument & { _id: string }>({
      ...providerDocument,
      _id: buildDocumentId(job, index),
    });
    results.push({
      documentId: created._id,
      action: "created",
      skippedServiceTypes: resolvedServiceTypes.skipped,
    });
  }

  return results;
}
