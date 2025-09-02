/* eslint-disable */
"use client"

import React, { useEffect, useMemo, useRef, useState } from "react"
import { useDebounce } from "use-debounce"
import { Loader2, Search, X } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "./components/ui/popover"
import { Button } from "./components/ui/button"
import { cn } from "@/src/lib/utils"
import Cookies from "js-cookie"
import { environment } from "@/src/config/environment"

/** Tipos genéricos */
export type GetLabel<T> = (option: T) => string
export type GetKey<T> = (option: T) => string
export type RenderOption<T> = (option: T) => React.ReactNode

export interface SearchableInputProps<T> {
  /** Filtro extra fijo para GraphQL */
  extraFilter?: Record<string, any>
  /** Función asíncrona alternativa a GraphQL */
  query?: (term: string | null) => Promise<T[]>
  /** Documento GraphQL (query de listado) */
  gqlQuery?: any
  /** Callback al seleccionar */
  onSelect?: (option: T) => void
  /** Placeholder */
  placeholder?: string
  /** Límite de resultados; default 5 */
  limit?: number
  /** Debounce en ms; default 300 */
  debounceMs?: number
  /** Obtener label */
  getOptionLabel: GetLabel<T>
  /** Obtener id/clave */
  getOptionKey: GetKey<T>
  /** Render opcional del item */
  renderOption?: RenderOption<T>
  /** Valor controlado (id o label) */
  value?: string
  /** onChange para modo controlado (devolver id normalmente) */
  onChange?: (value: string) => void
  /** Auto focus al abrir */
  autoFocusInput?: boolean
  /** Clase extra */
  className?: string

  /** --- Mejoras --- */

  /** Precargar al abrir sin término (default: true) */
  preloadOnOpen?: boolean
  /** Precargar al montar (además de al abrir) (default: false) */
  preloadOnMount?: boolean
  /** Filtro para precarga sin término */
  initialFilter?: Record<string, any>
  /** Constructor de filtro personalizado (recibe term o null) */
  buildFilter?: (term: string | null) => Record<string, any>
  /** Mantener última selección si desde fuera pasan value === '' (default: true) */
  keepLastOnExternalClear?: boolean
  /** Permitir limpiar la selección con un botón X (default: false) */
  allowClear?: boolean
  /** Sorting por defecto (default: { field: 'name', direction: 'ASC' }) */
  defaultSorting?: { field: string; direction: "ASC" | "DESC" }
}

