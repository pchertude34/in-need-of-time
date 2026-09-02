import React from "react";
import { useParams } from "react-router-dom";
import { useHarnessSocket } from "../../hooks/useHarnessSocket";
import { Badge } from "@in-need-of-time/ui";
import { MagnifyingGlassCircleIcon } from "@heroicons/react/24/outline";

export function JobDetailsPage() {
  const { jobId } = useParams<{ jobId: string }>();
  const { events, connected } = useHarnessSocket(jobId);

  return (
    <div className="flex min-h-full flex-col">
      <div className="relative shrink-0 border-b border-purple-200 bg-purple-50 px-4 py-6">
        <div className="flex">
          <Badge>
            <MagnifyingGlassCircleIcon />
            Oregon
          </Badge>
        </div>
      </div>
      <div className="mx-auto w-full grow lg:flex">
        <div className="flex-1 xl:flex">
          <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">main</div>
          <div className="shrink-0 border-b border-slate-200 bg-slate-50 px-4 py-6 sm:px-6 lg:pl-8 xl:w-64 xl:border-b-0 xl:border-l xl:pl-6 dark:border-white/10">
            Agent info
          </div>
        </div>
      </div>
    </div>
  );
}
