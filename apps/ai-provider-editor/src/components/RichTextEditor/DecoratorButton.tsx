import React from "react";
import { useEditor, useEditorSelector } from "@portabletext/editor";
import { isActiveDecorator } from "@portabletext/editor/selectors";
import { cn } from "@in-need-of-time/utils";
import { TOOLBAR_BUTTON_ACTIVE_CLASSES, TOOLBAR_BUTTON_CLASSES } from "./constants";

type DecoratorButtonProps = {
  /** A decorator from the editor's schema, e.g. "strong" or "em". */
  decorator: string;
  label: string;
  children: React.ReactNode;
};

export function DecoratorButton(props: DecoratorButtonProps) {
  const { decorator, label, children } = props;
  const editor = useEditor();
  const isActive = useEditorSelector(editor, isActiveDecorator(decorator));

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={isActive}
      className={cn(TOOLBAR_BUTTON_CLASSES, isActive && TOOLBAR_BUTTON_ACTIVE_CLASSES)}
      // The editor loses its selection if the button takes focus, so never let it.
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => editor.send({ type: "decorator.toggle", decorator })}
    >
      {children}
    </button>
  );
}
