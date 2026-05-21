import type { PipelineInput } from "../types/pipeline";

export const FIELD_NAMES = ["city", "state", "category", "perQuery", "maxUrls"] as const;

export type PipelineInputField = (typeof FIELD_NAMES)[number];

export type RawPipelineInput = Record<PipelineInputField, string>;

export type PipelineInputFieldErrors = Partial<Record<PipelineInputField, string>>;

export type PipelineInputValidationResult =
  | {
      ok: true;
      value: PipelineInput;
      fieldErrors: {};
    }
  | {
      ok: false;
      fieldErrors: PipelineInputFieldErrors;
    };

function parseOptionalNumber(value: string, label: "perQuery" | "maxUrls"): number | undefined {
  const trimmed = value.trim();
  if (!trimmed) return undefined;

  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed)) throw new Error(`${label} must be a valid number.`);

  if (parsed <= 0) return undefined;
  return parsed;
}

export function validatePipelineInput(rawInput: RawPipelineInput): PipelineInputValidationResult {
  const city = rawInput.city.trim();
  const state = rawInput.state.trim();
  const category = rawInput.category.trim();
  const fieldErrors: PipelineInputFieldErrors = {};

  if (!city) {
    fieldErrors.city = "City is required.";
  }

  if (!state) {
    fieldErrors.state = "State is required.";
  }

  if (!category) {
    fieldErrors.category = "Category is required.";
  }

  let perQuery: number | undefined;
  let maxUrls: number | undefined;

  try {
    perQuery = parseOptionalNumber(rawInput.perQuery, "perQuery");
  } catch (error) {
    fieldErrors.perQuery = error instanceof Error ? error.message : "perQuery must be a valid number.";
  }

  try {
    maxUrls = parseOptionalNumber(rawInput.maxUrls, "maxUrls");
  } catch (error) {
    fieldErrors.maxUrls = error instanceof Error ? error.message : "maxUrls must be a valid number.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { ok: false, fieldErrors };
  }

  return {
    ok: true,
    value: {
      city,
      state,
      category,
      perQuery,
      maxUrls,
    },
    fieldErrors: {},
  };
}
