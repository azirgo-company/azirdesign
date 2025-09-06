// components/add-card-form.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function AddCardForm({ user }) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { children: [
    "Add Card Form for user: ",
    user.email
  ] }) });
}
var add_card_form_default = AddCardForm;

// components/ui/sidebar.tsx
import * as React2 from "react";
import { cva as cva2 } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

// components/ui/sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

// src/lib/utils.ts
function cn(...args) {
  return args.filter(Boolean).join(" ");
}

// components/ui/sheet.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx2(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx2(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx2(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx2(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsxs2(SheetPortal, { children: [
    /* @__PURE__ */ jsx2(SheetOverlay, {}),
    /* @__PURE__ */ jsxs2(
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
          /* @__PURE__ */ jsxs2(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx2(XIcon, { className: "size-4" }),
            /* @__PURE__ */ jsx2("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// components/hooks/use-mobile.ts
import * as React from "react";
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
import { Slot as Slot2 } from "@radix-ui/react-slot";
import {
  TooltipProvider,
  TooltipContent,
  Tooltip,
  TooltipTrigger
} from "@radix-ui/react-tooltip";

// components/ui/skeleton.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}

// components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx as jsx4 } from "react/jsx-runtime";
var buttonVariants = cva(
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
  const Comp = asChild ? Slot : "button";
  return /* @__PURE__ */ jsx4(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// components/ui/separator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx5 } from "react/jsx-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx5(
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
import { jsx as jsx6 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx6(
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
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx7(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx7(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx7(
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
    return /* @__PURE__ */ jsx7(
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
    return /* @__PURE__ */ jsx7(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs3(
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
          /* @__PURE__ */ jsxs3(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ jsx7(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ jsx7(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ jsx7("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsx7(
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
        /* @__PURE__ */ jsx7(
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
            children: /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsxs3(
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
        /* @__PURE__ */ jsx7(PanelLeftIcon, {}),
        /* @__PURE__ */ jsx7("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  const Comp = asChild ? Slot2 : "div";
  return /* @__PURE__ */ jsx7(
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
  const Comp = asChild ? Slot2 : "button";
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
var sidebarMenuButtonVariants = cva2(
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
  const Comp = asChild ? Slot2 : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsxs3(Tooltip, { children: [
    /* @__PURE__ */ jsx7(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx7(
      TooltipContent,
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
  const Comp = asChild ? Slot2 : "button";
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx7(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  const Comp = asChild ? Slot2 : "a";
  return /* @__PURE__ */ jsx7(
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
import { useMenu } from "@refinedev/core";

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
import * as React10 from "react";

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
import * as React3 from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = React3.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider2 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React3.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx8(Context.Provider, { value, children });
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
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
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
import * as React5 from "react";

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
import * as React4 from "react";
var useLayoutEffect2 = globalThis?.document ? React4.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React22 from "react";
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
import * as React6 from "react";
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
import * as React7 from "react";
import * as ReactDOM from "react-dom";
import { createSlot } from "@radix-ui/react-slot";
import { jsx as jsx9 } from "react/jsx-runtime";
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
  const Slot6 = createSlot(`Primitive.${node}`);
  const Node = React7.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot6 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx9(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-presence/dist/index.mjs
import * as React23 from "react";
import * as React8 from "react";
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
import * as React9 from "react";
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
import { jsx as jsx10 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx10(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: React10.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsx10(
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
    return /* @__PURE__ */ jsx10(
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
    return /* @__PURE__ */ jsx10(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsx10(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
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
  return /* @__PURE__ */ jsx10(
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
import { jsx as jsx11 } from "react/jsx-runtime";
function Collapsible2({
  ...props
}) {
  return /* @__PURE__ */ jsx11(Root3, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger2({
  ...props
}) {
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
    CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}

// components/link.tsx
import { forwardRef as forwardRef3 } from "react";
import { useLink, useRouterContext, useRouterType } from "@refinedev/core";
import { Slot as Slot3 } from "@radix-ui/react-slot";
import { jsx as jsx12 } from "react/jsx-runtime";
var Link = forwardRef3(
  ({ children, href, title, className, asChild }, ref) => {
    const { Link: LegacyLink } = useRouterContext();
    const routerType = useRouterType();
    const Link2 = useLink();
    const ActiveLink = routerType === "legacy" ? LegacyLink : Link2;
    const Comp = asChild ? Slot3 : ActiveLink;
    return /* @__PURE__ */ jsx12(Comp, { ref, to: href, className, title, children });
  }
);
Link.displayName = "Link";

// components/nav-refine.tsx
import { jsx as jsx13, jsxs as jsxs4 } from "react/jsx-runtime";
function NavRefine() {
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const renderTreeView = (tree, selectedKey2) => {
    return tree.map((item, key) => {
      const { list, meta } = item;
      const isSelected = item.key === selectedKey2;
      return /* @__PURE__ */ jsx13(
        Collapsible2,
        {
          asChild: true,
          defaultOpen: isSelected,
          className: "group/collapsible",
          children: /* @__PURE__ */ jsx13(SidebarMenuItem, { children: /* @__PURE__ */ jsx13(CollapsibleTrigger2, { asChild: true, children: /* @__PURE__ */ jsx13(
            SidebarMenuButton,
            {
              asChild: true,
              className: cn("flex items-center", isSelected && "bg-accent"),
              children: /* @__PURE__ */ jsxs4(
                Link,
                {
                  href: list?.toString() ?? "#",
                  title: meta?.label ?? item.name,
                  children: [
                    meta?.icon,
                    /* @__PURE__ */ jsx13("span", { className: "ml-2", children: item.label })
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
  return /* @__PURE__ */ jsx13("div", { className: "mb-10", children: Object.entries(groups).map(([group, items]) => /* @__PURE__ */ jsxs4(SidebarGroup, { children: [
    /* @__PURE__ */ jsx13(SidebarGroupLabel, { children: groupLabels[group] || group }),
    /* @__PURE__ */ jsx13(SidebarGroupContent, { children: /* @__PURE__ */ jsx13(SidebarMenu, { children: renderTreeView(items, selectedKey) }) })
  ] }, group)) });
}

// components/app-sidebar.tsx
import { jsx as jsx14, jsxs as jsxs5 } from "react/jsx-runtime";
function AppSidebar({ meta, ...props }) {
  return /* @__PURE__ */ jsxs5(Sidebar, { collapsible: "icon", ...props, children: [
    /* @__PURE__ */ jsx14(SidebarHeader, { children: /* @__PURE__ */ jsx14(SidebarMenu, { children: /* @__PURE__ */ jsx14(SidebarMenuItem, { children: /* @__PURE__ */ jsx14(
      SidebarMenuButton,
      {
        asChild: true,
        className: "data-[slot=sidebar-menu-button]:!p-1.5",
        children: /* @__PURE__ */ jsxs5("a", { href: "/dashboard", children: [
          /* @__PURE__ */ jsx14(
            "img",
            {
              src: "/semillapp.png",
              alt: "Semillapp Logo",
              className: "mr-2 !size-5"
            }
          ),
          /* @__PURE__ */ jsx14("span", { className: "text-base font-semibold", children: "Semillapp" })
        ] })
      }
    ) }) }) }),
    /* @__PURE__ */ jsx14(SidebarContent, { children: /* @__PURE__ */ jsx14(NavRefine, {}) }),
    /* @__PURE__ */ jsx14(SidebarRail, {})
  ] });
}

// components/field.tsx
import { jsx as jsx15, jsxs as jsxs6 } from "react/jsx-runtime";
var Field = ({ label, description, children }) => {
  return /* @__PURE__ */ jsxs6("div", { children: [
    label && /* @__PURE__ */ jsx15("div", { children: label }),
    children,
    description && /* @__PURE__ */ jsx15("div", { children: description })
  ] });
};

// components/image-preview-cell.tsx
import { useState as useState7, useEffect as useEffect7 } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
var ImagePreviewCell = ({
  src,
  alt = "Vista previa",
  thumbnailSize = 48
}) => {
  const [isOpen, setIsOpen] = useState7(false);
  const [hasError, setHasError] = useState7(false);
  const [imageLoaded, setImageLoaded] = useState7(false);
  useEffect7(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
  useEffect7(() => {
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
  return /* @__PURE__ */ jsxs7("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ jsx16(
      "button",
      {
        type: "button",
        "aria-label": alt,
        className: "h-full w-full border-none bg-transparent p-0",
        style: { lineHeight: 0 },
        onClick: () => imageLoaded && setIsOpen(true),
        children: hasError ? /* @__PURE__ */ jsx16("div", { className: "flex h-12 w-12 items-center justify-center rounded border bg-gray-100 text-gray-400", children: /* @__PURE__ */ jsx16(ImageIcon, { size: 24 }) }) : /* @__PURE__ */ jsx16(
          Image,
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
    isOpen && imageLoaded && /* @__PURE__ */ jsx16(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
        children: /* @__PURE__ */ jsx16(
          Image,
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
import { ChevronRight } from "lucide-react";
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
function NavMain({
  items
}) {
  return /* @__PURE__ */ jsxs8(SidebarGroup, { children: [
    /* @__PURE__ */ jsx17(SidebarGroupLabel, { children: "Platform" }),
    /* @__PURE__ */ jsx17(SidebarMenu, { children: items.map((item) => /* @__PURE__ */ jsx17(
      Collapsible2,
      {
        asChild: true,
        defaultOpen: item.isActive,
        className: "group/collapsible",
        children: /* @__PURE__ */ jsxs8(SidebarMenuItem, { children: [
          /* @__PURE__ */ jsx17(CollapsibleTrigger2, { asChild: true, children: /* @__PURE__ */ jsxs8(SidebarMenuButton, { tooltip: item.title, children: [
            item.icon && /* @__PURE__ */ jsx17(item.icon, {}),
            /* @__PURE__ */ jsx17("span", { children: item.title }),
            /* @__PURE__ */ jsx17(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
          ] }) }),
          /* @__PURE__ */ jsx17(CollapsibleContent2, { children: /* @__PURE__ */ jsx17(SidebarMenuSub, { children: item.items?.map((subItem) => /* @__PURE__ */ jsx17(SidebarMenuSubItem, { children: /* @__PURE__ */ jsx17(SidebarMenuSubButton, { asChild: true, children: /* @__PURE__ */ jsx17("a", { href: subItem.url, children: /* @__PURE__ */ jsx17("span", { children: subItem.title }) }) }) }, subItem.title)) }) })
        ] })
      },
      item.title
    )) })
  ] });
}

// components/nav-projects.tsx
import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2
} from "lucide-react";

// components/ui/dropdown-menu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx18, jsxs as jsxs9 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx18(
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
  return /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx18(
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
  return /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx18(
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
  return /* @__PURE__ */ jsxs9(
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
        /* @__PURE__ */ jsx18("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx18(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx18(CheckIcon, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx18(
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
  return /* @__PURE__ */ jsxs9(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx18("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx18(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx18(CircleIcon, { className: "size-2 fill-current" }) }) }),
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
  return /* @__PURE__ */ jsx18(
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
  return /* @__PURE__ */ jsx18(
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
  return /* @__PURE__ */ jsx18(
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
  return /* @__PURE__ */ jsx18(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs9(
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
        /* @__PURE__ */ jsx18(ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx18(
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
import { jsx as jsx19, jsxs as jsxs10 } from "react/jsx-runtime";
function NavProjects({
  projects
}) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ jsxs10(SidebarGroup, { className: "group-data-[collapsible=icon]:hidden", children: [
    /* @__PURE__ */ jsx19(SidebarGroupLabel, { children: "Projects" }),
    /* @__PURE__ */ jsxs10(SidebarMenu, { children: [
      projects.map((item) => /* @__PURE__ */ jsxs10(SidebarMenuItem, { children: [
        /* @__PURE__ */ jsx19(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ jsxs10("a", { href: item.url, children: [
          /* @__PURE__ */ jsx19(item.icon, {}),
          /* @__PURE__ */ jsx19("span", { children: item.name })
        ] }) }),
        /* @__PURE__ */ jsxs10(DropdownMenu, { children: [
          /* @__PURE__ */ jsx19(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs10(SidebarMenuAction, { showOnHover: true, children: [
            /* @__PURE__ */ jsx19(MoreHorizontal, {}),
            /* @__PURE__ */ jsx19("span", { className: "sr-only", children: "More" })
          ] }) }),
          /* @__PURE__ */ jsxs10(
            DropdownMenuContent,
            {
              className: "w-48 rounded-lg",
              side: isMobile ? "bottom" : "right",
              align: isMobile ? "end" : "start",
              children: [
                /* @__PURE__ */ jsxs10(DropdownMenuItem, { children: [
                  /* @__PURE__ */ jsx19(Folder, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsx19("span", { children: "View Project" })
                ] }),
                /* @__PURE__ */ jsxs10(DropdownMenuItem, { children: [
                  /* @__PURE__ */ jsx19(Forward, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsx19("span", { children: "Share Project" })
                ] }),
                /* @__PURE__ */ jsx19(DropdownMenuSeparator, {}),
                /* @__PURE__ */ jsxs10(DropdownMenuItem, { children: [
                  /* @__PURE__ */ jsx19(Trash2, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsx19("span", { children: "Delete Project" })
                ] })
              ]
            }
          )
        ] })
      ] }, item.name)),
      /* @__PURE__ */ jsx19(SidebarMenuItem, { children: /* @__PURE__ */ jsxs10(SidebarMenuButton, { className: "text-sidebar-foreground/70", children: [
        /* @__PURE__ */ jsx19(MoreHorizontal, { className: "text-sidebar-foreground/70" }),
        /* @__PURE__ */ jsx19("span", { children: "More" })
      ] }) })
    ] })
  ] });
}

// components/ui/avatar.tsx
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx20 } from "react/jsx-runtime";
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx20(
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
  return /* @__PURE__ */ jsx20(
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
  return /* @__PURE__ */ jsx20(
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
import { ChevronsUpDown, LogOut } from "lucide-react";

// components/ui/theme-toggle-item.tsx
import { DropdownMenuItem as DropdownMenuItem2 } from "@radix-ui/react-dropdown-menu";
import { Moon, Sun } from "lucide-react";

// src/lib/use-theme.ts
import { useEffect as useEffect8, useState as useState8 } from "react";
function useTheme() {
  const [theme, setTheme] = useState8("light");
  useEffect8(() => {
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
import { Fragment, jsx as jsx21, jsxs as jsxs11 } from "react/jsx-runtime";
function ThemeToggleItem() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsx21(DropdownMenuItem2, { onClick: toggleTheme, children: theme === "light" ? /* @__PURE__ */ jsxs11(Fragment, { children: [
    /* @__PURE__ */ jsx21(Moon, { className: "h-4 w-4" }),
    "Modo oscuro"
  ] }) : /* @__PURE__ */ jsxs11(Fragment, { children: [
    /* @__PURE__ */ jsx21(Sun, { className: "h-4 w-4" }),
    "Modo claro"
  ] }) });
}

// components/nav-user.tsx
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { jsx as jsx22, jsxs as jsxs12 } from "react/jsx-runtime";
function NavUser({ className }) {
  const { isMobile } = useSidebar();
  const { signOut } = useAuth();
  const { push } = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut();
      push("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };
  return /* @__PURE__ */ jsx22("div", { className: cn(className, ""), children: /* @__PURE__ */ jsxs12(DropdownMenu, { children: [
    /* @__PURE__ */ jsx22(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs12(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ jsxs12(Avatar, { className: "h-8 w-8 rounded-lg", children: [
            /* @__PURE__ */ jsx22(AvatarImage, { src: "/avatars/shadcn.jpg", alt: "Administrador" }),
            /* @__PURE__ */ jsx22(AvatarFallback, { className: "rounded-lg", children: "CN" })
          ] }),
          /* @__PURE__ */ jsxs12("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ jsx22("span", { className: "truncate font-medium", children: "Administrador" }),
            /* @__PURE__ */ jsx22("span", { className: "truncate text-xs", children: "administrador@gmail.com" })
          ] }),
          /* @__PURE__ */ jsx22(ChevronsUpDown, { className: "ml-auto size-4" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs12(
      DropdownMenuContent,
      {
        className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
        side: isMobile ? "bottom" : "right",
        align: "end",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ jsx22(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ jsxs12("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [
            /* @__PURE__ */ jsxs12(Avatar, { className: "h-8 w-8 rounded-lg", children: [
              /* @__PURE__ */ jsx22(
                AvatarImage,
                {
                  src: "/avatars/shadcn.jpg",
                  alt: "Administrador"
                }
              ),
              /* @__PURE__ */ jsx22(AvatarFallback, { className: "rounded-lg", children: "CN" })
            ] }),
            /* @__PURE__ */ jsxs12("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ jsx22("span", { className: "truncate font-medium", children: "Administrador" }),
              /* @__PURE__ */ jsx22("span", { className: "truncate text-xs", children: "administrador@gmail.com" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx22(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsx22(ThemeToggleItem, {}),
          /* @__PURE__ */ jsx22(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs12(DropdownMenuItem, { onClick: handleSignOut, children: [
            /* @__PURE__ */ jsx22(LogOut, {}),
            "Cerrar sesi\xF3n"
          ] })
        ]
      }
    )
  ] }) });
}

// components/page-header.tsx
import { ArrowLeft } from "lucide-react";

// components/hooks/use-on-back.tsx
var useOnBack = () => {
  return () => window.history.back();
};

// components/page-header.tsx
import { Fragment as Fragment2, jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx23("div", { className: cn(className, "w-full"), children: /* @__PURE__ */ jsxs13(Fragment2, { children: [
    /* @__PURE__ */ jsxs13(
      "div",
      {
        className: cn(
          "flex h-20 items-end lg:justify-between",
          !props.breadcrumb && "h-auto"
        ),
        children: [
          /* @__PURE__ */ jsxs13("div", { className: "min-w-0 flex-1", children: [
            props.breadcrumb,
            /* @__PURE__ */ jsxs13("div", { className: "mt-3 inline-flex flex-row items-center gap-x-4", children: [
              isBack && /* @__PURE__ */ jsx23(Button, { variant: "ghost", onClick: () => back?.(), children: /* @__PURE__ */ jsx23(ArrowLeft, {}) }),
              /* @__PURE__ */ jsxs13("div", { className: "inline-flex flex-col", children: [
                /* @__PURE__ */ jsx23("h2", { className: "text-2xl font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight dark:text-white", children: title }),
                subTitle && /* @__PURE__ */ jsx23("div", { className: "mt-2 flex items-center text-sm text-gray-300", children: subTitle })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx23("div", { className: "flex lg:mt-0 lg:ml-4", children: extra })
        ]
      }
    ),
    /* @__PURE__ */ jsx23("div", { className: "mt-4", children })
  ] }) });
};

// components/team-switcher.tsx
import * as React12 from "react";
import { ChevronsUpDown as ChevronsUpDown2, Plus } from "lucide-react";
import { jsx as jsx24, jsxs as jsxs14 } from "react/jsx-runtime";
function TeamSwitcher({
  teams
}) {
  const { isMobile } = useSidebar();
  const [activeTeam, setActiveTeam] = React12.useState(teams[0]);
  if (!activeTeam) {
    return null;
  }
  return /* @__PURE__ */ jsx24(SidebarMenu, { children: /* @__PURE__ */ jsx24(SidebarMenuItem, { children: /* @__PURE__ */ jsxs14(DropdownMenu, { children: [
    /* @__PURE__ */ jsx24(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs14(
      SidebarMenuButton,
      {
        size: "lg",
        className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
        children: [
          /* @__PURE__ */ jsx24("div", { className: "bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg", children: /* @__PURE__ */ jsx24(activeTeam.logo, { className: "size-4" }) }),
          /* @__PURE__ */ jsxs14("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
            /* @__PURE__ */ jsx24("span", { className: "truncate font-medium", children: activeTeam.name }),
            /* @__PURE__ */ jsx24("span", { className: "truncate text-xs", children: activeTeam.plan })
          ] }),
          /* @__PURE__ */ jsx24(ChevronsUpDown2, { className: "ml-auto" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs14(
      DropdownMenuContent,
      {
        className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
        align: "start",
        side: isMobile ? "bottom" : "right",
        sideOffset: 4,
        children: [
          /* @__PURE__ */ jsx24(DropdownMenuLabel, { className: "text-muted-foreground text-xs", children: "Teams" }),
          teams.map((team, index) => /* @__PURE__ */ jsxs14(
            DropdownMenuItem,
            {
              onClick: () => setActiveTeam(team),
              className: "gap-2 p-2",
              children: [
                /* @__PURE__ */ jsx24("div", { className: "flex size-6 items-center justify-center rounded-md border", children: /* @__PURE__ */ jsx24(team.logo, { className: "size-3.5 shrink-0" }) }),
                team.name,
                /* @__PURE__ */ jsxs14(DropdownMenuShortcut, { children: [
                  "\u2318",
                  index + 1
                ] })
              ]
            },
            team.name
          )),
          /* @__PURE__ */ jsx24(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs14(DropdownMenuItem, { className: "gap-2 p-2", children: [
            /* @__PURE__ */ jsx24("div", { className: "flex size-6 items-center justify-center rounded-md border bg-transparent", children: /* @__PURE__ */ jsx24(Plus, { className: "size-4" }) }),
            /* @__PURE__ */ jsx24("div", { className: "text-muted-foreground font-medium", children: "Add team" })
          ] })
        ]
      }
    )
  ] }) }) });
}

// components/buttons/create/index.tsx
import { useCreateButton, useNavigation } from "@refinedev/core";
import { Loader2, SquarePlusIcon } from "lucide-react";
import { useState as useState10 } from "react";
import { jsx as jsx25, jsxs as jsxs15 } from "react/jsx-runtime";
var CreateButton = ({
  resource,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}) => {
  const [loading, setLoading] = useState10(false);
  const navigation = useNavigation();
  const { hidden, disabled, label, title, to } = useCreateButton({
    resource,
    accessControl,
    meta
  });
  if (hidden) return null;
  return /* @__PURE__ */ jsxs15(
    Button,
    {
      disabled: disabled || loading,
      title,
      icon: /* @__PURE__ */ jsx25(SquarePlusIcon, { className: "mr-2 h-4 w-4" }),
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
        loading && /* @__PURE__ */ jsx25(Loader2, { className: "ml-2 h-4 w-4 animate-spin" })
      ]
    }
  );
};
CreateButton.displayName = "CreateButton";

// components/buttons/delete/index.tsx
import { Trash2Icon } from "lucide-react";
import { useDeleteButton } from "@refinedev/core";

// components/dialog/confirm-dialog.tsx
import * as React13 from "react";
import { CheckIcon as CheckIcon2, LucideClockFading, XIcon as XIcon2 } from "lucide-react";
import {
  AlertDialog as AlertDialog2,
  AlertDialogTrigger as AlertDialogTrigger2,
  AlertDialogContent as AlertDialogContent2,
  AlertDialogTitle as AlertDialogTitle2,
  AlertDialogDescription as AlertDialogDescription2,
  AlertDialogCancel as AlertDialogCancel2,
  AlertDialogAction as AlertDialogAction2
} from "@radix-ui/react-alert-dialog";

// components/ui/alert-dialog.tsx
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";
import { jsx as jsx26, jsxs as jsxs16 } from "react/jsx-runtime";
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsx26(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx26(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx26(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx26(
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
  return /* @__PURE__ */ jsxs16(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx26(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx26(
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
  return /* @__PURE__ */ jsx26(
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
  return /* @__PURE__ */ jsx26(
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
  return /* @__PURE__ */ jsx26(
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
  return /* @__PURE__ */ jsx26(
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
  return /* @__PURE__ */ jsx26(
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
  return /* @__PURE__ */ jsx26(
    AlertDialogPrimitive.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}

// components/dialog/confirm-dialog.tsx
import { jsx as jsx27, jsxs as jsxs17 } from "react/jsx-runtime";
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
    return /* @__PURE__ */ jsx27(XIcon2, { className: "mr-2 h-4 w-4" });
  }, [cancelIcon]);
  const OkIcon = React13.useMemo(() => {
    if (loading) return /* @__PURE__ */ jsx27(LucideClockFading, { className: "mr-2 h-4 w-4" });
    if (React13.isValidElement(okIcon)) return okIcon;
    return /* @__PURE__ */ jsx27(CheckIcon2, { className: "mr-2 h-4 w-4" });
  }, [okIcon, loading]);
  return /* @__PURE__ */ jsxs17(
    AlertDialog2,
    {
      open,
      onOpenChange,
      defaultOpen,
      ...alertDialogProps,
      children: [
        /* @__PURE__ */ jsx27(AlertDialogTrigger2, { asChild: true, children }),
        /* @__PURE__ */ jsxs17(AlertDialogContent2, { children: [
          /* @__PURE__ */ jsxs17(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsx27(AlertDialogTitle2, { children: title }),
            /* @__PURE__ */ jsx27(AlertDialogDescription2, { children: description })
          ] }),
          /* @__PURE__ */ jsxs17(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsx27(AlertDialogCancel2, { asChild: true, children: /* @__PURE__ */ jsxs17(
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
            /* @__PURE__ */ jsx27(AlertDialogAction2, { asChild: true, children: /* @__PURE__ */ jsxs17(
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
import { jsx as jsx28 } from "react/jsx-runtime";
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
  } = useDeleteButton({
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
  return /* @__PURE__ */ jsx28(
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
      children: /* @__PURE__ */ jsx28(
        Button,
        {
          disabled,
          title,
          loading,
          "data-testId": "delete-button",
          className: "bg-rose-500 text-slate-50",
          ...props,
          children: /* @__PURE__ */ jsx28(Trash2Icon, { className: "h-4 w-4" })
        }
      )
    }
  );
};
DeleteButton.displayName = "DeleteButton";

// components/buttons/edit/index.tsx
import { SquarePenIcon } from "lucide-react";
import { useEditButton } from "@refinedev/core";
import { jsx as jsx29 } from "react/jsx-runtime";
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
  const { hidden, disabled, label, title, LinkComponent, to } = useEditButton({
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
  return /* @__PURE__ */ jsx29(Button, { asChild: true, title, disabled: isDisabled, ...props, children: /* @__PURE__ */ jsx29(
    LinkComponent,
    {
      to: resolvedTo,
      replace: false,
      onClick: handleClick,
      "aria-label": ariaLabel,
      children: /* @__PURE__ */ jsx29(SquarePenIcon, { className: hideText ? "h-4 w-4" : "h-4 w-4" })
    }
  ) });
};
EditButton.displayName = "EditButton";

// components/buttons/list/index.tsx
import { ListIcon } from "lucide-react";
import { useListButton } from "@refinedev/core";
import { jsx as jsx30 } from "react/jsx-runtime";
var ListButton = ({
  resource: resourceNameFromProps,
  hideText = false,
  accessControl,
  meta,
  children,
  onClick,
  ...props
}) => {
  const { hidden, disabled, label, title, LinkComponent, to } = useListButton({
    resource: resourceNameFromProps,
    accessControl,
    meta
  });
  if (hidden) return null;
  return /* @__PURE__ */ jsx30(
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
      children: /* @__PURE__ */ jsx30(
        Button,
        {
          disabled,
          title,
          icon: /* @__PURE__ */ jsx30(ListIcon, { className: "mr-2 h-4 w-4" }),
          ...props,
          children: !hideText && (children ?? label)
        }
      )
    }
  );
};
ListButton.displayName = "ListButton";

// components/buttons/refresh/index.tsx
import { RefreshCwIcon } from "lucide-react";
import { useRefreshButton } from "@refinedev/core";
import { jsx as jsx31 } from "react/jsx-runtime";
var RefreshButton = ({
  resource,
  recordItemId,
  hideText = false,
  dataProviderName,
  children,
  ...props
}) => {
  const { onClick, label, loading } = useRefreshButton({
    resource,
    id: recordItemId,
    dataProviderName
  });
  return /* @__PURE__ */ jsx31(
    Button,
    {
      onClick,
      loading,
      icon: /* @__PURE__ */ jsx31(RefreshCwIcon, { className: "mr-2 h-4 w-4" }),
      ...props,
      children: !hideText && (children ?? label)
    }
  );
};
RefreshButton.displayName = "RefreshButton";

// components/buttons/save/index.tsx
import { CanAccess, useSaveButton } from "@refinedev/core";
import { Loader2 as Loader22, SaveIcon } from "lucide-react";
import { Slot as Slot4 } from "@radix-ui/react-slot";
import { jsx as jsx32, jsxs as jsxs18 } from "react/jsx-runtime";
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
  const { label } = useSaveButton();
  const Com = !accessControl?.enabled ? Slot4 : CanAccess;
  if (accessControl?.hideIfUnauthorized && accessControl?.enabled) {
    return null;
  }
  return /* @__PURE__ */ jsx32(
    Com,
    {
      params: {
        id: recordItemId
      },
      resource,
      action: "save",
      ...access,
      children: /* @__PURE__ */ jsxs18(Button, { ...props, disabled: loading, children: [
        loading && /* @__PURE__ */ jsx32(Loader22, { className: "mr-2 h-4 w-4 animate-spin" }),
        !hideText && (children ?? label),
        /* @__PURE__ */ jsx32(SaveIcon, { className: "mr-2 h-4 w-4" })
      ] })
    }
  );
};
SaveButton.displayName = "SaveButton";

// components/buttons/show/index.tsx
import { EyeIcon } from "lucide-react";
import { useShowButton } from "@refinedev/core";
import { jsx as jsx33 } from "react/jsx-runtime";
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
  const { to, label, title, hidden, disabled, LinkComponent } = useShowButton({
    resource: resourceNameFromProps,
    id: recordItemId,
    accessControl,
    meta
  });
  const isDisabled = disabled || props.disabled;
  const isHidden = hidden || props.hidden;
  if (isHidden) return null;
  const resolvedTo = typeof to === "string" && to.includes("[id]") ? to.replace("[id]", String(recordItemId)) : to ?? `/show/${String(recordItemId)}`;
  return /* @__PURE__ */ jsx33(
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
      children: /* @__PURE__ */ jsx33(Button, { title, disabled: isDisabled, ...props, children: /* @__PURE__ */ jsx33(EyeIcon, { className: "h-4 w-4" }) })
    }
  );
};
ShowButton.displayName = "ShowButton";

// components/crud/create/index.tsx
import { isValidElement as isValidElement2 } from "react";
import {
  useRefineContext as useRefineContext2,
  useResource as useResource2,
  useTranslate,
  useUserFriendlyName
} from "@refinedev/core";

// components/breadcrumb/index.tsx
import {
  matchResourceFromRoute,
  useBreadcrumb,
  useRefineContext,
  useResource
} from "@refinedev/core";
import { Fragment as Fragment3 } from "react";
import { HomeIcon } from "lucide-react";

// components/ui/breadcrumb.tsx
import { ChevronRight as ChevronRight2, MoreHorizontal as MoreHorizontal2 } from "lucide-react";
import { Slot as Slot5 } from "@radix-ui/react-slot";
import { jsx as jsx34, jsxs as jsxs19 } from "react/jsx-runtime";
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx34("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
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
  return /* @__PURE__ */ jsx34(
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
  const Comp = asChild ? Slot5 : "a";
  return /* @__PURE__ */ jsx34(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx34(
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
  return /* @__PURE__ */ jsx34(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx34(ChevronRight2, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs19(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx34(MoreHorizontal2, { className: "size-4" }),
        /* @__PURE__ */ jsx34("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}

// components/breadcrumb/index.tsx
import { Fragment as Fragment4, jsx as jsx35, jsxs as jsxs20 } from "react/jsx-runtime";
var Breadcrumbs = ({ showHome = true, meta }) => {
  const { breadcrumbs } = useBreadcrumb({
    meta
  });
  const { hasDashboard } = useRefineContext();
  const { resources } = useResource();
  const dashboardResource = resources[0];
  const rootRouteResource = matchResourceFromRoute("/", resources);
  const BreadCrumbItems = breadcrumbs.map(({ label, href }, key) => /* @__PURE__ */ jsxs20(Fragment3, { children: [
    /* @__PURE__ */ jsx35(BreadcrumbItem, { children: href ? /* @__PURE__ */ jsx35(BreadcrumbLink, { asChild: true, href: `#x`, children: /* @__PURE__ */ jsx35(Link, { href, children: label }) }) : /* @__PURE__ */ jsx35(BreadcrumbPage, { children: label }) }),
    key < breadcrumbs.length - 1 && /* @__PURE__ */ jsx35(BreadcrumbSeparator, {})
  ] }, key));
  return /* @__PURE__ */ jsx35(Breadcrumb, { children: /* @__PURE__ */ jsxs20(BreadcrumbList, { children: [
    showHome || hasDashboard || rootRouteResource.found ? /* @__PURE__ */ jsxs20(Fragment4, { children: [
      /* @__PURE__ */ jsx35(BreadcrumbItem, { children: /* @__PURE__ */ jsx35(
        BreadcrumbLink,
        {
          href: dashboardResource.list?.toString(),
          asChild: true,
          title: dashboardResource?.meta?.title ?? dashboardResource.name ?? "Dashboard",
          children: /* @__PURE__ */ jsx35(
            Link,
            {
              href: dashboardResource.list?.toString(),
              title: dashboardResource?.meta?.title ?? dashboardResource.name ?? "Dashboard",
              children: dashboardResource?.meta?.icon ?? /* @__PURE__ */ jsx35(HomeIcon, { className: "h-4 w-4" })
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx35(BreadcrumbSeparator, {})
    ] }) : null,
    BreadCrumbItems
  ] }) });
};

// components/crud/create/index.tsx
import { Fragment as Fragment5, jsx as jsx36, jsxs as jsxs21 } from "react/jsx-runtime";
var CreatePage = ({
  title,
  resource: resourceFromProps,
  breadcrumb: breadcrumbFromProps,
  extra,
  children
}) => {
  const translate = useTranslate();
  const { options: { breadcrumb: globalBreadcrumb } = {} } = useRefineContext2();
  const getUserFriendlyName = useUserFriendlyName();
  const { resource, identifier } = useResource2(resourceFromProps);
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const renderTitle = () => {
    if (title === false) return null;
    if (title) {
      if (typeof title === "string" || typeof title === "number") {
        return /* @__PURE__ */ jsx36("h3", { children: title });
      }
      return title;
    }
    return /* @__PURE__ */ jsx36("h3", { children: translate(
      `${identifier}.titles.create`,
      `Create ${getUserFriendlyName(
        resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
        "singular"
      )}`
    ) });
  };
  return /* @__PURE__ */ jsxs21(Fragment5, { children: [
    /* @__PURE__ */ jsx36(
      PageHeader,
      {
        title: renderTitle(),
        isBack: true,
        breadcrumb: isValidElement2(breadcrumb) ? breadcrumb : /* @__PURE__ */ jsx36(Breadcrumbs, {}),
        extra: extra ?? /* @__PURE__ */ jsx36(Fragment5, { children: /* @__PURE__ */ jsx36(ListButton, { resource: resourceFromProps }) })
      }
    ),
    /* @__PURE__ */ jsx36("div", { className: "!mt-0 pt-4", children })
  ] });
};
CreatePage.displayName = "CreatePage";

// components/crud/edit/index.tsx
import {
  AutoSaveIndicator,
  useBack,
  useGo,
  useMutationMode,
  useNavigation as useNavigation2,
  useRefineContext as useRefineContext3,
  useResource as useResource3,
  useRouterType as useRouterType2,
  useToPath,
  useTranslate as useTranslate2,
  useUserFriendlyName as useUserFriendlyName2
} from "@refinedev/core";
import { isValidElement as isValidElement3 } from "react";
import { Fragment as Fragment6, jsx as jsx37, jsxs as jsxs22 } from "react/jsx-runtime";
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
  const translate = useTranslate2();
  const { options: { breadcrumb: globalBreadcrumb } = {} } = useRefineContext3();
  const { mutationMode: mutationModeContext } = useMutationMode();
  const mutationMode = mutationModeFromProps ?? mutationModeContext;
  const routerType = useRouterType2();
  const back = useBack();
  const go = useGo();
  const { goBack, list: legacyGoList } = useNavigation2();
  const getUserFriendlyName = useUserFriendlyName2();
  const {
    resource,
    action,
    id: idFromParams,
    identifier
  } = useResource3(resourceFromProps);
  const goListPath = useToPath({
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
  const defaultHeaderButtons = /* @__PURE__ */ jsxs22("div", { className: "flex flex-row items-center gap-2", children: [
    autoSaveProps && /* @__PURE__ */ jsx37(AutoSaveIndicator, { ...autoSaveProps }),
    hasList && /* @__PURE__ */ jsx37(ListButton, { ...listButtonProps }),
    /* @__PURE__ */ jsx37(RefreshButton, { ...refreshButtonProps }),
    /* @__PURE__ */ jsx37(DeleteButton, { ...deleteButtonProps })
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
        return /* @__PURE__ */ jsx37("h3", { className: "text-2xl leading-tight font-bold", children: title });
      }
      return title;
    }
    return /* @__PURE__ */ jsx37("h3", { className: "text-2xl leading-tight font-bold", children: translate(
      `${identifier}.titles.show`,
      `Show ${getUserFriendlyName(
        resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
        "singular"
      )}`
    ) });
  };
  return /* @__PURE__ */ jsxs22(Fragment6, { children: [
    /* @__PURE__ */ jsx37(
      PageHeader,
      {
        title: renderTitle(),
        isBack: true,
        breadcrumb: isValidElement3(breadcrumb) ? breadcrumb : /* @__PURE__ */ jsx37(Breadcrumbs, {}),
        extra: extra ?? /* @__PURE__ */ jsx37("div", { className: "inline-flex flex-row items-center gap-x-2", children: headerButtons })
      }
    ),
    /* @__PURE__ */ jsxs22("div", { className: "pt-4", children: [
      isLoading && /* @__PURE__ */ jsx37(Skeleton, { className: "h-[80vh] w-full" }),
      !isLoading && children
    ] })
  ] });
};

// components/crud/list/index.tsx
import {
  useRefineContext as useRefineContext4,
  useResource as useResource4,
  useRouterType as useRouterType3,
  useTranslate as useTranslate3,
  useUserFriendlyName as useUserFriendlyName3
} from "@refinedev/core";
import { isValidElement as isValidElement4 } from "react";
import { Fragment as Fragment7, jsx as jsx38, jsxs as jsxs23 } from "react/jsx-runtime";
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
  const translate = useTranslate3();
  const { options: { breadcrumb: globalBreadcrumb } = {} } = useRefineContext4();
  const routerType = useRouterType3();
  const getUserFriendlyName = useUserFriendlyName3();
  const { resource, identifier } = useResource4(resourceFromProps);
  const isCreateButtonVisible = canCreate ?? ((resource?.canCreate ?? !!resource?.create) || createButtonPropsFromProps);
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const createButtonProps = isCreateButtonVisible ? {
    resource: routerType === "legacy" ? resource?.route : identifier,
    ...createButtonPropsFromProps
  } : void 0;
  const defaultExtra = isCreateButtonVisible ? /* @__PURE__ */ jsx38(CreateButton, { ...createButtonProps }) : null;
  const headerButtons = headerButtonsFromProps ? typeof headerButtonsFromProps === "function" ? headerButtonsFromProps({
    defaultButtons: defaultExtra,
    createButtonProps
  }) : headerButtonsFromProps : defaultExtra;
  return /* @__PURE__ */ jsx38("div", { children: /* @__PURE__ */ jsxs23(
    PageHeader,
    {
      title: title ?? translate(
        `${identifier}.titles.list`,
        getUserFriendlyName(
          resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
          "plural"
        )
      ),
      extra: /* @__PURE__ */ jsx38("div", { className: headerButtonProps?.className, children: headerButtons }),
      breadcrumb: isValidElement4(breadcrumb) ? /* @__PURE__ */ jsx38(Fragment7, { children: breadcrumb }) : /* @__PURE__ */ jsx38(Breadcrumbs, {}),
      children: [
        extra,
        /* @__PURE__ */ jsx38("div", { children })
      ]
    }
  ) });
};

// components/crud/show/index.tsx
import { isValidElement as isValidElement5 } from "react";
import {
  useBack as useBack2,
  useGo as useGo2,
  useNavigation as useNavigation3,
  useRefineContext as useRefineContext5,
  useResource as useResource5,
  useRouterType as useRouterType4,
  useToPath as useToPath2,
  useTranslate as useTranslate4,
  useUserFriendlyName as useUserFriendlyName4
} from "@refinedev/core";
import { ArrowLeft as ArrowLeft2 } from "lucide-react";
import { Fragment as Fragment8, jsx as jsx39, jsxs as jsxs24 } from "react/jsx-runtime";
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
  const translate = useTranslate4();
  const { options: { breadcrumb: globalBreadcrumb } = {} } = useRefineContext5();
  const routerType = useRouterType4();
  const back = useBack2();
  const go = useGo2();
  const { goBack, list: legacyGoList } = useNavigation3();
  const getUserFriendlyName = useUserFriendlyName4();
  const {
    resource,
    action,
    id: idFromParams,
    identifier
  } = useResource5(resourceFromProps);
  const goListPath = useToPath2({
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
  const defaultHeaderButtons = /* @__PURE__ */ jsxs24(Fragment8, { children: [
    listButtonProps && /* @__PURE__ */ jsx39(ListButton, { ...listButtonProps }),
    isEditButtonVisible && /* @__PURE__ */ jsx39(EditButton, { colorScheme: "brand", ...editButtonProps }),
    /* @__PURE__ */ jsx39(RefreshButton, { ...refreshButtonProps })
  ] });
  const buttonBack = goBackFromProps === null ? null : /* @__PURE__ */ jsx39(
    Button,
    {
      "aria-label": "back",
      variant: "ghost",
      size: "sm",
      onClick: action !== "list" && typeof action !== "undefined" ? routerType === "legacy" ? goBack : back : void 0,
      children: typeof goBackFromProps !== "undefined" ? goBackFromProps : /* @__PURE__ */ jsx39(ArrowLeft2, {})
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
        return /* @__PURE__ */ jsx39("h3", { className: "text-2xl leading-tight font-bold", children: title });
      }
      return title;
    }
    return /* @__PURE__ */ jsx39("h3", { className: "text-2xl leading-tight font-bold", children: translate(
      `${identifier}.titles.show`,
      `Show ${getUserFriendlyName(
        resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
        "singular"
      )}`
    ) });
  };
  return /* @__PURE__ */ jsx39(
    PageHeader,
    {
      title: renderTitle(),
      isBack: true,
      breadcrumb: isValidElement5(breadcrumb) ? /* @__PURE__ */ jsx39(Fragment8, { children: breadcrumb }) : /* @__PURE__ */ jsx39(Breadcrumbs, {}),
      children
    }
  );
};

// components/ui/card.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx40(
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

// components/ui/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsx as jsx41 } from "react/jsx-runtime";
function Label2({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx41(
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

// components/ui/select.tsx
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon as CheckIcon3, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { jsx as jsx42, jsxs as jsxs25 } from "react/jsx-runtime";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx42(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx42(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs25(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx42(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx42(ChevronDownIcon, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  ...props
}) {
  return /* @__PURE__ */ jsx42(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs25(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position,
      ...props,
      children: [
        /* @__PURE__ */ jsx42(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx42(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx42(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs25(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx42("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx42(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx42(CheckIcon3, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx42(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx42(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx42(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx42(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx42(ChevronDownIcon, { className: "size-4" })
    }
  );
}

// components/ui/table.tsx
import { jsx as jsx43 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx43(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx43(
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
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx43(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx43(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx43(
    "tr",
    {
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      ),
      ...props
    }
  );
}
function TableHead({ className, ...props }) {
  return /* @__PURE__ */ jsx43(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}
function TableCell({ className, ...props }) {
  return /* @__PURE__ */ jsx43(
    "td",
    {
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      ),
      ...props
    }
  );
}

// components/ui/tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { jsx as jsx44, jsxs as jsxs26 } from "react/jsx-runtime";
function TooltipProvider2({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
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
  return /* @__PURE__ */ jsx44(TooltipProvider2, { children: /* @__PURE__ */ jsx44(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}

// components/theme-toggle.tsx
import { Moon as Moon2, Sun as Sun2 } from "lucide-react";
import { jsx as jsx45 } from "react/jsx-runtime";
function ThemeToggle({
  variant = "ghost",
  size = "icon",
  className
}) {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsx45(
    Button,
    {
      variant,
      size,
      onClick: toggleTheme,
      className,
      "aria-label": "Cambiar tema",
      children: theme === "light" ? /* @__PURE__ */ jsx45(Moon2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx45(Sun2, { className: "h-4 w-4" })
    }
  );
}

// components/layout/index.tsx
import { jsx as jsx46, jsxs as jsxs27 } from "react/jsx-runtime";
var AzirLayout = ({ children }) => {
  return /* @__PURE__ */ jsxs27(SidebarProvider, { children: [
    /* @__PURE__ */ jsx46(AppSidebar, {}),
    /* @__PURE__ */ jsxs27(SidebarInset, { children: [
      /* @__PURE__ */ jsx46("header", { className: "flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12", children: /* @__PURE__ */ jsxs27("div", { className: "flex w-full items-center justify-between gap-2 px-4", children: [
        /* @__PURE__ */ jsx46(SidebarTrigger, { className: "-ml-1" }),
        /* @__PURE__ */ jsxs27("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx46(ThemeToggle, {}),
          /* @__PURE__ */ jsx46(NavUser, { className: "-mr-2" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx46("div", { className: "flex flex-1 flex-col gap-4 p-4 pt-0", children })
    ] })
  ] });
};
var layout_default = AzirLayout;

// components/table/azir-table.tsx
import { Loader } from "lucide-react";
import { flexRender } from "@tanstack/react-table";

// components/table/pagination.tsx
import {
  ChevronLeft,
  ChevronRight as ChevronRight3,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
import { jsx as jsx47, jsxs as jsxs28 } from "react/jsx-runtime";
function DataTablePagination({
  table,
  className
}) {
  const { pageIndex, pageSize } = table.getState().pagination;
  const pageCount = table.getPageCount();
  const canPreviousPage = table.getCanPreviousPage();
  const canNextPage = table.getCanNextPage();
  const selectedRows = table.getFilteredSelectedRowModel().rows.length;
  const totalRows = table.getFilteredRowModel().rows.length;
  const handlePageSizeChange = (value) => {
    table.setPageSize(Number(value));
  };
  return /* @__PURE__ */ jsxs28("div", { className: cn("flex items-center justify-between px-2", className), children: [
    /* @__PURE__ */ jsxs28("div", { className: "text-muted-foreground flex-1 text-sm", children: [
      selectedRows,
      " of ",
      totalRows,
      " row(s) selected."
    ] }),
    /* @__PURE__ */ jsxs28("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ jsxs28("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx47("p", { className: "text-sm font-medium", children: "Rows per page" }),
        /* @__PURE__ */ jsxs28(Select, { value: `${pageSize}`, onValueChange: handlePageSizeChange, children: [
          /* @__PURE__ */ jsx47(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ jsx47(SelectValue, { placeholder: pageSize }) }),
          /* @__PURE__ */ jsx47(SelectContent, { side: "top", children: [10, 20, 25, 30, 40, 50].map((size) => /* @__PURE__ */ jsx47(SelectItem, { value: `${size}`, children: size }, size)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs28("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        pageIndex + 1,
        " of ",
        pageCount
      ] }),
      /* @__PURE__ */ jsxs28("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxs28(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "hidden size-8 lg:flex",
            onClick: () => table.setPageIndex(0),
            disabled: !canPreviousPage,
            children: [
              /* @__PURE__ */ jsx47("span", { className: "sr-only", children: "Go to first page" }),
              /* @__PURE__ */ jsx47(ChevronsLeft, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs28(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "size-8",
            onClick: () => table.previousPage(),
            disabled: !canPreviousPage,
            children: [
              /* @__PURE__ */ jsx47("span", { className: "sr-only", children: "Go to previous page" }),
              /* @__PURE__ */ jsx47(ChevronLeft, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs28(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "size-8",
            onClick: () => table.nextPage(),
            disabled: !canNextPage,
            children: [
              /* @__PURE__ */ jsx47("span", { className: "sr-only", children: "Go to next page" }),
              /* @__PURE__ */ jsx47(ChevronRight3, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs28(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "hidden size-8 lg:flex",
            onClick: () => table.setPageIndex(pageCount - 1),
            disabled: !canNextPage,
            children: [
              /* @__PURE__ */ jsx47("span", { className: "sr-only", children: "Go to last page" }),
              /* @__PURE__ */ jsx47(ChevronsRight, {})
            ]
          }
        )
      ] })
    ] })
  ] });
}

// components/table/azir-table.tsx
import { Fragment as Fragment9, jsx as jsx48, jsxs as jsxs29 } from "react/jsx-runtime";
function AzirTable({ table }) {
  const {
    refineCore: {
      tableQuery: { isFetching }
    }
  } = table;
  return /* @__PURE__ */ jsxs29(Fragment9, { children: [
    /* @__PURE__ */ jsxs29("div", { className: "relative overflow-hidden rounded-md border", children: [
      /* @__PURE__ */ jsxs29(Table, { children: [
        /* @__PURE__ */ jsx48(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx48(TableRow, { children: headerGroup.headers.map((header) => {
          return /* @__PURE__ */ jsx48(TableHead, { children: header.isPlaceholder ? null : flexRender(
            header.column.columnDef.header,
            header.getContext()
          ) }, header.id);
        }) }, headerGroup.id)) }),
        /* @__PURE__ */ jsx48(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx48(
          TableRow,
          {
            "data-state": row.getIsSelected() && "selected",
            children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx48(TableCell, { children: flexRender(
              cell.column.columnDef.cell,
              cell.getContext()
            ) }, cell.id))
          },
          row.id
        )) : /* @__PURE__ */ jsx48(TableRow, { children: /* @__PURE__ */ jsx48(TableCell, { colSpan: 2, className: "h-24 w-full text-center", children: "No hay resultados." }) }) })
      ] }),
      isFetching && /* @__PURE__ */ jsx48("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-white/30", children: /* @__PURE__ */ jsx48(Loader, { className: "animate-spin" }) })
    ] }),
    /* @__PURE__ */ jsx48(DataTablePagination, { className: "mt-2", table })
  ] });
}
export {
  add_card_form_default as AddCardForm,
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
  layout_default as AzirLayout,
  AzirTable,
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  Collapsible2 as Collapsible,
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
  image_preview_cell_default as ImagePreviewCell,
  Input,
  Label2 as Label,
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
  Tooltip2 as Tooltip,
  buttonVariants,
  cn,
  useIsMobile,
  useOnBack,
  useSidebar,
  useTheme
};
//# sourceMappingURL=index.mjs.map