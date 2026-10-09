import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Field, FieldDescription, FieldError, FieldLabel } from "@in-need-of-time/ui";
import { ConfidenceBadge } from "./ConfidenceBadge";
import type { ConfidenceLevel } from "../../types";

type ProviderFieldProps = {
  label: string;
  htmlFor?: string;
  confidence?: ConfidenceLevel;
  sourceUrl?: string | null;
  description?: string;
  /** A validation message for this field. Rendered below it, and colours the label. */
  error?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * A labelled form field that also surfaces the two things the agent attaches to
 * every value it extracts: how confident it is, and the page it came from.
 */
export function ProviderField(props: ProviderFieldProps) {
  const { label, htmlFor, confidence, sourceUrl, description, error, className, children } = props;

  return (
    <Field className={className} data-invalid={error ? "true" : undefined}>
      <div className="flex flex-wrap items-center gap-2">
        <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>
        {confidence && <ConfidenceBadge confidence={confidence} />}
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary-600 hover:text-primary-700 ml-auto inline-flex items-center gap-1 text-xs underline underline-offset-4"
          >
            Source
            <ArrowTopRightOnSquareIcon className="h-3 w-3" />
          </a>
        )}
      </div>
      {children}
      {description && <FieldDescription className="text-slate-400">{description}</FieldDescription>}
      <FieldError>{error}</FieldError>
    </Field>
  );
}
