import React, { useRef } from "react";
import { ObjectInputProps } from "sanity";
import { GoogleMapsProxy, useLoadGoogleMaps } from "@/hooks/useLoadGoogleMaps";
import { GoogleMap } from "./GoogleMap";
import { MapMarker } from "./MapMarker";

export default function MapInput(props: ObjectInputProps) {
  const { onChange, value, elementProps } = props;
  const { isLoadingMaps, mapsError, googleMapsApi } = useLoadGoogleMaps();

  const mapRef = useRef<HTMLDivElement>(null);

  // const { map } = GoogleMap({ googleMapApi: googleMaps, mapElement: mapRef.current, onMapClick });

  function onMapClick(event: google.maps.MapMouseEvent) {
    console.log("Map clicked", event);
  }

  return (
    <div>
      <h2>Google Maps Input</h2>
      <GoogleMapsProxy>
        {(googleMapsApi) => (
          <GoogleMap
            googleMapApi={googleMapsApi}
            defaultZoom={8}
            scrollWheel={true}
            onMapClick={onMapClick}
            style={{ height: "400px", width: "100%" }}
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
