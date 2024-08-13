"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export const navigation = [{ name: "Home", href: "/" }];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Collapsible
      open={isMobileMenuOpen}
      onOpenChange={(open: boolean) => setIsMobileMenuOpen(open)}
      className="border-b border-gray-200 bg-white"
    >
      <>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=green&shade=600"
                  alt="Your Company"
                />
              </div>
              <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    className={cn("inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium", {
                      "border-emerald-500 text-gray-900": pathname === item.href,
                      "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700":
                        pathname !== item.href,
                    })}
                    href={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center">
              <Link href="/find" passHref>
                <Button variant={"light"}>Find Your Path</Button>
              </Link>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <CollapsibleTrigger className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </CollapsibleTrigger>
            </div>
          </div>
        </div>

        <CollapsibleContent className="sm:hidden">
          <div className="flex flex-col space-y-1 pb-3 pt-2">
            {navigation.map((item) => (
              <CollapsibleTrigger key={`mobile-menu${item.name}`} asChild>
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn("block border-l-4 py-2 pl-3 pr-4 text-base font-medium", {
                    "border-emerald-500 bg-emerald-50 text-emerald-700": pathname === item.href,
                    "border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800":
                      pathname !== item.href,
                  })}
                >
                  {item.name}
                </Link>
              </CollapsibleTrigger>
            ))}
          </div>
        </CollapsibleContent>
      </>
    </Collapsible>
  );
}
