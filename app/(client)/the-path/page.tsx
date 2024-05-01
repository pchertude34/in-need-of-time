"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LocationInput } from "./components/LocationInput";
import { FormCard } from "./components/FormCard";
import { getServiceTypes } from "@/lib/queries/getServiceTypes";

const COMPLETE_STATUS = "complete";
const INCOMPLETE_STATUS = "incomplete";
const CURRENT_STATUS = "current";

export default function ThePathPage() {
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [distance, setDistance] = useState<number | undefined>();
  const [selectedServiceType, setSelectedServiceType] = useState<
    string | null
  >();
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

  console.log("serviceTypes", serviceTypes);

  return (
    <div className="container mx-auto mt-10">
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
        {({ handleFormCompleted }) => <div></div>}
      </FormCard>
    </div>
  );
}
