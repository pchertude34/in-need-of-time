"use client";

import { useState } from "react";
import { LocationInput } from "./components/LocationInput";
import { FormCard } from "./components/FormCard";
import { ServiceTypeContainer } from "./components/ServiceTypeContainer";
import { ProviderList } from "./components/ProviderList";

const COMPLETE_STATUS = "complete";
const INCOMPLETE_STATUS = "incomplete";
const CURRENT_STATUS = "current";

export default function ThePathPage() {
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [distance, setDistance] = useState<number | undefined>();
  const [selectedServiceTypeSlug, setSelectedServiceTypeSlug] = useState<string | null>();
  const [stepStatus, setStepStatus] = useState({
    step1: CURRENT_STATUS,
    step2: INCOMPLETE_STATUS,
    step3: INCOMPLETE_STATUS,
  });

  return (
    <div className="container mx-auto mt-10 space-y-10 px-2 md:px-8">
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
        {({ handleFormCompleted }) =>
          // Conditionally render the ServiceTypeContainer to get around typescript being mad about lat and lng
          // Technically, the ServiceTypeContainer won't be rendered until lat and lng are truthy in the <PathFormItem />
          // but typescript isn't smart enough to know that so we need to do this conditional render.
          !!latitude &&
          !!longitude && (
            <ServiceTypeContainer
              longitude={longitude}
              latitude={latitude}
              onDistanceChanged={(d) => setDistance(d)}
              onServiceTypeChanged={(serviceTypeSlug) => {
                setSelectedServiceTypeSlug(serviceTypeSlug);
                handleFormCompleted(true);
              }}
            />
          )
        }
      </FormCard>
      <FormCard
        title="Select a service to locate"
        description="Select one of the services we know about to get directions or learn more about it."
        isShowing={!!latitude && !!longitude && !!distance && !!selectedServiceTypeSlug}
      >
        {({ handleFormCompleted }) =>
          !!latitude &&
          !!longitude &&
          !!distance &&
          !!selectedServiceTypeSlug && (
            <ProviderList
              latitude={latitude}
              longitude={longitude}
              distance={distance}
              serviceTypeSlug={selectedServiceTypeSlug}
            />
          )
        }
      </FormCard>
    </div>
  );
}
