"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../src/lib/use-theme"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"

export function ThemeToggleItem() {
  const { theme, toggleTheme } = useTheme()

  return (
    <DropdownMenuItem onClick={toggleTheme}>
      {theme === "light" ? (
        <>
          <Moon className="h-4 w-4" />
          Modo oscuro
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          Modo claro
        </>
      )}
    </DropdownMenuItem>
  )
}
