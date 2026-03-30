import { useEffect, useRef } from "react";
import { convertMilesToMeters } from "@/lib/utils";

type MapCircleProps = {
  googleMapApi: typeof window.google.maps;
  googleMap: google.maps.Map;
  position: any; //google.maps.LatLng
  distanceRadius: number;
};

export function MapCircle(props: MapCircleProps) {
  const { googleMapApi, googleMap, position, distanceRadius } = props;

  const circleRef = useRef<google.maps.Circle | undefined>(undefined);

  useEffect(() => {
    if (!circleRef.current) {
      const circle = new googleMapApi.Circle({
        strokeColor: "#1d4ed8",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#1d4ed8",
        fillOpacity: 0.3,
        map: googleMap,
        center: position,
        clickable: false,
        radius: convertMilesToMeters(distanceRadius),
      });

      circleRef.current = circle;
    }
  }, []);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setCenter(position);
    }
  }, [position]);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.setRadius(convertMilesToMeters(distanceRadius));
    }
  }, [distanceRadius]);

  return null;
}