export default function SearchableInput<T>(props: SearchableInputProps<T>) {
  const {
    query,
    gqlQuery,
    onSelect,
    placeholder = "Buscar...",
    limit = 5,
    debounceMs = 300,
    getOptionLabel,
    getOptionKey,
    renderOption,
    value,
    onChange,
    autoFocusInput = true,
    className,
    extraFilter,
    preloadOnOpen = true,
    preloadOnMount = false,
    initialFilter,
    buildFilter,
    keepLastOnExternalClear = true,
    allowClear = true,
    defaultSorting = { field: "name", direction: "ASC" },
  } = props

  const [open, setOpen] = useState(false)
  const [term, setTerm] = useState("") // texto de búsqueda
  const [displayValue, setDisplayValue] = useState("") // etiqueta mostrada
  const [debouncedTerm] = useDebounce(term, debounceMs)
  const [options, setOptions] = useState<T[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)

  // Estado interno de selección (para modo no controlado y como espejo del controlado)
  const [selectedKey, setSelectedKey] = useState<string | undefined>(undefined)
  const [selectedLabel, setSelectedLabel] = useState<string>("")

  // Última selección confirmada (para no quedar vacío)
  const lastSelectedRef = useRef<{ key?: string; label: string }>({
    key: undefined,
    label: "",
  })

  // Root field name del documento GraphQL
  const getRootFieldName = (doc: any): string | null => {
    try {
      const def = doc?.definitions?.[0]
      const sel = def?.selectionSet?.selections?.[0]
      return sel?.name?.value ?? null
    } catch {
      return null
    }
  }

  // Builder de filtro (con o sin término)
  const makeFilter = (t: string | null) => {
    if (buildFilter) return buildFilter(t)

    const base =
      extraFilter && Object.keys(extraFilter).length > 0
        ? { ...extraFilter }
        : {}

    if (t && t.trim().length > 0) {
      return { ...base, name: { iLike: `%${t}%` } }
    }
    return initialFilter ? { ...base, ...initialFilter } : base
  }

  // Resolver etiqueta cuando cambia "value" (modo controlado)
  useEffect(() => {
    // Si no vino value
    if (value == null) return

    // Si desde fuera pasan '', decidir si conservamos el último
    if (value === "") {
      if (keepLastOnExternalClear) {
        // Mantener última selección visible
        const last = lastSelectedRef.current
        setDisplayValue(last.label)
        setSelectedKey(last.key)
        setSelectedLabel(last.label)
      } else {
        // limpiar realmente
        setDisplayValue("")
        setSelectedKey(undefined)
        setSelectedLabel("")
      }
      return
    }

    // Evitar trabajo si ya está mostrado
    if (value === displayValue) return

    const assign = (label: string, key?: string) => {
      setDisplayValue(label)
      setSelectedKey(key ?? value)
      setSelectedLabel(label)
      lastSelectedRef.current = { key: key ?? value, label }
    }

    // Si parece id y hay gqlQuery, resolver label por id
    if (gqlQuery && value !== term) {
      ;(async () => {
        try {
          const token = Cookies.get("__session")
          const filter = { id: { eq: value } }

          const res = await fetch(environment.API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: JSON.stringify({
              query: gqlQuery?.loc?.source?.body,
              variables: {
                paging: { limit: 1, offset: 0 },
                filter,
                sorting: [
                  {
                    field: defaultSorting.field,
                    direction: defaultSorting.direction,
                  },
                ],
              },
            }),
          })

          if (res.ok) {
            const json = await res.json()
            if (!json.errors) {
              const root =
                getRootFieldName(gqlQuery) || Object.keys(json?.data ?? {})[0]
              const items = json?.data?.[root]?.nodes || []
              if (items.length > 0) {
                assign(getOptionLabel(items[0]), value)
              }
            }
          }
        } catch (error) {
          // Silencioso; si no podemos resolver, mantenemos lo que haya
          // console.log('Could not resolve display value:', error)
        }
      })()
    } else {
      // Si te pasan la etiqueta directamente en value
      assign(value)
    }
  }, [
    value,
    gqlQuery,
    getOptionLabel,
    displayValue,
    term,
    keepLastOnExternalClear,
  ])

  // Búsqueda con precarga (al abrir o al montar)
  useEffect(() => {
    let cancelled = false

    async function run() {
      const shouldPreload =
        (!debouncedTerm && preloadOnOpen && open) ||
        (!debouncedTerm && preloadOnMount)

      // Si no hay término y tampoco debemos precargar, limpiar lista
      if (!debouncedTerm && !shouldPreload) {
        setOptions([])
        setLoading(false)
        setError(null)
        return
      }

      setLoading(true)
      setError(null)

      try {
        let data: T[] = []

        if (typeof query === "function") {
          data = await query(debouncedTerm || null)
        } else if (gqlQuery) {
          const token = Cookies.get("__session")
          const filter = makeFilter(debouncedTerm || null)

          const res = await fetch(environment.API_URL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
            body: JSON.stringify({
              query: gqlQuery?.loc?.source?.body,
              variables: {
                paging: { limit, offset: 0 },
                filter,
                sorting: [
                  {
                    field: defaultSorting.field,
                    direction: defaultSorting.direction,
                  },
                ],
              },
            }),
          })

          if (!res.ok) throw new Error("Error al consultar el servidor")
          const json = await res.json()
          if (json.errors)
            throw new Error(json.errors[0]?.message || "Error en la consulta")

          const root =
            getRootFieldName(gqlQuery) || Object.keys(json?.data ?? {})[0]
          data = json?.data?.[root]?.nodes || []
        }

        if (!cancelled) setOptions((data || []).slice(0, limit))
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? "Error al buscar")
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [
    debouncedTerm,
    query,
    gqlQuery,
    limit,
    extraFilter, // implicado dentro de makeFilter
    open,
    preloadOnOpen,
    preloadOnMount,
    initialFilter,
    buildFilter,
  ])

  // Auto-focus cuando abre
  useEffect(() => {
    if (open && autoFocusInput) {
      const t = setTimeout(() => inputRef.current?.focus(), 0)
      return () => clearTimeout(t)
    }
  }, [open, autoFocusInput])

  const handleInputChange = (v: string) => {
    setTerm(v)
    // no disparar onChange aquí
  }

  // Limpiar SOLO el término de búsqueda, NO la selección
  const handleClear = () => {
    setTerm("")
    setOptions([])
    setError(null)
    setOpen(true)
    inputRef.current?.focus()
    // NO tocar displayValue / selectedKey
    // NO onChange('')
  }

  // Nueva función para limpiar la selección actual
  const handleClearSelection = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevenir que se abra el popover
    setDisplayValue("")
    setSelectedKey(undefined)
    setSelectedLabel("")
    lastSelectedRef.current = { key: undefined, label: "" }
    onChange?.("")
    setTerm("")
  }

  const handleSelect = (option: T) => {
    const label = getOptionLabel(option)
    const key = getOptionKey(option)

    setTerm("")
    setDisplayValue(label)
    setSelectedKey(key)
    setSelectedLabel(label)
    lastSelectedRef.current = { key, label }

    onChange?.(key)
    onSelect?.(option)
    setOpen(false)
  }

  const listContent = useMemo(() => {
    if (error) return <CommandEmpty>Ocurrió un error: {error}</CommandEmpty>
    if (loading)
      return (
        <div className="text-muted-foreground flex items-center gap-2 p-2 text-sm">
          <Loader2 className="h-4 w-4 animate-spin" />
          Buscando...
        </div>
      )

    if (options.length === 0) {
      return debouncedTerm ? (
        <CommandEmpty>Sin resultados para "{debouncedTerm}"</CommandEmpty>
      ) : (
        <CommandEmpty>Escribe para buscar</CommandEmpty>
      )
    }

    return (
      <CommandGroup heading="Resultados">
        {options.map((opt) => (
          <CommandItem
            key={getOptionKey(opt)}
            value={getOptionLabel(opt)}
            onSelect={() => handleSelect(opt)}
            className="cursor-pointer"
          >
            {renderOption ? (
              renderOption(opt)
            ) : (
              <div className="truncate" key={getOptionKey(opt)}>
                {getOptionLabel(opt)}
              </div>
            )}
          </CommandItem>
        ))}
      </CommandGroup>
    )
  }, [
    options,
    loading,
    error,
    debouncedTerm,
    getOptionKey,
    getOptionLabel,
    renderOption,
  ])

  const visibleText = displayValue || selectedLabel || placeholder

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative w-full">
          <Button
            type="button"
            variant="outline"
            className={cn(
              "w-full justify-start gap-2 overflow-hidden text-left font-normal",
              !(displayValue || selectedLabel) && "text-muted-foreground",
              allowClear && (displayValue || selectedLabel) && "pr-8", // Espacio para la X
              className
            )}
            onClick={() => setOpen(true)}
          >
            <Search className="h-4 w-4 shrink-0" />
            <span className="flex-1 truncate">{visibleText}</span>
          </Button>
          {allowClear && (displayValue || selectedLabel) && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute top-1/2 right-1 h-6 w-6 -translate-y-1/2 hover:bg-gray-100"
              onClick={handleClearSelection}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
      >
        <Command>
          <div className="flex items-center gap-1 p-2">
            <Search className="h-4 w-4 shrink-0 opacity-60" />
            <CommandInput
              ref={inputRef}
              value={term}
              onValueChange={handleInputChange}
              placeholder={placeholder}
            />
            {term && (
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7"
                onClick={handleClear}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
          <CommandList>{listContent}</CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
