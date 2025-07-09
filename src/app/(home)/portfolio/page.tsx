"use client";

import Image from "next/image";
import React from "react";
import { KreativeCloud } from "../../../../public/images";
import PortfolioItems from "./components/portfolio-items";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  const [animationEnded, setAnimationEnded] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (typeof window !== "undefined") {
      timer = setTimeout(() => {
        setPageLoaded(true);
      }, 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <div className="mt-28">
      {/* ENTRANCE OVERLAY */}
      {!animationEnded && (
        <motion.div
          data-loaded={pageLoaded}
          initial={{
            opacity: 100,
          }}
          animate={
            pageLoaded && {
              opacity: 0,
            }
          }
          transition={{
            delay: 2,
            duration: 0.5,
          }}
          onAnimationComplete={() => setAnimationEnded(true)}
          className="absolute inset-0 bg-[#FE922A] z-50"
        ></motion.div>
      )}
      {/* END ENTRANCE OVERLAY */}
      {/* TITLE */}
      <motion.div
        transition={{ duration: 0.8, ease: "easeOut" }}
        data-loaded={pageLoaded}
        layout
        className="px-4 sm:container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 data-[loaded=true]:static data-[loaded=true]:top-0 data-[loaded=true]:left-0 data-[loaded=true]:-translate-x-0 data-[loaded=true]:-translate-y-0"
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
