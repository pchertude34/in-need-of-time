import React from "react";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { InputGroup, InputRightElement, InputLeftElement } from "@in-need-of-time/ui";
import { cn } from "@in-need-of-time/utils";

type ServiceSearchTriggerButtonProps = Omit<React.ComponentProps<"button">, "children">;

// Remaining props (and ref) land on the inner <button> so this can be used as a
// drawer trigger's `render` element.
export function ServiceSearchTriggerButton(props: ServiceSearchTriggerButtonProps) {
  const { className, ...buttonProps } = props;

  return (
    <InputGroup className={cn("cursor-pointer", className)}>
      <InputLeftElement>
        <MagnifyingGlassIcon className="h-5 w-5 text-slate-500 hover:text-slate-600 focus:text-slate-700" />
      </InputLeftElement>
      <button
        {...buttonProps}
        className="focus-ring-primary flex w-full items-center rounded-full px-10 py-3 text-slate-500"
      >
        Find a Provider
      </button>
      <InputRightElement>
        <span className="hover:bg-priamry-600 bg-primary-500 focus:bg-primary-700 ml-auto rounded-full p-3">
          <ArrowRightIcon className="h-5 w-5 text-white" />
        </span>
      </InputRightElement>
    </InputGroup>
  );
}
