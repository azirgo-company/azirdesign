import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpWideNarrow,
} from "lucide-react"
import React, { ReactNode } from "react"

import { HeaderContext } from "@tanstack/react-table"
import { Button } from "../../ui/button"

type TableHeaderActionsProps<TData> = HeaderContext<TData, unknown> & {
  label: string
  sortable?: boolean
  filter?: ReactNode
}

function getSortIcon(isSorted: string | false) {
  switch (isSorted) {
    case "asc":
      return <ArrowUpWideNarrow className="text-primary size-4" />
    case "desc":
      return <ArrowDownWideNarrow className="text-primary size-4" />
    default:
      return <ArrowUpDown className="size-4" />
  }
}

function TableHeaderActions<TData>({
  column,
  label,
  sortable = false,
  filter,
}: TableHeaderActionsProps<TData>) {
  return (
    <span className="inline-flex items-center gap-1">
      {label}
      {sortable && (
        <Button
          size="sm"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          aria-label={`Order by ${label}`}
        >
          {getSortIcon(column.getIsSorted())}
        </Button>
      )}
      {filter}
    </span>
  )
}

export default TableHeaderActions
