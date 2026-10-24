import React, { useCallback, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { useSession } from "../../hooks/useSession";
import { useHarnessSocket } from "../../hooks/useHarnessSocket";
import { Badge } from "@in-need-of-time/ui";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { EventType, type AgentEvent } from "@in-need-of-time/types/agentEvents";
import { ActivityStepper } from "../../components/ActivityStepper/ActivityStepper";
import { ProviderForm } from "../../components/ProviderForm/ProviderForm";
import { buildActivitySteps, buildProviderFormValues, findWorkflowOutput, isAgentRunning } from "./utils";
import { useSaveProvider } from "../../hooks/useSaveProvider";
import { AGENT_JOBS_QUERY_KEY, deleteAgentJob } from "../../queries";
import type { ProviderFormValues } from "../../types";
import type { DuplicateProviderMatch } from "@in-need-of-time/utils";

// What the provider agent is submitted with — the payload `workflow.started`
// carries on its (deliberately untyped) `input`.
type ProviderJobInput = {
  message?: string;
  location?: string;
};

export function JobDetailsPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { sessionToken } = useSession();
  const { events, connected } = useHarnessSocket(jobId);

  // The event stream is the only thing this page reads, so the job's original
  // input comes from the workflow.started event replayed on every connection.
  const startedEvent = events.find(
    (event): event is Extract<AgentEvent, { type: EventType.WorkflowStarted }> =>
      event.type === EventType.WorkflowStarted,
  );
  const { message, location } = (startedEvent?.input ?? {}) as ProviderJobInput;
  const activitySteps = useMemo(() => buildActivitySteps(events), [events]);
  const agentRunning = isAgentRunning(events);

  // Keyed on the output string rather than the events array: reconnecting
  // replays history and grows `events`, and rebuilding these values would reset
  // the form out from under any edits already made to it.
  const workflowOutput = findWorkflowOutput(events);
  const provider = useMemo(() => buildProviderFormValues(workflowOutput), [workflowOutput]);

  const { saveProvider } = useSaveProvider();
  const [isSaving, setIsSaving] = useState(false);

  const submitForm = useCallback(
    async (values: ProviderFormValues, overrideMatch?: DuplicateProviderMatch) => {
      if (!jobId) {
        return;
      }

      setIsSaving(true);
      const result = await saveProvider({ values, overrideDocumentId: overrideMatch?._id, saveAs: "published" });
      setIsSaving(false);

      if (!result.success) {
        toast.error(result.message);
        return;
      }

      toast.success(
        overrideMatch
          ? `Overrode and published "${overrideMatch.title}". The updated listing is now live.`
          : "Published the provider. The new listing is now live.",
      );

      try {
        await deleteAgentJob(sessionToken, jobId);
      } catch {
        toast.error("Failed to delete the agent job. Try deleting it manually.");
      }

      queryClient.invalidateQueries({ queryKey: AGENT_JOBS_QUERY_KEY });
      navigate("/runs");
    },
    [saveProvider, jobId, queryClient, navigate, sessionToken],
  );

  return (
    <main className="">
      <div className="relative shrink-0 border-b border-purple-200 bg-purple-50 px-4 py-4">
        <div className="flex flex-wrap items-center gap-3">
          {message ? (
            <Badge variant="light" size="lg">
              <MagnifyingGlassIcon className="mr-1 h-3.5 w-3.5" />
              {message}
            </Badge>
          ) : (
            <p className="text-sm text-purple-900">Waiting for the job to start…</p>
          )}
          {location && (
            <Badge variant="light" size="lg">
              <MapPinIcon className="mr-1 h-3.5 w-3.5" />
              {location}
            </Badge>
          )}
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col xl:flex-row">
        <div className="px-2 py-6 sm:px-6 lg:pl-8 xl:min-w-0 xl:basis-2/3 xl:pl-6">
          <ProviderForm provider={provider} disabled={agentRunning} isSaving={isSaving} onSubmit={submitForm} />
        </div>
        <div className="order-first shrink-0 border-b border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 lg:pl-8 xl:order-none xl:basis-1/3 xl:border-b-0 xl:border-l xl:pl-6 dark:border-white/10">
          <ActivityStepper steps={activitySteps} />
        </div>
      </div>
    </main>
  );
}
