"use client"; // Required for useState, useEffect, useRef

import { AnimatedButton } from "@/components/AnimatedButton";
import Image, { StaticImageData } from "next/image"; // Added StaticImageData
import React, { useState, useEffect, useRef } from "react"; // Added useState, useEffect, useRef
import {
  aboutMockup,
  cloudStartImage,
  cloudyBg,
  homeMockup,
  shopifyLogo,
} from "../../../../public/images";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
// import

interface Slide {
  id: string;
  title: string;
  image: StaticImageData;
  alt: string;
}

const slidesData: Slide[] = [
  { id: "home", title: "Home Page", image: homeMockup, alt: "Home Mockup" },
  { id: "about", title: "About Us", image: aboutMockup, alt: "About Mockup" },
  {
    id: "contact",
    title: "Contact",
    image: homeMockup,
    alt: "Contact Mockup (Using Home)",
  },
  {
    id: "shop",
    title: "Shop/Product Page",
    image: aboutMockup,
    alt: "Shop/Product Page Mockup (Using About)",
  },
  {
    id: "cart",
    title: "Cart Page",
    image: homeMockup,
    alt: "Cart Page Mockup (Using Home)",
  },
];

export default function ThemesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navItemsRowRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleNavItemClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const navItemsRow = navItemsRowRef.current;
    const scrollViewport = navItemsRow?.parentElement;

    if (navItemsRow && scrollViewport && navItemsRow.children[currentIndex]) {
      const activeItem = navItemsRow.children[currentIndex] as HTMLElement;

      const scrollViewportRect = scrollViewport.getBoundingClientRect();
      const activeItemRect = activeItem.getBoundingClientRect();

      // Calculate the scroll amount needed to center the active item
      const desiredScrollLeft =
        scrollViewport.scrollLeft + // Current scroll position
        (activeItemRect.left - scrollViewportRect.left) + // Item's offset from viewport's left edge
        activeItemRect.width / 2 - // Half of item's width (to get to item's center)
        scrollViewportRect.width / 2; // Half of viewport's width (to get to viewport's center)

      scrollViewport.scrollTo({
        left: desiredScrollLeft,
        behavior: "smooth",
      });
    }
  }, [currentIndex]); // Rerun when currentIndex changes

  return (
    <div className="pt-10 relative">
      {/* HERO  */}
      <div className="relative overflow-hidden">
        <div className="px-4 sm:container min-h-dvh pt-10 pb-32">
          <Image
            src={cloudyBg}
            alt=""
            className="absolute left-0 right-0 top-0 object-fill h-full w-full"
            style={{ objectFit: "cover" }}
            priority // Prioritize hero background
          />
          <div className="relative z-[1]">
            <Image
              src={shopifyLogo}
              alt=""
              className="mx-auto max-w-sm sm:max-w-md"
            />
            <h1 className="font-bold text-3xl sm:text-4xl text-center max-w-3xl mx-auto">
              A straightforward and professional theme designed
              specifically&nbsp;for <br />
              <span className="bg-gradient-to-r from-[#0051B8] via-[#0B2C3E] to-[#5ABA1D] bg-clip-text text-transparent">
                new brands and startups
              </span>
            </h1>
            <p className="text-sm sm:text-base mt-4 mx-auto text-center max-w-2xl">
              Best for startups, solopreneurs, and small businesses looking for
              a simple yet professional online presence without breaking the
              bank.
            </p>

            <div className="text-center my-5 space-y-2">
              <Image
                src={cloudStartImage}
                alt=""
                className="w-48 sm:w-72 mx-auto"
              />
              <p className="font-bold text-xl">Cloud Start</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <AnimatedButton variant="outline">DOWNLOAD NOW</AnimatedButton>
              <AnimatedButton variant="solid">VIEW LIVE DEMO</AnimatedButton>
            </div>
          </div>
        </div>
      </div>
      {/* END HERO */}

      {/* COPY */}
      <div className="px-4 sm:container py-10">
        <p className="font-bold text-3xl sm:text-4xl max-w-xl mx-auto text-center">
          Maximize your online impact —&nbsp;affordable, feature-packed, and
          powerful.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-10 max-w-3xl mx-auto mt-16 text-[#86868B] font-bold">
          <ul className="space-y-5">
            <li>
              <span className="text-white">Simple</span> and straightforward to
              use
            </li>
            <li>
              Extremely <span className="text-white">affordable</span> compared
              to most premium Shopify themes available.
            </li>
            <li>
              Clean, modern, and professional design{" "}
              <span className="text-white">ideal for new brands.</span>
            </li>
          </ul>
          <ul className="space-y-5">
            <li>
              <span className="text-white">SEO-ready</span> with essential meta
              tags for better visibility on search engines, helping you attract
              more customers
            </li>
            <li>
              Fully <span className="text-white">responsive</span>, ensuring
              seamless browsing experience across mobile, tablet, and desktop
              devices.
            </li>
          </ul>
        </div>
      </div>
      {/* END COPY */}

      {/* CLOUD START FEATURES */}
      <div className="mt-20 px-4 sm:container">
        <h2 className="font-bold text-2xl sm:text-4xl text-center bg-gradient-to-r from-[#0051B8] via-[#0B2C3E] to-[#5ABA1D] bg-clip-text text-transparent">
          Cloud Start Features
        </h2>

        {/* FEATURES SLIDER */}
        <div className="py-8">
          {/* Main container for the slider component */}
          {/* SLIDES DISPLAY */}
          <div className="overflow-hidden lg:w-3/5 mx-auto">
            {/* Container for the sliding images, defines width */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slidesData.map((slide, index) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  {" "}
                  {/* Each slide takes full width of the lg:w-3/5 container */}
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    className="w-full h-auto object-contain max-h-[500px] sm:max-h-[600px] md:max-h-[700px]" // Responsive max height
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
          {/* END SLIDES DISPLAY */}
          {/* NAVIGATION */}
          <div className="flex items-center gap-x-4 mx-auto max-w-3xl lg:max-w-4xl xl:max-w-5xl mt-8 px-2 sm:px-0">
            {/* PREV BUTTON */}
            <button
              onClick={handlePrev}
              className="p-3 text-xl sm:text-2xl text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Previous feature"
            >
              <FaChevronLeft />
            </button>
            {/* END PREV BUTTON */}

            {/* SLIDE NAVIGATION ITEMS */}
            {/* Ensure this parent div allows its child (navItemsRowRef) to overflow and be scrollable */}
            <div className="flex-grow overflow-x-auto whitespace-nowrap mx-auto border-[#86868B] scrollbar-hide max-w-min">
              <div
                ref={navItemsRowRef}
                className="text-[#86868B] font-medium text-base sm:text-lg my-3 sm:my-5 flex items-center gap-x-5 sm:gap-x-8 border-[#86868B] pb-2"
              >
                {slidesData.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => handleNavItemClick(index)}
                    className={`py-1 transition-colors duration-200 focus:outline-none whitespace-nowrap shrink-0 min-w-0 font-semibold ${
                      currentIndex === index
                        ? "text-white border-b-2 border-white"
                        : "hover:text-gray-300 focus:text-gray-200"
                    }`}
                  >
                    {slide.title}
                  </button>
                ))}
              </div>
            </div>
            {/* END SLIDE NAVIGATION ITEMS */}

            {/* NEXT BUTTON */}
            <button
              onClick={handleNext}
              className="p-3 text-xl sm:text-2xl text-gray-400 hover:text-white transition-colors rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Next feature"
            >
              <FaChevronRight />
            </button>
            {/* END NEXT BUTTON */}
          </div>
          {/* END NAVIGATION */}
        </div>
        {/* END FEATURES SLIDER */}

        <div className="text-center space-y-4 mt-20">
          <Image
            src={cloudStartImage}
            alt=""
            className="w-56 sm:w-72 mx-auto"
          />
          <AnimatedButton variant="solid">BUY</AnimatedButton>
          <p>Starts from $200</p>
        </div>
      </div>
      {/* END CLOUD START FEATURES */}
    </div>
  );
}
