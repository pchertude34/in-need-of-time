import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useClient, useCurrentUser } from "@sanity/sdk-react";

import type { PipelineJob } from "../types/pipeline";
import { approvePipelineJob, denyPipelineJob } from "../lib/pipelineApi";
import { validateProviderCandidates, writeApprovedProvidersToSanity } from "../lib/sanityProviderWrite";
import { ProviderCandidateCard } from "./ProviderCandidateCard";

type ProviderResultsReviewProps = {
  job: PipelineJob;
  onJobUpdated: (job: PipelineJob) => void;
};

const SANITY_APP_API_VERSION = process.env.SANITY_APP_API_VERSION || "2024-03-09";

const sectionStyle: CSSProperties = {
  display: "grid",
  gap: "16px",
  maxWidth: "960px",
};

const listStyle: CSSProperties = {
  display: "grid",
  gap: "14px",
};

const editorStyle: CSSProperties = {
  width: "100%",
  minHeight: "360px",
  boxSizing: "border-box",
  padding: "12px",
  border: "1px solid #c8c8c8",
  borderRadius: "8px",
  font: '13px/1.45 ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',
  resize: "vertical",
};

const actionRowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  alignItems: "center",
};

const buttonStyle: CSSProperties = {
  minHeight: "38px",
  border: 0,
  borderRadius: "6px",
  padding: "8px 14px",
  background: "#171717",
  color: "#ffffff",
  cursor: "pointer",
  font: "inherit",
  fontWeight: 700,
};

const secondaryButtonStyle: CSSProperties = {
  ...buttonStyle,
  border: "1px solid #c8c8c8",
  background: "#ffffff",
  color: "#171717",
};

const dangerButtonStyle: CSSProperties = {
  ...buttonStyle,
  background: "#b42318",
};

const messageStyle: CSSProperties = {
  margin: 0,
  fontWeight: 700,
};

function formatCandidateJson(job: PipelineJob): string {
  return JSON.stringify(job.output?.sanity ?? [], null, 2);
}

function getReviewerName(user: ReturnType<typeof useCurrentUser>): string {
  return user?.email ?? user?.name ?? user?.id ?? "local-staff";
}

export function ProviderResultsReview({ job, onJobUpdated }: ProviderResultsReviewProps) {
  const client = useClient({ apiVersion: SANITY_APP_API_VERSION });
  const user = useCurrentUser();
  const [jsonText, setJsonText] = useState(() => formatCandidateJson(job));
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setJsonText(formatCandidateJson(job));
    setError(null);
    setSuccess(null);
  }, [job.id]);

  const parsedCandidates = useMemo(() => {
    try {
      return validateProviderCandidates(JSON.parse(jsonText));
    } catch {
      return null;
    }
  }, [jsonText]);

  if (job.status !== "ready_for_review") return null;

  const candidates = parsedCandidates ?? [];

  function validateJson() {
    try {
      const reviewedCandidates = validateProviderCandidates(JSON.parse(jsonText));
      setError(null);
      setSuccess(
        `${reviewedCandidates.length} provider candidate${reviewedCandidates.length === 1 ? "" : "s"} validated.`,
      );
      return reviewedCandidates;
    } catch (error) {
      setSuccess(null);
      setError(error instanceof Error ? error.message : String(error));
      return null;
    }
  }

  async function handleApprove() {
    const reviewedCandidates = validateJson();
    if (!reviewedCandidates) return;
    if (!reviewedCandidates.length) {
      setSuccess(null);
      setError("There must be at least one reviewed provider candidate before approval.");
      return;
    }

    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const writeResults = await writeApprovedProvidersToSanity(client, reviewedCandidates, job);
      const approvedJob = await approvePipelineJob(job.id, getReviewerName(user));

      onJobUpdated({
        ...approvedJob,
        output: approvedJob.output ? { ...approvedJob.output, sanity: reviewedCandidates } : approvedJob.output,
        sanityDocumentIds: writeResults.map((result) => result.documentId),
      });

      const createdCount = writeResults.filter((result) => result.action === "created").length;
      const updatedCount = writeResults.filter((result) => result.action === "updated").length;
      setSuccess(
        `Approved and wrote ${createdCount} new / ${updatedCount} existing provider document${writeResults.length === 1 ? "" : "s"} to Sanity.`,
      );
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  async function handleDeny() {
    setIsSubmitting(true);
    setError(null);
    setSuccess(null);

    try {
      const deniedJob = await denyPipelineJob(job.id, getReviewerName(user));
      onJobUpdated(deniedJob);
      setSuccess("Denied provider output. Sanity was not changed.");
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section style={sectionStyle}>
      <div>
        <h2 style={{ margin: "0 0 6px" }}>Review provider JSON</h2>
        <p style={{ margin: 0, color: "#555555" }}>
          Edit the generated provider array before approval. The approved JSON is what gets written to Sanity.
        </p>
      </div>

      <textarea
        aria-label="Editable provider JSON"
        style={editorStyle}
        value={jsonText}
        spellCheck={false}
        onChange={(event) => {
          setJsonText(event.target.value);
          setError(null);
          setSuccess(null);
        }}
      />

      <div style={actionRowStyle}>
        <button style={secondaryButtonStyle} type="button" onClick={validateJson} disabled={isSubmitting}>
          Validate JSON
        </button>
        <button style={buttonStyle} type="button" onClick={handleApprove} disabled={isSubmitting}>
          {isSubmitting ? "Working..." : "Approve and write to Sanity"}
        </button>
        <button style={dangerButtonStyle} type="button" onClick={handleDeny} disabled={isSubmitting}>
          Deny
        </button>
      </div>

      {error ? <p style={{ ...messageStyle, color: "#b42318" }}>{error}</p> : null}
      {success ? <p style={{ ...messageStyle, color: "#027a48" }}>{success}</p> : null}

      <div>
        <h2 style={{ margin: "0 0 6px" }}>Provider preview</h2>
        <p style={{ margin: 0, color: "#555555" }}>
          {candidates.length} valid provider candidate{candidates.length === 1 ? "" : "s"} in the reviewed JSON.
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
