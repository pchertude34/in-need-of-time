import React, { useState } from "react";
import { EllipsisHorizontalIcon, TrashIcon } from "@heroicons/react/24/outline";
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

type RunActionsMenuProps = {
  onDelete: () => Promise<void>;
};

export function RunActionsMenu(props: RunActionsMenuProps) {
  const { onDelete } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

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
    // The row is a link target, so keep the menu's clicks and keystrokes from
    // bubbling up and navigating away.
    <div onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
      <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button type="button" variant="text-dark" size="icon-sm" aria-label="Run actions">
            <EllipsisHorizontalIcon className="h-5 w-5" />
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
              setIsConfirmOpen(true);
            }}
          >
            <TrashIcon />
            Delete run
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={isConfirmOpen} onOpenChange={setIsConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete this run?</DialogTitle>
            <DialogDescription>
              The run, its timeline, and anything the agent found are removed for good. A run still in progress is
              cancelled.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" variant="light" onClick={() => setIsConfirmOpen(false)}>
              Cancel
            </Button>
            <Button type="button" variant="text-error" disabled={isDeleting} onClick={onConfirmDelete}>
              {isDeleting ? "Deleting…" : "Delete run"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
