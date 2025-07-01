import Image from "next/image";
import React from "react";
import { KreativeCloud } from "../../../../public/images";
import PortfolioItems from "./components/portfolio-items";

export default function PortfolioPage() {
  return (
    <div className="mt-28">
      {/* TITLE */}
      <div className="px-4 sm:container">
        <div className="text-2xl lg:text-3xl text-center max-w-[801px] mx-auto">
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
      </div>
      {/* END TITLE */}

      <PortfolioItems />
    </div>
  );
}
