import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Input,
  Select,
  SelectContent,
  SelectTrigger,
  SelectItem,
  SelectValue,
  Button,
  toast,
} from "@in-need-of-time/ui";
import { US_STATES } from "@in-need-of-time/utils";
import { useSession } from "../../hooks/useSession";
import { createAgentJob } from "../../queries";
import { PasteListDialog } from "./PasteListDialog";
import { MAX_PROVIDER_ROWS, createRow, insertRows, isFilledRow, parseProviderList, type ProviderRow } from "./utils";

export function AddProviderPage() {
  const navigate = useNavigate();
  const { sessionToken } = useSession();
  const [defaultState, setDefaultState] = useState("");
  const [rows, setRows] = useState<ProviderRow[]>(() => [createRow("")]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const filledRows = rows.filter(isFilledRow);
  const isFull = rows.length >= MAX_PROVIDER_ROWS;

  function updateRow(id: string, changes: Partial<ProviderRow>) {
    setRows((current) => current.map((row) => (row.id === id ? { ...row, ...changes } : row)));
  }

  function removeRow(id: string) {
    setRows((current) => {
      const remaining = current.filter((row) => row.id !== id);

      return remaining.length > 0 ? remaining : [createRow(defaultState)];
    });
  }

  function addRow() {
    setRows((current) => (current.length < MAX_PROVIDER_ROWS ? [...current, createRow(defaultState)] : current));
  }

  function addPastedRows(index: number, text: string) {
    const incoming = parseProviderList(text, defaultState);

    if (incoming.length === 0) {
      return;
    }

    const result = insertRows(rows, index, incoming, defaultState);

    setRows(result.rows);

    if (result.overflow > 0) {
      toast.warning(
        `Only ${MAX_PROVIDER_ROWS} providers fit in one batch — ${result.overflow} pasted ${result.overflow === 1 ? "row was" : "rows were"} left out.`,
      );
    }
  }

  // A multi-line paste into a name field becomes one row per line; a single
  // line pastes normally.
  function onNamePaste(e: React.ClipboardEvent<HTMLInputElement>, index: number) {
    const text = e.clipboardData.getData("text");

    if (!/\r?\n/.test(text.trim())) {
      return;
    }

    e.preventDefault();
    addPastedRows(index, text);
  }

  async function onSubmit() {
    setIsSubmitting(true);

    try {
      // One provider keeps the old behavior: go straight to its job.
      if (filledRows.length === 1) {
        const [row] = filledRows;
        const jobId = await createAgentJob(sessionToken, row.name.trim(), row.state);

        navigate(`/job/${jobId}`);
        return;
      }

      const results = await Promise.allSettled(
        filledRows.map((row) => createAgentJob(sessionToken, row.name.trim(), row.state)),
      );
      const failedRows = filledRows.filter((_, i) => results[i].status === "rejected");

      if (failedRows.length === filledRows.length) {
        toast.error("Couldn't start any runs. Try again.");
        return;
      }

      if (failedRows.length > 0) {
        toast.error(
          `${failedRows.length} of ${filledRows.length} runs couldn't start: ${failedRows.map((row) => row.name).join(", ")}`,
        );
      } else {
        toast.success(`Started ${filledRows.length} runs.`);
      }

      navigate("/runs");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Couldn't start the run. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="mx-auto flex max-w-7xl justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-4xl flex-col items-center space-y-6">
        <div className="max-w-[560px] text-center">
          <h1 className="text-2xl font-bold text-slate-900">Add providers</h1>
          <p className="text-center text-slate-600">
            Enter one provider per row. Each row runs as its own agent search, and results land in Agent Runs for
            review.
          </p>
        </div>
        <Card className="w-full overflow-hidden p-0">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3 md:px-6">
            <p className="text-sm font-medium text-slate-900">
              {filledRows.length} {filledRows.length === 1 ? "provider" : "providers"}
            </p>
            <div className="ml-auto">
              <PasteListDialog
                disabled={filledRows.length >= MAX_PROVIDER_ROWS}
                onSubmit={(text) => addPastedRows(rows.length - 1, text)}
              />
            </div>
          </div>

          <div className="space-y-3 px-4 py-4 md:px-6">
            <div className="hidden grid-cols-[2rem_minmax(0,7fr)_minmax(0,3fr)_2.5rem] gap-3 text-xs font-semibold tracking-wide text-slate-500 uppercase md:grid">
              <span />
              <span>Provider name</span>
              <span>State</span>
              <span />
            </div>
            {rows.map((row, index) => (
              <div
                key={row.id}
                className="grid grid-cols-[2rem_minmax(0,1fr)_2.5rem] items-center gap-x-3 gap-y-2 md:grid-cols-[2rem_minmax(0,7fr)_minmax(0,3fr)_2.5rem]"
              >
                <span className="text-center text-sm text-slate-400">{index + 1}</span>
                <Input
                  aria-label={`Provider ${index + 1} name`}
                  placeholder="Provider name"
                  value={row.name}
                  onChange={(e) => updateRow(row.id, { name: e.target.value })}
                  onPaste={(e) => onNamePaste(e, index)}
                />
                <div className="col-start-2 row-start-2 md:col-start-auto md:row-start-auto">
                  <Select value={row.state} onValueChange={(state) => updateRow(row.id, { state })}>
                    <SelectTrigger aria-label={`Provider ${index + 1} state`}>
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent>
                      {US_STATES.map((state) => (
                        <SelectItem key={state.value} value={state.value}>
                          {state.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  className="col-start-3 row-start-1 md:col-start-auto md:row-start-auto"
                  variant="text-dark"
                  size="icon-sm"
                  aria-label={`Remove provider ${index + 1}`}
                  onClick={() => removeRow(row.id)}
                >
                  <XMarkIcon className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <div className="md:pl-11">
              <Button variant="text-primary" size="text-sm" disabled={isFull} onClick={addRow}>
                <PlusIcon className="mr-1 h-4 w-4" />
                Add row
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 border-t border-slate-200 bg-slate-50 px-4 py-4 md:px-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-600">Default state for new rows</span>
              <Select value={defaultState} onValueChange={setDefaultState}>
                <SelectTrigger aria-label="Default state for new rows" className="w-40">
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  {US_STATES.map((state) => (
                    <SelectItem key={state.value} value={state.value}>
                      {state.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button
              className="ml-auto w-full md:w-auto"
              disabled={filledRows.length === 0 || isSubmitting}
              onClick={onSubmit}
            >
              {filledRows.length > 1 ? `Search & Autofill ${filledRows.length}` : "Search & Autofill"}
            </Button>
          </div>
        </Card>
        <p className="text-center text-sm text-slate-500">
          Up to {MAX_PROVIDER_ROWS} providers per batch. State narrows the search so the agent doesn't match a
          same-named provider elsewhere. Paste a list into any name field to add a row per line.
        </p>
      </div>
    </main>
  );
}
