"use client";

import React, { useEffect, useRef } from "react";
import { GoogleMapsProxy } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "@/components/maps/GoogleMap";

const DEFUALT_LOCATION = { lat: 45.5152, lng: -122.6784 };

type MapProps = {
  className?: string;
  children?: React.ReactNode;
};

export function ProviderMap(props: MapProps) {
  const { className, children } = props;
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return (
    <GoogleMapsProxy>
      {(googleMapsApi) => (
        <GoogleMap
          googleMapsApi={googleMapsApi}
          location={DEFUALT_LOCATION}
          className={className}
          mapSettings={{
            zoomControlOptions: {
              position: googleMapsApi.ControlPosition.RIGHT_BOTTOM,
              style: googleMapsApi.ZoomControlStyle.SMALL,
            },
            mapTypeControlOptions: {
              position: googleMapsApi.ControlPosition.BOTTOM_RIGHT,
            },
            streetViewControl: true,
            streetViewControlOptions: {
              position: googleMapsApi.ControlPosition.RIGHT_BOTTOM,
            },
            mapTypeControl: true,
            fullscreenControl: false,
          }}
        >
          {(map) => <>{children}</>}
        </GoogleMap>
      )}
    </GoogleMapsProxy>
  );
}
