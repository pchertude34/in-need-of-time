import React from "react";
import { cn } from "@/lib/utils";

type InputGroupProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

export function InputGroup(props: InputGroupProps) {
  const { children, className } = props;

  return <div className={cn("relative", className)}>{children}</div>;
}

type InputLeftElementProps = {
  isButton?: boolean;
  children: React.ReactNode;
  className?: string;
};
export function InputLeftElement(props: InputLeftElementProps) {
  const { isButton = false, children, className } = props;

  return (
    <div
      className={cn(
        "absolute inset-y-0 left-0 flex items-center pl-3",
        {
          "pointer-events-auto": isButton,
          "pointer-events-none": !isButton,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}

type InputRightElementProps = {
  isButton?: boolean;
  children: React.ReactNode;
  className?: string;
};
export function InputRightElement(props: InputRightElementProps) {
  const { isButton = true, children, className } = props;
  return (
    <div
      className={cn(
        " absolute inset-y-0 right-0 flex items-center pr-3",
        {
          "pointer-events-auto": isButton,
          "pointer-events-none": !isButton,
        },
        className,
      )}
    >
      {children}
    </div>
  );
}
