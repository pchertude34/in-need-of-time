import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
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
            <div className="ml-auto flex space-x-6">
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

        <div className="flex">
          <div className="space-y-8">
            <article className="prose text-slate-900 prose-p:leading-snug">
              {provider.description && <PortableText value={provider.description} />}
            </article>
            {shouldRenderContactInfo && (
              <div className="space-y-4 rounded-md bg-slate-100 p-4">
                <h2 className="text-xl font-bold">Contact Details</h2>
                <div className="flex">
                  {provider.publicContact?.phone && (
                    <div className="mr-14 flex flex-col">
                      <span className="mb-1 text-slate-600">Phone Number</span>
                      <Button variant="text-primary" size="text">
                        {provider.publicContact?.phone}
                      </Button>
                    </div>
                  )}
                  <div className="flex flex-col ">
                    <span className="mb-1 text-slate-600">Email Address</span>
                    <Button variant="text-primary" size="text">
                      info@austinsdaycare.com
                    </Button>
                  </div>
                </div>
              </div>
            )}
            <p className="text-sm text-slate-500">
              The community resource directory information is up to date to the best of our knowledge. However, you
              should always call the provider to confirm this information and make an appointment. Be sure to confirm
              payment information with the provider, if payment is required. In Time of Need does not rate, recommend or
              endorse any agency. We simply provide information as a public service.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
