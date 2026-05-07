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
};

const PROVIDER_QUERY = `*[
  _type == "provider" &&
  (
    ($website != "" && publicContact.website == $website) ||
    (title == $title && coalesce(place.address, address, "") == $address)
  )
][0]._id`;

function compactString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function stableKey(prefix: string, index: number): string {
  return `${prefix}${index.toString(36)}${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
}

function buildDocumentId(job: PipelineJob, index: number): string {
  return `provider-ai-${job.id}-${index}`.replace(/[^A-Za-z0-9._-]/g, "-");
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

function buildProviderDocument(candidate: SanityProviderCandidate, job: PipelineJob): SanityProviderDocument {
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
      ...(geopoint ? { location: geopoint } : {}),
      type: "ai_generated",
    },
    hoursOfOperation: (candidate.hoursOfOperation?.periods ?? []).map((period, index) => ({
      _key: stableKey("hours", index),
      open: period.open,
      close: period.close,
    })),
    serviceTypes: candidate.serviceTypes
      .map((serviceType, index) =>
        compactString(serviceType._id)
          ? {
              _key: stableKey("serviceType", index),
              _type: "reference" as const,
              _ref: serviceType._id,
            }
          : null,
      )
      .filter((serviceType): serviceType is NonNullable<typeof serviceType> => serviceType !== null),
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
    const providerDocument = buildProviderDocument(candidate, job);

    if (existingProviderId) {
      const { _type, ...providerPatch } = providerDocument;
      const updated = await client.patch(existingProviderId).set(providerPatch).commit<{ _id: string }>();
      results.push({ documentId: updated._id, action: "updated" });
      continue;
    }

    const created = await client.create<SanityProviderDocument & { _id: string }>({
      ...providerDocument,
      _id: buildDocumentId(job, index),
    });
    results.push({ documentId: created._id, action: "created" });
  }

  return results;
}
