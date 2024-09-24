import React from "react";
import Link from "next/link";
import { ArrowRightIcon, MapIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, GlobeAltIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProviderResultCardProps = {
  name: string;
  address: string;
  serviceType: string;
  description?: string;
  phone?: string;
  website?: string;
};

export function ProviderResultCard(props: ProviderResultCardProps) {
  const { name, address, serviceType, description, phone, website } = props;

  return (
    <div className="flex w-full flex-col space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <div className="mb-2 flex items-start justify-between">
          <h2 className="text-lg font-bold">{name}</h2>
          <Badge className="text-sm font-semibold">{serviceType}</Badge>
        </div>
        <div className="flex items-center">
          <MapPinIcon className="mr-1 h-4 w-4 text-slate-600" />
          <Button variant="text-primary" size="text" asChild>
            <Link href="">
              {address}
              <MapIcon className="ml-2 h-4 w-4 " />
            </Link>
          </Button>
        </div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
      <div className="flex justify-around border-b border-t border-slate-200 p-3">
        <Button variant="text-dark" size="text" asChild>
          <a href="">
            <PhoneIcon className="mr-2 h-4 w-4" />
            {phone}
          </a>
        </Button>
        <Button variant="text-dark" size="text" asChild>
          <a href="">
            <GlobeAltIcon className="mr-2 h-4 w-4" />
            Website
          </a>
        </Button>
      </div>
      <Button variant="hollow-primary">
        Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
