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
import { searchProviders } from "@/lib/queries/getProviders";
import { convertMilesToMeters } from "@/lib/utils";

type SearchPageProps = {
  searchParams?: {
    lat?: string;
    lng?: string;
    radius?: string;
    type?: string;
  };
};

export default async function SearchPage(props: SearchPageProps) {
  const { searchParams } = props;
  const { lat, lng, radius, type } = searchParams || {};

  const serviceTypes = await queryAllServiceTypes();
  const providers = await searchProviders({
    lat,
    lng,
    radius: convertMilesToMeters(radius || 0),
    serviceTypeSlug: type,
  });

  return (
    <div>
      <ProviderMap className="h-[calc(100dvh-5rem)] w-full lg:h-[calc(100dvh-5.5rem)]">
        {/* Desktop UI */}
        <div className="absolute hidden h-[calc(100dvh-88px)] w-full items-start p-6 lg:flex">
          <ScrollArea className="z-10 flex max-h-full w-[403px] flex-grow flex-col rounded-2xl bg-white shadow-xl">
            <div className="max-w-full space-y-4 p-6">
              <span className="font-bold text-secondary-500">10 results found</span>
              <Tabs defaultValue="locations">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="locations">Locations</TabsTrigger>
                  <TabsTrigger value="others">Others</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="max-w-full space-y-5">
                {providers.map((provider) => (
                  <ProviderResultCard
                    key={provider._id}
                    name={provider.title}
                    address={provider.place?.address || "No address available"}
                    serviceType={provider.serviceTypes[0].name}
                    // description={provider.description}
                    // phone={provider.phone}
                    // website={provider.website}
                  />
                ))}

                {/* <ProviderResultCard
                  name="St. Austin's Day Care"
                  address="1234 Main St, Portland, OR 97201"
                  serviceType="Housing"
                  description="A great place for kids to learn and grow."
                  phone="(503) 555-1234"
                  website="https://example.com"
                /> */}
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
                {providers.map((provider) => (
                  <ProviderResultCard
                    key={`${provider._id}-mobile`}
                    name={provider.title}
                    address={provider.place?.address || "No address available"}
                    serviceType={provider.serviceTypes[0].name}
                    // description={provider.description}
                    // phone={provider.phone}
                    // website={provider.website}
                  />
                ))}
              </div>
            </div>
          </MobileResultsDrawer>
        </div>
      </ProviderMap>
    </div>
  );
}
