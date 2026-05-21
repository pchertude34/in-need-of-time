import type { FreshnessReviewCandidate } from "../types/freshness";
import type { SanityProviderCandidate } from "../types/pipeline";
import { displayValue, flattenDescription, formatList } from "../components/utils";

export type FreshnessDiffCategory = "Identity" | "Contact" | "Location" | "Services" | "Hours";
export type FreshnessDiffStatus = "changed" | "missing_current" | "missing_proposed" | "uncertain";
export type FreshnessEditableFieldKey =
  | "name"
  | "address"
  | "phone"
  | "email"
  | "website"
  | "serviceTypes"
  | "latitude"
  | "longitude"
  | "description"
  | "hours";

export type FreshnessConfidenceLabel =
  | "Change detected"
  | "Needs verification"
  | "Source redirected"
  | "Review before approving";

export type FreshnessDiffRow = {
  id: string;
  category: FreshnessDiffCategory;
  field: string;
  fieldKey: FreshnessEditableFieldKey;
  currentValue: string;
  proposedValue: string;
  currentEditorValue: string;
  proposedEditorValue: string;
  status: FreshnessDiffStatus;
  confidenceLabel: FreshnessConfidenceLabel;
};

export type FreshnessDiffCategorySummary = {
  category: FreshnessDiffCategory;
  changedCount: number;
};

export type FreshnessDiffSummary = {
  rows: FreshnessDiffRow[];
  categories: FreshnessDiffCategorySummary[];
};

type FieldDefinition = {
  category: FreshnessDiffCategory;
  field: string;
  fieldKey: FreshnessEditableFieldKey;
  getValue: (candidate: SanityProviderCandidate) => string;
};

const CATEGORIES: FreshnessDiffCategory[] = ["Identity", "Contact", "Location", "Services", "Hours"];

const FIELD_DEFINITIONS: FieldDefinition[] = [
  {
    category: "Identity",
    field: "Name",
    fieldKey: "name",
    getValue: (candidate) => displayValue(candidate.name),
  },
  {
    category: "Identity",
    field: "Description",
    fieldKey: "description",
    getValue: (candidate) => displayValue(flattenDescription(candidate.description ?? [])),
  },
  {
    category: "Contact",
    field: "Phone",
    fieldKey: "phone",
    getValue: (candidate) => displayValue(candidate.contact?.phone),
  },
  {
    category: "Contact",
    field: "Email",
    fieldKey: "email",
    getValue: (candidate) => displayValue(candidate.contact?.email),
  },
  {
    category: "Contact",
    field: "Website",
    fieldKey: "website",
    getValue: (candidate) => displayValue(candidate.contact?.website),
  },
  {
    category: "Location",
    field: "Address",
    fieldKey: "address",
    getValue: (candidate) => displayValue(candidate.address),
  },
  {
    category: "Location",
    field: "Latitude",
    fieldKey: "latitude",
    getValue: (candidate) => displayCoordinate(candidate.location?.latitude),
  },
  {
    category: "Location",
    field: "Longitude",
    fieldKey: "longitude",
    getValue: (candidate) => displayCoordinate(candidate.location?.longitude),
  },
  {
    category: "Services",
    field: "Service Types",
    fieldKey: "serviceTypes",
    getValue: (candidate) => formatList((candidate.serviceTypes ?? []).map((serviceType) => serviceType._id)),
  },
  {
    category: "Hours",
    field: "Hours",
    fieldKey: "hours",
    getValue: (candidate) => displayHours(candidate),
  },
];

function displayCoordinate(value: number | null | undefined): string {
  return value == null ? "Not provided" : String(value);
}

function displayHours(candidate: SanityProviderCandidate): string {
  const weekdayText = candidate.hoursOfOperation?.weekdayText ?? [];
  if (weekdayText.length) return weekdayText.join("\n");

  const periods = candidate.hoursOfOperation?.periods ?? [];
  if (periods.length) {
    return periods
      .map((period) => `Day ${period.open.day} ${period.open.time} - day ${period.close.day} ${period.close.time}`)
      .join("\n");
  }

  return "Not provided";
}

