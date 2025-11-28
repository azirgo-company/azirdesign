import { useInvalidate, useResource } from "@refinedev/core"
import { ArrowLeft, RefreshCwIcon } from "lucide-react"
import { useTransition } from "react"
import toast from "react-hot-toast"
import { cn } from "../src/lib/utils"
import { useOnBack } from "./hooks/use-on-back"
import { PageHeaderProps } from "./layout/header/types"
import { Button } from "./ui/button"

export const PageHeader = ({
  extra,
  children,
  className,
  title,
  subTitle,
  isBack = false,
  ...props
}: PageHeaderProps) => {
  const back = useOnBack()
  const invalidate = useInvalidate()
  const [isPending, startTransition] = useTransition()
  const { resource } = useResource()

  console.log("Current resource in PageHeader:", resource)
  console.log("Rendering PageHeader with title:", title)

  return (
    <div className={cn(className, "w-full")}>
      <>
        <div
          className={cn(
            "flex h-20 items-end lg:justify-between",

            !props.breadcrumb && "h-auto"
          )}
        >
          <div className="min-w-0 flex-1">
            {props.breadcrumb}
            <div className="mt-3 inline-flex flex-row items-center gap-x-4">
              {isBack && (
                <Button variant="ghost" onClick={() => back?.()}>
                  <ArrowLeft />
                </Button>
              )}
              <div className="inline-flex flex-col">
                <h2 className="text-2xl font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight dark:text-white">
                  {title}
                </h2>
                {subTitle && (
                  <div className="mt-2 flex items-center text-sm text-gray-300">
                    {subTitle}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex gap-2 lg:mt-0 lg:ml-4">
            <Button
              variant={"secondary"}
              disabled={isPending}
              onClick={() => {
                startTransition(() => {
                  invalidate({
                    resource: resource?.name,
                    invalidates: ["list"],
                  }).then(() => {
                    toast.success("Información actualizada")
                  })
                })
              }}
            >
              <RefreshCwIcon
                className={"h-4 w-4" + (isPending ? " animate-spin" : "")}
              />
              <span className="hidden md:block">Recargar</span>
            </Button>
            {extra}
          </div>
        </div>
        <div className="mt-4">{children}</div>
      </>
    </div>
  )
}
