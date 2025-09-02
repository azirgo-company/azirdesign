import type { FC } from "react"
import { Trash2Icon } from "lucide-react"
import { useDeleteButton } from "@refinedev/core"
import { Button } from "./components/ui/button"
import { DeleteButtonProps } from "../types"
import { ConfirmDialog } from "../../dialog/confirm-dialog"

export const DeleteButton: FC<DeleteButtonProps> = ({
  resource,
  recordItemId,
  onSuccess,
  mutationMode: mutationModeProp,
  confirmTitle,
  confirmDescription,
  successNotification,
  errorNotification,
  hideText = false,
  accessControl,
  meta,
  dataProviderName,
  confirmOkText,
  confirmCancelText,
  invalidates,
  children,
  ...props
}) => {
  const {
    title,
    label,
    hidden,
    disabled,
    loading,
    confirmTitle: defaultConfirmTitle,
    confirmOkLabel: defaultConfirmOkLabel,
    cancelLabel: defaultCancelLabel,
    onConfirm,
    canAccess,
  } = useDeleteButton({
    resource,
    id: recordItemId,
    dataProviderName,
    invalidates,
    meta,
    onSuccess,
    mutationMode: mutationModeProp,
    errorNotification,
    successNotification,
    accessControl,
  })

  if (hidden || !canAccess?.can) return null

  return (
    <ConfirmDialog
      okText={confirmOkText ?? defaultConfirmOkLabel}
      cancelText={confirmCancelText ?? defaultCancelLabel}
      okButtonVariant={"destructive"}
      cancelButtonVariant={"outline"}
      title={confirmTitle ?? defaultConfirmTitle}
      description={confirmDescription}
      loading={loading}
      onConfirm={onConfirm}
    >
      <Button
        disabled={disabled}
        title={title}
        loading={loading}
        data-testId="delete-button"
        className={"bg-rose-500 text-slate-50"}
        {...props}
      >
        {/* {!hideText && (children ?? label)} */}
        <Trash2Icon className="h-4 w-4" />
      </Button>
    </ConfirmDialog>
  )
}

DeleteButton.displayName = "DeleteButton"
