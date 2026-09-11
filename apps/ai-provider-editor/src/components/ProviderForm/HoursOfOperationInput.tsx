import React, { useId } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Input, Textarea } from "@in-need-of-time/ui";
import type { HoursOfOperation } from "../../types";

// Index is the day number the data uses: 0 (Sunday) through 6 (Saturday).
const DAY_LABELS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const DEFAULT_PERIOD = { open: "09:00", close: "17:00" };

type Period = HoursOfOperation["periods"][number];

type HoursOfOperationInputProps = {
  value: HoursOfOperation | null;
  onChange: (value: HoursOfOperation | null) => void;
};

// `<input type="time">` wants "HH:mm". The agent emits that, but its own schema
// documents "0900", so accept both rather than silently blanking a field.
function toTimeInputValue(time: string) {
  const match = /^(\d{2}):?(\d{2})$/.exec(time);

  return match ? `${match[1]}:${match[2]}` : "";
}

function isEmpty(hours: HoursOfOperation) {
  return hours.periods.length === 0 && hours.weekdayText.length === 0;
}

// The notes are one string per line on the wire — Google Places shape puts one
// entry per weekday — but a single field to edit. An empty box is no notes at
// all rather than one blank one; every other split is kept verbatim, so a blank
// line mid-text survives being typed.
function toWeekdayText(notes: string) {
  return notes === "" ? [] : notes.split("\n");
}

export function HoursOfOperationInput(props: HoursOfOperationInputProps) {
  const { value, onChange } = props;
  const periods = value?.periods ?? [];
  const weekdayText = value?.weekdayText ?? [];
  // Generated, because this input renders once per service type as well as for
  // the provider — a fixed id would collide across those copies.
  const notesId = useId();

  // Hours that are neither scheduled nor described are simply not known, which
  // is what null means to the agent and to Sanity.
  function emit(next: HoursOfOperation) {
    onChange(isEmpty(next) ? null : next);
  }

  function setPeriods(nextPeriods: Period[]) {
    emit({ periods: nextPeriods, weekdayText });
  }

  function setWeekdayText(nextWeekdayText: string[]) {
    emit({ periods, weekdayText: nextWeekdayText });
  }

  function addPeriod(day: number) {
    setPeriods([...periods, { open: { day, time: DEFAULT_PERIOD.open }, close: { day, time: DEFAULT_PERIOD.close } }]);
  }

  function updatePeriod(index: number, edge: "open" | "close", time: string) {
    setPeriods(periods.map((period, i) => (i === index ? { ...period, [edge]: { ...period[edge], time } } : period)));
  }

  function removePeriod(index: number) {
    setPeriods(periods.filter((_period, i) => i !== index));
  }

  return (
    <div className="space-y-4 rounded-xl border border-slate-300 bg-white p-4">
      <div className="space-y-2">
        {DAY_LABELS.map((label, day) => {
          // Kept as indexes into the flat `periods` array so edits address the
          // same entries the data has, rather than a regrouped copy of them.
          const dayPeriodIndexes = periods.reduce<number[]>(
            (indexes, period, index) => (period.open.day === day ? [...indexes, index] : indexes),
            [],
          );

          return (
            <div key={label} className="flex flex-wrap items-start gap-3">
              <span className="w-24 shrink-0 py-2 text-sm font-medium text-slate-700">{label}</span>
              <div className="flex flex-1 flex-wrap items-center gap-2">
                {dayPeriodIndexes.length === 0 && <span className="py-2 text-sm text-slate-400">Closed</span>}
                {dayPeriodIndexes.map((index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      size="sm"
                      type="time"
                      className="w-32"
                      aria-label={`${label} opening time`}
                      value={toTimeInputValue(periods[index].open.time)}
                      onChange={(event) => updatePeriod(index, "open", event.target.value)}
                    />
                    <span className="text-sm text-slate-500">to</span>
                    <Input
                      size="sm"
                      type="time"
                      className="w-32"
                      aria-label={`${label} closing time`}
                      value={toTimeInputValue(periods[index].close.time)}
                      onChange={(event) => updatePeriod(index, "close", event.target.value)}
                    />
                    <Button
                      type="button"
                      variant="text-error"
                      size="icon-xs"
                      rounded="md"
                      aria-label={`Remove ${label} hours`}
                      onClick={() => removePeriod(index)}
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="text-dark"
                  size="xs"
                  rounded="md"
                  aria-label={`Add ${label} hours`}
                  onClick={() => addPeriod(day)}
                >
                  <PlusIcon className="mr-1 h-3.5 w-3.5" />
                  Add hours
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="space-y-2 border-t border-slate-200 pt-4">
        <label className="block text-sm font-medium text-slate-700" htmlFor={notesId}>
          Notes
        </label>
        {/* The agent puts what a weekly grid can't hold in here — "2nd and 4th
            Friday of each month", or that sources disagree and someone should
            call. Editable rather than regenerated, so none of that is lost. */}
        <p className="text-sm text-slate-400">
          Anything the schedule above can't say — recurrence, exceptions, or which details need confirming. One per
          line.
        </p>
        <Textarea
          id={notesId}
          size="sm"
          rows={3}
          value={weekdayText.join("\n")}
          onChange={(event) => setWeekdayText(toWeekdayText(event.target.value))}
        />
      </div>
    </div>
  );
}
