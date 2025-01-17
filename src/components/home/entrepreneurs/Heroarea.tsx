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
        className="w-full 2xs:w-[95%] md:w-[90%] lg:w-[75%] 2xl:w-[65%] 3xl:w-[60%] flex flex-col gap-3"
      >
        <h1 className="text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl font-bold">
          Dreamers, Doers, and Disruptors.{" "}
        </h1>
      </motion.div>
    </motion.div>
  );
};

export default SectionWrapper(Heroarea, "heroarea");
