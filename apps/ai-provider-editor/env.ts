export const SANITY_APP_API_VERSION = process.env.SANITY_APP_API_VERSION || "2024-03-09";

export const SANITY_APP_DATASET = assertValue(
  process.env.SANITY_APP_DATASET,
  "Missing environment variable: SANITY_APP_DATASET",
);

export const SANITY_APP_PROJECT_ID = assertValue(
  process.env.SANITY_APP_PROJECT_ID,
  "Missing environment variable: SANITY_APP_PROJECT_ID",
);

export const SANITY_APP_ORGANIZATION_ID = assertValue(
  process.env.SANITY_APP_ORGANIZATION_ID,
  "Missing environment variable: SANITY_APP_ORGANIZATION_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
