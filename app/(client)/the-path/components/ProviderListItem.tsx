import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { cn } from "@/lib/utils";
import { getPlace } from "@/lib/queries/getPlace";

type ProviderListItemProps = {
  placeId?: string;
  distance?: number;
  isSelected?: boolean;
  map: google.maps.Map;
  onClick?: () => void;
};

export function ProviderListItem(props: ProviderListItemProps) {
  const { placeId, distance, isSelected, map, onClick } = props;

  const { data: place } = useQuery({
    queryKey: [placeId],
    queryFn: () => getPlace({ placeId, map }),
    enabled: !!placeId,
  });

  console.log(place);

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
      <div>
        <h3 className="text-lg font-semibold">{place?.name}</h3>
        <p className="text-sm text-gray-500">{place?.address}</p>
      </div>
    </button>
  );
}
