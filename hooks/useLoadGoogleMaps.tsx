"use client";

import { useEffect, useState } from "react";
import { loadGoogleMapsApi } from "@/lib/loadGoogleMapsApi";
import { NEXT_PUBLIC_GOOGLE_API_KEY } from "@/env";

export class AuthError extends Error {}

export function useLoadGoogleMaps() {
  const [isLoadingMaps, setIsLoadingMaps] = useState(true);
  const [mapsError, setMapsError] = useState<string | null>(null);
  const [googleMapsApi, setGoogleMapsApi] = useState<typeof window.google.maps | undefined>();

  useEffect(() => {
    loadGoogleMapsApi({
      locale: "en-US",
      apiKey: NEXT_PUBLIC_GOOGLE_API_KEY,
    }).then(
      (maps) => {
        setIsLoadingMaps(false);
        setMapsError(null);
        setGoogleMapsApi(maps);
      },
      (err: AuthError | Error) => {
        setMapsError(err instanceof AuthError ? "Authentication error" : err.message);
        setIsLoadingMaps(false);
      },
    );
  }, []);

  return { isLoadingMaps, mapsError, googleMapsApi };
}

type GoogleMapsProxyProps = {
  children: (googleMapsApi: typeof window.google.maps) => React.ReactNode;
};

export function GoogleMapsProxy(props: GoogleMapsProxyProps) {
  const { children } = props;
  const { isLoadingMaps, mapsError, googleMapsApi } = useLoadGoogleMaps();

  if (isLoadingMaps) {
    return <div>Loading maps...</div>;
  } else if (mapsError) {
    return <div>Error loading maps: {mapsError}</div>;
  } else if (googleMapsApi) {
    return children(googleMapsApi);
  }
  return null;
}
