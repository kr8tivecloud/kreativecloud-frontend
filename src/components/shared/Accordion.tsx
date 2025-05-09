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
          titleBorder && "border-b"
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
