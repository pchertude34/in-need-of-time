import { useState, type CSSProperties, type FormEvent } from "react";

import { startPipelineJob } from "../lib/pipelineApi";
import type { PipelineInput, PipelineJob } from "../types/pipeline";

type ProviderSearchFormProps = {
  onJobStarted: (job: PipelineJob) => void;
  onError: (message: string) => void;
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

function parseOptionalNumber(value: string, label: string): number | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;

  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed)) {
    throw new Error(`${label} must be a valid number.`);
  }

  return parsed;
}

export function ProviderSearchForm({ onJobStarted, onError }: ProviderSearchFormProps) {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [category, setCategory] = useState("");
  const [perQuery, setPerQuery] = useState("");
  const [maxUrls, setMaxUrls] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

      const job = await startPipelineJob(input);
      onJobStarted(job);
    } catch (error) {
      onError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
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
            style={inputStyle}
            type="text"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            placeholder="Salem"
          />
        </label>

        <label style={labelStyle}>
          State
          <input
            required
            style={inputStyle}
            type="text"
            value={state}
            onChange={(event) => setState(event.target.value)}
            placeholder="OR"
          />
        </label>

        <label style={labelStyle}>
          Category
          <input
            required
            style={inputStyle}
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            placeholder="FOOD_BANK"
          />
        </label>

        <label style={labelStyle}>
          perQuery
          <input
            style={inputStyle}
            type="number"
            min="1"
            value={perQuery}
            onChange={(event) => setPerQuery(event.target.value)}
            placeholder="3"
          />
        </label>

        <label style={labelStyle}>
          maxUrls
          <input
            style={inputStyle}
            type="number"
            min="1"
            value={maxUrls}
            onChange={(event) => setMaxUrls(event.target.value)}
            placeholder="10"
          />
        </label>
      </div>

      <button style={buttonStyle} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Starting..." : "Start job"}
      </button>
    </form>
  );
}
