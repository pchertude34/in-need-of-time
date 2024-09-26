"use client";

import React, { useEffect, useRef } from "react";
import { GoogleMapsProxy } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "@/components/maps/GoogleMap";
import { MapMarker } from "@/components/maps/MapMarker";
import { Location, Provider } from "@/lib/types";

const DEFUALT_LOCATION = { lat: 45.5152, lng: -122.6784 };

type MapProps = {
  className?: string;
  center?: Location;
  providerList?: Provider[];
  children?: React.ReactNode;
};

export function ProviderMap(props: MapProps) {
  const { providerList = [], center = DEFUALT_LOCATION, className, children } = props;
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

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
                <MapMarker
                  key={provider._id}
                  googleMapsApi={googleMapsApi}
                  googleMap={map}
                  position={provider.place.location}
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
