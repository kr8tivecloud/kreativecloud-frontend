"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { ComponentProps, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import classNames from "classnames";

const Accordion = ({
  title,
  children,
  openIcon,
  closeIcon,
  className,
  titleBorder = false,
}: ComponentProps<"div"> & {
  title: string;
  children: React.ReactNode;
  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  titleBorder?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "h-fit shadow-lg rounded-lg p-2.5 pr-0.5 flex flex-col gap-2.5 xs:gap-4 cursor-pointer",
        isOpen ? "border-secondary" : "",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-3",
          titleBorder && "border-b border-b-[#8C8C8C]"
        )}
      >
        <h1
          className={classNames({
            "text-sm sm:text-base xl:text-lg text-text-200 dark:text-text-400":
              true,
            "font-semibold": isOpen,
          })}
        >
          {title}
        </h1>
        <div className="bg-primary rounded-md p-1 xs:p-1.5 text-base sm:text-lg text-white">
          {!isOpen ? closeIcon || <FiPlus /> : openIcon || <FiMinus />}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            layout // Add layout prop for smoother height animation
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }} // Add easing
            className="overflow-hidden" // overflow-hidden is important for height: 0 to work
          >
            {/* Added a padding to the content wrapper for better spacing during animation */}
            <div className="text-xs sm:text-sm xl:text-base pt-1 pb-2 pr-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
