import * as react_jsx_runtime from 'react/jsx-runtime';
import { RefineThemedLayoutV2SiderProps, RefineCreateButtonProps, RefineDeleteButtonProps, RefineEditButtonProps, RefineListButtonProps, RefineRefreshButtonProps, RefineSaveButtonProps, RefineButtonResourceProps, RefineButtonSingleProps, RefineShowButtonProps, RefineCrudCreateProps, RefineCrudEditProps, RefineCrudListProps, RefineCrudShowProps } from '@refinedev/ui-types';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import * as React$1 from 'react';
import React__default, { ReactElement, FC, PropsWithChildren, DetailedHTMLProps, FormHTMLAttributes, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { I as Input, B as Button, b as buttonVariants, a as ButtonProps, P as PageHeaderProps } from './input-Cg7xjffp.mjs';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { LucideIcon } from 'lucide-react';
import { CanAccess, BaseRecord, HttpError } from '@refinedev/core';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { AlertDialogProps } from '@radix-ui/react-alert-dialog';
import * as react_hook_form from 'react-hook-form';
import { FieldValues } from 'react-hook-form';
import { UseFormReturnType } from '@refinedev/react-hook-form';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { UseTableReturnType } from '@refinedev/react-table';
import { HeaderContext } from '@tanstack/react-table';

type ActionsFieldProps = {
    id: string;
    resource?: string;
};
declare function ActionsField({ id, resource }: ActionsFieldProps): react_jsx_runtime.JSX.Element | null;

interface AddCardFormProps {
    user: {
        id: string;
        email: string;
    };
}
declare function AddCardForm({ user }: AddCardFormProps): react_jsx_runtime.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof SeparatorPrimitive.Root>): react_jsx_runtime.JSX.Element;

type SidebarContextProps = {
    state: "expanded" | "collapsed";
    open: boolean;
    setOpen: (open: boolean) => void;
    openMobile: boolean;
    setOpenMobile: (open: boolean) => void;
    isMobile: boolean;
    toggleSidebar: () => void;
};
declare function useSidebar(): SidebarContextProps;
declare function SidebarProvider({ defaultOpen, open: openProp, onOpenChange: setOpenProp, className, style, children, ...props }: React$1.ComponentProps<"div"> & {
    defaultOpen?: boolean;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}): react_jsx_runtime.JSX.Element;
declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React$1.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}): react_jsx_runtime.JSX.Element;
declare function SidebarTrigger({ className, onClick, ...props }: React$1.ComponentProps<typeof Button>): react_jsx_runtime.JSX.Element;
declare function SidebarRail({ className, ...props }: React$1.ComponentProps<"button">): react_jsx_runtime.JSX.Element;
declare function SidebarInset({ className, ...props }: React$1.ComponentProps<"main">): react_jsx_runtime.JSX.Element;
declare function SidebarInput({ className, ...props }: React$1.ComponentProps<typeof Input>): react_jsx_runtime.JSX.Element;
declare function SidebarHeader({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SidebarFooter({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SidebarSeparator({ className, ...props }: React$1.ComponentProps<typeof Separator>): react_jsx_runtime.JSX.Element;
declare function SidebarContent({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SidebarGroup({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SidebarGroupLabel({ className, asChild, ...props }: React$1.ComponentProps<"div"> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function SidebarGroupAction({ className, asChild, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function SidebarGroupContent({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SidebarMenu({ className, ...props }: React$1.ComponentProps<"ul">): react_jsx_runtime.JSX.Element;
declare function SidebarMenuItem({ className, ...props }: React$1.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
declare const sidebarMenuButtonVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
declare function SidebarMenuButton({ asChild, isActive, variant, size, tooltip, className, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
    isActive?: boolean;
    tooltip?: string | React$1.ComponentProps<typeof TooltipContent>;
} & VariantProps<typeof sidebarMenuButtonVariants>): react_jsx_runtime.JSX.Element;
declare function SidebarMenuAction({ className, asChild, showOnHover, ...props }: React$1.ComponentProps<"button"> & {
    asChild?: boolean;
    showOnHover?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function SidebarMenuBadge({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SidebarMenuSkeleton({ className, showIcon, ...props }: React$1.ComponentProps<"div"> & {
    showIcon?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function SidebarMenuSub({ className, ...props }: React$1.ComponentProps<"ul">): react_jsx_runtime.JSX.Element;
declare function SidebarMenuSubItem({ className, ...props }: React$1.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
declare function SidebarMenuSubButton({ asChild, size, isActive, className, ...props }: React$1.ComponentProps<"a"> & {
    asChild?: boolean;
    size?: "sm" | "md";
    isActive?: boolean;
}): react_jsx_runtime.JSX.Element;

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar>, RefineThemedLayoutV2SiderProps {
    src?: string;
    alt?: string;
    span?: string;
    labels?: {
        [key: string]: string;
    };
}
declare function AppSidebar({ meta, src, alt, span, labels, ...props }: AppSidebarProps): react_jsx_runtime.JSX.Element;

declare function NavMain({ items, }: {
    items: {
        title: string;
        url: string;
        icon?: LucideIcon;
        isActive?: boolean;
        items?: {
            title: string;
            url: string;
        }[];
    }[];
}): react_jsx_runtime.JSX.Element;

declare function NavProjects({ projects, }: {
    projects: {
        name: string;
        url: string;
        icon: LucideIcon;
    }[];
}): react_jsx_runtime.JSX.Element;

interface NavRefineProps {
    groupLabels?: {
        [key: string]: string;
    };
}
declare function NavRefine({ groupLabels }: NavRefineProps): react_jsx_runtime.JSX.Element;

interface NavUserProps {
    className?: string;
    handleSignOut: () => Promise<void> | void;
    name?: string;
    email?: string;
    avatarUrl?: string;
}
declare function NavUser({ className, handleSignOut, name, email, avatarUrl, }: NavUserProps): react_jsx_runtime.JSX.Element;

declare function TeamSwitcher({ teams, }: {
    teams: {
        name: string;
        logo: React$1.ElementType;
        plan: string;
    }[];
}): react_jsx_runtime.JSX.Element | null;

type ConfirmDialogProps$1 = AlertDialogProps & {
    title?: string;
    description?: string;
    okIcon?: ReactElement<SVGSVGElement>;
    okIconSide?: "left" | "right";
    cancelIconSide?: "left" | "right";
    cancelIcon?: ReactElement<SVGSVGElement>;
    okText?: string;
    cancelText?: string;
    loading?: boolean;
    children?: ReactElement<SVGSVGElement>;
    okButtonVariant?: VariantProps<typeof buttonVariants>["variant"];
    cancelButtonVariant?: VariantProps<typeof buttonVariants>["variant"];
    okButtonSize?: VariantProps<typeof buttonVariants>["size"];
    cancelButtonSize?: VariantProps<typeof buttonVariants>["size"];
};

type CustomButtonProps<T> = ButtonProps & T;
type ShowButtonProps = CustomButtonProps<RefineShowButtonProps>;
type CreateButtonProps = CustomButtonProps<Pick<RefineCreateButtonProps, "resource" | "hideText" | "accessControl" | "meta" | "onClick">>;
type DeleteButtonProps = CustomButtonProps<RefineDeleteButtonProps<{
    confirmDescription?: ConfirmDialogProps$1["description"];
}>>;
type EditButtonProps = CustomButtonProps<RefineEditButtonProps>;
type ListButtonProps = CustomButtonProps<RefineListButtonProps>;
type SaveButtonProps = ButtonProps & RefineSaveButtonProps & RefineButtonResourceProps & RefineButtonSingleProps & {
    access?: Omit<React.ComponentProps<typeof CanAccess>, "children" | "action" | "resource" | "params">;
};
type RefreshButtonProps = CustomButtonProps<RefineRefreshButtonProps>;

declare const CreateButton: FC<CreateButtonProps>;

declare const DeleteButton: FC<DeleteButtonProps>;

declare const EditButton: {
    ({ resource, recordItemId, hideText, accessControl, meta, onClick, children, ...props }: EditButtonProps): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};

declare const ListButton: {
    ({ resource: resourceNameFromProps, hideText, accessControl, meta, children, onClick, ...props }: ListButtonProps): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};

declare const RefreshButton: {
    ({ resource, recordItemId, hideText, dataProviderName, children, ...props }: RefreshButtonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const SaveButton: FC<SaveButtonProps>;

declare const ShowButton: {
    ({ resource: resourceNameFromProps, recordItemId, hideText, accessControl, meta, children, onClick, ...props }: ShowButtonProps): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};

type CreateProps = RefineCrudCreateProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PageHeaderProps> & Partial<{
    extra: React.ReactNode;
}>;
type EditProps = RefineCrudEditProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>> & Partial<{
    extra: React.ReactNode;
    headerButtons: (props: {
        defaultButtons: React.ReactNode;
        listButtonProps: ListButtonProps | undefined;
        refreshButtonProps: RefreshButtonProps | undefined;
    }) => React.ReactNode;
}>;
type ListProps = Omit<RefineCrudListProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PageHeaderProps, CreateButtonProps>, "createButtonProps" | "headerButtons"> & Partial<{
    createButtonProps: CreateButtonProps;
    extra: React.ReactNode;
    className: string;
    headerButtons: (props: {
        defaultButtons: React.ReactNode;
        createButtonProps: CreateButtonProps | undefined;
    }) => React.ReactNode;
}>;
type ShowProps = RefineCrudShowProps<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, PageHeaderProps> & Partial<{
    extra: React.ReactNode;
    headerButtons: (props: {
        defaultButtons: React.ReactNode;
        deleteButtonProps: DeleteButtonProps | undefined;
        editButtonProps: EditButtonProps | undefined;
        listButtonProps: ListButtonProps | undefined;
        refreshButtonProps: RefreshButtonProps | undefined;
    }) => React.ReactNode;
}>;

declare const CreatePage: {
    ({ title, resource: resourceFromProps, breadcrumb: breadcrumbFromProps, extra, children, }: CreateProps): ReturnType<React__default.FC<CreateProps>>;
    displayName: string;
};

declare const EditPage: ({ title, resource: resourceFromProps, mutationMode: mutationModeFromProps, recordItemId, deleteButtonProps: deleteButtonPropsFromProps, headerButtons: headerButtonsFromProps, dataProviderName, extra, breadcrumb: breadcrumbFromProps, canDelete, children, isLoading, autoSaveProps, }: EditProps) => react_jsx_runtime.JSX.Element;

declare const List: ({ canCreate, title, children, createButtonProps: createButtonPropsFromProps, resource: resourceFromProps, breadcrumb: breadcrumbFromProps, headerButtonProps, headerButtons: headerButtonsFromProps, extra, }: ListProps) => react_jsx_runtime.JSX.Element;

declare const Show: (props: ShowProps) => react_jsx_runtime.JSX.Element;

type NativeFormProps = Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "onSubmit">;
type FormProps<TQueryFnData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables extends FieldValues = FieldValues, TContext extends object = {}, TData extends BaseRecord = TQueryFnData, TResponse extends BaseRecord = TData, TResponseError extends HttpError = TError> = PropsWithChildren & UseFormReturnType<TQueryFnData, TError, TVariables, TContext, TData, TResponse, TResponseError> & {
    formProps?: NativeFormProps;
    isWatchable?: boolean;
    hideCancel?: boolean;
};
declare const Form$1: <TQueryFnData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TVariables extends FieldValues = FieldValues, TContext extends object = {}, TData extends BaseRecord = TQueryFnData, TResponse extends BaseRecord = TData, TResponseError extends HttpError = TError>({ formProps, isWatchable, saveButtonProps, ...props }: FormProps<TQueryFnData, TError, TVariables, TContext, TData, TResponse, TResponseError>) => react_jsx_runtime.JSX.Element;

declare function AlertDialog({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function AlertDialogTrigger({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function AlertDialogPortal({ ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function AlertDialogOverlay({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Overlay>): react_jsx_runtime.JSX.Element;
declare function AlertDialogContent({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function AlertDialogHeader({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function AlertDialogFooter({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function AlertDialogTitle({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Title>): react_jsx_runtime.JSX.Element;
declare function AlertDialogDescription({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Description>): react_jsx_runtime.JSX.Element;
declare function AlertDialogAction({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Action>): react_jsx_runtime.JSX.Element;
declare function AlertDialogCancel({ className, ...props }: React$1.ComponentProps<typeof AlertDialogPrimitive.Cancel>): react_jsx_runtime.JSX.Element;

declare function Avatar({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function AvatarImage({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Image>): react_jsx_runtime.JSX.Element;
declare function AvatarFallback({ className, ...props }: React$1.ComponentProps<typeof AvatarPrimitive.Fallback>): react_jsx_runtime.JSX.Element;

declare function Collapsible({ ...props }: React.ComponentProps<typeof CollapsiblePrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function DropdownMenu({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Separator>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSub({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Sub>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): react_jsx_runtime.JSX.Element;

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React$1.JSX.Element;

declare function Label({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Select({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Sheet({ ...props }: React$1.ComponentProps<typeof SheetPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function SheetTrigger({ ...props }: React$1.ComponentProps<typeof SheetPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function SheetClose({ ...props }: React$1.ComponentProps<typeof SheetPrimitive.Close>): react_jsx_runtime.JSX.Element;
declare function SheetContent({ className, children, side, ...props }: React$1.ComponentProps<typeof SheetPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left";
}): react_jsx_runtime.JSX.Element;
declare function SheetHeader({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SheetFooter({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SheetTitle({ className, ...props }: React$1.ComponentProps<typeof SheetPrimitive.Title>): react_jsx_runtime.JSX.Element;
declare function SheetDescription({ className, ...props }: React$1.ComponentProps<typeof SheetPrimitive.Description>): react_jsx_runtime.JSX.Element;

declare function Table({ className, ...props }: React$1.ComponentProps<"table">): react_jsx_runtime.JSX.Element;

declare function ThemeToggleItem(): react_jsx_runtime.JSX.Element;

declare function Tooltip({ ...props }: React$1.ComponentProps<typeof TooltipPrimitive.Root>): react_jsx_runtime.JSX.Element;

type ConfirmDialogProps = React$1.ComponentPropsWithoutRef<typeof AlertDialog> & {
    children: React$1.ReactNode;
    title?: string;
    description?: string;
    okText?: string;
    cancelText?: string;
    loading?: boolean;
    onConfirm?: () => void;
    okIcon?: React$1.ReactElement;
    cancelIcon?: React$1.ReactElement;
    okIconSide?: "left" | "right";
    cancelIconSide?: "left" | "right";
    okButtonVariant?: ButtonProps["variant"];
    cancelButtonVariant?: ButtonProps["variant"];
    okButtonSize?: ButtonProps["size"];
    cancelButtonSize?: ButtonProps["size"];
};
declare const ConfirmDialog: React$1.FC<ConfirmDialogProps>;

declare function useIsMobile(): boolean;

declare const useOnBack: () => (() => void);

type Theme = "light" | "dark";
declare function useTheme(): {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (newTheme: Theme) => void;
};

declare const AzirLayout: ({ children, sidebarSrc, sidebarAlt, sidebarSpan, handleSignOut, name, email, avatarUrl, labels, }: {
    children: React.ReactNode;
    sidebarSrc?: string;
    sidebarAlt?: string;
    sidebarSpan?: string;
    handleSignOut: () => Promise<void> | void;
    name?: string;
    email?: string;
    avatarUrl?: string;
    labels?: {
        [key: string]: string;
    };
}) => react_jsx_runtime.JSX.Element;

interface AzirTableProps<TQueryFnData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TData extends BaseRecord = TQueryFnData> {
    table: UseTableReturnType<TData, TError>;
    stickyColumns?: number;
    resource?: string;
    onRowClick?: (row: any) => void;
}
declare function AzirTable<TQueryFnData extends BaseRecord = BaseRecord, TError extends HttpError = HttpError, TData extends BaseRecord = TQueryFnData>({ table, stickyColumns, resource, onRowClick, }: AzirTableProps<TQueryFnData, TError, TData>): react_jsx_runtime.JSX.Element;

interface Option<T> {
    value: T;
    label: string;
}
interface FilterSelectButtonProps<T> {
    value: T | undefined;
    setValue: (value: T | undefined) => void;
    options: Option<T>[];
    placeholder?: string;
}
declare function FilterRadioButton<T extends string | number | boolean>({ value, setValue, options, placeholder, }: FilterSelectButtonProps<T>): react_jsx_runtime.JSX.Element;

/**
 * FilterPopoverInput
 * A table column filter input with popover, clear, and apply actions.
 * - Shows a funnel icon when no filter is set.
 * - Shows a truncated filter value and clear icon when filter is set.
 * - Clicking the value or funnel opens a popover to edit/apply/clear the filter.
 */
interface FilterPopoverInputProps<TData> extends HeaderContext<TData, unknown> {
    placeholder?: string;
}
declare function FilterPopoverInput<TData>({ column, placeholder, }: FilterPopoverInputProps<TData>): react_jsx_runtime.JSX.Element;

declare function FilterBetweenDate<TData>({ column, }: HeaderContext<TData, unknown>): react_jsx_runtime.JSX.Element;

type TableHeaderActionsProps<TData> = HeaderContext<TData, unknown> & {
    label: string;
    sortable?: boolean;
    filter?: ReactNode;
};
declare function TableHeaderActions<TData>({ column, label, sortable, filter, }: TableHeaderActionsProps<TData>): react_jsx_runtime.JSX.Element;

export { ActionsField, AddCardForm, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AppSidebar, Avatar, AvatarFallback, AvatarImage, AzirLayout, AzirTable, Collapsible, ConfirmDialog, type ConfirmDialogProps, CreateButton, CreatePage, DeleteButton, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EditButton, EditPage, FilterBetweenDate, FilterPopoverInput, FilterRadioButton, Form$1 as Form, Label, List, ListButton, NavMain, NavProjects, NavRefine, NavUser, RefreshButton, SaveButton, Select, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, Show, ShowButton, Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInput, SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge, SidebarMenuButton, SidebarMenuItem, SidebarMenuSkeleton, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarSeparator, SidebarTrigger, Table, TableHeaderActions, TeamSwitcher, ThemeToggleItem, Tooltip, Form as UIForm, useIsMobile, useOnBack, useSidebar, useTheme };
