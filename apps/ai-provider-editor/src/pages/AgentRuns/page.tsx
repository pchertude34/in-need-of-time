import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "@in-need-of-time/ui";
import { SANITY_APP_PROVIDER_AGENT_API_URL } from "../../../env";

type AgentJob = {
  jobId: string;
  timestamp: string;
  status: "PENDING" | "COMPLETED" | "FAILED";
};

export function AgentRunsPage() {
  const [jobs, setJobs] = useState<AgentJob[]>([]);

  useEffect(() => {
    fetch(`${SANITY_APP_PROVIDER_AGENT_API_URL}/provider-agent/jobs`)
      .then((response) => response.json())
      .then(setJobs);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex max-w-[720px] flex-col space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Agent Runs</h1>
          <p className="text-center text-slate-600">Every job the provider agent has run.</p>
        </div>
        <Card className="divide-y divide-slate-200 p-0">
          {jobs.length === 0 && <p className="p-6 text-center text-sm text-slate-500">No runs yet.</p>}
          {jobs.map((job) => (
            <Link
              key={job.jobId}
              to={`/job/${job.jobId}`}
              className="flex items-center justify-between p-4 hover:bg-slate-50"
            >
              <span className="font-mono text-sm text-slate-900">{job.jobId}</span>
              <span className="text-sm text-slate-500">{job.status}</span>
            </Link>
          ))}
        </Card>
      </div>
    </div>
  );
}
