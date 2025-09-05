"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AddCardForm: () => add_card_form_default,
  AlertDialog: () => AlertDialog,
  AlertDialogAction: () => AlertDialogAction,
  AlertDialogCancel: () => AlertDialogCancel,
  AlertDialogContent: () => AlertDialogContent,
  AlertDialogDescription: () => AlertDialogDescription,
  AlertDialogFooter: () => AlertDialogFooter,
  AlertDialogHeader: () => AlertDialogHeader,
  AlertDialogOverlay: () => AlertDialogOverlay,
  AlertDialogPortal: () => AlertDialogPortal,
  AlertDialogTitle: () => AlertDialogTitle,
  AlertDialogTrigger: () => AlertDialogTrigger,
  AppSidebar: () => AppSidebar,
  Avatar: () => Avatar,
  AvatarFallback: () => AvatarFallback,
  AvatarImage: () => AvatarImage,
  Breadcrumb: () => Breadcrumb,
  BreadcrumbEllipsis: () => BreadcrumbEllipsis,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  Card: () => Card,
  Collapsible: () => Collapsible2,
  ConfirmDialog: () => ConfirmDialog,
  CreateButton: () => CreateButton,
  CreatePage: () => CreatePage,
  DeleteButton: () => DeleteButton,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  EditButton: () => EditButton,
  EditPage: () => EditPage,
  Field: () => Field,
  Form: () => Form,
  ImagePreviewCell: () => image_preview_cell_default,
  Input: () => Input,
  Label: () => Label2,
  Link: () => Link,
  List: () => List,
  ListButton: () => ListButton,
  NavMain: () => NavMain,
  NavProjects: () => NavProjects,
  NavRefine: () => NavRefine,
  NavUser: () => NavUser,
  PageHeader: () => PageHeader,
  RefreshButton: () => RefreshButton,
  SaveButton: () => SaveButton,
  Select: () => Select,
  Separator: () => Separator,
  Sheet: () => Sheet,
  SheetClose: () => SheetClose,
  SheetContent: () => SheetContent,
  SheetDescription: () => SheetDescription,
  SheetFooter: () => SheetFooter,
  SheetHeader: () => SheetHeader,
  SheetTitle: () => SheetTitle,
  SheetTrigger: () => SheetTrigger,
  Show: () => Show,
  ShowButton: () => ShowButton,
  Sidebar: () => Sidebar,
  SidebarContent: () => SidebarContent,
  SidebarFooter: () => SidebarFooter,
  SidebarGroup: () => SidebarGroup,
  SidebarGroupAction: () => SidebarGroupAction,
  SidebarGroupContent: () => SidebarGroupContent,
  SidebarGroupLabel: () => SidebarGroupLabel,
  SidebarHeader: () => SidebarHeader,
  SidebarInput: () => SidebarInput,
  SidebarInset: () => SidebarInset,
  SidebarMenu: () => SidebarMenu,
  SidebarMenuAction: () => SidebarMenuAction,
  SidebarMenuBadge: () => SidebarMenuBadge,
  SidebarMenuButton: () => SidebarMenuButton,
  SidebarMenuItem: () => SidebarMenuItem,
  SidebarMenuSkeleton: () => SidebarMenuSkeleton,
  SidebarMenuSub: () => SidebarMenuSub,
  SidebarMenuSubButton: () => SidebarMenuSubButton,
  SidebarMenuSubItem: () => SidebarMenuSubItem,
  SidebarProvider: () => SidebarProvider,
  SidebarRail: () => SidebarRail,
  SidebarSeparator: () => SidebarSeparator,
  SidebarTrigger: () => SidebarTrigger,
  Skeleton: () => Skeleton,
  Table: () => Table,
  TeamSwitcher: () => TeamSwitcher,
  ThemeToggleItem: () => ThemeToggleItem,
  Tooltip: () => Tooltip2,
  UIForm: () => Form2,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  useIsMobile: () => useIsMobile,
  useOnBack: () => useOnBack,
  useSidebar: () => useSidebar,
  useTheme: () => useTheme
});
module.exports = __toCommonJS(index_exports);

// components/add-card-form.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function AddCardForm({ user }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    "Add Card Form for user: ",
    user.email
  ] }) });
}
var add_card_form_default = AddCardForm;

// components/ui/sidebar.tsx
var React2 = __toESM(require("react"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_lucide_react2 = require("lucide-react");

// components/ui/sheet.tsx
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react = require("lucide-react");

// src/lib/utils.ts
function cn(...args) {
  return args.filter(Boolean).join(" ");
}

// components/ui/sheet.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Sheet({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SheetPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" && "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.XIcon, { className: "size-4" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    "div",
    {
      "data-slot": "sheet-footer",
      className: cn("mt-auto flex flex-col gap-2 p-4", className),
      ...props
    }
  );
}
function SheetTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// components/hooks/use-mobile.ts
var React = __toESM(require("react"));
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}

// components/ui/sidebar.tsx
var import_react_slot2 = require("@radix-ui/react-slot");
var import_react_tooltip = require("@radix-ui/react-tooltip");

// components/ui/skeleton.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}

// components/ui/button.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");
var import_jsx_runtime4 = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// components/ui/separator.tsx
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime5 = require("react/jsx-runtime");
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      ),
      ...props
    }
  );
}

// components/ui/input.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Input({ className, type, float, onChange, ...props }) {
  const handleChange = (event) => {
    if (float && event.target.value) {
      const numericValue = parseFloat(event.target.value);
      if (!isNaN(numericValue)) {
        event.target.value = numericValue.toString();
      }
    }
    onChange?.(event);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      onChange: handleChange,
      ...props
    }
  );
}

// components/ui/sidebar.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React2.createContext(null);
function useSidebar() {
  const context = React2.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React2.useState(false);
  const [_open, _setOpen] = React2.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React2.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React2.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React2.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const contextValue = React2.useMemo(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_tooltip.TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ...props,
      children
    }
  ) }) });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        "data-slot": "sidebar",
        className: cn(
          "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
          className
        ),
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "div",
          {
            "data-slot": "sidebar-container",
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
              "div",
              {
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                children
              }
            )
          }
        )
      ]
    }
  );
}
function SidebarTrigger({
  className,
  onClick,
  ...props
}) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    Button,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      variant: "ghost",
      size: "icon",
      className: cn("size-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.PanelLeftIcon, {}),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "button",
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Input,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("bg-background h-8 w-full shadow-none", className),
      ...props
    }
  );
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Separator,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("bg-sidebar-border mx-2 w-auto", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "div";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Comp,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-1", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
var sidebarMenuButtonVariants = (0, import_class_variance_authority2.cva)(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-8 text-sm",
        sm: "h-7 text-xs",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (!tooltip) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_react_tooltip.Tooltip, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react_tooltip.TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_react_tooltip.TooltipContent,
      {
        side: "right",
        align: "center",
        hidden: state !== "collapsed" || isMobile,
        ...tooltip
      }
    )
  ] });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Comp,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuBadge({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  const width = React2.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSubItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className),
      ...props
    }
  );
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? import_react_slot2.Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}

// components/nav-refine.tsx
var import_core2 = require("@refinedev/core");

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var React10 = __toESM(require("react"), 1);

// node_modules/@radix-ui/primitive/dist/index.mjs
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return function handleEvent(event) {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      return ourEventHandler?.(event);
    }
  };
}

