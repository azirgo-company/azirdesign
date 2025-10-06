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
import Image2 from "next/image";
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
          Image2,
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
          Image2,
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
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
    "div",
    {
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
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

// components/inputs/image-input.tsx
import React2, { useCallback, useMemo, useRef, useState as useState2 } from "react";
import Cropper from "react-easy-crop";
import { X, Upload, Crop as CropIcon, Loader2 } from "lucide-react";

// components/ui/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx10(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx10(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs5(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx10(DialogOverlay, {}),
    /* @__PURE__ */ jsxs5(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs5(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx10(XIcon, {}),
                /* @__PURE__ */ jsx10("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx10(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className),
      ...props
    }
  );
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx10(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      ),
      ...props
    }
  );
}
function DialogTitle({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className),
      ...props
    }
  );
}

// components/inputs/image-input.tsx
import { useAuth } from "@clerk/nextjs";
import { Slider } from "@radix-ui/react-slider";
import { Fragment as Fragment2, jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
async function getCroppedBlob(imageSrc, pixelCrop, outputSize = 300) {
  const img = await new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = imageSrc;
  });
  let outputWidth = outputSize;
  let outputHeight = outputSize;
  if (outputSize === 296) {
    outputWidth = 560;
    outputHeight = 296;
  }
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("No canvas context");
  canvas.width = outputWidth;
  canvas.height = outputHeight;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(
    img,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    outputWidth,
    outputHeight
  );
  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) return reject(new Error("Canvas is empty"));
        resolve(blob);
      },
      "image/jpeg",
      0.92
    );
  });
}
function classNames(...parts) {
  return parts.filter(Boolean).join(" ");
}
function ImageInput({
  value,
  onChange,
  label = "Imagen",
  disabled,
  uploadUrl = "https://semillapp-api-production-08ab.up.railway.app/upload",
  cropSize = 300,
  formFieldName = "file",
  className
}) {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState2(value ?? null);
  const [localFileUrl, setLocalFileUrl] = useState2(null);
  const [isCropOpen, setIsCropOpen] = useState2(false);
  const [crop, setCrop] = useState2({ x: 0, y: 0 });
  const [zoom, setZoom] = useState2(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState2(null);
  const [isUploading, setIsUploading] = useState2(false);
  const [error, setError] = useState2(null);
  const { getToken } = useAuth();
  const [token, setToken] = useState2(null);
  React2.useEffect(() => {
    getToken().then(setToken);
  }, [getToken]);
  React2.useEffect(() => {
    setPreviewUrl(value ?? null);
  }, [value]);
  const onSelectFile = useCallback((file) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setLocalFileUrl(url);
    setIsCropOpen(true);
    setZoom(1);
    setCrop({ x: 0, y: 0 });
    setError(null);
  }, []);
  const onInputChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onSelectFile(file);
  };
  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      const file = e.dataTransfer.files?.[0];
      if (file && file.type.startsWith("image/")) onSelectFile(file);
    },
    [disabled, onSelectFile]
  );
  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const onCropComplete = useCallback(
    (_area, areaPixels) => {
      setCroppedAreaPixels(areaPixels);
    },
    []
  );
  const doUpload = useCallback(async () => {
    if (!croppedAreaPixels) return;
    setIsUploading(true);
    setError(null);
    try {
      const src = localFileUrl ?? previewUrl;
      if (!src) throw new Error("No hay imagen seleccionada");
      const blob = await getCroppedBlob(src, croppedAreaPixels, cropSize);
      const formData = new FormData();
      formData.append(formFieldName, blob, "image.jpg");
      const res = await fetch(uploadUrl, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : {},
        body: formData
      });
      if (!res.ok) throw new Error(`Upload failed (${res.status})`);
      const json = await res.json();
      if (!json.url) throw new Error("Response missing url");
      setPreviewUrl(json.url);
      onChange(json.url);
      setIsCropOpen(false);
    } catch (err) {
      const error2 = err;
      console.log("Error uploading image:", error2.message);
      setError(error2?.message ?? "Error subiendo la imagen");
    } finally {
      setIsUploading(false);
      if (localFileUrl) URL.revokeObjectURL(localFileUrl);
      setLocalFileUrl(null);
    }
  }, [
    croppedAreaPixels,
    cropSize,
    formFieldName,
    localFileUrl,
    previewUrl,
    onChange,
    uploadUrl,
    token
  ]);
  const clearImage = () => {
    setPreviewUrl(null);
    onChange(null);
    setError(null);
  };
  const dropLabel = useMemo(() => {
    let cropText = `se recorta a ${cropSize}\xD7${cropSize}`;
    if (cropSize === 296) cropText = "se recorta a 560\xD7296";
    return /* @__PURE__ */ jsxs6("div", { className: "flex flex-col items-center justify-center gap-1 text-center", children: [
      /* @__PURE__ */ jsx11("div", { className: "rounded-full border p-1.5", children: /* @__PURE__ */ jsx11(Upload, { className: "h-3.5 w-3.5" }) }),
      /* @__PURE__ */ jsx11("div", { className: "text-xs font-medium", children: "Selecciona o arrastra una imagen" }),
      /* @__PURE__ */ jsxs6("div", { className: "text-muted-foreground text-[11px]", children: [
        "PNG, JPG \u2022 ",
        cropText
      ] })
    ] });
  }, [cropSize]);
  return /* @__PURE__ */ jsxs6("div", { className: classNames("w-full", className), children: [
    label && /* @__PURE__ */ jsx11("label", { className: "text-foreground mb-2 block text-sm font-medium", children: label }),
    /* @__PURE__ */ jsxs6("div", { className: "flex items-start gap-4", children: [
      previewUrl && /* @__PURE__ */ jsxs6("div", { className: "bg-muted relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border", children: [
        /* @__PURE__ */ jsx11("div", { className: "h-full w-full object-cover", children: /* @__PURE__ */ jsx11(image_preview_cell_default, { src: previewUrl, alt: "preview" }) }),
        /* @__PURE__ */ jsx11(
          "button",
          {
            type: "button",
            onClick: clearImage,
            disabled,
            className: "bg-background/95 hover:bg-background absolute top-1 right-1 rounded-full border p-1 shadow",
            title: "Quitar imagen",
            "aria-label": "Quitar imagen",
            children: /* @__PURE__ */ jsx11(X, { className: "h-3.5 w-3.5" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs6("div", { className: "flex flex-1 flex-col gap-2", children: [
        !previewUrl ? /* @__PURE__ */ jsxs6(
          "div",
          {
            onDrop,
            onDragOver,
            role: "button",
            tabIndex: 0,
            onKeyDown: (e) => {
              if (!disabled && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                inputRef.current?.click();
              }
            },
            className: classNames(
              "relative flex h-20 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed px-3",
              disabled ? "cursor-not-allowed opacity-60" : "hover:bg-muted/50"
            ),
            onClick: () => !disabled && inputRef.current?.click(),
            children: [
              dropLabel,
              /* @__PURE__ */ jsx11(
                "input",
                {
                  ref: inputRef,
                  type: "file",
                  accept: "image/*",
                  onChange: onInputChange,
                  className: "hidden",
                  disabled
                }
              )
            ]
          }
        ) : /* @__PURE__ */ jsxs6(
          Button,
          {
            variant: "secondary",
            size: "sm",
            type: "button",
            onClick: () => inputRef.current?.click(),
            disabled,
            children: [
              /* @__PURE__ */ jsx11(Upload, { className: "mr-2 h-3.5 w-3.5" }),
              " Cambiar imagen",
              /* @__PURE__ */ jsx11(
                "input",
                {
                  ref: inputRef,
                  type: "file",
                  accept: "image/*",
                  onChange: onInputChange,
                  className: "hidden",
                  disabled
                }
              )
            ]
          }
        ),
        previewUrl && /* @__PURE__ */ jsxs6(
          Button,
          {
            variant: "secondary",
            size: "sm",
            type: "button",
            onClick: () => setIsCropOpen(true),
            disabled,
            children: [
              /* @__PURE__ */ jsx11(CropIcon, { className: "mr-2 h-3.5 w-3.5" }),
              " Recortar"
            ]
          }
        )
      ] })
    ] }),
    error && /* @__PURE__ */ jsx11("div", { className: "text-destructive mt-2 text-sm", children: error }),
    /* @__PURE__ */ jsx11(
      Dialog,
      {
        open: isCropOpen,
        onOpenChange: (open) => {
          if (!isUploading) setIsCropOpen(open);
        },
        children: /* @__PURE__ */ jsxs6(DialogContent, { className: "max-w-xl", children: [
          /* @__PURE__ */ jsx11(DialogHeader, { children: /* @__PURE__ */ jsx11(DialogTitle, { children: "Recortar imagen" }) }),
          /* @__PURE__ */ jsx11("div", { className: "bg-muted relative aspect-square w-full overflow-hidden rounded-lg", children: localFileUrl || previewUrl ? /* @__PURE__ */ jsx11(
            Cropper,
            {
              image: localFileUrl ?? previewUrl,
              crop,
              zoom,
              aspect: cropSize === 296 ? 560 / 296 : 1,
              onCropChange: setCrop,
              onCropComplete,
              onZoomChange: setZoom,
              restrictPosition: true,
              showGrid: true
            }
          ) : /* @__PURE__ */ jsx11("div", { className: "text-muted-foreground flex h-full items-center justify-center text-sm", children: "Selecciona una imagen para recortar" }) }),
          /* @__PURE__ */ jsxs6("div", { className: "mt-4 space-y-2", children: [
            /* @__PURE__ */ jsx11("div", { className: "text-muted-foreground text-xs", children: "Zoom" }),
            /* @__PURE__ */ jsx11(
              Slider,
              {
                value: [zoom],
                min: 1,
                max: 4,
                step: 0.1,
                onValueChange: (v) => setZoom(v[0] ?? 1)
              }
            ),
            /* @__PURE__ */ jsxs6("div", { className: "text-muted-foreground text-xs", children: [
              "Salida final:",
              " ",
              cropSize === 296 ? "560\xD7296" : `${cropSize}\xD7${cropSize}`,
              "px"
            ] })
          ] }),
          /* @__PURE__ */ jsxs6(DialogFooter, { className: "gap-2", children: [
            /* @__PURE__ */ jsxs6(
              Button,
              {
                type: "button",
                variant: "ghost",
                onClick: () => {
                  setIsCropOpen(false);
                  if (localFileUrl) URL.revokeObjectURL(localFileUrl);
                  setLocalFileUrl(null);
                  setCroppedAreaPixels(null);
                },
                disabled: isUploading,
                children: [
                  /* @__PURE__ */ jsx11(X, { className: "mr-2 h-4 w-4" }),
                  " Cancelar"
                ]
              }
            ),
            /* @__PURE__ */ jsx11(
              Button,
              {
                type: "button",
                onClick: doUpload,
                disabled: isUploading || !croppedAreaPixels || !(localFileUrl || previewUrl),
                children: isUploading ? /* @__PURE__ */ jsxs6(Fragment2, { children: [
                  /* @__PURE__ */ jsx11(Loader2, { className: "mr-2 h-4 w-4 animate-spin" }),
                  " Subiendo\u2026"
                ] }) : /* @__PURE__ */ jsx11(Fragment2, { children: "Aceptar" })
              }
            )
          ] })
        ] })
      }
    )
  ] });
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
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Field,
  ImageInput,
  image_preview_cell_default as ImagePreviewCell,
  Input,
  Link,
  PageHeader,
  Skeleton,
  buttonVariants,
  cn
};
//# sourceMappingURL=index.mjs.map