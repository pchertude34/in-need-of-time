"use client";

import React from "react";
import { GoogleMapsProxy } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "@/components/maps/GoogleMap";
import { MapMarker } from "@/components/maps/MapMarker";
import type { Location } from "@/lib/types";

type ProviderDetailsMapProps = {
  className?: string;
  providerLocation: Location;
};

export function ProviderDetailsMap(props: ProviderDetailsMapProps) {
  const { providerLocation, className } = props;
  return (
    <GoogleMapsProxy>
      {(googleMapsApi) => (
        <GoogleMap
          googleMapsApi={googleMapsApi}
          className={className}
          center={providerLocation}
          mapSettings={{
            zoom: 14,
            zoomControlOptions: {
              position: googleMapsApi.ControlPosition.TOP_RIGHT,
            },
            streetViewControlOptions: {
              position: googleMapsApi.ControlPosition.TOP_RIGHT,
            },
            streetViewControl: true,
            fullscreenControl: false,
          }}
        >
          {(map) => <MapMarker googleMapsApi={googleMapsApi} googleMap={map} position={providerLocation} />}
        </GoogleMap>
      )}
    </GoogleMapsProxy>
  );
}
