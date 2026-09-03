import React from "react";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import { formatTimeAs12Hour } from "@in-need-of-time/utils";
import { ProviderField } from "./ProviderField";
import type { ConfidenceLevel, HoursOfOperation } from "./types";

const DAY_LABELS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

type HoursOfOperationFieldProps = {
  label: string;
  hours: HoursOfOperation | null;
  confidence?: ConfidenceLevel;
  sourceUrl?: string | null;
  description?: string;
};

function getHoursLines(hours: HoursOfOperation | null) {
  if (!hours) {
    return [];
  }

  if (hours.weekdayText.length > 0) {
    return hours.weekdayText;
  }

  return hours.periods.map(
    (period) =>
      `${DAY_LABELS[period.open.day]}: ${formatTimeAs12Hour(period.open.time)} – ${formatTimeAs12Hour(period.close.time)}`,
  );
}

/**
 * Hours are displayed rather than edited — the agent emits them in Google Places
 * shape, which needs a dedicated editor before it can be safely hand-edited.
 */
export function HoursOfOperationField(props: HoursOfOperationFieldProps) {
  const { label, hours, confidence, sourceUrl, description } = props;
  const lines = getHoursLines(hours);

  return (
    <ProviderField label={label} confidence={confidence} sourceUrl={sourceUrl} description={description}>
      <div className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5">
        <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-slate-500">
          <LockClosedIcon className="h-3.5 w-3.5" />
          Read only
        </div>
        {lines.length > 0 ? (
          <ul className="space-y-1 text-sm text-slate-700">
            {lines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-500">No hours found</p>
        )}
      </div>
    </ProviderField>
  );
}
