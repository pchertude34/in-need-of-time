"use client";

import React, { useEffect, useRef } from "react";
import { AdvancedMapMarker, createMapPopup, type MapPopup } from "@in-need-of-time/components";
import { ProviderMapPopup } from "./ProviderMapPopup";
import type { Location, Provider } from "@in-need-of-time/types";

type ProvierMapMarkerProps = {
  googleMapsApi: typeof window.google.maps;
  googleMap: google.maps.Map;
  provider: Provider;
  // Passed separately because `provider.location` is optional, and a marker
  // can't be placed without one.
  location: Location;
};

export function ProviderMapMarker(props: ProvierMapMarkerProps) {
  const { googleMapsApi, googleMap, provider, location } = props;

  const popupRef = useRef<MapPopup | undefined>(undefined);

  useEffect(() => {
    if (!popupRef.current) {
      const popup = createMapPopup(
        new googleMapsApi.LatLng(location.lat, location.lng),
        <ProviderMapPopup
          id={provider._id}
          title={provider.title}
          description={provider.description}
          onClose={handlePopupClose}
        />,
      );
      popup.setMap(googleMap);
      popupRef.current = popup;
    }
  }, []);

  function handleMarkerClick() {
    if (popupRef.current) {
      popupRef.current.show();
    }
  }

  function handlePopupClose() {
    if (popupRef.current) {
      popupRef.current.hide();
    }
  }

  return (
    <AdvancedMapMarker
      googleMapsApi={googleMapsApi}
      googleMap={googleMap}
      position={location}
      onClick={handleMarkerClick}
    />
  );
}
