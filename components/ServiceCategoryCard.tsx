"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

type ServiceCategoryCardProps = {
  className?: string;
  title: string;
  description: string;
  icon: string;
  href: string;
};

export function ServiceCategoryCard(props: ServiceCategoryCardProps) {
  const { className, title, description, icon, href } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link href={href} legacyBehavior passHref>
      <a
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        className={cn(
          "focus-ring-primary block rounded-lg border-2 border-slate-200 bg-slate-50 p-6 transition-colors hover:border-primary-500 hover:bg-primary-50 focus:border-primary-500 focus:bg-primary-50",
          className,
        )}
      >
        <div>{icon}</div>
        <div className="mt-8">
          <div className="mb-1.5 flex items-center">
            <h6 className="text-lg font-semibold text-slate-900">{title}</h6>
            <div
              className={cn("ml-2 transform transition-all", {
                "-translate-x-2 opacity-0": !isHovering,
                "translate-x-0 opacity-100": isHovering,
              })}
            >
              <ArrowRightIcon className="h-5 w-5 text-secondary-500" />
            </div>
          </div>

          <p className="text-sm text-slate-700">{description}</p>
        </div>
      </a>
    </Link>
  );
}
