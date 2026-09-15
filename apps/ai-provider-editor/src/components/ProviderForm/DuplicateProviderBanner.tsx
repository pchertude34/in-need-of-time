import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";
import { Alert, AlertDescription, AlertTitle, type AlertProps } from "@in-need-of-time/ui";
import type { DuplicateCheckStatus, DuplicateProviderMatch } from "@in-need-of-time/utils";

const BANNER_VARIANT: Record<Exclude<DuplicateCheckStatus, "none">, AlertProps["variant"]> = {
  likely: "error",
  potential: "warning",
};

const BANNER_HEADING: Record<Exclude<DuplicateCheckStatus, "none">, string> = {
  likely: "This looks like a possible duplicate",
  potential: "A provider already exists at this address",
};

type DuplicateProviderBannerProps = {
  status: Exclude<DuplicateCheckStatus, "none">;
  matches: DuplicateProviderMatch[];
};

export function DuplicateProviderBanner(props: DuplicateProviderBannerProps) {
  const { status, matches } = props;

  return (
    <Alert variant={BANNER_VARIANT[status]}>
      <ExclamationTriangleIcon />
      <AlertTitle>{BANNER_HEADING[status]}</AlertTitle>
      <AlertDescription>
        <ul className="space-y-0.5">
          {matches.map((match) => (
            <li key={match._id}>
              <span className="font-medium">{match.title}</span>
              {match.address && ` — ${match.address}`}
            </li>
          ))}
        </ul>
        <p>
          {status === "likely"
            ? "The address matches and the names are similar — double-check this isn't already in the directory before saving."
            : "The address matches but the name doesn't look similar — check this isn't the same place under a different name."}
        </p>
      </AlertDescription>
    </Alert>
  );
}
