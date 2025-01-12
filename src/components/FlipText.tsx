import React from "react";
import { motion, Variants } from "motion/react";

type FlipTextProps = {
  text: string | undefined;
};

const flipVariants: Variants = {
  initial: {
    y: 0,
  },
  hovered: (state: "rest" | "animated") => ({
    y: "-100%",
    transition: {
      //   bounce: 0.1,
      velocity: 60,
      delay: 0.2,
      //   ease: "easeInOut",
    },
    opacity: state === "rest" ? 1 : 0.8,
  }),
};

export default function FlipText({ text }: FlipTextProps) {
  return (
    <motion.div
      initial="initial"
      whileHover={"hovered"}
      className="whitespace-nowrap relative overflow-hidden text-white h-[1.1em]"
    >
      {/* RESTING STATE */}
      <motion.div custom={"rest"} variants={flipVariants}>
        {text}
      </motion.div>
      {/* END RESTING STATE */}

      {/* ANIMATED STATE */}
      <motion.div custom={"animated"} variants={flipVariants} className="">
        {text}
      </motion.div>
      {/* END ANIMATED STATE */}
    </motion.div>
  );
}
