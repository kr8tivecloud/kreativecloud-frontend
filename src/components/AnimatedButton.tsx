import React from "react";
import Link, { LinkProps } from "next/link";
import MaskedCursor from "./MaskedCursor";

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
        className={`font-bold text-sm transition-colors bg-white p-4 text-black outline outline-1 outline-white ${className}`}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <MaskedCursor>
        <button
          {...(rest as ButtonProps)}
          className={`font-bold text-sm transition-colors bg-white p-4 text-black outline outline-1 outline-white ${className}`}
        >
          {children}
        </button>
      </MaskedCursor>
    );
  }
};
