"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { cn } from "@/lib/utils";
import type { Location } from "@/lib/types";

type ServiceTypeDetailsCardProps = {
  slug: string;
  label: string;
  location?: Location;
  radius?: string;
  description?: string;
  count?: number;
  className?: string;
};

export function ServiceTypeDetailsCard(props: ServiceTypeDetailsCardProps) {
  const { slug, label, location, radius, description, count = 0, className } = props;
  const [isHovering, setIsHovering] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const searchLink = `/search?lat=${location?.lat}&lng=${location?.lng}&type=${slug}&radius=${radius}`;

  function handleServiceTypeClicked(e: React.MouseEvent<HTMLAnchorElement>) {
    // e.preventDefault();
    // console.log("Service type clicked");
  }

  return (
    <Collapsible
      className={
        "focus-ring-primary rounded-lg border-2 border-slate-200 bg-slate-50 transition hover:border-primary-500 hover:bg-primary-50 focus:border-primary-500 focus:bg-primary-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2 sm:p-6"
      }
      // className="relative data-[state=open]:animate-in data-[state=closed]:animate-out"
      open={isExpanded}
      onOpenChange={setIsExpanded}
    >
      <div className="flex w-full items-start justify-between">
        <Link
          onClick={handleServiceTypeClicked}
          href={searchLink}
          className="w-full"
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() => setIsHovering(false)}
        >
          <div className="mr-4 flex flex-grow-0 items-center">
            <h3 className="mb-0 text-pretty text-lg font-semibold">{label}</h3>
            <div
              className={cn("ml-2 transform transition-all", {
                "-translate-x-2 opacity-0": !isHovering,
                "translate-x-0 opacity-100": isHovering,
              })}
            >
              <ArrowRightIcon className="h-5 w-5 text-secondary-500" />
            </div>
          </div>
        </Link>
        {count > 0 && (
          <Badge variant="primary" className="flex-shrink-0">
            {count} Provider{count > 1 && "s"}
          </Badge>
        )}
      </div>
      {description?.length > 0 && (
        <CollapsibleTrigger asChild>
          <Button variant="text-primary" size="text-sm">
            {isExpanded ? "Hide" : "Show"} description
            <ChevronDownIcon
              className={cn("h-5 w-5 transition", { "rotate-0": !isExpanded, "rotate-180": isExpanded })}
            />
          </Button>
        </CollapsibleTrigger>
      )}
      <CollapsibleContent className={cn("mt-4 data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0")}>
        {description}
      </CollapsibleContent>
    </Collapsible>
  );
}
