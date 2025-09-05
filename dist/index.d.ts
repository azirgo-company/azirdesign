import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { ReactElement, PropsWithChildren, DetailedHTMLProps, FormHTMLAttributes, AnchorHTMLAttributes, ReactNode, FC } from 'react';
import { RefineThemedLayoutV2SiderProps, RefineCreateButtonProps, RefineDeleteButtonProps, RefineEditButtonProps, RefineListButtonProps, RefineRefreshButtonProps, RefineSaveButtonProps, RefineButtonResourceProps, RefineButtonSingleProps, RefineShowButtonProps, RefineCrudCreateProps, RefineCrudEditProps, RefineCrudListProps, RefineCrudShowProps } from '@refinedev/ui-types';
import { FieldValues, FieldPath, UseControllerProps, ControllerRenderProps } from 'react-hook-form';
import { LucideIcon } from 'lucide-react';
import { CanAccess } from '@refinedev/core';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';
import { AlertDialogProps } from '@radix-ui/react-alert-dialog';

interface AddCardFormProps {
    user: {
        id: string;
        email: string;
    };
}
declare function AddCardForm({ user }: AddCardFormProps): react_jsx_runtime.JSX.Element;

declare const buttonVariants: (props?: {
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost";
    size?: "default" | "sm" | "lg" | "icon";
} & class_variance_authority_dist_types.ClassProp) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    icon?: React$1.ReactElement<SVGSVGElement>;
}

declare function Sidebar({ side, variant, collapsible, className, children, ...props }: React$1.ComponentProps<"div"> & {
    side?: "left" | "right";
    variant?: "sidebar" | "floating" | "inset";
    collapsible?: "offcanvas" | "icon" | "none";
}): react_jsx_runtime.JSX.Element;

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar>, RefineThemedLayoutV2SiderProps {
}
declare function AppSidebar({ meta, ...props }: AppSidebarProps): react_jsx_runtime.JSX.Element;

type FieldProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = UseControllerProps<TFieldValues, TName> & {
    label?: string;
    description?: string;
    className?: string;
    isCheckbox?: boolean;
    isRequired?: boolean;
    children: ReactElement<{
        field: ControllerRenderProps<TFieldValues, TName>;
    }>;
};
declare const Field: ({ label, description, children }: FieldProps) => react_jsx_runtime.JSX.Element;

type FormProps = PropsWithChildren & DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
declare const Form: ({ children, ...props }: FormProps) => react_jsx_runtime.JSX.Element;

type ImagePreviewCellProps = {
    src: string;
    alt?: string;
    thumbnailSize?: number;
};
declare const ImagePreviewCell: ({ src, alt, thumbnailSize, }: ImagePreviewCellProps) => react_jsx_runtime.JSX.Element;

declare const Link: React$1.ForwardRefExoticComponent<AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
} & React$1.RefAttributes<HTMLAnchorElement>>;

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

declare function NavRefine(): react_jsx_runtime.JSX.Element;

interface NavUserProps {
    className?: string;
}
declare function NavUser({ className }: NavUserProps): react_jsx_runtime.JSX.Element;

type PageHeaderProps = {
    title?: ReactNode;
    subTitle?: ReactNode;
    isBack?: boolean;
    onBack?: (e?: React.MouseEvent<HTMLElement>) => void;
    className?: string;
    breadcrumb?: ReactNode;
    extra?: ReactNode;
    children?: ReactNode;
};

declare const PageHeader: ({ extra, children, className, title, subTitle, isBack, ...props }: PageHeaderProps) => react_jsx_runtime.JSX.Element;

declare function TeamSwitcher({ teams, }: {
    teams: {
        name: string;
        logo: React$1.ElementType;
        plan: string;
    }[];
}): react_jsx_runtime.JSX.Element;

type ConfirmDialogProps = AlertDialogProps & {
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
    confirmDescription?: ConfirmDialogProps["description"];
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
    ({ resource, recordItemId, hideText, accessControl, meta, onClick, children, ...props }: EditButtonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const ListButton: {
    ({ resource: resourceNameFromProps, hideText, accessControl, meta, children, onClick, ...props }: ListButtonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const RefreshButton: {
    ({ resource, recordItemId, hideText, dataProviderName, children, ...props }: RefreshButtonProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const SaveButton: FC<SaveButtonProps>;

declare const ShowButton: {
    ({ resource: resourceNameFromProps, recordItemId, hideText, accessControl, meta, children, onClick, ...props }: ShowButtonProps): react_jsx_runtime.JSX.Element;
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

export { AddCardForm, AppSidebar, CreateButton, CreatePage, DeleteButton, EditButton, EditPage, Field, Form, ImagePreviewCell, Link, List, ListButton, NavMain, NavProjects, NavRefine, NavUser, PageHeader, RefreshButton, SaveButton, Show, ShowButton, TeamSwitcher };
