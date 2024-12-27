"use client";

import React, { useState, useEffect } from "react";
import { useGooglePlaceSearch } from "./useGooglePlaceSearch";
import type { Location } from "@/lib/types";
import { toast } from "sonner";

const DEFAULT_PLACEHOLDER = "Enter your location";
const USING_LOCATION_PLACEHOLER = "Using your location";
const CALCULATING_LOCATION_PLACEHOLDER = "Calculating your location...";

type UseLocationInputParams = {
  onLocationChange?: (location: Location | null) => void;
  ref: React.RefObject<HTMLInputElement>;
};

export function useLocationInput(params: UseLocationInputParams) {
  const { onLocationChange, ref } = params;

  const [location, setLocation] = useState<Location | null>(null);
  const [isCalculatingLocation, setIsCalculatingLocation] = useState(false);

  const placeholder = isCalculatingLocation ? CALCULATING_LOCATION_PLACEHOLDER : DEFAULT_PLACEHOLDER;

  useGooglePlaceSearch({
    refElem: ref,
    fields: ["address_components", "geometry", "name", "place_id"],
    types: ["address"],
    onPlaceChange: (place) => {
      const latitude = place?.geometry?.location?.lat();
      const longitude = place?.geometry?.location?.lng();
      if (latitude && longitude) {
        setLocation({ lat: latitude, lng: longitude });
      }
    },
  });

  useEffect(() => {
    onLocationChange && onLocationChange(location);
  }, [location, onLocationChange]);

  /**
   * Use native browser functionality to calculate the user's current coordinates.
   * This will require the user to enable location services.
   */
  function calculateLocation() {
    setIsCalculatingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { coords } = position;
        setLocation({ lat: coords.latitude, lng: coords.longitude });
        setIsCalculatingLocation(false);

        // Update the input value to show that we are using the user's location
        if (ref.current) {
          ref.current.value = USING_LOCATION_PLACEHOLER;
        }
      },
      (error) => {
        setIsCalculatingLocation(false);
        setLocation(null);

        toast.error("Unable to use current location", {
          description:
            "Please enable location services and try again, or use the search bar to enter your location manually.",
        });
      },
    );
  }

  function handleKeyDown() {
    if (location) {
      setLocation(null);

      if (ref.current) {
        ref.current.value = "";
      }
    }
  }

  return { location, placeholder, calculateLocation, handleKeyDown };
}
