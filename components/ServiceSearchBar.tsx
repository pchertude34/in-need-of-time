import React from "react";
import { MapPinIcon, MagnifyingGlassIcon, ViewfinderCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { cva, VariantProps } from "class-variance-authority";
import { LocateFixed } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Typeahead } from "./Typeahead";
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectItem, SelectValue } from "./ui/select";
import { cn } from "@/lib/utils";

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
  className?: string;
} & VariantProps<typeof searchBarVariant>;

export function ServiceSearchBar(props: ServiceSearchBarProps) {
  const { orientation, className } = props;

  return (
    <div className={cn(searchBarVariant({ orientation, className }))}>
      {/* Location input */}
      <InputGroup className="grow">
        <InputLeftElement>
          <MapPinIcon className="h-4 w-4 text-slate-500" />
        </InputLeftElement>
        <Input
          className=" rounded-full border-transparent px-10 focus:border focus:border-slate-400 focus:bg-slate-50"
          type="text"
          placeholder="Enter your location or ZIP"
        />
        <InputRightElement>
          <Button variant="text-primary" size="text">
            <LocateFixed className="h-4 w-4" />
          </Button>
        </InputRightElement>
      </InputGroup>
      <SearchBarDivider orientation={orientation} />
      {/* Provider type selector */}
      <Typeahead placeholder="Search provider type" className="grow" />
      {/* <SearchBarDivider orientation={variant} /> */}
      <SearchBarDivider orientation={orientation} />
      <InputGroup className="min-w-[200px]">
        <InputLeftElement>
          <ViewfinderCircleIcon className="h-4 w-4" />
        </InputLeftElement>
        <Select>
          <SelectTrigger className="rounded-full border-transparent pl-10 focus:border focus:border-slate-400 focus:bg-slate-50">
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
