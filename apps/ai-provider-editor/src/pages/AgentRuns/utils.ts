import type { BadgeProps } from "@in-need-of-time/ui";
import type { AgentJobStatus } from "./types";

const STATUS_BADGE_VARIANTS: Record<AgentJobStatus, BadgeProps["variant"]> = {
  PENDING: "default",
  COMPLETED: "success",
  FAILED: "error",
};

const TIMESTAMP_FORMAT: Intl.DateTimeFormatOptions = {
  month: "short",
  day: "numeric",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
};

export function getStatusVariant(status: AgentJobStatus): BadgeProps["variant"] {
  return STATUS_BADGE_VARIANTS[status] ?? "default";
}

// Timestamps arrive as ISO strings. An unparseable one is shown as-is rather
// than as "Invalid Date".
export function formatTimestamp(timestamp: string) {
  const date = new Date(timestamp);

  if (Number.isNaN(date.getTime())) {
    return timestamp;
  }

  return date.toLocaleString(undefined, TIMESTAMP_FORMAT);
}
