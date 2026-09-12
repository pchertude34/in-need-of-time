import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";
import type { Provider } from "@in-need-of-time/types";

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
    "${serviceTypeSlug}" in (serviceTypes[].serviceType->slug.current)] {
      _id,
      title,
      place,
      description,
      publicContact,
      serviceTypes[(serviceType->slug.current == "${serviceTypeSlug}")].serviceType->{
        name,
        description,
        'slug': slug.current
      }
    }`;

  // filter out provider service types that don't match the queried service type
  // In the future when we want to support queries with multiple service types, we can use the following:
  // serviceTypes[(serviceType->slug.current in ${serviceTypeSlugs})].serviceType->{name, desctiption, 'slug': slug.current}

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
    serviceTypes[].serviceType->{name, desctiption, 'slug': slug.current},
  }[0]`;

  return client.fetch(query);
}
