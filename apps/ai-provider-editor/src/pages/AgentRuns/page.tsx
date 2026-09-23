import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AgentRunsTable } from "./AgentRunsTable";
import { AGENT_JOBS_QUERY_KEY, agentJobsQuery, deleteAgentJob } from "../../queries";
import type { AgentJob } from "./types";

// A stable empty array, so the table isn't handed a new `data` reference on
// every render before the query resolves.
const NO_JOBS: AgentJob[] = [];

export function AgentRunsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isPending, error } = useQuery(agentJobsQuery());

  const deleteJob = useMutation({
    mutationFn: deleteAgentJob,
    // Refetch rather than splicing the row out locally: a delete can also cancel
    // a run in flight, so the rest of the list may have moved on too.
    onSuccess: () => queryClient.invalidateQueries({ queryKey: AGENT_JOBS_QUERY_KEY }),
  });

  // `mutateAsync` is stable across renders; wrapping it keeps the table's
  // columns from being rebuilt every time this page re-renders.
  const { mutateAsync: deleteJobById } = deleteJob;
  const onDelete = useCallback((job: AgentJob) => deleteJobById(job.jobId), [deleteJobById]);
  const onSelect = useCallback((job: AgentJob) => navigate(`/job/${job.jobId}`), [navigate]);

  return (
    <main className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-5xl flex-col space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Agent Runs</h1>
          <p className="text-slate-600">Every job the provider agent has run.</p>
        </div>

        {deleteJob.isError && <p className="text-error-600 text-sm">{(deleteJob.error as Error).message}</p>}

        <AgentRunsTable
          data={data ?? NO_JOBS}
          isLoading={isPending}
          error={error?.message}
          onSelect={onSelect}
          onDelete={onDelete}
        />
      </div>
    </main>
  );
}
