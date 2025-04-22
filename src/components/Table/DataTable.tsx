import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/Arrow. Down.svg";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import "./styles.css";
import Pagination from "../Pagination/Pagination";

type GenericTableProps<TData> = {
  data: TData[];
  columns: ColumnDef<TData>[];
  defaultSorting?: SortingState;
  defaultPageSize?: number;
};

function DataTable<TData>({
  data,
  columns,
  defaultSorting = [],
  defaultPageSize = 10,
}: GenericTableProps<TData>) {
  const [sorting, setSorting] = useState<SortingState>(defaultSorting);

  const table = useReactTable<TData>({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    initialState: {
      pagination: {
        pageSize: defaultPageSize,
      },
    },
    debugTable: true,
  });

  return (
    <div className="pr-6 main-container">
      <div className="rounded-lg overflow-hidden">
        <table className="w-full border-separate border-spacing-y-2">
          <thead className="bg-[#2D3B4E0A] h-[34px]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="relative">
                {headerGroup.headers.map((header) => {
                  const hasTag = header.column.columnDef.meta?.tag;
                  const isSortingApplied =
                    header.column.getIsSorted() !== false;
                  const isDescending = header.column.getIsSorted() === "desc";

                  return (
                    <th
                      key={header.id}
                      className={`px-4 py-2 text-left font-medium text-[11px] text-[#2D3B4E80] font-semibold ${
                        header.column.columnDef.meta?.headerClassName || ""
                      }`}
                      colSpan={header.colSpan}
                      style={{
                        width: "50px",
                      }}
                    >
                      {header.isPlaceholder ? null : (
                        <div
                          {...{
                            className: header.column.getCanSort()
                              ? "cursor-pointer select-none flex items-center gap-1"
                              : "",
                            onClick: header.column.getToggleSortingHandler(),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {isSortingApplied && (
                            <ArrowDown
                              width={12}
                              height={12}
                              style={{
                                transform: `${
                                  isDescending
                                    ? "rotate(0deg)"
                                    : "rotate(180deg)"
                                }`,
                              }}
                            />
                          )}
                          {hasTag}
                        </div>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                style={{ boxShadow: "0px 1px 1px 0px #2D3B4E0F" }}
                key={row.id}
                className="bg-[#FFFFFF] rounded-md "
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className={`px-4 py-2 ${
                      cell.column.columnDef.meta?.className || ""
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination table={table} />
    </div>
  );
}

export default DataTable;
