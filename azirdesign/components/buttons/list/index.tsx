import { Button } from "./components/ui/button"
import { ListButtonProps } from "@/src/azirdesign/components/buttons/types"
import { ListIcon } from "lucide-react"
import { useListButton } from "@refinedev/core"

export const ListButton = ({
  resource: resourceNameFromProps,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}: ListButtonProps) => {
  const { hidden, disabled, label, title, LinkComponent, to } = useListButton({
    resource: resourceNameFromProps,
    accessControl,
    meta,
  })

  if (hidden) return null

  return (
    <LinkComponent
      to={to}
      replace={false}
      onClick={(e: React.PointerEvent<HTMLButtonElement>) => {
        if (disabled) {
          e.preventDefault()
          return
        }
        if (onClick) {
          e.preventDefault()
          onClick(e)
        }
      }}
    >
      <Button
        disabled={disabled}
        title={title}
        icon={<ListIcon className="mr-2 h-4 w-4" />}
        {...props}
      >
        {!hideText && (children ?? label)}
      </Button>
    </LinkComponent>
  )
}

ListButton.displayName = "ListButton"
