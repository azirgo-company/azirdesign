import { AnchorHTMLAttributes, forwardRef } from "react"

export const Link = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement>
>(({ children, href, title, className }, ref) => (
  <a ref={ref} href={href} className={className} title={title}>
    {children}
  </a>
))
Link.displayName = "Link"
