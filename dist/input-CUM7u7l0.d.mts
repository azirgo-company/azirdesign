import * as React$1 from 'react';
import { ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_dist_types from 'class-variance-authority/dist/types';
import { VariantProps } from 'class-variance-authority';

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

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    icon?: React$1.ReactElement<SVGSVGElement>;
}
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & ButtonProps & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): react_jsx_runtime.JSX.Element;

interface InputProps extends Omit<React$1.ComponentProps<"input">, "onChange"> {
    float?: boolean;
    onChange?: (event: React$1.ChangeEvent<HTMLInputElement>) => void;
}
declare function Input({ className, type, float, onChange, ...props }: InputProps): react_jsx_runtime.JSX.Element;

export { Button as B, Input as I, type PageHeaderProps as P, type ButtonProps as a, buttonVariants as b };
