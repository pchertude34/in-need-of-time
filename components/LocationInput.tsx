"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { LocateFixed } from "lucide-react";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useGooglePlaceSearch } from "@/hooks/useGooglePlaceSearch";
import { cn } from "@/lib/utils";
import type { Location } from "@/lib/types";

const DEFAULT_PLACEHOLDER = "Enter your location";
const USING_LOCATION_PLACEHOLER = "Using your location";

type LocationInputProps = {
  onLocationChange: (location: Location) => void;
  className?: string;
};
export function LocationInput(props: LocationInputProps) {
  const { onLocationChange, className } = props;

  const [location, setLocation] = useState<Location | null>(null);
  const [isCalculatingLocation, setIsCalculatingLocation] = useState(false);

  const addressInputRef = useRef<HTMLInputElement>(null);

  const { place } = useGooglePlaceSearch({
    refElem: addressInputRef,
    fields: ["address_components", "geometry", "name", "place_id"],
    types: ["address"],
  });

  // Call the onLocationChange prop function in this use effect when the location changes
  // since location can change in two places. (either from the places input, or the "use my current location" button)
  useEffect(() => {
    const latitude = place?.geometry?.location.lat();
    const longitude = place?.geometry?.location.lng();

    if (latitude && longitude) {
      onLocationChange({ longitude, latitude });
    }
  }, [place, onLocationChange]);

  /**
   * Use native browser functionality to calculate the user's current coordinates.
   * This will require the user to enable location services.
   */
  function calculateLocation() {
    setIsCalculatingLocation(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      setLocation({ latitude: coords.latitude, longitude: coords.longitude });
    });
    setIsCalculatingLocation(false);

    // Update the input value to show that we are using the user's location
    if (addressInputRef.current) {
      addressInputRef.current.value = USING_LOCATION_PLACEHOLER;
    }
  }

  return (
    <InputGroup className={className}>
      <InputLeftElement>
        <MapPinIcon className="h-4 w-4 text-slate-500" />
      </InputLeftElement>
      <Input
        ref={addressInputRef}
        className=" rounded-full border-transparent px-10 focus:border focus:border-slate-400 focus:bg-slate-50"
        type="text"
        placeholder={DEFAULT_PLACEHOLDER}
      />
      <InputRightElement>
        <Button variant="text-primary" size="text" onClick={calculateLocation}>
          <LocateFixed className="h-4 w-4" />
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
