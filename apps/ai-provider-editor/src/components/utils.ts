import type { SanityBlock } from "../types/pipeline";

const NULLISH_VALUES = new Set([
  "",
  "null",
  '"null"',
  "'null'",
  "undefined",
  "none",
  "n/a",
  "na",
  "not available",
  "unknown",
]);

export function normalizeValue(value: unknown): string {
  if (typeof value !== "string") {
    if (value === null || value === undefined) return "";
    return String(value);
  }
  return value.trim();
}

export function displayValue(value: unknown): string {
  const normalized = normalizeValue(value);
  if (NULLISH_VALUES.has(normalized.toLowerCase())) return "Not provided";
  return normalized;
}

export function flattenDescription(description: SanityBlock[]): string {
  return description
    .flatMap((block) => block.children.map((child) => child.text))
    .map((text) => text.trim())
    .filter(Boolean)
    .join(" ");
}

export function formatList(values: string[]): string {
  const cleanValues = values.map((v) => displayValue(v)).filter((v) => v !== "Not provided");
  if (!cleanValues.length) return "Not provided";
  return cleanValues.join(", ");
}
