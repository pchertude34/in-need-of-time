"use client";
import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useGoogleMaps } from "@/hooks/useGoogleMaps";

const DEFUALT_LOCATION = { lat: 45.5152, lng: -122.6784 };
const DEFAULT_MAP_SETTINGS = {
  zoom: 8,
  streetViewControl: false,
  mapTypeControl: true,
  fullscreenControl: true,
};

type GoogleMapProps = {
  googleMapsApi: typeof window.google.maps;
  location?: { lat: number; lng: number };
  onMapClick?: (event: google.maps.MapMouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
  children?: (map: google.maps.Map) => React.ReactNode;
  mapSettings?: google.maps.MapOptions;
};

export function GoogleMap(props: GoogleMapProps) {
  const { googleMapsApi, mapSettings, location = DEFUALT_LOCATION, onMapClick, style, className, children } = props;
  const [map, setMap] = useState<google.maps.Map | undefined>();
  // const mapRef = useRef<google.maps.Map | undefined>();
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  // Ref for the click hander so we can remove it when the map unmounts
  // or the click handler changes
  const mapClickHandlerRef = useRef<google.maps.MapsEventListener | undefined>(undefined);

  // Set the click handler on the map
  useEffect(() => {
    if (!map) return;

    // Remove existing click handlers to avoid multiple click handlers on the map
    if (mapClickHandlerRef.current) {
      mapClickHandlerRef.current.remove();
    }

    // Add the new click handler to the map
    if (onMapClick) {
      const clickHandler = googleMapsApi.event.addListener(map, "click", onMapClick);
      mapClickHandlerRef.current = clickHandler;
    }
  }, [onMapClick, map]);

  // Clean up the map click handler when the map unmounts
  useEffect(() => {
    return () => {
      if (mapClickHandlerRef.current) {
        mapClickHandlerRef.current.remove();
      }
    };
  }, []);

  function getCenter() {
    return new googleMapsApi.LatLng(location.lat, location.lng);
  }

  // Build the map and place it on the element parameter
  function constructMap(element: HTMLDivElement) {
    const map = new googleMapsApi.Map(element, {
      center: getCenter(),
      ...DEFAULT_MAP_SETTINGS,
      ...mapSettings,
    });

    return map;
  }

  // Custom ref setting function to call on the map container.
  // This will construct the map when the element is rendered and prevets
  // any additional map placements on the same element.
  const setMapElement = useCallback((element: HTMLDivElement | null) => {
    if (element && element !== mapElementRef.current) {
      const newMap = constructMap(element);
      setMap(newMap);
    }
    mapElementRef.current = element;
  }, []);

  return (
    <>
      <div style={style} className={className}>
        <div ref={setMapElement} style={{ height: "100%", width: "100%" }}></div>
      </div>
      {map && children && children(map)}
    </>
  );
}
