import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { PortableText } from "@portabletext/react";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { BusinessStatusBadge } from "./BusinessStatusLabel";
import { getPlace } from "@/lib/queries/getPlace";
import { cn, generateGoogleNavigationLink } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ProviderListItemProps = {
  name: string;
  description?: any;
  placeId: string;
  distance?: number;
  isSelected?: boolean;
  map?: google.maps.Map;
  onClick?: () => void;
};

export function ProviderListItem(props: ProviderListItemProps) {
  const { name, description, placeId, distance, isSelected, map, onClick } = props;
  const [showDialog, setShowDialog] = useState(false);

  const { data: place, isLoading } = useQuery({
    queryKey: [placeId],
    queryFn: () => getPlace({ placeId, map }),
    enabled: !!placeId && !!map,
  });

  const shouldRenderContactInfo = place?.formatted_phone_number || place?.website;

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

  if (!isLoading && place) {
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
              <p className="text-sm text-gray-500">{place.address}</p>
              <div className="mt-2 flex">
                <BusinessStatusBadge isOpen={place.opening_hours?.isOpen()} />
              </div>
            </div>
          </button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader className="text-xl font-bold text-gray-900">{name}</DialogHeader>
          <div className="space-y-6">
            <div className="flex align-middle">
              <p className="text-lg font-medium text-gray-900">{place.address}</p>
              <BusinessStatusBadge isOpen={place?.opening_hours?.isOpen()} className="ml-auto" />
            </div>
            {description && (
              <div className="prose prose-h1:text-xl prose-h2:text-lg prose-h3:text-md prose-p:my-4 prose-ul:my-4 prose-li:my-0 ">
                <PortableText value={description} />
              </div>
            )}
            {place.opening_hours?.weekday_text && (
              <div className="mt-4">
                <p className="text-lg font-semibold">Hours</p>
                <ul className="text-base">
                  {place.opening_hours.weekday_text.map((day, i) => (
                    <li key={i}>{day}</li>
                  ))}
                </ul>
              </div>
            )}
            {shouldRenderContactInfo && (
              <div>
                {place.formatted_phone_number && (
                  <div className="flex align-middle">
                    <a href={`tel:${place.formatted_phone_number}`} className="text-blue-600">
                      {place.formatted_phone_number}
                    </a>
                  </div>
                )}
                {place.website && (
                  <div className="flex align-middle">
                    <a href={place.website} target="_blank" rel="noreferrer noopener" className="text-blue-600">
                      {place.website}
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button variant="default" asChild>
              <a href={generateGoogleNavigationLink(placeId, name)} target="_blank" rel="noreferrer noopener">
                Take Me There
              </a>
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }
}
