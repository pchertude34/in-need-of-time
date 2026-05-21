import React, { useMemo, useState } from "react";

import {
  buildFreshnessDiffSummary,
  getFreshnessEditorValue,
  type FreshnessDiffRow,
  type FreshnessDiffStatus,
  type FreshnessEditableFieldKey,
} from "../lib/freshnessDiff";
import type { FreshnessReviewCandidate } from "../types/freshness";
import type { SanityProviderCandidate } from "../types/pipeline";
import { displayValue, flattenDescription, formatList } from "./utils";

type ProviderDetailEditorProps = {
  candidate: SanityProviderCandidate;
  freshnessReview?: FreshnessReviewCandidate;
  onApprove: (candidate: SanityProviderCandidate) => Promise<void>;
  onDeny: (candidate: SanityProviderCandidate) => Promise<void>;
  onSave: (candidate: SanityProviderCandidate) => Promise<void>;
};

type LabeledFieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  className?: string;
  diffRows?: FreshnessDiffRow[];
  isKeptCurrent?: boolean;
  onKeepCurrent?: () => void;
};

const STATUS_LABELS: Record<FreshnessDiffStatus, string> = {
  changed: "Changed",
  missing_current: "Missing current",
  missing_proposed: "Missing proposed",
  uncertain: "Uncertain",
};

const STATUS_STYLES: Record<FreshnessDiffStatus, string> = {
  changed: "border-[#bfdbfe] bg-[#eff6ff] text-[#1d4ed8]",
  missing_current: "border-[#bbf7d0] bg-[#f0fdf4] text-[#15803d]",
  missing_proposed: "border-[#fed7aa] bg-[#fff7ed] text-[#c2410c]",
  uncertain: "border-[#fde68a] bg-[#fffbeb] text-[#a16207]",
};

function LabeledField({
  label,
  value,
  onChange,
  multiline,
  className,
  diffRows,
  isKeptCurrent,
  onKeepCurrent,
}: LabeledFieldProps) {
  const hasDiff = Boolean(diffRows?.length);
  const inputClass =
    "w-full px-3 rounded-lg border border-[1.5px] text-[14px] text-[#2d2d2d] bg-[#f8fafc] outline-none focus:border-[#2563eb] transition-colors";
  const diffInputClass = hasDiff ? "border-[#93c5fd] bg-[#f8fbff]" : "border-[#e2e8f0]";
  const firstDiffRow = diffRows?.[0];

  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <div className="flex min-h-[22px] flex-wrap items-center justify-between gap-2">
        <label className="text-[13px] font-medium text-[#475569]">{label}</label>
        {hasDiff && (
          <div className="flex flex-wrap items-center gap-1.5">
            {isKeptCurrent && (
              <span className="rounded-full border border-[#bbf7d0] bg-[#f0fdf4] px-2 py-0.5 text-[10px] font-semibold text-[#15803d]">
                Keeping current
              </span>
            )}
            {firstDiffRow && (
              <span
                className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${STATUS_STYLES[firstDiffRow.status]}`}
              >
                {firstDiffRow.confidenceLabel}
              </span>
            )}
            {(diffRows?.length ?? 0) > 1 && (
              <span className="rounded-full border border-[#dbeafe] bg-white px-2 py-0.5 text-[10px] font-semibold text-[#1d4ed8]">
                {diffRows?.length} changes
              </span>
            )}
          </div>
        )}
      </div>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={`${inputClass} ${diffInputClass} resize-none py-2`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} ${diffInputClass} h-[38px] py-0`}
        />
      )}
      {hasDiff && (
        <div className="flex items-center justify-between gap-2 rounded-md border border-[#dbeafe] bg-[#f8fbff] px-2.5 py-1.5">
          <p className="min-w-0 truncate text-[11px] text-[#475569]">Details are in the changes panel.</p>
          {onKeepCurrent && (
            <button
              type="button"
              onClick={onKeepCurrent}
              className="shrink-0 rounded-md border border-[#bfdbfe] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#1d4ed8] transition-colors hover:bg-[#eff6ff]"
            >
              Keep Current
            </button>
          )}
        </div>
      )}
    </div>
  );
}

type ActionStatus = "idle" | "saving" | "approved" | "saved" | "denied" | "error";

function textToDescriptionBlock(text: string): SanityProviderCandidate["description"] {
  return [
    {
      _type: "block",
      children: [{ _type: "span", text }],
      markDefs: [],
      style: "normal",
    },
  ];
}

