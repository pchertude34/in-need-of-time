import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Textarea,
} from "@in-need-of-time/ui";

type PasteListDialogProps = {
  disabled?: boolean;
  onSubmit: (text: string) => void;
};

export function PasteListDialog({ disabled, onSubmit }: PasteListDialogProps) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  function handleSubmit() {
    onSubmit(text);
    setText("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="light" size="sm" disabled={disabled}>
          Paste a list
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Paste a list of providers</DialogTitle>
          <DialogDescription>
            One provider per line. Add a state after a comma or tab (e.g. "Westwood Food Pantry, Ohio") to override the
            default state.
          </DialogDescription>
        </DialogHeader>
        <Textarea
          rows={10}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={"Riverside Family Support Center\nWestwood Food Pantry, Ohio"}
        />
        <DialogFooter>
          <Button variant="light" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button disabled={!text.trim()} onClick={handleSubmit}>
            Add rows
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
