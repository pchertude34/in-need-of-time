import React, { useState, useEffect, useCallback, useRef } from "react";
// import { useGoogleMaps } from "@/hooks/useGoogleMaps";

type GoogleMapProps = {
  // mapElement: HTMLDivElement | null;
  googleMapApi: typeof window.google.maps;
  defaultZoom?: number;
  scrollWheel?: boolean;
  onMapClick?: (event: google.maps.MapMouseEvent) => void;
  style?: React.CSSProperties;
  className?: string;
  children: (map: google.maps.Map) => React.ReactNode;
};

export function GoogleMap(props: GoogleMapProps) {
  const { googleMapApi, defaultZoom = 8, scrollWheel = true, onMapClick, style, children } = props;

  // const { googleMaps: googleMapApi, isLoadingMaps, mapsError } = useGoogleMaps();

  const [map, setMap] = useState<google.maps.Map | undefined>();
  // const [mapClickHandler, setMapClickHandler] = useState<google.maps.MapsEventListener | undefined>();
  const mapRef = useRef<HTMLDivElement | null>(null);

  // useEffect(() => {
  //   if (mapRef.current && googleMapApi) {
  //     const map = new googleMapApi.Map(mapRef.current, {
  //       center: { lat: -34.397, lng: 150.644 },
  //       zoom: defaultZoom,
  //       scrollwheel: scrollWheel,
  //     });

  //     setMap(map);

  //     if (mapClickHandler) {
  //       mapClickHandler.remove();
  //     }

  //     if (onMapClick) {
  //       const clickHandler = googleMapApi.event.addListener(map, "click", onMapClick);
  //       setMapClickHandler(clickHandler);
  //     }
  //   }
  // }, [googleMapApi, defaultZoom, scrollWheel]);

  // useEffect(() => {
  //   return () => {
  //     if (mapClickHandler) {
  //       mapClickHandler.remove();
  //     }
  //   };
  // }, []);

  function constructMap(element: HTMLDivElement) {
    console.log("element :>> ", element);
    const map = new googleMapApi.Map(element, {
      zoom: defaultZoom,
      center: { lat: -34.397, lng: 150.644 },
      scrollwheel: scrollWheel,
      streetViewControl: false,
      mapTypeControl: false,
    });

    console.log("m :>> ", map);

    return map;
  }

  const setMapElement = useCallback((element: HTMLDivElement | null) => {
    if (element && element !== mapRef.current) {
      const newMap = constructMap(element);
      setMap(newMap);
    }
    mapRef.current = element;
  }, []);

  return (
    <>
      <div style={style}>
        <div ref={setMapElement} style={{ height: "100%", width: "100%" }}></div>
      </div>
      {map && children(map)}
    </>
  );
}
