import { useInvalidate, useResource } from "@refinedev/core"
import { RefreshCw as RefreshCwIcon } from "lucide-react"
import { useTransition } from "react"
import toast from "react-hot-toast"
import { Button } from "./ui/button"

interface ReloadButtonProps {
  className?: string
  variant?: "secondary" | "ghost" | "default"
  size?: "default" | "sm" | "lg" | "icon" | null
  resourceName?: string
  invalidates?: ("list" | "detail" | "many" | "all")[]
  id?: string | number
  onReload?: () => void
}

export const ReloadButton = ({
  className,
  variant = "secondary",
  size = "default",
  resourceName,
  invalidates = ["list"],
  id,
  onReload,
}: ReloadButtonProps) => {
  const invalidate = useInvalidate()
  const [isPending, startTransition] = useTransition()
  const { resource } = useResource()

  const handleReload = () => {
    startTransition(() => {
      invalidate({
        resource: resourceName || resource?.name,
        invalidates,
        id,
      }).then(() => {
        toast.success("Información actualizada")
        if (onReload) onReload()
      })
    })
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      disabled={isPending}
      onClick={handleReload}
    >
      <RefreshCwIcon
        className={"h-4 w-4" + (isPending ? " animate-spin" : "")}
      />
      <span className="hidden md:block">Recargar</span>
    </Button>
  )
}
