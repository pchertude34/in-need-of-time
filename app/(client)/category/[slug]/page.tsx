import React from "react";
import { CategoryDetailsCard } from "./components/CategoryDetailsCard";
import { queryAndFilterServiceTypesByCategory } from "@/lib/queries/getServiceTypes";
import { queryServiceCategoryBySlug } from "@/lib/queries/getServiceCategories";
import { ServiceTypeFilters } from "./components/ServiceTypeFilters";
import { convertMilesToMeters } from "@/lib/utils";

type CategoryPageProps = {
  params: {
    slug: string;
  };
  searchParams?: {
    lat?: string;
    lng?: string;
    radius?: string;
  };
};

export default async function CategoryPage(props: CategoryPageProps) {
  const { slug } = props.params;
  const { lat, lng, radius } = props.searchParams || {};

  const location = lat && lng ? { lat: parseFloat(lat), lng: parseFloat(lng) } : undefined;

  const category = await queryServiceCategoryBySlug(props.params.slug);
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
        <div className="flex justify-end">
          <ServiceTypeFilters className="ml-auto" initialLocation={location} initialRadius={radius} />
        </div>
        <div className="space-y-2">
          {serviceTypes.map((serviceType) => (
            <CategoryDetailsCard
              key={`service-type-${serviceType.name}`}
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
