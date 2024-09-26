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
import { cn, convertMilesToMeters } from "@/lib/utils";
import type { Provider } from "@/lib/types";
import { EmptySearchResults } from "./components/EmptySearchResults";

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

  const shouldSearch = lat && lng && radius && type;

  // We only want to search the providers if the user is coming to the page
  // with full search parameters.
  // This also helps us determin if the user ran a search or not.
  // Provider search will always return an array if it ran successfully -
  // it will just be an empty array if no results were found.
  let providers: undefined | Provider[];
  // Service types always need to be loaded to populate the search bar menu
  const serviceTypes = await queryAllServiceTypes();

  if (shouldSearch) {
    providers = await searchProviders({
      lat,
      lng,
      radius: convertMilesToMeters(radius || 0),
      serviceTypeSlug: type,
    });
  }

  return (
    <div>
      <ProviderMap className="h-[calc(100dvh-5rem)] w-full lg:h-[calc(100dvh-5.5rem)]">
        {/* Desktop UI */}
        <div className="absolute hidden h-[calc(100dvh-88px)] w-full items-start p-6 lg:flex">
          {/* If providers is truthy, we know the user made a search */}
          {providers && (
            <ScrollArea className="z-10 flex max-h-full w-[403px] flex-shrink-0 flex-col rounded-2xl bg-white shadow-xl">
              <div className="max-w-full space-y-4 p-6">
                <span className="font-bold text-secondary-500">{providers.length} results found</span>
                {providers.length > 0 ? (
                  <>
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
                          placeId={provider.place.placeId}
                          name={provider.title}
                          description={provider.description}
                          address={provider.place?.address || "No address available"}
                          serviceType={provider.serviceTypes[0].name}
                          phone={provider.publicContact?.phone}
                          website={provider.publicContact?.website}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <EmptySearchResults />
                )}
              </div>
            </ScrollArea>
          )}
          <ServiceSearchBar
            serviceTypes={serviceTypes}
            className={cn("z-10 ml-4 bg-white shadow-xl", {
              "mx-auto": providers === undefined,
            })}
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
                <ServiceSearchBar serviceTypes={serviceTypes} orientation="vertical" />
              </div>
            </DrawerContent>
          </Drawer>
          {/* Results Drawer */}

          {providers && (
            <MobileResultsDrawer>
              <div className="mx-auto my-3 box-border h-4 w-[100px] rounded-full bg-slate-400 dark:bg-slate-800" />
              <span className="mb-3 ml-4 font-bold text-secondary-500">{providers.length} results found</span>
              <div className="mx-auto  flex w-full flex-col space-y-4 overflow-auto p-4">
                {providers.length > 0 ? (
                  <>
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
                          placeId={provider.place.placeId}
                          name={provider.title}
                          description={provider.description}
                          address={provider.place?.address || "No address available"}
                          serviceType={provider.serviceTypes[0].name}
                          phone={provider.publicContact?.phone}
                          website={provider.publicContact?.website}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <EmptySearchResults />
                )}
              </div>
            </MobileResultsDrawer>
          )}
        </div>
      </ProviderMap>
    </div>
  );
}
