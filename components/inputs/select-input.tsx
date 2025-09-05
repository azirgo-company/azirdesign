import { FieldValues, UseFormRegister } from "react-hook-form"

export interface SelectInputProps<T extends string | number> {
  name: string
  label?: string
  options: Array<{ label: string; value: T }>
  value?: T
  onChange?: (value: T) => void
  register?: ReturnType<UseFormRegister<FieldValues>>
  disabled?: boolean
  className?: string
}

export function SelectInput<T extends string | number>({
  name,
  label,
  options,
  value,
  onChange,
  register,
  disabled,
  className,
}: SelectInputProps<T>) {
  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="mb-1 block font-medium">
          {label}
        </label>
      )}
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange?.(e.target.value as T)}
        disabled={disabled}
        {...register}
        className="w-full rounded border px-3 py-2 focus:ring focus:outline-none"
      >
        <option value="">Selecciona una opción</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
}
