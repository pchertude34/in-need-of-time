import { EventType, type AgentEvent } from "@in-need-of-time/types/agentEvents";
import type { AgentProviderResult } from "@in-need-of-time/types";
import type { PortableTextBlock } from "@portabletext/types";
// Pulled from the generated provider schema (studio/sanity.types.ts) rather than
// redeclared here, so a schema change can't quietly drift out of step with what
// this form saves. `HoursOfOperation` is aliased — the form's own type of the
// same name (imported below) has the same shape but non-optional fields.
import type { Provider, HoursOfOperation as ProviderHoursOfOperationDoc } from "@in-need-of-time/types/sanity";
import type { ActivityStepItem } from "../../components/ActivityStepper/ActivityStepper";
import { EMPTY_FIELD, EMPTY_PROVIDER_FORM_VALUES, EMPTY_SERVICE_TYPE } from "../../components/ProviderForm/constants";
import type { HoursOfOperation, ProviderFormValues, WithConfidence } from "../../types";

/**
 * The fields a new provider document is created with. Picked straight from the
 * generated provider schema so this can't drift out of step with `provider.ts`
 * — except `description`: the rich text editor and the agent's output both deal
 * in the more permissive `PortableTextBlock` shape, not Sanity's exact generated
 * block type, so that one field is typed separately.
 */
export type ProviderDraftFields = Pick<
  Provider,
  "title" | "address" | "location" | "hoursOfOperation" | "serviceTypes" | "publicContact" | "url"
> & {
  description: PortableTextBlock[];
};

/** The `output` of the job's `workflow.completed` event, if it has finished. */
export function findWorkflowOutput(events: AgentEvent[]): string | undefined {
  const completed = events.find(
    (event): event is Extract<AgentEvent, { type: EventType.WorkflowCompleted }> =>
      event.type === EventType.WorkflowCompleted,
  );

  return completed?.output;
}

// A field the agent didn't find comes back null; inputs hold "" instead, but
// keep the agent's confidence and source so the UI can still explain the gap.
function toTextField(field?: WithConfidence<string | null>): WithConfidence<string> {
  return field ? { ...field, value: field.value ?? "" } : EMPTY_FIELD;
}

/**
 * Portable Text requires a `_key` on every block and child, and the agent's
 * blocks have none — its schema deliberately doesn't ask the model to invent
 * unique ids. Without them the editor rejects the value as invalid and shows an
 * empty document, so they're added here, where the agent's output becomes the
 * form's.
 */
function withBlockKeys(blocks?: PortableTextBlock[] | null): PortableTextBlock[] {
  if (!blocks) {
    return [];
  }

  return blocks.map((block) => {
    const children = block.children as PortableTextBlock["children"] | undefined;

    return {
      ...block,
      _key: block._key ?? crypto.randomUUID(),
      children: children?.map((child) => ({ ...child, _key: child._key ?? crypto.randomUUID() })),
    } as PortableTextBlock;
  });
}

/**
 * Maps the agent's structured provider onto the form's values. Returns undefined
 * when the job hasn't finished, its output didn't parse, or no provider
 * qualified — the form falls back to its own empty defaults in all three cases.
 */
export function buildProviderFormValues(output?: string): ProviderFormValues | undefined {
  if (!output) {
    return undefined;
  }

  let provider: AgentProviderResult | null | undefined;
  try {
    // `workflow.completed` carries the formatting agent's raw text, which for a
    // structured-output agent is the JSON of `providerScrapeOutputSchema`.
    provider = (JSON.parse(output) as { provider?: AgentProviderResult | null }).provider;
  } catch {
    return undefined;
  }

  if (!provider) {
    return undefined;
  }

  const { description, location, contact } = provider;

  return {
    ...EMPTY_PROVIDER_FORM_VALUES,
    name: toTextField(provider.name),
    // Portable Text keeps its shape all the way to the editor — no flattening,
    // nothing to reconstruct on the way back out. Only the keys are added.
    description: { ...(description ?? EMPTY_FIELD), value: withBlockKeys(description?.value) },
    address: toTextField(provider.address),
    location: {
      ...(location ?? EMPTY_FIELD),
      // Coordinates are numbers on the wire and strings in the inputs, so a
      // cleared or partially typed coordinate stays representable.
      value: {
        latitude: location?.value ? String(location.value.latitude) : "",
        longitude: location?.value ? String(location.value.longitude) : "",
      },
    },
    serviceTypes: (provider.serviceTypes ?? []).map((serviceType) => ({
      _id: serviceType._id,
      hoursOfOperation: serviceType.hoursOfOperation ?? EMPTY_SERVICE_TYPE.hoursOfOperation,
    })),
    hoursOfOperation: provider.hoursOfOperation ?? EMPTY_PROVIDER_FORM_VALUES.hoursOfOperation,
    contact: {
      phone: toTextField(contact?.phone),
      email: toTextField(contact?.email),
      website: toTextField(contact?.website),
    },
    url: toTextField(provider.url),
    reason: provider.reason ?? "",
  };
}

/**
 * Whether the job is still working. A job is done only once it emits a terminal
 * workflow event, so an empty stream — the moment before the socket has replayed
 * anything — counts as running rather than briefly looking finished.
 */
export function isAgentRunning(events: AgentEvent[]) {
  return !events.some((event) => event.type === EventType.WorkflowCompleted || event.type === EventType.WorkflowFailed);
}

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

function toHoursOfOperationDoc(hours: HoursOfOperation | null): ProviderHoursOfOperationDoc | undefined {
  if (!hours) return undefined;

  return {
    periods: hours.periods.map((period) => ({ ...period, _key: crypto.randomUUID() })),
    weekdayText: hours.weekdayText,
  };
}

// Empty strings survive to here so an input can hold a cleared field, but they
// shouldn't be written to the document as if someone had filled them in.
function toOptionalString(value: string): string | undefined {
  return value.trim() ? value : undefined;
}

function toGeopoint(location: { latitude: string; longitude: string }): ProviderDraftFields["location"] {
  const lat = Number.parseFloat(location.latitude);
  const lng = Number.parseFloat(location.longitude);

  if (Number.isNaN(lat) || Number.isNaN(lng)) return undefined;

  return { _type: "geopoint", lat, lng };
}

/**
 * Converts the provider form's values into the fields a new provider document
 * is created with. `reason` and every field's `confidence`/`sourceUrl` are
 * form-only, there to guide the reviewer — neither is part of the provider
 * schema, so neither is saved.
 */
export function buildProviderDocumentFields(values: ProviderFormValues): ProviderDraftFields {
  return {
    title: values.name.value,
    description: values.description.value,
    address: values.address.value,
    location: toGeopoint(values.location.value),
    hoursOfOperation: toHoursOfOperationDoc(values.hoursOfOperation.value),
    serviceTypes: values.serviceTypes
      .filter((serviceType) => serviceType._id)
      .map((serviceType) => ({
        _type: "providerServiceType" as const,
        _key: crypto.randomUUID(),
        serviceType: { _type: "reference" as const, _ref: serviceType._id },
        hoursOfOperation: toHoursOfOperationDoc(serviceType.hoursOfOperation.value),
      })),
    publicContact: {
      phone: toOptionalString(values.contact.phone.value),
      email: toOptionalString(values.contact.email.value),
      website: toOptionalString(values.contact.website.value),
    },
    url: toOptionalString(values.url.value),
  };
}
