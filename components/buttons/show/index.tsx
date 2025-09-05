import { Button } from "../../ui/button"
import { EyeIcon } from "lucide-react"
import { useShowButton } from "@refinedev/core"
import * as React from "react"
import { ShowButtonProps } from "../types"

export const ShowButton = ({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}: ShowButtonProps) => {
  const { to, label, title, hidden, disabled, LinkComponent } = useShowButton({
    resource: resourceNameFromProps,
    id: recordItemId,
    accessControl,
    meta,
  })

  const isDisabled = disabled || props.disabled
  const isHidden = hidden || props.hidden
  if (isHidden) return null

  const resolvedTo =
    typeof to === "string" && to.includes("[id]")
      ? to.replace("[id]", String(recordItemId))
      : to ?? `/show/${String(recordItemId)}`

  return (
    <LinkComponent
      to={resolvedTo as string}
      replace={false}
      onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
        if (isDisabled) {
          e.preventDefault()
          return
        }
        if (onClick) {
          e.preventDefault()
          onClick(e)
        }
      }}
    >
      <Button title={title} disabled={isDisabled} {...props}>
        <EyeIcon className="h-4 w-4" />
        {/* {!hideText && (children ?? label ?? 'Ver')} */}
      </Button>
    </LinkComponent>
  )
}

ShowButton.displayName = "ShowButton"
