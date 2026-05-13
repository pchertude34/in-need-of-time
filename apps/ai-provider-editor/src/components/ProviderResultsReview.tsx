import { useState } from "react";
import { useClient } from "@sanity/sdk-react";

import type { HoursPeriod, PipelineJob, SanityBlock, SanityProviderCandidate } from "../types/pipeline";
import { ProviderListCard } from "./ProviderCandidateCard";
import { ProviderDetailEditor } from "./ProviderDetailEditor";

type ProviderResultsReviewProps = {
  job: PipelineJob;
};

function toProviderDoc(c: SanityProviderCandidate, serviceTypeMap: Map<string, string>, id: string) {
  const doc: Record<string, unknown> = {
    _type: "provider",
    _id: id,
    title: c.name,
    address: c.address,
    description: c.description?.map((block: SanityBlock, i: number) => ({
      ...block,
      _key: (block as SanityBlock & { _key?: string })._key ?? `block-${i}`,
    })),
  };

  const place: Record<string, unknown> = {
    name: c.name,
    address: c.address,
  };
  if (c.location?.latitude !== null && c.location?.longitude !== null) {
    place.location = { _type: "geopoint", lat: c.location.latitude, lng: c.location.longitude };
    doc.location = { _type: "geopoint", lat: c.location.latitude, lng: c.location.longitude };
  }
  doc.place = place;

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
    doc.hoursOfOperation = c.hoursOfOperation.periods.map((p: HoursPeriod, i: number) => ({
      _key: `hr-${i}`,
      open: p.open,
      close: p.close,
    }));
  }

  const contact: Record<string, string> = {};
  if (c.contact?.phone) contact.phone = c.contact.phone;
  if (c.contact?.website) contact.website = c.contact.website;
  if (c.contact?.email) contact.email = c.contact.email;
  if (Object.keys(contact).length) doc.publicContact = contact;

  return doc;
}

export function ProviderResultsReview({ job }: ProviderResultsReviewProps) {
  const client = useClient({ apiVersion: "2024-03-09" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (job.status !== "ready_for_review") return null;

  const candidates: SanityProviderCandidate[] = job.output?.sanity ?? [];

  if (!candidates.length) {
    return (
      <section className="py-12 text-center text-[#64748b]">
        <p className="text-[15px]">No provider candidates found for this job.</p>
      </section>
    );
  }

  const selected = candidates[selectedIndex];

  async function saveToSanity(candidate: SanityProviderCandidate) {
    const serviceTypeDocs = await client.fetch<Array<{ _id: string; name: string }>>(
      '*[_type == "serviceType"]{ _id, name }',
    );
    const serviceTypeMap = new Map(serviceTypeDocs.filter((d) => d.name).map((d) => [d.name.toLowerCase(), d._id]));
    const id = `${job.id}-${selectedIndex}`;
    const doc = toProviderDoc(candidate, serviceTypeMap, id);
    await client.createOrReplace(doc);
  }

  async function handleApprove(candidate: SanityProviderCandidate) {
    await saveToSanity(candidate);
  }

  function handleDeny(_candidate: SanityProviderCandidate) {
    // Deny = skip this candidate, no Sanity write
  }

  async function handleSave(candidate: SanityProviderCandidate) {
    await saveToSanity(candidate);
  }

  return (
    <section className="flex flex-col gap-6">
      {/* Section title */}
      <div className="flex flex-col items-center gap-2 py-4">
        <h2 className="text-[28px] font-bold tracking-tight text-[#0f172a]">Review Job</h2>
        <p className="text-[14px] text-[#64748b]">Readable view of agent output</p>
      </div>

      {/* Two-panel layout */}
      <div className="flex items-start gap-4">
        {/* Left: provider list */}
        <div className="w-[277px] shrink-0 overflow-hidden rounded-xl border border-[#e2e8f0] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.03),0px_1px_3px_rgba(0,0,0,0.04)]">
          <div className="px-4 pb-2 pt-4">
            <p className="text-[14px] font-bold text-black">Providers</p>
            <p className="mt-0.5 text-[10px] text-[#94a3b8]">{candidates.length} item(s)</p>
          </div>
          <div className="mx-4 mb-2 h-px bg-[#d9d9d9]" />
          <div className="flex max-h-[560px] flex-col gap-2 overflow-y-auto px-3 pb-3">
            {candidates.map((candidate, i) => (
              <ProviderListCard
                key={i}
                candidate={candidate}
                isSelected={i === selectedIndex}
                onClick={() => setSelectedIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Right: detail editor */}
        {selected && (
          <ProviderDetailEditor
            key={selectedIndex}
            candidate={selected}
            onApprove={handleApprove}
            onDeny={handleDeny}
            onSave={handleSave}
          />
        )}
      </div>
    </section>
  );
}
