import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CategoryDetailsCardProps = {
  label: string;
  description: string;
  count?: number;
  className?: string;
};

export function CategoryDetailsCard(props: CategoryDetailsCardProps) {
  const { label, description, count, className } = props;

  return (
    <Link
      href={"/"}
      className={cn(
        "focus-ring-primary flex flex-col space-y-1.5 rounded-lg border-2 border-slate-200 bg-slate-50 transition-colors hover:border-primary-500 hover:bg-primary-50 focus:border-primary-500 focus:bg-primary-50 sm:p-6",
        className,
      )}
    >
      <div className="flex w-full items-center justify-between">
        <h3 className="text-lg font-semibold">{label}</h3>
        {count && <span className="">{count}</span>}
      </div>
      <p className="text-slate-700">{description}</p>
    </Link>
  );
}
