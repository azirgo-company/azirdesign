"use client"

import { useShowButton, useEditButton, useDeleteButton } from "@refinedev/core"

import {
  MoreHorizontalIcon,
  EyeIcon,
  SquarePenIcon,
  Trash2Icon,
  CreditCardIcon,
} from "lucide-react"
import { useState } from "react"
import { ConfirmDialog } from "../dialog/confirm-dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { Button } from "../ui/button"

type ActionsFieldProps = {
  id: string
  resource?: string
}

export default function ActionsField({ id, resource }: ActionsFieldProps) {
  const [membershipDialogOpen, setMembershipDialogOpen] = useState(false)
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false)

  // Hook para el botón Show
  const {
    to: showTo,
    hidden: showHidden,
    disabled: showDisabled,
    LinkComponent: ShowLinkComponent,
  } = useShowButton({
    resource,
    id,
  })

  // Hook para el botón Edit
  const {
    to: editTo,
    hidden: editHidden,
    disabled: editDisabled,
    LinkComponent: EditLinkComponent,
  } = useEditButton({
    resource,
    id,
  })

  // Hook para el botón Delete
  const {
    hidden: deleteHidden,
    disabled: deleteDisabled,
    onConfirm: handleDeleteConfirm,
    confirmTitle: deleteConfirmTitle,
    confirmOkLabel: deleteConfirmOkLabel,
    cancelLabel: deleteCancelLabel,
  } = useDeleteButton({
    resource,
    id,
  })

  const resolvedShowTo =
    typeof showTo === "string" && showTo.includes("[id]")
      ? showTo.replace("[id]", String(id))
      : showTo ?? `/show/${String(id)}`

  const resolvedEditTo =
    typeof editTo === "string"
      ? editTo.includes("[id]")
        ? editTo.replace("[id]", String(id))
        : editTo
      : `/edit/${String(id)}`

  const hasVisibleActions =
    !showHidden || !editHidden || !deleteHidden || resource === "users"

  if (!hasVisibleActions) return null

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <span className="sr-only">Abrir menú de acciones</span>
            <MoreHorizontalIcon className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-[160px]">
          {!showHidden && (
            <DropdownMenuItem
              disabled={showDisabled}
              onClick={() => {
                if (!showDisabled && ShowLinkComponent) {
                  // Navegación programática
                  window.location.href = resolvedShowTo as string
                }
              }}
            >
              <EyeIcon className="mr-2 h-4 w-4" />
              Ver
            </DropdownMenuItem>
          )}

          {!editHidden && (
            <DropdownMenuItem
              disabled={editDisabled}
              onClick={() => {
                if (!editDisabled && EditLinkComponent) {
                  // Navegación programática
                  window.location.href = resolvedEditTo as string
                }
              }}
            >
              <SquarePenIcon className="mr-2 h-4 w-4" />
              Editar
            </DropdownMenuItem>
          )}

          {!deleteHidden && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                disabled={deleteDisabled}
                onClick={() => setDeleteDialogOpen(true)}
                className="text-destructive focus:text-destructive"
              >
                <Trash2Icon className="mr-2 h-4 w-4" />
                Eliminar
              </DropdownMenuItem>
            </>
          )}

          {resource === "users" && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setMembershipDialogOpen(true)}>
                <CreditCardIcon className="mr-2 h-4 w-4" />
                Actualizar Membresía
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <ConfirmDialog
        open={deleteDialogOpen}
        onOpenChange={setDeleteDialogOpen}
        title={deleteConfirmTitle || "Confirmar eliminación"}
        description="¿Estás seguro de que quieres eliminar este elemento? Esta acción no se puede deshacer."
        okText={deleteConfirmOkLabel || "Eliminar"}
        cancelText={deleteCancelLabel || "Cancelar"}
        onConfirm={() => {
          handleDeleteConfirm()
          setDeleteDialogOpen(false)
        }}
      >
        <></>
      </ConfirmDialog>
    </>
  )
}
