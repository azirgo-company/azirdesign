import * as React from "react"
import { CheckIcon, LucideClockFading, XIcon } from "lucide-react"
import {} from "@radix-ui/react-alert-dialog"
import { ButtonProps } from "../ui/button"
import {
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "../ui/alert-dialog"

export type ConfirmDialogProps = React.ComponentPropsWithoutRef<
  typeof AlertDialog
> & {
  children: React.ReactNode
  title?: string
  description?: string
  okText?: string
  cancelText?: string
  loading?: boolean
  onConfirm?: () => void
  okIcon?: React.ReactElement
  cancelIcon?: React.ReactElement
  okIconSide?: "left" | "right"
  cancelIconSide?: "left" | "right"
  okButtonVariant?: ButtonProps["variant"]
  cancelButtonVariant?: ButtonProps["variant"]
  okButtonSize?: ButtonProps["size"]
  cancelButtonSize?: ButtonProps["size"]
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  children,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  okText = "Ok",
  cancelText = "Cancel",
  loading = false,
  okIconSide = "left",
  cancelIconSide = "left",
  onConfirm,
  okIcon,
  cancelIcon,
  okButtonVariant = "default",
  cancelButtonVariant = "outline",
  okButtonSize = "default",
  cancelButtonSize = "default",
  open,
  onOpenChange,
  defaultOpen,
  ...alertDialogProps
}) => {
  const CancelIcon = React.useMemo(() => {
    if (React.isValidElement(cancelIcon)) return cancelIcon
    return <XIcon className="mr-2 h-4 w-4" />
  }, [cancelIcon])

  const OkIcon = React.useMemo(() => {
    if (loading) return <LucideClockFading className="mr-2 h-4 w-4" />
    if (React.isValidElement(okIcon)) return okIcon
    return <CheckIcon className="mr-2 h-4 w-4" />
  }, [okIcon, loading])

  return (
    <AlertDialog
      open={open}
      onOpenChange={onOpenChange}
      defaultOpen={defaultOpen}
      {...alertDialogProps}
    >
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel asChild>
            <button
              type="button"
              disabled={loading}
              className={`btn btn-${cancelButtonVariant} btn-${cancelButtonSize}`}
            >
              {cancelIconSide === "left" && CancelIcon}
              {cancelText}
              {cancelIconSide === "right" && CancelIcon}
            </button>
          </AlertDialogCancel>

          {/* Usamos asChild para controlar onClick y mantener estilo del Action */}
          <AlertDialogAction asChild>
            <button
              type="button"
              disabled={loading}
              onClick={onConfirm}
              // Pasamos clases utilitarias; la variante/size las maneja el wrapper,
              // pero si tu implementación de AlertDialogAction no propaga variant/size,
              // puedes añadir className aquí.
            >
              {okIconSide === "left" && OkIcon}
              {okText}
              {okIconSide === "right" && OkIcon}
            </button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

ConfirmDialog.displayName = "ConfirmDialog"
