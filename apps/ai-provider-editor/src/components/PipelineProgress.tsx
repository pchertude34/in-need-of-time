import type { CSSProperties } from "react";

import type { PipelineJob } from "../types/pipeline";

type PipelineProgressProps = {
  job: PipelineJob | null;
};

const panelStyle: CSSProperties = {
  display: "grid",
  gap: "12px",
  maxWidth: "720px",
  padding: "20px",
  border: "1px solid #d9d9d9",
  borderRadius: "8px",
  background: "#ffffff",
};

const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "minmax(120px, max-content) 1fr",
  gap: "8px 14px",
  margin: 0,
};

const termStyle: CSSProperties = {
  color: "#5f5f5f",
  fontWeight: 700,
};

const statusStyle: CSSProperties = {
  display: "inline-flex",
  width: "fit-content",
  borderRadius: "999px",
  padding: "3px 10px",
  background: "#eeeeee",
  color: "#171717",
  fontWeight: 700,
};

function formatDate(value: string): string {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return date.toLocaleString();
}

export function PipelineProgress({ job }: PipelineProgressProps) {
  if (!job) {
    return (
      <section style={panelStyle}>
        <h2 style={{ margin: 0 }}>Pipeline status</h2>
        <p style={{ margin: 0, color: "#555555" }}>No active job yet.</p>
      </section>
    );
  }

  return (
    <section style={panelStyle}>
      <h2 style={{ margin: 0 }}>Pipeline status</h2>
      <dl style={gridStyle}>
        <dt style={termStyle}>Job ID</dt>
        <dd style={{ margin: 0, overflowWrap: "anywhere" }}>{job.id}</dd>

        <dt style={termStyle}>Status</dt>
        <dd style={{ margin: 0 }}>
          <span style={statusStyle}>{job.status}</span>
        </dd>

        <dt style={termStyle}>Created</dt>
        <dd style={{ margin: 0 }}>{formatDate(job.createdAt)}</dd>

        <dt style={termStyle}>Updated</dt>
        <dd style={{ margin: 0 }}>{formatDate(job.updatedAt)}</dd>
      </dl>

      {job.error ? <p style={{ margin: 0, color: "#b42318", fontWeight: 700 }}>{job.error}</p> : null}
    </section>
  );
}
