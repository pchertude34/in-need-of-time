import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const METERS_PER_MILE = 1609.34;

export function convertMetersToMiles(meters: number) {
  const miles = meters / METERS_PER_MILE;
  return Number(miles.toFixed(2));
}

export function convertMilesToMeters(miles: number | string) {
  const meters = Number(miles) * METERS_PER_MILE;
  return Number(meters.toFixed(2));
}

export function getCurrentDay() {
  let day = new Date().getDay();
  return (day + 6) % 7;
}

/**
 * Helper function to build out a link for a google place.
 * @param {string} placeId The id of a google place to generate a google link for.
 * @param {string} placeName The name of the google place to generate a google link for.
 * @returns {string} A url that links the the place on google.
 */
export function generateGoogleLink(placeId: string, placeName: string) {
  let googleLink = "";

  if (placeId) {
    googleLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      placeName,
    )}&query_place_id=${encodeURIComponent(placeId)}`;
  }

  return googleLink;
}

/**
 *
 * @param {string} placeId The id of a google place to generate a nav link for.
 * @param {string} placeName The name of the google place to generate a nav link for.
 * @returns {string} A url that links to a destination on google maps
 */
export function generateGoogleNavigationLink(placeId: string, placeName: string) {
  let navLink;

  navLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    placeName,
  )}&destination_place_id=${encodeURIComponent(placeId)}`;

  return navLink;
}

type BuildPlaceAddressOptionsType = {
  includeStreetNumber?: boolean;
  includeRoute?: boolean;
  includeCity?: boolean;
  includeState?: boolean;
  includePostcode?: boolean;
};

/**
 * Helper function to build out the address of a place from its address_components
 */
export function buildPlaceAddress(place: google.maps.places.PlaceResult, options: BuildPlaceAddressOptionsType = {}) {
  const {
    includeStreetNumber = true,
    includeRoute = true,
    includeCity = true,
    includeState = true,
    includePostcode = true,
  } = options;

  let address1 = "";
  let city = "";
  let state = "";
  let postcode = "";

  // Exit the function early if the place doesn't have an address
  if (!place.address_components) return "";

  for (const component of place.address_components) {
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number":
        if (includeStreetNumber) address1 = `${component.long_name} ${address1}`;
        break;
      case "route":
        if (includeRoute) address1 += component.short_name;
        break;
      case "postal_code":
        if (includePostcode) postcode = `${component.long_name}${postcode}`;
        break;
      case "postal_code_suffix":
        if (includePostcode) postcode = `${postcode}-${component.long_name}`;
        break;
      case "locality":
        if (includeCity) city = component.long_name;
        break;
      case "administrative_area_level_1":
        if (includeState) state = component.short_name;
    }
  }

  const address = `${address1}, ${city}, ${state} ${postcode}`;

  return address;
}
