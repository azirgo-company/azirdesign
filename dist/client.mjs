// components/fields/actions-field.tsx
import { useShowButton, useEditButton, useDeleteButton } from "@refinedev/core";
import {
  MoreHorizontalIcon,
  EyeIcon,
  SquarePenIcon,
  Trash2Icon,
  CreditCardIcon
} from "lucide-react";
import { useState } from "react";

// components/dialog/confirm-dialog.tsx
import * as React from "react";
import { CheckIcon, LucideClockFading, XIcon } from "lucide-react";

// components/ui/alert-dialog.tsx
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog";

// src/lib/utils.ts
function cn(...args) {
  return args.filter(Boolean).join(" ");
}

// components/ui/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { jsx } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}

// components/ui/alert-dialog.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function AlertDialog({
  ...props
}) {
  return /* @__PURE__ */ jsx2(AlertDialogPrimitive.Root, { "data-slot": "alert-dialog", ...props });
}
function AlertDialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx2(AlertDialogPrimitive.Trigger, { "data-slot": "alert-dialog-trigger", ...props });
}
function AlertDialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx2(AlertDialogPrimitive.Portal, { "data-slot": "alert-dialog-portal", ...props });
}
function AlertDialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
    /* @__PURE__ */ jsx2(AlertDialogOverlay, {}),
    /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsx2(
    AlertDialogPrimitive.Cancel,
    {
      className: cn(buttonVariants({ variant: "outline" }), className),
      ...props
    }
  );
}

