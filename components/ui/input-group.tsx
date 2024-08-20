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
  children: React.ReactNode;
  className?: string;
};
export function InputLeftElement(props: InputLeftElementProps) {
  const { children, className } = props;

  return (
    <div className={cn("pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3", className)}>
      {children}
    </div>
  );
}

type InputRightElementProps = {
  children: React.ReactNode;
  className?: string;
};
export function InputRightElement(props: InputRightElementProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3", props.className)}>
      {props.children}
    </div>
  );
}
