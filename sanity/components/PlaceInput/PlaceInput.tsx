import React, { useCallback, useState, useEffect, useRef } from "react";
import { set, ObjectInputProps } from "sanity";
import { Box, Flex, Stack, Text, TextInput, Label, Inline, Radio } from "@sanity/ui";
import { useGoogleMaps } from "@/hooks/useGoogleMaps";
import { buildPlaceAddress } from "@/lib/utils";

const ESTABLISHMENT = "establishment";
const ADDRESS = "address";

export default function CustomStringInput(props: ObjectInputProps) {
  const { onChange, value, elementProps } = props;

  const [place, setPlace] = useState("");
  const [placeId, setPlaceId] = useState<string | undefined>(value?.placeId || "");

  const [searchType, setSearchType] = useState<typeof ESTABLISHMENT | typeof ADDRESS>(ESTABLISHMENT);
  const [address, setAddress] = useState<string | undefined>(value?.address || "");
  const [lat, setLat] = useState<number | undefined>(value?.location?.lat || "");
  const [lng, setLng] = useState<number | undefined>(value?.location?.lng || "");
  const placeInputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete>();
  const autocompleteListener = useRef<google.maps.MapsEventListener>();
  const { isLoadingMaps, mapsError } = useGoogleMaps();

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

  useEffect(() => {
    if (!isLoadingMaps && placeInputRef.current) {
      if (autocompleteListener.current) {
        google.maps.event.removeListener(autocompleteListener.current);
        // remove the google places dropdowns by their class name since we have no other way to access them
        const eles = document.querySelectorAll(".pac-container");
        eles.forEach((ele) => ele.remove());
      }

      if (autocompleteRef.current) {
        google.maps.event.clearInstanceListeners(autocompleteRef.current);
      }

      autocompleteRef.current = new google.maps.places.Autocomplete(placeInputRef.current, {
        componentRestrictions: { country: ["us"] },
        fields: ["address_components", "geometry", "name", "place_id"],
        types: [searchType],
      });

      autocompleteListener.current = autocompleteRef.current.addListener("place_changed", () => {
        if (autocompleteRef.current) {
          const place = autocompleteRef.current?.getPlace();

          setPlace(
            `${place.name}, ${buildPlaceAddress(place, { includeStreetNumber: false, includePostcode: false })}`,
          );
          handlePlaceChange(place);
        }
      });
    }
  }, [isLoadingMaps, searchType, handlePlaceChange]);

  if (mapsError) {
    return <Text style={{ color: "red" }}>{mapsError}</Text>;
  }

  return (
    <Stack space={6}>
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
              id="establishment-radio"
              style={{ marginRight: "8px" }}
              onChange={(e) => setSearchType(e.currentTarget.value as typeof ESTABLISHMENT)}
              value={ESTABLISHMENT}
              checked={searchType === ESTABLISHMENT}
            />

            <Label htmlFor="establishment-radio">Search by Establishment</Label>
          </Flex>
          <Flex align="center">
            <Radio
              id="address-radio"
              style={{ marginRight: "8px" }}
              onChange={(e) => setSearchType(e.currentTarget.value as typeof ADDRESS)}
              value={ADDRESS}
              checked={searchType === ADDRESS}
            />

            <Label htmlFor="address-radio">Search by Address</Label>
          </Flex>
        </Inline>
      </Stack>
      <Stack space={5}>
        <Stack space={3}>
          <Label>Address</Label>
          <Text>{address}</Text>
        </Stack>
        <Stack space={3}>
          <Label>Place ID</Label>
          <Text>{placeId}</Text>
        </Stack>
        <Inline space={6}>
          <Stack space={3}>
            <Label>Latitude</Label>
            <Text>{lat}</Text>
          </Stack>
          <Stack space={3}>
            <Label>Longitude</Label>
            <Text>{lng}</Text>
          </Stack>
        </Inline>
      </Stack>
    </Stack>
  );
}
