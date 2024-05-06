"use client";

import { useRef, useState, useEffect } from "react";
import { useGoogleMaps } from "./useGoogleMaps";

type UseGooglePlaceSearchParams = {
  refElem: React.RefObject<HTMLInputElement>;
  componentRestrictions?: any;
  fields: string[];
  types: string[];
};

const DEFAULT_COMPONENT_RESTRICTIONS = { country: ["us"] };
const LISTENER_TYPE = "place_changed";

export function useGooglePlaceSearch(params: UseGooglePlaceSearchParams) {
  const { refElem, componentRestrictions = DEFAULT_COMPONENT_RESTRICTIONS, fields, types } = params;
  const [place, setPlace] = useState<google.maps.places.PlaceResult>();
  const { isLoadingMaps } = useGoogleMaps();
  const autocomplete = useRef<google.maps.places.Autocomplete>();
  const autocompleteListener = useRef<google.maps.MapsEventListener>();

  useEffect(() => {
    // We want to make sure autocomplete isn't initialized already, otherwise
    // google places might render a bunch of dropdowns.
    if (!isLoadingMaps && refElem.current && !autocomplete.current) {
      // Initialize the google places autocomplete on the input being passed into the hook.
      autocomplete.current = new google.maps.places.Autocomplete(refElem.current, {
        componentRestrictions,
        fields,
        types,
      });

      autocompleteListener.current = autocomplete.current.addListener(LISTENER_TYPE, () => {
        setPlace(autocomplete.current?.getPlace());
      });
    }
  }, [isLoadingMaps, types, fields, componentRestrictions, refElem]);

  return { place };
}
