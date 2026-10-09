import * as React from "react";

import { cn } from "@in-need-of-time/utils";
import { cva, VariantProps } from "class-variance-authority";

const textareaVariants = cva(
  "flex w-full rounded-xl border border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 placeholder-slate-500 text-slate-900 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 bg-white",
  {
    variants: {
      variant: {
        primary: "border-slate-300 focus:border-primary-500 focus:ring-primary-200",
        success: "focus-ring-success border-success-500 focus:border-success-500",
      },
      size: {
        sm: "px-2.5 py-2 text-sm leading-5",
        default: "px-3.5 py-2.5 text-base",
        lg: "px-4 py-3 text-lg leading-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface TextareaProps
  // Omit the standard rows-driven `size`-like attributes in favor of our cva size variant attribute
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">, VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, rows = 4, ...props }, ref) => {
    return <textarea rows={rows} className={cn(textareaVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
