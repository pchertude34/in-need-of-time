"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LocationInput } from "./components/LocationInput";

const COMPLETE_STATUS = "complete";
const INCOMPLETE_STATUS = "incomplete";
const CURRENT_STATUS = "current";

export default function ThePathPage() {
  const [latitude, setLatitude] = useState<number | undefined>();
  const [longitude, setLongitude] = useState<number | undefined>();
  const [distance, setDistance] = useState<number | null>();
  const [selectedServiceType, setSelectedServiceType] = useState<
    string | null
  >();
  const [stepStatus, setStepStatus] = useState({
    step1: CURRENT_STATUS,
    step2: INCOMPLETE_STATUS,
    step3: INCOMPLETE_STATUS,
  });

  return (
    <div className="container mx-auto mt-10">
      <Card className="space-y-6 p-6">
        <div>
          <h2 className="text-2xl font-medium">Choose Your Location</h2>
          <p>
            Type an address for yourself, or someone you would like to assist
          </p>
        </div>
        <LocationInput
          label="Street Address"
          placeholder="1234 S Main St, Portland OR"
          onLocationChange={({ longitude, latitude }) => {
            setLatitude(latitude);
            setLongitude(longitude);
            // setIsComplete(true);
          }}
        />
      </Card>
    </div>
  );
}
