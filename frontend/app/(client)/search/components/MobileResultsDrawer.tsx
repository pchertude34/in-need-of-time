"use client";

import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTitle } from "@in-need-of-time/ui";

type MobileResultsDrawerProps = {
  children?: React.ReactNode;
};

type SnapPoint = NonNullable<React.ComponentProps<typeof Drawer>["snapPoint"]>;

// Tall enough to show the drag handle and "N results found" line rendered by the
// search page (~77px including the drawer's top border), but none of the results.
// Update this if that header markup changes.
const COLLAPSED_SNAP_POINT = "3.5rem";

export function MobileResultsDrawer(props: MobileResultsDrawerProps) {
  const { children } = props;
  const [snap, setSnap] = useState<SnapPoint>(COLLAPSED_SNAP_POINT);

  return (
    <Drawer
      // allow interacting with the content behind the drawer
      modal={false}
      showSwipeHandle
      snapPoints={[COLLAPSED_SNAP_POINT, 1]}
      snapPoint={snap}
      // ignore the null snap point reported when swiping past the lowest point
      onSnapPointChange={(point) => point !== null && setSnap(point)}
      // controlled with no onOpenChange, so it can never be dismissed
      open
      disablePointerDismissal
    >
      <DrawerContent
        initialFocus={false}
        className="focus-ring-none border-x border-slate-300 lg:hidden"
        // keep the fully-open drawer below the site header
        style={{ "--drawer-content-max-height": "calc(100dvh - 88px)" } as React.CSSProperties}
      >
        <DrawerTitle className="sr-only">Provider search results</DrawerTitle>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
