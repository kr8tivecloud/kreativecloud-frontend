"use client";

import React from "react";
import { motion } from "motion/react";

const DURATION = 0.25;
const STAGGER = 0.025;

type StaggeredFlipTextProps = {
  text: string | undefined;
};

export const StaggeredFlipText = ({ text }: StaggeredFlipTextProps) => {
  return (
    <motion.div
      initial="initial"
      whileInView="hovered"
      className="relative overflow-hidden whitespace-nowrap leading-[0.9em]"
    >
      <div>
        {text?.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {text?.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
