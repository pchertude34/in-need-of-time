"use client";

import React, { useRef } from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { LocateFixed } from "lucide-react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import type { Location } from "@/lib/types";
import { toast } from "sonner";
import { useLocationInput } from "@/hooks/useLocationInput";

type LocationInputProps = {
  onLocationChange: (location: Location | null) => void;
  className?: string;
};
export function LocationInput(props: LocationInputProps) {
  const { onLocationChange, className } = props;

  const addressInputRef = useRef<HTMLInputElement>(null);

  const { location, placeholder, calculateLocation, handleKeyDown } = useLocationInput({
    onLocationChange,

    ref: addressInputRef,
  });

  return (
    <InputGroup className={className}>
      <InputLeftElement>
        <MapPinIcon className="h-4 w-4 text-slate-500" />
      </InputLeftElement>
      <Input
        ref={addressInputRef}
        className={cn("grow-0 rounded-full  pl-10 pr-14 focus:border  focus:bg-slate-50", {
          "border-transparent focus:border-slate-400": !location,
        })}
        type="text"
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        variant={location ? "success" : "primary"}
      />
      <InputRightElement>
        {location && <CheckCircleIcon className="mr-1 h-5 w-5 text-success-400" />}
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="text-primary" size="text" onClick={calculateLocation}>
              <LocateFixed className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>Use my location</TooltipContent>
        </Tooltip>
      </InputRightElement>
    </InputGroup>
  );
}
