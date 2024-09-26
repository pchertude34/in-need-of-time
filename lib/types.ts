import type { PortableTextBlock } from "@portabletext/types";

export type Location = {
  lat: number;
  lng: number;
};

////////////////////////////////////////
// GROQ responses
////////////////////////////////////////
export type ServiceType = {
  name: string;
  slug: string;
  description: string;
};

export type PublicContact = {
  phone: string;
  website: string;
};

export type Provider = {
  _id: string;
  title: string;
  place: {
    address: string;
    placeId: string;
    location: Location;
  };
  description: PortableTextBlock[];
  publicContact?: PublicContact;
  serviceTypes: ServiceType[];
};
