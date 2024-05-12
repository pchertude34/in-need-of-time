import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { getPlace } from "@/lib/queries/getPlace";
import { Badge } from "@/components/ui/badge";
import { BusinessStatusBadge } from "./BusinessStatusLabel";

type ProviderListItemProps = {
  placeId?: string;
  distance?: number;
  isSelected?: boolean;
  map: google.maps.Map;
  onClick?: () => void;
};

export function ProviderListItem(props: ProviderListItemProps) {
  const { placeId, distance, isSelected, map, onClick } = props;

  const { data: place, error } = useQuery({
    queryKey: [placeId],
    queryFn: () => getPlace({ placeId, map }),
    enabled: !!placeId,
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
      // marker.addListener('click', () => onClick(currentPlace));
    }

    return () => {
      if (marker) marker.setMap(null);
    };
  }, [place, map, onClick]);

  return (
    <button
      className={cn(
        "border-color-gray-200 h-full w-full rounded border p-6 transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-gray-100",
        {
          "bg-emerald-100": isSelected,
        },
      )}
      onClick={onClick}
    >
      <div className="text-left">
        <h3 className="text-lg font-semibold">{place?.name}</h3>
        <p className="text-sm text-gray-500">{place?.address}</p>
        <div className="flex">
          <BusinessStatusBadge isOpen={place?.opening_hours?.isOpen()} />
        </div>
      </div>
    </button>
  );
}
