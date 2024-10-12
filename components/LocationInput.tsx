"use client";

import React, { useState, useEffect, useRef } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { LocateFixed } from "lucide-react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useGooglePlaceSearch } from "@/hooks/useGooglePlaceSearch";
import { cn } from "@/lib/utils";
import type { Location } from "@/lib/types";

const DEFAULT_PLACEHOLDER = "Enter your location";
const USING_LOCATION_PLACEHOLER = "Using your location";
const CALCULATING_LOCATION_PLACEHOLDER = "Calculating your location...";

type LocationInputProps = {
  onLocationChange: (location: Location | null) => void;
  className?: string;
};
export function LocationInput(props: LocationInputProps) {
  const { onLocationChange, className } = props;

  const [location, setLocation] = useState<Location | null>(null);
  const [isCalculatingLocation, setIsCalculatingLocation] = useState(false);

  const addressInputRef = useRef<HTMLInputElement>(null);

  useGooglePlaceSearch({
    refElem: addressInputRef,
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

  // Call the onLocationChange prop function in this use effect when the location changes
  // since location can change in multiple places.
  useEffect(() => {
    onLocationChange(location);
  }, [location]);

  /**
   * Use native browser functionality to calculate the user's current coordinates.
   * This will require the user to enable location services.
   */
  function calculateLocation() {
    setIsCalculatingLocation(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      setLocation({ lat: coords.latitude, lng: coords.longitude });
    });
    setIsCalculatingLocation(false);

    // Update the input value to show that we are using the user's location
    if (addressInputRef.current) {
      addressInputRef.current.value = USING_LOCATION_PLACEHOLER;
    }
  }

  /**
   * Handler for the location input onKeyDown event.
   * If the user changes the input when a location is set, clear the location
   * and reset the input value.
   */
  function handleKeyDown() {
    if (location) {
      setLocation(null);

      if (addressInputRef.current) {
        addressInputRef.current.value = "";
      }
    }
  }

  return (
    <InputGroup className={className}>
      <InputLeftElement>
        <MapPinIcon className="h-4 w-4 text-slate-500" />
      </InputLeftElement>
      <Input
        ref={addressInputRef}
        className={cn("grow-0 rounded-full  pl-10 pr-14 focus:border  focus:bg-slate-50", {
          "border-transparent focus:border-slate-400": !location,
        })}
        type="text"
        placeholder={isCalculatingLocation ? CALCULATING_LOCATION_PLACEHOLDER : DEFAULT_PLACEHOLDER}
        onKeyDown={handleKeyDown}
        variant={location ? "success" : "primary"}
      />
      <InputRightElement>
        {location && <CheckCircleIcon className="mr-1 h-5 w-5 text-success-400" />}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="text-primary" size="text" onClick={calculateLocation}>
              <LocateFixed className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Use my location</TooltipContent>
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  );
}
