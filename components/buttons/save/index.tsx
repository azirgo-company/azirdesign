import { CanAccess, useSaveButton } from "@refinedev/core"
import { Loader2, SaveIcon } from "lucide-react"

import type { FC } from "react"
import { Slot } from "@radix-ui/react-slot"
import { Button } from "../../ui/button"
import { SaveButtonProps } from "../types"

export const SaveButton: FC<SaveButtonProps> = ({
  hideText = false,
  children,
  accessControl,
  access,
  resource,
  recordItemId,
  loading,
  ...props
}) => {
  const { label } = useSaveButton()
  const Com = !accessControl?.enabled ? Slot : CanAccess

  if (accessControl?.hideIfUnauthorized && accessControl?.enabled) {
    return null
  }

  return (
    <Com
      params={{
        id: recordItemId,
      }}
      resource={resource}
      action="save"
      {...access}
    >
      <Button {...props} disabled={loading}>
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {!hideText && (children ?? label)}
        <SaveIcon className="mr-2 h-4 w-4" />
      </Button>
    </Com>
  )
}

SaveButton.displayName = "SaveButton"
