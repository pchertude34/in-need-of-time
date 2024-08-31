import React from "react";

import { ProviderMap } from "./components/ProviderMap";
import { ServiceSearchBar } from "@/components/ServiceSearchBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProviderResultCard } from "./components/ProviderResultCard";

type SearchPageProps = {
  searchParams?: { [key: string]: string };
};

export default function SearchPage(props: SearchPageProps) {
  return (
    <div>
      <ProviderMap>
        <div className="absolute flex h-[calc(100vh-88px)] w-full items-start p-6">
          <ScrollArea className="z-10 flex max-h-full w-[403px] flex-shrink-0 flex-col rounded-2xl bg-white shadow-xl">
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
          <ServiceSearchBar className="z-10 ml-4 bg-white shadow-xl" orientation="horizontal" />
        </div>
      </ProviderMap>
    </div>
  );
}
