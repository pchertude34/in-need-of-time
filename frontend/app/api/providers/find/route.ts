import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type GROQResponse = {
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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const distance = searchParams.get("distance");
  const serviceTypeSlug = searchParams.get("serviceTypeSlug");

  const query = groq`*[_type == "provider" && 
    geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng(${lat}, ${lng})) < ${distance} && 
    "${serviceTypeSlug}" in (serviceTypes[]->slug.current)]`;

  const providers: GROQResponse[] = await client.fetch(query);

  return Response.json(providers);
}
