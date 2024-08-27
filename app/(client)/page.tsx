import { ServiceCategoryCard } from "@/components/ServiceCategoryCard";
import { ServiceSearchBar } from "@/components/ServiceSearchBar";

export default function Home() {
  return (
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
                  Our mission is to create a cohesive community by addressing the needs of every member through service
                  and support.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className=" mx-auto w-[100%] -translate-y-[50%] rounded-full bg-white p-2 shadow-xl sm:p-4 md:block  lg:w-[85%] lg:p-8 xl:w-[75%]">
          <ServiceSearchBar />
          {/* <Drawer shouldScaleBackground={false} direction="top">
          <DrawerTrigger asChild>
            <InputGroup className="cursor-pointer sm:hidden">
              <InputLeftElement>
                <MagnifyingGlassIcon className="h-5 w-5 text-slate-500" />
              </InputLeftElement>
              <button className="focus-ring-primary flex w-full items-center rounded-full px-10 py-3 text-slate-500">
                Find a Provider
              </button>
              <InputRightElement>
                <span className="ml-auto rounded-full bg-primary-500 p-3">
                  <ArrowRightIcon className="  h-5 w-5 text-white" />
                </span>
              </InputRightElement>
            </InputGroup>
          </DrawerTrigger>
          <DrawerContent variant="top">
            <div className="px-4 py-5">Hello</div>
          </DrawerContent>
        </Drawer> */}
        </div>
      </div>
      <div className="">
        <div className="mb-12 text-center">
          <h3 className="mb-3 text-2xl font-bold text-slate-900">Search by Category</h3>
          <p className="text-lg text-slate-600 ">Select a provider type to start your narrowed search.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 md:gap-6">
          <ServiceCategoryCard
            className="w-full sm:max-w-[260px]"
            title="Housing"
            icon="house"
            description="Support services for finding and maintaining safe, affordable housing."
            href="/"
          />
          <ServiceCategoryCard
            className="w-full sm:max-w-[260px]"
            title="Housing"
            icon="house"
            description="Support services for finding and maintaining safe, affordable housing."
            href="/"
          />
          <ServiceCategoryCard
            className="w-full sm:max-w-[260px]"
            title="Housing"
            icon="house"
            description="Support services for finding and maintaining safe, affordable housing."
            href="/"
          />
          <ServiceCategoryCard
            className="w-full sm:max-w-[260px]"
            title="Housing"
            icon="house"
            description="Support services for finding and maintaining safe, affordable housing."
            href="/"
          />
          <ServiceCategoryCard
            className="w-full sm:max-w-[260px]"
            title="Housing"
            icon="house"
            description="Support services for finding and maintaining safe, affordable housing."
            href="/"
          />
          <ServiceCategoryCard
            className="w-full sm:max-w-[260px]"
            title="Housing"
            icon="house"
            description="Support services for finding and maintaining safe, affordable housing."
            href="/"
          />
          <ServiceCategoryCard
            className="w-full sm:max-w-[260px]"
            title="Housing"
            icon="house"
            description="Support services for finding and maintaining safe, affordable housing."
            href="/"
          />
        </div>
      </div>
    </main>
  );
}
