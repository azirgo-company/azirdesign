"use client"

import { Toaster } from "react-hot-toast"
import { AppSidebar } from "../app-sidebar"
import { NavUser } from "../nav-user"
import { ThemeToggle } from "../theme-toggle"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar"

export const AzirLayout = ({
  children,
  sidebarSrc = "/semillapp.png",
  sidebarAlt = "Semillapp Logo",
  sidebarSpan = "Semillapp",
  handleSignOut,
  name,
  email,
  avatarUrl,
  labels,
}: {
  children: React.ReactNode
  sidebarSrc?: string
  sidebarAlt?: string
  sidebarSpan?: string
  handleSignOut: () => Promise<void> | void
  name?: string
  email?: string
  avatarUrl?: string
  labels?: { [key: string]: string }
}) => {
  return (
    <SidebarProvider>
      <Toaster />
      <AppSidebar
        src={sidebarSrc}
        alt={sidebarAlt}
        span={sidebarSpan}
        labels={labels}
      />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <NavUser
                className="-mr-2"
                handleSignOut={handleSignOut}
                name={name}
                email={email}
                avatarUrl={avatarUrl}
              />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default AzirLayout
