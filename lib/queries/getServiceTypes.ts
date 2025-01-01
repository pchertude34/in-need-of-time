import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import type { ServiceType } from "../types";

export function queryAllServiceTypes(): Promise<ServiceType[]> {
  const query = groq`*[_type == "serviceType"]{name, description, 'slug': slug.current}`;

  return client.fetch(query);
}

type ServiceTypeQueryParams = {
  slug: string;
  sortBy?: "name" | "_id";
  sortDir?: "asc" | "desc";
};

export function queryServiceTypesByCategory({
  slug,
  sortBy = "name",
  sortDir = "asc",
}: ServiceTypeQueryParams): Promise<ServiceType[]> {
  const query = groq`*[_type == "serviceType" && $slug in serviceCategory[]->slug.current] | order(${sortBy} ${sortDir}) {
    name, description, 'slug': slug.current
  }`;

  return client.fetch(query, { slug });
}
