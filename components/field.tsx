import { ReactElement, cloneElement } from "react"
import {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
  UseControllerProps,
} from "react-hook-form"

export type FieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName> & {
  label?: string
  description?: string
  className?: string
  isCheckbox?: boolean
  isRequired?: boolean
  children: ReactElement<{
    field: ControllerRenderProps<TFieldValues, TName>
  }>
}
export const Field = ({ label, description, children }: FieldProps) => {
  return (
    <div>
      {label && <div>{label}</div>}
      {children}
      {description && <div>{description}</div>}
    </div>
  )
}
