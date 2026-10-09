import { SignJWT, jwtVerify, errors } from "jose";
import type { AgentJobUser } from "@in-need-of-time/agent-core";
import { API_SESSION_SECRET } from "../env";

/**
 * How long one of this API's sessions lasts.
 *
 * Under Sanity's 12-hour token refresh, so a session never outlives the
 * credential it was minted from. The client re-exchanges on a 401.
 */
const SESSION_LIFETIME_SECONDS = 8 * 60 * 60;

const ISSUER = "in-need-of-time/api";
const AUDIENCE = "in-need-of-time/provider-agent";

const secret = new TextEncoder().encode(API_SESSION_SECRET);

/**
 * Mints a session for an already-verified user.
 *
 * The Sanity token is exchanged for this exactly once, at `POST /auth/session`.
 * Everything afterwards — HTTP and websocket alike — carries this instead, so
 * a global Sanity credential isn't on every request, in every access log, for
 * the life of the session.
 */
export async function createSession(user: AgentJobUser): Promise<{ token: string; expiresAt: Date }> {
  const issuedAt = Math.floor(Date.now() / 1000);
  const expiresAt = issuedAt + SESSION_LIFETIME_SECONDS;

  const token = await new SignJWT({ name: user.name, profileImage: user.profileImage })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(user.id)
    .setIssuer(ISSUER)
    .setAudience(AUDIENCE)
    .setIssuedAt(issuedAt)
    .setExpirationTime(expiresAt)
    .sign(secret);

  return { token, expiresAt: new Date(expiresAt * 1000) };
}

/** The user a session token stands for, or null if it's invalid, expired, or not ours. */
export async function readSession(token: string): Promise<AgentJobUser | null> {
  try {
    const { payload } = await jwtVerify(token, secret, { issuer: ISSUER, audience: AUDIENCE });

    if (!payload.sub) return null;

    return {
      id: payload.sub,
      name: typeof payload.name === "string" ? payload.name : undefined,
      profileImage: typeof payload.profileImage === "string" ? payload.profileImage : undefined,
    };
  } catch (error) {
    // An expired or tampered token is a routine 401, not a server fault. Any
    // other failure is a real bug and shouldn't be swallowed as "unauthorized".
    if (error instanceof errors.JOSEError) return null;
    throw error;
  }
}

/** Pulls a bearer token out of an `Authorization` header, or null if there isn't one. */
export function readBearerToken(header: string | undefined): string | null {
  if (!header) return null;

  const [scheme, token] = header.split(" ");

  return scheme?.toLowerCase() === "bearer" && token ? token : null;
}
