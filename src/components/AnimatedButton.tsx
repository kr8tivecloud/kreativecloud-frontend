import React from "react";
import Link, { LinkProps } from "next/link";

type ButtonVariants = "button" | "link";

type CommonProps = {
  variant?: ButtonVariants;
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & {
    variant?: "button";
  };

type LinkPropsWithHref = Omit<LinkProps, "href"> & {
  href: string; // Ensure href is required for links
} & CommonProps & {
    variant: "link";
  };

type Props = ButtonProps | LinkPropsWithHref;

export const AnimatedButton: React.FC<Props> = (props) => {
  const { variant = "button", className, children, ...rest } = props;

  if (variant === "link") {
    const { href } = rest as LinkPropsWithHref;
    return (
      <Link
        {...(rest as LinkPropsWithHref)}
        href={href}
        className={`font-bold text-sm hover:text-gray-300 transition-colors ${className}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        {...(rest as ButtonProps)}
        className={`font-bold text-sm hover:text-gray-300 transition-colors ${className}`}
      >
        {children}
      </button>
    );
  }
};
