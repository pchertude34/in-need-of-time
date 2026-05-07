import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { useClient, useCurrentUser } from "@sanity/sdk-react";

import type { HoursPeriod, PipelineJob, SanityBlock, SanityProviderCandidate } from "../types/pipeline";
import { approvePipelineJob, denyPipelineJob } from "../lib/pipelineApi";
import { validateProviderCandidates, writeApprovedProvidersToSanity } from "../lib/sanityProviderWrite";

type ProviderResultsReviewProps = {
  job: PipelineJob;
  onJobUpdated: (job: PipelineJob) => void;
};

type ProviderReviewFormState = {
  localId: string;
  name: string;
  descriptionText: string;
  address: string;
  latitude: string;
  longitude: string;
  serviceTypesText: string;
  weekdayText: string;
  periods: HoursPeriod[];
  phone: string;
  email: string;
  website: string;
};

const SANITY_APP_API_VERSION = process.env.SANITY_APP_API_VERSION || "2024-03-09";

const dayOptions = [
  { value: 0, label: "Sunday" },
  { value: 1, label: "Monday" },
  { value: 2, label: "Tuesday" },
  { value: 3, label: "Wednesday" },
  { value: 4, label: "Thursday" },
  { value: 5, label: "Friday" },
  { value: 6, label: "Saturday" },
];

const sectionStyle: CSSProperties = {
  display: "grid",
  gap: "18px",
  maxWidth: "980px",
};

const reviewHeaderStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "start",
};

const countStyle: CSSProperties = {
  width: "fit-content",
  borderRadius: "999px",
  padding: "4px 10px",
  background: "#eeeeee",
  color: "#171717",
  fontSize: "13px",
  fontWeight: 700,
};

const listStyle: CSSProperties = {
  display: "grid",
  gap: "16px",
};

const cardStyle: CSSProperties = {
  display: "grid",
  gap: "18px",
  padding: "18px",
  border: "1px solid #d9d9d9",
  borderRadius: "8px",
  background: "#ffffff",
};

const cardHeaderStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  gap: "12px",
  alignItems: "start",
};

const fieldGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "14px",
};

const twoColumnGridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "14px",
};

const labelStyle: CSSProperties = {
  display: "grid",
  gap: "6px",
  color: "#202020",
  fontSize: "14px",
  fontWeight: 700,
};

const inputStyle: CSSProperties = {
  minHeight: "40px",
  border: "1px solid #c8c8c8",
  borderRadius: "6px",
  padding: "8px 10px",
  font: "inherit",
  background: "#ffffff",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "100px",
  resize: "vertical",
};

const helpTextStyle: CSSProperties = {
  margin: 0,
  color: "#666666",
  fontSize: "13px",
  fontWeight: 400,
};

const subSectionStyle: CSSProperties = {
  display: "grid",
  gap: "10px",
};

const periodRowStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
  gap: "10px",
  alignItems: "end",
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

const subtlePanelStyle: CSSProperties = {
  padding: "14px",
  border: "1px solid #e5e5e5",
  borderRadius: "8px",
  background: "#fbfbfa",
};

const messageStyle: CSSProperties = {
  margin: 0,
  fontWeight: 700,
};

function compactString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function getReviewCandidates(job: PipelineJob): SanityProviderCandidate[] {
  if (Array.isArray(job.output?.sanity) && job.output.sanity.length > 0) {
    return job.output.sanity;
  }

  return (job.output?.extracted ?? []).map((item) => item.result).filter(Boolean);
}

function flattenDescription(description: SanityBlock[] | undefined): string {
  return (description ?? [])
    .map((block) =>
      block.children
        .map((child) => child.text)
        .join("")
        .trim(),
    )
    .filter(Boolean)
    .join("\n\n");
}

function textToDescription(text: string): SanityBlock[] {
  return text
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean)
    .map((paragraph) => ({
      _type: "block" as const,
      children: [
        {
          _type: "span" as const,
          text: paragraph,
        },
      ],
      markDefs: [],
      style: "normal" as const,
    }));
}

function splitEditableList(text: string): string[] {
  const seen = new Set<string>();
  const values: string[] = [];

  for (const rawValue of text.split(/[,\n]/)) {
    const value = rawValue.trim();
    if (!value || seen.has(value)) continue;
    seen.add(value);
    values.push(value);
  }

  return values;
}

function formatCoordinate(value: number | null | undefined): string {
  return typeof value === "number" && Number.isFinite(value) ? String(value) : "";
}

function parseOptionalCoordinate(value: string, label: string, providerIndex: number): number | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  const parsed = Number(trimmed);
  if (!Number.isFinite(parsed)) {
    throw new Error(`Provider ${providerIndex + 1}: ${label} must be a valid number.`);
  }

  return parsed;
}

