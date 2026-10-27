import React, { useState } from "react";
import { ChevronDownIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@in-need-of-time/ui";

type BulkActionsMenuProps = {
  selectedCount: number;
  onDelete: () => Promise<void>;
};

export function BulkActionsMenu(props: BulkActionsMenuProps) {
  const { selectedCount, onDelete } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  // Fixed when the dialog opens: a successful delete clears the selection
  // while the dialog is still animating closed, and it shouldn't read "0 runs".
  const [confirmCount, setConfirmCount] = useState(0);
  const runsLabel = formatRunCount(selectedCount);
  const confirmLabel = formatRunCount(confirmCount);

  async function onConfirmDelete() {
    setIsDeleting(true);

    try {
      await onDelete();
    } catch {
      // The page renders the failure — swallowed here only so a rejected
      // delete doesn't surface as an unhandled rejection.
    } finally {
      setIsDeleting(false);
      setIsConfirmOpen(false);
    }
  }

  return (
    <>
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button type="button" variant="light" size="sm" disabled={selectedCount === 0} className="gap-1">
            Bulk actions
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            variant="destructive"
            // Radix would close the menu and restore focus to the trigger as the
            // dialog mounts, which fights it for focus. Closing by hand first
            // keeps the two from overlapping.
            onSelect={(event) => {
              event.preventDefault();
              setIsMenuOpen(false);
              setConfirmCount(selectedCount);
              setIsConfirmOpen(true);
            }}
          >
            <TrashIcon />
            Delete {runsLabel}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete {confirmLabel}?</DialogTitle>
            <DialogDescription>
              The selected runs, their timelines, and anything the agent found are removed for good. Any run still in
              progress is cancelled.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" variant="light" onClick={() => setIsConfirmOpen(false)}>
              Cancel
            </Button>
            <Button type="button" variant="text-error" disabled={isDeleting} onClick={onConfirmDelete}>
              {isDeleting ? "Deleting…" : `Delete ${confirmLabel}`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

function formatRunCount(count: number) {
  return count === 1 ? "1 run" : `${count} runs`;
}
