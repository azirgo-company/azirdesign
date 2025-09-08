"use client"

import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar"
import { ThemeToggle } from "../theme-toggle"
import { NavUser } from "../nav-user"
import { AppSidebar } from "../app-sidebar"

export const AzirLayout = ({
  children,
  sidebarSrc = "/semillapp.png",
  sidebarAlt = "Semillapp Logo",
  sidebarSpan = "Semillapp",
}: {
  children: React.ReactNode
  sidebarSrc?: string
  sidebarAlt?: string
  sidebarSpan?: string
}) => {
  return (
    <SidebarProvider>
      <AppSidebar src={sidebarSrc} alt={sidebarAlt} span={sidebarSpan} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <NavUser className="-mr-2" />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AzirLayout
