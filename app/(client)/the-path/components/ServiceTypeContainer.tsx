import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { getServiceTypes } from "@/lib/queries/findServiceTypes";
import { cn, convertMilesToMeters } from "@/lib/utils";
import { Label } from "@/components/ui/label";

const DISTANCE_OPTIONS = [
  { label: "5 miles", value: convertMilesToMeters(5) },
  { label: "10 miles", value: convertMilesToMeters(10) },
  { label: "20 miles", value: convertMilesToMeters(20) },
];

type ServiceTypeContainerProps = {
  latitude?: number;
  longitude?: number;
  onServiceTypeChanged: (serviceType: string | null) => void;
  onDistanceChanged: (distance: number) => void;
};

export function ServiceTypeContainer(props: ServiceTypeContainerProps) {
  const { longitude, latitude, onServiceTypeChanged, onDistanceChanged } = props;
  const [distance, setDistance] = useState<number | undefined>();
  const [selectedServiceType, setSelectedServiceType] = useState<string | null>();

  // requery and cache the service types whenever the latitude, longitude, or distance changes
  // This query won't run until all three of these values are set.
  const { data: serviceTypes } = useQuery({
    queryKey: [latitude, longitude, distance],
    enabled: !!latitude && !!longitude && !!distance,
    queryFn: () => getServiceTypes({ latitude, longitude, distance }),
  });

  // Make sure the selected service type exists in the list of service types.
  // selectedServiceType can get out of sync if the user switches the distance after selecting a service type.
  useEffect(
    () => {
      if (selectedServiceType && !serviceTypes?.find((serviceType) => serviceType.slug === selectedServiceType)) {
        setSelectedServiceType(null);
        onServiceTypeChanged(null);
      }
    },
    // Since the only time this bug can occur when the serviceTypes list changes, we only need to worry about
    // having that as a dependency. We don't want to waste resoures running this anytime the selectedServiceType
    // changes as well.
    // eslint-disable-next-line
    [serviceTypes],
  );

  function handleDistanceChanged(distance: string) {
    setDistance(Number(distance));
    onDistanceChanged(Number(distance));
  }

  function handleServiceTypeChanged(serviceTypeId: string) {
    setSelectedServiceType(serviceTypeId);
    onServiceTypeChanged(serviceTypeId);
  }

  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="distance-select" className="mb-1">
          Search Distance
        </Label>
        <Select onValueChange={handleDistanceChanged}>
          <SelectTrigger id="distance-select" className="max-w-[180px]">
            <SelectValue placeholder="Select a Distance" />
          </SelectTrigger>
          <SelectContent>
            {DISTANCE_OPTIONS.map((option) => (
              <SelectItem key={option.value} value={String(option.value)}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid max-h-[600px] gap-2 overflow-auto p-2 sm:grid-cols-1 md:grid-cols-2">
        {serviceTypes?.map((serviceType) => (
          <ServiceTypeButton
            key={serviceType.slug}
            title={serviceType.name}
            isSelected={serviceType.slug === selectedServiceType}
            count={serviceType.count}
            onClick={() => handleServiceTypeChanged(serviceType.slug)}
          />
        ))}
      </div>
    </div>
  );
}

type ServiceTypeButtonProps = {
  title: string;
  count: number;
  isSelected: boolean;
  onClick: () => void;
};

function ServiceTypeButton(props: ServiceTypeButtonProps) {
  const { title, count, isSelected, onClick } = props;

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
      <span className="block">{title}</span>
      <span className="rounded-full bg-emerald-500 px-2 text-xs font-semibold text-white">{count}</span>
    </button>
  );
}
