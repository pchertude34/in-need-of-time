import { client } from "@/lib/sanity/client";
import { groq } from "next-sanity";

type GROQResponse = {
  services: {
    _id: string;
    title: string;
    address: string;
    location?: {
      lat: number;
      lng: number;
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
    geo::distance(location, geo::latLng($lat, $lng)) < $distance &&
    $serviceTypeSlug in (serviceTypes[].serviceType->slug.current)]`;

  const providers: GROQResponse[] = await client.fetch(query, {
    lat: Number(lat),
    lng: Number(lng),
    distance: Number(distance),
    serviceTypeSlug,
  });

  return Response.json(providers);
}
