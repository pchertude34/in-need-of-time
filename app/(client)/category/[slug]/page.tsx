import React from "react";
import { CategoryDetailsCard } from "./components/CategoryDetailsCard";
import { queryServiceTypesByCategory } from "@/lib/queries/getServiceTypes";

type CategoryPageProps = {
  params: {
    slug: string;
  };
};

export default async function CategoryPage(props: CategoryPageProps) {
  const serviceTypes = await queryServiceTypesByCategory(props.params.slug);

  return (
    <>
      <main className="container max-w-[1080px] space-y-5 py-8">
        {serviceTypes.map((serviceType) => (
          <CategoryDetailsCard label={serviceType.name} description="Test" count={1} />
        ))}
      </main>
    </>
  );
}
