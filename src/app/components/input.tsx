import type React from "react";
import { tv } from "tailwind-variants";
import { cn } from "../utils/cn";

export const inputVariants = tv(
  {
    base: `input text-color-text-dark rounded-lg bg-basic-white border border-solid border-color-border-dark transition-colors relative text-left
    placeholder:text-color-text-muted
    focus-visible:outline-none focus-visible:border-color-focus focus-visible:shadow-input-focus-visible
    [&:has(input:focus-visible)]:outline-none [&:has(input:focus-visible)]:border-color-focus [&:has(input:focus-visible)]:shadow-input-focus-visible
    disabled:opacity-50 disabled:cursor-not-allowed [.input-group_&]:bg-transparent
    [&:has(~_.input-right-element)]:pr-8 [&:has(~_.input-left-element)]:pl-8 [appearance:textfield]`,
    variants: {
      size: {
        sm: "h-9 min-w-[12.5rem] w-full py-2 px-2.5 text-sm",
        md: "h-11 min-w-[12.5rem] w-full py-2.5 px-3 text-base",
        lg: "h-14 min-w-[12.5rem] w-full py-4 px-3 text-base",
      },
      error: {
        true: "border-color-red focus-visible:border-color-focus [&:has(input:focus-visible)]:border-color-focus",
        false: "",
      },
    },
    defaultVariants: {
      size: "md",
      error: false,
    },
  },
);

export type GroupProps = React.InputHTMLAttributes<HTMLDivElement>

function Group({ children, className, ...props }: GroupProps) {
  return (
    <div className={cn("relative bg-basic-white input-group", className)} {...props}>
      {children}
    </div>
  );
}

export type LeftElementProps = React.InputHTMLAttributes<HTMLDivElement>

function LeftElement({ children, className, ...props }: LeftElementProps) {
  return (
    <div
      className={cn(
        "input-left-element [&~.input]:pl-8 absolute top-0 left-1 bottom-0 w-[30px] flex items-center justify-center ",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type RightElementProps = React.HTMLAttributes<HTMLDivElement>

function RightElement({ children, className, ...props }: RightElementProps) {
  return (
    <div
      className={cn(
        "input-right-element [&~.input]:pr-8 absolute top-0 right-1 bottom-0 w-[30px] flex items-center justify-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export type FieldProps = React.InputHTMLAttributes<HTMLDivElement>

function Field({ children, className, ...props }: FieldProps) {
  return (
    <div className={cn(className)} {...props}>
      {children}
    </div>
  );
}

export type LabelProps = React.InputHTMLAttributes<HTMLLabelElement>

function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={cn("font-semibold text-sm text-color-text-dark-lighter mb-1 block", className)} {...props}>
      {children}
    </label>
  );
}

export const messageVariants = tv({
  base: `text-xs text-color-text-muted-darker mt-0.5 block`, variants: {
    error: {
      true: "text-red-600 font-semibold",
      false: "",
    },
  },
  defaultVariants: {
    error: false,
  },
});

export interface MessageProps extends React.InputHTMLAttributes<HTMLParagraphElement> {
  error?: boolean;
}

function Message({ children, error = false, className, ...props }: MessageProps) {
  return (
    <p className={cn(messageVariants({ error, className }))} {...props}>
      {children}
    </p>
  );
}

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  variantSize?: "sm" | "md" | "lg";
  unstyled?: boolean;
  ref?: React.Ref<HTMLInputElement>;
}

function Root({ className, type, error, variantSize, unstyled, ref, ...props }: Props) {


  return (
    <input
      className={unstyled ? cn("outline-none", className) : cn(inputVariants({ error, size: variantSize, className }))}
      type={type}
      {...props}
      ref={ref}
    />
  );
}

export const Input = {
  Root,
  Group,
  LeftElement,
  RightElement,
  Field,
  Label,
  Message,
};


