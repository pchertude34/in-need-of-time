import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import type { ServiceType } from "../types";

export function queryAllServiceTypes(): Promise<ServiceType[]> {
  const query = groq`*[_type == "serviceType"]{name, description, 'slug': slug.current}`;

  return client.fetch(query);
}

export function queryServiceTypesByCategory(categorySlug: string): Promise<ServiceType[]> {
  const query = groq`*[_type == "serviceType" && "${categorySlug}" in serviceCategory[]->slug.current]{
    name, description, 'slug': slug.current
  }`;

  console.log("query :>> ", query);

  return client.fetch(query);
}
