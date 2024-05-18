import React, { useState, useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { MapIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { ProviderListItem } from "./ProviderListItem";
import { cn } from "@/lib/utils";
import { findProviders } from "@/lib/queries/findProviders";

type ProviderListProps = {
  latitude: number;
  longitude: number;
  distance: number;
  serviceTypeSlug: string;
};

export function ProviderList(props: ProviderListProps) {
  const { distance, latitude, longitude, serviceTypeSlug } = props;

  const [map, setMap] = useState<google.maps.Map | undefined>();
  const [showMap, setShowMap] = useState(true);
  const mapRef = useRef<HTMLDivElement>(null);

  const { data: providers, isLoading } = useQuery({
    queryKey: [latitude, longitude, distance, serviceTypeSlug],
    enabled: !!latitude && !!longitude && !!distance && !!serviceTypeSlug,
    queryFn: () => findProviders({ latitude, longitude, distance, serviceTypeSlug }),
  });

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
      <div className="md:hidden">
        <Button onClick={() => setShowMap(!showMap)}>
          {showMap ? (
            <>
              <ListBulletIcon className="mr-1 h-4 w-4" /> <span>View List</span>
            </>
          ) : (
            <>
              <MapIcon className="mr-1 h-4 w-4" /> <span>View Map</span>
            </>
          )}
        </Button>
      </div>

      <div className="mt-4 grid h-[600px] w-full grid-cols-5 gap-4">
        <div
          className={cn(
            "col-span-5 flex-col space-y-2 overflow-auto p-2 md:col-span-2 md:flex",
            // Hide the list on mobile when the map is showing
            `${showMap ? "hidden" : "flex"}`,
          )}
        >
          {providers?.map((provider) => (
            <ProviderListItem
              key={provider._id}
              name={provider.title}
              description={provider.description}
              placeId={provider.place.placeId}
              map={map}
            />
          ))}
        </div>
        <div
          className={cn(
            "col-span-5 md:col-span-3 md:block",
            // Hide the map on mobile when the list is showing
            `${showMap ? "block" : "hidden"}`,
          )}
        >
          <div ref={mapRef} style={{ height: "100%" }}></div>
        </div>
      </div>
    </>
  );
}
