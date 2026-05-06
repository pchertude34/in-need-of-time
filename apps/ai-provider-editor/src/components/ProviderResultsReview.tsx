import { useState } from "react";
import type { CSSProperties } from "react";
import { useClient } from "@sanity/sdk-react";

import type { PipelineJob, SanityProviderCandidate } from "../types/pipeline";
import { ProviderCandidateCard } from "./ProviderCandidateCard";

type ProviderResultsReviewProps = {
  job: PipelineJob;
};

const sectionStyle: CSSProperties = {
  display: "grid",
  gap: "16px",
  maxWidth: "960px",
};

const listStyle: CSSProperties = {
  display: "grid",
  gap: "14px",
};

function toProviderDoc(c: SanityProviderCandidate, serviceTypeMap: Map<string, string>) {
  const doc: Record<string, unknown> = {
    _type: "provider",
    _id: crypto.randomUUID(),
    title: c.name,
    description: c.description,
    address: c.address,
  };

  if (c.location.latitude !== null && c.location.longitude !== null) {
    doc.location = { _type: "geopoint", lat: c.location.latitude, lng: c.location.longitude };
  }

  if (c.serviceTypes?.length) {
    const refs = c.serviceTypes
      .map((s, i) => {
        const normalized = s._id.replace(/_/g, " ").toLowerCase();
        const ref = serviceTypeMap.get(normalized);
        if (!ref) return null;
        return { _key: `st-${i}`, _type: "reference", _ref: ref };
      })
      .filter(Boolean);
    if (refs.length) doc.serviceTypes = refs;
  }

  if (c.hoursOfOperation?.periods?.length) {
    doc.hoursOfOperation = c.hoursOfOperation.periods.map((p, i) => ({
      _key: `hr-${i}`,
      open: p.open,
      close: p.close,
    }));
  }

  const contact: Record<string, string> = {};
  if (c.contact.phone) contact.phone = c.contact.phone;
  if (c.contact.website) contact.website = c.contact.website;
  if (c.contact.email) contact.email = c.contact.email;
  if (Object.keys(contact).length) doc.publicContact = contact;

  return doc;
}

export function ProviderResultsReview({ job }: ProviderResultsReviewProps) {
  const client = useClient({ apiVersion: "2024-03-09" });
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "done">("idle");
  const [savedCount, setSavedCount] = useState(0);
  const [failedCount, setFailedCount] = useState(0);

  if (job.status !== "ready_for_review") return null;

  const candidates = job.output?.sanity ?? [];

  async function handleSave() {
    setSaveStatus("saving");

    const serviceTypeDocs = await client.fetch<Array<{ _id: string; title: string }>>(
      '*[_type == "serviceType"]{ _id, title }',
    );
    const serviceTypeMap = new Map(serviceTypeDocs.filter((d) => d.title).map((d) => [d.title.toLowerCase(), d._id]));

    let saved = 0;
    let failed = 0;
    for (const candidate of candidates) {
      const doc = toProviderDoc(candidate, serviceTypeMap);
      try {
        await client.createOrReplace(doc);
        saved++;
      } catch {
        failed++;
      }
    }
    setSavedCount(saved);
    setFailedCount(failed);
    setSaveStatus("done");
  }

  return (
    <section style={sectionStyle}>
      <div>
        <h2 style={{ margin: "0 0 6px" }}>Provider candidates</h2>
        <p style={{ margin: 0, color: "#555555" }}>
          {candidates.length} provider candidate{candidates.length === 1 ? "" : "s"} found.
        </p>
      </div>

      {candidates.length > 0 && (
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={handleSave} disabled={saveStatus === "saving" || saveStatus === "done"}>
            {saveStatus === "saving" ? "Saving…" : "Save to Sanity"}
          </button>
          {saveStatus === "done" && (
            <span style={{ color: failedCount ? "#c00" : "#080" }}>
              {savedCount} saved{failedCount ? `, ${failedCount} failed` : ""}
            </span>
          )}
        </div>
      )}

      {candidates.length ? (
        <div style={listStyle}>
          {candidates.map((candidate, index) => (
            <ProviderCandidateCard key={`${candidate.name || "provider"}-${index}`} candidate={candidate} />
          ))}
        </div>
      ) : (
        <p style={{ margin: 0 }}>No provider candidates were returned.</p>
      )}
    </section>
  );
}
