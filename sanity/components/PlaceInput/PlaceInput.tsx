// CustomStringInput.tsx
import React, { useCallback, useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Stack,
  Text,
  TextInput,
  Label,
  Inline,
  Radio,
} from "@sanity/ui";
import { set, ObjectInputProps } from "sanity";
import { loadGoogleMapsApi } from "./loadGoogleMapsApi";

const API_KEY = process.env.GOOGLE_API_KEY || "";
const ESTABLISHMENT = "establishment";
const ADDRESS = "address";

export class AuthError extends Error {}

export default function CustomStringInput(props: ObjectInputProps) {
  const { onChange, value, elementProps } = props;

  const [place, setPlace] = useState("");
  const [loadingMaps, setLoadingMaps] = useState(true);
  const [error, setError] = useState<string | undefined>("");
  const [placeId, setPlaceId] = useState<string | undefined>(
    value?.placeId || undefined,
  );

  const [searchType, setSearchType] = useState<
    typeof ESTABLISHMENT | typeof ADDRESS
  >(ADDRESS);
  const [address, setAddress] = useState<string | undefined>(
    value?.address || undefined,
  );
  const [lat, setLat] = useState<number | undefined>(value?.location?.lat);
  const [lng, setLng] = useState<number | undefined>(value?.location?.lng);
  const placeInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete>();
  const autocompleteListener = useRef<google.maps.MapsEventListener>();

  // Handler for saving values on place change
  const handlePlaceChange = useCallback(
    (place: google.maps.places.PlaceResult) => {
      const placeAddress = buildPlaceAddress(place);
      setPlaceId(place.place_id);
      setLat(place.geometry?.location.lat());
      setLng(place.geometry?.location.lng());
      setAddress(placeAddress);

      onChange([
        set(place.place_id, ["placeId"]),
        set(placeAddress, ["address"]),
        set(
          {
            lat: place.geometry?.location.lat(),
            lng: place.geometry?.location.lng(),
            _type: "geopoint",
          },
          ["location"],
        ),
      ]);
    },
    [onChange],
  );

  // Load the google maps api
  useEffect(() => {
    loadGoogleMapsApi({ apiKey: API_KEY, locale: "en-US" }).then(
      () => {
        setLoadingMaps(false);
        setError(undefined);
      },
      (err: AuthError | Error) => {
        setError(err instanceof AuthError ? "authError" : err.message);
        setLoadingMaps(false);
      },
    );
  }, []);

  useEffect(() => {
    if (!loadingMaps && placeInputRef.current) {
      if (autocompleteListener.current) {
        google.maps.event.removeListener(autocompleteListener.current);
        // remove the google places dropdowns by their class name since we have no other way to access them
        const eles = document.querySelectorAll(".pac-container");
        eles.forEach((ele) => ele.remove());
      }

      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }

      autocompleteRef.current = new google.maps.places.Autocomplete(
        placeInputRef.current,
        {
          componentRestrictions: { country: ["us"] },
          fields: ["address_components", "geometry", "name", "place_id"],
          types: [searchType],
        },
      );

      autocompleteListener.current = autocompleteRef.current.addListener(
        "place_changed",
        () => {
          if (autocompleteRef.current) {
            const place = autocompleteRef.current?.getPlace();

            handlePlaceChange(place);
          }
        },
      );
    }
  }, [loadingMaps, searchType, handlePlaceChange]);

  if (error) {
    return <Text style={{ color: "red" }}>{error}</Text>;
  }

  return (
    <Stack space={3}>
      <Label>Place Input</Label>
      <TextInput
        ref={placeInputRef}
        value={place}
        onChange={(e) => {
          setPlace(e.currentTarget.value);
        }}
      />
      <Inline space={3}>
        <Flex align="center">
          <Radio
            id="address-radio"
            style={{ marginRight: "8px" }}
            onChange={(e) =>
              setSearchType(e.currentTarget.value as typeof ADDRESS)
            }
            value={ADDRESS}
            checked={searchType === ADDRESS}
          />
          <Box>
            <Text>
              <Label htmlFor="address-radio">Search by Address</Label>
            </Text>
          </Box>
        </Flex>
        <Flex align="center">
          <Radio
            id="establishment-radio"
            style={{ marginRight: "8px" }}
            onChange={(e) =>
              setSearchType(e.currentTarget.value as typeof ESTABLISHMENT)
            }
            value={ESTABLISHMENT}
            checked={searchType === ESTABLISHMENT}
          />
          <Box>
            <Text>
              <Label htmlFor="establishment-radio">
                Search by Establishment
              </Label>
            </Text>
          </Box>
        </Flex>
      </Inline>
      <Label>Address</Label>
      <TextInput disabled value={address} />
      <Label>Place ID</Label>
      <TextInput disabled value={placeId} />
      <Inline space={2}>
        <Stack space={3}>
          <Label>Latitude</Label>
          <TextInput disabled value={lat} />
        </Stack>
        <Stack space={3}>
          <Label>Longitude</Label>
          <TextInput disabled value={lng} />
        </Stack>
      </Inline>
    </Stack>
  );
}

/**
 * Helper function to build out the address of a place from its address_components
 */
export function buildPlaceAddress(
  place: google.maps.places.PlaceResult,
): string | undefined {
  let address1 = "";
  let city = "";
  let state = "";
  let postcode = "";

  if (!place.address_components) return;

  for (const component of place.address_components) {
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number":
        address1 = `${component.long_name} ${address1}`;
        break;
      case "route":
        address1 += component.short_name;
        break;
      case "postal_code":
        postcode = `${component.long_name}${postcode}`;
        break;
      case "postal_code_suffix":
        postcode = `${postcode}-${component.long_name}`;
        break;
      case "locality":
        city = component.long_name;
        break;
      case "administrative_area_level_1":
        state = component.short_name;
    }
  }

  const address = `${address1}, ${city}, ${state} ${postcode}`;

  return address;
}
