import React from "react";
import { MapPinIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { LocateFixed } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Combobox } from "./ui/combobox";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Typeahead } from "./Typeahead";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function ServiceSearchBar() {
  return (
    <div className="rounded-full border border-slate-200 px-3 py-4">
      <div className="flex items-stretch">
        {/* Location input */}
        <InputGroup>
          <InputLeftElement>
            <MapPinIcon className="h-4 w-4 text-slate-500" />
          </InputLeftElement>
          <Input
            className="rounded-full border-transparent px-10 focus:border focus:border-slate-400 focus:bg-slate-50"
            type="text"
            placeholder="Enter your location or ZIP"
          />
          <InputRightElement>
            <Button variant="text-primary" size="text">
              <LocateFixed className="h-4 w-4" />
            </Button>
          </InputRightElement>
        </InputGroup>
        <div className="mx-3">
          <Separator orientation="vertical" />
        </div>
        {/* Provider type selector */}
        <Typeahead placeholder="Search provider type" />
        <div className="mx-3">
          <Separator orientation="vertical" />
        </div>
      </div>
    </div>
  );
}
