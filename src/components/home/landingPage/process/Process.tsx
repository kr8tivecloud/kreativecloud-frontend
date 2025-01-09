"use client";
import { AnimatedButton } from "@/components/AnimatedButton";
import { SectionWrapper } from "@/lib/hoc";
import { textVariant } from "@/lib/motion";
import { useInView, motion } from "motion/react";
import { useRef } from "react";
import Timeline from "./Timeline";

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="relative w-full flex justify-center items-center py-5 xs:py-10"
    >
      {/* <div className="absolute bottom-[-20%] left-[-10%] w-[60%] md:w-[40%] h-[60%] md:h-[40%] rounded-full opacity-30 md:opacity-20 blur-[120px] md:blur-[100px] bg-gradient-to-br from-[#00E6E6] to-[#00FF66]" />
      <div className="absolute top-[30%] right-[-10%] w-[60%] md:w-[40%] h-[60%] md:h-[40%] rounded-full opacity-30 md:opacity-20 blur-[120px] md:blur-[100px] bg-gradient-to-br from-[#FF1493] to-[#FF69B4]" /> */}

      <div className="absolute bottom-[-20%] left-[-10%] w-[40%] h-[40%] rounded-full opacity-20 blur-[100px] bg-gradient-to-br from-[#00E6E6] to-[#00FF66]" />
      <div className="absolute top-[30%] right-[-10%] w-[40%] h-[40%] rounded-full opacity-20 blur-[100px] bg-gradient-to-br from-[#FF1493] to-[#FF69B4]" />
      <div
        className="w-full px-4 sm:px-12 flex flex-col lg:flex-row-reverse gap-16 xl:gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          <motion.div
            variants={textVariant(0.1)}
            className="w-full 2xs:w-[80%] lg:w-[70%] flex flex-col items-start justify-start gap-2 xs:gap-2.5 md:gap-4"
          >
            <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
              Our Process{" "}
            </h1>
            <p className="text-sm font-bold text-[#9797A2]">
              Check out our easy process to bring your ideas to life.
            </p>
          </motion.div>

          <div className="flex">
            <AnimatedButton
              className="max-lg:hidden w-fit bg-transparent text-white border-2 border-white py-3.5 md:py-4 px-5 md:px-6"
              variant="link"
              href="/contact"
            >
              GET STARTED{" "}
            </AnimatedButton>
          </div>
        </div>

        <div className="w-full lg:w-[50%] flex gap-3 2xs:gap-4 xl:gap-6 h-full relative">
          <div className="w-full flex flex-col justify-center items-center">
            <Timeline />
          </div>{" "}
        </div>

        <div className="flex justify-center items-center">
          <AnimatedButton
            className="lg:hidden w-fit bg-transparent text-white border-2 border-white py-3.5 md:py-4 px-5 md:px-6"
            variant="link"
            href="/contact"
          >
            GET STARTED{" "}
          </AnimatedButton>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Process, "process");