function toTimeInputValue(value: string): string {
  const trimmed = value.trim();
  if (/^\d{4}$/.test(trimmed)) {
    return `${trimmed.slice(0, 2)}:${trimmed.slice(2)}`;
  }

  if (/^\d{1,2}:\d{2}$/.test(trimmed)) {
    const [hour, minute] = trimmed.split(":");
    return `${hour.padStart(2, "0")}:${minute}`;
  }

  return "";
}

function normalizePeriod(period: HoursPeriod): HoursPeriod {
  return {
    open: {
      day: Number.isInteger(period.open?.day) ? period.open.day : 1,
      time: toTimeInputValue(period.open?.time ?? "") || "09:00",
    },
    close: {
      day: Number.isInteger(period.close?.day) ? period.close.day : 1,
      time: toTimeInputValue(period.close?.time ?? "") || "17:00",
    },
  };
}

function createDefaultPeriod(): HoursPeriod {
  return {
    open: { day: 1, time: "09:00" },
    close: { day: 1, time: "17:00" },
  };
}

function createEmptyProviderFormState(index: number, category: string): ProviderReviewFormState {
  return {
    localId: `new-${Date.now()}-${index}`,
    name: "",
    descriptionText: "",
    address: "",
    latitude: "",
    longitude: "",
    serviceTypesText: category,
    weekdayText: "",
    periods: [],
    phone: "",
    email: "",
    website: "",
  };
}

function candidateToFormState(candidate: SanityProviderCandidate, index: number): ProviderReviewFormState {
  return {
    localId: `${candidate.name || "provider"}-${index}`,
    name: compactString(candidate.name),
    descriptionText: flattenDescription(candidate.description),
    address: compactString(candidate.address),
    latitude: formatCoordinate(candidate.location?.latitude),
    longitude: formatCoordinate(candidate.location?.longitude),
    serviceTypesText: (candidate.serviceTypes ?? [])
      .map((serviceType) => serviceType._id)
      .filter(Boolean)
      .join("\n"),
    weekdayText: (candidate.hoursOfOperation?.weekdayText ?? []).join("\n"),
    periods: (candidate.hoursOfOperation?.periods ?? []).map(normalizePeriod),
    phone: compactString(candidate.contact?.phone),
    email: compactString(candidate.contact?.email),
    website: compactString(candidate.contact?.website),
  };
}

function formStateToCandidate(formState: ProviderReviewFormState, index: number): SanityProviderCandidate {
  return {
    name: formState.name.trim(),
    description: textToDescription(formState.descriptionText),
    address: formState.address.trim(),
    location: {
      latitude: parseOptionalCoordinate(formState.latitude, "latitude", index),
      longitude: parseOptionalCoordinate(formState.longitude, "longitude", index),
    },
    serviceTypes: splitEditableList(formState.serviceTypesText).map((_id) => ({ _id })),
    hoursOfOperation: {
      periods: formState.periods.map(normalizePeriod),
      weekdayText: formState.weekdayText
        .split(/\n/)
        .map((line) => line.trim())
        .filter(Boolean),
    },
    contact: {
      phone: formState.phone.trim(),
      email: formState.email.trim(),
      website: formState.website.trim(),
    },
  };
}

function getReviewerName(user: ReturnType<typeof useCurrentUser>): string {
  return user?.email ?? user?.name ?? user?.id ?? "local-staff";
}

