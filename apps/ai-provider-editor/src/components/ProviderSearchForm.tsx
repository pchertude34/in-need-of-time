import { Check, Loader2 } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useClient } from "@sanity/sdk-react";

import { PipelineApiError, startPipelineJob } from "../lib/pipelineApi";
import { loadExistingProviders } from "../lib/loadExistingProviders";
import {
  type PipelineInputField,
  type PipelineInputFieldErrors,
  validatePipelineInput,
} from "../lib/pipelineInputValidation";
import type { PipelineInput, PipelineJob } from "../types/pipeline";

type ProviderSearchFormProps = {
  job: PipelineJob | null;
  onJobStarted: (job: PipelineJob) => void;
  onError: (message: string | null) => void;
};

type FieldProps = {
  label: string;
  value: string;
  onChange?: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  readOnly?: boolean;
  error?: string;
};

function Field({ label, value, onChange, placeholder, type = "text", required, readOnly, error }: FieldProps) {
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

function clearFieldError(currentErrors: PipelineInputFieldErrors, field: PipelineInputField): PipelineInputFieldErrors {
  if (!currentErrors[field]) return currentErrors;
  const nextErrors = { ...currentErrors };
  delete nextErrors[field];
  return nextErrors;
}

export function ProviderSearchForm({ job, onJobStarted, onError }: ProviderSearchFormProps) {
  const client = useClient({ apiVersion: process.env.SANITY_APP_API_VERSION || "2024-03-09" });
  const [city, setCity] = useState(job?.input.city ?? "");
  const [state, setState] = useState(job?.input.state ?? "");
  const [category, setCategory] = useState(job?.input.category ?? "");
  const [perQuery, setPerQuery] = useState(job?.input.perQuery != null ? String(job.input.perQuery) : "");
  const [maxUrls, setMaxUrls] = useState(job?.input.maxUrls != null ? String(job.input.maxUrls) : "");
  const [fieldErrors, setFieldErrors] = useState<PipelineInputFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [warning, setWarning] = useState<string | null>(null);

  const isProcessing = job?.status === "queued" || job?.status === "running";
  const isFinished = job?.status === "ready_for_review" || job?.status === "approved";
  const isReadOnly = isProcessing || isFinished;

  const headerLabel = isFinished ? "Job Finished" : "Create Job";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onError(null);
    setWarning(null);

    const validationResult = validatePipelineInput({ city, state, category, perQuery, maxUrls });

    if (!validationResult.ok) {
      setFieldErrors(validationResult.fieldErrors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);
    try {
      let existingProviders: PipelineInput["existingProviders"] = [];
      try {
        existingProviders = await loadExistingProviders(client);
      } catch (error) {
        setWarning(
          error instanceof Error
            ? `Unable to preload existing providers for duplicate filtering: ${error.message}`
            : "Unable to preload existing providers for duplicate filtering.",
        );
      }

      const newJob = await startPipelineJob({ ...validationResult.value, existingProviders });
      onJobStarted(newJob);
    } catch (error) {
      if (error instanceof PipelineApiError && error.fieldErrors) {
        setFieldErrors(error.fieldErrors);
      }
      onError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  function updateField(field: PipelineInputField, value: string) {
    const setters: Record<PipelineInputField, (nextValue: string) => void> = {
      city: setCity,
      state: setState,
      category: setCategory,
      perQuery: setPerQuery,
      maxUrls: setMaxUrls,
    };
    setters[field](value);
    setFieldErrors((current) => clearFieldError(current, field));
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
          onChange={!isReadOnly ? (v) => updateField("city", v) : undefined}
          placeholder="Salem"
          required={!isReadOnly}
          readOnly={isReadOnly}
          error={fieldErrors.city}
        />
        <Field
          label="State"
          value={isReadOnly ? (job?.input.state ?? "") : state}
          onChange={!isReadOnly ? (v) => updateField("state", v) : undefined}
          placeholder="OR"
          required={!isReadOnly}
          readOnly={isReadOnly}
          error={fieldErrors.state}
        />
        <Field
          label="Category"
          value={isReadOnly ? (job?.input.category ?? "") : category}
          onChange={!isReadOnly ? (v) => updateField("category", v) : undefined}
          placeholder="FOOD_BANK"
          required={!isReadOnly}
          readOnly={isReadOnly}
          error={fieldErrors.category}
        />
        <Field
          label="Per Query"
          value={isReadOnly ? (job?.input.perQuery != null ? String(job.input.perQuery) : "") : perQuery}
          onChange={!isReadOnly ? (v) => updateField("perQuery", v) : undefined}
          placeholder="3"
          type="number"
          readOnly={isReadOnly}
          error={fieldErrors.perQuery}
        />
        <Field
          label="Max URLs"
          value={isReadOnly ? (job?.input.maxUrls != null ? String(job.input.maxUrls) : "") : maxUrls}
          onChange={!isReadOnly ? (v) => updateField("maxUrls", v) : undefined}
          placeholder="10"
          type="number"
          readOnly={isReadOnly}
          error={fieldErrors.maxUrls}
        />
      </div>

      {/* Warning */}
      {warning && <p className="text-[12px] font-medium text-[#9a3412]">{warning}</p>}

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
