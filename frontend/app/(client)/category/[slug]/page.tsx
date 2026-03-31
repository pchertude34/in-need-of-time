import React from "react";
import { ServiceTypeDetailsCard } from "./components/ServiceTypeDetailsCard";
import { queryAndFilterServiceTypesByCategory } from "@/lib/queries/getServiceTypes";
import { queryServiceCategoryBySlug } from "@/lib/queries/getServiceCategories";
import { ServiceTypeFilters } from "./components/ServiceTypeFilters";
import { convertMilesToMeters } from "@/lib/utils";
import type { Location } from "@/lib/types";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lat?: string; lng?: string; radius?: string }>;
};

export default async function CategoryPage(props: CategoryPageProps) {
  const { slug } = await props.params;
  const { lat, lng, radius } = (await props.searchParams) || {};

  const location = lat && lng ? { lat: parseFloat(lat), lng: parseFloat(lng) } : (undefined as Location | undefined);

  const category = await queryServiceCategoryBySlug(slug);
  const serviceTypes = await queryAndFilterServiceTypesByCategory({
    categorySlug: slug,
    filter: { lat, lng, radius: convertMilesToMeters(radius || 0) },
  });

  return (
    <div>
      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-primary-500 to-primary-800 py-10">
        <h1 className="text-center text-5xl font-bold leading-relaxed text-white">{category.title}</h1>
      </div>
      {/* Main Content */}
      <main className="container max-w-[1080px] space-y-5 py-8">
        <p className="text-slate-900">{category.description}</p>

        <ServiceTypeFilters initialLocation={location} initialRadius={radius} />
        <div className="space-y-2">
          {serviceTypes.map((serviceType) => (
            <ServiceTypeDetailsCard
              key={`service-type-${serviceType.slug}`}
              location={location}
              radius={radius}
              slug={serviceType.slug}
              label={serviceType.name}
              description={serviceType.description}
              count={serviceType.providerCount}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