// node_modules/@radix-ui/react-context/dist/index.mjs
var React3 = __toESM(require("react"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React3.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider2 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React3.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Context.Provider, { value, children });
    };
    Provider2.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React3.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React3.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React3.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext32, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return React3.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React5 = __toESM(require("react"), 1);

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
var React4 = __toESM(require("react"), 1);
var useLayoutEffect2 = globalThis?.document ? React4.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
var React22 = __toESM(require("react"), 1);
var useInsertionEffect = React5[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({
  prop,
  defaultProp,
  onChange = () => {
  },
  caller
}) {
  const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
    defaultProp,
    onChange
  });
  const isControlled = prop !== void 0;
  const value = isControlled ? prop : uncontrolledProp;
  if (true) {
    const isControlledRef = React5.useRef(prop !== void 0);
    React5.useEffect(() => {
      const wasControlled = isControlledRef.current;
      if (wasControlled !== isControlled) {
        const from = wasControlled ? "controlled" : "uncontrolled";
        const to = isControlled ? "controlled" : "uncontrolled";
        console.warn(
          `${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        );
      }
      isControlledRef.current = isControlled;
    }, [isControlled, caller]);
  }
  const setValue = React5.useCallback(
    (nextValue) => {
      if (isControlled) {
        const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
        if (value2 !== prop) {
          onChangeRef.current?.(value2);
        }
      } else {
        setUncontrolledProp(nextValue);
      }
    },
    [isControlled, prop, setUncontrolledProp, onChangeRef]
  );
  return [value, setValue];
}
function useUncontrolledState({
  defaultProp,
  onChange
}) {
  const [value, setValue] = React5.useState(defaultProp);
  const prevValueRef = React5.useRef(value);
  const onChangeRef = React5.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React5.useEffect(() => {
    if (prevValueRef.current !== value) {
      onChangeRef.current?.(value);
      prevValueRef.current = value;
    }
  }, [value, prevValueRef]);
  return [value, setValue, onChangeRef];
}
function isFunction(value) {
  return typeof value === "function";
}
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");

// node_modules/@radix-ui/react-compose-refs/dist/index.mjs
var React6 = __toESM(require("react"), 1);
function setRef(ref, value) {
  if (typeof ref === "function") {
    return ref(value);
  } else if (ref !== null && ref !== void 0) {
    ref.current = value;
  }
}
function composeRefs(...refs) {
  return (node) => {
    let hasCleanup = false;
    const cleanups = refs.map((ref) => {
      const cleanup = setRef(ref, node);
      if (!hasCleanup && typeof cleanup == "function") {
        hasCleanup = true;
      }
      return cleanup;
    });
    if (hasCleanup) {
      return () => {
        for (let i = 0; i < cleanups.length; i++) {
          const cleanup = cleanups[i];
          if (typeof cleanup == "function") {
            cleanup();
          } else {
            setRef(refs[i], null);
          }
        }
      };
    }
  };
}
function useComposedRefs(...refs) {
  return React6.useCallback(composeRefs(...refs), refs);
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
var React7 = __toESM(require("react"), 1);
var ReactDOM = __toESM(require("react-dom"), 1);
var import_react_slot3 = require("@radix-ui/react-slot");
var import_jsx_runtime9 = require("react/jsx-runtime");
var NODES = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
];
var Primitive = NODES.reduce((primitive, node) => {
  const Slot7 = (0, import_react_slot3.createSlot)(`Primitive.${node}`);
  const Node = React7.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot7 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-presence/dist/index.mjs
var React23 = __toESM(require("react"), 1);
var React8 = __toESM(require("react"), 1);
function useStateMachine(initialState, machine) {
  return React8.useReducer((state, event) => {
    const nextState = machine[state][event];
    return nextState ?? state;
  }, initialState);
}
var Presence = (props) => {
  const { present, children } = props;
  const presence = usePresence(present);
  const child = typeof children === "function" ? children({ present: presence.isPresent }) : React23.Children.only(children);
  const ref = useComposedRefs(presence.ref, getElementRef(child));
  const forceMount = typeof children === "function";
  return forceMount || presence.isPresent ? React23.cloneElement(child, { ref }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
  const [node, setNode] = React23.useState();
  const stylesRef = React23.useRef(null);
  const prevPresentRef = React23.useRef(present);
  const prevAnimationNameRef = React23.useRef("none");
  const initialState = present ? "mounted" : "unmounted";
  const [state, send] = useStateMachine(initialState, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  React23.useEffect(() => {
    const currentAnimationName = getAnimationName(stylesRef.current);
    prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
  }, [state]);
  useLayoutEffect2(() => {
    const styles = stylesRef.current;
    const wasPresent = prevPresentRef.current;
    const hasPresentChanged = wasPresent !== present;
    if (hasPresentChanged) {
      const prevAnimationName = prevAnimationNameRef.current;
      const currentAnimationName = getAnimationName(styles);
      if (present) {
        send("MOUNT");
      } else if (currentAnimationName === "none" || styles?.display === "none") {
        send("UNMOUNT");
      } else {
        const isAnimating = prevAnimationName !== currentAnimationName;
        if (wasPresent && isAnimating) {
          send("ANIMATION_OUT");
        } else {
          send("UNMOUNT");
        }
      }
      prevPresentRef.current = present;
    }
  }, [present, send]);
  useLayoutEffect2(() => {
    if (node) {
      let timeoutId;
      const ownerWindow = node.ownerDocument.defaultView ?? window;
      const handleAnimationEnd = (event) => {
        const currentAnimationName = getAnimationName(stylesRef.current);
        const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
        if (event.target === node && isCurrentAnimation) {
          send("ANIMATION_END");
          if (!prevPresentRef.current) {
            const currentFillMode = node.style.animationFillMode;
            node.style.animationFillMode = "forwards";
            timeoutId = ownerWindow.setTimeout(() => {
              if (node.style.animationFillMode === "forwards") {
                node.style.animationFillMode = currentFillMode;
              }
            });
          }
        }
      };
      const handleAnimationStart = (event) => {
        if (event.target === node) {
          prevAnimationNameRef.current = getAnimationName(stylesRef.current);
        }
      };
      node.addEventListener("animationstart", handleAnimationStart);
      node.addEventListener("animationcancel", handleAnimationEnd);
      node.addEventListener("animationend", handleAnimationEnd);
      return () => {
        ownerWindow.clearTimeout(timeoutId);
        node.removeEventListener("animationstart", handleAnimationStart);
        node.removeEventListener("animationcancel", handleAnimationEnd);
        node.removeEventListener("animationend", handleAnimationEnd);
      };
    } else {
      send("ANIMATION_END");
    }
  }, [node, send]);
  return {
    isPresent: ["mounted", "unmountSuspended"].includes(state),
    ref: React23.useCallback((node2) => {
      stylesRef.current = node2 ? getComputedStyle(node2) : null;
      setNode(node2);
    }, [])
  };
}
function getAnimationName(styles) {
  return styles?.animationName || "none";
}
function getElementRef(element) {
  let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
  let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.ref;
  }
  getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
  mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
  if (mayWarn) {
    return element.props.ref;
  }
  return element.props.ref || element.ref;
}

// node_modules/@radix-ui/react-id/dist/index.mjs
var React9 = __toESM(require("react"), 1);
var useReactId = React9[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React9.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
var import_jsx_runtime10 = require("react/jsx-runtime");
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = React10.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeCollapsible,
      open: openProp,
      defaultOpen,
      disabled,
      onOpenChange,
      ...collapsibleProps
    } = props;
    const [open, setOpen] = useControllableState({
      prop: openProp,
      defaultProp: defaultOpen ?? false,
      onChange: onOpenChange,
      caller: COLLAPSIBLE_NAME
    });
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: React10.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          Primitive.div,
          {
            "data-state": getState(open),
            "data-disabled": disabled ? "" : void 0,
            ...collapsibleProps,
            ref: forwardedRef
          }
        )
      }
    );
  }
);
Collapsible.displayName = COLLAPSIBLE_NAME;
var TRIGGER_NAME = "CollapsibleTrigger";
var CollapsibleTrigger = React10.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Primitive.button,
      {
        type: "button",
        "aria-controls": context.contentId,
        "aria-expanded": context.open || false,
        "data-state": getState(context.open),
        "data-disabled": context.disabled ? "" : void 0,
        disabled: context.disabled,
        ...triggerProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
      }
    );
  }
);
CollapsibleTrigger.displayName = TRIGGER_NAME;
var CONTENT_NAME = "CollapsibleContent";
var CollapsibleContent = React10.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = React10.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = React10.useState(present);
  const ref = React10.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = React10.useRef(0);
  const height = heightRef.current;
  const widthRef = React10.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = React10.useRef(isOpen);
  const originalStylesRef = React10.useRef(void 0);
  React10.useEffect(() => {
    const rAF = requestAnimationFrame(() => isMountAnimationPreventedRef.current = false);
    return () => cancelAnimationFrame(rAF);
  }, []);
  useLayoutEffect2(() => {
    const node = ref.current;
    if (node) {
      originalStylesRef.current = originalStylesRef.current || {
        transitionDuration: node.style.transitionDuration,
        animationName: node.style.animationName
      };
      node.style.transitionDuration = "0s";
      node.style.animationName = "none";
      const rect = node.getBoundingClientRect();
      heightRef.current = rect.height;
      widthRef.current = rect.width;
      if (!isMountAnimationPreventedRef.current) {
        node.style.transitionDuration = originalStylesRef.current.transitionDuration;
        node.style.animationName = originalStylesRef.current.animationName;
      }
      setIsPresent(present);
    }
  }, [context.open, present]);
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
    Primitive.div,
    {
      "data-state": getState(context.open),
      "data-disabled": context.disabled ? "" : void 0,
      id: context.contentId,
      hidden: !isOpen,
      ...contentProps,
      ref: composedRefs,
      style: {
        [`--radix-collapsible-content-height`]: height ? `${height}px` : void 0,
        [`--radix-collapsible-content-width`]: width ? `${width}px` : void 0,
        ...props.style
      },
      children: isOpen && children
    }
  );
});
function getState(open) {
  return open ? "open" : "closed";
}
var Root3 = Collapsible;

// components/ui/collapsible.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Collapsible2({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Root3, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger2({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent2({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
    CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

// components/link.tsx
var import_react = require("react");
var import_core = require("@refinedev/core");
var import_react_slot4 = require("@radix-ui/react-slot");
var import_jsx_runtime12 = require("react/jsx-runtime");
var Link = (0, import_react.forwardRef)(
  ({ children, href, title, className, asChild }, ref) => {
    const { Link: LegacyLink } = (0, import_core.useRouterContext)();
    const routerType = (0, import_core.useRouterType)();
    const Link2 = (0, import_core.useLink)();
    const ActiveLink = routerType === "legacy" ? LegacyLink : Link2;
    const Comp = asChild ? import_react_slot4.Slot : ActiveLink;
    return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(Comp, { ref, to: href, className, title, children });
  }
);
Link.displayName = "Link";

// components/nav-refine.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
function NavRefine() {
  const { menuItems, selectedKey, defaultOpenKeys } = (0, import_core2.useMenu)();
  const renderTreeView = (tree, selectedKey2) => {
    return tree.map((item, key) => {
      const { list, meta } = item;
      const isSelected = item.key === selectedKey2;
      return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        Collapsible2,
        {
          asChild: true,
          defaultOpen: isSelected,
          className: "group/collapsible",
          children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CollapsibleTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            SidebarMenuButton,
            {
              asChild: true,
              className: cn("flex items-center", isSelected && "bg-accent"),
              children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
                Link,
                {
                  href: list?.toString() ?? "#",
                  title: meta?.label ?? item.name,
                  children: [
                    meta?.icon,
                    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "ml-2", children: item.label })
                  ]
                },
                key
              )
            }
          ) }) }, item.key)
        },
        key
      );
    });
  };
  const groups = {};
  menuItems.forEach((item) => {
    const group = item.meta?.group || "otros";
    if (!groups[group]) groups[group] = [];
    groups[group].push(item);
  });
  const groupLabels = {
    dashboard: "Dashboard",
    principales: "Principales",
    payments: "Pagos",
    app: "Aplicaci\xF3n",
    otros: "Otros",
    users: "Usuarios"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mb-10", children: Object.entries(groups).map(([group, items]) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(SidebarGroup, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarGroupLabel, { children: groupLabels[group] || group }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarGroupContent, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(SidebarMenu, { children: renderTreeView(items, selectedKey) }) })
  ] }, group)) });
}

// components/app-sidebar.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function AppSidebar({ meta, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(Sidebar, { collapsible: "icon", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      SidebarMenuButton,
      {
        asChild: true,
        className: "data-[slot=sidebar-menu-button]:!p-1.5",
        children: /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)("a", { href: "/dashboard", children: [
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
            "img",
            {
              src: "/semillapp.png",
              alt: "Semillapp Logo",
              className: "mr-2 !size-5"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-base font-semibold", children: "Semillapp" })
        ] })
      }
    ) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarContent, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(NavRefine, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SidebarRail, {})
  ] });
}

// components/field.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
var Field = ({ label, description, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: label }),
    children,
    description && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: description })
  ] });
};

// components/form.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var Form = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("form", { ...props, children });
};

// components/image-preview-cell.tsx
var import_react2 = require("react");
var import_image = __toESM(require("next/image"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
var ImagePreviewCell = ({
  src,
  alt = "Vista previa",
  thumbnailSize = 48
}) => {
  const [isOpen, setIsOpen] = (0, import_react2.useState)(false);
  const [hasError, setHasError] = (0, import_react2.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react2.useState)(false);
  (0, import_react2.useEffect)(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
  (0, import_react2.useEffect)(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => {
      setImageLoaded(true);
      setHasError(false);
    };
    img.onerror = () => {
      setImageLoaded(false);
      setHasError(true);
    };
  }, [src]);
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "button",
      {
        type: "button",
        "aria-label": alt,
        className: "h-full w-full border-none bg-transparent p-0",
        style: { lineHeight: 0 },
        onClick: () => imageLoaded && setIsOpen(true),
        children: hasError ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { className: "flex h-12 w-12 items-center justify-center rounded border bg-gray-100 text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_lucide_react3.Image, { size: 24 }) }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_image.default,
          {
            src,
            alt,
            width: thumbnailSize,
            height: thumbnailSize,
            className: "h-full w-full cursor-pointer rounded border object-cover"
          }
        )
      }
    ),
    isOpen && imageLoaded && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
        children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          import_image.default,
          {
            src,
            alt: alt + " ampliada",
            width: 600,
            height: 600,
            className: "max-h-[90vh] max-w-[90vw] rounded object-contain"
          }
        )
      }
    )
  ] });
};
var image_preview_cell_default = ImagePreviewCell;

// components/nav-main.tsx
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime18 = require("react/jsx-runtime");
function NavMain({
  items
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(SidebarGroup, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SidebarGroupLabel, { children: "Platform" }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SidebarMenu, { children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      Collapsible2,
      {
        asChild: true,
        defaultOpen: item.isActive,
        className: "group/collapsible",
        children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(SidebarMenuItem, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CollapsibleTrigger2, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(SidebarMenuButton, { tooltip: item.title, children: [
            item.icon && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(item.icon, {}),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: item.title }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react4.ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(CollapsibleContent2, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SidebarMenuSub, { children: item.items?.map((subItem) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SidebarMenuSubItem, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(SidebarMenuSubButton, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("a", { href: subItem.url, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { children: subItem.title }) }) }) }, subItem.title)) }) })
        ] })
      },
      item.title
    )) })
  ] });
}

// components/nav-projects.tsx
var import_lucide_react6 = require("lucide-react");

// components/ui/dropdown-menu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react5 = require("lucide-react");
var import_jsx_runtime19 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    DropdownMenuPrimitive.CheckboxItem,
    {
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react5.CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    DropdownMenuPrimitive.RadioGroup,
    {
      "data-slot": "dropdown-menu-radio-group",
      ...props
    }
  );
}
function DropdownMenuRadioItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react5.CircleIcon, { className: "size-2 fill-current" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuShortcut({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    "span",
    {
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSub({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    DropdownMenuPrimitive.SubTrigger,
    {
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_lucide_react5.ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    DropdownMenuPrimitive.SubContent,
    {
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      ),
      ...props
    }
  );
}

// components/nav-projects.tsx
var import_jsx_runtime20 = require("react/jsx-runtime");
function NavProjects({
  projects
}) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(SidebarGroup, { className: "group-data-[collapsible=icon]:hidden", children: [
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarGroupLabel, { children: "Projects" }),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(SidebarMenu, { children: [
      projects.map((item) => /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(SidebarMenuItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)("a", { href: item.url, children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(item.icon, {}),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: item.name })
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(DropdownMenu, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(SidebarMenuAction, { showOnHover: true, children: [
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react6.MoreHorizontal, {}),
            /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { className: "sr-only", children: "More" })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
            DropdownMenuContent,
            {
              className: "w-48 rounded-lg",
              side: isMobile ? "bottom" : "right",
              align: isMobile ? "end" : "start",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(DropdownMenuItem, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react6.Folder, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "View Project" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(DropdownMenuItem, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react6.Forward, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Share Project" })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(DropdownMenuSeparator, {}),
                /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(DropdownMenuItem, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react6.Trash2, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "Delete Project" })
                ] })
              ]
            }
          )
        ] })
      ] }, item.name)),
      /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(SidebarMenuButton, { className: "text-sidebar-foreground/70", children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_lucide_react6.MoreHorizontal, { className: "text-sidebar-foreground/70" }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)("span", { children: "More" })
      ] }) })
    ] })
  ] });
}

// components/ui/avatar.tsx
var AvatarPrimitive = __toESM(require("@radix-ui/react-avatar"));
var import_jsx_runtime21 = require("react/jsx-runtime");
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    AvatarPrimitive.Root,
    {
      "data-slot": "avatar",
      className: cn(
        "relative flex size-8 shrink-0 overflow-hidden rounded-full",
        className
      ),
      ...props
    }
  );
}
function AvatarImage({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    AvatarPrimitive.Image,
    {
      "data-slot": "avatar-image",
      className: cn("aspect-square size-full", className),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    AvatarPrimitive.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "bg-muted flex size-full items-center justify-center rounded-full",
        className
      ),
      ...props
    }
  );
}

// components/nav-user.tsx
var import_lucide_react8 = require("lucide-react");

// components/ui/theme-toggle-item.tsx
var import_react_dropdown_menu = require("@radix-ui/react-dropdown-menu");
var import_lucide_react7 = require("lucide-react");

// src/lib/use-theme.ts
var import_react3 = require("react");
function useTheme() {
  const [theme, setTheme] = (0, import_react3.useState)("light");
  (0, import_react3.useEffect)(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      applyTheme(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      const defaultTheme = systemPrefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      applyTheme(defaultTheme);
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };
  const setThemeMode = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
  };
  return {
    theme,
    toggleTheme,
    setTheme: setThemeMode
  };
}
function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

// components/ui/theme-toggle-item.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function ThemeToggleItem() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react_dropdown_menu.DropdownMenuItem, { onClick: toggleTheme, children: theme === "light" ? /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react7.Moon, { className: "h-4 w-4" }),
    "Modo oscuro"
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(import_jsx_runtime22.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_lucide_react7.Sun, { className: "h-4 w-4" }),
    "Modo claro"
  ] }) });
}

// components/nav-user.tsx
var import_nextjs = require("@clerk/nextjs");
var import_navigation = require("next/navigation");
var import_jsx_runtime23 = require("react/jsx-runtime");
function NavUser({ className }) {
  const { isMobile } = useSidebar();
  const { signOut } = (0, import_nextjs.useAuth)();
  const { push } = (0, import_navigation.useRouter)();
  const handleSignOut = async () => {
    try {
      await signOut();
      push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("div", { className: cn(className, ""), children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Avatar, { className: "h-8 w-8 rounded-lg", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(AvatarImage, { src: "/avatars/shadcn.jpg", alt: "Administrador" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(AvatarFallback, { className: "rounded-lg", children: "CN" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "truncate font-medium", children: "Administrador" }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "truncate text-xs", children: "administrador@gmail.com" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react8.ChevronsUpDown, { className: "ml-auto size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
      DropdownMenuContent,
      {
        className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
        side: isMobile ? "bottom" : "right",
        align: "end",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(Avatar, { className: "h-8 w-8 rounded-lg", children: [
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(
                AvatarImage,
                {
                  src: "/avatars/shadcn.jpg",
                  alt: "Administrador"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(AvatarFallback, { className: "rounded-lg", children: "CN" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "truncate font-medium", children: "Administrador" }),
              /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "truncate text-xs", children: "administrador@gmail.com" })
            ] })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(DropdownMenuSeparator, {}),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(ThemeToggleItem, {}),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(DropdownMenuSeparator, {}),
          /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(DropdownMenuItem, { onClick: handleSignOut, children: [
            /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_lucide_react8.LogOut, {}),
            "Cerrar sesi\xF3n"
          ] })
        ]
      }
    )
  ] }) });
}

// components/page-header.tsx
var import_lucide_react9 = require("lucide-react");

// components/hooks/use-on-back.tsx
var useOnBack = () => {
  return () => window.history.back();
};

// components/page-header.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
var PageHeader = ({
  extra,
  children,
  className,
  title,
  subTitle,
  isBack = false,
  ...props
}) => {
  const back = useOnBack();
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: cn(className, "w-full"), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(
      "div",
      {
        className: cn(
          "flex h-20 items-end lg:justify-between",
          !props.breadcrumb && "h-auto"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "min-w-0 flex-1", children: [
            props.breadcrumb,
            /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "mt-3 inline-flex flex-row items-center gap-x-4", children: [
              isBack && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(Button, { variant: "ghost", onClick: () => back?.(), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_lucide_react9.ArrowLeft, {}) }),
              /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)("div", { className: "inline-flex flex-col", children: [
                /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("h2", { className: "text-2xl font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight dark:text-white", children: title }),
                subTitle && /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-2 flex items-center text-sm text-gray-300", children: subTitle })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "flex lg:mt-0 lg:ml-4", children: extra })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", { className: "mt-4", children })
  ] }) });
};

// components/team-switcher.tsx
var React12 = __toESM(require("react"));
var import_lucide_react10 = require("lucide-react");
var import_jsx_runtime25 = require("react/jsx-runtime");
function TeamSwitcher({
  teams
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React12.useState(teams[0]);
  if (!activeTeam) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(activeTeam.logo, { className: "size-4" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "truncate font-medium", children: activeTeam.name }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("span", { className: "truncate text-xs", children: activeTeam.plan })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react10.ChevronsUpDown, { className: "ml-auto" })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
      DropdownMenuContent,
      {
        className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
        align: "start",
        side: isMobile ? "bottom" : "right",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(DropdownMenuLabel, { className: "text-muted-foreground text-xs", children: "Teams" }),
          teams.map((team, index) => /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(
            DropdownMenuItem,
            {
              onClick: () => setActiveTeam(team),
              className: "gap-2 p-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex size-6 items-center justify-center rounded-md border", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(team.logo, { className: "size-3.5 shrink-0" }) }),
                team.name,
                /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(DropdownMenuShortcut, { children: [
                  "\u2318",
                  index + 1
                ] })
              ]
            },
            team.name
          )),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(DropdownMenuSeparator, {}),
          /* @__PURE__ */ (0, import_jsx_runtime25.jsxs)(DropdownMenuItem, { className: "gap-2 p-2", children: [
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "flex size-6 items-center justify-center rounded-md border bg-transparent", children: /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(import_lucide_react10.Plus, { className: "size-4" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime25.jsx)("div", { className: "text-muted-foreground font-medium", children: "Add team" })
          ] })
        ]
      }
    )
  ] }) }) });
}

// components/buttons/create/index.tsx
var import_core3 = require("@refinedev/core");
var import_lucide_react11 = require("lucide-react");
var import_react4 = require("react");
var import_jsx_runtime26 = require("react/jsx-runtime");
var CreateButton = ({
  resource,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}) => {
  const [loading, setLoading] = (0, import_react4.useState)(false);
  const navigation = (0, import_core3.useNavigation)();
  const { hidden, disabled, label, title, to } = (0, import_core3.useCreateButton)({
    resource,
    accessControl,
    meta
  });
  if (hidden) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsxs)(
    Button,
    {
      disabled: disabled || loading,
      title,
      icon: /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react11.SquarePlusIcon, { className: "mr-2 h-4 w-4" }),
      onClick: (e) => {
        if (onClick) {
          onClick(e);
        }
        if (to) {
          e.preventDefault();
          navigation.push(to);
          setLoading(true);
        }
      },
      ...props,
      "data-testid": "create-button",
      children: [
        !hideText && (children ?? label),
        loading && /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(import_lucide_react11.Loader2, { className: "ml-2 h-4 w-4 animate-spin" })
      ]
    }
  );
};
CreateButton.displayName = "CreateButton";

// components/buttons/delete/index.tsx
var import_lucide_react13 = require("lucide-react");
var import_core4 = require("@refinedev/core");

// components/dialog/confirm-dialog.tsx
var React13 = __toESM(require("react"));
var import_lucide_react12 = require("lucide-react");
var import_react_alert_dialog = require("@radix-ui/react-alert-dialog");

// components/ui/alert-dialog.tsx
var AlertDialogPrimitive = __toESM(require("@radix-ui/react-alert-dialog"));
var import_jsx_runtime27 = require("react/jsx-runtime");
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    AlertDialogPrimitive.Overlay,
    {
      "data-slot": "alert-dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function AlertDialogContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsxs)(AlertDialogPortal, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(AlertDialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
      AlertDialogPrimitive.Content,
      {
        "data-slot": "alert-dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props
      }
    )
  ] });
}
function AlertDialogHeader({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "div",
    {
      "data-slot": "alert-dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function AlertDialogFooter({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    "div",
    {
      "data-slot": "alert-dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function AlertDialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    AlertDialogPrimitive.Title,
    {
      "data-slot": "alert-dialog-title",
      className: cn("text-lg font-semibold", className),
      ...props
    }
  );
}
function AlertDialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    AlertDialogPrimitive.Description,
    {
      "data-slot": "alert-dialog-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function AlertDialogAction({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    AlertDialogPrimitive.Action,
    {
      className: cn(buttonVariants(), className),
      ...props
    }
  );
}
function AlertDialogCancel({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    AlertDialogPrimitive.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}

// components/dialog/confirm-dialog.tsx
var import_jsx_runtime28 = require("react/jsx-runtime");
var ConfirmDialog = ({
  children,
  title = "Are you sure?",
  description = "This action cannot be undone.",
  okText = "Ok",
  cancelText = "Cancel",
  loading = false,
  okIconSide = "left",
  cancelIconSide = "left",
  onConfirm,
  okIcon,
  cancelIcon,
  okButtonVariant = "default",
  cancelButtonVariant = "outline",
  okButtonSize = "default",
  cancelButtonSize = "default",
  open,
  onOpenChange,
  defaultOpen,
  ...alertDialogProps
}) => {
  const CancelIcon = React13.useMemo(() => {
    if (React13.isValidElement(cancelIcon)) return cancelIcon;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react12.XIcon, { className: "mr-2 h-4 w-4" });
  }, [cancelIcon]);
  const OkIcon = React13.useMemo(() => {
    if (loading) return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react12.LucideClockFading, { className: "mr-2 h-4 w-4" });
    if (React13.isValidElement(okIcon)) return okIcon;
    return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_lucide_react12.CheckIcon, { className: "mr-2 h-4 w-4" });
  }, [okIcon, loading]);
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
    import_react_alert_dialog.AlertDialog,
    {
      open,
      onOpenChange,
      defaultOpen,
      ...alertDialogProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_alert_dialog.AlertDialogTrigger, { asChild: true, children }),
        /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(import_react_alert_dialog.AlertDialogContent, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(AlertDialogHeader, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_alert_dialog.AlertDialogTitle, { children: title }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_alert_dialog.AlertDialogDescription, { children: description })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(AlertDialogFooter, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_alert_dialog.AlertDialogCancel, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
              "button",
              {
                type: "button",
                disabled: loading,
                className: `btn btn-${cancelButtonVariant} btn-${cancelButtonSize}`,
                children: [
                  cancelIconSide === "left" && CancelIcon,
                  cancelText,
                  cancelIconSide === "right" && CancelIcon
                ]
              }
            ) }),
            /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(import_react_alert_dialog.AlertDialogAction, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime28.jsxs)(
              "button",
              {
                type: "button",
                disabled: loading,
                onClick: onConfirm,
                children: [
                  okIconSide === "left" && OkIcon,
                  okText,
                  okIconSide === "right" && OkIcon
                ]
              }
            ) })
          ] })
        ] })
      ]
    }
  );
};
ConfirmDialog.displayName = "ConfirmDialog";

// components/buttons/delete/index.tsx
var import_jsx_runtime29 = require("react/jsx-runtime");
var DeleteButton = ({
  resource,
  recordItemId,
  onSuccess,
  mutationMode: mutationModeProp,
  confirmTitle,
  confirmDescription,
  successNotification,
  errorNotification,
  hideText = false,
  accessControl,
  meta,
  dataProviderName,
  confirmOkText,
  confirmCancelText,
  invalidates,
  children,
  ...props
}) => {
  const {
    title,
    label,
    hidden,
    disabled,
    loading,
    confirmTitle: defaultConfirmTitle,
    confirmOkLabel: defaultConfirmOkLabel,
    cancelLabel: defaultCancelLabel,
    onConfirm,
    canAccess
  } = (0, import_core4.useDeleteButton)({
    resource,
    id: recordItemId,
    dataProviderName,
    invalidates,
    meta,
    onSuccess,
    mutationMode: mutationModeProp,
    errorNotification,
    successNotification,
    accessControl
  });
  if (hidden || !canAccess?.can) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    ConfirmDialog,
    {
      okText: confirmOkText ?? defaultConfirmOkLabel,
      cancelText: confirmCancelText ?? defaultCancelLabel,
      okButtonVariant: "destructive",
      cancelButtonVariant: "outline",
      title: confirmTitle ?? defaultConfirmTitle,
      description: confirmDescription,
      loading,
      onConfirm,
      children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
        Button,
        {
          disabled,
          title,
          loading,
          "data-testId": "delete-button",
          className: "bg-rose-500 text-slate-50",
          ...props,
          children: /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(import_lucide_react13.Trash2Icon, { className: "h-4 w-4" })
        }
      )
    }
  );
};
DeleteButton.displayName = "DeleteButton";

// components/buttons/edit/index.tsx
var import_lucide_react14 = require("lucide-react");
var import_core5 = require("@refinedev/core");
var import_jsx_runtime30 = require("react/jsx-runtime");
var EditButton = ({
  resource,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  onClick,
  children,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to } = (0, import_core5.useEditButton)({
    resource,
    id: recordItemId,
    accessControl,
    meta
  });
  if (hidden) return null;
  if (recordItemId === void 0 || recordItemId === null) return null;
  const resolvedTo = typeof to === "string" ? to.includes("[id]") ? to.replace("[id]", String(recordItemId)) : to : `/edit/${String(recordItemId)}`;
  const isDisabled = disabled || props.disabled;
  const handleClick = (e) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      e.preventDefault();
      onClick(e);
    }
  };
  const text = children ?? label ?? "Editar";
  const ariaLabel = hideText ? typeof text === "string" ? text : "Editar" : void 0;
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(Button, { asChild: true, title, disabled: isDisabled, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
    LinkComponent,
    {
      to: resolvedTo,
      replace: false,
      onClick: handleClick,
      "aria-label": ariaLabel,
      children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_lucide_react14.SquarePenIcon, { className: hideText ? "h-4 w-4" : "h-4 w-4" })
    }
  ) });
};
EditButton.displayName = "EditButton";

// components/buttons/list/index.tsx
var import_lucide_react15 = require("lucide-react");
var import_core6 = require("@refinedev/core");
var import_jsx_runtime31 = require("react/jsx-runtime");
var ListButton = ({
  resource: resourceNameFromProps,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to } = (0, import_core6.useListButton)({
    resource: resourceNameFromProps,
    accessControl,
    meta
  });
  if (hidden) return null;
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
    LinkComponent,
    {
      to,
      replace: false,
      onClick: (e) => {
        if (disabled) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(
        Button,
        {
          disabled,
          title,
          icon: /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_lucide_react15.ListIcon, { className: "mr-2 h-4 w-4" }),
          ...props,
          children: !hideText && (children ?? label)
        }
      )
    }
  );
};
ListButton.displayName = "ListButton";

// components/buttons/refresh/index.tsx
var import_lucide_react16 = require("lucide-react");
var import_core7 = require("@refinedev/core");
var import_jsx_runtime32 = require("react/jsx-runtime");
var RefreshButton = ({
  resource,
  recordItemId,
  hideText = false,
  dataProviderName,
  children,
  ...props
}) => {
  const { onClick, label, loading } = (0, import_core7.useRefreshButton)({
    resource,
    id: recordItemId,
    dataProviderName
  });
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
    Button,
    {
      onClick,
      loading,
      icon: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_lucide_react16.RefreshCwIcon, { className: "mr-2 h-4 w-4" }),
      ...props,
      children: !hideText && (children ?? label)
    }
  );
};
RefreshButton.displayName = "RefreshButton";

// components/buttons/save/index.tsx
var import_core8 = require("@refinedev/core");
var import_lucide_react17 = require("lucide-react");
var import_react_slot5 = require("@radix-ui/react-slot");
var import_jsx_runtime33 = require("react/jsx-runtime");
var SaveButton = ({
  hideText = false,
  children,
  accessControl,
  access,
  resource,
  recordItemId,
  loading,
  ...props
}) => {
  const { label } = (0, import_core8.useSaveButton)();
  const Com = !accessControl?.enabled ? import_react_slot5.Slot : import_core8.CanAccess;
  if (accessControl?.hideIfUnauthorized && accessControl?.enabled) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
    Com,
    {
      params: {
        id: recordItemId
      },
      resource,
      action: "save",
      ...access,
      children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(Button, { ...props, disabled: loading, children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react17.Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
        !hideText && (children ?? label),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_lucide_react17.SaveIcon, { className: "mr-2 h-4 w-4" })
      ] })
    }
  );
};
SaveButton.displayName = "SaveButton";

// components/buttons/show/index.tsx
var import_lucide_react18 = require("lucide-react");
var import_core9 = require("@refinedev/core");
var import_jsx_runtime34 = require("react/jsx-runtime");
var ShowButton = ({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}) => {
  const { to, label, title, hidden, disabled, LinkComponent } = (0, import_core9.useShowButton)({
    resource: resourceNameFromProps,
    id: recordItemId,
    accessControl,
    meta
  });
  const isDisabled = disabled || props.disabled;
  const isHidden = hidden || props.hidden;
  if (isHidden) return null;
  const resolvedTo = typeof to === "string" && to.includes("[id]") ? to.replace("[id]", String(recordItemId)) : to ?? `/show/${String(recordItemId)}`;
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    LinkComponent,
    {
      to: resolvedTo,
      replace: false,
      onClick: (e) => {
        if (isDisabled) {
          e.preventDefault();
          return;
        }
        if (onClick) {
          e.preventDefault();
          onClick(e);
        }
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(Button, { title, disabled: isDisabled, ...props, children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(import_lucide_react18.EyeIcon, { className: "h-4 w-4" }) })
    }
  );
};
ShowButton.displayName = "ShowButton";

// components/crud/create/index.tsx
var import_react6 = require("react");
var import_core11 = require("@refinedev/core");

// components/breadcrumb/index.tsx
var import_core10 = require("@refinedev/core");
var import_react5 = require("react");
var import_lucide_react20 = require("lucide-react");

// components/ui/breadcrumb.tsx
var import_lucide_react19 = require("lucide-react");
var import_react_slot6 = require("@radix-ui/react-slot");
var import_jsx_runtime35 = require("react/jsx-runtime");
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? import_react_slot6.Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("text-foreground font-normal", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_lucide_react19.ChevronRight, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(import_lucide_react19.MoreHorizontal, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime35.jsx)("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}

// components/breadcrumb/index.tsx
var import_jsx_runtime36 = require("react/jsx-runtime");
var Breadcrumbs = ({ showHome = true, meta }) => {
  const { breadcrumbs } = (0, import_core10.useBreadcrumb)({
    meta
  });
  const { hasDashboard } = (0, import_core10.useRefineContext)();
  const { resources } = (0, import_core10.useResource)();
  const dashboardResource = resources[0];
  const rootRouteResource = (0, import_core10.matchResourceFromRoute)("/", resources);
  const BreadCrumbItems = breadcrumbs.map(({ label, href }, key) => /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_react5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(BreadcrumbItem, { children: href ? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(BreadcrumbLink, { asChild: true, href: `#x`, children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Link, { href, children: label }) }) : /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(BreadcrumbPage, { children: label }) }),
    key < breadcrumbs.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(BreadcrumbSeparator, {})
  ] }, key));
  return /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(Breadcrumb, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(BreadcrumbList, { children: [
    showHome || hasDashboard || rootRouteResource.found ? /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_jsx_runtime36.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(BreadcrumbItem, { children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
        BreadcrumbLink,
        {
          href: dashboardResource.list?.toString(),
          asChild: true,
          title: dashboardResource?.meta?.title ?? dashboardResource.name ?? "Dashboard",
          children: /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(
            Link,
            {
              href: dashboardResource.list?.toString(),
              title: dashboardResource?.meta?.title ?? dashboardResource.name ?? "Dashboard",
              children: dashboardResource?.meta?.icon ?? /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_lucide_react20.HomeIcon, { className: "h-4 w-4" })
            }
          )
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(BreadcrumbSeparator, {})
    ] }) : null,
    BreadCrumbItems
  ] }) });
};

