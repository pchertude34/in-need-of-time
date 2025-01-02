"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LocationInput } from "@/components/LocationInput";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectGroup, SelectValue } from "@/components/ui/select";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import type { Location } from "@/lib/types";

type ServiceTypeFiltersProps = {
  className?: string;
  initialLocation?: Location;
  initialRadius?: string;
};

export function ServiceTypeFilters(props: ServiceTypeFiltersProps) {
  const { className, initialLocation, initialRadius } = props;
  const [location, setLocation] = useState<Location | null>(initialLocation || null);
  const [radius, setRadius] = useState<string | undefined>(initialRadius);
  const router = useRouter();

  const selectRenderKey = useRef(new Date().toISOString());

  // This is super annoying, but the radix select component doesn't re-render the placeholder
  // when the value changes from a non-falsy value to a falsy value. This is a hack to force a re-render
  useEffect(() => {
    if (!radius) {
      selectRenderKey.current = new Date().toISOString();
    }
  }, [radius]);

  function handleFilter() {
    router.push(`?lat=${location?.lat}&lng=${location?.lng}&radius=${radius}`);
  }

  function handleFilterReset() {
    setLocation(null);
    setRadius(undefined);
    // Remove any query params
    router.push("?");
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <LocationInput
        location={location}
        variant="default"
        onLocationChange={(location) => {
          setLocation(location);
        }}
        className="shrink-0"
      />
      <Select
        onValueChange={(radius) => setRadius(radius)}
        value={radius}
        defaultValue={radius}
        key={selectRenderKey.current}
      >
        <SelectTrigger variant={radius ? "success" : "primary"} className="min-w-[144px] shadow-sm">
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
      <Button variant="primary" rounded="xl" onClick={handleFilter}>
        Filter
        <FunnelIcon className="ml-2 h-5 w-5" />
      </Button>
      <Button variant="light" rounded="xl" onClick={handleFilterReset}>
        Reset
      </Button>
    </div>
  );
}
