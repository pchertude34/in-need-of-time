import React, { useState, useCallback } from "react";
import { ObjectInputProps, set } from "sanity";
import { TextInput, Text, Stack, Label, Flex, Checkbox } from "@sanity/ui";
import { GoogleMapsProxy } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "@/components/maps/GoogleMap";
import { MapMarker } from "@/components/maps/MapMarker";
import { MapCircle } from "./MapCircle";
import type { Location } from "@/lib/types";

// Default to Portland, OR
const DEFUALT_LOCATION = { lat: 45.5152, lng: -122.6784 };

export default function MapInput(props: ObjectInputProps) {
  const { onChange, value, elementProps } = props;
  const [isNational, setIsNational] = useState<boolean>(value?.isNational || false);
  const [location, setLocation] = useState<Location | undefined>(value?.location);
  const [distanceRadius, setDistanceRadius] = useState<number>(value?.distanceRadius || 0);

  // Handler to update the isNational value
  function handleIsNationalSelected() {
    setIsNational(!isNational);
    onChange([set(!isNational, ["isNational"])]);
  }

  // Handler to update the size of the circle
  function handleDistanceRadiusChange(event: React.ChangeEvent<HTMLInputElement>) {
    const v = Number(event.target.value);

    // We don't want distance radii to be negative.
    // We will handle the > 0 check in the schema validation.
    if (v < 0) return;
    else {
      setDistanceRadius(v);
      onChange([set(v, ["distanceRadius"])]);
    }
  }

  // Handler marker to place or move a maker when the map is clicked
  const handleMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();

    setLocation({ lat, lng });
    onChange([set({ lat, lng, _type: "geopoint" }, ["location"])]);
  }, []);

  // Handler to update the location value when the user drags the marker
  const handleMarkerDragEnd = useCallback((event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      setLocation({ lat, lng });
      onChange([set({ lat, lng, _type: "geopoint" }, ["location"])]);
    }
  }, []);

  return (
    <Stack space={4}>
      <Flex align="center">
        <Checkbox checked={isNational} onChange={handleIsNationalSelected} />
        <Stack paddingLeft={2} space={2}>
          <Label>National</Label>
          <Text muted size={1}>
            Does the provider serve the entire nation?
          </Text>
        </Stack>
      </Flex>
      <GoogleMapsProxy>
        {(googleMapsApi) => (
          <>
            {!isNational && (
              <GoogleMap
                googleMapsApi={googleMapsApi}
                center={DEFUALT_LOCATION}
                onMapClick={handleMapClick}
                style={{ height: "600px", width: "100%" }}
              >
                {(map) => (
                  <>
                    {location && (
                      <MapMarker
                        googleMapsApi={googleMapsApi}
                        googleMap={map}
                        position={location}
                        onMove={handleMarkerDragEnd}
                      />
                    )}
                    {location && (
                      <MapCircle
                        googleMapApi={googleMapsApi}
                        googleMap={map}
                        position={location}
                        distanceRadius={distanceRadius}
                      />
                    )}
                  </>
                )}
              </GoogleMap>
            )}
          </>
        )}
      </GoogleMapsProxy>
      {!isNational && (
        <Stack space={3}>
          <Label>Distance Radius (miles)</Label>
          <TextInput type="number" value={distanceRadius} onChange={handleDistanceRadiusChange} />
        </Stack>
      )}
    </Stack>
  );
}
