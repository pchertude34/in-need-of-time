import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@in-need-of-time/utils";

const badgeVariants = cva("inline-flex items-center rounded-full border font-semibold", {
  variants: {
    variant: {
      default: "border-slate-200 bg-slate-100 text-slate-900",
      light: "border-slate-200 bg-white text-slate-900",
      primary: "border-primary-200 bg-primary-50 text-primary-700",
      success: "border-success-200 bg-success-50 text-success-700",
      error: "border-error-200 bg-error-50 text-error-700",
    },
    size: {
      sm: "px-2 py-0.5 text-[0.6875rem] leading-4",
      default: "px-2.5 py-0.5 text-xs",
      lg: "px-3 py-1 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
