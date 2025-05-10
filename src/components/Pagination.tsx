"use client";

import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion"; // Import motion
import { cn } from "@/lib/utils";

type PaginationProps = {
  current: number;
  noOfPages: number;
  onNext: () => void;
  onPrev: () => void;
  gotoPage: (page: number) => void;
};

export default function Pagination({
  current,
  noOfPages,
  onNext,
  onPrev,
  gotoPage,
}: PaginationProps) {
  const itemsToShow = noOfPages <= 5 ? noOfPages : 5;

  // Base Tailwind classes for all buttons, includes original disabled styling
  const buttonBaseClass =
    "bg-black border-2 border-white/25 size-9 rounded-full grid place-items-center text-sm text-[#9F9F9F] disabled:text-[#B7B7B7]";

  // Animation properties for interactive (non-disabled) buttons
  const interactiveButtonProps = {
    whileHover: {
      scale: 1.05,
      backgroundColor: "rgba(255, 255, 255, 0.08)", // Subtle background highlight on hover
      borderColor: "rgba(255, 255, 255, 0.4)", // Slightly more visible border on hover
    },
    whileTap: { scale: 0.95 },
    transition: { type: "spring", stiffness: 300, damping: 15 },
  };

  // Animation variants for the main container's entry
  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="flex justify-center items-center gap-x-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        className={`${buttonBaseClass} disabled:cursor-not-allowed`} // Add cursor style for disabled
        disabled={current === 1}
        onClick={onPrev}
        {...(current !== 1 ? interactiveButtonProps : {})} // Apply animations only if not disabled
      >
        <FaArrowLeft />
      </motion.button>

      {Array.from({ length: itemsToShow }).map((_, index) => {
        const pageNumber = index + 1;
        const isCurrentPage = current === pageNumber;

        return (
          <motion.button
            key={pageNumber}
            className={cn(
              buttonBaseClass,
              isCurrentPage
                ? "bg-white text-black border-white" // Active page: distinct style
                : "" // No additional classes for non-active page numbers beyond base + hover animations
            )}
            // The `disabled` attribute makes the button non-interactive.
            // If `isCurrentPage` is true, it's disabled.
            // The `buttonBaseClass` includes `disabled:text-[#B7B7B7]`.
            // The active page styles (`bg-white text-black`) will override this for text color.
            disabled={isCurrentPage}
            onClick={() => gotoPage(pageNumber)} // This won't fire if disabled (i.e., isCurrentPage is true)
            {...(!isCurrentPage ? interactiveButtonProps : {})} // Apply animations only if not the current page
          >
            {pageNumber}
          </motion.button>
        );
      })}

      <motion.button
        className={`${buttonBaseClass} disabled:cursor-not-allowed`} // Add cursor style for disabled
        disabled={current === noOfPages}
        onClick={onNext}
        {...(current !== noOfPages ? interactiveButtonProps : {})} // Apply animations only if not disabled
      >
        <FaArrowRight />
      </motion.button>
    </motion.div>
  );
}
