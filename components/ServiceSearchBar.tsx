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

const searchBarVariant = cva("p-1 border border-slate-200", {
  variants: {
    variant: {
      horizontal: "flex items-stretch px-3 py-4 rounded-full",
      vertical: "flex-col rounded-xl p-3",
    },
  },
  defaultVariants: {
    variant: "horizontal",
  },
});

type ServiceSearchBarProps = {
  className?: string;
} & VariantProps<typeof searchBarVariant>;

export function ServiceSearchBar(props: ServiceSearchBarProps) {
  const { variant, className } = props;
  return (
    <div className={cn(searchBarVariant({ variant, className }))}>
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
      <div className={cn({ "mx-3": variant === "horizontal", "my-3": variant === "vertical" })}>
        <Separator orientation={variant === "horizontal" ? "vertical" : "horizontal"} />
      </div>
      {/* Provider type selector */}
      <Typeahead placeholder="Search provider type" className="grow" />
      <div className={cn({ "mx-3": variant === "horizontal", "my-3": variant === "vertical" })}>
        <Separator orientation={variant === "horizontal" ? "vertical" : "horizontal"} />
      </div>
      <InputGroup>
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
        className={cn({ "ml-2": variant === "horizontal", "mt-5 w-full": variant === "vertical" })}
      >
        {variant === "horizontal" ? (
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
