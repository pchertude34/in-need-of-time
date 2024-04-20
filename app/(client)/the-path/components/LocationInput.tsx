"use client";

import React, { useEffect, useState, useRef } from "react";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGooglePlaceSearch } from "@/hooks/useGooglePlaceSearch";
import { Label } from "@radix-ui/react-label";

type LocationInputProps = {
  label: string;
  placeholder?: string;
  onLocationChange: ({
    longitude,
    latitude,
  }: {
    longitude: number;
    latitude: number;
  }) => void;
};

export function LocationInput(props: LocationInputProps) {
  const { label, placeholder, onLocationChange } = props;
  const [latitude, setLatitude] = useState<number | null>();
  const [longitude, setLongitude] = useState<number | null>();
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
      const { coords } = position;

      setLatitude(coords.latitude);
      setLongitude(coords.longitude);
      setIsCalculatingLocation(false);
    });
  }

  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="address">Street Address</Label>
        <Input ref={placeInputRef} placeholder="1234 S Main St, Portland OR" />
      </div>
      <div>
        <p className="mb-2">Or use your current location:</p>
        <Button>Use Current Location</Button>
      </div>
    </div>
  );
}
