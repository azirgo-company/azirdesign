import { BaseRecord, HttpError } from "@refinedev/core"
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table as TableUi,
} from "./components/ui/table"
import { Loader } from "lucide-react"
import { UseTableReturnType } from "@refinedev/react-table"
import { flexRender } from "@tanstack/react-table"

export default function CustomAzirTable<
  TQueryFnData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TData extends BaseRecord = TQueryFnData
>({
  table,
  resource,
}: {
  table: UseTableReturnType<TData, TError>
  resource?: string
}) {
  const {
    refineCore: {
      tableQuery: { isFetching },
    },
  } = table

  // Helper to resolve Show URL (copied from actions-field)
  function getShowUrl(id: string | number) {
    if (resource) {
      return `/${resource}/show/${String(id)}`
    }
    return `/show/${String(id)}`
  }

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
              table.getRowModel().rows.map((row) => {
                const id = row.original?.id
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className={id ? "cursor-pointer" : ""}
                    onClick={() => {
                      if (id) {
                        window.location.href = getShowUrl(id)
                      }
                    }}
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
                )
              })
            ) : !isFetching ? (
              <TableRow>
                <TableCell colSpan={2} className="h-24 w-full text-center">
                  No hay resultados.
                </TableCell>
              </TableRow>
            ) : null}
          </TableBody>
        </TableUi>
        {isFetching && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/30">
            <Loader className="animate-spin" />
          </div>
        )}
      </div>
    </>
  )
}
