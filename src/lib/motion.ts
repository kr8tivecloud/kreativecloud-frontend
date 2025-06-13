import { Variants } from "framer-motion";

type Direction = "left" | "right" | "up" | "down";
type AnimationType = "spring" | "tween";

export const textVariant = (
  delay: number,
  duration: number = 1.25
): Variants => {
  return {
    hidden: {
      y: -25,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
      },
    },
  };
};

export const fadeIn = (
  direction: Direction,
  type: AnimationType,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number): Variants => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const slideIn = (
  direction: Direction,
  type: AnimationType,
  delay: number,
  duration: number
): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = (
  staggerChildren: number,
  delayChildren: number
): Variants => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

export const scaleVariants = {
  whileInView: (duration: number = 0.5) => ({
    scaleX: [0, 1],
    opacity: [0, 1],
    transition: {
      duration,
      ease: "easeInOut",
    },
  }),
};

export const imageVariants = {
  zoomRotate: (
    customScale = 1.6,
    customRotate = -15,
    customDuration = 1.2
  ): Variants => ({
    initial: { scale: customScale, rotate: customRotate },
    whileInView: {
      scale: 1,
      rotate: 0,
      transition: { duration: customDuration, ease: "easeInOut" },
    },
  }),
};
