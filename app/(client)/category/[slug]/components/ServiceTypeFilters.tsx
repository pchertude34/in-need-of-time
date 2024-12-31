"use client";

import React, { useState } from "react";
import { LocationInput } from "@/components/LocationInput";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectValue } from "@/components/ui/select";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";

type ServiceTypeFiltersProps = {
  className?: string;
};

export function ServiceTypeFilters(props: ServiceTypeFiltersProps) {
  const { className } = props;
  const [radius, setRadius] = useState<string | undefined>();

  return (
    <div className={cn("flex items-center", className)}>
      <LocationInput variant="default" onLocationChange={() => {}} className="mr-2 shrink-0" />
      <Select onValueChange={(radius) => setRadius(radius)} value={radius}>
        <SelectTrigger variant={radius ? "success" : "primary"} className="min-w-[144px]">
          <div className="flex w-full flex-grow items-center">
            <SelectValue placeholder="Select radius" />
            {radius && <CheckCircleIcon className="ml-auto mr-1 h-5 w-5 text-success-400" />}
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="10">10 miles</SelectItem>
            <SelectItem value="20">20 miles</SelectItem>
            <SelectItem value="50">50 miles</SelectItem>
            <SelectItem value="100">100 miles</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