function parseList(value: string): Array<{ _id: string }> {
  return value
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter((item) => item && item !== "Not provided")
    .map((_id) => ({ _id }));
}

function formatReason(value: string): string {
  return value.replace(/_/g, " ");
}

function DiagnosticsValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0">
      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#94a3b8]">{label}</p>
      <p className="mt-1 break-words text-[12px] leading-5 text-[#334155]">{value}</p>
    </div>
  );
}

function ReviewValue({ label, value }: { label: string; value: string }) {
  return (
    <div className="min-w-0 rounded-md border border-[#e2e8f0] bg-white px-2.5 py-2">
      <p className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#94a3b8]">{label}</p>
      <p className="mt-1 whitespace-pre-wrap break-words text-[11px] leading-4 text-[#334155]">{value}</p>
    </div>
  );
}

type FreshnessReviewRailProps = {
  review: FreshnessReviewCandidate;
  keptCurrentFields: Set<FreshnessEditableFieldKey>;
  onKeepCurrent: (fieldKey: FreshnessEditableFieldKey) => void;
};

function StaleChangeReviewRail({ review, keptCurrentFields, onKeepCurrent }: FreshnessReviewRailProps) {
  const diff = buildFreshnessDiffSummary(review);
  const changedCategories = diff.categories.filter((category) => category.changedCount > 0);
  const primaryLabel =
    review.reviewReason === "source_redirected"
      ? "Source redirected"
      : review.reviewReason === "uncertain"
        ? "Needs verification"
        : "Change detected";

  return (
    <aside className="flex min-w-0 flex-col gap-4 border-t border-[#e2e8f0] bg-[#f8fafc] px-5 py-4 xl:w-[340px] xl:border-l xl:border-t-0">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748b]">Review Confidence</p>
        <div className="mt-2 rounded-lg border border-[#dbeafe] bg-white px-3 py-2">
          <p className="text-[13px] font-bold text-[#0f172a]">{primaryLabel}</p>
          <p className="mt-1 text-[11px] capitalize text-[#64748b]">Reason: {formatReason(review.reviewReason)}</p>
        </div>
      </div>

      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748b]">Changed Categories</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {diff.categories.map((category) => (
            <span
              key={category.category}
              className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold ${
                category.changedCount
                  ? "border-[#bfdbfe] bg-[#eff6ff] text-[#1d4ed8]"
                  : "border-[#e2e8f0] bg-white text-[#64748b]"
              }`}
            >
              {category.category}
              {category.changedCount ? ` ${category.changedCount}` : " unchanged"}
            </span>
          ))}
        </div>
        {!changedCategories.length && (
          <p className="mt-2 text-[12px] text-[#64748b]">No field-level changes were detected.</p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748b]">Changes</p>
        {!diff.rows.length ? (
          <div className="rounded-lg border border-[#e2e8f0] bg-white px-3 py-2 text-[12px] text-[#64748b]">
            No changed fields to review.
          </div>
        ) : (
          diff.rows.map((row) => (
            <article key={row.id} className="rounded-lg border border-[#dbeafe] bg-[#f8fbff] p-3">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[12px] font-bold text-[#0f172a]">{row.field}</p>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#64748b]">{row.category}</p>
                </div>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${STATUS_STYLES[row.status]}`}
                >
                  {STATUS_LABELS[row.status]}
                </span>
              </div>
              <div className="grid gap-2">
                <ReviewValue label="Current" value={row.currentValue} />
                <ReviewValue label="Proposed" value={row.proposedValue} />
              </div>
              <button
                type="button"
                onClick={() => onKeepCurrent(row.fieldKey)}
                className="mt-2 w-full rounded-md border border-[#bfdbfe] bg-white px-2.5 py-1.5 text-[11px] font-semibold text-[#1d4ed8] transition-colors hover:bg-[#eff6ff]"
              >
                {keptCurrentFields.has(row.fieldKey) ? "Keeping Current" : "Keep Current"}
              </button>
            </article>
          ))
        )}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748b]">Source Diagnostics</p>
        <DiagnosticsValue label="Source" value={review.diagnostics.sourceUrl || "-"} />
        <DiagnosticsValue label="Final" value={review.diagnostics.finalUrl || "-"} />
        <DiagnosticsValue label="Scraper" value={review.diagnostics.scraperProvider || "-"} />
        <DiagnosticsValue
          label="Fetched"
          value={review.diagnostics.fetchedAt ? new Date(review.diagnostics.fetchedAt).toLocaleString() : "-"}
        />
      </div>
    </aside>
  );
}

