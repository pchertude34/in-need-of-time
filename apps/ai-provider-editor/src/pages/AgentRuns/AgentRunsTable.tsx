import React, { useMemo, useState } from "react";
import {
  columnFilteringFeature,
  createColumnHelper,
  createFilteredRowModel,
  createSortedRowModel,
  filterFn_includesString,
  flexRender,
  globalFilteringFeature,
  rowSortingFeature,
  sortFn_alphanumeric,
  sortFn_text,
  tableFeatures,
  useTable,
  type SortingState,
} from "@tanstack/react-table";
import { ArrowDownIcon, ArrowUpIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Badge, Card, Input, InputGroup, InputLeftElement, Skeleton } from "@in-need-of-time/ui";
import { RunActionsMenu } from "./RunActionsMenu";
import { formatTimestamp, getStatusVariant } from "./utils";
import type { AgentJob } from "./types";

const DEFAULT_SORTING: SortingState = [{ id: "timestamp", desc: true }];

const SKELETON_ROWS = [0, 1, 2];

// v9 stitches features in statically rather than exposing every row model on
// every table — only sorting and filtering are needed here.
const features = tableFeatures({
  rowSortingFeature,
  columnFilteringFeature,
  globalFilteringFeature,
  sortedRowModel: createSortedRowModel(),
  filteredRowModel: createFilteredRowModel(),
  // Timestamps are ISO strings, so lexicographic order is chronological order.
  sortFns: { alphanumeric: sortFn_alphanumeric, text: sortFn_text },
  filterFns: { includesString: filterFn_includesString },
});

const columnHelper = createColumnHelper<typeof features, AgentJob>();

// `columnHelper.columns` keeps each column's value type while still typing the
// array as a whole — a bare array widens to a mismatched ColumnDef union.
// The actions column is added in the component, where it can reach `onDelete`;
// everything before it only needs the row.
const DATA_COLUMNS = columnHelper.columns([
  // Accessor functions rather than "input.message" paths: `input` is null on
  // runs created before the column existed.
  columnHelper.accessor((row) => row.input?.message ?? "", {
    id: "message",
    header: "Search",
    cell: (info) => <span className="line-clamp-2 text-sm text-slate-900">{info.getValue() || "—"}</span>,
  }),
  columnHelper.accessor((row) => row.input?.location ?? "", {
    id: "location",
    header: "Location",
    cell: (info) => <span className="text-sm text-slate-500">{info.getValue() || "—"}</span>,
  }),
  columnHelper.accessor("timestamp", {
    header: "Started",
    cell: (info) => <span className="text-sm text-slate-500">{formatTimestamp(info.getValue())}</span>,
  }),
  columnHelper.accessor((row) => row.user?.name ?? row.user?.id ?? "", {
    id: "user",
    header: "Triggered by",
    cell: (info) => {
      const user = info.row.original.user;

      if (!user) {
        return <span className="text-sm text-slate-500">—</span>;
      }

      return (
        <span className="flex items-center gap-2 text-sm text-slate-900">
          {user.profileImage && <img src={user.profileImage} alt="" className="h-5 w-5 rounded-full" />}
          {user.name ?? user.id}
        </span>
      );
    },
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => <Badge variant={getStatusVariant(info.getValue())}>{info.getValue()}</Badge>,
  }),
]);

type AgentRunsTableProps = {
  data: AgentJob[];
  isLoading?: boolean;
  /** Shown in place of the rows when the runs couldn't be loaded. */
  error?: string | null;
  onSelect: (job: AgentJob) => void;
  onDelete: (job: AgentJob) => Promise<void>;
};

export function AgentRunsTable(props: AgentRunsTableProps) {
  const { data, isLoading = false, error = null, onSelect, onDelete } = props;
  // Sorting and filtering are how this table is being looked at, not something
  // the page needs to know about, so they stay here.
  const [sorting, setSorting] = useState<SortingState>(DEFAULT_SORTING);
  const [globalFilter, setGlobalFilter] = useState("");

  const columns = useMemo(
    () =>
      columnHelper.columns([
        ...DATA_COLUMNS,
        columnHelper.display({
          id: "actions",
          header: "",
          cell: (info) => <RunActionsMenu onDelete={() => onDelete(info.row.original)} />,
        }),
      ]),
    [onDelete],
  );

  const table = useTable({
    features,
    data,
    columns,
    state: { sorting, globalFilter },
    globalFilterFn: "includesString",
    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
  });

  const rows = table.getRowModel().rows;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <InputGroup className="w-full sm:max-w-xs">
          <InputLeftElement>
            <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" />
          </InputLeftElement>
          <Input
            size="sm"
            className="pl-10"
            placeholder="Filter runs"
            aria-label="Filter runs"
            value={globalFilter}
            onChange={(event) => setGlobalFilter(event.target.value)}
          />
        </InputGroup>
        <p className="text-sm text-slate-500">
          {rows.length} of {data.length} runs
        </p>
      </div>

      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead className="border-b border-slate-200 bg-slate-50">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const sortDirection = header.column.getIsSorted();
                    const headerContent = flexRender(header.column.columnDef.header, header.getContext());

                    return (
                      <th key={header.id} className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase">
                        {/* The actions column has no header text and nothing to sort by,
                            so it isn't wrapped in an empty, unlabelled button. */}
                        {header.column.getCanSort() ? (
                          <button
                            type="button"
                            className="flex items-center gap-1 hover:text-slate-900"
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            {headerContent}
                            {sortDirection === "asc" && <ArrowUpIcon className="h-3 w-3" />}
                            {sortDirection === "desc" && <ArrowDownIcon className="h-3 w-3" />}
                          </button>
                        ) : (
                          headerContent
                        )}
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody className="divide-y divide-slate-200">
              {isLoading &&
                SKELETON_ROWS.map((row) => (
                  <tr key={row}>
                    {columns.map((_column, index) => (
                      <td key={index} className="px-4 py-4">
                        <Skeleton className="h-4 w-24" />
                      </td>
                    ))}
                  </tr>
                ))}
              {!isLoading &&
                rows.map((row) => (
                  // The whole row is the link target, so opening a run doesn't
                  // depend on hitting one particular cell.
                  <tr
                    key={row.id}
                    tabIndex={0}
                    className="cursor-pointer hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                    onClick={() => onSelect(row.original)}
                    onKeyDown={(event) => event.key === "Enter" && onSelect(row.original)}
                  >
                    {/* `getVisibleCells` belongs to the column visibility feature,
                        which this table doesn't register. */}
                    {row.getAllCells().map((cell) => (
                      <td key={cell.id} className="px-4 py-3 align-top">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {!isLoading && rows.length === 0 && (
          <p className="p-6 text-center text-sm text-slate-500">
            {error ?? (data.length === 0 ? "No runs yet." : "No runs match that filter.")}
          </p>
        )}
      </Card>
    </div>
  );
}
