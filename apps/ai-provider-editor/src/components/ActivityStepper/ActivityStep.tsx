import React from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@in-need-of-time/utils";

export type ActivityStatus = "in-progress" | "completed" | "failed";

type ActivityStepProps = {
  status: ActivityStatus;
  title: string;
  description: string;
  isLast?: boolean;
};

export function ActivityStep(props: ActivityStepProps) {
  const { status, title, description, isLast = false } = props;

  return (
    <div className="mb-2 flex gap-4">
      <div className="flex flex-col">
        <div
          className={cn("flex h-6 w-6 shrink-0 items-center justify-center rounded-full", {
            "bg-green-600": status === "completed",
            "bg-yellow-500": status === "in-progress",
            "bg-red-600": status === "failed",
          })}
        >
          {status === "completed" && <CheckIcon className="h-4 w-4 text-white" />}
          {status === "failed" && <XMarkIcon className="h-4 w-4 text-white" />}
          {status === "in-progress" && (
            <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          )}
        </div>
        {!isLast && <div className="mx-auto mt-2 h-full flex-1 border-l border-slate-200"></div>}
      </div>
      <div className="flex-1 pb-4">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
