import { BaseRecord, HttpError } from "@refinedev/core"
import { UseTableReturnType } from "@refinedev/react-table"
import { flexRender } from "@tanstack/react-table"
import { Loader } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { ReloadButton } from "../reload-button"
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Table as TableUi,
} from "../ui/table"
import { DataTablePagination } from "./pagination"

interface AzirTableProps<
  TQueryFnData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TData extends BaseRecord = TQueryFnData
> {
  table: UseTableReturnType<TData, TError>
  stickyColumns?: number
  resource?: string
}
export default function AzirTable<
  TQueryFnData extends BaseRecord = BaseRecord,
  TError extends HttpError = HttpError,
  TData extends BaseRecord = TQueryFnData
>({
  table,
  stickyColumns = 1,
  resource,
}: AzirTableProps<TQueryFnData, TError, TData>) {
  const {
    refineCore: {
      tableQuery: { isFetching },
    },
  } = table

  const tableRef = useRef<HTMLTableElement>(null)
  const [columnWidths, setColumnWidths] = useState<number[]>([])

  useEffect(() => {
    const measureColumns = () => {
      if (tableRef.current && stickyColumns > 1) {
        const firstRow = tableRef.current.querySelector("thead tr")
        if (firstRow) {
          const cells = firstRow.querySelectorAll("th")
          const widths = Array.from(cells).map(
            (cell) => cell.getBoundingClientRect().width
          )
          setColumnWidths(widths)
        }
      }
    }
    const timer = setTimeout(measureColumns, 0)

    // Medir en resize
    window.addEventListener("resize", measureColumns)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", measureColumns)
    }
  }, [table.getRowModel().rows, stickyColumns])

  const getStickyClasses = (index: number): string => {
    if (index >= stickyColumns) return ""

    const isLastStickyColumn = index === stickyColumns - 1

    return `bg-background sticky z-${index === 0 ? "20" : "10"} ${
      isLastStickyColumn ? "shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]" : ""
    }`.trim()
  }

  const getStickyStyle = (index: number): React.CSSProperties => {
    if (index >= stickyColumns) return {}

    if (index === 0) return { left: 0 }

    // Calcular la suma de anchos de las columnas anteriores
    if (columnWidths.length > 0) {
      const leftOffset = columnWidths
        .slice(0, index)
        .reduce((sum: any, width: any) => sum + width, 0)
      return { left: leftOffset }
    }

    return { left: 0 }
  }
  // Prefer explicit resource prop, fallback to table.refineCore.resource
  console.log("Rerendering AzirTable", resource)

  return (
    <>
      <div className="mb-2 flex justify-end">
        <ReloadButton variant="secondary" size="sm" resourceName={resource} />
      </div>
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
