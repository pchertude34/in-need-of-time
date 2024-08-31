import React from "react";

import { ProviderMap } from "./components/ProviderMap";
import { ServiceSearchBar } from "@/components/ServiceSearchBar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type SearchPageProps = {
  searchParams?: { [key: string]: string };
};

const tags = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);

export default function SearchPage(props: SearchPageProps) {
  return (
    <div>
      <ProviderMap>
        <div className="absolute flex h-[calc(100vh-88px)] w-full items-start overflow-hidden p-6">
          <ScrollArea className="z-10 h-full w-[403px] rounded-2xl bg-white shadow-xl">
            <div className="p-4">
              <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
              {tags.map((tag) => (
                <>
                  <div key={tag} className="text-sm">
                    {tag}
                  </div>
                  <Separator className="my-2" />
                </>
              ))}
            </div>
          </ScrollArea>
          {/* <div className="z-10 bg-white shadow-xl"> */}
          <ServiceSearchBar className="z-10 ml-4 bg-white shadow-xl" orientation="horizontal" />
          {/* </div> */}
        </div>
      </ProviderMap>
    </div>
  );
}
