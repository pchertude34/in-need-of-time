import type { PipelineInput } from "../types/pipeline";

type SanityReadClient = {
  fetch: <TResult>(query: string, params?: Record<string, unknown>) => Promise<TResult>;
};

const EXISTING_PROVIDERS_QUERY = `*[_type == "provider"] {
  "website": publicContact.website,
  "placeId": place.placeId,
  "name": coalesce(place.name, title),
  "address": coalesce(place.address, address)
}`;

type ExistingProvider = NonNullable<PipelineInput["existingProviders"]>[number];

function compactString(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed ? trimmed : undefined;
}

export async function loadExistingProviders(client: SanityReadClient): Promise<ExistingProvider[]> {
  const result = await client.fetch<Array<Record<string, unknown>>>(EXISTING_PROVIDERS_QUERY);

  const providers = result
    .map((item) => ({
      website: compactString(item.website),
      placeId: compactString(item.placeId),
      name: compactString(item.name),
      address: compactString(item.address),
    }))
    .filter((item) => item.website || item.placeId || item.name || item.address);

  return providers;
}
