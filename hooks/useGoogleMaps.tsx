import { useEffect, useState } from "react";
import { loadGoogleMapsApi } from "@/lib/loadGoogleMapsApi";
import { NEXT_PUBLIC_GOOGLE_API_KEY } from "@/env";

export class AuthError extends Error {}

export function useGoogleMaps() {
  const [isLoadingMaps, setIsLoadingMaps] = useState(true);
  const [mapsError, setMapsError] = useState<string | null>(null);
  const [googleMaps, setGoogleMaps] = useState<
    typeof window.google.maps | null
  >(null);

  useEffect(() => {
    loadGoogleMapsApi({
      locale: "en-US",
      apiKey: NEXT_PUBLIC_GOOGLE_API_KEY,
    }).then(
      (maps) => {
        setIsLoadingMaps(false);
        setMapsError(null);
        setGoogleMaps(maps);
      },
      (err: AuthError | Error) => {
        setMapsError(
          err instanceof AuthError ? "Authentication error" : err.message,
        );
        setIsLoadingMaps(false);
      },
    );
  }, []);

  return { isLoadingMaps, mapsError, googleMaps };
}
