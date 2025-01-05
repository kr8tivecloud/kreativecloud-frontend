"use client";
import { AnimatedButton } from "@/components/AnimatedButton";
import { SectionWrapper } from "@/lib/hoc";
import useNavigate from "@/lib/hooks/useNavigate";
import { textVariant } from "@/lib/motion";
import { useInView, motion } from "motion/react";
import { useRef } from "react";

const Heroarea = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="z-0  w-full relative flex justify-center items-center "
    >
      {/* <div
        className="absolute top-40 -inset-60 opacity-60 dark:opacity-40"
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
      /> */}
      <div className="inset-0 mx-auto flex items-center w-[90%] h-full pt-28 pb-48">
        <div className="flex flex-col gap-12">
          <motion.div
            variants={textVariant(0.05)}
            className="w-[90%] 2xs:w-[85%] xs:w-[80%] sm:w-[70%] lg:w-[65%] xl:w-[55%] flex flex-col gap-3 xs:gap-5 lg:gap-6"
          >
            <h1 className="text-[8rem] font-bold leading-[8.5rem]">
              We design. You grow <span className="animate-blink">!</span>
            </h1>
          </motion.div>

          <div className="flex items-center gap-8 ">
            <AnimatedButton
              className="bg-white text-black py-5 px-8 "
              variant="link"
              href="/contact"
            >
              GET IN TOUCH
            </AnimatedButton>
            <p className="text-[#FFFFFFB3] w-[20%] font-bold text-base">
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
