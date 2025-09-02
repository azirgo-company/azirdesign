/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
"use client"

import {
  useRef,
  type DetailedHTMLProps,
  type FormHTMLAttributes,
  type PropsWithChildren,
} from "react"

type NativeFormProps = Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  "onSubmit"
>

export type FormProps = PropsWithChildren &
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

export const Form = ({ children, ...props }: FormProps) => {
  return <form {...props}>{children}</form>
}
