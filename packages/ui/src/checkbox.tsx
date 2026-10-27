"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon, MinusIcon } from "lucide-react";

import { cn } from "@in-need-of-time/utils";

// Colors are spelled out (slate/primary) rather than shadcn's `border-input` /
// `bg-primary` tokens: this package's theme defines a palette, not shadcn's
// semantic tokens, so those class names would resolve to nothing.

function Checkbox({ className, ...props }: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "peer focus-visible:ring-primary-200 aria-invalid:border-error-500 aria-invalid:ring-error-200 data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500 data-[state=indeterminate]:border-primary-500 data-[state=indeterminate]:bg-primary-500 size-4 shrink-0 rounded-[4px] border border-slate-300 bg-white text-white shadow-xs transition-shadow outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-950",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="group grid place-content-center text-current transition-none"
      >
        <CheckIcon className="size-3.5 group-data-[state=indeterminate]:hidden" />
        <MinusIcon className="size-3.5 group-data-[state=checked]:hidden" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
