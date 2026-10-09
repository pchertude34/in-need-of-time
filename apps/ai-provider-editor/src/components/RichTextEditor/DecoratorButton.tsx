import React from "react";
import { useEditor, useEditorSelector } from "@portabletext/editor";
import { isActiveDecorator } from "@portabletext/editor/selectors";
import { Button } from "@in-need-of-time/ui";

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
    <Button
      type="button"
      variant="toggle"
      size="icon-xs"
      rounded="md"
      aria-label={label}
      // The `toggle` variant styles its pressed state from this.
      aria-pressed={isActive}
      // The editor loses its selection if the button takes focus, so never let it.
      onMouseDown={(event) => event.preventDefault()}
      onClick={() => editor.send({ type: "decorator.toggle", decorator })}
    >
      {children}
    </Button>
  );
}
