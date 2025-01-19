import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type PaginationProps = {
  current: number;
  noOfPages: number;
  onNext: () => void;
  onPrev: () => void;
  gotoPage: (page: number) => void;
};

export default function Pagination({ current, noOfPages }: PaginationProps) {
  const itemsToShow = noOfPages <= 5 ? noOfPages : 5;
  return (
    <div className="flex justify-center items-center gap-x-2">
      <button
        className="bg-black border-2 border-white/25 size-9 rounded-full grid place-items-center text-sm text-[#9F9F9F] disabled:text-[#B7B7B7] "
        disabled={current === 1}
      >
        <FaArrowLeft />
      </button>
      {Array.from({ length: itemsToShow }).map((_, index) => {
        return (
          <button
            key={index}
            className="bg-black border-2 border-white/25 size-9 rounded-full grid place-items-center text-sm text-[#9F9F9F] disabled:text-[#B7B7B7] "
            disabled={current === index + 1}
          >
            {index + 1}
          </button>
        );
      })}
      <button
        className="bg-black border-2 border-white/25 size-9 rounded-full grid place-items-center text-sm text-[#9F9F9F] disabled:text-[#B7B7B7] "
        disabled={current === noOfPages}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}
