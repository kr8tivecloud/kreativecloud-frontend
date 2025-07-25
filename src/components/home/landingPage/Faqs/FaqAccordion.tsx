"use client";

import { scaleVariants } from "@/lib/motion";
import { motion, AnimatePresence } from "framer-motion"; // Import useInView
import { useRef } from "react"; // Import useRef
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqAccordion = ({
  title,
  children,
  isOpen,
  onToggle,
  index,
  lastIndex,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  lastIndex: number;
}) => {
  const ref = useRef(null); // Create a ref

  return (
    <motion.div
      ref={ref} // Attach the ref
      // variants={scaleVariants}
      whileInView={scaleVariants.whileInView(0.8, index)}
      viewport={{ once: true }}
      onClick={onToggle}
      className={`w-full h-fit ${index === 0 ? "border-t" : ""} ${
        index !== lastIndex ? "border-b" : ""
      } border-[#4F4F4F] shadow-lg py-3 xs:py-4 lg:py-6 px-4 lg:px-6 flex flex-col gap-2.5 xs:gap-4 cursor-pointer`}
    >
      <div className="flex items-center justify-between gap-3">
        <h1 className="font-bold text-sm sm:text-base xl:text-lg">{title}</h1>
        <div className="bg-primary rounded-md p-1 xs:p-1.5 text-base sm:text-lg text-white">
          {!isOpen ? <FiPlus /> : <FiMinus />}
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-xs sm:text-sm xl:text-base">{children}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FaqAccordion;
