import { useEffect, useRef, useState } from "react";
import type { AgentEvent } from "@in-need-of-time/types/agentEvents";

const WS_URL = `ws://localhost:4011/provider-agent/ws`;

export function useHarnessSocket(jobId?: string) {
  const [events, setEvents] = useState<AgentEvent[]>([]);
  const [connected, setConnected] = useState(false);
  const socketRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (!jobId) return;

    const socket = new WebSocket(`${WS_URL}?jobId=${jobId}`);
    socketRef.current = socket;

    socket.onopen = () => setConnected(true);
    socket.onclose = () => setConnected(false);
    socket.onmessage = (e) => {
      const event = JSON.parse(e.data) as AgentEvent;
      setEvents((prev) => [...prev, event]);
    };

    return () => socket.close();
  }, [jobId]);

  // It might be worth adding a send function here to communicate back to the websocket
  // but for now it's only a one way communication.
  return { events, connected };
}
