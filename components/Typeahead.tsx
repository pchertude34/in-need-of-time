"use client";

import React, { useState } from "react";
import { useCombobox } from "downshift";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "./ui/input";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

type TypeaheadProps<T> = {
  items?: T[];
  onFilter: (item: T, query: string) => boolean;
  getDisplay: (item: T) => string;
  getKey: (item: T) => string;
  placeholder?: string;
  className?: string;
};

export function Typeahead<T>(props: TypeaheadProps<T>) {
  const { items = [], onFilter, getDisplay, getKey, placeholder, className } = props;
  const [filteredItems, setFilteredItems] = useState(items);

  const { isOpen, getToggleButtonProps, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
    items: filteredItems,
    onInputValueChange: ({ inputValue }) => {
      setFilteredItems(items.filter((item) => onFilter(item, inputValue)));
    },
    itemToString(item) {
      return item ? getDisplay(item) : "";
    },
  });

  return (
    <div className={className}>
      <InputGroup>
        <InputLeftElement>
          <MagnifyingGlassIcon className="h-4 w-4" />
        </InputLeftElement>
        <Input
          className="rounded-full border-transparent px-10 focus:border focus:border-slate-400 focus:bg-slate-50"
          placeholder={placeholder}
          {...getInputProps()}
        />
        <InputRightElement>
          <Button variant="text-dark" size="text" {...getToggleButtonProps()} aria-label="toggle menu">
            <ChevronDownIcon className="h-4 w-4" />
          </Button>
        </InputRightElement>
      </InputGroup>
      <ul
        className={cn(
          "absolute z-10 mt-2 max-h-96 min-w-[8rem] overflow-auto rounded-xl border border-slate-300 bg-white p-0 leading-5 shadow-xl",
          {
            hidden: !(isOpen && filteredItems.length),
          },
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          filteredItems.map((item, index) => (
            <li
              key={getKey(item)}
              className={cn("px-5 py-2 hover:bg-slate-100", {
                "bg-slate-100": highlightedIndex === index,
              })}
              {...getItemProps({ item, index })}
            >
              {getDisplay(item)}
            </li>
          ))}
      </ul>
    </div>
  );
}
