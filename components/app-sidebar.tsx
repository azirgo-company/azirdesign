"use client"

import { RefineThemedLayoutV2SiderProps } from "@refinedev/ui-types"
import { NavRefine } from "./nav-refine"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "./ui/sidebar"

interface AppSidebarProps
  extends React.ComponentProps<typeof Sidebar>,
    RefineThemedLayoutV2SiderProps {
  src?: string
  alt?: string
  span?: string
  labels?: { [key: string]: string }
}

export function AppSidebar({
  meta,
  src = "/dashboard.png",
  alt = "Dashboard",
  span = "Dashboard",
  labels = {},
  ...props
}: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/dashboard">
                <img src={src} alt={alt} className="mr-2 !size-5" />
                <span className="text-base font-semibold">{span}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavRefine groupLabels={labels} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
