import { useEffect, useRef, useState } from "react";
import type { AgentEvent } from "@in-need-of-time/types/agentEvents";
import { useSession } from "./useSession";
import { getSocketArgs } from "../queries";

export function useHarnessSocket(jobId?: string) {
  const { sessionToken } = useSession();
  const [events, setEvents] = useState<AgentEvent[]>([]);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    // Same gate the queries use: nothing to connect with until the session is
    // in hand, and this re-runs on its own once it is.
    if (!jobId || !sessionToken) return;

    const [url, protocols] = getSocketArgs(sessionToken, jobId);
    const socket = new WebSocket(url, protocols);
    socketRef.current = socket;

    socket.onopen = () => setConnected(true);
    socket.onclose = () => setConnected(false);
    socket.onmessage = (e) => {
      const event = JSON.parse(e.data) as AgentEvent;
      setEvents((prev) => [...prev, event]);
    };

    return () => {
      socket.close();
      socketRef.current = null;
    };
    // A refreshed session reconnects the socket. That's safe — the server
    // replays a job's whole timeline on connect — but it does mean `events`
    // would double up, which is why the reset below runs on the same keys.
  }, [jobId, sessionToken]);

  // Dropping the old events when the connection is replaced keeps the replay
  // from appending a second copy of the timeline.
  useEffect(() => {
    setEvents([]);
  }, [jobId, sessionToken]);

  // It might be worth adding a send function here to communicate back to the websocket
  // but for now it's only a one way communication.
  return { events, connected };
}
