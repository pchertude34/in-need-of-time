import React from "react";
import { useEditor, useEditorSelector } from "@portabletext/editor";
import { isActiveStyle } from "@portabletext/editor/selectors";
import { cn } from "@in-need-of-time/utils";
import { TOOLBAR_BUTTON_ACTIVE_CLASSES, TOOLBAR_BUTTON_CLASSES } from "./constants";

type StyleButtonProps = {
  /** A block style from the editor's schema, e.g. "normal" or "h3". */
  style: string;
  label: string;
  children: React.ReactNode;
};

export function StyleButton(props: StyleButtonProps) {
  const { style, label, children } = props;
  const editor = useEditor();
  const isActive = useEditorSelector(editor, isActiveStyle(style));

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isActive}
      // Styles are labelled with text rather than an icon, so this one sizes to
      // its content instead of the square icon button.
      className={cn(
        TOOLBAR_BUTTON_CLASSES,
        "w-auto px-2 text-xs font-semibold",
        isActive && TOOLBAR_BUTTON_ACTIVE_CLASSES,
      )}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => editor.send({ type: "style.toggle", style })}
    >
      {children}
    </button>
  );
}
