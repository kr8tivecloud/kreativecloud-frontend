"use client";
import { AnimatedButton } from "@/components/AnimatedButton";
import { SectionWrapper } from "@/lib/hoc";
import useNavigate from "@/lib/hooks/useNavigate";
import { textVariant } from "@/lib/motion";
import { motion } from "framer-motion";

const Heroarea = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full  flex justify-center items-center ">
      <div className="inset-0 mx-auto flex  items-center w-[90%] h-full pt-28 pb-48">
        <div className="flex flex-col gap-12">
          <motion.div
            variants={textVariant(0.05)}
            initial="hidden"
            animate="show"
            className="w-[90%] 2xs:w-[85%] xs:w-[80%] sm:w-[70%] lg:w-[65%] xl:w-[55%] flex flex-col gap-3 xs:gap-5 lg:gap-6"
          >
            <h1 className="text-[8rem] font-bold leading-[9rem]">
              We design. You grow!{" "}
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
    </div>
  );
};

export default SectionWrapper(Heroarea, "heroarea");
