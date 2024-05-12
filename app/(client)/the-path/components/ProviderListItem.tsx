import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { getPlace } from "@/lib/queries/getPlace";
import { BusinessStatusBadge } from "./BusinessStatusLabel";
import { Skeleton } from "@/components/ui/skeleton";

type ProviderListItemProps = {
  placeId?: string;
  distance?: number;
  isSelected?: boolean;
  map?: google.maps.Map;
  onClick?: () => void;
};

export function ProviderListItem(props: ProviderListItemProps) {
  const { placeId, distance, isSelected, map, onClick } = props;

  const { data: place, isLoading } = useQuery({
    queryKey: [placeId],
    queryFn: () => getPlace({ placeId, map }),
    enabled: !!placeId && !!map,
  });

  // create a marker on the map for the place.
  useEffect(() => {
    let marker: google.maps.Marker;

    if (place && map) {
      marker = new google.maps.Marker({
        position: place.geometry?.location,
        title: place.name,
      });
      marker.setMap(map);
      // marker.addListener("click", () => onClick(currentPlace));
    }

    // Remove the marker from the map when the service is unmounted
    return () => {
      if (marker) marker.setMap(null);
    };
  }, [place, map, onClick]);

  return (
    <button
      className={cn(
        "border-color-gray-200 w-full rounded border p-4 transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-gray-100",
        {
          "bg-emerald-100": isSelected,
        },
      )}
      onClick={onClick}
    >
      {isLoading ? (
        <Skeleton className="h-[120px] w-full" />
      ) : (
        <div className="text-left">
          <h3 className="text-lg font-semibold">{place?.name}</h3>
          <p className="text-sm text-gray-500">{place?.address}</p>
          <div className="mt-2 flex">
            <BusinessStatusBadge isOpen={place?.opening_hours?.isOpen()} />
          </div>
        </div>
      )}
    </button>
  );
}
