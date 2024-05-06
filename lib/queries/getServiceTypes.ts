type GetServiceTypesArgs = {
  latitude?: number;
  longitude?: number;
  distance?: number;
};

type GetServiceTypesResponse = {
  name: string;
  description: string;
  count: number;
  _id: string;
};

export function getServiceTypes(
  args: GetServiceTypesArgs,
): Promise<GetServiceTypesResponse[]> {
  const { latitude, longitude, distance } = args;

  return fetch(
    `/api/serviceTypes/find?lat=${latitude}&lng=${longitude}&distance=${distance}`,
    {
      cache: "no-cache",
    },
  ).then((res) => res.json());
}
