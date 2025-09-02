"use client"

import {
  Sidebar,
  SidebarMenu,
  SidebarContent,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
  SidebarRail,
} from "./ui/sidebar"
import { NavRefine } from "./nav-refine"
import { RefineThemedLayoutV2SiderProps } from "@refinedev/ui-types"

interface AppSidebarProps
  extends React.ComponentProps<typeof Sidebar>,
    RefineThemedLayoutV2SiderProps {}

export function AppSidebar({ meta, ...props }: AppSidebarProps) {
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
                <img
                  src="/semillapp.png"
                  alt="Semillapp Logo"
                  className="mr-2 !size-5"
                />
                <span className="text-base font-semibold">Semillapp</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavRefine />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
