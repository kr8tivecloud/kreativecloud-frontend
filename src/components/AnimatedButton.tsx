import React from "react";
import Link, { LinkProps } from "next/link";

type ButtonVariants = "button" | "link";

type CommonProps = {
  variant?: ButtonVariants;
  className?: string;
  children: React.ReactNode;
  type?: "outline" | "solid";
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & {
    variant?: "button";
  };

type LinkPropsWithHref = Omit<LinkProps, "href"> & {
  href: string;
} & CommonProps & {
    variant: "link";
  };

type Props = ButtonProps | LinkPropsWithHref;

export const AnimatedButton: React.FC<Props> = (props) => {
  const {
    variant = "button",
    className,
    children,
    type = "outline",
    ...rest
  } = props;

  const baseStyles =
    "font-bold text-sm transition-colors p-4 ease-in-out duration-300";

  const typeStyles =
    type === "outline"
      ? "bg-transparent text-white border-2 border-white hover:bg-white hover:text-black"
      : "bg-white text-black hover:bg-[#C0C0C0] hover:border-none";

  if (variant === "link") {
    const { href } = rest as LinkPropsWithHref;
    return (
      <Link
        {...(rest as LinkPropsWithHref)}
        href={href}
        className={`${baseStyles} ${typeStyles} ${className}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        {...(rest as ButtonProps)}
        className={`${baseStyles} ${typeStyles} ${className}`}
      >
        {children}
      </button>
    );
  }
};