function hasValue(value: string): boolean {
  return value !== "Not provided";
}

function getStatus(review: FreshnessReviewCandidate, currentValue: string, proposedValue: string): FreshnessDiffStatus {
  if (!hasValue(currentValue) && hasValue(proposedValue)) return "missing_current";
  if (hasValue(currentValue) && !hasValue(proposedValue)) return "missing_proposed";
  if (review.reviewReason === "uncertain") return "uncertain";
  return "changed";
}

export function getFreshnessEditorValue(
  candidate: SanityProviderCandidate,
  fieldKey: FreshnessEditableFieldKey,
): string {
  switch (fieldKey) {
    case "name":
      return displayValue(candidate.name);
    case "address":
      return displayValue(candidate.address);
    case "phone":
      return displayValue(candidate.contact?.phone);
    case "email":
      return displayValue(candidate.contact?.email);
    case "website":
      return displayValue(candidate.contact?.website);
    case "serviceTypes":
      return formatList((candidate.serviceTypes ?? []).map((serviceType) => serviceType._id));
    case "latitude":
      return candidate.location?.latitude != null ? String(candidate.location.latitude) : "";
    case "longitude":
      return candidate.location?.longitude != null ? String(candidate.location.longitude) : "";
    case "description":
      return flattenDescription(candidate.description ?? []);
    case "hours":
      return (candidate.hoursOfOperation?.weekdayText ?? []).join("\n");
  }
}

function getConfidenceLabel(review: FreshnessReviewCandidate, status: FreshnessDiffStatus): FreshnessConfidenceLabel {
  if (status === "missing_proposed") return "Review before approving";
  if (review.reviewReason === "source_redirected") return "Source redirected";
  if (review.reviewReason === "uncertain" || status === "uncertain") return "Needs verification";
  return "Change detected";
}

function addRow(
  rows: FreshnessDiffRow[],
  review: FreshnessReviewCandidate,
  definition: FieldDefinition,
  currentValue: string,
  proposedValue: string,
): void {
  if (currentValue === proposedValue) return;
  const status = getStatus(review, currentValue, proposedValue);

  rows.push({
    id: definition.fieldKey,
    category: definition.category,
    field: definition.field,
    fieldKey: definition.fieldKey,
    currentValue,
    proposedValue,
    currentEditorValue: getFreshnessEditorValue(review.original, definition.fieldKey),
    proposedEditorValue: getFreshnessEditorValue(review.candidate, definition.fieldKey),
    status,
    confidenceLabel: getConfidenceLabel(review, status),
  });
}

function addRedirectRow(rows: FreshnessDiffRow[], review: FreshnessReviewCandidate): void {
  if (review.reviewReason !== "source_redirected") return;

  const sourceUrl = displayValue(review.diagnostics.sourceUrl);
  const finalUrl = displayValue(review.diagnostics.finalUrl);
  if (sourceUrl === finalUrl) return;

  rows.push({
    id: "sourceUrl",
    category: "Contact",
    field: "Source URL",
    fieldKey: "website",
    currentValue: sourceUrl,
    proposedValue: finalUrl,
    currentEditorValue: getFreshnessEditorValue(review.original, "website"),
    proposedEditorValue: getFreshnessEditorValue(review.candidate, "website"),
    status: "changed",
    confidenceLabel: "Source redirected",
  });
}

export function buildFreshnessDiffSummary(review: FreshnessReviewCandidate): FreshnessDiffSummary {
  const rows: FreshnessDiffRow[] = [];

  for (const definition of FIELD_DEFINITIONS) {
    addRow(rows, review, definition, definition.getValue(review.original), definition.getValue(review.candidate));
  }

  addRedirectRow(rows, review);

  return {
    rows,
    categories: CATEGORIES.map((category) => ({
      category,
      changedCount: rows.filter((row) => row.category === category).length,
    })),
  };
}