// components/dialog/confirm-dialog.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const CancelIcon = React.useMemo(() => {
    if (React.isValidElement(cancelIcon)) return cancelIcon;
    return /* @__PURE__ */ jsx3(XIcon, { className: "mr-2 h-4 w-4" });
  }, [cancelIcon]);
  const OkIcon = React.useMemo(() => {
    if (loading) return /* @__PURE__ */ jsx3(LucideClockFading, { className: "mr-2 h-4 w-4" });
    if (React.isValidElement(okIcon)) return okIcon;
    return /* @__PURE__ */ jsx3(CheckIcon, { className: "mr-2 h-4 w-4" });
  }, [okIcon, loading]);
  return /* @__PURE__ */ jsxs2(
    AlertDialog,
    {
      open,
      onOpenChange,
      defaultOpen,
      ...alertDialogProps,
      children: [
        /* @__PURE__ */ jsx3(AlertDialogTrigger, { asChild: true, children }),
        /* @__PURE__ */ jsxs2(AlertDialogContent, { children: [
          /* @__PURE__ */ jsxs2(AlertDialogHeader, { children: [
            /* @__PURE__ */ jsx3(AlertDialogTitle, { children: title }),
            /* @__PURE__ */ jsx3(AlertDialogDescription, { children: description })
          ] }),
          /* @__PURE__ */ jsxs2(AlertDialogFooter, { children: [
            /* @__PURE__ */ jsx3(AlertDialogCancel, { asChild: true, children: /* @__PURE__ */ jsxs2(
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
            /* @__PURE__ */ jsx3(AlertDialogAction, { asChild: true, children: /* @__PURE__ */ jsxs2(
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

// components/ui/dropdown-menu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon as CheckIcon2, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx4(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx4(DropdownMenuPrimitive.Portal, { "data-slot": "dropdown-menu-portal", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsx4(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsx4(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsxs3(
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
        /* @__PURE__ */ jsx4("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx4(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx4(CheckIcon2, { className: "size-4" }) }) }),
        children
      ]
    }
  );
}
function DropdownMenuRadioGroup({
  ...props
}) {
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsxs3(
    DropdownMenuPrimitive.RadioItem,
    {
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx4("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx4(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx4(CircleIcon, { className: "size-2 fill-current" }) }) }),
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
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsx4(
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
  return /* @__PURE__ */ jsx4(DropdownMenuPrimitive.Sub, { "data-slot": "dropdown-menu-sub", ...props });
}
function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs3(
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
        /* @__PURE__ */ jsx4(ChevronRightIcon, { className: "ml-auto size-4" })
      ]
    }
  );
}
function DropdownMenuSubContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx4(
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

// components/fields/actions-field.tsx
import { Fragment, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function ActionsField({ id, resource }) {
  const [membershipDialogOpen, setMembershipDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const {
    to: showTo,
    hidden: showHidden,
    disabled: showDisabled,
    LinkComponent: ShowLinkComponent
  } = useShowButton({
    resource,
    id
  });
  const {
    to: editTo,
    hidden: editHidden,
    disabled: editDisabled,
    LinkComponent: EditLinkComponent
  } = useEditButton({
    resource,
    id
  });
  const {
    hidden: deleteHidden,
    disabled: deleteDisabled,
    onConfirm: handleDeleteConfirm,
    confirmTitle: deleteConfirmTitle,
    confirmOkLabel: deleteConfirmOkLabel,
    cancelLabel: deleteCancelLabel
  } = useDeleteButton({
    resource,
    id
  });
  const resolvedShowTo = typeof showTo === "string" && showTo.includes("[id]") ? showTo.replace("[id]", String(id)) : showTo ?? `/show/${String(id)}`;
  const resolvedEditTo = typeof editTo === "string" ? editTo.includes("[id]") ? editTo.replace("[id]", String(id)) : editTo : `/edit/${String(id)}`;
  const hasVisibleActions = !showHidden || !editHidden || !deleteHidden || resource === "users";
  if (!hasVisibleActions) return null;
  return /* @__PURE__ */ jsxs4(Fragment, { children: [
    /* @__PURE__ */ jsxs4(DropdownMenu, { children: [
      /* @__PURE__ */ jsx5(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs4(Button, { variant: "ghost", size: "sm", className: "h-8 w-8 p-0", children: [
        /* @__PURE__ */ jsx5("span", { className: "sr-only", children: "Abrir men\xFA de acciones" }),
        /* @__PURE__ */ jsx5(MoreHorizontalIcon, { className: "h-4 w-4" })
      ] }) }),
      /* @__PURE__ */ jsxs4(DropdownMenuContent, { align: "end", className: "w-[160px]", children: [
        !showHidden && /* @__PURE__ */ jsxs4(
          DropdownMenuItem,
          {
            disabled: showDisabled,
            onClick: () => {
              if (!showDisabled && ShowLinkComponent) {
                window.location.href = resolvedShowTo;
              }
            },
            children: [
              /* @__PURE__ */ jsx5(EyeIcon, { className: "mr-2 h-4 w-4" }),
              "Ver"
            ]
          }
        ),
        !editHidden && /* @__PURE__ */ jsxs4(
          DropdownMenuItem,
          {
            disabled: editDisabled,
            onClick: () => {
              if (!editDisabled && EditLinkComponent) {
                window.location.href = resolvedEditTo;
              }
            },
            children: [
              /* @__PURE__ */ jsx5(SquarePenIcon, { className: "mr-2 h-4 w-4" }),
              "Editar"
            ]
          }
        ),
        !deleteHidden && /* @__PURE__ */ jsxs4(Fragment, { children: [
          /* @__PURE__ */ jsx5(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs4(
            DropdownMenuItem,
            {
              disabled: deleteDisabled,
              onClick: () => setDeleteDialogOpen(true),
              className: "text-destructive focus:text-destructive",
              children: [
                /* @__PURE__ */ jsx5(Trash2Icon, { className: "mr-2 h-4 w-4" }),
                "Eliminar"
              ]
            }
          )
        ] }),
        resource === "users" && /* @__PURE__ */ jsxs4(Fragment, { children: [
          /* @__PURE__ */ jsx5(DropdownMenuSeparator, {}),
          /* @__PURE__ */ jsxs4(DropdownMenuItem, { onClick: () => setMembershipDialogOpen(true), children: [
            /* @__PURE__ */ jsx5(CreditCardIcon, { className: "mr-2 h-4 w-4" }),
            "Actualizar Membres\xEDa"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx5(
      ConfirmDialog,
      {
        open: deleteDialogOpen,
        onOpenChange: setDeleteDialogOpen,
        title: deleteConfirmTitle || "Confirmar eliminaci\xF3n",
        description: "\xBFEst\xE1s seguro de que quieres eliminar este elemento? Esta acci\xF3n no se puede deshacer.",
        okText: deleteConfirmOkLabel || "Eliminar",
        cancelText: deleteCancelLabel || "Cancelar",
        onConfirm: () => {
          handleDeleteConfirm();
          setDeleteDialogOpen(false);
        },
        children: /* @__PURE__ */ jsx5(Fragment, {})
      }
    )
  ] });
}

// components/add-card-form.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function AddCardForm({ user }) {
  return /* @__PURE__ */ jsx6("div", { children: /* @__PURE__ */ jsxs5("div", { children: [
    "Add Card Form for user: ",
    user.email
  ] }) });
}
var add_card_form_default = AddCardForm;

// components/ui/sidebar.tsx
import * as React3 from "react";
import { cva as cva2 } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";

// components/ui/sheet.tsx
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon as XIcon2 } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx7(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx7(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({
  ...props
}) {
  return /* @__PURE__ */ jsx7(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx7(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsxs6(SheetPortal, { children: [
    /* @__PURE__ */ jsx7(SheetOverlay, {}),
    /* @__PURE__ */ jsxs6(
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
          /* @__PURE__ */ jsxs6(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx7(XIcon2, { className: "size-4" }),
            /* @__PURE__ */ jsx7("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
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
  return /* @__PURE__ */ jsx7(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// components/hooks/use-mobile.ts
import * as React2 from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React2.useState(void 0);
  React2.useEffect(() => {
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
import { jsx as jsx8 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx8(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("bg-accent animate-pulse rounded-md", className),
      ...props
    }
  );
}

// components/ui/separator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { jsx as jsx9 } from "react/jsx-runtime";
function Separator2({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx9(
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
import { jsx as jsx10 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx10(
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
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarContext = React3.createContext(null);
function useSidebar() {
  const context = React3.useContext(SidebarContext);
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
  const [openMobile, setOpenMobile] = React3.useState(false);
  const [_open, _setOpen] = React3.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React3.useCallback(
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
  const toggleSidebar = React3.useCallback(() => {
    return isMobile ? setOpenMobile((open2) => !open2) : setOpen((open2) => !open2);
  }, [isMobile, setOpen, setOpenMobile]);
  React3.useEffect(() => {
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
  const contextValue = React3.useMemo(
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
  return /* @__PURE__ */ jsx11(SidebarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx11(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx11(
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
    return /* @__PURE__ */ jsx11(
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
    return /* @__PURE__ */ jsx11(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs7(
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
          /* @__PURE__ */ jsxs7(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ jsx11(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ jsx11(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ jsx11("div", { className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsx11(
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
        /* @__PURE__ */ jsx11(
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
            children: /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsxs7(
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
        /* @__PURE__ */ jsx11(PanelLeftIcon, {}),
        /* @__PURE__ */ jsx11("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebar();
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
    Separator2,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("bg-sidebar-border mx-2 w-auto", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  const button = /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsxs7(Tooltip, { children: [
    /* @__PURE__ */ jsx11(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  const width = React3.useMemo(() => {
    return `${Math.floor(Math.random() * 40) + 50}%`;
  }, []);
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx11(
          Skeleton,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
import * as React11 from "react";

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
import * as React4 from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext32(rootComponentName, defaultContext) {
    const BaseContext = React4.createContext(defaultContext);
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider2 = (props) => {
      const { scope, children, ...context } = props;
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const value = React4.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsx12(Context.Provider, { value, children });
    };
    Provider2.displayName = rootComponentName + "Provider";
    function useContext22(consumerName, scope) {
      const Context = scope?.[scopeName]?.[index] || BaseContext;
      const context = React4.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider2, useContext22];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return React4.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = scope?.[scopeName] || scopeContexts;
      return React4.useMemo(
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
      return React4.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React6 from "react";

// node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs
import * as React5 from "react";
var useLayoutEffect2 = globalThis?.document ? React5.useLayoutEffect : () => {
};

// node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs
import * as React22 from "react";
var useInsertionEffect = React6[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
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
    const isControlledRef = React6.useRef(prop !== void 0);
    React6.useEffect(() => {
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
  const setValue = React6.useCallback(
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
  const [value, setValue] = React6.useState(defaultProp);
  const prevValueRef = React6.useRef(value);
  const onChangeRef = React6.useRef(onChange);
  useInsertionEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);
  React6.useEffect(() => {
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
import * as React7 from "react";
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
  return React7.useCallback(composeRefs(...refs), refs);
}

// node_modules/@radix-ui/react-primitive/dist/index.mjs
import * as React8 from "react";
import * as ReactDOM from "react-dom";
import { createSlot } from "@radix-ui/react-slot";
import { jsx as jsx13 } from "react/jsx-runtime";
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
  const Slot7 = createSlot(`Primitive.${node}`);
  const Node = React8.forwardRef((props, forwardedRef) => {
    const { asChild, ...primitiveProps } = props;
    const Comp = asChild ? Slot7 : node;
    if (typeof window !== "undefined") {
      window[Symbol.for("radix-ui")] = true;
    }
    return /* @__PURE__ */ jsx13(Comp, { ...primitiveProps, ref: forwardedRef });
  });
  Node.displayName = `Primitive.${node}`;
  return { ...primitive, [node]: Node };
}, {});

// node_modules/@radix-ui/react-presence/dist/index.mjs
import * as React23 from "react";
import * as React9 from "react";
function useStateMachine(initialState, machine) {
  return React9.useReducer((state, event) => {
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
import * as React10 from "react";
var useReactId = React10[" useId ".trim().toString()] || (() => void 0);
var count = 0;
function useId(deterministicId) {
  const [id, setId] = React10.useState(useReactId());
  useLayoutEffect2(() => {
    if (!deterministicId) setId((reactId) => reactId ?? String(count++));
  }, [deterministicId]);
  return deterministicId || (id ? `radix-${id}` : "");
}

// node_modules/@radix-ui/react-collapsible/dist/index.mjs
import { jsx as jsx14 } from "react/jsx-runtime";
var COLLAPSIBLE_NAME = "Collapsible";
var [createCollapsibleContext, createCollapsibleScope] = createContextScope(COLLAPSIBLE_NAME);
var [CollapsibleProvider, useCollapsibleContext] = createCollapsibleContext(COLLAPSIBLE_NAME);
var Collapsible = React11.forwardRef(
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
    return /* @__PURE__ */ jsx14(
      CollapsibleProvider,
      {
        scope: __scopeCollapsible,
        disabled,
        contentId: useId(),
        open,
        onOpenToggle: React11.useCallback(() => setOpen((prevOpen) => !prevOpen), [setOpen]),
        children: /* @__PURE__ */ jsx14(
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
var CollapsibleTrigger = React11.forwardRef(
  (props, forwardedRef) => {
    const { __scopeCollapsible, ...triggerProps } = props;
    const context = useCollapsibleContext(TRIGGER_NAME, __scopeCollapsible);
    return /* @__PURE__ */ jsx14(
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
var CollapsibleContent = React11.forwardRef(
  (props, forwardedRef) => {
    const { forceMount, ...contentProps } = props;
    const context = useCollapsibleContext(CONTENT_NAME, props.__scopeCollapsible);
    return /* @__PURE__ */ jsx14(Presence, { present: forceMount || context.open, children: ({ present }) => /* @__PURE__ */ jsx14(CollapsibleContentImpl, { ...contentProps, ref: forwardedRef, present }) });
  }
);
CollapsibleContent.displayName = CONTENT_NAME;
var CollapsibleContentImpl = React11.forwardRef((props, forwardedRef) => {
  const { __scopeCollapsible, present, children, ...contentProps } = props;
  const context = useCollapsibleContext(CONTENT_NAME, __scopeCollapsible);
  const [isPresent, setIsPresent] = React11.useState(present);
  const ref = React11.useRef(null);
  const composedRefs = useComposedRefs(forwardedRef, ref);
  const heightRef = React11.useRef(0);
  const height = heightRef.current;
  const widthRef = React11.useRef(0);
  const width = widthRef.current;
  const isOpen = context.open || isPresent;
  const isMountAnimationPreventedRef = React11.useRef(isOpen);
  const originalStylesRef = React11.useRef(void 0);
  React11.useEffect(() => {
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
  return /* @__PURE__ */ jsx14(
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
var Root5 = Collapsible;

// components/ui/collapsible.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
function Collapsible2({
  ...props
}) {
  return /* @__PURE__ */ jsx15(Root5, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger2({
  ...props
}) {
  return /* @__PURE__ */ jsx15(
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
  return /* @__PURE__ */ jsx15(
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
import { jsx as jsx16 } from "react/jsx-runtime";
var Link = forwardRef3(
  ({ children, href, title, className, asChild }, ref) => {
    const { Link: LegacyLink } = useRouterContext();
    const routerType = useRouterType();
    const Link2 = useLink();
    const ActiveLink = routerType === "legacy" ? LegacyLink : Link2;
    const Comp = asChild ? Slot3 : ActiveLink;
    return /* @__PURE__ */ jsx16(Comp, { ref, to: href, className, title, children });
  }
);
Link.displayName = "Link";

// components/nav-refine.tsx
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
function NavRefine() {
  const { menuItems, selectedKey, defaultOpenKeys } = useMenu();
  const renderTreeView = (tree, selectedKey2) => {
    return tree.map((item, key) => {
      const { list, meta } = item;
      const isSelected = item.key === selectedKey2;
      return /* @__PURE__ */ jsx17(
        Collapsible2,
        {
          asChild: true,
          defaultOpen: isSelected,
          className: "group/collapsible",
          children: /* @__PURE__ */ jsx17(SidebarMenuItem, { children: /* @__PURE__ */ jsx17(CollapsibleTrigger2, { asChild: true, children: /* @__PURE__ */ jsx17(
            SidebarMenuButton,
            {
              asChild: true,
              className: cn("flex items-center", isSelected && "bg-accent"),
              children: /* @__PURE__ */ jsxs8(
                Link,
                {
                  href: list?.toString() ?? "#",
                  title: meta?.label ?? item.name,
                  children: [
                    meta?.icon,
                    /* @__PURE__ */ jsx17("span", { className: "ml-2", children: item.label })
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
  return /* @__PURE__ */ jsx17("div", { className: "mb-10", children: Object.entries(groups).map(([group, items]) => /* @__PURE__ */ jsxs8(SidebarGroup, { children: [
    /* @__PURE__ */ jsx17(SidebarGroupLabel, { children: groupLabels[group] || group }),
    /* @__PURE__ */ jsx17(SidebarGroupContent, { children: /* @__PURE__ */ jsx17(SidebarMenu, { children: renderTreeView(items, selectedKey) }) })
  ] }, group)) });
}

// components/app-sidebar.tsx
import { jsx as jsx18, jsxs as jsxs9 } from "react/jsx-runtime";
function AppSidebar({
  meta,
  src = "/dashboard.png",
  alt = "Dashboard",
  span = "Dashboard",
  ...props
}) {
  return /* @__PURE__ */ jsxs9(Sidebar, { collapsible: "icon", ...props, children: [
    /* @__PURE__ */ jsx18(SidebarHeader, { children: /* @__PURE__ */ jsx18(SidebarMenu, { children: /* @__PURE__ */ jsx18(SidebarMenuItem, { children: /* @__PURE__ */ jsx18(
      SidebarMenuButton,
      {
        asChild: true,
        className: "data-[slot=sidebar-menu-button]:!p-1.5",
        children: /* @__PURE__ */ jsxs9("a", { href: "/dashboard", children: [
          /* @__PURE__ */ jsx18("img", { src, alt, className: "mr-2 !size-5" }),
          /* @__PURE__ */ jsx18("span", { className: "text-base font-semibold", children: span })
        ] })
      }
    ) }) }) }),
    /* @__PURE__ */ jsx18(SidebarContent, { children: /* @__PURE__ */ jsx18(NavRefine, {}) }),
    /* @__PURE__ */ jsx18(SidebarRail, {})
  ] });
}

// components/nav-main.tsx
import { ChevronRight } from "lucide-react";
import { jsx as jsx19, jsxs as jsxs10 } from "react/jsx-runtime";
function NavMain({
  items
}) {
  return /* @__PURE__ */ jsxs10(SidebarGroup, { children: [
    /* @__PURE__ */ jsx19(SidebarGroupLabel, { children: "Platform" }),
    /* @__PURE__ */ jsx19(SidebarMenu, { children: items.map((item) => /* @__PURE__ */ jsx19(
      Collapsible2,
      {
        asChild: true,
        defaultOpen: item.isActive,
        className: "group/collapsible",
        children: /* @__PURE__ */ jsxs10(SidebarMenuItem, { children: [
          /* @__PURE__ */ jsx19(CollapsibleTrigger2, { asChild: true, children: /* @__PURE__ */ jsxs10(SidebarMenuButton, { tooltip: item.title, children: [
            item.icon && /* @__PURE__ */ jsx19(item.icon, {}),
            /* @__PURE__ */ jsx19("span", { children: item.title }),
            /* @__PURE__ */ jsx19(ChevronRight, { className: "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" })
          ] }) }),
          /* @__PURE__ */ jsx19(CollapsibleContent2, { children: /* @__PURE__ */ jsx19(SidebarMenuSub, { children: item.items?.map((subItem) => /* @__PURE__ */ jsx19(SidebarMenuSubItem, { children: /* @__PURE__ */ jsx19(SidebarMenuSubButton, { asChild: true, children: /* @__PURE__ */ jsx19("a", { href: subItem.url, children: /* @__PURE__ */ jsx19("span", { children: subItem.title }) }) }) }, subItem.title)) }) })
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
import { jsx as jsx20, jsxs as jsxs11 } from "react/jsx-runtime";
function NavProjects({
  projects
}) {
  const { isMobile } = useSidebar();
  return /* @__PURE__ */ jsxs11(SidebarGroup, { className: "group-data-[collapsible=icon]:hidden", children: [
    /* @__PURE__ */ jsx20(SidebarGroupLabel, { children: "Projects" }),
    /* @__PURE__ */ jsxs11(SidebarMenu, { children: [
      projects.map((item) => /* @__PURE__ */ jsxs11(SidebarMenuItem, { children: [
        /* @__PURE__ */ jsx20(SidebarMenuButton, { asChild: true, children: /* @__PURE__ */ jsxs11("a", { href: item.url, children: [
          /* @__PURE__ */ jsx20(item.icon, {}),
          /* @__PURE__ */ jsx20("span", { children: item.name })
        ] }) }),
        /* @__PURE__ */ jsxs11(DropdownMenu, { children: [
          /* @__PURE__ */ jsx20(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs11(SidebarMenuAction, { showOnHover: true, children: [
            /* @__PURE__ */ jsx20(MoreHorizontal, {}),
            /* @__PURE__ */ jsx20("span", { className: "sr-only", children: "More" })
          ] }) }),
          /* @__PURE__ */ jsxs11(
            DropdownMenuContent,
            {
              className: "w-48 rounded-lg",
              side: isMobile ? "bottom" : "right",
              align: isMobile ? "end" : "start",
              children: [
                /* @__PURE__ */ jsxs11(DropdownMenuItem, { children: [
                  /* @__PURE__ */ jsx20(Folder, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsx20("span", { children: "View Project" })
                ] }),
                /* @__PURE__ */ jsxs11(DropdownMenuItem, { children: [
                  /* @__PURE__ */ jsx20(Forward, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsx20("span", { children: "Share Project" })
                ] }),
                /* @__PURE__ */ jsx20(DropdownMenuSeparator, {}),
                /* @__PURE__ */ jsxs11(DropdownMenuItem, { children: [
                  /* @__PURE__ */ jsx20(Trash2, { className: "text-muted-foreground" }),
                  /* @__PURE__ */ jsx20("span", { children: "Delete Project" })
                ] })
              ]
            }
          )
        ] })
      ] }, item.name)),
      /* @__PURE__ */ jsx20(SidebarMenuItem, { children: /* @__PURE__ */ jsxs11(SidebarMenuButton, { className: "text-sidebar-foreground/70", children: [
        /* @__PURE__ */ jsx20(MoreHorizontal, { className: "text-sidebar-foreground/70" }),
        /* @__PURE__ */ jsx20("span", { children: "More" })
      ] }) })
    ] })
  ] });
}

// components/nav-user.tsx
import { ChevronsUpDown, LogOut } from "lucide-react";

// components/ui/avatar.tsx
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { jsx as jsx21 } from "react/jsx-runtime";
function Avatar({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
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
  return /* @__PURE__ */ jsx21(
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
  return /* @__PURE__ */ jsx21(
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

// components/ui/theme-toggle-item.tsx
import { DropdownMenuItem as DropdownMenuItem2 } from "@radix-ui/react-dropdown-menu";
import { Moon, Sun } from "lucide-react";

// src/lib/use-theme.ts
import { useEffect as useEffect7, useState as useState8 } from "react";
function useTheme() {
  const [theme, setTheme] = useState8("light");
  useEffect7(() => {
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
import { Fragment as Fragment2, jsx as jsx22, jsxs as jsxs12 } from "react/jsx-runtime";
function ThemeToggleItem() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsx22(DropdownMenuItem2, { onClick: toggleTheme, children: theme === "light" ? /* @__PURE__ */ jsxs12(Fragment2, { children: [
    /* @__PURE__ */ jsx22(Moon, { className: "h-4 w-4" }),
    "Modo oscuro"
  ] }) : /* @__PURE__ */ jsxs12(Fragment2, { children: [
    /* @__PURE__ */ jsx22(Sun, { className: "h-4 w-4" }),
    "Modo claro"
  ] }) });
}

// components/nav-user.tsx
import { jsx as jsx23, jsxs as jsxs13 } from "react/jsx-runtime";
function NavUser({
  className,
  handleSignOut,
  name,
  email,
  avatarUrl
}) {
  const { isMobile } = useSidebar();
  const displayName = name || "Administrador";
  const displayEmail = email || "administrador@gmail.com";
  const displayAvatar = avatarUrl || "/avatars/shadcn.jpg";
  return /* @__PURE__ */ jsxs13("div", { className: cn(className, ""), children: [
    "...",
    /* @__PURE__ */ jsxs13(DropdownMenu, { children: [
      /* @__PURE__ */ jsx23(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs13(
        SidebarMenuButton,
        {
          size: "lg",
          className: "data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground",
          children: [
            /* @__PURE__ */ jsxs13(Avatar, { className: "h-8 w-8 rounded-lg", children: [
              /* @__PURE__ */ jsx23(AvatarImage, { src: displayAvatar, alt: displayName }),
              /* @__PURE__ */ jsx23(AvatarFallback, { className: "rounded-lg", children: displayName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) })
            ] }),
            /* @__PURE__ */ jsxs13("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
              /* @__PURE__ */ jsx23("span", { className: "truncate font-medium", children: displayName }),
              /* @__PURE__ */ jsx23("span", { className: "truncate text-xs", children: displayEmail })
            ] }),
            /* @__PURE__ */ jsx23(ChevronsUpDown, { className: "ml-auto size-4" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxs13(
        DropdownMenuContent,
        {
          className: "w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg",
          side: isMobile ? "bottom" : "right",
          align: "end",
          sideOffset: 4,
          children: [
            /* @__PURE__ */ jsx23(DropdownMenuLabel, { className: "p-0 font-normal", children: /* @__PURE__ */ jsxs13("div", { className: "flex items-center gap-2 px-1 py-1.5 text-left text-sm", children: [
              /* @__PURE__ */ jsxs13(Avatar, { className: "h-8 w-8 rounded-lg", children: [
                /* @__PURE__ */ jsx23(AvatarImage, { src: displayAvatar, alt: displayName }),
                /* @__PURE__ */ jsx23(AvatarFallback, { className: "rounded-lg", children: displayName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2) })
              ] }),
              /* @__PURE__ */ jsxs13("div", { className: "grid flex-1 text-left text-sm leading-tight", children: [
                /* @__PURE__ */ jsx23("span", { className: "truncate font-medium", children: displayName }),
                /* @__PURE__ */ jsx23("span", { className: "truncate text-xs", children: displayEmail })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx23(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx23(ThemeToggleItem, {}),
            /* @__PURE__ */ jsx23(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsxs13(DropdownMenuItem, { onClick: handleSignOut, children: [
              /* @__PURE__ */ jsx23(LogOut, {}),
              "Cerrar sesi\xF3n"
            ] })
          ]
        }
      )
    ] })
  ] });
}

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
import { Trash2Icon as Trash2Icon2 } from "lucide-react";
import { useDeleteButton as useDeleteButton2 } from "@refinedev/core";
import { jsx as jsx26 } from "react/jsx-runtime";
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
  } = useDeleteButton2({
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
  return /* @__PURE__ */ jsx26(
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
      children: /* @__PURE__ */ jsx26(
        Button,
        {
          disabled,
          title,
          loading,
          "data-testId": "delete-button",
          className: "bg-rose-500 text-slate-50",
          ...props,
          children: /* @__PURE__ */ jsx26(Trash2Icon2, { className: "h-4 w-4" })
        }
      )
    }
  );
};
DeleteButton.displayName = "DeleteButton";

// components/buttons/edit/index.tsx
import { SquarePenIcon as SquarePenIcon2 } from "lucide-react";
import { useEditButton as useEditButton2 } from "@refinedev/core";
import { jsx as jsx27 } from "react/jsx-runtime";
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
  const { hidden, disabled, label, title, LinkComponent, to } = useEditButton2({
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
  return /* @__PURE__ */ jsx27(Button, { asChild: true, title, disabled: isDisabled, ...props, children: /* @__PURE__ */ jsx27(
    LinkComponent,
    {
      to: resolvedTo,
      replace: false,
      onClick: handleClick,
      "aria-label": ariaLabel,
      children: /* @__PURE__ */ jsx27(SquarePenIcon2, { className: hideText ? "h-4 w-4" : "h-4 w-4" })
    }
  ) });
};
EditButton.displayName = "EditButton";

// components/buttons/list/index.tsx
import { ListIcon } from "lucide-react";
import { useListButton } from "@refinedev/core";
import { jsx as jsx28 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx28(
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
      children: /* @__PURE__ */ jsx28(
        Button,
        {
          disabled,
          title,
          icon: /* @__PURE__ */ jsx28(ListIcon, { className: "mr-2 h-4 w-4" }),
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
import { jsx as jsx29 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx29(
    Button,
    {
      onClick,
      loading,
      icon: /* @__PURE__ */ jsx29(RefreshCwIcon, { className: "mr-2 h-4 w-4" }),
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
import { jsx as jsx30, jsxs as jsxs16 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx30(
    Com,
    {
      params: {
        id: recordItemId
      },
      resource,
      action: "save",
      ...access,
      children: /* @__PURE__ */ jsxs16(Button, { ...props, disabled: loading, children: [
        loading && /* @__PURE__ */ jsx30(Loader22, { className: "mr-2 h-4 w-4 animate-spin" }),
        !hideText && (children ?? label),
        /* @__PURE__ */ jsx30(SaveIcon, { className: "mr-2 h-4 w-4" })
      ] })
    }
  );
};
SaveButton.displayName = "SaveButton";

// components/buttons/show/index.tsx
import { EyeIcon as EyeIcon2 } from "lucide-react";
import { useShowButton as useShowButton2 } from "@refinedev/core";
import { jsx as jsx31 } from "react/jsx-runtime";
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
  const { to, label, title, hidden, disabled, LinkComponent } = useShowButton2({
    resource: resourceNameFromProps,
    id: recordItemId,
    accessControl,
    meta
  });
  const isDisabled = disabled || props.disabled;
  const isHidden = hidden || props.hidden;
  if (isHidden) return null;
  const resolvedTo = typeof to === "string" && to.includes("[id]") ? to.replace("[id]", String(recordItemId)) : to ?? `/show/${String(recordItemId)}`;
  return /* @__PURE__ */ jsx31(
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
      children: /* @__PURE__ */ jsx31(Button, { title, disabled: isDisabled, ...props, children: /* @__PURE__ */ jsx31(EyeIcon2, { className: "h-4 w-4" }) })
    }
  );
};
ShowButton.displayName = "ShowButton";

// components/crud/create/index.tsx
import { isValidElement as isValidElement2 } from "react";

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
import { jsx as jsx32, jsxs as jsxs17 } from "react/jsx-runtime";
function Breadcrumb({ ...props }) {
  return /* @__PURE__ */ jsx32("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx32(
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
  return /* @__PURE__ */ jsx32(
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
  return /* @__PURE__ */ jsx32(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("hover:text-foreground transition-colors", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx32(
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
  return /* @__PURE__ */ jsx32(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx32(ChevronRight2, {})
    }
  );
}

// components/breadcrumb/index.tsx
import { Fragment as Fragment4, jsx as jsx33, jsxs as jsxs18 } from "react/jsx-runtime";
var Breadcrumbs = ({ showHome = true, meta }) => {
  const { breadcrumbs } = useBreadcrumb({
    meta
  });
  const { hasDashboard } = useRefineContext();
  const { resources } = useResource();
  const dashboardResource = resources[0];
  const rootRouteResource = matchResourceFromRoute("/", resources);
  const BreadCrumbItems = breadcrumbs.map(({ label, href }, key) => /* @__PURE__ */ jsxs18(Fragment3, { children: [
    /* @__PURE__ */ jsx33(BreadcrumbItem, { children: href ? /* @__PURE__ */ jsx33(BreadcrumbLink, { asChild: true, href: `#x`, children: /* @__PURE__ */ jsx33(Link, { href, children: label }) }) : /* @__PURE__ */ jsx33(BreadcrumbPage, { children: label }) }),
    key < breadcrumbs.length - 1 && /* @__PURE__ */ jsx33(BreadcrumbSeparator, {})
  ] }, key));
  return /* @__PURE__ */ jsx33(Breadcrumb, { children: /* @__PURE__ */ jsxs18(BreadcrumbList, { children: [
    showHome || hasDashboard || rootRouteResource.found ? /* @__PURE__ */ jsxs18(Fragment4, { children: [
      /* @__PURE__ */ jsx33(BreadcrumbItem, { children: /* @__PURE__ */ jsx33(
        BreadcrumbLink,
        {
          href: dashboardResource.list?.toString(),
          asChild: true,
          title: dashboardResource?.meta?.title ?? dashboardResource.name ?? "Dashboard",
          children: /* @__PURE__ */ jsx33(
            Link,
            {
              href: dashboardResource.list?.toString(),
              title: dashboardResource?.meta?.title ?? dashboardResource.name ?? "Dashboard",
              children: dashboardResource?.meta?.icon ?? /* @__PURE__ */ jsx33(HomeIcon, { className: "h-4 w-4" })
            }
          )
        }
      ) }),
      /* @__PURE__ */ jsx33(BreadcrumbSeparator, {})
    ] }) : null,
    BreadCrumbItems
  ] }) });
};

// components/page-header.tsx
import { useResource as useResource3 } from "@refinedev/core";
import { ArrowLeft } from "lucide-react";

// components/hooks/use-on-back.tsx
var useOnBack = () => {
  return () => window.history.back();
};

// components/reload-button.tsx
import { useInvalidate, useResource as useResource2 } from "@refinedev/core";
import { RefreshCw as RefreshCwIcon2 } from "lucide-react";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { jsx as jsx34, jsxs as jsxs19 } from "react/jsx-runtime";
var ReloadButton = ({
  className,
  variant = "secondary",
  size = "default",
  resourceName,
  invalidates = ["list"],
  id,
  onReload
}) => {
  const invalidate = useInvalidate();
  const [isPending, startTransition] = useTransition();
  const { resource } = useResource2();
  const handleReload = () => {
    startTransition(() => {
      invalidate({
        resource: resourceName || resource?.name,
        invalidates,
        id
      }).then(() => {
        toast.success("Informaci\xF3n actualizada");
        if (onReload) onReload();
      });
    });
  };
  return /* @__PURE__ */ jsxs19(
    Button,
    {
      variant,
      size,
      className,
      disabled: isPending,
      onClick: handleReload,
      children: [
        /* @__PURE__ */ jsx34(
          RefreshCwIcon2,
          {
            className: "h-4 w-4" + (isPending ? " animate-spin" : "")
          }
        ),
        /* @__PURE__ */ jsx34("span", { className: "hidden md:block", children: "Recargar" })
      ]
    }
  );
};

// components/page-header.tsx
import { Fragment as Fragment5, jsx as jsx35, jsxs as jsxs20 } from "react/jsx-runtime";
var PageHeader = ({
  extra,
  children,
  className,
  title,
  subTitle,
  isBack = false,
  reloadId,
  reloadInvalidates,
  showReloadButton = true,
  ...props
}) => {
  const back = useOnBack();
  const { resource } = useResource3();
  return /* @__PURE__ */ jsx35("div", { className: cn(className, "w-full"), children: /* @__PURE__ */ jsxs20(Fragment5, { children: [
    /* @__PURE__ */ jsxs20(
      "div",
      {
        className: cn(
          "flex h-20 items-end lg:justify-between",
          !props.breadcrumb && "h-auto"
        ),
        children: [
          /* @__PURE__ */ jsxs20("div", { className: "min-w-0 flex-1", children: [
            props.breadcrumb,
            /* @__PURE__ */ jsxs20("div", { className: "mt-3 inline-flex flex-row items-center gap-x-4", children: [
              isBack && /* @__PURE__ */ jsx35(Button, { variant: "ghost", onClick: () => back?.(), children: /* @__PURE__ */ jsx35(ArrowLeft, {}) }),
              /* @__PURE__ */ jsxs20("div", { className: "inline-flex flex-col", children: [
                /* @__PURE__ */ jsx35("h2", { className: "text-2xl font-bold text-black sm:truncate sm:text-3xl sm:tracking-tight dark:text-white", children: title }),
                subTitle && /* @__PURE__ */ jsx35("div", { className: "mt-2 flex items-center text-sm text-gray-300", children: subTitle })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs20("div", { className: "flex gap-2 lg:mt-0 lg:ml-4", children: [
            showReloadButton && /* @__PURE__ */ jsx35(
              ReloadButton,
              {
                resourceName: resource?.name,
                id: reloadId,
                invalidates: reloadInvalidates
              }
            ),
            extra
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx35("div", { className: "mt-4", children })
  ] }) });
};

// components/crud/create/index.tsx
import {
  useTranslate,
  useRefineContext as useRefineContext2,
  useUserFriendlyName,
  useResource as useResource4
} from "@refinedev/core";
import { Fragment as Fragment6, jsx as jsx36, jsxs as jsxs21 } from "react/jsx-runtime";
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
  const { resource, identifier } = useResource4(resourceFromProps);
  const breadcrumb = typeof breadcrumbFromProps === "undefined" ? globalBreadcrumb : breadcrumbFromProps;
  const renderTitle = () => {
    if (title === false) return null;
    if (title) {
      if (typeof title === "string" || typeof title === "number") {
        return /* @__PURE__ */ jsx36("h2", { children: title });
      }
      return title;
    }
    return /* @__PURE__ */ jsx36("h2", { children: translate(
      `${identifier}.titles.create`,
      `Create ${getUserFriendlyName(
        resource?.meta?.label ?? resource?.options?.label ?? resource?.label ?? identifier,
        "singular"
      )}`
    ) });
  };
  return /* @__PURE__ */ jsxs21(Fragment6, { children: [
    /* @__PURE__ */ jsx36(
      PageHeader,
      {
        title: renderTitle(),
        isBack: true,
        breadcrumb: isValidElement2(breadcrumb) ? breadcrumb : /* @__PURE__ */ jsx36(Breadcrumbs, {}),
        extra: extra ?? /* @__PURE__ */ jsx36(Fragment6, { children: /* @__PURE__ */ jsx36(ListButton, { resource: resourceFromProps }) })
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
  useResource as useResource5,
  useRouterType as useRouterType2,
  useToPath,
  useTranslate as useTranslate2,
  useUserFriendlyName as useUserFriendlyName2
} from "@refinedev/core";
import { isValidElement as isValidElement3 } from "react";
import { Fragment as Fragment7, jsx as jsx37, jsxs as jsxs22 } from "react/jsx-runtime";
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
  } = useResource5(resourceFromProps);
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
  return /* @__PURE__ */ jsxs22(Fragment7, { children: [
    /* @__PURE__ */ jsx37(
      PageHeader,
      {
        title: renderTitle(),
        isBack: true,
        breadcrumb: isValidElement3(breadcrumb) ? breadcrumb : /* @__PURE__ */ jsx37(Breadcrumbs, {}),
        showReloadButton: false,
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
  useResource as useResource6,
  useRouterType as useRouterType3,
  useTranslate as useTranslate3,
  useUserFriendlyName as useUserFriendlyName3
} from "@refinedev/core";
import { isValidElement as isValidElement4 } from "react";
import { Fragment as Fragment8, jsx as jsx38, jsxs as jsxs23 } from "react/jsx-runtime";
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
  const { resource, identifier } = useResource6(resourceFromProps);
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
      breadcrumb: isValidElement4(breadcrumb) ? /* @__PURE__ */ jsx38(Fragment8, { children: breadcrumb }) : /* @__PURE__ */ jsx38(Breadcrumbs, {}),
      showReloadButton: false,
      children: [
        extra,
        /* @__PURE__ */ jsx38("div", { children })
      ]
    }
  ) });
};

// components/crud/show/index.tsx
import {
  useBack as useBack2,
  useGo as useGo2,
  useNavigation as useNavigation3,
  useRefineContext as useRefineContext5,
  useResource as useResource7,
  useRouterType as useRouterType4,
  useToPath as useToPath2,
  useTranslate as useTranslate4,
  useUserFriendlyName as useUserFriendlyName4
} from "@refinedev/core";
import { isValidElement as isValidElement5 } from "react";
import { ArrowLeft as ArrowLeft2 } from "lucide-react";
import { Fragment as Fragment9, jsx as jsx39, jsxs as jsxs24 } from "react/jsx-runtime";
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
  } = useResource7(resourceFromProps);
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
  const defaultHeaderButtons = /* @__PURE__ */ jsxs24(Fragment9, { children: [
    listButtonProps && /* @__PURE__ */ jsx39(ListButton, { ...listButtonProps }),
    isEditButtonVisible && /* @__PURE__ */ jsx39(EditButton, { colorScheme: "brand", ...editButtonProps })
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
      breadcrumb: isValidElement5(breadcrumb) ? /* @__PURE__ */ jsx39(Fragment9, { children: breadcrumb }) : /* @__PURE__ */ jsx39(Breadcrumbs, {}),
      reloadId: id,
      reloadInvalidates: ["detail"],
      extra: headerButtons,
      children
    }
  );
};

// components/ui/form.tsx
import * as React14 from "react";
import { Slot as Slot6 } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState
} from "react-hook-form";

// components/ui/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsx as jsx40 } from "react/jsx-runtime";
function Label2({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx40(
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
import { jsx as jsx41 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React14.createContext(
  {}
);
var FormItemContext = React14.createContext(
  {}
);

// components/form.tsx
import {
  useBack as useBack3,
  useNavigation as useNavigation4,
  useParsed,
  useRouterType as useRouterType5
} from "@refinedev/core";
import {
  useRef as useRef5
} from "react";

// components/ui/card.tsx
import { jsx as jsx42 } from "react/jsx-runtime";
function Card({ className, ...props }) {
  return /* @__PURE__ */ jsx42(
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
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx42(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx42(
    "div",
    {
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className),
      ...props
    }
  );
}

// components/form.tsx
import { jsx as jsx43, jsxs as jsxs25 } from "react/jsx-runtime";
var Form2 = ({
  formProps,
  isWatchable,
  saveButtonProps,
  ...props
}) => {
  const watchable = useRef5(false);
  const { resource: _resource, action } = useParsed();
  const routerType = useRouterType5();
  const back = useBack3();
  const { goBack } = useNavigation4();
  const onBack = action !== "list" || typeof action !== "undefined" ? routerType === "legacy" ? goBack : back : void 0;
  if (isWatchable && !watchable.current) {
    watchable.current = true;
    props.watch();
  }
  const onSubmit = props.handleSubmit((_data) => {
    props.refineCore.onFinish(props.getValues()).then();
  });
  return /* @__PURE__ */ jsx43(Form, { ...props, children: /* @__PURE__ */ jsx43("form", { ...formProps, onSubmit, children: /* @__PURE__ */ jsxs25(Card, { className: "border-border/40 shadow-sm", children: [
    /* @__PURE__ */ jsx43(CardContent, { className: "space-y-4 pt-6", children: props.children }),
    /* @__PURE__ */ jsxs25(CardFooter, { className: "flex justify-end gap-x-4", children: [
      !props.hideCancel && /* @__PURE__ */ jsx43(
        Button,
        {
          type: "button",
          onClick: onBack,
          disabled: props.refineCore.formLoading,
          variant: "outline",
          children: "Cancel"
        }
      ),
      /* @__PURE__ */ jsx43(
        SaveButton,
        {
          type: "submit",
          loading: props.refineCore.formLoading,
          ...saveButtonProps
        }
      )
    ] })
  ] }) }) });
};

// components/ui/select.tsx
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon as CheckIcon3, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { jsx as jsx44, jsxs as jsxs26 } from "react/jsx-runtime";
function Select({
  ...props
}) {
  return /* @__PURE__ */ jsx44(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectValue({
  ...props
}) {
  return /* @__PURE__ */ jsx44(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs26(
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
        /* @__PURE__ */ jsx44(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx44(ChevronDownIcon, { className: "size-4 opacity-50" }) })
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
  return /* @__PURE__ */ jsx44(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs26(
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
        /* @__PURE__ */ jsx44(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx44(
          SelectPrimitive.Viewport,
          {
            className: cn(
              "p-1",
              position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children
          }
        ),
        /* @__PURE__ */ jsx44(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs26(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx44("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx44(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx44(CheckIcon3, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx44(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx44(ChevronUpIcon, { className: "size-4" })
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx44(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx44(ChevronDownIcon, { className: "size-4" })
    }
  );
}

// components/ui/table.tsx
import { jsx as jsx45 } from "react/jsx-runtime";
function Table({ className, ...props }) {
  return /* @__PURE__ */ jsx45(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto",
      children: /* @__PURE__ */ jsx45(
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
  return /* @__PURE__ */ jsx45(
    "thead",
    {
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className),
      ...props
    }
  );
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx45(
    "tbody",
    {
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx45(
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
  return /* @__PURE__ */ jsx45(
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
  return /* @__PURE__ */ jsx45(
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
import { jsx as jsx46, jsxs as jsxs27 } from "react/jsx-runtime";
function TooltipProvider2({
  delayDuration = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx46(
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
  return /* @__PURE__ */ jsx46(TooltipProvider2, { children: /* @__PURE__ */ jsx46(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props }) });
}

// components/layout/index.tsx
import { Toaster } from "react-hot-toast";

// components/theme-toggle.tsx
import { Moon as Moon2, Sun as Sun2 } from "lucide-react";
import { jsx as jsx47 } from "react/jsx-runtime";
function ThemeToggle({
  variant = "ghost",
  size = "icon",
  className
}) {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsx47(
    Button,
    {
      variant,
      size,
      onClick: toggleTheme,
      className,
      "aria-label": "Cambiar tema",
      children: theme === "light" ? /* @__PURE__ */ jsx47(Moon2, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx47(Sun2, { className: "h-4 w-4" })
    }
  );
}

// components/layout/index.tsx
import { jsx as jsx48, jsxs as jsxs28 } from "react/jsx-runtime";
var AzirLayout = ({
  children,
  sidebarSrc = "/semillapp.png",
  sidebarAlt = "Semillapp Logo",
  sidebarSpan = "Semillapp",
  handleSignOut,
  name,
  email,
  avatarUrl
}) => {
  return /* @__PURE__ */ jsxs28(SidebarProvider, { children: [
    /* @__PURE__ */ jsx48(Toaster, {}),
    /* @__PURE__ */ jsx48(AppSidebar, { src: sidebarSrc, alt: sidebarAlt, span: sidebarSpan }),
    /* @__PURE__ */ jsxs28(SidebarInset, { children: [
      /* @__PURE__ */ jsx48("header", { className: "flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12", children: /* @__PURE__ */ jsxs28("div", { className: "flex w-full items-center justify-between gap-2 px-4", children: [
        /* @__PURE__ */ jsx48(SidebarTrigger, { className: "-ml-1" }),
        /* @__PURE__ */ jsxs28("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx48(ThemeToggle, {}),
          /* @__PURE__ */ jsx48(
            NavUser,
            {
              className: "-mr-2",
              handleSignOut,
              name,
              email,
              avatarUrl
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx48("div", { className: "flex flex-1 flex-col gap-4 p-4 pt-0", children })
    ] })
  ] });
};
var layout_default = AzirLayout;

// components/table/azir-table.tsx
import { flexRender } from "@tanstack/react-table";
import { Loader } from "lucide-react";
import { useEffect as useEffect8, useRef as useRef6, useState as useState11 } from "react";

// components/table/pagination.tsx
import {
  ChevronLeft,
  ChevronRight as ChevronRight3,
  ChevronsLeft,
  ChevronsRight
} from "lucide-react";
import { jsx as jsx49, jsxs as jsxs29 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs29("div", { className: cn("flex items-center justify-between px-2", className), children: [
    /* @__PURE__ */ jsxs29("div", { className: "text-muted-foreground flex-1 text-sm", children: [
      selectedRows,
      " of ",
      totalRows,
      " row(s) selected."
    ] }),
    /* @__PURE__ */ jsxs29("div", { className: "flex items-center space-x-6 lg:space-x-8", children: [
      /* @__PURE__ */ jsxs29("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsx49("p", { className: "text-sm font-medium", children: "Rows per page" }),
        /* @__PURE__ */ jsxs29(Select, { value: `${pageSize}`, onValueChange: handlePageSizeChange, children: [
          /* @__PURE__ */ jsx49(SelectTrigger, { className: "h-8 w-[70px]", children: /* @__PURE__ */ jsx49(SelectValue, { placeholder: pageSize }) }),
          /* @__PURE__ */ jsx49(SelectContent, { side: "top", children: [10, 20, 25, 30, 40, 50].map((size) => /* @__PURE__ */ jsx49(SelectItem, { value: `${size}`, children: size }, size)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs29("div", { className: "flex w-[100px] items-center justify-center text-sm font-medium", children: [
        "Page ",
        pageIndex + 1,
        " of ",
        pageCount
      ] }),
      /* @__PURE__ */ jsxs29("div", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ jsxs29(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "hidden size-8 lg:flex",
            onClick: () => table.setPageIndex(0),
            disabled: !canPreviousPage,
            children: [
              /* @__PURE__ */ jsx49("span", { className: "sr-only", children: "Go to first page" }),
              /* @__PURE__ */ jsx49(ChevronsLeft, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs29(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "size-8",
            onClick: () => table.previousPage(),
            disabled: !canPreviousPage,
            children: [
              /* @__PURE__ */ jsx49("span", { className: "sr-only", children: "Go to previous page" }),
              /* @__PURE__ */ jsx49(ChevronLeft, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs29(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "size-8",
            onClick: () => table.nextPage(),
            disabled: !canNextPage,
            children: [
              /* @__PURE__ */ jsx49("span", { className: "sr-only", children: "Go to next page" }),
              /* @__PURE__ */ jsx49(ChevronRight3, {})
            ]
          }
        ),
        /* @__PURE__ */ jsxs29(
          Button,
          {
            variant: "outline",
            size: "icon",
            className: "hidden size-8 lg:flex",
            onClick: () => table.setPageIndex(pageCount - 1),
            disabled: !canNextPage,
            children: [
              /* @__PURE__ */ jsx49("span", { className: "sr-only", children: "Go to last page" }),
              /* @__PURE__ */ jsx49(ChevronsRight, {})
            ]
          }
        )
      ] })
    ] })
  ] });
}

// components/table/azir-table.tsx
import { Fragment as Fragment10, jsx as jsx50, jsxs as jsxs30 } from "react/jsx-runtime";
function AzirTable({
  table,
  stickyColumns = 1,
  resource,
  onRowClick
}) {
  const {
    refineCore: {
      tableQuery: { isFetching }
    }
  } = table;
  const tableRef = useRef6(null);
  const [columnWidths, setColumnWidths] = useState11([]);
  useEffect8(() => {
    const measureColumns = () => {
      if (tableRef.current && stickyColumns > 1) {
        const firstRow = tableRef.current.querySelector("thead tr");
        if (firstRow) {
          const cells = firstRow.querySelectorAll("th");
          const widths = Array.from(cells).map(
            (cell) => cell.getBoundingClientRect().width
          );
          setColumnWidths(widths);
        }
      }
    };
    const timer = setTimeout(measureColumns, 0);
    window.addEventListener("resize", measureColumns);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measureColumns);
    };
  }, [table.getRowModel().rows, stickyColumns]);
  const getStickyClasses = (index) => {
    if (index >= stickyColumns) return "";
    const isLastStickyColumn = index === stickyColumns - 1;
    return `bg-background sticky z-${index === 0 ? "20" : "10"} ${isLastStickyColumn ? "shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]" : ""}`.trim();
  };
  const getStickyStyle = (index) => {
    if (index >= stickyColumns) return {};
    if (index === 0) return { left: 0 };
    if (columnWidths.length > 0) {
      const leftOffset = columnWidths.slice(0, index).reduce((sum, width) => sum + width, 0);
      return { left: leftOffset };
    }
    return { left: 0 };
  };
  console.log("Rerendering AzirTable", resource);
  return /* @__PURE__ */ jsxs30(Fragment10, { children: [
    /* @__PURE__ */ jsx50("div", { className: "mb-2 flex justify-end", children: /* @__PURE__ */ jsx50(ReloadButton, { variant: "secondary", size: "sm", resourceName: resource }) }),
    /* @__PURE__ */ jsxs30("div", { className: "relative overflow-hidden rounded-md border", children: [
      /* @__PURE__ */ jsxs30(Table, { children: [
        /* @__PURE__ */ jsx50(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ jsx50(TableRow, { children: headerGroup.headers.map((header) => {
          return /* @__PURE__ */ jsx50(TableHead, { children: header.isPlaceholder ? null : flexRender(
            header.column.columnDef.header,
            header.getContext()
          ) }, header.id);
        }) }, headerGroup.id)) }),
        /* @__PURE__ */ jsx50(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ jsx50(
          TableRow,
          {
            "data-state": row.getIsSelected() && "selected",
            onClick: () => onRowClick?.(row),
            className: onRowClick ? "cursor-pointer" : void 0,
            children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx50(TableCell, { children: flexRender(
              cell.column.columnDef.cell,
              cell.getContext()
            ) }, cell.id))
          },
          row.id
        )) : /* @__PURE__ */ jsx50(TableRow, { children: /* @__PURE__ */ jsx50(TableCell, { colSpan: 2, className: "h-24 w-full text-center", children: "No hay resultados." }) }) })
      ] }),
      isFetching && /* @__PURE__ */ jsx50("div", { className: "absolute inset-0 z-10 flex items-center justify-center bg-white/30", children: /* @__PURE__ */ jsx50(Loader, { className: "animate-spin" }) })
    ] }),
    /* @__PURE__ */ jsx50(DataTablePagination, { className: "mt-2", table })
  ] });
}

// components/table/header/filter-radio-button.tsx
import { useEffect as useEffect9, useState as useState12 } from "react";
import { Check, Filter, FunnelX } from "lucide-react";

// components/ui/popover.tsx
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx51 } from "react/jsx-runtime";
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx51(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx51(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx51(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx51(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}

// components/ui/radio-group.tsx
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon as CircleIcon2 } from "lucide-react";
import { jsx as jsx52 } from "react/jsx-runtime";
function RadioGroup2({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx52(
    RadioGroupPrimitive.Root,
    {
      "data-slot": "radio-group",
      className: cn("grid gap-3", className),
      ...props
    }
  );
}
function RadioGroupItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx52(
    RadioGroupPrimitive.Item,
    {
      "data-slot": "radio-group-item",
      className: cn(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx52(
        RadioGroupPrimitive.Indicator,
        {
          "data-slot": "radio-group-indicator",
          className: "relative flex items-center justify-center",
          children: /* @__PURE__ */ jsx52(CircleIcon2, { className: "fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}

// components/table/header/filter-radio-button.tsx
import { jsx as jsx53, jsxs as jsxs31 } from "react/jsx-runtime";
function FilterRadioButton({
  value,
  setValue,
  options,
  placeholder = ""
}) {
  const [isOpen, setIsOpen] = useState12(false);
  const [selected, setSelected] = useState12(value);
  useEffect9(() => {
    setSelected(value);
  }, [value]);
  const applyFilter = () => {
    setValue(selected);
    setIsOpen(false);
  };
  const clearFilter = () => {
    setSelected(void 0);
    setValue(void 0);
    setIsOpen(false);
  };
  return /* @__PURE__ */ jsxs31("span", { className: "inline-flex items-center gap-1", children: [
    /* @__PURE__ */ jsxs31(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx53(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx53(
        Button,
        {
          size: "sm",
          variant: "ghost",
          "aria-label": "Filtrar",
          className: "text-primary text-xs",
          children: value !== void 0 ? options.find((opt) => opt.value === value)?.label ?? placeholder : /* @__PURE__ */ jsx53(Filter, { size: 16, color: "black" })
        }
      ) }),
      /* @__PURE__ */ jsxs31(PopoverContent, { className: "w-48 p-4", align: "start", sideOffset: 8, children: [
        /* @__PURE__ */ jsx53(
          RadioGroup2,
          {
            value: selected?.toString() ?? "",
            onValueChange: (val) => {
              const matched = options.find(
                (opt) => opt.value.toString() === val
              );
              if (matched) setSelected(matched.value);
            },
            className: "space-y-2",
            children: options.map((opt) => /* @__PURE__ */ jsxs31(
              "div",
              {
                className: "flex items-center gap-2",
                children: [
                  /* @__PURE__ */ jsx53(
                    RadioGroupItem,
                    {
                      value: opt.value.toString(),
                      id: opt.value.toString()
                    }
                  ),
                  /* @__PURE__ */ jsx53("label", { htmlFor: opt.value.toString(), className: "text-sm", children: opt.label })
                ]
              },
              opt.value.toString()
            ))
          }
        ),
        /* @__PURE__ */ jsxs31("div", { className: "mt-4 flex justify-end gap-2", children: [
          /* @__PURE__ */ jsx53(Button, { size: "sm", variant: "ghost", onClick: applyFilter, children: /* @__PURE__ */ jsx53(Check, {}) }),
          value !== void 0 && /* @__PURE__ */ jsx53(Button, { size: "sm", variant: "ghost", onClick: clearFilter, children: /* @__PURE__ */ jsx53(FunnelX, { className: "text-destructive" }) })
        ] })
      ] })
    ] }),
    value !== void 0 && /* @__PURE__ */ jsx53(Button, { size: "sm", variant: "ghost", onClick: clearFilter, children: /* @__PURE__ */ jsx53(FunnelX, { className: "text-destructive" }) })
  ] });
}

// components/table/header/filter-constain.tsx
import { useEffect as useEffect10, useRef as useRef7, useState as useState13 } from "react";
import { Check as Check2, FunnelX as FunnelX2, Search, X } from "lucide-react";
import { jsx as jsx54, jsxs as jsxs32 } from "react/jsx-runtime";
function FilterPopoverInput({
  column,
  placeholder = "Buscar..."
}) {
  const [isPopoverOpen, setPopoverOpen] = useState13(false);
  const [inputValue, setInputValue] = useState13(
    column.getFilterValue() || ""
  );
  const inputRef = useRef7(null);
  useEffect10(() => {
    setInputValue(column.getFilterValue() || "");
  }, [column.getFilterValue()]);
  useEffect10(() => {
    if (isPopoverOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isPopoverOpen]);
  const openPopover = () => {
    setInputValue(column.getFilterValue() || "");
    setPopoverOpen(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      applyFilter();
    }
  };
  const applyFilter = () => {
    column.setFilterValue(inputValue);
    setPopoverOpen(false);
  };
  const clearFilter = () => {
    setInputValue("");
    column.setFilterValue("");
    setPopoverOpen(false);
  };
  const renderTruncatedValue = (value) => {
    if (!value) return "";
    return value.length > 12 ? value.slice(0, 12) + "..." : value;
  };
  const filterValue = column.getFilterValue() || "";
  return /* @__PURE__ */ jsx54("span", { className: "inline-flex items-center gap-1", children: /* @__PURE__ */ jsxs32(Popover, { open: isPopoverOpen, onOpenChange: setPopoverOpen, children: [
    /* @__PURE__ */ jsx54(PopoverTrigger, { asChild: true, children: !filterValue ? /* @__PURE__ */ jsx54(
      Button,
      {
        size: "sm",
        variant: "ghost",
        "aria-label": isPopoverOpen ? "Close filter" : "Open filter",
        onClick: openPopover,
        children: /* @__PURE__ */ jsx54(Search, {})
      }
    ) : /* @__PURE__ */ jsx54(
      "button",
      {
        type: "button",
        className: "text-primary m-0 max-w-[60px] cursor-pointer truncate border-0 bg-transparent p-0 text-left text-xs",
        onClick: openPopover,
        "aria-label": "Edit filter",
        children: renderTruncatedValue(filterValue)
      }
    ) }),
    /* @__PURE__ */ jsxs32(
      PopoverContent,
      {
        className: "flex w-full items-center gap-2 p-2",
        align: "start",
        sideOffset: 8,
        children: [
          /* @__PURE__ */ jsx54(
            "input",
            {
              ref: inputRef,
              type: "text",
              className: "flex-1 rounded border px-2 py-1 text-sm",
              placeholder,
              value: inputValue,
              onChange: handleInputChange,
              autoFocus: true,
              onKeyDown: handleInputKeyDown
            }
          ),
          /* @__PURE__ */ jsx54(
            Button,
            {
              size: "sm",
              variant: "ghost",
              onClick: applyFilter,
              "aria-label": "Apply filter",
              children: /* @__PURE__ */ jsx54(Check2, {})
            }
          ),
          /* @__PURE__ */ jsx54(
            Button,
            {
              size: "sm",
              variant: "ghost",
              onClick: clearFilter,
              "aria-label": "Clear filter",
              children: /* @__PURE__ */ jsx54(X, { className: filterValue ? "text-primary" : "" })
            }
          )
        ]
      }
    ),
    filterValue && /* @__PURE__ */ jsx54(
      Button,
      {
        size: "sm",
        variant: "ghost",
        onClick: clearFilter,
        "aria-label": "Clear filter",
        children: /* @__PURE__ */ jsx54(FunnelX2, { className: "text-destructive" })
      }
    )
  ] }) });
}

// components/table/header/filter-between-date.tsx
import { useEffect as useEffect12, useState as useState14 } from "react";
import { CalendarDays, Check as Check3, FunnelX as FunnelX3 } from "lucide-react";

// node_modules/date-fns/constants.js
var daysInYear = 365.2425;
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1e3;
var minTime = -maxTime;
var millisecondsInWeek = 6048e5;
var millisecondsInDay = 864e5;
var secondsInHour = 3600;
var secondsInDay = secondsInHour * 24;
var secondsInWeek = secondsInDay * 7;
var secondsInYear = secondsInDay * daysInYear;
var secondsInMonth = secondsInYear / 12;
var secondsInQuarter = secondsInMonth * 3;
var constructFromSymbol = Symbol.for("constructDateFrom");

// node_modules/date-fns/constructFrom.js
function constructFrom(date, value) {
  if (typeof date === "function") return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date) return new date.constructor(value);
  return new Date(value);
}

// node_modules/date-fns/toDate.js
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}

// node_modules/date-fns/_lib/defaultOptions.js
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}

// node_modules/date-fns/startOfWeek.js
function startOfWeek(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const _date = toDate(date, options?.in);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/startOfISOWeek.js
function startOfISOWeek(date, options) {
  return startOfWeek(date, { ...options, weekStartsOn: 1 });
}

// node_modules/date-fns/getISOWeekYear.js
function getISOWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const fourthOfJanuaryOfNextYear = constructFrom(_date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear);
  const fourthOfJanuaryOfThisYear = constructFrom(_date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear);
  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.js
function getTimezoneOffsetInMilliseconds(date) {
  const _date = toDate(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds()
    )
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}

// node_modules/date-fns/_lib/normalizeDates.js
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}

// node_modules/date-fns/startOfDay.js
function startOfDay(date, options) {
  const _date = toDate(date, options?.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// node_modules/date-fns/differenceInCalendarDays.js
function differenceInCalendarDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const laterStartOfDay = startOfDay(laterDate_);
  const earlierStartOfDay = startOfDay(earlierDate_);
  const laterTimestamp = +laterStartOfDay - getTimezoneOffsetInMilliseconds(laterStartOfDay);
  const earlierTimestamp = +earlierStartOfDay - getTimezoneOffsetInMilliseconds(earlierStartOfDay);
  return Math.round((laterTimestamp - earlierTimestamp) / millisecondsInDay);
}

// node_modules/date-fns/startOfISOWeekYear.js
function startOfISOWeekYear(date, options) {
  const year = getISOWeekYear(date, options);
  const fourthOfJanuary = constructFrom(options?.in || date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return startOfISOWeek(fourthOfJanuary);
}

// node_modules/date-fns/isDate.js
function isDate(value) {
  return value instanceof Date || typeof value === "object" && Object.prototype.toString.call(value) === "[object Date]";
}

// node_modules/date-fns/isValid.js
function isValid(date) {
  return !(!isDate(date) && typeof date !== "number" || isNaN(+toDate(date)));
}

// node_modules/date-fns/startOfYear.js
function startOfYear(date, options) {
  const date_ = toDate(date, options?.in);
  date_.setFullYear(date_.getFullYear(), 0, 1);
  date_.setHours(0, 0, 0, 0);
  return date_;
}

// node_modules/date-fns/locale/en-US/_lib/formatDistance.js
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
};
var formatDistance = (token, count2, options) => {
  let result;
  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count2 === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count2.toString());
  }
  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }
  return result;
};

// node_modules/date-fns/locale/_lib/buildFormatLongFn.js
function buildFormatLongFn(args) {
  return (options = {}) => {
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format2 = args.formats[width] || args.formats[args.defaultWidth];
    return format2;
  };
}

// node_modules/date-fns/locale/en-US/_lib/formatLong.js
var dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
};
var timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
};
var formatLong = {
  date: buildFormatLongFn({
    formats: dateFormats,
    defaultWidth: "full"
  }),
  time: buildFormatLongFn({
    formats: timeFormats,
    defaultWidth: "full"
  }),
  dateTime: buildFormatLongFn({
    formats: dateTimeFormats,
    defaultWidth: "full"
  })
};

// node_modules/date-fns/locale/en-US/_lib/formatRelative.js
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
};
var formatRelative = (token, _date, _baseDate, _options) => formatRelativeLocale[token];

// node_modules/date-fns/locale/_lib/buildLocalizeFn.js
function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";
    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;
    return valuesArray[index];
  };
}

// node_modules/date-fns/locale/en-US/_lib/localize.js
var eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
};
var quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
};
var monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
};
var dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
};
var dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
};
var ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);
  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};
var localize = {
  ordinalNumber,
  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: "wide"
  }),
  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1
  }),
  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: "wide"
  }),
  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: "wide"
  }),
  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide"
  })
};

// node_modules/date-fns/locale/_lib/buildMatchFn.js
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;
    const matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];
    const parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    const key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString)) : (
      // [TODO] -- I challenge you to fix the type
      findKey(parsePatterns, (pattern) => pattern.test(matchedString))
    );
    let value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? (
      // [TODO] -- I challenge you to fix the type
      options.valueCallback(value)
    ) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}
function findKey(object, predicate) {
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key) && predicate(object[key])) {
      return key;
    }
  }
  return void 0;
}
function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return void 0;
}

// node_modules/date-fns/locale/_lib/buildMatchPatternFn.js
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];
    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    const rest = string.slice(matchedString.length);
    return { value, rest };
  };
}

// node_modules/date-fns/locale/en-US/_lib/match.js
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: buildMatchPatternFn({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10)
  }),
  era: buildMatchFn({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any"
  }),
  quarter: buildMatchFn({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1
  }),
  month: buildMatchFn({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any"
  }),
  day: buildMatchFn({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any"
  }),
  dayPeriod: buildMatchFn({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any"
  })
};

// node_modules/date-fns/locale/en-US.js
var enUS = {
  code: "en-US",
  formatDistance,
  formatLong,
  formatRelative,
  localize,
  match,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
};

// node_modules/date-fns/getDayOfYear.js
function getDayOfYear(date, options) {
  const _date = toDate(date, options?.in);
  const diff = differenceInCalendarDays(_date, startOfYear(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// node_modules/date-fns/getISOWeek.js
function getISOWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfISOWeek(_date) - +startOfISOWeekYear(_date);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/getWeekYear.js
function getWeekYear(date, options) {
  const _date = toDate(date, options?.in);
  const year = _date.getFullYear();
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const firstWeekOfNextYear = constructFrom(options?.in || date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = startOfWeek(firstWeekOfNextYear, options);
  const firstWeekOfThisYear = constructFrom(options?.in || date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = startOfWeek(firstWeekOfThisYear, options);
  if (+_date >= +startOfNextYear) {
    return year + 1;
  } else if (+_date >= +startOfThisYear) {
    return year;
  } else {
    return year - 1;
  }
}

// node_modules/date-fns/startOfWeekYear.js
function startOfWeekYear(date, options) {
  const defaultOptions2 = getDefaultOptions();
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const year = getWeekYear(date, options);
  const firstWeek = constructFrom(options?.in || date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = startOfWeek(firstWeek, options);
  return _date;
}

// node_modules/date-fns/getWeek.js
function getWeek(date, options) {
  const _date = toDate(date, options?.in);
  const diff = +startOfWeek(_date, options) - +startOfWeekYear(_date, options);
  return Math.round(diff / millisecondsInWeek) + 1;
}

// node_modules/date-fns/_lib/addLeadingZeros.js
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}

// node_modules/date-fns/_lib/format/lightFormatters.js
var lightFormatters = {
  // Year
  y(date, token) {
    const signedYear = date.getFullYear();
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return addLeadingZeros(token === "yy" ? year % 100 : year, token.length);
  },
  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : addLeadingZeros(month + 1, 2);
  },
  // Day of the month
  d(date, token) {
    return addLeadingZeros(date.getDate(), token.length);
  },
  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },
  // Hour [1-12]
  h(date, token) {
    return addLeadingZeros(date.getHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H(date, token) {
    return addLeadingZeros(date.getHours(), token.length);
  },
  // Minute
  m(date, token) {
    return addLeadingZeros(date.getMinutes(), token.length);
  },
  // Second
  s(date, token) {
    return addLeadingZeros(date.getSeconds(), token.length);
  },
  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3)
    );
    return addLeadingZeros(fractionalSeconds, token.length);
  }
};

// node_modules/date-fns/_lib/format/formatters.js
var dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night"
};
var formatters = {
  // Era
  G: function(date, token, localize2) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize2.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize2.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize2.era(era, { width: "wide" });
    }
  },
  // Year
  y: function(date, token, localize2) {
    if (token === "yo") {
      const signedYear = date.getFullYear();
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize2.ordinalNumber(year, { unit: "year" });
    }
    return lightFormatters.y(date, token);
  },
  // Local week-numbering year
  Y: function(date, token, localize2, options) {
    const signedWeekYear = getWeekYear(date, options);
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return addLeadingZeros(twoDigitYear, 2);
    }
    if (token === "Yo") {
      return localize2.ordinalNumber(weekYear, { unit: "year" });
    }
    return addLeadingZeros(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function(date, token) {
    const isoWeekYear = getISOWeekYear(date);
    return addLeadingZeros(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function(date, token) {
    const year = date.getFullYear();
    return addLeadingZeros(year, token.length);
  },
  // Quarter
  Q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "formatting"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "formatting"
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone quarter
  q: function(date, token, localize2) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return addLeadingZeros(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize2.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize2.quarter(quarter, {
          width: "abbreviated",
          context: "standalone"
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize2.quarter(quarter, {
          width: "narrow",
          context: "standalone"
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize2.quarter(quarter, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // Month
  M: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize2.month(month, {
          width: "abbreviated",
          context: "formatting"
        });
      // J, F, ..., D
      case "MMMMM":
        return localize2.month(month, {
          width: "narrow",
          context: "formatting"
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize2.month(month, { width: "wide", context: "formatting" });
    }
  },
  // Stand-alone month
  L: function(date, token, localize2) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return addLeadingZeros(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize2.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize2.month(month, {
          width: "abbreviated",
          context: "standalone"
        });
      // J, F, ..., D
      case "LLLLL":
        return localize2.month(month, {
          width: "narrow",
          context: "standalone"
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize2.month(month, { width: "wide", context: "standalone" });
    }
  },
  // Local week of year
  w: function(date, token, localize2, options) {
    const week = getWeek(date, options);
    if (token === "wo") {
      return localize2.ordinalNumber(week, { unit: "week" });
    }
    return addLeadingZeros(week, token.length);
  },
  // ISO week of year
  I: function(date, token, localize2) {
    const isoWeek = getISOWeek(date);
    if (token === "Io") {
      return localize2.ordinalNumber(isoWeek, { unit: "week" });
    }
    return addLeadingZeros(isoWeek, token.length);
  },
  // Day of the month
  d: function(date, token, localize2) {
    if (token === "do") {
      return localize2.ordinalNumber(date.getDate(), { unit: "date" });
    }
    return lightFormatters.d(date, token);
  },
  // Day of year
  D: function(date, token, localize2) {
    const dayOfYear = getDayOfYear(date);
    if (token === "Do") {
      return localize2.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }
    return addLeadingZeros(dayOfYear, token.length);
  },
  // Day of week
  E: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "EEEEE":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "EEEEEE":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "EEEE":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Local day of week
  e: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return addLeadingZeros(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "eeeee":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "eeeeee":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "eeee":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Stand-alone local day of week
  c: function(date, token, localize2, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return addLeadingZeros(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize2.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone"
        });
      // T
      case "ccccc":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "standalone"
        });
      // Tu
      case "cccccc":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "standalone"
        });
      // Tuesday
      case "cccc":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "standalone"
        });
    }
  },
  // ISO day of week
  i: function(date, token, localize2) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return addLeadingZeros(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize2.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize2.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting"
        });
      // T
      case "iiiii":
        return localize2.day(dayOfWeek, {
          width: "narrow",
          context: "formatting"
        });
      // Tu
      case "iiiiii":
        return localize2.day(dayOfWeek, {
          width: "short",
          context: "formatting"
        });
      // Tuesday
      case "iiii":
      default:
        return localize2.day(dayOfWeek, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM or PM
  a: function(date, token, localize2) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    switch (token) {
      case "a":
      case "aa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "aaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "aaaaa":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "aaaa":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // AM, PM, midnight, noon
  b: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }
    switch (token) {
      case "b":
      case "bb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "bbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        }).toLowerCase();
      case "bbbbb":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "bbbb":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function(date, token, localize2) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting"
        });
      case "BBBBB":
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting"
        });
      case "BBBB":
      default:
        return localize2.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting"
        });
    }
  },
  // Hour [1-12]
  h: function(date, token, localize2) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return lightFormatters.h(date, token);
  },
  // Hour [0-23]
  H: function(date, token, localize2) {
    if (token === "Ho") {
      return localize2.ordinalNumber(date.getHours(), { unit: "hour" });
    }
    return lightFormatters.H(date, token);
  },
  // Hour [0-11]
  K: function(date, token, localize2) {
    const hours = date.getHours() % 12;
    if (token === "Ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Hour [1-24]
  k: function(date, token, localize2) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;
    if (token === "ko") {
      return localize2.ordinalNumber(hours, { unit: "hour" });
    }
    return addLeadingZeros(hours, token.length);
  },
  // Minute
  m: function(date, token, localize2) {
    if (token === "mo") {
      return localize2.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }
    return lightFormatters.m(date, token);
  },
  // Second
  s: function(date, token, localize2) {
    if (token === "so") {
      return localize2.ordinalNumber(date.getSeconds(), { unit: "second" });
    }
    return lightFormatters.s(date, token);
  },
  // Fraction of second
  S: function(date, token) {
    return lightFormatters.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return "Z";
    }
    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx":
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx":
      // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (GMT)
  O: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Timezone (specific non-location)
  z: function(date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();
    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },
  // Seconds timestamp
  t: function(date, token, _localize) {
    const timestamp = Math.trunc(+date / 1e3);
    return addLeadingZeros(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function(date, token, _localize) {
    return addLeadingZeros(+date, token.length);
  }
};
function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + addLeadingZeros(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + addLeadingZeros(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}
function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = addLeadingZeros(Math.trunc(absOffset / 60), 2);
  const minutes = addLeadingZeros(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

// node_modules/date-fns/_lib/format/longFormatters.js
var dateLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "P":
      return formatLong2.date({ width: "short" });
    case "PP":
      return formatLong2.date({ width: "medium" });
    case "PPP":
      return formatLong2.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong2.date({ width: "full" });
  }
};
var timeLongFormatter = (pattern, formatLong2) => {
  switch (pattern) {
    case "p":
      return formatLong2.time({ width: "short" });
    case "pp":
      return formatLong2.time({ width: "medium" });
    case "ppp":
      return formatLong2.time({ width: "long" });
    case "pppp":
    default:
      return formatLong2.time({ width: "full" });
  }
};
var dateTimeLongFormatter = (pattern, formatLong2) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong2);
  }
  let dateTimeFormat;
  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong2.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong2.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong2.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong2.dateTime({ width: "full" });
      break;
  }
  return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong2)).replace("{{time}}", timeLongFormatter(timePattern, formatLong2));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};

// node_modules/date-fns/_lib/protectedTokens.js
var dayOfYearTokenRE = /^D+$/;
var weekYearTokenRE = /^Y+$/;
var throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}
function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}
function warnOrThrowProtectedError(token, format2, input) {
  const _message = message(token, format2, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}
function message(token, format2, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format2}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}

// node_modules/date-fns/format.js
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
function format(date, formatStr, options) {
  const defaultOptions2 = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions2.locale ?? enUS;
  const firstWeekContainsDate = options?.firstWeekContainsDate ?? options?.locale?.options?.firstWeekContainsDate ?? defaultOptions2.firstWeekContainsDate ?? defaultOptions2.locale?.options?.firstWeekContainsDate ?? 1;
  const weekStartsOn = options?.weekStartsOn ?? options?.locale?.options?.weekStartsOn ?? defaultOptions2.weekStartsOn ?? defaultOptions2.locale?.options?.weekStartsOn ?? 0;
  const originalDate = toDate(date, options?.in);
  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }
  let parts = formatStr.match(longFormattingTokensRegExp).map((substring) => {
    const firstCharacter = substring[0];
    if (firstCharacter === "p" || firstCharacter === "P") {
      const longFormatter = longFormatters[firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join("").match(formattingTokensRegExp).map((substring) => {
    if (substring === "''") {
      return { isToken: false, value: "'" };
    }
    const firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return { isToken: false, value: cleanEscapedString(substring) };
    }
    if (formatters[firstCharacter]) {
      return { isToken: true, value: substring };
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError(
        "Format string contains an unescaped latin alphabet character `" + firstCharacter + "`"
      );
    }
    return { isToken: false, value: substring };
  });
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }
  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale
  };
  return parts.map((part) => {
    if (!part.isToken) return part.value;
    const token = part.value;
    if (!options?.useAdditionalWeekYearTokens && isProtectedWeekYearToken(token) || !options?.useAdditionalDayOfYearTokens && isProtectedDayOfYearToken(token)) {
      warnOrThrowProtectedError(token, formatStr, String(date));
    }
    const formatter = formatters[token[0]];
    return formatter(originalDate, token, locale.localize, formatterOptions);
  }).join("");
}
function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

// components/ui/calendar.tsx
import * as React15 from "react";
import {
  ChevronDownIcon as ChevronDownIcon2,
  ChevronLeftIcon,
  ChevronRightIcon as ChevronRightIcon2
} from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import { jsx as jsx55 } from "react/jsx-runtime";
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = "label",
  buttonVariant = "ghost",
  formatters: formatters2,
  components,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  return /* @__PURE__ */ jsx55(
    DayPicker,
    {
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: {
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" }),
        ...formatters2
      },
      classNames: {
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden),
        ...classNames
      },
      components: {
        Root: ({ className: className2, rootRef, ...props2 }) => {
          return /* @__PURE__ */ jsx55(
            "div",
            {
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2),
              ...props2
            }
          );
        },
        Chevron: ({ className: className2, orientation, ...props2 }) => {
          if (orientation === "left") {
            return /* @__PURE__ */ jsx55(ChevronLeftIcon, { className: cn("size-4", className2), ...props2 });
          }
          if (orientation === "right") {
            return /* @__PURE__ */ jsx55(
              ChevronRightIcon2,
              {
                className: cn("size-4", className2),
                ...props2
              }
            );
          }
          return /* @__PURE__ */ jsx55(ChevronDownIcon2, { className: cn("size-4", className2), ...props2 });
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props2 }) => {
          return /* @__PURE__ */ jsx55("td", { ...props2, children: /* @__PURE__ */ jsx55("div", { className: "flex size-(--cell-size) items-center justify-center text-center", children }) });
        },
        ...components
      },
      ...props
    }
  );
}
function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}) {
  const defaultClassNames = getDefaultClassNames();
  const ref = React15.useRef(null);
  React15.useEffect(() => {
    if (modifiers.focused) ref.current?.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ jsx55(
    Button,
    {
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      ),
      ...props
    }
  );
}

// components/table/header/filter-between-date.tsx
import { jsx as jsx56, jsxs as jsxs33 } from "react/jsx-runtime";
function FilterBetweenDate({
  column
}) {
  const [isOpen, setIsOpen] = useState14(false);
  const [range, setRange] = useState14();
  useEffect12(() => {
    const filterValue = column.getFilterValue();
    if (filterValue && Array.isArray(filterValue) && filterValue.length === 2) {
      setRange({
        from: new Date(filterValue[0]),
        to: new Date(filterValue[1])
      });
    } else {
      setRange(void 0);
    }
  }, [column]);
  const applyFilter = () => {
    if (range?.from && range?.to) {
      column.setFilterValue([
        format(range.from, "yyyy-MM-dd HH:mm:ss.SSS"),
        format(range.to, "yyyy-MM-dd HH:mm:ss.SSS")
      ]);
    } else {
      column.setFilterValue(void 0);
    }
    setIsOpen(false);
  };
  const clearFilter = () => {
    setRange(void 0);
    column.setFilterValue(void 0);
    setIsOpen(false);
  };
  const renderLabel = () => {
    if (!range?.from || !range?.to) return /* @__PURE__ */ jsx56(CalendarDays, {});
    const formattedFrom = format(range.from, "dd/MM/yyyy");
    const formattedTo = format(range.to, "dd/MM/yyyy");
    return /* @__PURE__ */ jsxs33("span", { className: "text-primary text-xs", children: [
      formattedFrom,
      " - ",
      formattedTo
    ] });
  };
  return /* @__PURE__ */ jsxs33("span", { className: "inline-flex items-center gap-1", children: [
    /* @__PURE__ */ jsxs33(Popover, { open: isOpen, onOpenChange: setIsOpen, children: [
      /* @__PURE__ */ jsx56(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx56(
        Button,
        {
          size: "sm",
          variant: "ghost",
          "aria-label": isOpen ? "Cerrar filtro" : "Abrir filtro",
          children: renderLabel()
        }
      ) }),
      /* @__PURE__ */ jsx56(PopoverContent, { className: "w-auto p-4", align: "start", sideOffset: 8, children: /* @__PURE__ */ jsxs33("div", { className: "flex flex-col items-start gap-2", children: [
        /* @__PURE__ */ jsx56(
          Calendar,
          {
            mode: "range",
            selected: range,
            onSelect: setRange,
            numberOfMonths: 1,
            required: true
          }
        ),
        /* @__PURE__ */ jsxs33("div", { className: "mt-2 flex w-full justify-end gap-2", children: [
          /* @__PURE__ */ jsx56(Button, { size: "sm", variant: "ghost", onClick: applyFilter, children: /* @__PURE__ */ jsx56(Check3, {}) }),
          /* @__PURE__ */ jsx56(Button, { size: "sm", variant: "ghost", onClick: clearFilter, children: /* @__PURE__ */ jsx56(FunnelX3, { className: "text-destructive" }) })
        ] })
      ] }) })
    ] }),
    range?.from && range?.to && /* @__PURE__ */ jsx56(
      Button,
      {
        size: "sm",
        variant: "ghost",
        onClick: clearFilter,
        "aria-label": "Clear filter",
        children: /* @__PURE__ */ jsx56(FunnelX3, { className: "text-destructive" })
      }
    )
  ] });
}

// components/table/header/index.tsx
import {
  ArrowDownWideNarrow,
  ArrowUpDown,
  ArrowUpWideNarrow
} from "lucide-react";
import { jsx as jsx57, jsxs as jsxs34 } from "react/jsx-runtime";
function getSortIcon(isSorted) {
  switch (isSorted) {
    case "asc":
      return /* @__PURE__ */ jsx57(ArrowUpWideNarrow, { className: "text-primary size-4" });
    case "desc":
      return /* @__PURE__ */ jsx57(ArrowDownWideNarrow, { className: "text-primary size-4" });
    default:
      return /* @__PURE__ */ jsx57(ArrowUpDown, { className: "size-4" });
  }
}
function TableHeaderActions({
  column,
  label,
  sortable = false,
  filter
}) {
  return /* @__PURE__ */ jsxs34("span", { className: "inline-flex items-center gap-1", children: [
    label,
    sortable && /* @__PURE__ */ jsx57(
      Button,
      {
        size: "sm",
        variant: "ghost",
        onClick: () => column.toggleSorting(column.getIsSorted() === "asc"),
        "aria-label": `Order by ${label}`,
        children: getSortIcon(column.getIsSorted())
      }
    ),
    filter
  ] });
}
var header_default = TableHeaderActions;
export {
  ActionsField,
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
  FilterBetweenDate,
  FilterPopoverInput,
  FilterRadioButton,
  Form2 as Form,
  Label2 as Label,
  List,
  ListButton,
  NavMain,
  NavProjects,
  NavRefine,
  NavUser,
  RefreshButton,
  SaveButton,
  Select,
  Separator2 as Separator,
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
  Table,
  header_default as TableHeaderActions,
  TeamSwitcher,
  ThemeToggleItem,
  Tooltip2 as Tooltip,
  Form as UIForm,
  useIsMobile,
  useOnBack,
  useSidebar,
  useTheme
};
//# sourceMappingURL=client.mjs.map