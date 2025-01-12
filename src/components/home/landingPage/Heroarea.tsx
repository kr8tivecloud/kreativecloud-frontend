"use client";
import { AnimatedButton } from "@/components/AnimatedButton";
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
      className="relative w-full flex justify-center items-center "
    >
      <div
        className="absolute -top-80 -left-20 inset-[15rem] opacity-60 dark:opacity-40"
        style={{
          background: `
            radial-gradient(
              circle at center,
              #7CFEFDB2 0%,
              rgba(124, 254, 253, 0.4) 40%,
              rgba(124, 254, 253, 0.2) 60%,
              rgba(124, 254, 253, 0) 80%
            )
          `,
          filter: "blur(576.73px)",
          transform: "scale(1.1)",
        }}
      />
      <div className="z-10 w-[90%] lg:w-[85%] h-full  inset-0 mx-auto flex items-center justify-between">
        <div className="w-[90%] lg:w-[80%] py-40 flex flex-col gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          <motion.div
            variants={textVariant(0.1)}
            className="w-[90%] md:w-[85%] xl:w-[80%] flex flex-col gap-3"
          >
            <h1 className="text-[3rem] xs:text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[8rem] 2xl:text-[8rem] font-bold leading-[3.5rem] xs:leading-[4.5rem] sm:leading-[5.5rem] md:leading-[6.5rem] lg:leading-[7.5rem] xl:leading-[8rem] 2xl:leading-[8.5rem]">
              We design. You grow!
            </h1>
          </motion.div>

          <div className="w-full flex max-sm:flex-col-reverse sm:items-center gap-4 sm:gap-6 md:gap-8 ">
            <div className="flex">
              <AnimatedButton
                className="w-fit py-4 md:py-5 px-6 md:px-8 "
                as="link"
                href="/contact"
                variant="outline"
              >
                EXPLORE{" "}
              </AnimatedButton>
            </div>
            <p className="text-[#FFFFFFB3] w-[70%] xs:w-[60%] sm:w-[45%] md:w-[40%] xl:w-[30%] font-bold text-sm lg:text-base">
              Your all-in-one creative team. We provide everything your business
              needs to thrive.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Heroarea, "heroarea");
