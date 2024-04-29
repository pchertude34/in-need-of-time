import { client } from "@/sanity/lib/client";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");
  const distance = searchParams.get("distance");

  const query = `*[ _type == "provider" && defined(serviceTypes) &&
    geo::distance(geo::latLng(place.location.lat, place.location.lng), geo::latLng(${lat}, ${lng})) < 100000]{
    'services': serviceTypes[]->{name, _id}  
}`;

  console.log("query", query);

  const providerServiceTypes = await client.fetch(query);

  console.log(providerServiceTypes);

  return Response.json({ message: "Hello world" });
}
