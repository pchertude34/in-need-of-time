export const SANITY_API_VERSION = process.env.SANITY_API_VERSION || "2024-03-09";

export const SANITY_DATASET = assertValue(process.env.SANITY_DATASET, "Missing environment variable: SANITY_DATASET");

export const SANITY_PROJECT_ID = assertValue(
  process.env.SANITY_PROJECT_ID,
  "Missing environment variable: SANITY_PROJECT_ID",
);

export const GOOGLE_API_KEY = assertValue(process.env.GOOGLE_API_KEY, "Missing environment variable: GOOGLE_API_KEY");

export const GOOGLE_MAPS_ID = assertValue(process.env.GOOGLE_MAPS_ID, "Missing environment variable: GOOGLE_MAPS_ID");

export const LOCAL_API_KEY = assertValue(process.env.LOCAL_API_KEY, "Missing environment variable: LOCAL_API_KEY");

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
