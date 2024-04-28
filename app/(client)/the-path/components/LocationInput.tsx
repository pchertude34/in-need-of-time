"use client";

import React, { useEffect, useState, useRef } from "react";
import { MapPinIcon, ArrowPathIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGooglePlaceSearch } from "@/hooks/useGooglePlaceSearch";
import { Label } from "@radix-ui/react-label";

type LocationInputProps = {
  onLocationChange: ({
    longitude,
    latitude,
  }: {
    longitude: number;
    latitude: number;
  }) => void;
};

export function LocationInput(props: LocationInputProps) {
  const { onLocationChange } = props;
  const [isCalculatingLocation, setIsCalculatingLocation] = useState(false);

  const placeInputRef = useRef<HTMLInputElement>(null);

  const { place } = useGooglePlaceSearch({
    refElem: placeInputRef,
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
      const {
        coords: { latitude, longitude },
      } = position;
      onLocationChange({ latitude, longitude });
      setIsCalculatingLocation(false);
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="address" className="mb-1">
          Street Address
        </Label>
        <Input
          ref={placeInputRef}
          placeholder={"1234 S Main St, Portland OR"}
        />
      </div>
      <div>
        <p className="mb-2">Or use your current location:</p>
        <Button onClick={calculateLocation} disabled={isCalculatingLocation}>
          {isCalculatingLocation ? (
            <React.Fragment>
              <ArrowPathIcon className="mr-2 h-4 w-4 animate-spin" />{" "}
              Calculating Location...
            </React.Fragment>
          ) : (
            <React.Fragment>
              <MapPinIcon className="mr-2 h-4 w-4" /> Use Current Location
            </React.Fragment>
          )}
        </Button>
      </div>
    </div>
  );
}
