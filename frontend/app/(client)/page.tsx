import Link from "next/link";
import { ArrowRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { ServiceCategoryCard } from "@/components/ServiceCategoryCard";
import { ServiceSearchBar } from "@/components/ServiceSearchBar";
import { ServiceSearchTriggerButton } from "@/components/ServiceSearchTriggerButton";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { queryAllServiceTypes } from "@/lib/queries/getServiceTypes";
import { queryAllServiceCategories } from "@/lib/queries/getServiceCategories";

export default async function Home() {
  const serviceTypes = await queryAllServiceTypes();
  const serviceCategories = await queryAllServiceCategories();

  return (
    <>
      <main className="container">
        {/* Hero Section */}
        <div>
          <div className="before mt-3 overflow-hidden rounded-3xl bg-hero-image bg-cover bg-center">
            <div className="h-[410px] w-full bg-primary-500/40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-black/30 to-black/50 sm:h-[486px]">
              <div className="p flex flex-col items-center justify-center pt-16 sm:pt-24 md:px-10 md:pt-32 lg:px-20 xl:px-60">
                <div className="px-3 md:px-0">
                  <h1 className="text-center text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl md:text-5xl">
                    Building a great community by helping each and everyone in service
                    <span className="text-secondary-400">.</span>
                  </h1>
                  <p className="mt-3 text-center text-white md:text-lg">
                    Our mission is to create a cohesive community by addressing the needs of every member through
                    service and support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Service Search Bar */}
          <div className="mx-auto w-[95%] -translate-y-[50%] rounded-full bg-white p-2 shadow-xl sm:p-4  lg:w-[85%] lg:p-8 xl:w-[75%]">
            {/* Desktop Search Bar */}
            <ServiceSearchBar serviceTypes={serviceTypes} orientation="horizontal" className="hidden md:flex" />
            {/* Mobile Search Menu */}
            <Drawer shouldScaleBackground={false} direction="top">
              {/* Mobile Search Menu trigger button (replaces the search bar on sm screens) */}
              <DrawerTrigger asChild>
                <ServiceSearchTriggerButton className="block md:hidden" />
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
          </div>
        </div>
        {/* Search by category section */}
        <div className="">
          <div className="mb-12 text-center">
            <h3 className="mb-3 text-2xl font-bold text-slate-900">Search by Category</h3>
            <p className="text-lg text-slate-600 ">Select a provider type to start your narrowed search.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            {serviceCategories.map((category) => (
              <ServiceCategoryCard
                key={category.slug}
                title={category.title}
                description={category.description}
                icon={category.imageUrl}
                href={`/category/${category.slug}`}
              />
            ))}
          </div>
        </div>
        {/* Call to action */}
        <div className="my-16 overflow-hidden rounded-3xl  bg-cta-image bg-[45%] md:my-32 ">
          <div className="flex h-[550px] w-full items-end justify-center bg-gradient-to-t from-primary-500/95 from-45% to-primary-500/10 to-100% p-6 md:h-[400px] md:items-center md:justify-start md:bg-gradient-to-r md:from-primary-500/85">
            <div className="max-w-[311px] md:ml-8 md:max-w-[346px]">
              <p className="text-4xl font-bold text-slate-900">
                Discover <span className="text-white">800+</span> service providers
              </p>
              <p className="mt-3 text-lg text-slate-900">
                Search our wide selection of service providers to find the help you need.
              </p>
              <Button className="mt-6" variant="light" asChild>
                <Link href="/search">
                  Find a Provider <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
