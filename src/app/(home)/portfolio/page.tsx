"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { KreativeCloud } from "../../../../public/images";
import PortfolioItems from "./components/portfolio-items";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [animationEnded, setAnimationEnded] = React.useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const onLoad = () => {
      setPageLoaded(true);
    };

    // Check if document has already loaded
    if (document.readyState === "complete") {
      onLoad();
    } else {
      window.addEventListener("load", onLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener("load", onLoad);
    };
  }, []);

  useEffect(() => {
    let timer: number;
    if (pageLoaded) {
      timer = window.setTimeout(() => setStartAnimation(true), 300);
    }
    return () => window.clearTimeout(timer);
  }, [pageLoaded]);

  return (
    <div className="mt-32">
      {/* ENTRANCE OVERLAY */}
      {!animationEnded && (
        <motion.div
          data-start={startAnimation}
          initial={{
            opacity: 100,
          }}
          animate={
            startAnimation && {
              opacity: 0,
            }
          }
          transition={{
            delay: 1.5,
            duration: 0.3,
          }}
          onAnimationComplete={() => setAnimationEnded(true)}
          className="absolute inset-0 bg-[#FE922A] z-50"
        ></motion.div>
      )}
      {/* END ENTRANCE OVERLAY */}
      {/* TITLE */}
      <motion.div
        transition={{ duration: 0.5, ease: "easeOut" }}
        data-start={startAnimation}
        layout
        className="px-4 sm:container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 data-[start=true]:relative data-[start=true]:top-0 data-[start=true]:left-0 data-[start=true]:-translate-x-0 data-[start=true]:-translate-y-0"
      >
        <div className="text-2xl lg:text-3xl text-center max-w-[801px] mx-auto pt-10 pb-12">
          At{" "}
          <Image
            src={KreativeCloud}
            alt=""
            height={26}
            className="inline-block mb-1.5 h-[21px] lg:h-[26px]"
          />
          , we blend strategy and design to create works that innovates,
          connects, and empowers. Every project is a story. This is ours.
        </div>
      </motion.div>
      {/* END TITLE */}

      <PortfolioItems />
    </div>
  );
}
