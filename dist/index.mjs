// azirdesign/components/add-card-form.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function AddCardForm({ user }) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { children: [
    "Add Card Form for user: ",
    user.email
  ] }) });
}
var add_card_form_default = AddCardForm;

// azirdesign/components/ui/sidebar.tsx
import * as React2 from "react";
import { cva } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

// azirdesign/components/ui/sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

// src/lib/utils.ts
function cn(...args) {
  return args.filter(Boolean).join(" ");
}

// azirdesign/components/ui/sheet.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx2(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
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

// azirdesign/components/hooks/use-mobile.ts
import * as React from "react";

// azirdesign/components/ui/sidebar.tsx
import { Slot } from "@radix-ui/react-slot";
import {
  TooltipProvider,
  TooltipContent,
  Tooltip,
  TooltipTrigger
} from "@radix-ui/react-tooltip";

// azirdesign/components/ui/skeleton.tsx
import { jsx as jsx3 } from "react/jsx-runtime";

// azirdesign/components/ui/button.tsx
import { jsx as jsx4 } from "react/jsx-runtime";

// azirdesign/components/ui/separator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx5 } from "react/jsx-runtime";

// azirdesign/components/ui/input.tsx
import { jsx as jsx6 } from "react/jsx-runtime";

// azirdesign/components/ui/sidebar.tsx
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SidebarContext = React2.createContext(null);
function useSidebar() {
  const context = React2.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return context;
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
var sidebarMenuButtonVariants = cva(
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
  const Comp = asChild ? Slot : "button";
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

// azirdesign/components/nav-refine.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function NavRefine() {
  return /* @__PURE__ */ jsx8("div", { children: /* @__PURE__ */ jsx8("div", { children: "Navigation Refine" }) });
}

// azirdesign/components/app-sidebar.tsx
import { jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
function AppSidebar({ meta, ...props }) {
  return /* @__PURE__ */ jsxs4(Sidebar, { collapsible: "icon", ...props, children: [
    /* @__PURE__ */ jsx9(SidebarHeader, { children: /* @__PURE__ */ jsx9(SidebarMenu, { children: /* @__PURE__ */ jsx9(SidebarMenuItem, { children: /* @__PURE__ */ jsx9(
      SidebarMenuButton,
      {
        asChild: true,
        className: "data-[slot=sidebar-menu-button]:!p-1.5",
        children: /* @__PURE__ */ jsxs4("a", { href: "/dashboard", children: [
          /* @__PURE__ */ jsx9(
            "img",
            {
              src: "/semillapp.png",
              alt: "Semillapp Logo",
              className: "mr-2 !size-5"
            }
          ),
          /* @__PURE__ */ jsx9("span", { className: "text-base font-semibold", children: "Semillapp" })
        ] })
      }
    ) }) }) }),
    /* @__PURE__ */ jsx9(SidebarContent, { children: /* @__PURE__ */ jsx9(NavRefine, {}) }),
    /* @__PURE__ */ jsx9(SidebarRail, {})
  ] });
}

// azirdesign/components/field.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var Field = ({ label, description, children }) => {
  return /* @__PURE__ */ jsxs5("div", { children: [
    label && /* @__PURE__ */ jsx10("div", { children: label }),
    children,
    description && /* @__PURE__ */ jsx10("div", { children: description })
  ] });
};

// azirdesign/components/form.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var Form = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx11("form", { ...props, children });
};

// azirdesign/components/image-preview-cell.tsx
import { useState as useState3, useEffect as useEffect3 } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
var ImagePreviewCell = ({
  src,
  alt = "Vista previa",
  thumbnailSize = 48
}) => {
  const [isOpen, setIsOpen] = useState3(false);
  const [hasError, setHasError] = useState3(false);
  const [imageLoaded, setImageLoaded] = useState3(false);
  useEffect3(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
  useEffect3(() => {
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
  return /* @__PURE__ */ jsxs6("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ jsx12(
      "button",
      {
        type: "button",
        "aria-label": alt,
        className: "h-full w-full border-none bg-transparent p-0",
        style: { lineHeight: 0 },
        onClick: () => imageLoaded && setIsOpen(true),
        children: hasError ? /* @__PURE__ */ jsx12("div", { className: "flex h-12 w-12 items-center justify-center rounded border bg-gray-100 text-gray-400", children: /* @__PURE__ */ jsx12(ImageIcon, { size: 24 }) }) : /* @__PURE__ */ jsx12(
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
    isOpen && imageLoaded && /* @__PURE__ */ jsx12(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
        children: /* @__PURE__ */ jsx12(
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

// azirdesign/components/link.tsx
import { forwardRef } from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var Link = forwardRef(({ children, href, title, className }, ref) => /* @__PURE__ */ jsx13("a", { ref, href, className, title, children }));
Link.displayName = "Link";

// azirdesign/components/nav-main.tsx
import { jsx as jsx14 } from "react/jsx-runtime";
function NavMain({
  items
}) {
  return /* @__PURE__ */ jsx14("div", { children: /* @__PURE__ */ jsx14("div", { children: "Navigation Main" }) });
}

// azirdesign/components/nav-projects.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function NavProjects({
  projects
}) {
  return /* @__PURE__ */ jsx15("div", { children: /* @__PURE__ */ jsx15("div", { children: "Navigation Projects" }) });
}

// azirdesign/components/nav-user.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
function NavUser({ className }) {
  return /* @__PURE__ */ jsx16("div", { className, children: /* @__PURE__ */ jsx16("div", { children: "User Menu" }) });
}

// azirdesign/components/page-header.tsx
import { jsx as jsx17, jsxs as jsxs7 } from "react/jsx-runtime";
var PageHeader = ({
  title,
  subTitle,
  isBack = false,
  extra,
  children
}) => {
  return /* @__PURE__ */ jsxs7("div", { children: [
    isBack && /* @__PURE__ */ jsx17("button", { children: "<-" }),
    /* @__PURE__ */ jsx17("h2", { children: title }),
    subTitle && /* @__PURE__ */ jsx17("div", { children: subTitle }),
    extra,
    children
  ] });
};

// azirdesign/components/team-switcher.tsx
import * as React4 from "react";
import { jsx as jsx18, jsxs as jsxs8 } from "react/jsx-runtime";
function TeamSwitcher({
  teams
}) {
  const [activeTeam, setActiveTeam] = React4.useState(teams[0]);
  if (!activeTeam) {
    return null;
  }
  return /* @__PURE__ */ jsx18("div", { children: /* @__PURE__ */ jsxs8("div", { children: [
    "Active Team: ",
    activeTeam.name
  ] }) });
}
export {
  add_card_form_default as AddCardForm,
  AppSidebar,
  Field,
  Form,
  image_preview_cell_default as ImagePreviewCell,
  Link,
  NavMain,
  NavProjects,
  NavRefine,
  NavUser,
  PageHeader,
  TeamSwitcher
};
