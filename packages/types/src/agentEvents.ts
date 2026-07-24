// The contract between the harness (server) and the inspector (browser).
//
// EVERYTHING the harness does becomes an event on this stream. That is the
// whole idea of the course: the event log IS the system. The UI never talks to
// the model or the tools directly — it only ever renders this stream.
//
// Every event type is a constant on `EventType`. Import it and use
// `EventType.WorkflowStarted` instead of typing the magic string
// "workflow.started". The compiler catches typos, and autocomplete lists every
// event the harness can emit.

export enum EventType {
  // a workflow (one agent run) begins / ends
  WorkflowStarted = "workflow.started",
  WorkflowCompleted = "workflow.completed",
  WorkflowFailed = "workflow.failed",
  // the model thinking out loud (streamed token by token)
  ModelDelta = "model.delta",
  ModelCompleted = "model.completed",
  // a tool call and its outcome
  ToolRequested = "tool.requested",
  ToolCompleted = "tool.completed",
  ToolFailed = "tool.failed",
  // memory: old turns compacted into a running summary
  MemoryCompacted = "memory.compacted",
  // orchestration: control handed from one agent to another
  AgentHandoff = "agent.handoff",
  // supervision: the plan, and each parallel sub-agent
  PlanCreated = "plan.created",
  SubagentStarted = "subagent.started",
  SubagentCompleted = "subagent.completed",
  SubagentFailed = "subagent.failed",
  // human-in-the-loop: a privileged action paused for approval
  ApprovalRequested = "approval.requested",
  ApprovalResolved = "approval.resolved",
  // free-form harness logging
  Log = "log",
}

export type EventInput =
  | { type: EventType.WorkflowStarted; workflowId: string; input: string }
  | { type: EventType.WorkflowCompleted; workflowId: string; output: string }
  | { type: EventType.WorkflowFailed; workflowId: string; error: string }
  | { type: EventType.ModelDelta; workflowId: string; text: string }
  | { type: EventType.ModelCompleted; workflowId: string; text: string }
  | { type: EventType.ToolRequested; workflowId: string; toolCallId: string; name: string; args: unknown }
  | { type: EventType.ToolCompleted; workflowId: string; toolCallId: string; result: unknown }
  | { type: EventType.ToolFailed; workflowId: string; toolCallId: string; error: string }
  | {
      type: EventType.MemoryCompacted;
      workflowId: string;
      summarizedTurns: number;
      contextTokens: number;
      summary: string;
    }
  | { type: EventType.AgentHandoff; workflowId: string; from: string; to: string; reason: string }
  | { type: EventType.PlanCreated; workflowId: string; steps: { id: string; agent: string; objective: string }[] }
  | { type: EventType.SubagentStarted; workflowId: string; stepId: string; agent: string; objective: string }
  | { type: EventType.SubagentCompleted; workflowId: string; stepId: string; agent: string; findings: string }
  | { type: EventType.SubagentFailed; workflowId: string; stepId: string; agent: string; error: string }
  | { type: EventType.ApprovalRequested; workflowId: string; toolCallId: string; action: string; args: unknown }
  | { type: EventType.ApprovalResolved; workflowId: string; toolCallId: string; approved: boolean }
  | { type: EventType.Log; workflowId?: string; level: "info" | "warn" | "error"; message: string };

// The harness stamps every event with an id + timestamp when it emits.
export type AgentEvent = EventInput & { id: string; ts: number };
