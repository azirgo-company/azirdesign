import { useCreateButton, useNavigation } from "@refinedev/core"

import { Loader2, SquarePlusIcon } from "lucide-react"
import { useState, type FC } from "react"
import { CreateButtonProps } from "../types"
import { Button } from "../../ui/button"

export const CreateButton: FC<CreateButtonProps> = ({
  resource,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const navigation = useNavigation()
  const { hidden, disabled, label, title, to } = useCreateButton({
    resource,
    accessControl,
    meta,
  })

  if (hidden) return null

  return (
    <Button
      disabled={disabled || loading}
      title={title}
      icon={<SquarePlusIcon className="mr-2 h-4 w-4" />}
      onClick={(e) => {
        if (onClick) {
          onClick(e)
        }
        if (to) {
          e.preventDefault()
          navigation.push(to)
          setLoading(true)
        }
      }}
      {...props}
      data-testid="create-button"
    >
      {!hideText && (children ?? label)}
      {loading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
    </Button>
  )
}

CreateButton.displayName = "CreateButton"
