import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

type GROQResponse = {
  services: {
    _id: string;
    name: string;
    slug: {
      current: string;
    };
    description: string;
  }[];
};

export function queryAllServiceTypes(): Promise<GROQResponse> {
  const query = groq`*[_type == "serviceType"]{name, description, 'slug': slug.current}`;

  return client.fetch(query);
}
