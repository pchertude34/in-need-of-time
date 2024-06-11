import React, { useCallback, useRef } from "react";
import { ObjectInputProps } from "sanity";
import { GoogleMapsProxy, useLoadGoogleMaps } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "./GoogleMap";
import { MapMarker } from "./MapMarker";

export default function MapInput(props: ObjectInputProps) {
  const { onChange, value, elementProps } = props;

  const onMapClick = useCallback((event: google.maps.MapMouseEvent) => {
    console.log("Map clicked", event);
  }, []);

  return (
    <div>
      <h2>Google Maps Input</h2>
      <GoogleMapsProxy>
        {(googleMapsApi) => (
          <GoogleMap
            googleMapApi={googleMapsApi}
            defaultZoom={8}
            location={{ lat: 45.5152, lng: -122.6784 }}
            scrollWheel={true}
            onMapClick={onMapClick}
            style={{ height: "600px", width: "100%" }}
            className="map"
          >
            {(map) => (
              <>
                <MapMarker googleMapApi={googleMapsApi} googleMap={map} position={{ lat: 37.7749, lng: -122.4194 }} />
              </>
            )}
          </GoogleMap>
        )}
      </GoogleMapsProxy>
    </div>
  );
}
