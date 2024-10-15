"use client";

import { useEffect, useRef } from "react";
import type { Location } from "@/lib/types";

const DEFAULT_BACKGROUND_COLOR = "#285562";
const DEFAULT_BORDER_COLOR = "#142E38";
const DEFAULT_GLYPH_COLOR = "#ffffff";

type AdvancedMapMarkerProps = {
  googleMapsApi: typeof window.google.maps;
  googleMap: google.maps.Map;
  position: Location;
  backgroundColor?: string;
  borderColor?: string;
  glyphColor?: string;
  onMove?: (event: google.maps.MapMouseEvent) => void;
  onClick?: (event: google.maps.MapMouseEvent) => void;
};

export function AdvancedMapMarker(props: AdvancedMapMarkerProps) {
  const {
    googleMapsApi,
    googleMap,
    position,
    backgroundColor = DEFAULT_BACKGROUND_COLOR,
    borderColor = DEFAULT_BORDER_COLOR,
    glyphColor = DEFAULT_GLYPH_COLOR,
    onClick,
    onMove,
  } = props;

  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | undefined>(undefined);
  const markerMoveHandlerRef = useRef<google.maps.MapsEventListener | undefined>(undefined);
  const markerClickHandlerRef = useRef<google.maps.MapsEventListener | undefined>(undefined);

  useEffect(() => {
    if (!markerRef.current) {
      const pin = new googleMapsApi.marker.PinElement({
        glyphColor: glyphColor,
        background: backgroundColor,
        borderColor: borderColor,
      });

      const marker = new googleMapsApi.marker.AdvancedMarkerElement({
        position: getPosition(),
        gmpClickable: onClick ? true : false,
        gmpDraggable: onMove ? true : false,
        map: googleMap,
        content: pin.element,
      });

      markerRef.current = marker;
      attachClickHandler();
      attachMoveHandler();
    }

    return () => {
      if (markerRef.current) {
        markerRef.current.map = null;
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
