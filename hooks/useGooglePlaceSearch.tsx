"use client";

import { useRef, useState, useEffect } from "react";
import { useLoadGoogleMaps } from "./useLoadGoogleMaps";

type UseGooglePlaceSearchParams = {
  refElem: React.RefObject<HTMLInputElement>;
  componentRestrictions?: any;
  fields: string[];
  types: string[];
  onPlaceChange?: (place: google.maps.places.PlaceResult | undefined) => void;
};

const DEFAULT_COMPONENT_RESTRICTIONS = { country: ["us"] };
const LISTENER_TYPE = "place_changed";

export function useGooglePlaceSearch(params: UseGooglePlaceSearchParams) {
  const { refElem, componentRestrictions = DEFAULT_COMPONENT_RESTRICTIONS, fields, types, onPlaceChange } = params;
  const [place, setPlace] = useState<google.maps.places.PlaceResult>();
  const { isLoadingMaps, googleMapsApi, mapsError } = useLoadGoogleMaps();
  const autocomplete = useRef<google.maps.places.Autocomplete>();
  const autocompleteListener = useRef<google.maps.MapsEventListener>();

  useEffect(() => {
    // We want to make sure autocomplete isn't initialized already, otherwise
    // google places might render a bunch of dropdowns.
    if (googleMapsApi && refElem.current && !autocomplete.current) {
      // Initialize the google places autocomplete on the input being passed into the hook.
      autocomplete.current = new googleMapsApi.places.Autocomplete(refElem.current, {
        componentRestrictions,
        fields,
        types,
      });

      autocompleteListener.current = autocomplete.current.addListener(LISTENER_TYPE, () => {
        const place = autocomplete.current?.getPlace();
        setPlace(place);
        onPlaceChange && onPlaceChange(place);
      });
    }
  }, [isLoadingMaps, types, fields, componentRestrictions, onPlaceChange, refElem]);

  // Function to clean up the autocomplete listener
  function cleanup() {
    autocompleteListener.current?.remove();
  }

  return { place, isLoadingMaps, mapsError, cleanup };
}
