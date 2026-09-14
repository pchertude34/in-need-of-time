import React, { useCallback, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useHarnessSocket } from "../../hooks/useHarnessSocket";
import { Badge } from "@in-need-of-time/ui";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { EventType, type AgentEvent } from "@in-need-of-time/types/agentEvents";
import { ActivityStepper } from "../../components/ActivityStepper/ActivityStepper";
import { ProviderForm } from "../../components/ProviderForm/ProviderForm";
import { buildActivitySteps, buildProviderFormValues, findWorkflowOutput, isAgentRunning } from "./utils";
import { useSaveProviderDraft } from "../../hooks/useSaveProviderDraft";
import { AGENT_JOBS_QUERY_KEY, deleteAgentJob } from "../../queries";
import type { ProviderFormValues } from "../../types";

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

  const { saveDraft, state: saveState } = useSaveProviderDraft();

  const submitForm = useCallback(
    async (values: ProviderFormValues) => {
      const saved = await saveDraft(values);

      if (!saved || !jobId) {
        return;
      }

      // Once the provider is saved as a draft, this job has done its job —
      // remove it so it doesn't linger in the runs list. A failed cleanup here
      // isn't worth surfacing: the draft is already safely saved, and the job
      // can still be deleted manually from the Agent Runs page.
      try {
        await deleteAgentJob(jobId);
      } catch {
        // ignore
      }

      queryClient.invalidateQueries({ queryKey: AGENT_JOBS_QUERY_KEY });
      navigate("/runs");
    },
    [saveDraft, jobId, queryClient, navigate],
  );

  return (
    <div className="flex min-h-full flex-col">
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
      <div className="mx-auto flex w-full">
        <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
          {saveState.status === "saved" && (
            <p className="mb-4 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Saved as a draft. Review it in Sanity Studio, then publish it from there.
            </p>
          )}
          {saveState.status === "error" && (
            <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {saveState.message}
            </p>
          )}
          <ProviderForm
            provider={provider}
            disabled={agentRunning}
            isSaving={saveState.status === "saving"}
            onSubmit={submitForm}
          />
        </div>
        <div className="min-w-[400px] shrink-0 border-b border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:border-b-0 xl:border-l xl:pl-6 dark:border-white/10">
          <ActivityStepper steps={activitySteps} />
        </div>
      </div>
    </div>
  );
}
