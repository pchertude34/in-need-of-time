import React, { useState, useCallback, useRef } from "react";
import { ObjectInputProps, set } from "sanity";
import { GoogleMapsProxy, useLoadGoogleMaps } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "./GoogleMap";
import { MapMarker } from "./MapMarker";

// Default to Portland, OR
const DEFUALT_LOCATION = { lat: 45.5152, lng: -122.6784 };

export default function MapInput(props: ObjectInputProps) {
  const { onChange, value, elementProps } = props;
  const [location, setLocation] = useState(value?.location);

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
    <div>
      <h2>Google Maps Input</h2>
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
              </>
            )}
          </GoogleMap>
        )}
      </GoogleMapsProxy>
    </div>
  );
}
