import React from "react";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import {
  ArrowLeftIcon,
  MapPinIcon,
  GlobeAltIcon,
  PhoneIcon,
  ArrowRightIcon,
  FlagIcon,
} from "@heroicons/react/24/solid";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { getProvider } from "@/lib/queries/getProviders";
import { formatPhoneNumberForHref, generateGoogleLink } from "@/lib/utils";
import { ProviderDetailsMap } from "./components/ProviderDetailsMap";

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
        <div className="flex flex-wrap items-center gap-5 md:flex-nowrap">
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
            <div className="flex space-x-6 md:ml-auto ">
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

        <div className="flex flex-wrap gap-6 md:flex-nowrap">
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
            <p className="hidden text-sm text-slate-500 md:block">
              The community resource directory information is up to date to the best of our knowledge. However, you
              should always call the provider to confirm this information and make an appointment. Be sure to confirm
              payment information with the provider, if payment is required. In Time of Need does not rate, recommend or
              endorse any agency. We simply provide information as a public service.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <ProviderDetailsMap
              className=" mx-auto h-[300px] w-full md:w-[400px]"
              providerLocation={provider.place.location}
            />
            <div className="rounded-md bg-slate-50 p-6">
              <div className="flex">
                <InformationCircleIcon className=" mr-2 mt-1 h-5 w-5 self-start text-blue-600" />
                <h3 className="mb-2 inline-block text-lg font-bold">Are you part of this agency?</h3>
              </div>
              <p className="mb-5 text-xs text-slate-600">
                If you belong or a representative of this agency, you can request an update on the details of this
                service provider. Just click the button below..
              </p>
              <Button variant="text-dark" size="text">
                Request update <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div>
              <Button variant="light" className="rounded-sm font-bold">
                <FlagIcon className="mr-2 h-4 w-4" />
                Report an issue
              </Button>
            </div>
          </div>
          <p className="block text-sm text-slate-500 md:hidden">
            The community resource directory information is up to date to the best of our knowledge. However, you should
            always call the provider to confirm this information and make an appointment. Be sure to confirm payment
            information with the provider, if payment is required. In Time of Need does not rate, recommend or endorse
            any agency. We simply provide information as a public service.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
