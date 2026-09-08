import React, { useState } from "react";
import { EllipsisHorizontalIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@in-need-of-time/ui";

type RunActionsMenuProps = {
  onDelete: () => Promise<void>;
};

export function RunActionsMenu(props: RunActionsMenuProps) {
  const { onDelete } = props;
  const [open, setOpen] = useState(false);
  const [isConfirming, setIsConfirming] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  function onOpenChange(nextOpen: boolean) {
    setOpen(nextOpen);
    // Never leave the menu sitting on the confirm step for next time.
    setIsConfirming(false);
  }

  async function onConfirmDelete() {
    setIsDeleting(true);

    try {
      await onDelete();
    } catch {
      // The page renders the failure — swallowed here only so a rejected
      // delete doesn't surface as an unhandled rejection.
    } finally {
      setIsDeleting(false);
      onOpenChange(false);
    }
  }

  return (
    // The row is a link target, so keep the menu's clicks and keystrokes from
    // bubbling up and navigating away.
    <div onClick={(event) => event.stopPropagation()} onKeyDown={(event) => event.stopPropagation()}>
      <Popover open={open} onOpenChange={onOpenChange}>
        <PopoverTrigger asChild>
          <Button type="button" variant="text-dark" size="icon-sm" aria-label="Run actions">
            <EllipsisHorizontalIcon className="h-5 w-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end" className="w-56 p-2">
          {isConfirming ? (
            <div className="space-y-3">
              <p className="text-sm text-slate-600">Delete this run and its timeline? This can't be undone.</p>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="light" size="sm" onClick={() => setIsConfirming(false)}>
                  Cancel
                </Button>
                <Button type="button" variant="text-error" size="sm" disabled={isDeleting} onClick={onConfirmDelete}>
                  {isDeleting ? "Deleting…" : "Delete"}
                </Button>
              </div>
            </div>
          ) : (
            <Button
              type="button"
              variant="text-error"
              size="sm"
              rounded="md"
              className="w-full justify-start"
              onClick={() => setIsConfirming(true)}
            >
              <TrashIcon className="mr-2 h-4 w-4" />
              Delete run
            </Button>
          )}
        </PopoverContent>
      </Popover>
    </div>
  );
}
