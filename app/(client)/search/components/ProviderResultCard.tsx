import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { ArrowRightIcon, MapIcon } from "@heroicons/react/24/outline";
import { PhoneIcon, GlobeAltIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PortableTextBlock } from "@portabletext/types";
import { formatPhoneNumberForHref, generateGoogleNavigationLink } from "@/lib/utils";

type ProviderResultCardProps = {
  placeId: string;
  name: string;
  address: string;
  serviceType: string;
  description?: PortableTextBlock[];
  phone?: string;
  website?: string;
};

export function ProviderResultCard(props: ProviderResultCardProps) {
  const { placeId, name, address, serviceType, description, phone, website } = props;

  const shouldRenderContactInfo = phone || website;

  return (
    <div className="flex w-full flex-col space-y-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div>
        <div className="mb-2 flex items-start justify-between">
          <h2 className="mr-2 text-lg font-bold">{name}</h2>
          <Badge className="text-nowrap text-sm font-semibold">{serviceType}</Badge>
        </div>

        <Button variant="text-primary" size="text" asChild>
          <Link target="_blank" rel="noreferrer noopener" href={generateGoogleNavigationLink(placeId, name)}>
            <MapPinIcon className="mr-1 mt-1 h-4 w-4 self-start text-slate-600" />
            <span className="text-wrap">{address}</span>
          </Link>
        </Button>
      </div>
      {description && <PortableText value={description} />}
      {shouldRenderContactInfo && (
        <div className="flex justify-around border-b border-t border-slate-200 p-3">
          {phone && (
            <Button variant="text-dark" size="text" asChild>
              <a href={formatPhoneNumberForHref(phone)}>
                <PhoneIcon className="mr-2 h-4 w-4" />
                {phone}
              </a>
            </Button>
          )}
          {website && (
            <Button variant="text-dark" size="text" asChild>
              <a href={website} target="_blank" rel="noreferrer noopener">
                <GlobeAltIcon className="mr-2 h-4 w-4" />
                Website
              </a>
            </Button>
          )}
        </div>
      )}
      <Button variant="hollow-primary">
        Learn More <ArrowRightIcon className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
