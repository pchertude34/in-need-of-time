import { useEffect, useRef } from "react";
import type { Location } from "@/lib/types";

type ProvierMapMarkerProps = {
  googleMapsApi: typeof window.google.maps;
  googleMap: google.maps.Map;
  position: Location;
  onMove?: (event: google.maps.MapMouseEvent) => void;
  onClick?: (event: google.maps.MapMouseEvent) => void;
};

export function ProviderMapMarker(props: ProvierMapMarkerProps) {
  const { googleMapsApi, googleMap, position, onClick } = props;

  const markerRef = useRef<google.maps.Marker | undefined>(undefined);
  const markerClickHandlerRef = useRef<google.maps.MapsEventListener | undefined>(undefined);

  useEffect(() => {
    console.log("mounting marker");
    if (!markerRef.current) {
      const marker = new googleMapsApi.Marker({
        position: getPosition(),
        map: googleMap,
      });

      markerRef.current = marker;
      attachClickHandler();
    }

    return () => {
      console.log("cleaning up marker");
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = undefined;
      }
    };
  }, []);

  function getPosition() {
    return new googleMapsApi.LatLng(position.lat, position.lng);
  }

  function attachClickHandler() {
    if (markerClickHandlerRef.current) {
      markerClickHandlerRef.current.remove();
    }
    if (markerRef.current && onClick) {
      markerClickHandlerRef.current = googleMapsApi.event.addListener(markerRef.current, "click", onClick);
    }
  }

  return null;
}
