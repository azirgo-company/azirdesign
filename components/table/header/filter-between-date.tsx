import { useEffect, useState } from "react"
import { CalendarDays, Check, FunnelX } from "lucide-react"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./components/ui/popover"
import { Button } from "./components/ui/button"
import { format } from "date-fns"
import { HeaderContext } from "@tanstack/react-table"
import { Calendar } from "./components/ui/calendar"
import { DateRange } from "react-day-picker"

export function FilterBetweenDate<TData>({
  column,
}: HeaderContext<TData, unknown>) {
  const [isOpen, setIsOpen] = useState(false)
  const [range, setRange] = useState<DateRange | undefined>()

  useEffect(() => {
    const filterValue = column.getFilterValue() as string[] | undefined
    if (filterValue && Array.isArray(filterValue) && filterValue.length === 2) {
      setRange({
        from: new Date(filterValue[0]),
        to: new Date(filterValue[1]),
      })
    } else {
      setRange(undefined)
    }
  }, [column])

  const applyFilter = () => {
    if (range?.from && range?.to) {
      column.setFilterValue([
        format(range.from, "yyyy-MM-dd HH:mm:ss.SSS"),
        format(range.to, "yyyy-MM-dd HH:mm:ss.SSS"),
      ])
    } else {
      column.setFilterValue(undefined)
    }
    setIsOpen(false)
  }

  const clearFilter = () => {
    setRange(undefined)
    column.setFilterValue(undefined)
    setIsOpen(false)
  }

  const renderLabel = () => {
    if (!range?.from || !range?.to) return <CalendarDays />
    const formattedFrom = format(range.from, "dd/MM/yyyy")
    const formattedTo = format(range.to, "dd/MM/yyyy")
    return (
      <span className="text-primary text-xs">
        {formattedFrom} - {formattedTo}
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            variant="ghost"
            aria-label={isOpen ? "Cerrar filtro" : "Abrir filtro"}
          >
            {renderLabel()}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-4" align="start" sideOffset={8}>
          <div className="flex flex-col items-start gap-2">
            <Calendar
              mode="range"
              selected={range}
              onSelect={setRange}
              numberOfMonths={1}
              required
            />
            <div className="mt-2 flex w-full justify-end gap-2">
              <Button size="sm" variant="ghost" onClick={applyFilter}>
                <Check />
              </Button>
              <Button size="sm" variant="ghost" onClick={clearFilter}>
                <FunnelX className="text-destructive" />
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>

      {range?.from && range?.to && (
        <Button
          size="sm"
          variant="ghost"
          onClick={clearFilter}
          aria-label="Clear filter"
        >
          <FunnelX className="text-destructive" />
        </Button>
      )}
    </span>
  )
}
