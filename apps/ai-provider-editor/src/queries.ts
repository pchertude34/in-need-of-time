import { queryOptions } from "@tanstack/react-query";
import { resolveQuery, type SanityInstance } from "@sanity/sdk-react";
import { SANITY_APP_PROVIDER_AGENT_API_URL } from "../env";
import type { GeocodeResult } from "@in-need-of-time/utils";
import type { AgentJob } from "./pages/AgentRuns/types";
import type { ServiceType } from "./types";

/** The coordinates `GET /geocode` returns — the geocoder's result, without its raw match. */
export type GeocodedAddress = Pick<GeocodeResult, "latitude" | "longitude" | "matchedAddress">;

// Every query's key starts here, so a mutation can invalidate one job's data or
// the whole agent-jobs cache without guessing at key shapes.
export const AGENT_JOBS_QUERY_KEY = ["agent-jobs"];

export const SERVICE_TYPES_QUERY_KEY = ["service-types"];

// ~150ft — close enough to be the same building, not just the same block.
// Checks both the current location field and the legacy `place.location` one,
// since older providers (pre-dating this app) only have the latter.
export const DUPLICATE_ADDRESS_RADIUS_METERS = 45;

export const DUPLICATE_PROVIDERS_GROQ = `*[_type == "provider" && (
  (defined(location) && geo::distance(geo::latLng(location.lat, location.lng), geo::latLng($lat, $lng)) < $radius) ||
  (defined(place.location) && geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng($lat, $lng)) < $radius)
)] {_id, title, "address": coalesce(address, place.address)}`;

// The same service types the agent chooses from — `get_service_types` reads this
// list too, so the ids it returns line up with the ones offered in the form.
const SERVICE_TYPES_GROQ = `*[_type == "serviceType"] | order(name asc) {_id, name}`;

// Long enough that the dropdown isn't refetching on every mount, short enough
// that a service type added in Studio turns up without a hard refresh. This is
// a plain fetch, so nothing pushes changes in — see `resolveQuery` below.
const SERVICE_TYPES_STALE_TIME_MS = 5 * 60 * 1000;

/**
 * Every service type, for the provider form's picker.
 *
 * `resolveQuery` rather than the SDK's `useQuery` hook: that hook suspends on
 * first load with no way to opt out, and the picker wants an ordinary pending
 * flag so it can render a disabled control instead of disappearing. The trade is
 * liveness — this is a one-shot fetch, not a subscription to the Live Content API.
 */
export function serviceTypesQuery(instance: SanityInstance) {
  return queryOptions({
    queryKey: SERVICE_TYPES_QUERY_KEY,
    queryFn: () => resolveQuery<ServiceType[]>(instance, { query: SERVICE_TYPES_GROQ }),
    staleTime: SERVICE_TYPES_STALE_TIME_MS,
  });
}

/**
 * `fetch` against the provider-agent API, carrying the session.
 *
 * The token is a parameter rather than something this module reaches for: it
 * lives in React state, owned by `useSession()`. Callers pass it in and gate
 * their query on `enabled: !!sessionToken`, so a request never fires before
 * there's a session to make it with.
 *
 * Throwing on a missing token is deliberate — a mis-gated caller should fail
 * loudly here rather than send an unauthenticated request and get a 401 that
 * looks like an expired session.
 */
async function apiFetch(token: string | undefined, path: string, init: RequestInit = {}): Promise<Response> {
  if (!token) {
    throw new Error("No session token provided");
  }

  return fetch(`${SANITY_APP_PROVIDER_AGENT_API_URL}${path}`, {
    ...init,
    headers: { ...init.headers, Authorization: `Bearer ${token}` },
  });
}

/** Every job the provider agent has run, newest first. */
export async function fetchAgentJobs(token?: string): Promise<AgentJob[]> {
  const response = await apiFetch(token, "/provider-agent/jobs");

  if (!response.ok) {
    throw new Error(`Could not load runs: request failed with ${response.status}`);
  }

  return response.json();
}

/**
 * Starts a provider research run and returns its job id.
 *
 * Who triggered it isn't sent — the API takes that from the session, so the name
 * on a job is the one the token proves rather than one the client claims.
 */
export async function createAgentJob(token: string | undefined, input: string, location: string): Promise<string> {
  const response = await apiFetch(token, "/provider-agent/jobs", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ input, location }),
  });

  if (!response.ok) {
    throw new Error(`Could not start a run: request failed with ${response.status}`);
  }

  const { jobId } = (await response.json()) as { jobId: string };

  return jobId;
}

/**
 * The coordinates of a free-form US address, or null if the geocoder couldn't
 * match it. Goes through the API rather than calling the Census geocoder from
 * the browser, so the form resolves an address exactly the way the provider
 * agent's `geocode_address` tool does.
 */
export async function geocodeAddress(token: string | undefined, address: string): Promise<GeocodedAddress | null> {
  const response = await apiFetch(token, `/geocode?address=${encodeURIComponent(address)}`);

  if (!response.ok) {
    throw new Error(`Could not look up coordinates: request failed with ${response.status}`);
  }

  return response.json();
}

/** Permanently removes a job, its timeline, and its run. Cancels the run if it's still going. */
export async function deleteAgentJob(token: string | undefined, jobId: string) {
  const response = await apiFetch(token, `/provider-agent/jobs/${jobId}`, { method: "DELETE" });

  if (!response.ok) {
    throw new Error(`Could not delete run: request failed with ${response.status}`);
  }
}

/**
 * The websocket URL for a job's event stream, and the subprotocols that
 * authenticate it.
 *
 * A browser can't set headers on `new WebSocket()`, so the session token rides
 * in `Sec-WebSocket-Protocol` instead of the query string — a URL ends up in
 * access logs, and a token shouldn't.
 */
export function getSocketArgs(token: string, jobId: string): [string, string[]] {
  const url = new URL(`${SANITY_APP_PROVIDER_AGENT_API_URL}/provider-agent/ws`);

  // Same origin as the API, just the websocket scheme for it.
  url.protocol = url.protocol === "https:" ? "wss:" : "ws:";
  url.searchParams.set("jobId", jobId);

  return [url.toString(), ["bearer", token]];
}