export function ProviderDetailEditor({
  candidate,
  freshnessReview,
  onApprove,
  onDeny,
  onSave,
}: ProviderDetailEditorProps) {
  const [actionStatus, setActionStatus] = useState<ActionStatus>("idle");
  const [keptCurrentFields, setKeptCurrentFields] = useState<Set<FreshnessEditableFieldKey>>(() => new Set());
  const [name, setName] = useState(displayValue(candidate.name));
  const [address, setAddress] = useState(displayValue(candidate.address));
  const [phone, setPhone] = useState(displayValue(candidate.contact?.phone));
  const [email, setEmail] = useState(displayValue(candidate.contact?.email));
  const [website, setWebsite] = useState(displayValue(candidate.contact?.website));
  const [serviceTypes, setServiceTypes] = useState(formatList(candidate.serviceTypes.map((s) => s._id)));
  const [latitude, setLatitude] = useState(
    candidate.location?.latitude != null ? String(candidate.location.latitude) : "",
  );
  const [longitude, setLongitude] = useState(
    candidate.location?.longitude != null ? String(candidate.location.longitude) : "",
  );
  const [description, setDescription] = useState(flattenDescription(candidate.description ?? []));
  const [hours, setHours] = useState((candidate.hoursOfOperation?.weekdayText ?? []).join("\n"));
  const diffRowsByField = useMemo(() => {
    if (!freshnessReview) return new Map<FreshnessEditableFieldKey, FreshnessDiffRow[]>();
    const rowsByField = new Map<FreshnessEditableFieldKey, FreshnessDiffRow[]>();
    for (const row of buildFreshnessDiffSummary(freshnessReview).rows) {
      rowsByField.set(row.fieldKey, [...(rowsByField.get(row.fieldKey) ?? []), row]);
    }
    return rowsByField;
  }, [freshnessReview]);

  function markEdited(fieldKey: FreshnessEditableFieldKey) {
    setKeptCurrentFields((current) => {
      if (!current.has(fieldKey)) return current;
      const next = new Set(current);
      next.delete(fieldKey);
      return next;
    });
  }

  function keepCurrent(fieldKey: FreshnessEditableFieldKey) {
    if (!freshnessReview) return;
    setEditorFieldValue(fieldKey, getFreshnessEditorValue(freshnessReview.original, fieldKey));
    setKeptCurrentFields((current) => new Set(current).add(fieldKey));
  }

  function setEditorFieldValue(fieldKey: FreshnessEditableFieldKey, value: string) {
    switch (fieldKey) {
      case "name":
        setName(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "website":
        setWebsite(value);
        break;
      case "serviceTypes":
        setServiceTypes(value);
        break;
      case "latitude":
        setLatitude(value);
        break;
      case "longitude":
        setLongitude(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "hours":
        setHours(value);
        break;
    }
  }

  function fieldProps(fieldKey: FreshnessEditableFieldKey) {
    const diffRows = diffRowsByField.get(fieldKey);
    return {
      diffRows,
      isKeptCurrent: keptCurrentFields.has(fieldKey),
      onKeepCurrent: diffRows?.length ? () => keepCurrent(fieldKey) : undefined,
    };
  }

  function updateField(fieldKey: FreshnessEditableFieldKey, setter: (value: string) => void) {
    return (value: string) => {
      setter(value);
      markEdited(fieldKey);
    };
  }

  function buildEdited(): SanityProviderCandidate {
    return {
      ...candidate,
      name,
      address,
      contact: { phone, email, website },
      description: textToDescriptionBlock(description),
      serviceTypes: parseList(serviceTypes),
      location: {
        latitude: latitude ? Number(latitude) : null,
        longitude: longitude ? Number(longitude) : null,
      },
      hoursOfOperation: {
        ...candidate.hoursOfOperation,
        weekdayText: hours.split("\n").filter(Boolean),
        periods: candidate.hoursOfOperation?.periods ?? [],
      },
    };
  }

  const staleMode = Boolean(freshnessReview);
  const primaryGridClass = staleMode ? "grid gap-4" : "grid gap-4 md:grid-cols-2";
  const compactGridClass = staleMode ? "grid gap-4 lg:grid-cols-2" : "grid gap-4 md:grid-cols-3";

  return (
    <div className="flex min-w-0 flex-1 flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.03),0px_1px_3px_rgba(0,0,0,0.04)]">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 px-6 pb-3 pt-4">
        <div className="min-w-0">
          <h3 className="truncate text-[14px] font-bold text-black">{displayValue(candidate.name)}</h3>
          {candidate.contact?.website && displayValue(candidate.contact.website) !== "Not provided" && (
            <a
              href={displayValue(candidate.contact.website)}
              target="_blank"
              rel="noreferrer"
              className="block truncate text-[11px] text-[#2563eb] hover:underline"
            >
              {displayValue(candidate.contact.website)}
            </a>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            disabled={actionStatus === "saving"}
            onClick={async () => {
              setActionStatus("saving");
              try {
                await onApprove(buildEdited());
                setActionStatus("approved");
              } catch {
                setActionStatus("error");
              }
            }}
            className="rounded-lg border border-[1.5px] border-[#cafeca] bg-[#f2fef4] px-4 py-2 text-[14px] font-semibold text-[#16a34a] transition-colors hover:bg-emerald-50 disabled:opacity-50"
          >
            {actionStatus === "approved" ? "Approved ✓" : "Approve"}
          </button>
          <button
            type="button"
            disabled={actionStatus === "saving"}
            onClick={async () => {
              setActionStatus("saving");
              try {
                await onDeny(buildEdited());
                setActionStatus("denied");
              } catch {
                setActionStatus("error");
              }
            }}
            className="rounded-lg border border-[1.5px] border-[#fecaca] bg-[#fef2f2] px-4 py-2 text-[14px] font-semibold text-[#dc2626] transition-colors hover:bg-red-50 disabled:opacity-50"
          >
            {actionStatus === "denied" ? "Denied" : "Deny"}
          </button>
          <button
            type="button"
            disabled={actionStatus === "saving"}
            onClick={async () => {
              setActionStatus("saving");
              try {
                await onSave(buildEdited());
                setActionStatus("saved");
              } catch {
                setActionStatus("error");
              }
            }}
            className="rounded-lg bg-[#2563eb] px-4 py-2 text-[14px] font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 disabled:opacity-50"
          >
            {actionStatus === "saving" ? "Saving…" : actionStatus === "saved" ? "Saved ✓" : "Save Edits"}
          </button>
        </div>
      </div>

      {actionStatus === "error" && (
        <p className="px-6 pb-2 text-[12px] text-[#dc2626]">Save failed — check the browser console for details.</p>
      )}

      <div className="mx-6 h-px bg-[#e2e8f0]" />

      <div className="flex flex-col xl:flex-row">
        {/* Fields */}
        <div className="flex min-w-0 flex-1 flex-col gap-4 overflow-y-auto px-6 py-4">
          {/* Row 1 */}
          <div className={primaryGridClass}>
            <LabeledField label="Name" value={name} onChange={updateField("name", setName)} {...fieldProps("name")} />
            <LabeledField
              label="Address"
              value={address}
              onChange={updateField("address", setAddress)}
              {...fieldProps("address")}
            />
          </div>

          {/* Row 2 */}
          <div className={compactGridClass}>
            <LabeledField
              label="Phone"
              value={phone}
              onChange={updateField("phone", setPhone)}
              {...fieldProps("phone")}
            />
            <LabeledField
              label="Email"
              value={email}
              onChange={updateField("email", setEmail)}
              {...fieldProps("email")}
            />
            <LabeledField
              label="Website"
              value={website}
              onChange={updateField("website", setWebsite)}
              {...fieldProps("website")}
            />
          </div>

          {/* Row 3 */}
          <div className={compactGridClass}>
            <LabeledField
              label="Service Types"
              value={serviceTypes}
              onChange={updateField("serviceTypes", setServiceTypes)}
              {...fieldProps("serviceTypes")}
            />
            <LabeledField
              label="Latitude"
              value={latitude}
              onChange={updateField("latitude", setLatitude)}
              {...fieldProps("latitude")}
            />
            <LabeledField
              label="Longitude"
              value={longitude}
              onChange={updateField("longitude", setLongitude)}
              {...fieldProps("longitude")}
            />
          </div>

          {/* Row 4 */}
          <LabeledField
            label="Description"
            value={description}
            onChange={updateField("description", setDescription)}
            multiline
            {...fieldProps("description")}
          />

          {/* Row 5 */}
          <LabeledField
            label="Hours"
            value={hours}
            onChange={updateField("hours", setHours)}
            multiline
            {...fieldProps("hours")}
          />
        </div>

        {freshnessReview && (
          <StaleChangeReviewRail
            review={freshnessReview}
            keptCurrentFields={keptCurrentFields}
            onKeepCurrent={keepCurrent}
          />
        )}
      </div>
    </div>
  );
}
