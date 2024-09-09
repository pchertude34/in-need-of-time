import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ProviderMap } from "./components/ProviderMap";
import { ServiceSearchBar } from "@/components/ServiceSearchBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProviderResultCard } from "./components/ProviderResultCard";
import { DrawerContent, DrawerClose, Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { MobileResultsDrawer } from "./components/MobileResultsDrawer";
import { queryAllServiceTypes } from "@/lib/queries/getServiceTypes";

type SearchPageProps = {
  searchParams?: { [key: string]: string };
};

export default async function SearchPage(props: SearchPageProps) {
  const serviceTypes = await queryAllServiceTypes();

  return (
    <div>
      <ProviderMap className="h-[calc(100dvh-5rem)] w-full lg:h-[calc(100dvh-5.5rem)]">
        {/* Desktop UI */}
        <div className="absolute hidden h-[calc(100dvh-88px)] w-full items-start p-6 lg:flex">
          <ScrollArea className="z-10 max-h-full w-[403px] flex-shrink-0 flex-col rounded-2xl bg-white shadow-xl">
            <div className="space-y-4 p-6">
              <span className="font-bold text-secondary-500">10 results found</span>
              <Tabs defaultValue="locations">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="locations">Locations</TabsTrigger>
                  <TabsTrigger value="others">Others</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="space-y-5">
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
              </div>
            </div>
          </ScrollArea>
          <ServiceSearchBar
            serviceTypes={serviceTypes}
            className="z-10 ml-4 bg-white shadow-xl"
            orientation="horizontal"
          />
        </div>

        {/* Mobile UI */}
        <div className="absolute flex h-[calc(100dvh-5rem)] w-full justify-center p-6 lg:hidden">
          {/* Search Drawer */}
          <Drawer shouldScaleBackground={false} direction="top">
            <DrawerTrigger asChild>
              <Button variant="primary" className="z-10 shadow-xl">
                Modify your search
              </Button>
            </DrawerTrigger>
            <DrawerContent variant="top" className="focus-ring-none">
              <div className="px-4 py-5">
                <div className="mb-6 flex justify-between align-middle">
                  <h4 className="text-lg font-bold text-slate-900">Find a Provider</h4>
                  <DrawerClose asChild>
                    <Button variant="text-dark" size="text">
                      <XMarkIcon className="h-4 w-4" />
                    </Button>
                  </DrawerClose>
                </div>
                <ServiceSearchBar orientation="vertical" />
              </div>
            </DrawerContent>
          </Drawer>
          {/* Results Drawer */}

          <MobileResultsDrawer>
            <div className="mx-auto my-3 box-border h-4 w-[100px] rounded-full bg-slate-400 dark:bg-slate-800" />
            <span className="mb-3 ml-4 font-bold text-secondary-500">10 results found</span>
            <div className="mx-auto  flex w-full flex-col space-y-4 overflow-auto p-4">
              <Tabs defaultValue="locations">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="locations">Locations</TabsTrigger>
                  <TabsTrigger value="others">Others</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="space-y-5">
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
                <ProviderResultCard
                  name="Last ONe"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                />
              </div>
            </div>
          </MobileResultsDrawer>
        </div>
      </ProviderMap>
    </div>
  );
}
