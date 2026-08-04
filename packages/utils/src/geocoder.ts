// import URL from 'node:url';
// import fetch from 'node-fetch';

/**
 * Thin TypeScript client for the US Census Bureau Geocoding Services API.
 * Docs: https://geocoding.geo.census.gov/geocoder/Geocoding_Services_API.pdf
 *
 * Free, US-only, no API key required, no storage/caching restrictions
 * (unlike Google Places/Maps) since it's public government data.
 */

const BASE_URL = "https://geocoding.geo.census.gov/geocoder";

// "Public_AR_Current" always points at the latest address-range benchmark.
// You can pin to a specific one (e.g. "Public_AR_ACS2021") for reproducibility.
const DEFAULT_BENCHMARK = "Public_AR_Current";

export interface CensusCoordinates {
  x: number; // longitude
  y: number; // latitude
}

export interface CensusAddressComponents {
  zip: string;
  state: string;
  city: string;
  street: string;
}

export interface CensusAddressMatch {
  matchedAddress: string;
  coordinates: CensusCoordinates;
  addressComponents: CensusAddressComponents;
  tigerLine?: {
    side: string;
    tigerLineId: string;
  };
}

interface CensusLocationsResponse {
  result: {
    input: Record<string, unknown>;
    addressMatches: CensusAddressMatch[];
  };
}

export interface GeocodeResult {
  latitude: number;
  longitude: number;
  matchedAddress: string;
  raw: CensusAddressMatch;
}

export class CensusGeocodeError extends Error {
  constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);
    this.name = "CensusGeocodeError";
  }
}

/**
 * Geocode a single free-form address string, e.g.
 * "1032 W. Main St., Medford, OR 97501"
 *
 * Returns null if the Census geocoder found no match (bad/ambiguous address),
 * rather than throwing — callers should decide how to handle "not found".
 */
export async function geocodeAddress(
  address: string,
  options: { benchmark?: string; signal?: AbortSignal } = {},
): Promise<GeocodeResult | null> {
  const benchmark = options.benchmark ?? DEFAULT_BENCHMARK;

  const url = new URL(`${BASE_URL}/locations/onelineaddress`);
  url.searchParams.set("address", address);
  url.searchParams.set("benchmark", benchmark);
  url.searchParams.set("format", "json");

  let response: Response;
  try {
    response = await fetch(url.toString(), { signal: options.signal });
  } catch (err) {
    throw new CensusGeocodeError(`Network error calling Census geocoder`, err);
  }

  if (!response.ok) {
    throw new CensusGeocodeError(`Census geocoder returned HTTP ${response.status} for address: ${address}`);
  }

  let data: CensusLocationsResponse;
  try {
    data = (await response.json()) as CensusLocationsResponse;
  } catch (err) {
    throw new CensusGeocodeError("Failed to parse Census geocoder response as JSON", err);
  }

  const match = data.result?.addressMatches?.[0];
  if (!match) {
    return null; // no match found — not necessarily an error, just unresolved
  }

  return {
    latitude: match.coordinates.y,
    longitude: match.coordinates.x,
    matchedAddress: match.matchedAddress,
    raw: match,
  };
}

/**
 * Geocode many addresses sequentially with a small delay between calls,
 * since the Census API is free/unauthenticated and has no documented SLA —
 * being a polite, low-concurrency caller avoids getting rate-limited or blocked.
 */
export async function geocodeAddresses(
  addresses: string[],
  options: { benchmark?: string; delayMs?: number } = {},
): Promise<Array<{ address: string; result: GeocodeResult | null; error?: string }>> {
  const delayMs = options.delayMs ?? 250;
  const results: Array<{ address: string; result: GeocodeResult | null; error?: string }> = [];

  for (const address of addresses) {
    try {
      const result = await geocodeAddress(address, { benchmark: options.benchmark });
      results.push({ address, result });
    } catch (err) {
      results.push({
        address,
        result: null,
        error: err instanceof Error ? err.message : String(err),
      });
    }
    if (delayMs > 0) {
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  return results;
}

// --- Example usage ---
//
// const result = await geocodeAddress("1032 W. Main St., Medford, OR 97501");
// if (result) {
//   console.log(result.latitude, result.longitude, result.matchedAddress);
// } else {
//   console.log("No match found — flag for manual review");
// }

geocodeAddresses([
  "1032 W. Main St., Medford, OR 97501",
  "1600 Pennsylvania Ave NW, Washington, DC 20500",
  "1 Infinite Loop, Cupertino, CA 95014",
]).then((results) => {
  for (const { address, result, error } of results) {
    if (error) {
      console.error(`Error geocoding "${address}": ${error}`);
    } else if (result) {
      console.log(`Geocoded "${address}" to ${result.latitude}, ${result.longitude}`);
    } else {
      console.log(`No match found for "${address}"`);
    }
  }
});
