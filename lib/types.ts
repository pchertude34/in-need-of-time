export type Location = {
  latitude: number;
  longitude: number;
};

////////////////////////////////////////
// GROQ responses
////////////////////////////////////////
export type ServiceType = {
  name: string;
  slug: string;
  description: string;
};

export type Provider = {
  _id: string;
  title: string;
  place?: {
    address: string;
    placeId: string;
    location: Location;
  };
  serviceTypes: ServiceType[];
  description?: any[];
};
