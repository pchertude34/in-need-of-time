import React from "react";
import Link from "next/link";
import { ArrowLeftIcon, MapPinIcon, GlobeAltIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { getProvider } from "@/lib/queries/getProviders";
import { formatPhoneNumberForHref, generateGoogleLink } from "@/lib/utils";

type ProviderPageProps = {
  params: {
    slug: string;
  };
};

export default async function ProviderPage(props: ProviderPageProps) {
  const { slug } = props.params;

  const provider = await getProvider({ id: slug });

  const shouldRenderContactInfo = provider.publicContact?.phone || provider.publicContact?.website;

  return (
    <>
      <main className="container max-w-[1080px] space-y-5 py-8">
        <Button variant="text-primary" size="sm" asChild>
          <Link href="/search">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Service Finder
          </Link>
        </Button>
        <div className="flex items-center">
          <div className="flex flex-col items-start">
            <h1 className="mb-2 text-2xl font-semibold">{provider.title}</h1>
            <Button variant="text-primary" size="text" asChild>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href={generateGoogleLink(provider.place.placeId, provider.title)}
              >
                <MapPinIcon className="mr-1 mt-1 h-4 w-4 self-start text-slate-600" />
                <span className="text-wrap">{provider.place.address}</span>
              </a>
            </Button>
          </div>
          {shouldRenderContactInfo && (
            <div className="ml-auto flex">
              {provider.publicContact?.phone && (
                <Button variant="text-dark" size="text" asChild>
                  <a href={formatPhoneNumberForHref(provider.publicContact.phone)}>
                    <PhoneIcon className="mr-2 h-4 w-4" />
                    {provider.publicContact.phone}
                  </a>
                </Button>
              )}
              {provider.publicContact?.website && (
                <Button variant="text-dark" size="text" asChild>
                  <a href={provider.publicContact.website} target="_blank" rel="noreferrer noopener">
                    <GlobeAltIcon className="mr-2 h-4 w-4" /> Website
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
