import React from "react";

import { ProviderMap } from "./components/ProviderMap";

type SearchPageProps = {
  searchParams?: { [key: string]: string };
};

export default function SearchPage(props: SearchPageProps) {
  console.log("props :>> ", props);
  return (
    <div>
      <ProviderMap />
    </div>
  );
}
