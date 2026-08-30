import React from "react";
import { useParams } from "react-router-dom";
import { useHarnessSocket } from "../../hooks/useHarnessSocket";

export function JobDetailsPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const { events, connected } = useHarnessSocket(jobId);

  return (
    <div>
      Job Details: {jobId}
      <div>Connected: {connected ? "Yes" : "No"}</div>
      <div>
        Events:
        <ul>
          {events.map((event, index) => (
            <li key={index}>{JSON.stringify(event)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
