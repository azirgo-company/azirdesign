import { Button } from "./components/ui/button"
import { RefreshButtonProps } from "@/src/azirdesign/components/buttons/types"
import { RefreshCwIcon } from "lucide-react"
import { useRefreshButton } from "@refinedev/core"

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
