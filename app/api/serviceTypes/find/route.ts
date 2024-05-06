import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type GROQResponse = {
  services: {
    _id: string;
    name: string;
    description: string;
    count: number;
  }[];
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const distance = searchParams.get("distance");

  const query = groq`*[ _type == "provider" && defined(serviceTypes) &&
    geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng(${lat}, ${lng})) < ${distance}]{
    'services': serviceTypes[]->{name, description, _id}  
}`;

  const providerServiceTypes: GROQResponse[] = await client.fetch(query);

  const serviceTypes = providerServiceTypes.reduce((acc: any, curr: any) => {
    curr.services.forEach((service: any) => {
      if (!acc[service._id]) {
        acc[service._id] = { ...service, count: 1 };
      } else {
        acc[service._id].count += 1;
      }
    });

    return acc;
  }, {});

  return Response.json(Object.values(serviceTypes));
}
