import React from "react";

import { ProviderMap } from "./components/ProviderMap";

type SearchPageProps = {
  searchParams?: { [key: string]: string };
};

export default function SearchPage(props: SearchPageProps) {
  return (
    <div>
      <h1 className="absolute right-0 z-10">Hello world</h1>
      <ProviderMap />
    </div>
  );
}
