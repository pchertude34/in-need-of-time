import * as React from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const inputVariants = cva(
  "flex w-full rounded-xl border border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 placeholder-slate-500 data-[placeholder]:text-slate-500 text-slate-900 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 bg-white",
  {
    variants: {
      variant: {
        primary: "border-slate-300 focus:border-primary-500 focus:ring-primary-200",
        success: "focus-ring-success border-success-500 focus:border-success-500",
      },
      size: {
        sm: "px-2.5 py-2 text-sm leading-4 h-8",
        default: "px-3.5 py-2.5 text-base h-10",
        lg: "px-4 py-3 text-lg leading-4 h-12",
      },
      status: {},
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface InputProps
  // Omit the standard size attribute from the input element in favor of our cva size variant attribute
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, status, size, type, ...props }, ref) => {
    return (
      <input type={type} className={cn(inputVariants({ variant, size, status, className }))} ref={ref} {...props} />
    );
  },
);
Input.displayName = "Input";

export { Input, inputVariants };
