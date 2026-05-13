import { Check, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";

import { startPipelineJob } from "../lib/pipelineApi";
import type { PipelineInput, PipelineJob } from "../types/pipeline";

type ProviderSearchFormProps = {
  job: PipelineJob | null;
  onJobStarted: (job: PipelineJob) => void;
  onError: (message: string) => void;
};

function parseOptionalNumber(value: string, label: string): number | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;
  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed)) throw new Error(`${label} must be a valid number.`);
  return parsed;
}

type FieldProps = {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  readOnly?: boolean;
};

function Field({ label, value, onChange, placeholder, type = "text", required, readOnly }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[13px] font-medium text-[#475569]">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        required={required}
        readOnly={readOnly}
        className={`h-[38px] rounded-lg border border-[1.5px] border-[#e2e8f0] bg-[#f8fafc] px-3 text-[14px] text-[#2d2d2d] outline-none transition-colors focus:border-[#2563eb] ${readOnly ? "cursor-default opacity-60" : ""}`}
      />
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

export function ProviderSearchForm({ job, onJobStarted, onError }: ProviderSearchFormProps) {
  const [city, setCity] = useState(job?.input.city ?? "");
  const [state, setState] = useState(job?.input.state ?? "");
  const [category, setCategory] = useState(job?.input.category ?? "");
  const [perQuery, setPerQuery] = useState(job?.input.perQuery != null ? String(job.input.perQuery) : "");
  const [maxUrls, setMaxUrls] = useState(job?.input.maxUrls != null ? String(job.input.maxUrls) : "");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isProcessing = job?.status === "queued" || job?.status === "running";
  const isFinished = job?.status === "ready_for_review" || job?.status === "approved";
  const isReadOnly = isProcessing || isFinished;

  const headerLabel = isFinished ? "Job Finished" : "Create Job";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const input: PipelineInput = {
        city: city.trim(),
        state: state.trim(),
        category: category.trim(),
        perQuery: parseOptionalNumber(perQuery, "perQuery"),
        maxUrls: parseOptionalNumber(maxUrls, "maxUrls"),
      };
      const newJob = await startPipelineJob(input);
      onJobStarted(newJob);
    } catch (error) {
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
      {/* Section header */}
      <div className="flex items-center gap-2">
        <div className="h-4 w-[3px] rounded-sm bg-[#2563eb]" />
        <h2 className="text-[15px] font-semibold tracking-tight text-[#0f172a]">{headerLabel}</h2>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-5 gap-3">
        <Field
          label="City"
          value={isReadOnly ? (job?.input.city ?? "") : city}
          onChange={!isReadOnly ? setCity : undefined}
          placeholder="Salem"
          required={!isReadOnly}
          readOnly={isReadOnly}
        />
        <Field
          label="State"
          value={isReadOnly ? (job?.input.state ?? "") : state}
          onChange={!isReadOnly ? setState : undefined}
          placeholder="OR"
          required={!isReadOnly}
          readOnly={isReadOnly}
        />
        <Field
          label="Category"
          value={isReadOnly ? (job?.input.category ?? "") : category}
          onChange={!isReadOnly ? setCategory : undefined}
          placeholder="FOOD_BANK"
          required={!isReadOnly}
          readOnly={isReadOnly}
        />
        <Field
          label="Per Query"
          value={isReadOnly ? (job?.input.perQuery != null ? String(job.input.perQuery) : "") : perQuery}
          onChange={!isReadOnly ? setPerQuery : undefined}
          placeholder="3"
          type="number"
          readOnly={isReadOnly}
        />
        <Field
          label="Max URLs"
          value={isReadOnly ? (job?.input.maxUrls != null ? String(job.input.maxUrls) : "") : maxUrls}
          onChange={!isReadOnly ? setMaxUrls : undefined}
          placeholder="10"
          type="number"
          readOnly={isReadOnly}
        />
      </div>

      {/* Buttons / status row */}
      <div className="flex flex-wrap items-center gap-3">
        {isFinished ? (
          <>
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-[18px] py-[10px] text-[14px] font-semibold text-white shadow-sm"
            >
              Job Finished
              <Check className="h-4 w-4" />
            </button>
            {job?.id && <StatusPill>Job: {job.id}</StatusPill>}
            {job?.updatedAt && <StatusPill>Updated: {new Date(job.updatedAt).toLocaleString()}</StatusPill>}
          </>
        ) : isProcessing ? (
          <>
            <button
              type="button"
              disabled
              className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-[18px] py-[10px] text-[14px] font-semibold text-white shadow-sm"
            >
              Job Processing
              <Loader2 className="h-4 w-4 animate-spin" />
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-lg border border-[1.5px] border-[#fecaca] bg-[#fef2f2] px-[18px] py-[10px] text-[14px] font-semibold text-[#dc2626] shadow-sm transition-colors hover:bg-red-50"
            >
              Cancel Job
            </button>
          </>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center gap-2 rounded-lg bg-[#2563eb] px-[18px] py-[10px] text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-60"
          >
            {isSubmitting ? (
              <>
                Starting…
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            ) : (
              "Start Job"
            )}
          </button>
        )}
      </div>
    </form>
  );
}
