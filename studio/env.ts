export const SANITY_STUDIO_API_VERSION = process.env.SANITY_STUDIO_API_VERSION || "2024-03-09";

export const SANITY_STUDIO_DATASET = assertValue(
  process.env.SANITY_STUDIO_DATASET,
  "Missing environment variable: SANITY_STUDIO_DATASET",
);

export const SANITY_STUDIO_PROJECT_ID = assertValue(
  process.env.SANITY_STUDIO_PROJECT_ID,
  "Missing environment variable: SANITY_STUDIO_PROJECT_ID",
);

export const SANITY_STUDIO_GOOGLE_API_KEY = assertValue(
  process.env.SANITY_STUDIO_GOOGLE_API_KEY,
  "Missing environment variable: SANITY_STUDIO_GOOGLE_API_KEY",
);

export const SANITY_STUDIO_GOOGLE_MAPS_ID = assertValue(
  process.env.SANITY_STUDIO_GOOGLE_MAPS_ID,
  "Missing environment variable: SANITY_STUDIO_GOOGLE_MAPS_ID",
);

// Where the AI Provider Editor app is served. Optional — the Studio leaves out its
// navbar link when unset. Copy the deployed app's URL from the Sanity Dashboard.
export const SANITY_STUDIO_AI_PROVIDER_EDITOR_URL = process.env.SANITY_STUDIO_AI_PROVIDER_EDITOR_URL || undefined;

export const useCdn = false;

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
