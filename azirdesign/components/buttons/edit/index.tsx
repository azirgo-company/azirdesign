import { Button } from "./components/ui/button"
import { EditButtonProps } from "@/src/azirdesign/components/buttons/types"
import { SquarePenIcon } from "lucide-react"
import { useEditButton } from "@refinedev/core"
import * as React from "react"

export const EditButton = ({
  resource,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  onClick,
  children,
  ...props
}: EditButtonProps) => {
  const { hidden, disabled, label, title, LinkComponent, to } = useEditButton({
    resource,
    id: recordItemId,
    accessControl,
    meta,
  })

  if (hidden) return null
  if (recordItemId === undefined || recordItemId === null) return null

  const resolvedTo =
    typeof to === "string"
      ? to.includes("[id]")
        ? to.replace("[id]", String(recordItemId))
        : to
      : `/edit/${String(recordItemId)}`

  const isDisabled = disabled || props.disabled

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      e.preventDefault()
      return
    }
    if (onClick) {
      e.preventDefault()
      // @ts-expect-error Permitimos evento aunque el tipo difiera
      onClick(e)
    }
  }

  const text = children ?? label ?? "Editar"
  const ariaLabel = hideText
    ? typeof text === "string"
      ? text
      : "Editar"
    : undefined

  return (
    <Button asChild title={title} disabled={isDisabled} {...props}>
      <LinkComponent
        to={resolvedTo as string}
        replace={false}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        <SquarePenIcon className={hideText ? "h-4 w-4" : "h-4 w-4"} />
        {/* {!hideText && text} */}
      </LinkComponent>
    </Button>
  )
}

EditButton.displayName = "EditButton"
