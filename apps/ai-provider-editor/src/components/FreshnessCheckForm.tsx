import { AlertCircle, Check, Clock, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { FreshnessApiError, startFreshnessJob } from "../lib/freshnessApi";
import type { FreshnessJob } from "../types/freshness";

type FreshnessCheckFormProps = {
  job: FreshnessJob | null;
  onJobStarted: (job: FreshnessJob) => void;
  onError: (message: string | null) => void;
};

type FieldErrors = Partial<Record<"thresholdDays" | "limit", string>>;

export function getFreshnessActionState(status: FreshnessJob["status"] | undefined): {
  label: string;
  className: string;
  icon: "check" | "alert" | "clock";
} {
  if (status === "failed") {
    return {
      label: "Check Failed",
      className: "bg-[#dc2626] text-white",
      icon: "alert",
    };
  }

  if (status === "ready_for_review") {
    return {
      label: "Needs Review",
      className: "bg-[#d97706] text-white",
      icon: "alert",
    };
  }

  if (status === "completed" || status === "approved" || status === "denied") {
    return {
      label: "Check Complete",
      className: "bg-[#2563eb] text-white",
      icon: "check",
    };
  }

  return {
    label: "Check Pending",
    className: "bg-slate-100 text-slate-600",
    icon: "clock",
  };
}

function Field({
  label,
  value,
  onChange,
  error,
  readOnly,
}: {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  error?: string;
  readOnly?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-[#475569]">{label}</label>
      <input
        type="number"
        value={value}
        onChange={onChange ? (event) => onChange(event.target.value) : undefined}
        readOnly={readOnly}
        className={`h-[38px] rounded-lg border border-[1.5px] ${error ? "border-[#d92d20]" : "border-[#e2e8f0]"} bg-[#f8fafc] px-3 text-[14px] text-[#2d2d2d] outline-none transition-colors focus:border-[#2563eb] ${readOnly ? "cursor-default opacity-60" : ""}`}
      />
      {error && <p className="text-[12px] text-[#b42318]">{error}</p>}
    </div>
  );
}

function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex h-[38px] items-center whitespace-nowrap rounded-full border border-[#e2e8f0] bg-[#f8fafc] px-4 font-mono text-[11px] text-[#0f172a]">
      {children}
    </span>
  );
}

function validateInput(
  thresholdDays: string,
  limit: string,
): { ok: true; value: { thresholdDays: number; limit: number } } | { ok: false; errors: FieldErrors } {
  const threshold = Number(thresholdDays);
  const max = Number(limit);
  const errors: FieldErrors = {};

  if (!Number.isInteger(threshold) || threshold < 1 || threshold > 3650) {
    errors.thresholdDays = "Use a whole number from 1 to 3650.";
  }
  if (!Number.isInteger(max) || max < 1 || max > 100) {
    errors.limit = "Use a whole number from 1 to 100.";
  }

  if (Object.keys(errors).length) return { ok: false, errors };
  return { ok: true, value: { thresholdDays: threshold, limit: max } };
}

export function FreshnessCheckForm({ job, onJobStarted, onError }: FreshnessCheckFormProps) {
  const [thresholdDays, setThresholdDays] = useState(
    job?.input.thresholdDays != null ? String(job.input.thresholdDays) : "90",
  );
  const [limit, setLimit] = useState(job?.input.limit != null ? String(job.input.limit) : "10");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const isProcessing = job?.status === "queued" || job?.status === "running";
  const isFinished = Boolean(job && !isProcessing);
  const isReadOnly = isProcessing;
  const actionState = getFreshnessActionState(job?.status);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onError(null);

    const validation = validateInput(thresholdDays, limit);
    if (!validation.ok) {
      setFieldErrors(validation.errors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);
    try {
      const newJob = await startFreshnessJob(validation.value);
      onJobStarted(newJob);
    } catch (error) {
      if (error instanceof FreshnessApiError && error.fieldErrors) {
        setFieldErrors(error.fieldErrors);
      }
      onError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 rounded-xl border border-[#e2e8f0] bg-white px-6 py-7 shadow-[0px_1px_2px_rgba(0,0,0,0.03),0px_1px_3px_rgba(0,0,0,0.04)]"
    >
      <div className="flex items-center gap-2">
        <div className="h-4 w-[3px] rounded-sm bg-[#4ab7c6]" />
        <h2 className="text-[15px] font-semibold tracking-tight text-[#0f172a]">Run Stale Checks</h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Field
          label="Stale After Days"
          value={thresholdDays}
          onChange={!isReadOnly ? setThresholdDays : undefined}
          readOnly={isReadOnly}
          error={fieldErrors.thresholdDays}
        />
        <Field
          label="Provider Limit"
          value={limit}
          onChange={!isReadOnly ? setLimit : undefined}
          readOnly={isReadOnly}
          error={fieldErrors.limit}
        />
      </div>

      {job?.output && (
        <div className="grid grid-cols-5 gap-2">
          <StatusPill>Checked: {job.output.summary.checked}</StatusPill>
          <StatusPill>Current: {job.output.summary.current}</StatusPill>
          <StatusPill>Review: {job.output.summary.needs_review}</StatusPill>
          <StatusPill>Failed: {job.output.summary.failed}</StatusPill>
          <StatusPill>Skipped: {job.output.summary.skipped}</StatusPill>
        </div>
      )}

      {job?.status === "failed" && job.error && (
        <div className="rounded-lg border border-[#fecaca] bg-[#fef2f2] px-4 py-3 text-[13px] font-semibold text-[#b42318]">
          {job.error}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3">
        {isFinished ? (
          <>
            <button
              type="button"
              disabled
              className={`inline-flex items-center gap-2 rounded-lg px-[18px] py-[10px] text-[14px] font-semibold shadow-sm ${actionState.className}`}
            >
              {actionState.label}
              {actionState.icon === "alert" ? (
                <AlertCircle className="h-4 w-4" />
              ) : actionState.icon === "clock" ? (
                <Clock className="h-4 w-4" />
              ) : (
                <Check className="h-4 w-4" />
              )}
            </button>
            {job?.id && <StatusPill>Job: {job.id}</StatusPill>}
            {job?.updatedAt && <StatusPill>Updated: {new Date(job.updatedAt).toLocaleString()}</StatusPill>}
          </>
        ) : isProcessing ? (
          <button
            type="button"
            disabled
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-[18px] py-[10px] text-[14px] font-semibold text-white shadow-sm"
          >
            Checking
            <Loader2 className="h-4 w-4 animate-spin" />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-[18px] py-[10px] text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                Starting
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              "Start Stale Check"
            )}
          </button>
        )}
      </div>
    </form>
  );
}