// components/crud/create/index.tsx
var import_jsx_runtime37 = require("react/jsx-runtime");
var CreatePage = ({
  title,
  resource: resourceFromProps,
  breadcrumb: breadcrumbFromProps,
  extra,
  children
}) => {
  const translate = (0, import_core11.useTranslate)();
  const { options: { breadcrumb: globalBreadcrumb } = {} } = (0, import_core11.useRefineContext)();
  const getUserFriendlyName = (0, import_core11.useUserFriendlyName)();
  const { resource, identifier } = (0, import_core11.useResource)(resourceFromProps);
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const renderTitle = () => {
    if (title === false) return null;
    if (title) {
      if (typeof title === "string" || typeof title === "number") {
        return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h3", { children: title });
      }
      return title;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("h3", { children: translate(
      `${identifier}.titles.create`,
      `Create ${getUserFriendlyName(
        resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
        "singular"
      )}`
    ) });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_jsx_runtime37.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      PageHeader,
      {
        title: renderTitle(),
        isBack: true,
        breadcrumb: (0, import_react6.isValidElement)(breadcrumb) ? breadcrumb : /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(Breadcrumbs, {}),
        extra: extra ?? /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_jsx_runtime37.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(ListButton, { resource: resourceFromProps }) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("div", { className: "!mt-0 pt-4", children })
  ] });
};
CreatePage.displayName = "CreatePage";

