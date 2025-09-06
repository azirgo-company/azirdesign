import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import { ReactElement, AnchorHTMLAttributes } from 'react';
import { FieldValues, FieldPath, UseControllerProps, ControllerRenderProps } from 'react-hook-form';
import { P as PageHeaderProps } from './input-CUM7u7l0.js';
export { B as Button, a as ButtonProps, I as Input, b as buttonVariants } from './input-CUM7u7l0.js';
import 'class-variance-authority/dist/types';
import 'class-variance-authority';

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

type ImagePreviewCellProps = {
    src: string;
    alt?: string;
    thumbnailSize?: number;
};
declare const ImagePreviewCell: ({ src, alt, thumbnailSize, }: ImagePreviewCellProps) => react_jsx_runtime.JSX.Element;

declare const Link: React$1.ForwardRefExoticComponent<AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean;
} & React$1.RefAttributes<HTMLAnchorElement>>;

declare const PageHeader: ({ extra, children, className, title, subTitle, isBack, ...props }: PageHeaderProps) => react_jsx_runtime.JSX.Element;

declare function Breadcrumb({ ...props }: React$1.ComponentProps<"nav">): react_jsx_runtime.JSX.Element;
declare function BreadcrumbList({ className, ...props }: React$1.ComponentProps<"ol">): react_jsx_runtime.JSX.Element;
declare function BreadcrumbItem({ className, ...props }: React$1.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
declare function BreadcrumbLink({ asChild, className, ...props }: React$1.ComponentProps<"a"> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function BreadcrumbPage({ className, ...props }: React$1.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function BreadcrumbSeparator({ children, className, ...props }: React$1.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
declare function BreadcrumbEllipsis({ className, ...props }: React$1.ComponentProps<"span">): react_jsx_runtime.JSX.Element;

declare function Card({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function cn(...args: any[]): string;

export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Card, Field, ImagePreviewCell, Link, PageHeader, Skeleton, cn };
