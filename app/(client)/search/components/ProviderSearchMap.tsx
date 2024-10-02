"use client";

import React, { useEffect, useRef } from "react";
import { GoogleMapsProxy } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "@/components/maps/GoogleMap";
import { MapMarker } from "@/components/maps/MapMarker";
import { Location, Provider } from "@/lib/types";
import { ProviderMapMarker } from "./ProviderMapMarker";

const DEFUALT_LOCATION = { lat: 45.5152, lng: -122.6784 };

type MapProps = {
  className?: string;
  center?: Location;
  providerList?: Provider[];
  mapSettings?: google.maps.MapOptions;
  children?: React.ReactNode;
};

export function ProviderSearchMap(props: MapProps) {
  const { providerList = [], center = DEFUALT_LOCATION, mapSettings, className, children } = props;

  return (
    <GoogleMapsProxy>
      {(googleMapsApi) => (
        <GoogleMap
          googleMapsApi={googleMapsApi}
          center={center}
          className={className}
          mapSettings={{
            zoomControlOptions: {
              position: googleMapsApi.ControlPosition.RIGHT_CENTER,
              style: googleMapsApi.ZoomControlStyle.SMALL,
            },
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            gestureHandling: "greedy",
          }}
        >
          {(map) => (
            <>
              {providerList.map((provider) => (
                <ProviderMapMarker
                  key={provider._id}
                  googleMapsApi={googleMapsApi}
                  googleMap={map}
                  provider={provider}
                />
              ))}
              {children}
            </>
          )}
        </GoogleMap>
      )}
    </GoogleMapsProxy>
  );
}