// components/crud/edit/index.tsx
var import_core12 = require("@refinedev/core");
var import_react7 = require("react");
var import_jsx_runtime38 = require("react/jsx-runtime");
var EditPage = ({
  title,
  resource: resourceFromProps,
  mutationMode: mutationModeFromProps,
  recordItemId,
  deleteButtonProps: deleteButtonPropsFromProps,
  headerButtons: headerButtonsFromProps,
  dataProviderName,
  extra,
  breadcrumb: breadcrumbFromProps,
  canDelete = true,
  children,
  isLoading,
  autoSaveProps
}) => {
  const translate = (0, import_core12.useTranslate)();
  const { options: { breadcrumb: globalBreadcrumb } = {} } = (0, import_core12.useRefineContext)();
  const { mutationMode: mutationModeContext } = (0, import_core12.useMutationMode)();
  const mutationMode = mutationModeFromProps ?? mutationModeContext;
  const routerType = (0, import_core12.useRouterType)();
  const back = (0, import_core12.useBack)();
  const go = (0, import_core12.useGo)();
  const { goBack, list: legacyGoList } = (0, import_core12.useNavigation)();
  const getUserFriendlyName = (0, import_core12.useUserFriendlyName)();
  const {
    resource,
    action,
    id: idFromParams,
    identifier
  } = (0, import_core12.useResource)(resourceFromProps);
  const goListPath = (0, import_core12.useToPath)({
    resource,
    action: "list"
  });
  const id = recordItemId ?? idFromParams;
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const hasList = resource?.list && !recordItemId;
  const isDeleteButtonVisible = canDelete ?? ((resource?.meta?.canDelete ?? resource?.canDelete) || deleteButtonPropsFromProps);
  const listButtonProps = hasList ? {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource?.route : identifier
  } : void 0;
  const refreshButtonProps = {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource?.route : identifier,
    recordItemId: id,
    dataProviderName
  };
  const deleteButtonProps = isDeleteButtonVisible ? {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource?.route : identifier,
    mutationMode,
    onSuccess: () => {
      if (routerType === "legacy") {
        legacyGoList(resource?.route ?? resource?.name ?? "");
      } else {
        go({ to: goListPath });
      }
    },
    recordItemId: id,
    dataProviderName,
    ...deleteButtonPropsFromProps
  } : void 0;
  const defaultHeaderButtons = /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "flex flex-row items-center gap-2", children: [
    autoSaveProps && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_core12.AutoSaveIndicator, { ...autoSaveProps }),
    hasList && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(ListButton, { ...listButtonProps }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(RefreshButton, { ...refreshButtonProps }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(DeleteButton, { ...deleteButtonProps })
  ] });
  const headerButtons = headerButtonsFromProps ? typeof headerButtonsFromProps === "function" ? headerButtonsFromProps({
    defaultButtons: defaultHeaderButtons,
    listButtonProps,
    refreshButtonProps
  }) : headerButtonsFromProps : defaultHeaderButtons;
  const renderTitle = () => {
    if (title === false) return null;
    if (title) {
      if (typeof title === "string" || typeof title === "number") {
        return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h3", { className: "text-2xl leading-tight font-bold", children: title });
      }
      return title;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("h3", { className: "text-2xl leading-tight font-bold", children: translate(
      `${identifier}.titles.show`,
      `Show ${getUserFriendlyName(
        resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
        "singular"
      )}`
    ) });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_jsx_runtime38.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      PageHeader,
      {
        title: renderTitle(),
        isBack: true,
        breadcrumb: (0, import_react7.isValidElement)(breadcrumb) ? breadcrumb : /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Breadcrumbs, {}),
        extra: extra ?? /* @__PURE__ */ (0, import_jsx_runtime38.jsx)("div", { className: "inline-flex flex-row items-center gap-x-2", children: headerButtons })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)("div", { className: "pt-4", children: [
      isLoading && /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(Skeleton, { className: "h-[80vh] w-full" }),
      !isLoading && children
    ] })
  ] });
};

