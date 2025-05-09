"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { templateImage } from "../../../../../public/images";

const overviewImages = [
  templateImage,
  templateImage,
  templateImage,
  templateImage,
  templateImage,
  templateImage,
];

const GAP_SIZE = 12; // Corresponds to `gap-3` (0.75rem * 16px/rem)

export default function ImageOverview() {
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateScrollability = useCallback(() => {
    if (scrollContainerRef.current && itemsContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const contentWidth = itemsContainerRef.current.scrollWidth;

      setCanScrollPrev(currentTranslateX < 0);
      // Can scroll next if content is wider than container and not at the very end
      // currentTranslateX is 0 or negative.
      // We can scroll next if currentTranslateX > (containerWidth - contentWidth)
      // (containerWidth - contentWidth) is the max negative translation.
      // Add a small epsilon for floating point comparisons.
      setCanScrollNext(
        contentWidth > containerWidth &&
          currentTranslateX > containerWidth - contentWidth + 0.1
      );
    } else {
      setCanScrollPrev(false);
      setCanScrollNext(false);
    }
  }, [currentTranslateX]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)"); // Tailwind's md breakpoint

    const handleResizeOrBreakpointChange = () => {
      if (mql.matches) {
        // Screen is md or wider
        if (currentTranslateX !== 0) {
          setCurrentTranslateX(0); // Reset translation
        }
        // At md, layout is grid, scroll buttons are hidden.
        // Explicitly set scrollability to false.
        setCanScrollPrev(false);
        setCanScrollNext(false);
      } else {
        // Screen is smaller than md
        // updateScrollability will correctly set canScrollPrev/Next
        // based on currentTranslateX and dimensions.
        updateScrollability();
      }
    };

    // Initial setup
    handleResizeOrBreakpointChange();

    // Listen for breakpoint changes
    mql.addEventListener("change", handleResizeOrBreakpointChange);
    // Listen for general resize events
    window.addEventListener("resize", handleResizeOrBreakpointChange);

    return () => {
      mql.removeEventListener("change", handleResizeOrBreakpointChange);
      window.removeEventListener("resize", handleResizeOrBreakpointChange);
    };
  }, [currentTranslateX, updateScrollability]);

  const getScrollStep = useCallback(() => {
    if (
      itemsContainerRef.current &&
      itemsContainerRef.current.children.length > 0
    ) {
      const firstItem = itemsContainerRef.current.children[0] as HTMLElement;
      // Use the width of the first item as a basis for the scroll step
      return firstItem.offsetWidth + GAP_SIZE;
    }
    // Fallback: min item width + gap
    return 128 + GAP_SIZE;
  }, []);

  const handleNext = () => {
    if (!scrollContainerRef.current || !itemsContainerRef.current) return;

    const containerWidth = scrollContainerRef.current.offsetWidth;
    const contentWidth = itemsContainerRef.current.scrollWidth;
    const scrollStep = getScrollStep();

    if (contentWidth <= containerWidth) {
      setCurrentTranslateX(0); // Should not scroll if content fits
      return;
    }

    const maxNegativeTranslateX = containerWidth - contentWidth;
    let newTranslateX = currentTranslateX - scrollStep;

    if (newTranslateX < maxNegativeTranslateX) {
      newTranslateX = maxNegativeTranslateX;
    }
    setCurrentTranslateX(newTranslateX);
  };

  const handlePrev = () => {
    const scrollStep = getScrollStep();
    let newTranslateX = currentTranslateX + scrollStep;

    if (newTranslateX > 0) {
      newTranslateX = 0;
    }
    setCurrentTranslateX(newTranslateX);
  };
  return (
    <div>
      <Image
        src={templateImage}
        alt="Template image"
        width={660}
        height={561}
        className="w-full"
      />

      {/* OVERVIEW IMAGES */}
      <div className="flex gap-x-4 items-stretch mt-4">
        {/* Added mt-4 here as it was on the inner div */}
        {/* PREV CONTROL */}
        <button
          onClick={handlePrev}
          disabled={!canScrollPrev}
          className="px-2 hover:bg-white/5 hover:scale-110 transition-all duration-150 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed md:hidden"
        >
          <FaChevronLeft />
        </button>
        {/* END PREV CONTROL */}
        {/* MAIN IMAGES */}
        <div className="overflow-hidden flex-grow" ref={scrollContainerRef}>
          <div
            ref={itemsContainerRef}
            className="flex md:grid md:grid-cols-[repeat(auto-fill,minmax(128px,1fr))] gap-3 transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(${currentTranslateX}px)` }}
          >
            {overviewImages.map((image, index) => {
              return (
                <div
                  key={index}
                  className="relative max-md:shrink-0 after:absolute after:inset-0 after:bg-black/20"
                  // style={{ minWidth: '128px' }} // Ensure items have a min-width for calculation if needed
                >
                  {/* TODO: MAKE THE CURRENT ACTIVE OVERVIEW IMAGE HAVE A BORDER AND NO OVERLAY */}
                  <Image
                    src={image}
                    alt={`Overview image ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-32 object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>
        {/* END MAIN IMAGES */}
        {/* NEXT CONTROL */}
        <button
          onClick={handleNext}
          disabled={!canScrollNext}
          className="px-2 hover:bg-white/5 hover:scale-110 transition-all duration-150 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed md:hidden"
        >
          <FaChevronRight />
        </button>
        {/* END NEXT CONTROL */}
      </div>
      {/* END OVERVIEW IMAGES */}
    </div>
  );
}
