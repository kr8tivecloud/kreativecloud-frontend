"use client";

import React, { ComponentProps, useEffect, useState } from "react";
import { motion, Variants } from "motion/react";

type MaskedCursorProps = {
  children: React.ReactNode;
};

type MaskedCursorPropsProps = {
  children: React.ReactNode;
};

const MaskedCursorContext = React.createContext({
  mouseEnter: () => {},
  mouseLeave: () => {},
});

export const MaskedCursorProvider = ({ children }: MaskedCursorPropsProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const mouseEnter = () => setIsHovered(true);
  const mouseLeave = () => setIsHovered(false);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      //   opacity: 0,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    text: {
      x: mousePosition.x,
      y: mousePosition.y,
      //   opacity: 1,
      backgroundColor: "white",
      mixBlendMode: "difference",
      scale: 3,
    },
  };

  return (
    <MaskedCursorContext.Provider value={{ mouseEnter, mouseLeave }}>
      {children}
      <motion.div
        variants={variants}
        animate={isHovered ? "text" : "default"}
        transition={{
          type: "tween",
          //   ease: "",
        }}
        className="bg-[#c3c3c3] size-8 rounded-full fixed top-0 left-0 pointer-events-none"
      ></motion.div>
    </MaskedCursorContext.Provider>
  );
};

const MaskedCursor = ({
  children,
  ...props
}: MaskedCursorProps & ComponentProps<"div">) => {
  const { mouseEnter: textEnter, mouseLeave: textLeave } =
    React.use(MaskedCursorContext);

  return (
    <>
      <div
        {...props}
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="relative"
      >
        {children}
      </div>
    </>
  );
};

export default MaskedCursor;
