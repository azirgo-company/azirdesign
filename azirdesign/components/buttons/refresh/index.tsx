import { Button } from "../../ui/button"
import { RefreshCwIcon } from "lucide-react"
import { useRefreshButton } from "@refinedev/core"
import { RefreshButtonProps } from "../types"

export const RefreshButton = ({
  resource,
  recordItemId,
  hideText = false,
  dataProviderName,
  children,
  ...props
}: RefreshButtonProps) => {
  const { onClick, label, loading } = useRefreshButton({
    resource,
    id: recordItemId,
    dataProviderName,
  })

  return (
    <Button
      onClick={onClick}
      loading={loading}
      icon={<RefreshCwIcon className="mr-2 h-4 w-4" />}
      {...props}
    >
      {!hideText && (children ?? label)}
    </Button>
  )
}

RefreshButton.displayName = "RefreshButton"
