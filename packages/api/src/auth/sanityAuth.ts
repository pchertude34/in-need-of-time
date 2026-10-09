import type { AgentJobUser } from "@in-need-of-time/agent-core";
import { SANITY_ACCESS_API_VERSION, SANITY_API_VERSION, SANITY_PROJECT_ID } from "../env";

/**
 * The permission a user must hold on `SANITY_PROJECT_ID` to use this API.
 *
 * "Can read this project" — in practice, "is a member of it", which is the
 * question this API actually needs answered. Every route is open to every
 * authenticated member, so the gate is binary and lives here alone.
 *
 * It is deliberately not a document permission. The Access API's check endpoint
 * reports `false` for every `sanity.document.filter.*` action — `read`,
 * `update`, `create`, `manage`, `publish`, `delete` — even for a project
 * Administrator, while every `sanity.project.*` action reports `true` for the
 * same token. Document-level grants show up in the permission *listing* (as
 * `sanity-all-documents`) but aren't evaluated by `/check`, so gating on one
 * rejects everybody, including admins.
 *
 * The cost of using a project permission is that this can't tell a Viewer from
 * an Editor — read-only accounts get in too. Narrowing that would mean finding a
 * `sanity.project.*` action a Viewer lacks, which needs testing against a real
 * Viewer account rather than guessing.
 */
export const REQUIRED_PERMISSION = "sanity.project.read";

const ACCESS_API_ORIGIN = "https://api.sanity.io";

/**
 * The user behind a Sanity token, or null if that token doesn't belong to a
 * member of this project.
 *
 * Two calls, because they answer different questions and Sanity keeps them
 * apart:
 *
 *   1. *May they?* — the Access API, scoped to this project. This is the real
 *      gate. An App SDK token is a **global** user token ("not tied to a
 *      specific project, but instead to a Sanity user"), so merely proving it's
 *      a valid Sanity token proves nothing: anyone can make a free account in a
 *      minute. Membership has to be checked explicitly, against our project id.
 *   2. *Who are they?* — `/users/me`, for the profile denormalized onto a job
 *      row. Identity only; it carries no authorization weight.
 *
 * The token is used here and discarded. It is never stored or logged: being
 * global, it grants access to every organization and project that user can
 * reach, none of which is this API's business.
 */
export async function verifyProjectMember(token: string): Promise<AgentJobUser | null> {
  const permitted = await hasRequiredPermission(token);
  if (!permitted) return null;

  return fetchCurrentUser(token);
}

async function hasRequiredPermission(token: string): Promise<boolean> {
  const url = new URL(
    `/${SANITY_ACCESS_API_VERSION}/access/project/${SANITY_PROJECT_ID}/user-permissions/me/check`,
    ACCESS_API_ORIGIN,
  );
  url.searchParams.set("permissions", REQUIRED_PERMISSION);

  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });

  // 401 is the ordinary "not signed in / bad token" answer, and 403 the "not a
  // member" one. Neither is exceptional — both just mean no.
  if (response.status === 401 || response.status === 403) {
    // Logged because from the client's side this is indistinguishable from a
    // lesser role, and the two have very different fixes. Never logs the token.
    console.warn(
      `Access API refused the permission check with ${response.status}: ${(await response.text()).slice(0, 200)}`,
    );
    return false;
  }

  if (!response.ok) {
    throw new SanityAuthError(`Permission check failed with ${response.status}`);
  }

  const body = (await response.json()) as { data?: Record<string, boolean> };
  console.log(body.data);
  const granted = body.data?.[REQUIRED_PERMISSION] === true;

  if (!granted) {
    console.warn(
      `Denied: ${REQUIRED_PERMISSION} is not granted on project ${SANITY_PROJECT_ID}. ` +
        `Access API returned ${JSON.stringify(body.data ?? body)}`,
    );
  }

  return granted;
}

async function fetchCurrentUser(token: string): Promise<AgentJobUser | null> {
  const response = await fetch(`${ACCESS_API_ORIGIN}/${SANITY_API_VERSION}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (response.status === 401) return null;

  if (!response.ok) {
    throw new SanityAuthError(`Could not load the current user: request failed with ${response.status}`);
  }

  const user = (await response.json()) as { id?: string; name?: string; profileImage?: string };

  // A body without an id isn't a user — treat it as a failed lookup rather than
  // minting a session with an undefined subject.
  if (!user.id) return null;

  return { id: user.id, name: user.name, profileImage: user.profileImage };
}

/** An upstream Sanity failure — distinct from "this user isn't allowed", which is a null return. */
export class SanityAuthError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SanityAuthError";
  }
}
