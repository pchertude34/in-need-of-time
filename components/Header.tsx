"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowRightIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

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
        {isMobileMenuOpen && (
          <div className="fixed z-10 h-screen w-screen bg-[#01181C] opacity-80 mix-blend-overlay sm:hidden"></div>
        )}
        <div className="relative z-20 mx-auto max-w-7xl bg-white px-4 py-5 sm:px-6 lg:p-5">
          <div className="flex">
            <div className="flex flex-1 items-center">
              <div className="flex flex-shrink-0 items-center">
                <Link href="/" passHref>
                  <Image src="/logo.svg" alt="Logo" height={45} width={66} className="hidden h-12 w-auto lg:block" />
                </Link>
                <Link href="/" passHref>
                  <Image src="/logo.svg" alt="Logo" height={40} width={59} className="block h-10 w-auto lg:hidden" />
                </Link>
              </div>
            </div>
            <div className="hidden flex-1 items-center justify-center sm:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                      <NavigationMenuLink
                        data-active={pathname === "/" ? true : null}
                        className={navigationMenuTriggerStyle()}
                      >
                        <HomeIcon className="mr-2 h-4 w-4" />
                        Home
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/search" legacyBehavior passHref>
                      <NavigationMenuLink
                        data-active={pathname === "/search" ? true : null}
                        className={navigationMenuTriggerStyle()}
                      >
                        <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
                        Search
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  {/* <NavigationMenuItem>
                      <Link href="/providers" legacyBehavior passHref>
                        <NavigationMenuLink
                          data-active={pathname === "/providers" ? true : null}
                          className={navigationMenuTriggerStyle()}
                        >
                          Providers
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem> */}
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        data-active={pathname === "/about" ? true : null}
                        className={navigationMenuTriggerStyle()}
                      >
                        <BookOpenIcon className="mr-2 h-4 w-4" />
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="hidden flex-1 items-center justify-end sm:flex">
              <Button variant="primary" asChild>
                <Link href="/find">
                  Find a Provider <ArrowRightIcon className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
            <div className="-mr-2 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <CollapsibleTrigger asChild>
                <Button variant="text-dark" size="text">
                  <span className="sr-only">Open main menu</span>
                  {isMobileMenuOpen ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <CollapsibleContent className="absolute z-10 w-screen rounded-b-xl bg-white sm:hidden">
          <div className="px-4 pb-5 pt-2">
            <NavigationMenu orientation="vertical" className="max-w-full flex-col items-stretch">
              <NavigationMenuList className="flex-col items-stretch">
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      data-active={pathname === "/" ? true : null}
                      className={`${navigationMenuTriggerStyle()} w-max-w w-full`}
                    >
                      <HomeIcon className="mr-2 h-4 w-4" />
                      Home
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/search" legacyBehavior passHref>
                    <NavigationMenuLink
                      data-active={pathname === "/search" ? true : null}
                      className={`${navigationMenuTriggerStyle()} w-max-w w-full`}
                    >
                      <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
                      Search
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button variant="primary" asChild className="mt-6 w-full">
              <Link href="/find">
                Find a Provider <ArrowRightIcon className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </div>
        </CollapsibleContent>
      </>
    </Collapsible>
  );
}
