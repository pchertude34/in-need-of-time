import type { CSSProperties } from "react";

import type { SanityBlock, SanityProviderCandidate } from "../types/pipeline";

type ProviderCandidateCardProps = {
  candidate: SanityProviderCandidate;
};

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

const cardStyle: CSSProperties = {
  display: "grid",
  gap: "16px",
  padding: "18px",
  border: "1px solid #d9d9d9",
  borderRadius: "8px",
  background: "#ffffff",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(130px, max-content) 1fr",
  gap: "8px 14px",
  margin: 0,
};

const termStyle: CSSProperties = {
  color: "#5f5f5f",
  fontWeight: 700,
};

function normalizeValue(value: unknown): string {
  if (typeof value !== "string") {
    if (value === null || value === undefined) return "";
    return String(value);
  }

  return value.trim();
}

function displayValue(value: unknown): string {
  const normalized = normalizeValue(value);
  if (NULLISH_VALUES.has(normalized.toLowerCase())) return "Not provided";

  return normalized;
}

function flattenDescription(description: SanityBlock[]): string {
  return description
    .flatMap((block) => block.children.map((child) => child.text))
    .map((text) => text.trim())
    .filter(Boolean)
    .join(" ");
}

function formatList(values: string[]): string {
  const cleanValues = values.map((value) => displayValue(value)).filter((value) => value !== "Not provided");

  if (!cleanValues.length) return "Not provided";

  return cleanValues.join(", ");
}

function formatCoordinates(candidate: SanityProviderCandidate): string {
  const latitude = candidate.location?.latitude;
  const longitude = candidate.location?.longitude;

  if (latitude === null && longitude === null) return "Not provided";

  return `${displayValue(latitude)} / ${displayValue(longitude)}`;
}

function isDisplayableUrl(value: string): boolean {
  return displayValue(value) !== "Not provided";
}

export function ProviderCandidateCard({ candidate }: ProviderCandidateCardProps) {
  const website = displayValue(candidate.contact?.website);
  const serviceTypeIds = candidate.serviceTypes.map((serviceType) => serviceType._id);
  const weekdayHours = candidate.hoursOfOperation?.weekdayText ?? [];
  const description = flattenDescription(candidate.description ?? []);

  return (
    <article style={cardStyle}>
      <header>
        <h3 style={{ margin: "0 0 6px" }}>{displayValue(candidate.name)}</h3>
        <p style={{ margin: 0, color: "#555555" }}>{displayValue(candidate.address)}</p>
      </header>

      <dl style={gridStyle}>
        <dt style={termStyle}>Phone</dt>
        <dd style={{ margin: 0 }}>{displayValue(candidate.contact?.phone)}</dd>

        <dt style={termStyle}>Email</dt>
        <dd style={{ margin: 0 }}>{displayValue(candidate.contact?.email)}</dd>

        <dt style={termStyle}>Website</dt>
        <dd style={{ margin: 0, overflowWrap: "anywhere" }}>
          {isDisplayableUrl(website) ? (
            <a href={website} target="_blank" rel="noreferrer">
              {website}
            </a>
          ) : (
            "Not provided"
          )}
        </dd>

        <dt style={termStyle}>Description</dt>
        <dd style={{ margin: 0 }}>{displayValue(description)}</dd>

        <dt style={termStyle}>Service types</dt>
        <dd style={{ margin: 0 }}>{formatList(serviceTypeIds)}</dd>

        <dt style={termStyle}>Hours</dt>
        <dd style={{ margin: 0 }}>{formatList(weekdayHours)}</dd>

        <dt style={termStyle}>Latitude / longitude</dt>
        <dd style={{ margin: 0 }}>{formatCoordinates(candidate)}</dd>
      </dl>
    </article>
  );
}
