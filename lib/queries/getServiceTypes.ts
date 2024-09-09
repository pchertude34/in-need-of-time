import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import type { ServiceType } from "../types";

export function queryAllServiceTypes(): Promise<ServiceType[]> {
  const query = groq`*[_type == "serviceType"]{name, description, 'slug': slug.current}`;

  return client.fetch(query);
}
