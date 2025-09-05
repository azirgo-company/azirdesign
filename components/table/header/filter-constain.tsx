import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react"
import { Check, Funnel, FunnelX, Search, X } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover"

import { Button } from "./components/ui/button"
import { HeaderContext } from "@tanstack/react-table"

/**
 * FilterPopoverInput
 * A table column filter input with popover, clear, and apply actions.
 * - Shows a funnel icon when no filter is set.
 * - Shows a truncated filter value and clear icon when filter is set.
 * - Clicking the value or funnel opens a popover to edit/apply/clear the filter.
 */

interface FilterPopoverInputProps<TData> extends HeaderContext<TData, unknown> {
  placeholder?: string
}

export function FilterPopoverInput<TData>({
  column,
  placeholder = "Buscar...",
}: FilterPopoverInputProps<TData>) {
  const [isPopoverOpen, setPopoverOpen] = useState(false)
  const [inputValue, setInputValue] = useState<string>(
    (column.getFilterValue() as string) || ""
  )
  const inputRef = useRef<HTMLInputElement>(null)

  // Sync inputValue with column filter value when it changes externally
  useEffect(() => {
    setInputValue((column.getFilterValue() as string) || "")
  }, [column.getFilterValue()])

  // Focus input when popover opens
  useEffect(() => {
    if (isPopoverOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isPopoverOpen])

  const openPopover = () => {
    setInputValue((column.getFilterValue() as string) || "")
    setPopoverOpen(true)
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      applyFilter()
    }
  }

  const applyFilter = () => {
    column.setFilterValue(inputValue)
    setPopoverOpen(false)
  }

  const clearFilter = () => {
    setInputValue("")
    column.setFilterValue("")
    setPopoverOpen(false)
  }

  const renderTruncatedValue = (value: string) => {
    if (!value) return ""
    return value.length > 12 ? value.slice(0, 12) + "..." : value
  }

  const filterValue = (column.getFilterValue() as string) || ""

  return (
    <span className="inline-flex items-center gap-1">
      <Popover open={isPopoverOpen} onOpenChange={setPopoverOpen}>
        <PopoverTrigger asChild>
          {!filterValue ? (
            <Button
              size="sm"
              variant="ghost"
              aria-label={isPopoverOpen ? "Close filter" : "Open filter"}
              onClick={openPopover}
            >
              <Search />
            </Button>
          ) : (
            <button
              type="button"
              className="text-primary m-0 max-w-[60px] cursor-pointer truncate border-0 bg-transparent p-0 text-left text-xs"
              onClick={openPopover}
              aria-label="Edit filter"
            >
              {renderTruncatedValue(filterValue)}
            </button>
          )}
        </PopoverTrigger>
        <PopoverContent
          className="flex w-full items-center gap-2 p-2"
          align="start"
          sideOffset={8}
        >
          <input
            ref={inputRef}
            type="text"
            className="flex-1 rounded border px-2 py-1 text-sm"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            autoFocus
            onKeyDown={handleInputKeyDown}
          />
          <Button
            size="sm"
            variant="ghost"
            onClick={applyFilter}
            aria-label="Apply filter"
          >
            <Check />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={clearFilter}
            aria-label="Clear filter"
          >
            <X className={filterValue ? "text-primary" : ""} />
          </Button>
        </PopoverContent>
        {filterValue && (
          <Button
            size="sm"
            variant="ghost"
            onClick={clearFilter}
            aria-label="Clear filter"
          >
            <FunnelX className="text-destructive" />
          </Button>
        )}
      </Popover>
    </span>
  )
}
