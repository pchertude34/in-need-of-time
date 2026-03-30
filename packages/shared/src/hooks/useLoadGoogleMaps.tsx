"use client";

import { useEffect, useState } from "react";
import { loadGoogleMapsApi } from "./loadGoogleMapsApi";

export class AuthError extends Error {}

type useGoogleMapsParams = {
  apiKey: string;
};

export function useLoadGoogleMaps({ apiKey }: useGoogleMapsParams) {
  const [isLoadingMaps, setIsLoadingMaps] = useState(true);
  const [mapsError, setMapsError] = useState<string | null>(null);
  const [googleMapsApi, setGoogleMapsApi] = useState<typeof window.google.maps | undefined>();

  useEffect(() => {
    loadGoogleMapsApi({
      locale: "en-US",
      apiKey: apiKey,
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
  apiKey: string;
  children: (googleMapsApi: typeof window.google.maps) => React.ReactNode;
};

export function GoogleMapsProxy(props: GoogleMapsProxyProps) {
  const { apiKey, children } = props;
  const { isLoadingMaps, mapsError, googleMapsApi } = useLoadGoogleMaps({ apiKey });

  if (isLoadingMaps) {
    return <div>Loading maps...</div>;
  } else if (mapsError) {
    return <div>Error loading maps: {mapsError}</div>;
  } else if (googleMapsApi) {
    return children(googleMapsApi);
  }
  return null;
}
