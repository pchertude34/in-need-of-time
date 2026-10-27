import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useSession } from "../../hooks/useSession";
import { AgentRunsTable } from "./AgentRunsTable";
import { AGENT_JOBS_QUERY_KEY, fetchAgentJobs, deleteAgentJob, bulkDeleteAgentJobs } from "../../queries";
import type { AgentJob } from "./types";

// A stable empty array, so the table isn't handed a new `data` reference on
// every render before the query resolves.
const NO_JOBS: AgentJob[] = [];

export function AgentRunsPage() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { sessionToken } = useSession();

  const { data, isPending, error } = useQuery({
    queryKey: AGENT_JOBS_QUERY_KEY,
    queryFn: () => fetchAgentJobs(sessionToken),
    enabled: !!sessionToken,
  });

  const deleteJob = useMutation({
    mutationFn: (jobId: string) => deleteAgentJob(sessionToken, jobId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: AGENT_JOBS_QUERY_KEY }),
  });

  const bulkDeleteJobs = useMutation({
    mutationFn: (jobIds: string[]) => bulkDeleteAgentJobs(sessionToken, jobIds),
    onSuccess: ({ deleted, notFound }) => {
      // Runs already gone were removed elsewhere — worth a mention, not an error.
      const alreadyRemoved = notFound.length > 0 ? ` ${notFound.length} had already been removed.` : "";

      toast.success(`Deleted ${deleted.length} ${deleted.length === 1 ? "run" : "runs"}.${alreadyRemoved}`);

      return queryClient.invalidateQueries({ queryKey: AGENT_JOBS_QUERY_KEY });
    },
    // Partway through a multi-batch delete, earlier batches are already gone.
    onError: () => queryClient.invalidateQueries({ queryKey: AGENT_JOBS_QUERY_KEY }),
  });

  const onDelete = useCallback((jobId: string) => deleteJob.mutateAsync(jobId), [deleteJob.mutateAsync]);
  const onDeleteBulk = useCallback(
    (jobIds: string[]) => bulkDeleteJobs.mutateAsync(jobIds),
    [bulkDeleteJobs.mutateAsync],
  );
  const onSelect = useCallback((job: AgentJob) => navigate(`/job/${job.jobId}`), [navigate]);

  return (
    <main className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex w-full flex-col space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900">Agent Runs</h1>
          <p className="text-slate-600">Every job the provider agent has run.</p>
        </div>

        {deleteJob.isError && <p className="text-error-600 text-sm">{(deleteJob.error as Error).message}</p>}
        {bulkDeleteJobs.isError && <p className="text-error-600 text-sm">{bulkDeleteJobs.error.message}</p>}

        <AgentRunsTable
          data={data ?? NO_JOBS}
          isLoading={isPending}
          error={error?.message}
          onSelect={onSelect}
          onDelete={onDelete}
          onDeleteBulk={onDeleteBulk}
        />
      </div>
    </main>
  );
}
