"use client"

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ChevronsUpDown, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { SidebarMenuButton, useSidebar } from "./ui/sidebar"
import { ThemeToggleItem } from "./ui/theme-toggle-item"
import { useAuth } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { cn } from "../../src/lib/utils"

interface NavUserProps {
  className?: string
}
export function NavUser({ className }: NavUserProps) {
  const { isMobile } = useSidebar()
  const { signOut } = useAuth()
  const { push } = useRouter()

  const handleSignOut = async () => {
    try {
      await signOut()
      push("/login")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <div className={cn(className, "")}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuButton
            size="lg"
            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
          >
            <Avatar className="h-8 w-8 rounded-lg">
              <AvatarImage src={"/avatars/shadcn.jpg"} alt={"Administrador"} />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{"Administrador"}</span>
              <span className="truncate text-xs">
                {"administrador@gmail.com"}
              </span>
            </div>
            <ChevronsUpDown className="ml-auto size-4" />
          </SidebarMenuButton>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
          side={isMobile ? "bottom" : "right"}
          align="end"
          sideOffset={4}
        >
          <DropdownMenuLabel className="p-0 font-normal">
            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src={"/avatars/shadcn.jpg"}
                  alt={"Administrador"}
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{"Administrador"}</span>
                <span className="truncate text-xs">
                  {"administrador@gmail.com"}
                </span>
              </div>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ThemeToggleItem />
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleSignOut}>
            <LogOut />
            Cerrar sesión
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
