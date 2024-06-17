import React, { useState, useCallback } from "react";
import { ObjectInputProps, set } from "sanity";
import { TextInput, Stack, Label } from "@sanity/ui";
import { GoogleMapsProxy } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "./GoogleMap";
import { MapMarker } from "./MapMarker";
import { MapCircle } from "./MapCircle";

// Default to Portland, OR
const DEFUALT_LOCATION = { lat: 45.5152, lng: -122.6784 };

export default function MapInput(props: ObjectInputProps) {
  const { onChange, value, elementProps } = props;
  const [location, setLocation] = useState(value?.location);
  const [distanceRadius, setDistanceRadius] = useState(value?.radius || 10);

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
      <GoogleMapsProxy>
        {(googleMapsApi) => (
          <GoogleMap
            googleMapApi={googleMapsApi}
            location={DEFUALT_LOCATION}
            onMapClick={handleMapClick}
            style={{ height: "600px", width: "100%" }}
          >
            {(map) => (
              <>
                {location && (
                  <MapMarker
                    googleMapApi={googleMapsApi}
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
      </GoogleMapsProxy>
      <Stack space={3}>
        <Label>Distance Radius (miles)</Label>
        <TextInput type="number" value={distanceRadius} onChange={handleDistanceRadiusChange} />
      </Stack>
    </Stack>
  );
}
