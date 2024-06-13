import { useEffect, useRef } from "react";

type MapMarkerProps = {
  googleMapApi: typeof window.google.maps;
  googleMap: google.maps.Map;
  position: any; //google.maps.LatLng
  onMove?: (event: google.maps.MapMouseEvent) => void;
};

export function MapMarker(props: MapMarkerProps) {
  const { googleMapApi, googleMap, position, onMove } = props;

  // const [marker, setMarker] = useState<google.maps.Marker | undefined>();
  const markerRef = useRef<google.maps.Marker | undefined>(undefined);
  const moveHandlerRef = useRef<google.maps.MapsEventListener | undefined>(undefined);

  useEffect(() => {
    if (!markerRef.current) {
      const marker = new googleMapApi.Marker({
        draggable: true,
        position: position,
        map: googleMap,
      });

      markerRef.current = marker;
      attachMoveHandler();
    }
  }, []);

  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.setPosition(position);
    }
  }, [position]);

  function attachMoveHandler() {
    if (moveHandlerRef.current) {
      moveHandlerRef.current.remove();
    }
    if (markerRef.current && onMove) {
      moveHandlerRef.current = googleMapApi.event.addListener(markerRef.current, "dragend", onMove);
    }
  }

  return null;
}
