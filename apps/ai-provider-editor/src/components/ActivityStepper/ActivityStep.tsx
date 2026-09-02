import React from "react";
import { CheckIcon } from "@heroicons/react/24/outline";
import { cn } from "@in-need-of-time/utils";

type ActivityStepProps = {
  status: string;
  title: string;
  description: string;
};

export function ActivityStep(props: ActivityStepProps) {
  const { status = "completed", title, description } = props;

  return (
    <div className="mb-2 flex gap-4">
      <div className="flex flex-col">
        <div
          className={cn("flex h-6 w-6 items-center justify-center rounded-full", {
            "bg-green-600": status === "completed",
            "bg-yellow-500": status === "in-progress",
          })}
        >
          {status === "completed" && <CheckIcon className="h-4 w-4 text-white" />}
        </div>
        <div className="mx-auto mt-2 h-full flex-1 border-l border-slate-200"></div>
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
