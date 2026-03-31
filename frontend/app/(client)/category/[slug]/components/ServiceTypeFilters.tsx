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
    <div className={cn("flex flex-wrap items-end justify-end gap-2 sm:flex-nowrap", className)}>
      <div className="w-full min-w-[144px] sm:max-w-[300px]">
        <LocationInput
          location={location}
          variant="default"
          onLocationChange={(location) => {
            setLocation(location);
          }}
          className=""
        />
      </div>
      <div className="w-full min-w-[150px] grow-0 sm:max-w-[150px] md:max-w-[250px]">
        <Select
          onValueChange={(radius) => setRadius(radius)}
          value={radius}
          defaultValue={radius}
          key={selectRenderKey.current}
        >
          <SelectTrigger variant={radius ? "success" : "primary"} className="shadow-sm">
            <div className="flex w-full shrink items-center">
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
      <div className="flex gap-2">
        <Button variant="primary" rounded="xl" onClick={handleFilter} disabled={!location || !radius}>
          <span className="mr-2">Filter</span>
          <FunnelIcon className="h-5 w-5" />
        </Button>
        <Button variant="light" rounded="xl" onClick={handleFilterReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
