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
  const day = new Date().getDay();
  return (day + 6) % 7;
}

export function formatPhoneNumberForHref(phoneNumber: string) {
  return `tel:+1${phoneNumber.replace(/\D/g, "")}`;
}

export function generateGoogleLink(placeId: string, placeName: string) {
  if (!placeId) {
    return "";
  }

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(placeName)}&query_place_id=${encodeURIComponent(placeId)}`;
}

export function generateGoogleNavigationLink(placeId: string, placeName: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(placeName)}&destination_place_id=${encodeURIComponent(placeId)}`;
}

type BuildPlaceAddressOptions = {
  includeStreetNumber?: boolean;
  includeRoute?: boolean;
  includeCity?: boolean;
  includeState?: boolean;
  includePostcode?: boolean;
};

type PlaceAddressComponent = {
  long_name: string;
  short_name: string;
  types: string[];
};

type PlaceAddressInput = {
  address_components?: PlaceAddressComponent[];
};

export function buildPlaceAddress(place: PlaceAddressInput, options: BuildPlaceAddressOptions = {}) {
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

  if (!place.address_components) {
    return "";
  }

  for (const component of place.address_components) {
    const componentType = component.types[0];

    switch (componentType) {
      case "street_number":
        if (includeStreetNumber) {
          address1 = `${component.long_name} ${address1}`;
        }
        break;
      case "route":
        if (includeRoute) {
          address1 += component.short_name;
        }
        break;
      case "postal_code":
        if (includePostcode) {
          postcode = `${component.long_name}${postcode}`;
        }
        break;
      case "postal_code_suffix":
        if (includePostcode) {
          postcode = `${postcode}-${component.long_name}`;
        }
        break;
      case "locality":
        if (includeCity) {
          city = component.long_name;
        }
        break;
      case "administrative_area_level_1":
        if (includeState) {
          state = component.short_name;
        }
        break;
      default:
        break;
    }
  }

  return `${address1}, ${city}, ${state} ${postcode}`;
}
