import { useEffect, useState } from "react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover"
import { Button } from "./components/ui/button"
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
import { Check, Filter, FunnelX } from "lucide-react"

interface Option<T> {
  value: T
  label: string
}

interface FilterSelectButtonProps<T> {
  value: T | undefined
  setValue: (value: T | undefined) => void
  options: Option<T>[]
  placeholder?: string
}

export function FilterRadioButton<T extends string | number | boolean>({
  value,
  setValue,
  options,
  placeholder = "",
}: FilterSelectButtonProps<T>) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<T | undefined>(value)

  useEffect(() => {
    setSelected(value)
  }, [value])

  const applyFilter = () => {
    setValue(selected)
    setIsOpen(false)
  }

  const clearFilter = () => {
    setSelected(undefined)
    setValue(undefined)
    setIsOpen(false)
  }

  return (
    <span className="inline-flex items-center gap-1">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            variant="ghost"
            aria-label="Filtrar"
            className="text-primary text-xs"
          >
            {value !== undefined ? (
              options.find((opt) => opt.value === value)?.label ?? placeholder
            ) : (
              <Filter size={16} color="black" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-48 p-4" align="start" sideOffset={8}>
          <RadioGroup
            value={selected?.toString() ?? ""}
            onValueChange={(val) => {
              const matched = options.find(
                (opt) => opt.value.toString() === val
              )
              if (matched) setSelected(matched.value)
            }}
            className="space-y-2"
          >
            {options.map((opt) => (
              <div
                key={opt.value.toString()}
                className="flex items-center gap-2"
              >
                <RadioGroupItem
                  value={opt.value.toString()}
                  id={opt.value.toString()}
                />
                <label htmlFor={opt.value.toString()} className="text-sm">
                  {opt.label}
                </label>
              </div>
            ))}
          </RadioGroup>
          <div className="mt-4 flex justify-end gap-2">
            <Button size="sm" variant="ghost" onClick={applyFilter}>
              <Check />
            </Button>
            {value !== undefined && (
              <Button size="sm" variant="ghost" onClick={clearFilter}>
                <FunnelX className="text-destructive" />
              </Button>
            )}
          </div>
        </PopoverContent>
      </Popover>
      {value !== undefined && (
        <Button size="sm" variant="ghost" onClick={clearFilter}>
          <FunnelX className="text-destructive" />
        </Button>
      )}
    </span>
  )
}
