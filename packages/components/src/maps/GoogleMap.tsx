"use client";
import type { Location } from "@in-need-of-time/types";
import React, { useState, useEffect, useCallback, useRef } from "react";

const DEFUALT_LOCATION = { lat: 45.5152, lng: -122.6784 };
const DEFAULT_MAP_SETTINGS = {
  zoom: 8,
  streetViewControl: false,
  mapTypeControl: true,
  fullscreenControl: true,
};

type GoogleMapProps = {
  googleMapsApi: typeof window.google.maps;
  center?: Location;
  mapSettings?: google.maps.MapOptions;
  style?: React.CSSProperties;
  className?: string;
  onMapClick?: (event: google.maps.MapMouseEvent) => void;
  children?: (map: google.maps.Map) => React.ReactNode;
  mapId: string;
};

export function GoogleMap(props: GoogleMapProps) {
  const {
    googleMapsApi,
    mapSettings,
    center = DEFUALT_LOCATION,
    onMapClick,
    style,
    className,
    children,
    mapId,
  } = props;
  const [map, setMap] = useState<google.maps.Map | undefined>();
  const mapElementRef = useRef<HTMLDivElement | null>(null);
  const mapClickHandlerRef = useRef<google.maps.MapsEventListener | undefined>(undefined);

  useEffect(() => {
    if (!map) return;

    if (mapClickHandlerRef.current) {
      mapClickHandlerRef.current.remove();
    }

    if (onMapClick) {
      const clickHandler = googleMapsApi.event.addListener(map, "click", onMapClick);
      mapClickHandlerRef.current = clickHandler;
    }
  }, [onMapClick, map]);

  useEffect(() => {
    return () => {
      if (mapClickHandlerRef.current) {
        mapClickHandlerRef.current.remove();
      }
    };
  }, []);

  useEffect(() => {
    if (map && center) {
      map.setCenter(new googleMapsApi.LatLng(center.lat, center.lng));
    }
  }, [center]);

  function getCenter() {
    return new googleMapsApi.LatLng(center.lat, center.lng);
  }

  function constructMap(element: HTMLDivElement) {
    const map = new googleMapsApi.Map(element, {
      mapId,
      center: getCenter(),
      ...DEFAULT_MAP_SETTINGS,
      ...mapSettings,
    });

    return map;
  }

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
        {map && children && children(map)}
        <div ref={setMapElement} style={{ height: "100%", width: "100%" }}></div>
      </div>
    </>
  );
}
