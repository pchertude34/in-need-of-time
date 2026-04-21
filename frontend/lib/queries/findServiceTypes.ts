type FindServiceTypesArgs = {
  latitude?: number;
  longitude?: number;
  distance?: number;
};

type FindServiceTypesResponse = {
  name: string;
  slug: string;
  description: string;
  count: number;
};

export function getServiceTypes(args: FindServiceTypesArgs): Promise<FindServiceTypesResponse[]> {
  const { latitude, longitude, distance } = args;

  return fetch(`/api/serviceTypes/find?lat=${latitude}&lng=${longitude}&distance=${distance}`, {
    cache: "no-cache",
  }).then((res) => res.json());
}