// components/crud/list/index.tsx
var import_core13 = require("@refinedev/core");
var import_react8 = require("react");
var import_jsx_runtime39 = require("react/jsx-runtime");
var List = ({
  canCreate,
  title,
  children,
  createButtonProps: createButtonPropsFromProps,
  resource: resourceFromProps,
  breadcrumb: breadcrumbFromProps,
  headerButtonProps,
  headerButtons: headerButtonsFromProps,
  extra
}) => {
  const translate = (0, import_core13.useTranslate)();
  const { options: { breadcrumb: globalBreadcrumb } = {} } = (0, import_core13.useRefineContext)();
  const routerType = (0, import_core13.useRouterType)();
  const getUserFriendlyName = (0, import_core13.useUserFriendlyName)();
  const { resource, identifier } = (0, import_core13.useResource)(resourceFromProps);
  const isCreateButtonVisible = canCreate ?? ((resource?.canCreate ?? !!resource?.create) || createButtonPropsFromProps);
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const createButtonProps = isCreateButtonVisible ? {
    resource: routerType === "legacy" ? resource?.route : identifier,
    ...createButtonPropsFromProps
  } : void 0;
  const defaultExtra = isCreateButtonVisible ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(CreateButton, { ...createButtonProps }) : null;
  const headerButtons = headerButtonsFromProps ? typeof headerButtonsFromProps === "function" ? headerButtonsFromProps({
    defaultButtons: defaultExtra,
    createButtonProps
  }) : headerButtonsFromProps : defaultExtra;
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsxs)(
    PageHeader,
    {
      title: title ?? translate(
        `${identifier}.titles.list`,
        getUserFriendlyName(
          resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
          "plural"
        )
      ),
      extra: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { className: headerButtonProps?.className, children: headerButtons }),
      breadcrumb: (0, import_react8.isValidElement)(breadcrumb) ? /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(import_jsx_runtime39.Fragment, { children: breadcrumb }) : /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(Breadcrumbs, {}),
      children: [
        extra,
        /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children })
      ]
    }
  ) });
};