export function ProviderResultsReview({ job, onJobUpdated }: ProviderResultsReviewProps) {
  const client = useClient({ apiVersion: SANITY_APP_API_VERSION });
  const user = useCurrentUser();
  const sourceCandidates = useMemo(() => getReviewCandidates(job), [job]);
  const sourceKey = `${job.id}:${job.output?.generated_at ?? job.updatedAt}:${sourceCandidates.length}`;
  const [providerForms, setProviderForms] = useState<ProviderReviewFormState[]>(() =>
    sourceCandidates.map(candidateToFormState),
  );
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setProviderForms(sourceCandidates.map(candidateToFormState));
    setError(null);
    setSuccess(null);
  }, [sourceKey, sourceCandidates]);

  if (job.status !== "ready_for_review") return null;

  function updateProvider(index: number, updater: (provider: ProviderReviewFormState) => ProviderReviewFormState) {
    setProviderForms((current) =>
      current.map((provider, providerIndex) => (providerIndex === index ? updater(provider) : provider)),
    );
    setError(null);
    setSuccess(null);
  }

  function updateProviderField(index: number, field: keyof ProviderReviewFormState, value: string) {
    updateProvider(index, (provider) => ({ ...provider, [field]: value }));
  }

  function updatePeriod(
    providerIndex: number,
    periodIndex: number,
    side: "open" | "close",
    field: "day" | "time",
    value: string,
  ) {
    updateProvider(providerIndex, (provider) => ({
      ...provider,
      periods: provider.periods.map((period, currentPeriodIndex) => {
        if (currentPeriodIndex !== periodIndex) return period;

        return {
          ...period,
          [side]: {
            ...period[side],
            [field]: field === "day" ? Number(value) : value,
          },
        };
      }),
    }));
  }

  function buildReviewedCandidates() {
    try {
      const reviewedCandidates = validateProviderCandidates(providerForms.map(formStateToCandidate));
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
    const reviewedCandidates = buildReviewedCandidates();
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
      const skippedServiceTypes = Array.from(
        new Set(writeResults.flatMap((result) => result.skippedServiceTypes ?? [])),
      );
      setSuccess(
        [
          `Approved and wrote ${createdCount} new / ${updatedCount} existing provider document${writeResults.length === 1 ? "" : "s"} to Sanity.`,
          skippedServiceTypes.length
            ? `Skipped unmatched service type value${skippedServiceTypes.length === 1 ? "" : "s"}: ${skippedServiceTypes.join(", ")}.`
            : "",
        ]
          .filter(Boolean)
          .join(" "),
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
      <div style={reviewHeaderStyle}>
        <div>
          <h2 style={{ margin: "0 0 6px" }}>Review providers</h2>
          <p style={{ margin: 0, color: "#555555" }}>
            Check each provider record and edit the fields before approving it for Sanity.
          </p>
        </div>
        <span style={countStyle}>
          {providerForms.length} provider{providerForms.length === 1 ? "" : "s"}
        </span>
      </div>

      {providerForms.length ? (
        <div style={listStyle}>
          {providerForms.map((provider, providerIndex) => {
            const source = job.output?.extracted?.[providerIndex];

            return (
              <article key={provider.localId} style={cardStyle}>
                <header style={cardHeaderStyle}>
                  <div>
                    <h3 style={{ margin: "0 0 6px" }}>Provider {providerIndex + 1}</h3>
                    {source?.url ? (
                      <p style={{ margin: 0, color: "#555555", overflowWrap: "anywhere" }}>
                        Source:{" "}
                        <a href={source.url} target="_blank" rel="noreferrer">
                          {source.url}
                        </a>
                        {source.method ? ` (${source.method})` : ""}
                      </p>
                    ) : null}
                  </div>

                  <button
                    style={secondaryButtonStyle}
                    type="button"
                    onClick={() => {
                      setProviderForms((current) => current.filter((_, index) => index !== providerIndex));
                      setError(null);
                      setSuccess(null);
                    }}
                    disabled={isSubmitting}
                  >
                    Remove provider
                  </button>
                </header>

                <div style={fieldGridStyle}>
                  <label style={labelStyle}>
                    Provider name
                    <input
                      required
                      style={inputStyle}
                      type="text"
                      value={provider.name}
                      onChange={(event) => updateProviderField(providerIndex, "name", event.target.value)}
                    />
                  </label>

                  <label style={labelStyle}>
                    Website
                    <input
                      style={inputStyle}
                      type="url"
                      value={provider.website}
                      onChange={(event) => updateProviderField(providerIndex, "website", event.target.value)}
                    />
                  </label>
                </div>

                <label style={labelStyle}>
                  Description
                  <textarea
                    style={textareaStyle}
                    value={provider.descriptionText}
                    onChange={(event) => updateProviderField(providerIndex, "descriptionText", event.target.value)}
                  />
                </label>

                <label style={labelStyle}>
                  Address
                  <input
                    style={inputStyle}
                    type="text"
                    value={provider.address}
                    onChange={(event) => updateProviderField(providerIndex, "address", event.target.value)}
                  />
                </label>

                <div style={twoColumnGridStyle}>
                  <label style={labelStyle}>
                    Latitude
                    <input
                      style={inputStyle}
                      type="text"
                      inputMode="decimal"
                      value={provider.latitude}
                      onChange={(event) => updateProviderField(providerIndex, "latitude", event.target.value)}
                    />
                  </label>

                  <label style={labelStyle}>
                    Longitude
                    <input
                      style={inputStyle}
                      type="text"
                      inputMode="decimal"
                      value={provider.longitude}
                      onChange={(event) => updateProviderField(providerIndex, "longitude", event.target.value)}
                    />
                  </label>
                </div>

                <div style={fieldGridStyle}>
                  <label style={labelStyle}>
                    Phone
                    <input
                      style={inputStyle}
                      type="tel"
                      value={provider.phone}
                      onChange={(event) => updateProviderField(providerIndex, "phone", event.target.value)}
                    />
                  </label>

                  <label style={labelStyle}>
                    Email
                    <input
                      style={inputStyle}
                      type="email"
                      value={provider.email}
                      onChange={(event) => updateProviderField(providerIndex, "email", event.target.value)}
                    />
                  </label>
                </div>

                <label style={labelStyle}>
                  Service types
                  <textarea
                    style={{ ...textareaStyle, minHeight: "86px" }}
                    value={provider.serviceTypesText}
                    onChange={(event) => updateProviderField(providerIndex, "serviceTypesText", event.target.value)}
                  />
                  <p style={helpTextStyle}>Enter one service type name, slug, or document ID per line.</p>
                  <p style={helpTextStyle}>
                    Approval matches these values to Sanity service type names, slugs, or document IDs.
                  </p>
                </label>

                <div style={subSectionStyle}>
                  <div>
                    <h4 style={{ margin: "0 0 4px" }}>Hours</h4>
                    <p style={helpTextStyle}>
                      Edit the public hours text and the schedule rows that get written to Sanity.
                    </p>
                  </div>

                  <label style={labelStyle}>
                    Public hours text
                    <textarea
                      style={textareaStyle}
                      value={provider.weekdayText}
                      onChange={(event) => updateProviderField(providerIndex, "weekdayText", event.target.value)}
                    />
                  </label>

                  <div style={subtlePanelStyle}>
                    <div style={{ ...subSectionStyle, gap: "12px" }}>
                      {provider.periods.length ? (
                        provider.periods.map((period, periodIndex) => (
                          <div key={`${provider.localId}-period-${periodIndex}`} style={periodRowStyle}>
                            <label style={labelStyle}>
                              Opens
                              <select
                                style={inputStyle}
                                value={period.open.day}
                                onChange={(event) =>
                                  updatePeriod(providerIndex, periodIndex, "open", "day", event.target.value)
                                }
                              >
                                {dayOptions.map((day) => (
                                  <option key={day.value} value={day.value}>
                                    {day.label}
                                  </option>
                                ))}
                              </select>
                            </label>

                            <label style={labelStyle}>
                              Open time
                              <input
                                style={inputStyle}
                                type="time"
                                value={toTimeInputValue(period.open.time)}
                                onChange={(event) =>
                                  updatePeriod(providerIndex, periodIndex, "open", "time", event.target.value)
                                }
                              />
                            </label>

                            <label style={labelStyle}>
                              Closes
                              <select
                                style={inputStyle}
                                value={period.close.day}
                                onChange={(event) =>
                                  updatePeriod(providerIndex, periodIndex, "close", "day", event.target.value)
                                }
                              >
                                {dayOptions.map((day) => (
                                  <option key={day.value} value={day.value}>
                                    {day.label}
                                  </option>
                                ))}
                              </select>
                            </label>

                            <label style={labelStyle}>
                              Close time
                              <input
                                style={inputStyle}
                                type="time"
                                value={toTimeInputValue(period.close.time)}
                                onChange={(event) =>
                                  updatePeriod(providerIndex, periodIndex, "close", "time", event.target.value)
                                }
                              />
                            </label>

                            <button
                              style={secondaryButtonStyle}
                              type="button"
                              onClick={() =>
                                updateProvider(providerIndex, (current) => ({
                                  ...current,
                                  periods: current.periods.filter((_, index) => index !== periodIndex),
                                }))
                              }
                              disabled={isSubmitting}
                            >
                              Remove
                            </button>
                          </div>
                        ))
                      ) : (
                        <p style={{ margin: 0, color: "#555555" }}>No schedule rows yet.</p>
                      )}

                      <button
                        style={secondaryButtonStyle}
                        type="button"
                        onClick={() =>
                          updateProvider(providerIndex, (current) => ({
                            ...current,
                            periods: [...current.periods, createDefaultPeriod()],
                          }))
                        }
                        disabled={isSubmitting}
                      >
                        Add hours row
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div style={subtlePanelStyle}>
          <p style={{ margin: 0, color: "#555555" }}>
            No provider records were returned by this job. Try running the search with a higher maxUrls value, or add a
            provider manually before approving.
          </p>
        </div>
      )}

      <div style={actionRowStyle}>
        <button
          style={secondaryButtonStyle}
          type="button"
          onClick={() => {
            setProviderForms((current) => [
              ...current,
              createEmptyProviderFormState(current.length, job.input.category),
            ]);
            setError(null);
            setSuccess(null);
          }}
          disabled={isSubmitting}
        >
          Add provider
        </button>
        <button style={secondaryButtonStyle} type="button" onClick={buildReviewedCandidates} disabled={isSubmitting}>
          Validate provider data
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
    </section>
  );
}
