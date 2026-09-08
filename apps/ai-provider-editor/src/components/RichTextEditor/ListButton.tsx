import React from "react";
import { useEditor, useEditorSelector } from "@portabletext/editor";
import { isActiveListItem } from "@portabletext/editor/selectors";
import { Button } from "@in-need-of-time/ui";

type ListButtonProps = {
  /** A list type from the editor's schema, e.g. "bullet" or "number". */
  listItem: string;
  label: string;
  children: React.ReactNode;
};

export function ListButton(props: ListButtonProps) {
  const { listItem, label, children } = props;
  const editor = useEditor();
  const isActive = useEditorSelector(editor, isActiveListItem(listItem));

  return (
    <Button
      type="button"
      variant="toggle"
      size="icon-xs"
      rounded="md"
      aria-label={label}
      aria-pressed={isActive}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => editor.send({ type: "list item.toggle", listItem })}
    >
      {children}
    </Button>
  );
}
