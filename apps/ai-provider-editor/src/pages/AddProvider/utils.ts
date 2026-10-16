import { US_STATES } from "@in-need-of-time/utils";

export const MAX_PROVIDER_ROWS = 25;

export type ProviderRow = {
  id: string;
  name: string;
  state: string;
};

// A pasted line may carry its state after a tab or comma ("Westwood Food Pantry, Ohio"),
// which is how a column copied out of a spreadsheet arrives.
const STATE_SEPARATOR = /\t|,/;

export function createRow(state: string, name = ""): ProviderRow {
  return { id: crypto.randomUUID(), name, state };
}

/** Whether a row has anything worth sending to the agent. */
export function isFilledRow(row: ProviderRow): boolean {
  return row.name.trim().length > 0;
}

/**
 * Splits pasted text into one row per non-blank line. A line ending in a known
 * state name ("Name, Ohio" or "Name<TAB>Ohio") takes that state; otherwise the
 * row falls back to `defaultState`.
 */
export function parseProviderList(text: string, defaultState: string): ProviderRow[] {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .map((line) => {
      const parts = line.split(STATE_SEPARATOR);
      const state = parts.length > 1 ? findState(parts[parts.length - 1]) : undefined;

      if (!state) {
        return createRow(defaultState, line);
      }

      return createRow(state, parts.slice(0, -1).join(",").trim());
    })
    .filter(isFilledRow);
}

/**
 * Puts `incoming` rows into `rows` right after `index`, drops blank rows (so
 * pasting into an empty row fills it rather than leaving a gap), enforces the
 * batch limit, and leaves one blank row at the end for the next entry when
 * there's room. Returns the new rows and how many pasted rows didn't fit.
 */
export function insertRows(
  rows: ProviderRow[],
  index: number,
  incoming: ProviderRow[],
  defaultState: string,
): { rows: ProviderRow[]; overflow: number } {
  const merged = [...rows.slice(0, index + 1), ...incoming, ...rows.slice(index + 1)].filter(isFilledRow);
  const overflow = Math.max(0, merged.length - MAX_PROVIDER_ROWS);
  const kept = merged.slice(0, MAX_PROVIDER_ROWS);

  return {
    rows: kept.length < MAX_PROVIDER_ROWS ? [...kept, createRow(defaultState)] : kept,
    overflow,
  };
}

function findState(value: string): string | undefined {
  const normalized = value.trim().toLowerCase();

  return US_STATES.find((state) => state.label.toLowerCase() === normalized)?.value;
}
