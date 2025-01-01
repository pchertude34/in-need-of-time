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

/**
 * Query function to fetch service types by service category. Return all of the
 * service types in the service category "bucket".
 * @param slug The slug of the service category to query service types for
 * @param sortBy The field to sort by
 * @param sortDir The direction to sort by
 * @returns A proimse that resolves with an array of service types
 */
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

type ServiceTypeAndProviderCountQueryParams = {
  slug: string;
  lat: number;
  lng: number;
  distance: number;
};

export function queryServiceTypesAndProviderCountByLocation(
  params: ServiceTypeAndProviderCountQueryParams,
): Promise<ServiceType[]> {
  const query = groq`*[ _type == "provider" && defined(serviceTypes) && geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng(${params.lat}, ${params.lng})) < ${params.distance}]{ 'services': serviceTypes[]->{name, description, slug} }`;

  return client.fetch(query);
}
