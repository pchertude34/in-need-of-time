import React from "react";
import { MapPinIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { LocateFixed } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Combobox } from "./ui/combobox";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";

export function ServiceSearchBar() {
  return (
    <div className="rounded-full border border-slate-200 px-3 py-4">
      <div className="flex items-stretch">
        {/* Location input */}
        <InputGroup>
          <InputLeftElement>
            <MapPinIcon className="h-4 w-4 text-slate-500" />
          </InputLeftElement>
          <Input className=" border-none px-10" type="text" placeholder="Enter your location or ZIP" />
          <InputRightElement>
            <Button variant="text-primary" size="text">
              <LocateFixed className="h-4 w-4" />
            </Button>
          </InputRightElement>
        </InputGroup>
        {/* <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-slate-500">
              <MapPinIcon className="h-4 w-4" />
            </span>
          </div>
          <Input className="block border-none pl-10 pr-10" type="text" placeholder="Enter your location or ZIP" />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Button variant="text-primary" size="text">
              <LocateFixed className="h-4 w-4" />
            </Button>
          </div>
        </div> */}
        {/*  */}
        <div className="mx-3">
          <Separator orientation="vertical" />
        </div>
        {/* Provider type selector */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-slate-500">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </span>
          </div>
          <Combobox />
          {/* <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <Button variant="text-primary" size="text">
              <LocateFixed className="h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
