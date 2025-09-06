"use client"
import "./styles.css"

// Business Components (with client-side features)
export { default as AddCardForm } from "../components/add-card-form"
export { AppSidebar } from "../components/app-sidebar"
export { NavMain } from "../components/nav-main"
export { NavProjects } from "../components/nav-projects"
export { NavRefine } from "../components/nav-refine"
export { NavUser } from "../components/nav-user"
export { TeamSwitcher } from "../components/team-switcher"

// Button Components (with client-side features)
export { CreateButton } from "../components/buttons/create"
export { DeleteButton } from "../components/buttons/delete"
export { EditButton } from "../components/buttons/edit"
export { ListButton } from "../components/buttons/list"
export { RefreshButton } from "../components/buttons/refresh"
export { SaveButton } from "../components/buttons/save"
export { ShowButton } from "../components/buttons/show"

// CRUD Components (with client-side features)
export { CreatePage } from "../components/crud/create"
export { EditPage } from "../components/crud/edit"
export { List } from "../components/crud/list"
export { Show } from "../components/crud/show"

// Forms
export { Form } from "../components/form"

// UI Components (with client-side features)
export {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog"
export { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
export { Collapsible } from "../components/ui/collapsible"
export {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
export { Form as UIForm } from "../components/ui/form"
export { Label } from "../components/ui/label"
export { Select } from "../components/ui/select"
export { Separator } from "../components/ui/separator"
export {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet"
export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "../components/ui/sidebar"
export { Table } from "../components/ui/table"
export { ThemeToggleItem } from "../components/ui/theme-toggle-item"
export { Tooltip } from "../components/ui/tooltip"

// Dialog Components
export {
  ConfirmDialog,
  type ConfirmDialogProps,
} from "../components/dialog/confirm-dialog"

// Hooks (all hooks are client-side)
export { useIsMobile } from "../components/hooks/use-mobile"
export { useOnBack } from "../components/hooks/use-on-back"

// Client-side Utils
export { useTheme } from "../src/lib/use-theme"

// Azirgo Components (with client-side features)
export { default as AzirLayout } from "../components/layout"
export { default as AzirTable } from "../components/table/azir-table"
