import { ReactNode } from "react"

export type PageHeaderProps = {
  title?: ReactNode
  subTitle?: ReactNode
  isBack?: boolean
  onBack?: (e?: React.MouseEvent<HTMLElement>) => void
  className?: string
  breadcrumb?: ReactNode
  extra?: ReactNode
  children?: ReactNode
  reloadId?: string | number
  reloadInvalidates?: ("list" | "detail" | "many" | "all")[]
  showReloadButton?: boolean
}
