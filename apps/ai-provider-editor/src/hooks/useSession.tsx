import React, { useContext, createContext, useState, useEffect } from "react";
import { useSanityInstance, getTokenState } from "@sanity/sdk-react";
import { useQuery, queryOptions } from "@tanstack/react-query";
import { SANITY_APP_PROVIDER_AGENT_API_URL } from "../../env";

/**
 * Re-exchange this far before a session actually expires, so a request that's
 * in flight as the clock runs out doesn't fail on a technicality.
 */
const EXPIRY_GRACE_MS = 60 * 1000;

type SessionToken = {
  token: string;
  expiresAt: number;
};

/**
 * Fetch a session token from our API - The API will check if the sanity token is valid and has
 * the correct permissions to use the sanity app. If the permissions are correct, we return
 * A custom JWT to auth with our backend. This allows us to securely call the agent api routes.
 */
async function fetchSessionToken(sanityToken: string | null): Promise<SessionToken> {
  if (!sanityToken) {
    throw new Error("Sanity token is required to fetch a session token");
  }

  const response = await fetch(`${SANITY_APP_PROVIDER_AGENT_API_URL}/auth/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${sanityToken}`,
    },
  });

  if (response.status === 403) {
    throw new Error("Your Sanity account doesn't have access to this project");
  }

  if (!response.ok) {
    throw new Error(`Could not start a session: request failed with ${response.status}`);
  }

  const { token, expiresAt } = (await response.json()) as SessionToken;

  return { token, expiresAt: new Date(expiresAt).getTime() };
}

type SessionContextType = {
  sessionToken?: string;
  isLoading: boolean;
  error: unknown;
};

const SessionContext = createContext<SessionContextType | null>(null);

type SessionProviderProps = {
  children: React.ReactNode;
};

/**
 * Manage an API session for the Sanity app. We choose to manage the token in memory
 * here since the real sanity app is iframed into sanity studio at a different url,
 * making a cookie storage solution less secure.
 */
export function SessionProvider(props: SessionProviderProps) {
  const instance = useSanityInstance();
  const sanityToken = getTokenState(instance).getCurrent();

  const { data, isLoading, error } = useQuery(
    queryOptions({
      queryKey: ["sessionToken"],
      queryFn: () => fetchSessionToken(sanityToken),
      staleTime: (query) =>
        query.state.data?.expiresAt ? query.state.data.expiresAt - Date.now() - EXPIRY_GRACE_MS : 0,
      refetchInterval: (query) =>
        query.state.data?.expiresAt ? query.state.data.expiresAt - Date.now() - EXPIRY_GRACE_MS : 0,
    }),
  );

  const { token } = data ?? {};

  return (
    <SessionContext.Provider value={{ sessionToken: token, isLoading, error }}>
      {props.children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const session = useContext(SessionContext);
  if (!session) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return session;
}
