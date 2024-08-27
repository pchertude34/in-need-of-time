import React from "react";
import { MapPinIcon, MagnifyingGlassIcon, ViewfinderCircleIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { LocateFixed } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Typeahead } from "./Typeahead";
import { Select, SelectTrigger, SelectContent, SelectGroup, SelectLabel, SelectItem, SelectValue } from "./ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";

type ServiceSearchBarProps = {
  className?: string;
};
export function ServiceSearchBar(props: ServiceSearchBarProps) {
  const { className } = props;
  return (
    <>
      <div className={cn("rounded-full p-1 sm:border sm:border-slate-200 sm:px-3 sm:py-4", className)}>
        <div className="hidden items-stretch sm:flex">
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
          <div className="mx-3">
            <Separator orientation="vertical" />
          </div>
          {/* Provider type selector */}
          <Typeahead placeholder="Search provider type" className="grow" />
          <div className="mx-3">
            <Separator orientation="vertical" />
          </div>
          <InputGroup className="">
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
          <Button variant="primary" size="icon" className="ml-2">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </Button>
        </div>
        <Drawer>
          <DrawerTrigger asChild>
            <InputGroup>
              <InputLeftElement>
                <MagnifyingGlassIcon className="h-5 w-5 text-slate-500" />
              </InputLeftElement>
              <button className="focus-ring-primary flex w-full items-center rounded-full px-10 py-3 text-slate-500">
                Find a Provider
              </button>
              <InputRightElement>
                <span className="ml-auto rounded-full bg-primary-500 p-3">
                  <ArrowRightIcon className="  h-5 w-5 text-white" />
                </span>
              </InputRightElement>
            </InputGroup>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Advanced Search</DrawerTitle>
            </DrawerHeader>
            <DrawerDescription>
              <p>Search for providers by location, provider type, and radius.</p>
            </DrawerDescription>
            <DrawerFooter>
              <Button variant="primary">Search</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
}
