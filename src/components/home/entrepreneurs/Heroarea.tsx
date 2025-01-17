"use client";
import { SectionWrapper } from "@/lib/hoc";
import { textVariant } from "@/lib/motion";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const Heroarea = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="relative w-full flex"
    >
      <motion.div
        variants={textVariant(0.1)}
        className="w-full md:w-[90%] xl:w-[80%] flex flex-col gap-3"
      >
        <h1 className="text-6xl sm:text-7xl lg:text-8xl 2xl:text-9xl font-bold">
          Dreamers, Doers, and Disruptors.{" "}
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Heroarea, "heroarea");
