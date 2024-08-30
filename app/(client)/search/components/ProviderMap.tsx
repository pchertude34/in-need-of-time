"use client";

import React, { useEffect, useRef } from "react";
import { GoogleMapsProxy } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "@/sanity/components/MapInput/GoogleMap";

const DEFUALT_LOCATION = { lat: 45.5152, lng: -122.6784 };

type MapProps = {
  className?: string;
};

export function ProviderMap(props: MapProps) {
  const { className } = props;
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);

  return (
    <GoogleMapsProxy>
      {(googleMapsApi) => (
        <GoogleMap
          googleMapApi={googleMapsApi}
          location={DEFUALT_LOCATION}
          className="h-[calc(100vh-88px)] w-full"
          // style={{ height: "600px", width: "100%" }}
        />
      )}
    </GoogleMapsProxy>
  );
}
