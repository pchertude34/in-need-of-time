import { useState } from "react";

import type { SanityProviderCandidate } from "../types/pipeline";
import { displayValue, flattenDescription, formatList } from "./utils";

type ProviderDetailEditorProps = {
  candidate: SanityProviderCandidate;
  onApprove: (candidate: SanityProviderCandidate) => Promise<void>;
  onDeny: (candidate: SanityProviderCandidate) => void;
  onSave: (candidate: SanityProviderCandidate) => Promise<void>;
};

type LabeledFieldProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  className?: string;
};

function LabeledField({ label, value, onChange, multiline, className }: LabeledFieldProps) {
  const inputClass =
    "w-full px-3 rounded-lg border border-[#e2e8f0] border-[1.5px] text-[14px] text-[#2d2d2d] bg-[#f8fafc] outline-none focus:border-[#2563eb] transition-colors";

  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <label className="text-[13px] font-medium text-[#475569]">{label}</label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className={`${inputClass} resize-none py-2`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputClass} h-[38px] py-0`}
        />
      )}
    </div>
  );
}

type ActionStatus = "idle" | "saving" | "approved" | "saved" | "denied" | "error";

export function ProviderDetailEditor({ candidate, onApprove, onDeny, onSave }: ProviderDetailEditorProps) {
  const [actionStatus, setActionStatus] = useState<ActionStatus>("idle");
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

  function buildEdited(): SanityProviderCandidate {
    return {
      ...candidate,
      name,
      address,
      contact: { phone, email, website },
      description: candidate.description,
      serviceTypes: candidate.serviceTypes,
      location: {
        latitude: latitude ? Number(latitude) : null,
        longitude: longitude ? Number(longitude) : null,
      },
      hoursOfOperation: {
        ...candidate.hoursOfOperation,
        weekdayText: hours.split("\n").filter(Boolean),
      },
    };
  }

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
            onClick={() => {
              onDeny(buildEdited());
              setActionStatus("denied");
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

      {/* Fields */}
      <div className="flex flex-1 flex-col gap-4 overflow-y-auto px-6 py-4">
        {/* Row 1 */}
        <div className="grid grid-cols-2 gap-4">
          <LabeledField label="Name" value={name} onChange={setName} />
          <LabeledField label="Address" value={address} onChange={setAddress} />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-4">
          <LabeledField label="Phone" value={phone} onChange={setPhone} />
          <LabeledField label="Email" value={email} onChange={setEmail} />
          <LabeledField label="Website" value={website} onChange={setWebsite} />
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-3 gap-4">
          <LabeledField label="Service Types" value={serviceTypes} onChange={setServiceTypes} />
          <LabeledField label="Latitude" value={latitude} onChange={setLatitude} />
          <LabeledField label="Longitude" value={longitude} onChange={setLongitude} />
        </div>

        {/* Row 4 */}
        <LabeledField label="Description" value={description} onChange={setDescription} multiline />

        {/* Row 5 */}
        <LabeledField label="Hours" value={hours} onChange={setHours} multiline />
      </div>
    </div>
  );
}
