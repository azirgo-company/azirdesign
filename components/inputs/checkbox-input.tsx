import React from 'react'

interface CheckboxInputProps {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  label?: string
  className?: string
}

export const CheckboxInput: React.FC<CheckboxInputProps> = ({
  checked,
  onChange,
  disabled = false,
  label,
  className = '',
}) => (
  <label className={`flex cursor-pointer items-center gap-2 ${className}`}>
    <input
      type="checkbox"
      checked={checked}
      onChange={e => onChange(e.target.checked)}
      className="accent-primary h-4 w-4 rounded border"
      disabled={disabled}
    />
    {label && <span>{checked ? 'Sí' : 'No'}</span>}
  </label>
)
