import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { LocateFixed } from "lucide-react";
import { Button } from "./ui/button";

export function ServiceSearchBar() {
  return (
    <div className="rounded-full border border-slate-200 p-3">
      <div className="flex items-center">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-slate-500">
              <MapPinIcon className="h-4 w-4" />
            </span>
          </div>
          <input className="block w-full pl-10 pr-10" type="text" placeholder="Enter your location or ZIP" />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button variant="text-primary" size="text">
              <LocateFixed className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
