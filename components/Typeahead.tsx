"use client";

import React, { useState } from "react";
import { useCombobox } from "downshift";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Input } from "./ui/input";
import { InputGroup, InputLeftElement, InputRightElement } from "./ui/input-group";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const books = [
  { id: "book-1", author: "Harper Lee", title: "To Kill a Mockingbird" },
  { id: "book-2", author: "Lev Tolstoy", title: "War and Peace" },
  { id: "book-3", author: "Fyodor Dostoyevsy", title: "The Idiot" },
  { id: "book-4", author: "Oscar Wilde", title: "A Picture of Dorian Gray" },
  { id: "book-5", author: "George Orwell", title: "1984" },
  { id: "book-6", author: "Jane Austen", title: "Pride and Prejudice" },
  { id: "book-7", author: "Marcus Aurelius", title: "Meditations" },
  {
    id: "book-8",
    author: "Fyodor Dostoevsky",
    title: "The Brothers Karamazov",
  },
  { id: "book-9", author: "Lev Tolstoy", title: "Anna Karenina" },
  { id: "book-10", author: "Fyodor Dostoevsky", title: "Crime and Punishment" },
];

type TypeaheadProps = {
  placeholder?: string;
  className?: string;
};

export function Typeahead(props: TypeaheadProps) {
  const { placeholder, className } = props;
  const [items, setItems] = useState(books);

  const { isOpen, getToggleButtonProps, getMenuProps, getInputProps, highlightedIndex, getItemProps } = useCombobox({
    items,
    onInputValueChange: ({ inputValue }) => {
      setItems(books.filter((item) => item.title.toLowerCase().startsWith(inputValue.toLowerCase())));
    },
    itemToString(item) {
      return item ? item.title : "";
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
          "absolute z-10 mt-2 max-h-80 w-72 overflow-scroll rounded-xl border border-slate-300 bg-white p-0 leading-5 shadow-xl",
          {
            hidden: !(isOpen && items.length),
          },
        )}
        {...getMenuProps()}
      >
        {isOpen &&
          items.map((item, index) => (
            <li
              className={cn("px-5 py-2 hover:bg-gray-100", {
                "bg-gray-100": highlightedIndex === index,
              })}
              key={item.id}
              {...getItemProps({ item, index })}
            >
              {item.title}
            </li>
          ))}
      </ul>
    </div>
  );
}
