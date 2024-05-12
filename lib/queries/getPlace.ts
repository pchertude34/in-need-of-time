import { buildPlaceAddress } from "../utils";

type GetPlaceArgs = {
  placeId?: string;
  map?: google.maps.Map;
};

type GetPlaceResponse = {
  name: string;
  address: string;
  formatted_phone_number?: string;
  website?: string;
  url?: string;
  geometry?: google.maps.places.PlaceGeometry;
  opening_hours?: google.maps.places.OpeningHours;
  business_status?: string;
  address_components?: google.maps.GeocoderAddressComponent[];
};

/**
 * Query function to fetch google places data given a placeId. This function can
 * be used with react-query to help cache place data to avoid unnecessary api calls.
 * @param placeId The id of the place to query for in google places api
 * @param map The google map object to use for the query
 * @returns A promise that resolves with place details from google places api, or
 * rejects with an error status.
 */
export async function getPlace({ placeId, map }: GetPlaceArgs): Promise<GetPlaceResponse> {
  if (!placeId || !map) {
    return Promise.reject("Missing placeId or map");
  }

  const request = {
    placeId,
    componentRestrictions: { country: ["us"] },
    fields: [
      "name",
      "formatted_phone_number",
      "website",
      "address_components",
      "url",
      "geometry",
      "opening_hours",
      "business_status",
      "utc_offset_minutes",
    ],
  };

  const placeService = new google.maps.places.PlacesService(map);

  return new Promise((resolve, reject) => {
    placeService.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        // Build out a human readable address for the place
        const address = buildPlaceAddress(place);
        resolve({ ...place, address });
      } else {
        reject(status);
      }
    });
  });
}
