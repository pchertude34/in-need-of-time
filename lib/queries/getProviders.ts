import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export type GROQResponse = {
  services: {
    _id: string;
    title: string;
    place?: {
      address: string;
      placeId: string;
      location: {
        lat: number;
        lng: number;
      };
    };
    description?: string;
  }[];
};

type SearchProvidersParamsType = {
  lat?: string | number;
  lng?: string | number;
  radius?: string | number;
  serviceTypeSlug?: string;
};

export function searchProviders(params: SearchProvidersParamsType): Promise<GROQResponse[]> {
  const { lat, lng, radius, serviceTypeSlug } = params;

  const query = groq`*[_type == "provider" && 
    geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng(${lat}, ${lng})) < ${radius} && 
    "${serviceTypeSlug}" in (serviceTypes[]->slug.current)]`;

  console.log(query);
  return client.fetch(query);
}
