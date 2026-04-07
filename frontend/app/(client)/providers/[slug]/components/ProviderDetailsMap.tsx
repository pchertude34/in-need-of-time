"use client";

import React from "react";
import { GoogleMapsProxy } from "@in-need-of-time/hooks";
import { GoogleMap } from "@/components/maps/GoogleMap";
import { MapMarker } from "@/components/maps/MapMarker";
import { NEXT_PUBLIC_GOOGLE_API_KEY } from "@/env";
import type { Location } from "@in-need-of-time/types";

type ProviderDetailsMapProps = {
  className?: string;
  providerLocation: Location;
};

export function ProviderDetailsMap(props: ProviderDetailsMapProps) {
  const { providerLocation, className } = props;
  return (
    <GoogleMapsProxy apiKey={NEXT_PUBLIC_GOOGLE_API_KEY}>
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
