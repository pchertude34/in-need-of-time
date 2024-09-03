"use client";

import React, { useState } from "react";
// import { Drawer, DrawerContent, DrawerTrigger, DrawerClose, DrawerTitle } from "@/components/ui/drawer";
import { Drawer } from "vaul";

type MobileResultsDrawerProps = {
  children?: React.ReactNode;
};

// Apparently there are issues with snap points in Shadcd's drawer component so we
// need to create another one using the underlying vaul component.
export function MobileResultsDrawer(props: MobileResultsDrawerProps) {
  const { children } = props;
  const [snap, setSnap] = useState<number | string | null>("152px");

  return (
    <Drawer.Root
      // allow interacting with the content behind the drawer
      modal={false}
      snapPoints={["152px", 1]}
      activeSnapPoint={snap}
      setActiveSnapPoint={setSnap}
      dismissible={false}
      open
    >
      <Drawer.Portal>
        <Drawer.Content
          aria-describedby={undefined}
          className="focus-ring-none border-b-none fixed bottom-0 left-0 right-0 z-20 mx-[-1px] flex h-full max-h-[calc(100dvh-88px)] flex-col rounded-t-xl border border-t border-slate-300  bg-white lg:hidden"
        >
          <Drawer.Title className="sr-only">Provider search results</Drawer.Title>
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
