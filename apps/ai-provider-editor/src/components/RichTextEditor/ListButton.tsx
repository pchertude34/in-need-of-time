import React from "react";
import { useEditor, useEditorSelector } from "@portabletext/editor";
import { isActiveListItem } from "@portabletext/editor/selectors";
import { cn } from "@in-need-of-time/utils";
import { TOOLBAR_BUTTON_ACTIVE_CLASSES, TOOLBAR_BUTTON_CLASSES } from "./constants";

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
    <button
      type="button"
      aria-label={label}
      aria-pressed={isActive}
      className={cn(TOOLBAR_BUTTON_CLASSES, isActive && TOOLBAR_BUTTON_ACTIVE_CLASSES)}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => editor.send({ type: "list item.toggle", listItem })}
    >
      {children}
    </button>
  );
}
