import React from "react";
import { useParams } from "react-router-dom";

export function JobDetailsPage() {
  const { jobId } = useParams<{ jobId: string }>();

  return <div>Job Details: {jobId}</div>;
}
