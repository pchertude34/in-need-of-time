import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import type { ServiceType } from "../types";

export function queryAllServiceTypes(): Promise<ServiceType[]> {
  const query = groq`*[_type == "serviceType"] | order(lower(name) asc) {
    name, description, 'slug': slug.current
  }`;

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
  const query = groq`*[_type == "serviceType" && $slug in serviceCategory[]->slug.current] | order(lower(${sortBy}) ${sortDir}) {
    name, description, 'slug': slug.current
  }`;

  return client.fetch(query, { slug });
}

type QueryAndFilterParams = {
  categorySlug: string;
  filter?: {
    lat?: number | string;
    lng?: number | string;
    radius?: number;
  };
};

/**
 * Query function to fetch service types by its category and optionally filter by location.
 * If filtering by location, query providers within range and only return service types with a provider
 * count greater than 0.
 * @param categorySlug The slug of the service category to query service types for
 * @param filter.lat The latitude of the location to filter by
 * @param filter.lng The longitude of the location to filter by
 * @param filter.radius The radius in meters to filter by
 * @returns A promise that resolves with an array of service types and their provider count.
 * add a provider count of 0 if no location is provided for consistent api use.
 *
 * I'm not sure if adding 0 for the provider count is going to get me in trouble down the line.
 * Oh well, that's future Payton's problem
 */

export function queryAndFilterServiceTypesByCategory(
  params: QueryAndFilterParams,
): Promise<(ServiceType & { providerCount: number })[]> {
  const { categorySlug, filter: { lat, lng, radius } = {} } = params;

  let query: string;

  // If location is provided, only get the service types that have providers within the radius
  if (lat && lng && radius) {
    query = groq`*[_type == "serviceType" && $slug in serviceCategory[]->slug.current]{
      "providerCount": count(*[_type == "provider" && references(^._id) && geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng(${lat}, ${lng})) < ${radius} ]),
      name, 
      description, 
      'slug': slug.current
    }[providerCount > 0] | order(lower(name) asc)`;
  } else {
    // Mock provider count if no location is provided for consistency
    query = groq`*[_type == "serviceType" && $slug in serviceCategory[]->slug.current] | order(lower(name) asc) {
      name, 
      description, 
      'slug': slug.current,
      'providerCount': 0
    }`;
  }

  return client.fetch(query, { slug: categorySlug });
}
