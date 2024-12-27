"use client";

import { LocationInput } from "@/components/LocationInput";
import React from "react";

type ServiceTypeFiltersProps = {
  className?: string;
};

export function ServiceTypeFilters(props: ServiceTypeFiltersProps) {
  return (
    <div>
      <LocationInput onLocationChange={() => {}} />
    </div>
  );
}
