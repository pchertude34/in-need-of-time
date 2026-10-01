import type { RequestHandler } from "express";
import type { AgentJobUser } from "@in-need-of-time/agent-core";
import { readBearerToken, readSession } from "../auth/session";

// Lets routes read `req.user` without casting. Set by `requireSession`, so it's
// only ever populated on a route that ran the guard.
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Express {
    interface Request {
      user?: AgentJobUser;
    }
  }
}

/**
 * Rejects anything without a valid session from `POST /auth/session`.
 *
 * Every route behind this is equally available to every authenticated user —
 * the only question is whether the caller is a member of the Sanity project.
 * That's decided once, at the exchange; there's deliberately no per-route
 * authorization here.
 */
export const requireSession: RequestHandler = async (req, res, next) => {
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

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};
