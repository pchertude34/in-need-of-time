import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { BusinessStatusBadge } from "./BusinessStatusLabel";
import { getPlace } from "@/lib/queries/getPlace";
import { cn } from "@/lib/utils";

type ProviderListItemProps = {
  name: string;
  placeId?: string;
  distance?: number;
  isSelected?: boolean;
  map?: google.maps.Map;
  onClick?: () => void;
};

export function ProviderListItem(props: ProviderListItemProps) {
  const { name, placeId, distance, isSelected, map, onClick } = props;
  const [showDialog, setShowDialog] = useState(false);

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
      marker.addListener("click", () => setShowDialog(true));
    }

    // Remove the marker from the map when the service is unmounted
    return () => {
      if (marker) marker.setMap(null);
    };
  }, [place, map, onClick]);

  // Display a skeleton loader while we wait for the place data
  if (isLoading) {
    return <Skeleton className="h-[120px] w-full" />;
  }

  return (
    <Dialog open={showDialog} onOpenChange={(open) => setShowDialog(open)}>
      <DialogTrigger asChild>
        <button
          className={cn(
            "border-color-gray-200 w-full rounded border p-4 transition duration-150 ease-in-out hover:-translate-y-1 hover:bg-emerald-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-gray-100",
            {
              "bg-emerald-100": isSelected,
            },
          )}
          onClick={onClick}
        >
          <div className="text-left">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{place?.address}</p>
            <div className="mt-2 flex">
              <BusinessStatusBadge isOpen={place?.opening_hours?.isOpen()} />
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent>Cool Dialog</DialogContent>
    </Dialog>
  );
}
