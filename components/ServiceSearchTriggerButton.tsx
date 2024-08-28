import React from "react";
import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { InputGroup, InputRightElement, InputLeftElement } from "./ui/input-group";
import { cn } from "@/lib/utils";

type ServiceSearchTriggerButtonProps = {
  className?: string;
};
export function ServiceSearchTriggerButton(props: ServiceSearchTriggerButtonProps) {
  const { className } = props;

  return (
    <InputGroup className={cn("cursor-pointer", className)}>
      <InputLeftElement>
        <MagnifyingGlassIcon className="h-5 w-5 text-slate-500 hover:text-slate-600 focus:text-slate-700" />
      </InputLeftElement>
      <button className="focus-ring-primary flex w-full items-center rounded-full px-10 py-3 text-slate-500">
        Find a Provider
      </button>
      <InputRightElement>
        <span className="hover:bg-priamry-600 ml-auto rounded-full bg-primary-500 p-3 focus:bg-primary-700">
          <ArrowRightIcon className="  h-5 w-5 text-white" />
        </span>
      </InputRightElement>
    </InputGroup>
  );
}
