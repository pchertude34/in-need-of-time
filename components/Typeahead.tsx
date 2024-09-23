"use client";

import React, { useState, useCallback } from "react";
import { useCombobox, UseComboboxState, UseComboboxStateChangeOptions } from "downshift";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "./ui/input";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type TypeaheadProps<T> = {
  items?: T[];
  onFilter: (item: T, query: string) => boolean;
  getDisplay: (item: T) => string;
  getKey: (item: T) => string;
  onItemSelected: (selectedItem: T) => void;
  placeholder?: string;
  className?: string;
};

export function Typeahead<T>(props: TypeaheadProps<T>) {
  const { items = [], onFilter, onItemSelected, getDisplay, getKey, placeholder, className } = props;
  const [filteredItems, setFilteredItems] = useState(items);

  const stateReducer = useCallback((state: UseComboboxState<T>, actionAndChanges: UseComboboxStateChangeOptions<T>) => {
    const { type, changes } = actionAndChanges;

    switch (type) {
      case useCombobox.stateChangeTypes.InputChange:
        // Clear the selected item when the user types if an item is selected
        if (state.selectedItem)
          return {
            ...changes,
            selectedItem: null,
            // Clear the input since the selected item is cleared
            inputValue: "",
          };
        else return changes;
      default:
        return changes;
    }
  }, []);

  const { isOpen, getToggleButtonProps, getMenuProps, getInputProps, highlightedIndex, getItemProps, selectedItem } =
    useCombobox({
      items: filteredItems,
      onInputValueChange: ({ inputValue }) => {
        setFilteredItems(items.filter((item) => onFilter(item, inputValue)));
      },
      onSelectedItemChange: ({ selectedItem }) => {
        onItemSelected(selectedItem);
      },
      itemToString(item) {
        return item ? getDisplay(item) : "";
      },
      stateReducer,
    });

  return (
    <div className={className}>
      <InputGroup>
        <InputLeftElement>
          <MagnifyingGlassIcon className="h-4 w-4" />
        </InputLeftElement>
        <Input
          className={cn("rounded-full px-10 focus:border focus:bg-slate-50", {
            "border-transparent focus:border-slate-400": !selectedItem,
          })}
          placeholder={placeholder}
          variant={selectedItem ? "success" : "primary"}
          {...getInputProps()}
        />
        <InputRightElement>
          {selectedItem && <CheckCircleIcon className="mr-1 h-5 w-5 text-success-400" />}
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
