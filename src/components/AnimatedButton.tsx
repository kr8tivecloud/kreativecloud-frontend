import React, { useRef } from "react";
import Link, { LinkProps } from "next/link";
import { motion, useInView } from "motion/react";
import { zoomIn } from "@/lib/motion";

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
  href: string;
} & CommonProps & {
    variant: "link";
  };

type Props = ButtonProps | LinkPropsWithHref;

export const AnimatedButton: React.FC<Props> = (props) => {
  const { variant = "button", className, children, ...rest } = props;
  const { href } = rest as LinkPropsWithHref;
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });

  const baseHoverStyles =
    "transition-transform duration-300 ease-in-out hover:scale-110 active:scale-90";

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      variants={zoomIn(0.2, 0.5)}
      className=""
    >
      {variant === "link" && (
        <Link {...(rest as LinkPropsWithHref)} href={href}>
          <div className={`font-bold text-sm ${baseHoverStyles} ${className}`}>
            {children}
          </div>
        </Link>
      )}

      {variant === "button" && (
        <button
          {...(rest as ButtonProps)}
          className={`font-bold text-sm ${baseHoverStyles} ${className}`}
        >
          {children}
        </button>
      )}
    </motion.div>
  );
};
