import React, { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  FieldLabel,
  Field,
  FieldContent,
  FieldTitle,
  FieldDescription,
  RadioGroup,
  RadioGroupItem,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@in-need-of-time/ui";
import type { DuplicateCheckStatus, DuplicateProviderMatch } from "@in-need-of-time/utils";
import { getStudioProviderUrl } from "../../utils";

type SaveMode = "new" | "override";

// Each option is a whole card that selects its radio. The radio is a button, not
// an input, so the checked style keys off Radix's `data-state` instead of `:checked`.
const OPTION_CLASS_NAME =
  "flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 p-3 has-data-[state=checked]:border-primary-500 has-data-[state=checked]:bg-primary-50";

const OVERRIDE_SELECT_ID = "duplicate-override-target";

type DuplicateSaveConfirmDialogProps = {
  open: boolean;
  status: Exclude<DuplicateCheckStatus, "none">;
  matches: DuplicateProviderMatch[];
  onOpenChange: (open: boolean) => void;
  /** Called with the match to override, or nothing to save as a new provider. */
  onConfirm: (overrideMatch?: DuplicateProviderMatch) => void;
};

// A provider with both a draft and a published version can come back from the
// lookup twice, once under each id. Offering both would list the same provider
// twice in the picker, so only the first — the closest-scoring — is kept.
function uniqueByPublishedId(matches: DuplicateProviderMatch[]) {
  const seen = new Set<string>();

  return matches.filter((match) => {
    const publishedId = match._id.replace(/^drafts\./, "");

    if (seen.has(publishedId)) {
      return false;
    }

    seen.add(publishedId);
    return true;
  });
}

export function DuplicateSaveConfirmDialog(props: DuplicateSaveConfirmDialogProps) {
  const { open, status, matches, onOpenChange, onConfirm } = props;
  const options = uniqueByPublishedId(matches);
  const [closestMatch] = options;

  // Defaults to a new provider, so overriding an existing one is always a
  // deliberate pick rather than something a quick "confirm" can do.
  const [mode, setMode] = useState<SaveMode>("new");
  // Starts on the closest match: choosing "override" is already the deliberate
  // step, and the closest match is the one most likely meant.
  const [overrideId, setOverrideId] = useState(closestMatch?._id ?? "");
  const overrideMatch = mode === "override" ? options.find((match) => match._id === overrideId) : undefined;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Save as a new provider, or override one?</AlertDialogTitle>
          <AlertDialogDescription>
            {status === "likely"
              ? `This looks like it might already exist as "${closestMatch?.title}" at the same address. `
              : `A provider already exists at this address: "${closestMatch?.title}". `}
            Overriding replaces that provider's fields with this form's in a draft — the published listing stays as it
            is until you publish the draft from Sanity Studio.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <RadioGroup
          aria-label="Where to save this provider"
          className="gap-2"
          value={mode}
          onValueChange={(value) => setMode(value as SaveMode)}
        >
          <FieldLabel htmlFor="new">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Save as a new provider</FieldTitle>
                <FieldDescription>Creates a separate draft alongside the existing listing.</FieldDescription>
              </FieldContent>
              <RadioGroupItem className="mt-0.5" value="new" id="new" />
            </Field>
          </FieldLabel>
          <FieldLabel htmlFor="override">
            <Field orientation="horizontal">
              <FieldContent>
                <FieldTitle>Override an existing provider</FieldTitle>
                <FieldDescription>Replaces the matching provider's field with this form's.</FieldDescription>
              </FieldContent>
              <RadioGroupItem className="mt-0.5" value="override" id="override" />
            </Field>
          </FieldLabel>
        </RadioGroup>

        {/* Outside the radio group rather than in the override card: it's its own
            control, and nesting it in the radio's label would tie the two together. */}
        {mode === "override" && (
          <Field>
            <FieldLabel htmlFor={OVERRIDE_SELECT_ID}>Provider to override</FieldLabel>
            <Select value={overrideId} onValueChange={setOverrideId}>
              <SelectTrigger id={OVERRIDE_SELECT_ID}>
                <SelectValue placeholder="Choose a provider" />
              </SelectTrigger>
              <SelectContent>
                {options.map((match) => (
                  <SelectItem key={match._id} value={match._id}>
                    {match.address ? `${match.title} — ${match.address}` : match.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {overrideMatch && (
              <FieldDescription className="text-right">
                <a
                  href={getStudioProviderUrl(overrideMatch._id)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-slate-500 hover:no-underline"
                >
                  View in Studio
                  <ArrowTopRightOnSquareIcon className="h-3 w-3" />
                </a>
              </FieldDescription>
            )}
          </Field>
        )}
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          {/* Only reachable without a target if no match was picked, which the
              closest-match default rules out — disabled anyway rather than
              silently falling back to a new provider. */}
          <AlertDialogAction disabled={mode === "override" && !overrideMatch} onClick={() => onConfirm(overrideMatch)}>
            {mode === "override" ? "Override provider" : "Save as new"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
