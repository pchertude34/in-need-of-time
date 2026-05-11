import { useState, type CSSProperties, type FormEvent } from "react";

import { PipelineApiError, startPipelineJob } from "../lib/pipelineApi";
import {
  type PipelineInputField,
  type PipelineInputFieldErrors,
  validatePipelineInput,
} from "../lib/pipelineInputValidation";
import type { PipelineInput, PipelineJob } from "../types/pipeline";

type ProviderSearchFormProps = {
  onJobStarted: (job: PipelineJob) => void;
  onError: (message: string | null) => void;
};

const formStyle: CSSProperties = {
  display: "grid",
  gap: "16px",
  maxWidth: "720px",
  padding: "20px",
  border: "1px solid #d9d9d9",
  borderRadius: "8px",
  background: "#ffffff",
};

const fieldGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
  gap: "12px",
};

const labelStyle: CSSProperties = {
  display: "grid",
  gap: "6px",
  color: "#202020",
  fontSize: "14px",
  fontWeight: 600,
};

const inputStyle: CSSProperties = {
  minHeight: "38px",
  border: "1px solid #c8c8c8",
  borderRadius: "6px",
  padding: "8px 10px",
  font: "inherit",
};

const inputErrorStyle: CSSProperties = {
  ...inputStyle,
  borderColor: "#d92d20",
};

const fieldErrorStyle: CSSProperties = {
  margin: 0,
  color: "#b42318",
  fontSize: "12px",
  fontWeight: 500,
};

const buttonStyle: CSSProperties = {
  justifySelf: "start",
  minHeight: "40px",
  border: 0,
  borderRadius: "6px",
  padding: "8px 14px",
  background: "#171717",
  color: "#ffffff",
  cursor: "pointer",
  font: "inherit",
  fontWeight: 700,
};

function clearFieldError(
  currentErrors: PipelineInputFieldErrors,
  field: PipelineInputField,
): PipelineInputFieldErrors {
  if (!currentErrors[field]) return currentErrors;

  const nextErrors = { ...currentErrors };
  delete nextErrors[field];
  return nextErrors;
}

export function ProviderSearchForm({ onJobStarted, onError }: ProviderSearchFormProps) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [category, setCategory] = useState("");
  const [perQuery, setPerQuery] = useState("");
  const [maxUrls, setMaxUrls] = useState("");
  const [fieldErrors, setFieldErrors] = useState<PipelineInputFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onError(null);

    const validationResult = validatePipelineInput({
      city,
      state,
      category,
      perQuery,
      maxUrls,
    });

    if (!validationResult.ok) {
      setFieldErrors(validationResult.fieldErrors);
      return;
    }

    setFieldErrors({});
    setIsSubmitting(true);

    try {
      const input: PipelineInput = validationResult.value;

      const job = await startPipelineJob(input);
      onJobStarted(job);
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

  function getInputStyle(field: PipelineInputField): CSSProperties {
    return fieldErrors[field] ? inputErrorStyle : inputStyle;
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit} noValidate>
      <div>
        <h2 style={{ margin: "0 0 6px" }}>Start provider search</h2>
        <p style={{ margin: 0, color: "#555555" }}>
          Run the local agent pipeline and review normalized provider records when it finishes.
        </p>
      </div>

      <div style={fieldGridStyle}>
        <label style={labelStyle}>
          City
          <input
            required
            style={getInputStyle("city")}
            type="text"
            value={city}
            onChange={(event) => updateField("city", event.target.value)}
            placeholder="Salem"
          />
          {fieldErrors.city ? <p style={fieldErrorStyle}>{fieldErrors.city}</p> : null}
        </label>

        <label style={labelStyle}>
          State
          <input
            required
            style={getInputStyle("state")}
            type="text"
            value={state}
            onChange={(event) => updateField("state", event.target.value)}
            placeholder="OR"
          />
          {fieldErrors.state ? <p style={fieldErrorStyle}>{fieldErrors.state}</p> : null}
        </label>

        <label style={labelStyle}>
          Category
          <input
            required
            style={getInputStyle("category")}
            type="text"
            value={category}
            onChange={(event) => updateField("category", event.target.value)}
            placeholder="FOOD_BANK"
          />
          {fieldErrors.category ? <p style={fieldErrorStyle}>{fieldErrors.category}</p> : null}
        </label>

        <label style={labelStyle}>
          perQuery
          <input
            style={getInputStyle("perQuery")}
            type="number"
            min="1"
            value={perQuery}
            onChange={(event) => updateField("perQuery", event.target.value)}
            placeholder="3"
          />
          {fieldErrors.perQuery ? <p style={fieldErrorStyle}>{fieldErrors.perQuery}</p> : null}
        </label>

        <label style={labelStyle}>
          maxUrls
          <input
            style={getInputStyle("maxUrls")}
            type="number"
            min="1"
            value={maxUrls}
            onChange={(event) => updateField("maxUrls", event.target.value)}
            placeholder="10"
          />
          {fieldErrors.maxUrls ? <p style={fieldErrorStyle}>{fieldErrors.maxUrls}</p> : null}
        </label>
      </div>

      <button style={buttonStyle} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Starting..." : "Start job"}
      </button>
    </form>
  );
}
