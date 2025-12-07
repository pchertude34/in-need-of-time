"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
    <Link
      href={href}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      className={cn(
        "focus-ring-primary flex w-full rounded-lg border-2 border-slate-200 bg-slate-50 p-3 transition-colors hover:border-primary-500 hover:bg-primary-50 focus:border-primary-500 focus:bg-primary-50 sm:block sm:max-w-[260px] sm:p-6",
        className,
      )}
    >
      {/* <div>{icon}</div> */}
      <div className="mt-2 max-w-[24px] shrink-0 p-0 sm:m-0 sm:max-w-full sm:p-2">
        <Image src={icon} alt={title} width={32} height={32} />
      </div>
      <div className="ml-3 sm:mt-6">
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
    </Link>
  );
}
