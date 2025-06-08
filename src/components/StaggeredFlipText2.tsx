"use client";

import React from "react";
import { motion } from "motion/react";

interface StaggeredFlipText2Props {
  text: string;
  className?: string;
  duration?: number;
  staggerDelay?: number;
}

const StaggeredFlipText2: React.FC<StaggeredFlipText2Props> = ({
  text,
  className,
  duration = 0.3,
  staggerDelay = 0.05,
}) => {
  // Split text into characters, including handling spaces
  const characters = text
    .split("")
    .map((char) => (char === " " ? "\u00A0" : char)); // Replace spaces with non-breaking spaces
  return (
    <motion.div
      className={`relative inline-block overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: "100%" }}
          whileInView={{ y: "0%" }}
          transition={{
            delay: index * staggerDelay,
            duration: duration,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default StaggeredFlipText2;
