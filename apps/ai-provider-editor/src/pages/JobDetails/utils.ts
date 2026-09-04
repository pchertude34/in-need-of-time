import { EventType, type AgentEvent } from "@in-need-of-time/types/agentEvents";
import type { ActivityStepItem } from "../../components/ActivityStepper/ActivityStepper";

// Agent names come off the wire in mixed conventions ("provider_research",
// "provider extractor"), so even them out for display.
function formatAgentName(agent: string) {
  return agent.replace(/_/g, " ");
}

/**
 * Turns a job's event stream into one step per agent run: `agent.started` opens
 * a step, and the matching `agent.completed` / `agent.failed` closes it. A step
 * with no closing event yet stays in progress, which is what makes the stepper
 * track a job while it's still running.
 */
export function buildActivitySteps(events: AgentEvent[]): ActivityStepItem[] {
  const steps: ActivityStepItem[] = [];
  // The index of each agent's still-open step, so a completion can find the
  // start it belongs to even when other agents' events land in between.
  const openStepIndexes = new Map<string, number>();
  const seenEventIds = new Set<string>();

  for (const event of events) {
    // The server replays history on connect and may also send a live copy of
    // the same event; its id is what makes the duplicate detectable.
    if (seenEventIds.has(event.id)) {
      continue;
    }
    seenEventIds.add(event.id);

    if (event.type === EventType.AgentStarted) {
      openStepIndexes.set(event.agent, steps.length);
      steps.push({
        id: event.id,
        status: "in-progress",
        title: formatAgentName(event.agent),
        description: event.task,
      });
      continue;
    }

    if (event.type === EventType.AgentCompleted || event.type === EventType.AgentFailed) {
      const index = openStepIndexes.get(event.agent);

      if (index === undefined) {
        continue;
      }

      openStepIndexes.delete(event.agent);
      steps[index] = {
        ...steps[index],
        status: event.type === EventType.AgentCompleted ? "completed" : "failed",
        // A failure's reason is more useful than the task it was attempting.
        description: event.type === EventType.AgentFailed ? event.error : steps[index].description,
      };
    }
  }

  return steps;
}
