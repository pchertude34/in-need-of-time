import React from "react";
import { Badge } from "@in-need-of-time/ui";
import { cn } from "@in-need-of-time/utils";
import type { ConfidenceLevel } from "./types";

const CONFIDENCE_DISPLAY: Record<ConfidenceLevel, { label: string; className: string }> = {
  very_low: { label: "Not found", className: "border-slate-200 bg-slate-100 text-slate-600" },
  low: { label: "Low confidence", className: "border-red-200 bg-red-50 text-red-700" },
  medium: { label: "Medium confidence", className: "border-amber-200 bg-amber-50 text-amber-700" },
  high: { label: "High confidence", className: "border-sky-200 bg-sky-50 text-sky-700" },
  very_high: { label: "Very high confidence", className: "border-green-200 bg-green-50 text-green-700" },
};

type ConfidenceBadgeProps = {
  confidence: ConfidenceLevel;
  className?: string;
};

export function ConfidenceBadge(props: ConfidenceBadgeProps) {
  const { confidence, className } = props;
  const { label, className: variantClassName } = CONFIDENCE_DISPLAY[confidence];

  return <Badge className={cn("font-medium", variantClassName, className)}>{label}</Badge>;
}
