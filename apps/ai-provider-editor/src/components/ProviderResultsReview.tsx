import type { CSSProperties } from "react";

import type { PipelineJob } from "../types/pipeline";
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

export function ProviderResultsReview({ job }: ProviderResultsReviewProps) {
  if (job.status !== "ready_for_review") return null;

  const candidates = job.output?.sanity ?? [];

  return (
    <section style={sectionStyle}>
      <div>
        <h2 style={{ margin: "0 0 6px" }}>Provider candidates</h2>
        <p style={{ margin: 0, color: "#555555" }}>
          {candidates.length} provider candidate{candidates.length === 1 ? "" : "s"} found.
        </p>
      </div>

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
