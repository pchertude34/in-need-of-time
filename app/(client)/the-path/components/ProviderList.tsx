import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { MapIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";

type ProviderListProps = {
  latitude?: number;
  longitude?: number;
  distance?: number;
  serviceTypeId?: string;
};

export function ProviderList(props: ProviderListProps) {
  const { distance, latitude, longitude, serviceTypeId } = props;

  const [map, setMap] = useState<google.maps.Map | undefined>();
  const [showMap, setShowMap] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);

  // Initialize the google map. Change it when the user location changes so we can recenter it.
  useEffect(() => {
    if (mapRef.current && latitude && longitude) {
      setMap(
        new window.google.maps.Map(mapRef.current, {
          center: { lat: latitude, lng: longitude },
          mapTypeControl: false,
          zoom: 10,
        }),
      );
    }
  }, [mapRef, latitude, longitude]);

  // Add the user's selected location to the google map
  useEffect(() => {
    let currentLocationMarker: google.maps.Marker;

    if (map && latitude && longitude) {
      currentLocationMarker = new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        icon: "/my_location.svg",
      });
      currentLocationMarker.setMap(map);
    }

    return () => {
      if (currentLocationMarker) {
        currentLocationMarker.setMap(null);
      }
    };
  }, [map, latitude, longitude]);

  return (
    <>
      <Button onClick={() => setShowMap(!showMap)}>
        {showMap ? (
          <>
            <ListBulletIcon className="mr-1 h-4 w-4" /> View List
          </>
        ) : (
          <>
            <MapIcon className="mr-1 h-4 w-4" /> View Map
          </>
        )}
      </Button>
      <div className="flex h-full w-full">
        <div>Hello world</div>
        <div className={cn("w-full md:block", `${showMap ? "block" : "hidden"}`)}>
          <div ref={mapRef} style={{ height: "500px" }}></div>
        </div>
      </div>
    </>
  );
}

type ProviderListItemProps = {};

function ProviderListItem(props: ProviderListItemProps) {
  return <div>ProviderListItem</div>;
}
