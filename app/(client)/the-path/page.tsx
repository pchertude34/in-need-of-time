"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LocationInput } from "./components/LocationInput";
import { FormCard } from "./components/FormCard";
import { getServiceTypes } from "@/lib/queries/getServiceTypes";
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";
import { convertMilesToMeters } from "@/lib/utils";
import { ServiceTypeContainer } from "./components/ServiceTypeContainer";
import { ProviderList } from "./components/ProviderList";

const COMPLETE_STATUS = "complete";
const INCOMPLETE_STATUS = "incomplete";
const CURRENT_STATUS = "current";

export default function ThePathPage() {
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [distance, setDistance] = useState<number | undefined>();
  const [selectedServiceTypeId, setSelectedServiceTypeId] = useState<string | null>();
  const [stepStatus, setStepStatus] = useState({
    step1: CURRENT_STATUS,
    step2: INCOMPLETE_STATUS,
    step3: INCOMPLETE_STATUS,
  });

  const { data: serviceTypes } = useQuery({
    queryKey: [latitude, longitude, distance],
    enabled: !!latitude && !!longitude && !!distance,
    queryFn: () => getServiceTypes({ latitude, longitude, distance }),
  });

  return (
    <div className="container mx-auto mt-10 space-y-10">
      <FormCard
        title="Where are you located?"
        description="Type an address for yourself, or someone you would like to assist"
        isShowing={true}
      >
        {({ handleFormCompleted }) => (
          <LocationInput
            onLocationChange={({ longitude, latitude }) => {
              setLatitude(latitude);
              setLongitude(longitude);
              handleFormCompleted(true);
            }}
          />
        )}
      </FormCard>
      <FormCard
        title="What type of service are you looking for?"
        description="Select a type of the nearby services that you need to access"
        isShowing={!!latitude && !!longitude}
      >
        {({ handleFormCompleted }) => (
          <ServiceTypeContainer
            longitude={longitude}
            latitude={latitude}
            onDistanceChanged={(d) => setDistance(d)}
            onServiceTypeChanged={(serviceTypeId) => {
              setSelectedServiceTypeId(serviceTypeId);
              handleFormCompleted(true);
            }}
          />
        )}
      </FormCard>
      <FormCard
        title="Select a service to locate"
        description="Select one of the services we know about to get directions or learn more about it."
        isShowing={!!latitude && !!longitude && !!distance && !!selectedServiceTypeId}
      >
        {({ handleFormCompleted }) => (
          <ProviderList
            latitude={latitude}
            longitude={longitude}
            distance={distance}
            serviceTypeId={selectedServiceTypeId}
          />
        )}
      </FormCard>
    </div>
  );
}