// components/crud/show/index.tsx
var import_react9 = require("react");
var import_core14 = require("@refinedev/core");
var import_lucide_react21 = require("lucide-react");
var import_jsx_runtime40 = require("react/jsx-runtime");
var Show = (props) => {
  const {
    children,
    resource: resourceFromProps,
    recordItemId,
    canDelete,
    deleteButtonProps: deleteButtonPropsFromProps,
    canEdit,
    dataProviderName,
    isLoading,
    footerButtons: footerButtonsFromProps,
    footerButtonProps,
    headerButtons: headerButtonsFromProps,
    headerButtonProps,
    wrapperProps,
    contentProps,
    headerProps,
    goBack: goBackFromProps,
    breadcrumb: breadcrumbFromProps,
    title
  } = props;
  const translate = (0, import_core14.useTranslate)();
  const { options: { breadcrumb: globalBreadcrumb } = {} } = (0, import_core14.useRefineContext)();
  const routerType = (0, import_core14.useRouterType)();
  const back = (0, import_core14.useBack)();
  const go = (0, import_core14.useGo)();
  const { goBack, list: legacyGoList } = (0, import_core14.useNavigation)();
  const getUserFriendlyName = (0, import_core14.useUserFriendlyName)();
  const {
    resource,
    action,
    id: idFromParams,
    identifier
  } = (0, import_core14.useResource)(resourceFromProps);
  const goListPath = (0, import_core14.useToPath)({
    resource,
    action: "list"
  });
  const id = recordItemId ?? idFromParams;
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const hasList = resource?.list && !recordItemId;
  const isDeleteButtonVisible = canDelete ?? ((resource?.meta?.canDelete ?? resource?.canDelete) || deleteButtonPropsFromProps);
  const isEditButtonVisible = canEdit ?? resource?.canEdit ?? !!resource?.edit;
  const listButtonProps = hasList ? {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource?.route : identifier
  } : void 0;
  const editButtonProps = isEditButtonVisible ? {
    colorScheme: "brand",
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource?.route : identifier,
    recordItemId: id
  } : void 0;
  const deleteButtonProps = isDeleteButtonVisible ? {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource?.route : identifier,
    recordItemId: id,
    onSuccess: () => {
      if (routerType === "legacy") {
        legacyGoList(resource?.route ?? resource?.name ?? "");
      } else {
        go({ to: goListPath });
      }
    },
    dataProviderName,
    ...deleteButtonPropsFromProps
  } : void 0;
  const refreshButtonProps = {
    ...isLoading ? { disabled: true } : {},
    resource: routerType === "legacy" ? resource?.route : identifier,
    recordItemId: id,
    dataProviderName
  };
  const defaultHeaderButtons = /* @__PURE__ */ (0, import_jsx_runtime40.jsxs)(import_jsx_runtime40.Fragment, { children: [
    listButtonProps && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(ListButton, { ...listButtonProps }),
    isEditButtonVisible && /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(EditButton, { colorScheme: "brand", ...editButtonProps }),
    /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(RefreshButton, { ...refreshButtonProps })
  ] });
  const buttonBack = goBackFromProps === null ? null : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    Button,
    {
      "aria-label": "back",
      variant: "ghost",
      size: "sm",
      onClick: action !== "list" && typeof action !== "undefined" ? routerType === "legacy" ? goBack : back : void 0,
      children: typeof goBackFromProps !== "undefined" ? goBackFromProps : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_lucide_react21.ArrowLeft, {})
    }
  );
  const headerButtons = headerButtonsFromProps ? typeof headerButtonsFromProps === "function" ? headerButtonsFromProps({
    defaultButtons: defaultHeaderButtons,
    deleteButtonProps,
    editButtonProps,
    listButtonProps,
    refreshButtonProps
  }) : headerButtonsFromProps : defaultHeaderButtons;
  const footerButtons = footerButtonsFromProps ? typeof footerButtonsFromProps === "function" ? footerButtonsFromProps({ defaultButtons: null }) : footerButtonsFromProps : null;
  const renderTitle = () => {
    if (title === false) return null;
    if (title) {
      if (typeof title === "string" || typeof title === "number") {
        return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h3", { className: "text-2xl leading-tight font-bold", children: title });
      }
      return title;
    }
    return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)("h3", { className: "text-2xl leading-tight font-bold", children: translate(
      `${identifier}.titles.show`,
      `Show ${getUserFriendlyName(
        resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
        "singular"
      )}`
    ) });
  };
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    PageHeader,
    {
      title: renderTitle(),
      isBack: true,
      breadcrumb: (0, import_react9.isValidElement)(breadcrumb) ? /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_jsx_runtime40.Fragment, { children: breadcrumb }) : /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(Breadcrumbs, {}),
      children
    }
  );
};

