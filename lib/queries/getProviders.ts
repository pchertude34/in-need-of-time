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
      serviceTypes[]->{name, desctiption, 'slug': slug.current},
    }`;

  return client.fetch(query);
}
