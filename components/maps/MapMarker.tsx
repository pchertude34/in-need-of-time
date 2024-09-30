import { useEffect, useRef } from "react";
import type { Location } from "@/lib/types";

type MapMarkerProps = {
  googleMapsApi: typeof window.google.maps;
  googleMap: google.maps.Map;
  position: Location;
  onMove?: (event: google.maps.MapMouseEvent) => void;
  onClick?: (event: google.maps.MapMouseEvent) => void;
};

export function MapMarker(props: MapMarkerProps) {
  const { googleMapsApi, googleMap, position, onClick, onMove } = props;

  const markerRef = useRef<google.maps.Marker | undefined>(undefined);
  const markerMoveHandlerRef = useRef<google.maps.MapsEventListener | undefined>(undefined);
  const markerClickHandlerRef = useRef<google.maps.MapsEventListener | undefined>(undefined);

  useEffect(() => {
    if (!markerRef.current) {
      const marker = new googleMapsApi.Marker({
        position: getPosition(),
        map: googleMap,
        draggable: onMove ? true : false,
      });

      markerRef.current = marker;
      attachClickHandler();
      attachMoveHandler();
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null);
        markerRef.current = undefined;
      }
    };
  }, []);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setPosition(position);
    }
  }, [position]);

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

  function attachMoveHandler() {
    if (markerMoveHandlerRef.current) {
      markerMoveHandlerRef.current.remove();
    }
    if (markerRef.current && onMove) {
      markerMoveHandlerRef.current = googleMapsApi.event.addListener(markerRef.current, "dragend", onMove);
    }
  }

  return null;
}
