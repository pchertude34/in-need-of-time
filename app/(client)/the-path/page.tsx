"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { LocationInput } from "./components/LocationInput";
import { FormCard } from "./components/FormCard";
import { getServiceTypes } from "@/lib/queries/getServiceTypes";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { convertMilesToMeters } from "@/lib/utils";

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
        {({ handleFormCompleted }) => (
          <div>
            <Select
              onValueChange={(value) =>
                setDistance(convertMilesToMeters(Number(value)))
              }
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Distance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="5">5 Miles</SelectItem>
                <SelectItem value="10">10 Miles</SelectItem>
                <SelectItem value="20">20 Miles</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
      </FormCard>
    </div>
  );
}
