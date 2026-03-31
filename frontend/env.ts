export const NEXT_PUBLIC_SANITY_API_VERSION = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-09";

export const NEXT_PUBLIC_SANITY_DATASET = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const NEXT_PUBLIC_SANITY_PROJECT_ID = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const NEXT_PUBLIC_GOOGLE_API_KEY = assertValue(
  process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  "Missing environment variable: NEXT_PUBLIC_GOOGLE_API_KEY",
);

export const NEXT_PUBLIC_GOOGLE_MAPS_ID = assertValue(
  process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
  "Missing environment variable: NEXT_PUBLIC_GOOGLE_MAPS_ID",
);

export const NEXT_PUBLIC_LOCAL_API_KEY = assertValue(
  process.env.NEXT_PUBLIC_LOCAL_API_KEY,
  "Missing environment variable: NEXT_PUBLIC_LOCAL_API_KEY",
);

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
