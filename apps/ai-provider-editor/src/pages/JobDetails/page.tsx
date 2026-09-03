import React from "react";
import { useParams } from "react-router-dom";
import { useHarnessSocket } from "../../hooks/useHarnessSocket";
import { Badge } from "@in-need-of-time/ui";
import { MagnifyingGlassIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { EventType, type AgentEvent } from "@in-need-of-time/types/agentEvents";
import { ActivityStep } from "../../components/ActivityStepper/ActivityStep";
import { ProviderForm } from "../../components/ProviderForm/ProviderForm";

// What the provider agent is submitted with — the payload `workflow.started`
// carries on its (deliberately untyped) `input`.
type ProviderJobInput = {
  message?: string;
  location?: string;
};

export function JobDetailsPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const { events, connected } = useHarnessSocket(jobId);

  // The event stream is the only thing this page reads, so the job's original
  // input comes from the workflow.started event replayed on every connection.
  const startedEvent = events.find(
    (event): event is Extract<AgentEvent, { type: EventType.WorkflowStarted }> =>
      event.type === EventType.WorkflowStarted,
  );
  const { message, location } = (startedEvent?.input ?? {}) as ProviderJobInput;

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
          <ProviderForm />
        </div>
        <div className="min-w-[400px] shrink-0 border-b border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:border-b-0 xl:border-l xl:pl-6 dark:border-white/10">
          <ActivityStep
            status="completed"
            title="Agent info"
            description="Details about the agent. Super long description to see what happens"
          />
          <ActivityStep
            status="completed"
            title="Agent info"
            description="Details about the agent. Super long description to see what happens"
          />
          <ActivityStep
            status="completed"
            title="Agent info"
            description="Details about the agent. Super long description to see what happens"
          />
          <ActivityStep
            status="completed"
            title="Agent info"
            description="Details about the agent. Super long description to see what happens"
          />
        </div>
      </div>
    </div>
  );
}
