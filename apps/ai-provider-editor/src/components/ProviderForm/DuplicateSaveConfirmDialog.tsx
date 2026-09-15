import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@in-need-of-time/ui";
import type { DuplicateCheckStatus, DuplicateProviderMatch } from "@in-need-of-time/utils";

type DuplicateSaveConfirmDialogProps = {
  open: boolean;
  status: Exclude<DuplicateCheckStatus, "none">;
  matches: DuplicateProviderMatch[];
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
};

export function DuplicateSaveConfirmDialog(props: DuplicateSaveConfirmDialogProps) {
  const { open, status, matches, onOpenChange, onConfirm } = props;
  const [closestMatch] = matches;

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Save this provider anyway?</AlertDialogTitle>
          <AlertDialogDescription>
            {status === "likely"
              ? `This looks like it might already exist as "${closestMatch?.title}" at the same address. `
              : `A provider already exists at this address: "${closestMatch?.title}". `}
            Saving creates a new draft — review it against the existing listing in Sanity Studio before publishing.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Save anyway</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
