import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@in-need-of-time/utils";

// Same palette as badge.tsx's variants (plus `warning`, which badges don't
// need yet) — concrete colors, not shadcn's semantic tokens, for the same
// reason noted in dialog.tsx: this package's theme is a palette, not a
// semantic token set.
const alertVariants = cva(
  "relative grid w-full grid-cols-[0_1fr] items-start gap-y-0.5 rounded-lg border px-4 py-3 text-sm has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] has-[>svg]:gap-x-3 [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "border-slate-200 bg-slate-50 text-slate-900",
        primary: "border-primary-200 bg-primary-50 text-primary-700",
        success: "border-success-200 bg-success-50 text-success-700",
        warning: "border-warning-200 bg-warning-50 text-warning-700",
        error: "border-error-200 bg-error-50 text-error-700",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface AlertProps extends React.ComponentProps<"div">, VariantProps<typeof alertVariants> {}

function Alert({ className, variant, ...props }: AlertProps) {
  return <div data-slot="alert" role="alert" className={cn(alertVariants({ variant }), className)} {...props} />;
}

function AlertTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-title"
      className={cn("col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight", className)}
      {...props}
    />
  );
}

function AlertDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="alert-description"
      className={cn("col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  );
}

export { Alert, AlertTitle, AlertDescription, alertVariants };
