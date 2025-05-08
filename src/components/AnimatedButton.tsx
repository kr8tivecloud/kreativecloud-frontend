import React, { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonType = "button" | "link";

type CommonProps = {
  as?: ButtonType;
  className?: string;
  children: React.ReactNode;
  variant?: "outline" | "solid";
};

type ButtonProps = ComponentProps<"button"> &
  CommonProps & {
    as?: "button";
  };

type LinkPropsWithHref = ComponentProps<typeof Link> &
  CommonProps & {
    as: "link";
  };

type Props = ButtonProps | LinkPropsWithHref;

export const AnimatedButton: React.FC<Props> = (props) => {
  const {
    as = "button",
    className,
    children,
    variant = "outline",
    ...rest
  } = props;

  const baseStyles =
    "font-bold text-sm text-center transition-colors p-4 ease-in-out duration-300 border-2 border-white";

  const typeStyles =
    variant === "outline"
      ? "bg-transparent text-white hover:bg-white hover:text-black"
      : "bg-white text-black hover:bg-[#C0C0C0] hover:border-[#C0C0C0]";

  if (as === "link") {
    const { href } = rest as LinkPropsWithHref;
    return (
      <Link
        {...(rest as LinkPropsWithHref)}
        href={href}
        className={cn(`${baseStyles} ${typeStyles}`, className)}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        {...(rest as ButtonProps)}
        className={cn(`${baseStyles} ${typeStyles}`, className)}
      >
        {children}
      </button>
    );
  }
};
