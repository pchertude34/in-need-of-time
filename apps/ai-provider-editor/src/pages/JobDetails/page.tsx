import React from "react";
import { useParams } from "react-router-dom";
import { useHarnessSocket } from "../../hooks/useHarnessSocket";
import { Badge } from "@in-need-of-time/ui";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";
import { ActivityStep } from "../../components/ActivityStepper/ActivityStep";
import { ProviderForm } from "../../components/ProviderForm/ProviderForm";

export function JobDetailsPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const { events, connected } = useHarnessSocket(jobId);

  return (
    <div className="flex min-h-full flex-col">
      <div className="relative shrink-0 border-b border-purple-200 bg-purple-50 px-2 py-4">
        <div className="flex">
          <Badge>
            <MagnifyingGlassCircleIcon />
            Oregon
          </Badge>
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
