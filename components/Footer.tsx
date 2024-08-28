import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <div className="container flex p-16">
      <div className="flex flex-1 flex-col space-y-4 text-sm text-slate-900">
        <Link href="/" passHref>
          <Image src="/logo.svg" alt="In Time of Need" height={68} width={96} className="h-auto w-24" />
        </Link>
        <p>© 2024 In Time of Need</p>
        <p>Privacy Policy / Cookie Policy</p>
      </div>
      <div className="ml-auto flex flex-1 justify-between">
        <div className="flex flex-col">
          <p className="mb-4 text-sm font-bold uppercase text-slate-900">Main Menu</p>
          <div className="flex flex-col space-y-2 text-sm text-slate-500">
            <Link href="/">Home</Link>
            <Link href="/search">Provider Search</Link>
            <Link href="/about">About</Link>
          </div>
        </div>
        <div className="">
          <p className="mb-4 text-sm font-bold uppercase text-slate-900">Contact Us</p>
          <div className=" flex flex-col space-y-2 text-sm text-slate-900">
            <Link href="tel:+1234567890">+1 (123) 456-7890</Link>
            <Link href="mailto:email@domain.com">email@domain.com</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
