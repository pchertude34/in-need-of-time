import React from "react";
import { CategoryDetailsCard } from "./components/CategoryDetailsCard";
import { queryServiceTypesByCategory } from "@/lib/queries/getServiceTypes";
import { queryServiceCategoryBySlug } from "@/lib/queries/getServiceCategories";
import { ServiceTypeFilters } from "./components/ServiceTypeFilters";

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
  const category = await queryServiceCategoryBySlug(props.params.slug);
  const serviceTypes = await queryServiceTypesByCategory({ slug: props.params.slug });

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
          <ServiceTypeFilters className="ml-auto" />
        </div>
        <div className="grid flex-wrap gap-4 lg:grid-cols-2">
          {serviceTypes.map((serviceType) => (
            <CategoryDetailsCard label={serviceType.name} description={serviceType.description} count={2} />
          ))}
        </div>
      </main>
    </div>
  );
}
