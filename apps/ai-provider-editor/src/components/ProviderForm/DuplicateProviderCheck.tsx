import { useEffect } from "react";
import { useQuery } from "@sanity/sdk-react";
import { classifyDuplicateMatches } from "@in-need-of-time/utils";
import type { DuplicateCheckResult, DuplicateProviderCandidate } from "@in-need-of-time/utils";
import type { Location } from "@in-need-of-time/types";
import { DUPLICATE_ADDRESS_RADIUS_METERS, DUPLICATE_PROVIDERS_GROQ } from "../../queries";

export type DuplicateCheckState = {
  result: DuplicateCheckResult;
  /** True while a new lookup is resolving — the result is the previous one until it lands. */
  isPending: boolean;
};

export const IDLE_DUPLICATE_CHECK: DuplicateCheckState = {
  result: { status: "none", matches: [] },
  isPending: false,
};

type DuplicateProviderCheckProps = {
  coordinates: Location;
  name: string;
  /** Must be referentially stable — it's an effect dependency. Pass a state setter. */
  onChange: (state: DuplicateCheckState) => void;
};

/**
 * Looks up providers already in the directory near `coordinates` and scores them
 * against `name`.
 *
 * The SDK's `useQuery` rather than a one-shot fetch: it stays subscribed, so it
 * picks up the re-fetch that happens once the client's auth token resolves.
 * A one-shot read settles on the first, still-anonymous result — which can't see
 * drafts, and drafts are exactly what this app creates.
 *
 * Renders nothing. It exists so the hook has a component to live in, and so the
 * Suspense boundary its first load needs can wrap this alone rather than the form.
 */
export function DuplicateProviderCheck(props: DuplicateProviderCheckProps) {
  const { coordinates, name, onChange } = props;

  const { data, isPending } = useQuery<DuplicateProviderCandidate[]>({
    query: DUPLICATE_PROVIDERS_GROQ,
    params: { lat: coordinates.lat, lng: coordinates.lng, radius: DUPLICATE_ADDRESS_RADIUS_METERS },
  });

  useEffect(() => {
    onChange({ result: classifyDuplicateMatches(data ?? [], name), isPending });
  }, [data, name, isPending, onChange]);

  return null;
}
