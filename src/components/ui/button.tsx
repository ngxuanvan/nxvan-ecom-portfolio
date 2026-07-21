import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 text-sm font-semibold tracking-normal transition-[background,color,border,transform,box-shadow] duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#2563EB] text-white shadow-[0_18px_38px_-20px_rgba(37,99,235,0.95)] hover:-translate-y-0.5 hover:bg-[#1d4ed8] hover:shadow-[0_22px_48px_-22px_rgba(37,99,235,0.95)]",
        secondary:
          "border border-slate-200 bg-white text-[#0F1B33] shadow-[0_14px_34px_-26px_rgba(15,27,51,0.35)] hover:-translate-y-0.5 hover:border-[#2563EB]/40 hover:bg-blue-50/40 hover:text-[#2563EB]",
        ghost: "text-slate-600 hover:bg-slate-100 hover:text-[#0F1B33]",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
