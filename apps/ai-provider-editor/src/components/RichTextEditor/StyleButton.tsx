import React from "react";
import { useEditor, useEditorSelector } from "@portabletext/editor";
import { isActiveStyle } from "@portabletext/editor/selectors";
import { Button } from "@in-need-of-time/ui";

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
    // Styles are labelled with text rather than an icon, so this one sizes to
    // its content instead of using the square icon size.
    <Button
      type="button"
      variant="toggle"
      size="xs"
      rounded="md"
      aria-label={label}
      aria-pressed={isActive}
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => editor.send({ type: "style.toggle", style })}
    >
      {children}
    </Button>
  );
}
