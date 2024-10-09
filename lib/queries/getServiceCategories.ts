import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import type { ServiceCategory } from "../types";

export function queryAllServiceCategories(): Promise<ServiceCategory[]> {
  const query = groq`*[_type == "serviceCategory"]{
    title, description, 'imageUrl': icon.asset->url, 'slug': slug.current
  }`;

  return client.fetch(query);
}
