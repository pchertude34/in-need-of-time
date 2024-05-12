type FindProvidersArgs = {
  latitude: number;
  longitude: number;
  distance: number;
  serviceTypeSlug: string;
};

type FindProvidersResponse = {
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
};

export function findProviders(args: FindProvidersArgs): Promise<FindProvidersResponse[]> {
  const { latitude, longitude, distance, serviceTypeSlug } = args;

  return fetch(
    `/api/providers/find?lat=${latitude}&lng=${longitude}&distance=${distance}&serviceTypeSlug=${serviceTypeSlug}`,
    {
      cache: "no-cache",
    },
  ).then((res) => res.json());
}
