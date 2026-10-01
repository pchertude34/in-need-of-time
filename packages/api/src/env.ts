/**
 * The Sanity project whose membership gates this API. A user's token is only
 * accepted if they hold `REQUIRED_PERMISSION` on *this* project — see
 * `auth/sanityAuth.ts` for why checking the project matters.
 */
export const SANITY_PROJECT_ID = assertValue(
  process.env.SANITY_PROJECT_ID,
  "Missing environment variable: SANITY_PROJECT_ID",
);

/** Signs the API's own session tokens. Server-side only — never sent to a client. */
export const API_SESSION_SECRET = assertValue(
  process.env.API_SESSION_SECRET,
  "Missing environment variable: API_SESSION_SECRET",
);

/**
 * Pinned Access API version. Sanity dates these, and the permission-check
 * endpoint doesn't exist before `v2025-07-11`, so this can't float.
 */
export const SANITY_ACCESS_API_VERSION = process.env.SANITY_ACCESS_API_VERSION || "v2026-07-11";

/** Version for the plain user-identity call, which is far older and stable. */
export const SANITY_API_VERSION = process.env.SANITY_API_VERSION || "v2021-06-07";

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
