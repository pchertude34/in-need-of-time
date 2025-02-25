import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center border border-transparent whitespace-nowrap transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700 active:border-primary-300 disabled:bg-primary-300 focus:ring-primary-200",
        dark: "bg-slate-700 text-white hover:bg-slate-800 active:bg-slate-900 active:border-slate-300 disabled:bg-slate-500 focus:ring-slate-200",
        light:
          "text-slate-900 bg-slate-100 hover:bg-slate-200 active:bg-slate:300 active:border-slate-50 disabled:bg-slate-50 disabled:text-slate-500 focus:ring-slate-200",
        "hollow-primary":
          "border-primary-500 text-primary-500 active:border-primary-700 hover:bg-primary-50 active:bg-primary-50 focus-ring-primary",
        "text-dark":
          "text-slate-600 bg-transparent hover:text-800 disabled:text-500 active:text-900 focus:ring-slate-200",
        "text-light": "text-white bg-transparent hover:text-slate-50 disabled:text-slate-100 focus:ring-white",
        "text-primary":
          "text-primary-500 bg-transparent hover:text-primary-600 disabled:text-primary-300 active:text-primary-700 focus:ring-primary-200",
      },
      size: {
        sm: "px-4 py-2 text-sm leading-4 h-7 font-medium",
        default: "px-6 py-3 text-base h-10 font-medium",
        lg: "px-8 py-4 text-lg leading-4 h-12 font-semibold",
        "icon-sm": "p-2 h-8 w-8",
        icon: "p-3 h-10 w-10",
        "icon-lg": "p-4 h-12 w-12",
        "text-sm": "p-0 text-sm font-medium",
        text: "p-0 text-base font-medium",
        "text-lg": "p-0 text-lg font-semibold",
      },
      rounded: {
        full: "rounded-full",
        xl: "rounded-xl",
        lg: "rounded-lg",
        md: "rounded-md",
        sm: "rounded-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      rounded: "full",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, rounded, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
