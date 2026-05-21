import { Activity, CheckCircle2, Circle, Clock, Loader2 } from "lucide-react";

import type { PipelineJob } from "../types/pipeline";

type AppSidebarProps = {
  job: PipelineJob | null;
  onNewJob: () => void;
};

function StatusBadge({ status }: { status: PipelineJob["status"] }) {
  const configs: Record<PipelineJob["status"], { label: string; className: string; icon: React.ReactNode }> = {
    queued: {
      label: "Queued",
      className: "bg-slate-100 text-slate-600",
      icon: <Clock className="h-3 w-3" />,
    },
    running: {
      label: "Running",
      className: "bg-blue-50 text-blue-600",
      icon: <Loader2 className="h-3 w-3 animate-spin" />,
    },
    ready_for_review: {
      label: "Ready",
      className: "bg-emerald-50 text-emerald-600",
      icon: <CheckCircle2 className="h-3 w-3" />,
    },
    approved: {
      label: "Approved",
      className: "bg-emerald-50 text-emerald-600",
      icon: <CheckCircle2 className="h-3 w-3" />,
    },
    denied: {
      label: "Denied",
      className: "bg-slate-100 text-slate-500",
      icon: <Circle className="h-3 w-3" />,
    },
    failed: {
      label: "Failed",
      className: "bg-red-50 text-red-600",
      icon: <Circle className="h-3 w-3" />,
    },
  };

  const config = configs[status] ?? configs.queued;

  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-medium ${config.className}`}
    >
      {config.icon}
      {config.label}
    </span>
  );
}

function JobCard({ job }: { job: PipelineJob }) {
  const label = [job.input.city, job.input.state, job.input.category].filter(Boolean).join(", ");

  return (
    <div className="mx-3 rounded-lg border border-l-2 border-[#e2e8f0] border-l-[#4ab7c6] bg-white px-3 py-2.5">
      <div className="mb-1 flex items-center justify-between gap-2">
        <p className="flex-1 truncate text-[13px] font-medium text-[#0f172a]">{label || "Pipeline job"}</p>
        <StatusBadge status={job.status} />
      </div>
      <p className="truncate font-mono text-[11px] text-[#94a3b8]">{job.id ? job.id.slice(0, 16) + "…" : "—"}</p>
    </div>
  );
}

export function AppSidebar({ job, onNewJob }: AppSidebarProps) {
  return (
    <aside className="flex h-screen w-[260px] shrink-0 flex-col overflow-hidden border-r border-[#e2e8f0] bg-[#f8fafc]">
      {/* Header */}
      <div className="border-b border-[#e2e8f0] px-4 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#4ab7c6]">
            <Activity className="h-4 w-4 text-white" />
          </div>
          <div>
            <p className="text-[13px] font-semibold leading-tight text-[#0f172a]">In Time of Need</p>
            <p className="text-[11px] leading-tight text-[#94a3b8]">Staff Review Tool</p>
          </div>
        </div>
      </div>

      {/* Pipeline section */}
      <div className="px-3 pb-2 pt-4">
        <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">Pipeline</p>
        <button
          onClick={onNewJob}
          className="flex w-full items-center justify-center gap-2 rounded-lg border border-[#4ab7c6] px-3 py-2 text-[13px] font-medium text-[#4ab7c6] transition-colors hover:bg-[#f0fbfc]"
        >
          + New Job
        </button>
      </div>

      <div className="mx-3 my-2 h-px bg-[#e2e8f0]" />

      {/* Recent jobs section */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-3 pt-2">
          <p className="mb-3 px-2 text-[11px] font-semibold uppercase tracking-wider text-[#94a3b8]">Recent Jobs</p>
          {job ? <JobCard job={job} /> : <p className="px-3 text-[13px] italic text-[#94a3b8]">No recent jobs</p>}
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-[#e2e8f0] px-4 py-3">
        <p className="text-[11px] text-[#94a3b8]">Local environment</p>
      </div>
    </aside>
  );
}
