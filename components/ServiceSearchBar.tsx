"use client";

import React, { useState } from "react";
import { MagnifyingGlassIcon, ViewfinderCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { cva, VariantProps } from "class-variance-authority";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Typeahead } from "./Typeahead";
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue } from "./ui/select";
import { cn } from "@/lib/utils";
import { LocationInput } from "./LocationInput";
import type { Location, ServiceType } from "@/lib/types";

const DEFAULT_ORIENTATION = "horizontal";

const searchBarVariant = cva("p-1 border border-slate-300", {
  variants: {
    orientation: {
      horizontal: "flex items-stretch px-3 py-4 rounded-full",
      vertical: "flex-col rounded-xl p-3",
    },
  },
  defaultVariants: {
    orientation: DEFAULT_ORIENTATION,
  },
});

type ServiceSearchBarProps = {
  serviceTypes?: ServiceType[];
  className?: string;
} & VariantProps<typeof searchBarVariant>;

export function ServiceSearchBar(props: ServiceSearchBarProps) {
  const { serviceTypes, orientation, className } = props;
  const [location, setLocation] = useState<Location | null>(null);
  const [serviceType, setServiceType] = useState<ServiceType | null>(null);
  const [radius, setRadius] = useState<string | undefined>();

  return (
    <div className={cn(searchBarVariant({ orientation, className }))}>
      {/* Location input */}
      <LocationInput
        className="grow-0"
        onLocationChange={(location) => {
          setLocation(location);
        }}
      />
      <SearchBarDivider orientation={orientation} />
      {/* Provider type selector */}
      <Typeahead
        items={serviceTypes}
        onFilter={(item, query) => item.name?.toLowerCase().includes(query.toLowerCase())}
        onItemSelected={(selectedItem) => setServiceType(selectedItem)}
        getDisplay={(item) => item.name}
        getKey={(item) => item.slug}
        placeholder="Search provider type"
        className="grow"
      />
      <SearchBarDivider orientation={orientation} />
      <InputGroup className="min-w-[200px]">
        <InputLeftElement>
          <ViewfinderCircleIcon className="h-4 w-4" />
        </InputLeftElement>
        <Select onValueChange={(radius) => setRadius(radius)} value={radius}>
          <SelectTrigger
            variant={radius ? "success" : "primary"}
            className={cn("rounded-full pl-10 focus:bg-slate-50", {
              "border-transparent focus:border-slate-400": !radius,
            })}
          >
            <SelectValue placeholder="Select radius" />
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
      </InputGroup>
      <Button
        variant="primary"
        size="icon"
        className={cn({ "ml-2": orientation === "horizontal", "mt-5 w-full": orientation === "vertical" })}
      >
        {orientation === "horizontal" ? (
          <MagnifyingGlassIcon className="h-5 w-5" />
        ) : (
          <>
            Find a Provider <ArrowRightIcon className=" ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </div>
  );
}

const searchBarDividerVariant = cva("", {
  variants: {
    orientation: {
      horizontal: "mx-3",
      vertical: "my-3",
    },
  },
  defaultVariants: {
    orientation: DEFAULT_ORIENTATION,
  },
});

type SearchBarDividerProps = VariantProps<typeof searchBarDividerVariant>;

function SearchBarDivider(props: SearchBarDividerProps) {
  const { orientation = DEFAULT_ORIENTATION } = props;

  return (
    <div className={cn(searchBarDividerVariant({ orientation }))}>
      <Separator orientation={orientation === "horizontal" ? "vertical" : "horizontal"} />
    </div>
  );
}
