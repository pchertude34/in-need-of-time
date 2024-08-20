"use client";

import * as React from "react";
import { CarIcon, CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

type ComboboxProps = {
  items?: { value: string; label: string }[];
  placeholder?: string;
  emptyMessage?: string;
  className?: string;
};

export function Combobox(props: ComboboxProps) {
  const { items = [], placeholder, emptyMessage = "No items found", className } = props;
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="text-dark"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "justify-between font-normal",
            {
              "text-slate-500": !value,
              "text-slate-900": value,
            },
            className,
          )}
        >
          {value ? items.find((item) => item.value === value)?.label : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} className="h-9" />
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {items.map((item) => (
                <CommandItem
                  key={item.value}
                  value={item.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {item.label}
                  <CheckIcon className={cn("ml-auto h-4 w-4", value === item.value ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
