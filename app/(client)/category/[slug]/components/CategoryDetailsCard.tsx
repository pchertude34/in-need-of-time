import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CategoryDetailsCardProps = {
  label: string;
  description: string;
  count: number;
};

export function CategoryDetailsCard(props: CategoryDetailsCardProps) {
  const { label, description, count } = props;

  return (
    <Link
      href={"/"}
      className={cn(
        "focus-ring-primary flex rounded-lg border-2 border-slate-200 transition-colors hover:border-primary-500 hover:bg-primary-50 focus:border-primary-500 focus:bg-primary-50 sm:p-6",
      )}
    >
      <div className="flex w-full items-center justify-between">
        <h3>{label}</h3>
        <span className="">{count}</span>
      </div>
    </Link>
  );
}
