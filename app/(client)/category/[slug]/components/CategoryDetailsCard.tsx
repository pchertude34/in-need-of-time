"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

type CategoryDetailsCardProps = {
  label: string;
  description: string;
  count?: number;
  className?: string;
};

export function CategoryDetailsCard(props: CategoryDetailsCardProps) {
  const { label, description, count, className } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      href={"/"}
      className={cn(
        "focus-ring-primary flex flex-col space-y-1.5 rounded-lg border-2 border-slate-200 bg-slate-50 transition-colors hover:border-primary-500 hover:bg-primary-50 focus:border-primary-500 focus:bg-primary-50 sm:p-6",
        className,
      )}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center">
          <h3 className="text-lg font-semibold">{label}</h3>
          <div
            className={cn("ml-2 transform transition-all", {
              "-translate-x-2 opacity-0": !isHovering,
              "translate-x-0 opacity-100": isHovering,
            })}
          >
            <ArrowRightIcon className="h-5 w-5 text-secondary-500" />
          </div>
        </div>

        {count && <span className="">{count}</span>}
      </div>
      <p className="text-slate-700">{description}</p>
    </Link>
  );
}
