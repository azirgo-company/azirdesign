// components/field.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Field = ({ label, description, children }) => {
  return /* @__PURE__ */ jsxs("div", { children: [
    label && /* @__PURE__ */ jsx("div", { children: label }),
    children,
    description && /* @__PURE__ */ jsx("div", { children: description })
  ] });
};

// components/image-preview-cell.tsx
import { useState, useEffect } from "react";
import Image from "next/image";
import { Image as ImageIcon } from "lucide-react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var ImagePreviewCell = ({
  src,
  alt = "Vista previa",
  thumbnailSize = 48
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs2("div", { className: "h-full w-full", children: [
    /* @__PURE__ */ jsx2(
      "button",
      {
        type: "button",
        "aria-label": alt,
        className: "h-full w-full border-none bg-transparent p-0",
        style: { lineHeight: 0 },
        onClick: () => imageLoaded && setIsOpen(true),
        children: hasError ? /* @__PURE__ */ jsx2("div", { className: "flex h-12 w-12 items-center justify-center rounded border bg-gray-100 text-gray-400", children: /* @__PURE__ */ jsx2(ImageIcon, { size: 24 }) }) : /* @__PURE__ */ jsx2(
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
    isOpen && imageLoaded && /* @__PURE__ */ jsx2(
      "div",
      {
        role: "dialog",
        "aria-modal": "true",
        tabIndex: -1,
        onClick: () => setIsOpen(false),
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",
        children: /* @__PURE__ */ jsx2(
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

// components/link.tsx
import { forwardRef } from "react";
import { useLink, useRouterContext, useRouterType } from "@refinedev/core";
import { Slot } from "@radix-ui/react-slot";
import { jsx as jsx3 } from "react/jsx-runtime";
var Link = forwardRef(
  ({ children, href, title, className, asChild }, ref) => {
    const { Link: LegacyLink } = useRouterContext();
    const routerType = useRouterType();
    const Link2 = useLink();
    const ActiveLink = routerType === "legacy" ? LegacyLink : Link2;
    const Comp = asChild ? Slot : ActiveLink;
    return /* @__PURE__ */ jsx3(Comp, { ref, to: href, className, title, children });
  }
);
Link.displayName = "Link";

// components/page-header.tsx
import { ArrowLeft } from "lucide-react";

// components/ui/button.tsx
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
function cn(...args) {
  return args.filter(Boolean).join(" ");
}

// components/ui/button.tsx
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
  const Comp = asChild ? Slot2 : "button";
  return /* @__PURE__ */ jsx4(
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
import { Fragment, jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx5("div", { className: cn(className, "w-full"), children: /* @__PURE__ */ jsxs3(Fragment, { children: [
    /* @__PURE__ */ jsxs3(
      "div",
      {
        className: cn(
          "flex h-20 items-end lg:justify-between",
          !props.breadcrumb && "h-auto"
        ),
        children: [
          /* @__PURE__ */ jsxs3("div", { className: "min-w-0 flex-1", children: [
            props.breadcrumb,
            /* @__PURE__ */ jsxs3("div", { className: "mt-3 inline-flex flex-row items-center gap-x-4", children: [
              isBack && /* @__PURE__ */ jsx5(Button, { variant: "ghost", onClick: () => back?.(), children: /* @__PURE__ */ jsx5(ArrowLeft, {}) }),
              /* @__PURE__ */ jsxs3("div", { className: "inline-flex flex-col", children: [
                /* @__PURE__ */ jsx5("h2", { className: "text-2xl font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight dark:text-white", children: title }),
                subTitle && /* @__PURE__ */ jsx5("div", { className: "mt-2 flex items-center text-sm text-gray-300", children: subTitle })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx5("div", { className: "flex lg:mt-0 lg:ml-4", children: extra })
        ]
      }
    ),
    /* @__PURE__ */ jsx5("div", { className: "mt-4", children })
  ] }) });
};

// components/ui/breadcrumb.tsx
import { ChevronRight, MoreHorizontal } from "lucide-react";
import { Slot as Slot3 } from "@radix-ui/react-slot";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx6("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(
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
  const Comp = asChild ? Slot3 : "a";
  return /* @__PURE__ */ jsx6(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx6(ChevronRight, {})
    }
  );
}
function BreadcrumbEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs4(
    "span",
    {
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("flex size-9 items-center justify-center", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx6(MoreHorizontal, { className: "size-4" }),
        /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}

// components/ui/card.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
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

// components/ui/input.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx8(
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
import { jsx as jsx9 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}
export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  Field,
  image_preview_cell_default as ImagePreviewCell,
  Input,
  Link,
  PageHeader,
  Skeleton,
  buttonVariants,
  cn
};
//# sourceMappingURL=index.mjs.map