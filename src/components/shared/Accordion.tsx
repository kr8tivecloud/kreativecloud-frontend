"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { ComponentProps, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = ({
  title,
  children,
  openIcon,
  closeIcon,
  className,
}: ComponentProps<"div"> & {
  title: string;
  children: React.ReactNode;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "h-fit shadow-lg rounded-lg py-3 xs:py-4 lg:py-6 px-4 lg:px-6 flex flex-col gap-2.5 xs:gap-4 cursor-pointer",
        isOpen ? "border-secondary" : "",
        className
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <h1 className="font-semibold text-sm sm:text-base xl:text-lg text-text-200 dark:text-text-400">
          {title}
        </h1>
        <div className="bg-primary rounded-md p-1 xs:p-1.5 text-base sm:text-lg text-white">
          {!isOpen ? closeIcon || <FiPlus /> : openIcon || <FiMinus />}
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
            <div className="text-xs sm:text-sm xl:text-base">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
