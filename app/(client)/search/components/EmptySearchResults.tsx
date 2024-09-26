import React from "react";

export function EmptySearchResults() {
  return (
    <div className="rounded-xl bg-slate-200 p-4">
      <p>We could not find any results for your search criteria. Please modify your search and try again.</p>
    </div>
  );
}
