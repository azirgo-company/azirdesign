import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import { ReactElement, PropsWithChildren, DetailedHTMLProps, FormHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { RefineThemedLayoutV2SiderProps } from '@refinedev/ui-types';
import { FieldValues, FieldPath, UseControllerProps, ControllerRenderProps } from 'react-hook-form';

interface AddCardFormProps {
    user: {
        id: string;
        email: string;
    };
}
declare function AddCardForm({ user }: AddCardFormProps): react_jsx_runtime.JSX.Element;

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

declare const Link: React$1.ForwardRefExoticComponent<AnchorHTMLAttributes<HTMLAnchorElement> & React$1.RefAttributes<HTMLAnchorElement>>;

declare function NavMain({ items, }: {
    items: {
        title: string;
        url: string;
        icon?: any;
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
        icon: any;
    }[];
}): react_jsx_runtime.JSX.Element;

declare function NavRefine(): react_jsx_runtime.JSX.Element;

interface NavUserProps {
    className?: string;
}
declare function NavUser({ className }: NavUserProps): react_jsx_runtime.JSX.Element;

declare const PageHeader: ({ title, subTitle, isBack, extra, children, }: any) => react_jsx_runtime.JSX.Element;

declare function TeamSwitcher({ teams, }: {
    teams: {
        name: string;
        logo: React$1.ElementType;
        plan: string;
    }[];
}): react_jsx_runtime.JSX.Element;

export { AddCardForm, AppSidebar, Field, Form, ImagePreviewCell, Link, NavMain, NavProjects, NavRefine, NavUser, PageHeader, TeamSwitcher };
