import type { SanityProviderCandidate } from "../types/pipeline";
import { displayValue } from "./utils";

type ProviderListCardProps = {
  candidate: SanityProviderCandidate;
  isSelected: boolean;
  onClick: () => void;
};

export function ProviderListCard({ candidate, isSelected, onClick }: ProviderListCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-lg border px-3 py-2.5 text-left transition-colors ${
        isSelected
          ? "border-[#375aa7] bg-white shadow-sm"
          : "border-[#c2cce0] bg-white shadow-sm hover:border-[#375aa7]/50"
      }`}
    >
      <p className="truncate text-[14px] font-bold tracking-tight text-black">{displayValue(candidate.name)}</p>
      <p className="mt-0.5 truncate text-[10px] font-medium text-[#7e8c9f]">{displayValue(candidate.address)}</p>
    </button>
  );
}
