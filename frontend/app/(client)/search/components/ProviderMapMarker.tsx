"use client";

import React, { useEffect, useRef } from "react";
import { AdvancedMapMarker } from "@in-need-of-time/components";
import { ProviderMapPopup } from "./ProviderMapPopup";
import type { Provider } from "@in-need-of-time/types";
import type { MapPopup as MapPopupType } from "@in-need-of-time/components";

type ProvierMapMarkerProps = {
  googleMapsApi: typeof window.google.maps;
  googleMap: google.maps.Map;
  provider: Provider;
};

export function ProviderMapMarker(props: ProvierMapMarkerProps) {
  const { googleMapsApi, googleMap, provider } = props;

  const popupRef = useRef<MapPopupType | undefined>(undefined);

  useEffect(() => {
    async function loadProviderPopover() {
      // We need to dynamically import MapPopup since the google maps is not defined
      // on compilation. This will ensure google maps is available before trying to create
      // a class that extends it.
      // An unfortunate circumstance of loading google maps from a script tag.
      const { MapPopup } = await import("@in-need-of-time/components");

      if (!popupRef.current) {
        const popup = new MapPopup(
          new googleMapsApi.LatLng(provider.place.location.lat, provider.place.location.lng),
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
    }

    loadProviderPopover();
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
      position={provider.place.location}
      onClick={handleMarkerClick}
    />
  );
}
