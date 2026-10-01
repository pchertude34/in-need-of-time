import { Router } from "express";
import { SanityAuthError, verifyProjectMember } from "../auth/sanityAuth";
import { createSession, readBearerToken, readSession } from "../auth/session";

export const authRouter = Router();

// POST /auth/session — trade a Sanity token for one of this API's sessions.
//
// The only route that ever sees a Sanity token. It's read from the
// `Authorization` header, checked against the project, and dropped: never
// stored, never logged, never echoed back. An App SDK token is global — it
// reaches every project and organization its owner can — so the less of its
// life this API is involved in, the better.
authRouter.post("/session", async (req, res, next) => {
  const sanityToken = readBearerToken(req.header("authorization"));

  if (!sanityToken) {
    res.status(401).json({ error: "Missing Sanity token" });
    return;
  }

  try {
    const user = await verifyProjectMember(sanityToken);

    if (!user) {
      res.status(403).json({ error: "Not a member of this Sanity project" });
      return;
    }

    const { token, expiresAt } = await createSession(user);

    res.status(201).json({ token, expiresAt: expiresAt.toISOString(), user });
  } catch (error) {
    // Sanity being unreachable is an upstream failure, not the caller's fault —
    // a 502 tells the client to retry rather than to re-authenticate.
    if (error instanceof SanityAuthError) {
      res.status(502).json({ error: "Could not verify the Sanity session" });
      return;
    }

    next(error);
  }
});

// GET /auth/session — whether the caller's session is still good, and who it's
// for. Lets the client decide whether to re-exchange before firing a request
// it would rather not have fail.
authRouter.get("/session", async (req, res, next) => {
  const token = readBearerToken(req.header("authorization"));

  if (!token) {
    res.status(401).json({ error: "Missing session token" });
    return;
  }

  try {
    const user = await readSession(token);

    if (!user) {
      res.status(401).json({ error: "Invalid or expired session token" });
      return;
    }

    res.json({ user });
  } catch (error) {
    next(error);
  }
});
