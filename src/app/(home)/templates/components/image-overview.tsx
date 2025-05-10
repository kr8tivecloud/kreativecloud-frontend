"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import {
  templateImage,
  acuity1,
  socialMedia1,
} from "../../../../../public/images";

const overviewImages: StaticImageData[] = [
  templateImage,
  socialMedia1, // Assuming these are placeholders and would be different images
  acuity1,
];

const GAP_SIZE = 12; // Corresponds to `gap-3` (0.75rem * 16px/rem)

export default function ImageOverview() {
  const [currentTranslateX, setCurrentTranslateX] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  // State for the currently displayed large image and its index
  const [selectedImage, setSelectedImage] = useState<StaticImageData>(
    overviewImages[0]
  );
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleOverviewImageClick = (image: StaticImageData, index: number) => {
    setSelectedImage(image);
    setActiveIndex(index);
  };

  const updateScrollability = useCallback(() => {
    if (scrollContainerRef.current && itemsContainerRef.current) {
      const containerWidth = scrollContainerRef.current.offsetWidth;
      const contentWidth = itemsContainerRef.current.scrollWidth;

      setCanScrollPrev(currentTranslateX < 0);
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
        if (currentTranslateX !== 0) {
          setCurrentTranslateX(0);
        }
        setCanScrollPrev(false);
        setCanScrollNext(false);
      } else {
        updateScrollability();
      }
    };

    handleResizeOrBreakpointChange();
    mql.addEventListener("change", handleResizeOrBreakpointChange);
    window.addEventListener("resize", handleResizeOrBreakpointChange);

    return () => {
      mql.removeEventListener("change", handleResizeOrBreakpointChange);
      window.removeEventListener("resize", handleResizeOrBreakpointChange);
    };
  }, [currentTranslateX, updateScrollability]);

  // Effect to update scrollability whenever currentTranslateX changes
  useEffect(() => {
    updateScrollability();
  }, [currentTranslateX, updateScrollability]);

  const getScrollStep = useCallback(() => {
    if (
      itemsContainerRef.current &&
      itemsContainerRef.current.children.length > 0
    ) {
      const firstItem = itemsContainerRef.current.children[0] as HTMLElement;
      return firstItem.offsetWidth + GAP_SIZE;
    }
    return 128 + GAP_SIZE; // Fallback: min item width (128px from md:grid-cols) + gap
  }, []);

  const handleNext = () => {
    if (!scrollContainerRef.current || !itemsContainerRef.current) return;

    const containerWidth = scrollContainerRef.current.offsetWidth;
    const contentWidth = itemsContainerRef.current.scrollWidth;
    const scrollStep = getScrollStep();

    if (contentWidth <= containerWidth) {
      setCurrentTranslateX(0);
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
        src={selectedImage}
        alt={`Selected template image ${activeIndex + 1}`}
        width={660}
        height={561}
        className="w-full object-cover md:aspect-square"
        priority // Prioritize the main image
      />

      {/* OVERVIEW IMAGES */}
      <div className="flex gap-x-4 items-stretch mt-4">
        {/* PREV CONTROL */}
        <button
          onClick={handlePrev}
          disabled={!canScrollPrev}
          className="px-2 hover:bg-white/5 hover:scale-110 transition-all duration-150 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed md:hidden"
          aria-label="Previous overview image"
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
              const isActive = index === activeIndex;
              return (
                <div
                  key={index}
                  className={`relative max-md:shrink-0 cursor-pointer group focus-within:ring-2 focus-within:ring-white outline-none ${
                    isActive
                      ? "border-2 border-white" // Active state: white border
                      : "after:absolute after:inset-0 after:bg-black/20 group-hover:after:bg-black/5 transition-colors" // Inactive state: overlay, hover effect
                  }`}
                  onClick={() => handleOverviewImageClick(image, index)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      handleOverviewImageClick(image, index);
                    }
                  }}
                  tabIndex={0} // Make it focusable
                  role="button"
                  aria-label={`Select image ${index + 1}`}
                  aria-pressed={isActive}
                >
                  <Image
                    src={image}
                    alt={`Overview image ${index + 1}`}
                    width={80} // Intrinsic width for aspect ratio calculation
                    height={80} // Intrinsic height for aspect ratio calculation
                    className="w-full max-md:size-20 h-32 object-cover"
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
          aria-label="Next overview image"
        >
          <FaChevronRight />
        </button>
        {/* END NEXT CONTROL */}
      </div>
      {/* END OVERVIEW IMAGES */}
    </div>
  );
}
