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
var src_exports = {};
__export(src_exports, {
  Breadcrumb: () => Breadcrumb,
  BreadcrumbEllipsis: () => BreadcrumbEllipsis,
  BreadcrumbItem: () => BreadcrumbItem,
  BreadcrumbLink: () => BreadcrumbLink,
  BreadcrumbList: () => BreadcrumbList,
  BreadcrumbPage: () => BreadcrumbPage,
  BreadcrumbSeparator: () => BreadcrumbSeparator,
  Button: () => Button,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Field: () => Field,
  ImagePreviewCell: () => image_preview_cell_default,
  Input: () => Input,
  Link: () => Link,
  PageHeader: () => PageHeader,
  Skeleton: () => Skeleton,
  buttonVariants: () => buttonVariants,
  cn: () => cn
});
module.exports = __toCommonJS(src_exports);

// components/field.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Field = ({ label, description, children }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: label }),
    children,
    description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: description })
  ] });
};

// components/image-preview-cell.tsx
var import_react = require("react");
var import_image = __toESM(require("next/image"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "button",
      {
        type: "button",
        "aria-label": alt,
        className: "h-full w-full border-none bg-transparent p-0",
        style: { lineHeight: 0 },
        onClick: () => imageLoaded && setIsOpen(true),
        children: hasError ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex h-12 w-12 items-center justify-center rounded border bg-gray-100 text-gray-400", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.Image, { size: 24 }) }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    isOpen && imageLoaded && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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

// components/link.tsx
var import_react2 = require("react");
var import_core = require("@refinedev/core");
var import_react_slot = require("@radix-ui/react-slot");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Link = (0, import_react2.forwardRef)(
  ({ children, href, title, className, asChild }, ref) => {
    const { Link: LegacyLink } = (0, import_core.useRouterContext)();
    const routerType = (0, import_core.useRouterType)();
    const Link2 = (0, import_core.useLink)();
    const ActiveLink = routerType === "legacy" ? LegacyLink : Link2;
    const Comp = asChild ? import_react_slot.Slot : ActiveLink;
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Comp, { ref, to: href, className, title, children });
  }
);
Link.displayName = "Link";

// components/page-header.tsx
var import_lucide_react2 = require("lucide-react");

// components/ui/button.tsx
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
function cn(...args) {
  return args.filter(Boolean).join(" ");
}

// components/ui/button.tsx
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
  const Comp = asChild ? import_react_slot2.Slot : "button";
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// components/hooks/use-on-back.tsx
var useOnBack = () => {
  return () => window.history.back();
};

// components/page-header.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: cn(className, "w-full"), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_jsx_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "div",
      {
        className: cn(
          "flex h-20 items-end lg:justify-between",
          !props.breadcrumb && "h-auto"
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "min-w-0 flex-1", children: [
            props.breadcrumb,
            /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "mt-3 inline-flex flex-row items-center gap-x-4", children: [
              isBack && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Button, { variant: "ghost", onClick: () => back?.(), children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react2.ArrowLeft, {}) }),
              /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "inline-flex flex-col", children: [
                /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { className: "text-2xl font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight dark:text-white", children: title }),
                subTitle && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-2 flex items-center text-sm text-gray-300", children: subTitle })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "flex lg:mt-0 lg:ml-4", children: extra })
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "mt-4", children })
  ] }) });
};

// components/ui/breadcrumb.tsx
var import_lucide_react3 = require("lucide-react");
var import_react_slot3 = require("@radix-ui/react-slot");
var import_jsx_runtime6 = require("react/jsx-runtime");
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  const Comp = asChild ? import_react_slot3.Slot : "a";
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.ChevronRight, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_lucide_react3.MoreHorizontal, { className: "size-4" }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}

// components/ui/card.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function Card({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// components/ui/input.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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

// components/ui/skeleton.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  ImagePreviewCell,
  Input,
  Link,
  PageHeader,
  Skeleton,
  buttonVariants,
  cn
});
//# sourceMappingURL=index.js.map