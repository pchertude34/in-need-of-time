import React from "react";
import { ActivityStep, type ActivityStatus } from "./ActivityStep";

/**
 * One rendered step. Callers are responsible for producing these — the stepper
 * only draws them, so it isn't tied to the agent event stream.
 */
export type ActivityStepItem = {
  id: string;
  status: ActivityStatus;
  title: string;
  description: string;
};

type ActivityStepperProps = {
  steps: ActivityStepItem[];
  emptyMessage?: string;
};

export function ActivityStepper(props: ActivityStepperProps) {
  const { steps, emptyMessage = "No activity yet" } = props;

  if (steps.length === 0) {
    return <p className="text-sm text-slate-500">{emptyMessage}</p>;
  }

  return (
    <div>
      {steps.map((step, index) => (
        <ActivityStep
          key={step.id}
          status={step.status}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  );
}
