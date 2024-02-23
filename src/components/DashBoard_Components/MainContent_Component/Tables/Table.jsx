
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { v4 } from "uuid";
import TablePagination from "./TablePagination";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

export default function TableSection({
  columnData,
  mData,
//   viewType,
  size=20,
  filterState,
}) {
  const data = useMemo(() => mData, []);
  const columns = useMemo(() => columnData, []);
  const [sorting, setSorting] = useState();

  // console.log(mData);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filterState.filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: filterState.setFiltering,
  });

  useEffect(() => {
    const handleSize = () => {
      table.setPageSize(size);
    };

    handleSize();
  }, [size]);
  return (
    <div className="space-y-3">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={v4()}>
              {headerGroup.headers.map((header) => (
                <th
                  key={v4()}
                  className="text-gray-500 font-semibold text-xs"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex gap-2 items-center cursor-pointer">
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                    <span>
                      {
                        { asc: <BiCaretUp />, desc: <BiCaretDown /> }[
                          header.column.getIsSorted() ?? null
                        ]
                      }
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={v4()}>
              {row.getVisibleCells().map((cell) => (
                <td key={v4()} className="text-sm font-medium text-gray-500">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination table={table} />
    </div>
  );
}
