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

// azirdesign/index.ts
var index_exports = {};
__export(index_exports, {
  AddCardForm: () => add_card_form_default,
  AppSidebar: () => AppSidebar,
  Field: () => Field,
  Form: () => Form,
  ImagePreviewCell: () => image_preview_cell_default,
  Link: () => Link,
  NavMain: () => NavMain,
  NavProjects: () => NavProjects,
  NavRefine: () => NavRefine,
  NavUser: () => NavUser,
  PageHeader: () => PageHeader,
  TeamSwitcher: () => TeamSwitcher
});
module.exports = __toCommonJS(index_exports);

// azirdesign/components/add-card-form.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function AddCardForm({ user }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    "Add Card Form for user: ",
    user.email
  ] }) });
}
var add_card_form_default = AddCardForm;

// azirdesign/components/ui/sidebar.tsx
var React2 = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");
var import_lucide_react2 = require("lucide-react");

// azirdesign/components/ui/sheet.tsx
var SheetPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react = require("lucide-react");

// src/lib/utils.ts
function cn(...args) {
  return args.filter(Boolean).join(" ");
}

// azirdesign/components/ui/sheet.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Sheet({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
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

// azirdesign/components/hooks/use-mobile.ts
var React = __toESM(require("react"));

// azirdesign/components/ui/sidebar.tsx
var import_react_slot = require("@radix-ui/react-slot");
var import_react_tooltip = require("@radix-ui/react-tooltip");

// azirdesign/components/ui/skeleton.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");

// azirdesign/components/ui/button.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");

// azirdesign/components/ui/separator.tsx
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
var import_jsx_runtime5 = require("react/jsx-runtime");

// azirdesign/components/ui/input.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");

// azirdesign/components/ui/sidebar.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
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
var sidebarMenuButtonVariants = (0, import_class_variance_authority.cva)(
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
  const Comp = asChild ? import_react_slot.Slot : "button";
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

// azirdesign/components/nav-refine.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function NavRefine() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: "Navigation Refine" }) });
}

// azirdesign/components/app-sidebar.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function AppSidebar({ meta, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(Sidebar, { collapsible: "icon", ...props, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarMenu, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      SidebarMenuButton,
      {
        asChild: true,
        className: "data-[slot=sidebar-menu-button]:!p-1.5",
        children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("a", { href: "/dashboard", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
            "img",
            {
              src: "/semillapp.png",
              alt: "Semillapp Logo",
              className: "mr-2 !size-5"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "text-base font-semibold", children: "Semillapp" })
        ] })
      }
    ) }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarContent, { children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(NavRefine, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(SidebarRail, {})
  ] });
}

// azirdesign/components/field.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
var Field = ({ label, description, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: label }),
    children,
    description && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: description })
  ] });
};

// azirdesign/components/form.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
var Form = ({ children, ...props }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("form", { ...props, children });
};

// azirdesign/components/image-preview-cell.tsx
var import_react = require("react");
var import_image = __toESM(require("next/image"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime12 = require("react/jsx-runtime");
var ImagePreviewCell = ({
  src,
  alt = "Vista previa",
  thumbnailSize = 48
}) => {
  const [isOpen, setIsOpen] = (0, import_react.useState)(false);
  const [hasError, setHasError] = (0, import_react.useState)(false);
  const [imageLoaded, setImageLoaded] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
  (0, import_react.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "button",
      {
        type: "button",
        "aria-label": alt,
        className: "h-full w-full border-none bg-transparent p-0",
        style: { lineHeight: 0 },
        onClick: () => imageLoaded && setIsOpen(true),
        children: hasError ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex h-12 w-12 items-center justify-center rounded border bg-gray-100 text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_lucide_react3.Image, { size: 24 }) }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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
    isOpen && imageLoaded && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
        children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
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

// azirdesign/components/link.tsx
var import_react2 = require("react");
var import_jsx_runtime13 = require("react/jsx-runtime");
var Link = (0, import_react2.forwardRef)(({ children, href, title, className }, ref) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("a", { ref, href, className, title, children }));
Link.displayName = "Link";

// azirdesign/components/nav-main.tsx
var import_jsx_runtime14 = require("react/jsx-runtime");
function NavMain({
  items
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("div", { children: "Navigation Main" }) });
}

// azirdesign/components/nav-projects.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function NavProjects({
  projects
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { children: "Navigation Projects" }) });
}

// azirdesign/components/nav-user.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function NavUser({ className }) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className, children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: "User Menu" }) });
}

// azirdesign/components/page-header.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
var PageHeader = ({
  title,
  subTitle,
  isBack = false,
  extra,
  children
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)("div", { children: [
    isBack && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("button", { children: "<-" }),
    /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("h2", { children: title }),
    subTitle && /* @__PURE__ */ (0, import_jsx_runtime17.jsx)("div", { children: subTitle }),
    extra,
    children
  ] });
};

// azirdesign/components/team-switcher.tsx
var React4 = __toESM(require("react"));
var import_jsx_runtime18 = require("react/jsx-runtime");
function TeamSwitcher({
  teams
}) {
  const [activeTeam, setActiveTeam] = React4.useState(teams[0]);
  if (!activeTeam) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { children: [
    "Active Team: ",
    activeTeam.name
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddCardForm,
  AppSidebar,
  Field,
  Form,
  ImagePreviewCell,
  Link,
  NavMain,
  NavProjects,
  NavRefine,
  NavUser,
  PageHeader,
  TeamSwitcher
});
