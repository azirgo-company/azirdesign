import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import { ReactElement, AnchorHTMLAttributes } from 'react';
import { FieldValues, FieldPath, UseControllerProps, ControllerRenderProps } from 'react-hook-form';
import { P as PageHeaderProps } from './input-Cg7xjffp.js';
export { B as Button, a as ButtonProps, I as Input, b as buttonVariants } from './input-Cg7xjffp.js';
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

declare const PageHeader: ({ extra, children, className, title, subTitle, isBack, reloadId, reloadInvalidates, showReloadButton, ...props }: PageHeaderProps) => react_jsx_runtime.JSX.Element;

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
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;

type ImageInputProps = {
    value?: string | null;
    onChange: (url: string | null) => void;
    label?: string;
    disabled?: boolean;
    uploadUrl?: string;
    cropSize?: number;
    formFieldName?: string;
    className?: string;
};
declare function ImageInput({ value, onChange, label, disabled, uploadUrl, cropSize, formFieldName, className, }: ImageInputProps): react_jsx_runtime.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<"textarea">): react_jsx_runtime.JSX.Element;

declare function cn(...args: any[]): string;

export { Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Field, ImageInput, ImagePreviewCell, Link, PageHeader, Skeleton, Textarea, cn };
