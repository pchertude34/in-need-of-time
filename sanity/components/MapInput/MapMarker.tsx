import React, { useState, useEffect } from "react";

const markerPath =
  "M 3.052 3.7 C 1.56 5.293 0.626 7.612 0.663 9.793 C 0.738 14.352 2.793 16.077 6.078 22.351 C 7.263 25.111 8.497 28.032 9.672 32.871 C 9.835 33.584 9.994 34.246 10.069 34.305 C 10.143 34.362 10.301 33.697 10.465 32.983 C 11.639 28.145 12.875 25.226 14.059 22.466 C 17.344 16.192 19.398 14.466 19.474 9.908 C 19.511 7.727 18.574 5.405 17.083 3.814 C 15.379 1.994 12.809 0.649 10.069 0.593 C 7.328 0.536 4.756 1.882 3.052 3.7 Z";

type MapMarkerProps = {
  googleMapApi?: typeof window.google.maps;
  googleMap?: google.maps.Map;
  position: any; //google.maps.LatLng
};

export function MapMarker(props: MapMarkerProps) {
  const { googleMapApi, googleMap, position } = props;

  const [marker, setMarker] = useState<google.maps.Marker | undefined>();

  useEffect(() => {
    if (googleMapApi && googleMap && !marker) {
      const marker = new googleMapApi.Marker({
        draggable: true,
        position: position,
        map: googleMap,
        icon: undefined,
        // icon: {
        //   path: markerPath,
        //   fillColor: "#FF0000",
        //   fillOpacity: 1,
        //   scale: 1,
        //   strokeColor: "#000000",
        //   strokeWeight: 1,
        // },
      });

      setMarker(marker);
    }
  }, [googleMapApi, googleMap, position, marker]);

  useEffect(() => {
    if (marker) {
      marker?.setPosition(position);
    }
  }, [position, marker]);

  return null;
}