// components/ui/card.tsx
var import_jsx_runtime41 = require("react/jsx-runtime");
function Card({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
    "div",
    {
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      ),
      ...props
    }
  );
}

// components/ui/form.tsx
var React16 = __toESM(require("react"));
var import_react_slot7 = require("@radix-ui/react-slot");
var import_react_hook_form = require("react-hook-form");

// components/ui/label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime42 = require("react/jsx-runtime");
function Label2({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// components/ui/form.tsx
var import_jsx_runtime43 = require("react/jsx-runtime");
var Form2 = import_react_hook_form.FormProvider;
var FormFieldContext = React16.createContext(
  {}
);
var FormItemContext = React16.createContext(
  {}
);

// components/ui/select.tsx
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react22 = require("lucide-react");
var import_jsx_runtime44 = require("react/jsx-runtime");
function Select({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SelectPrimitive.Root, { "data-slot": "select", ...props });
}

// components/ui/table.tsx
var import_jsx_runtime45 = require("react/jsx-runtime");
function Table({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        "table",
        {
          "data-slot": "table",
          className: cn("w-full caption-bottom text-sm", className),
          ...props
        }
      )
    }
  );
}

// components/ui/tooltip.tsx
var TooltipPrimitive = __toESM(require("@radix-ui/react-tooltip"));
var import_jsx_runtime46 = require("react/jsx-runtime");
function TooltipProvider2({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      ...props
    }
  );
}
function Tooltip2({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(TooltipProvider2, { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddCardForm,
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
  AppSidebar,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  Collapsible,
  ConfirmDialog,
  CreateButton,
  CreatePage,
  DeleteButton,
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
  EditButton,
  EditPage,
  Field,
  Form,
  ImagePreviewCell,
  Input,
  Label,
  Link,
  List,
  ListButton,
  NavMain,
  NavProjects,
  NavRefine,
  NavUser,
  PageHeader,
  RefreshButton,
  SaveButton,
  Select,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Show,
  ShowButton,
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
  Skeleton,
  Table,
  TeamSwitcher,
  ThemeToggleItem,
  Tooltip,
  UIForm,
  buttonVariants,
  cn,
  useIsMobile,
  useOnBack,
  useSidebar,
  useTheme
});
