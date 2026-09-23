import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bars3Icon, XMarkIcon, UserPlusIcon, ClockIcon } from "@heroicons/react/24/outline";
import {
  Badge,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
  Button,
} from "@in-need-of-time/ui";

export const navigation = [
  { name: "Add Provider", href: "/", icon: UserPlusIcon },
  { name: "Agent Runs", href: "/runs", icon: ClockIcon },
];

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <Drawer shouldScaleBackground={false} direction="top">
      <>
        <div className="border-b border-slate-200">
          <div className="relative z-20 mx-auto max-w-7xl bg-white px-4 py-5 sm:px-6 lg:p-5">
            <div className="flex items-center">
              <div className="flex flex-1 shrink-0 items-center gap-2">
                <span className="hidden w-[66px] lg:block">
                  <Link to="/">
                    <img src="/logo.svg" alt="Logo" className="h-12 w-auto" />
                  </Link>
                </span>
                <span className="block w-[59px] lg:hidden">
                  <Link to="/">
                    <img src="/logo.svg" alt="Logo" className="block h-10 w-auto lg:hidden" />
                  </Link>
                </span>
                <Badge variant="primary">CMS</Badge>
              </div>
              <div className="hidden lg:flex">
                <NavigationMenu>
                  <NavigationMenuList>
                    {navigation.map((item) => (
                      <NavigationMenuItem key={item.href}>
                        <NavigationMenuLink
                          asChild
                          data-active={pathname === item.href ? true : null}
                          className={navigationMenuTriggerStyle()}
                        >
                          <Link to={item.href}>
                            <item.icon className="mr-2 h-4 w-4" />
                            {item.name}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              <div className="-mr-2 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <DrawerTrigger asChild>
                  <Button variant="text-dark" size="text">
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  </Button>
                </DrawerTrigger>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <DrawerContent variant="top" className="focus-ring-none" aria-describedby={undefined}>
          <DrawerTitle className="sr-only">Main Menu</DrawerTitle>
          <div className="px-4 pb-5">
            <div className="flex items-center justify-between py-5">
              <div className="flex items-center gap-2">
                <Link to="/">
                  <img src="/logo.svg" alt="Logo" className="h-10 w-auto" />
                </Link>
                <Badge variant="primary">CMS</Badge>
              </div>
              <DrawerClose asChild>
                <Button variant="text-dark" size="text">
                  <XMarkIcon className="h-6 w-6" />
                </Button>
              </DrawerClose>
            </div>
            <NavigationMenu orientation="vertical" className="max-w-full flex-col items-stretch">
              <NavigationMenuList className="flex-col items-stretch">
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <DrawerClose asChild>
                      <NavigationMenuLink
                        asChild
                        data-active={pathname === item.href ? true : null}
                        className={`${navigationMenuTriggerStyle()} w-max-w w-full`}
                      >
                        <Link to={item.href}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.name}
                        </Link>
                      </NavigationMenuLink>
                    </DrawerClose>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </DrawerContent>
      </>
    </Drawer>
  );
}
