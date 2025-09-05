import { BaseRecord, HttpError } from "@refinedev/core"

import { Loader } from "lucide-react"
import { UseTableReturnType } from "@refinedev/react-table"
import { flexRender } from "@tanstack/react-table"
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table as TableUi,
} from "../ui/table"
import { DataTablePagination } from "./pagination"

export default function AzirTable<
  TQueryFnData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TData extends BaseRecord = TQueryFnData
>({ table }: { table: UseTableReturnType<TData, TError> }) {
  const {
    refineCore: {
      tableQuery: { isFetching },
    },
  } = table

  return (
    <>
      <div className="relative overflow-hidden rounded-md border">
        <TableUi>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="h-24 w-full text-center">
                  No hay resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </TableUi>
        {isFetching && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/30">
            <Loader className="animate-spin" />
          </div>
        )}
      </div>
      <DataTablePagination className="mt-2" table={table} />
    </>
  )
}
