import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import type { Provider } from "../types";

type SearchProvidersParamsType = {
  lat?: string | number;
  lng?: string | number;
  radius?: string | number;
  serviceTypeSlug?: string;
};

export function searchProviders(params: SearchProvidersParamsType): Promise<Provider[]> {
  const { lat, lng, radius, serviceTypeSlug } = params;

  const query = groq`*[_type == "provider" && 
    geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng(${lat}, ${lng})) < ${radius} && 
    "${serviceTypeSlug}" in (serviceTypes[]->slug.current)] {
      _id,
      title,
      place,
      description,
      publicContact,
      serviceTypes[(@->slug.current == "${serviceTypeSlug}")]->{
        name, 
        desctiption, 
        'slug': slug.current
      }
    }`;

  // filter out provider service types that don't match the queried service type
  // In the future when we want to support queries with multiple service types, we can use the following:
  // serviceTypes[(@->slug.current in ${serviceTypeSlugs})]->{name, desctiption, 'slug': slug.current}

  return client.fetch(query);
}

type GetProviderParams = { id: string };

export function getProvider(params: GetProviderParams): Promise<Provider> {
  const { id } = params;

  const query = groq`*[_type == "provider" && _id == '${id}'] {
    _id,
    title,
    place,
    description,
    publicContact,
    serviceTypes[]->{name, desctiption, 'slug': slug.current},
  }[0]`;

  return client.fetch(query);
}
