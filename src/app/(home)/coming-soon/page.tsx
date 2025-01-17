"use client";

import CountdownTimer from "@/components/home/comingSoon";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

import Image from "next/image";
import { comingSoonBgImage } from "../../../../public/images/comingSoon";
import { useWindowSize } from "@/lib/hooks/useWindowSize";

const targetDate = process.env.NEXT_PUBLIC_COMMING_SOON_TARGET_DATE;

const ComingSoon = () => {
  return (
    <div className="relative w-full h-[calc(100vh-80px)] flex justify-center items-center">
      {/* Grid Container - now relative to parent height */}
      <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4 overflow-hidden">
        {/* for Desktop */}
        <Image
          src={comingSoonBgImage}
          alt="hero Image"
          fill
          className="object-cover hidden md:block"
          quality={100}
          priority
          style={{
            transform: "scale(1.6)", // Adjust scale value for zoom
            transformOrigin: "center", // Keep the zoom centered
          }}
        />

        {/* for mobile */}
        <Image
          src={comingSoonBgImage}
          alt="hero Image"
          fill
          className="object-cover block md:hidden"
          quality={100}
          priority
          style={{
            transform: "scale(2.5)", // Adjust scale value for zoom
            transformOrigin: "center", // Keep the zoom centered
          }}
        />
      </div>

      <motion.div
        variants={fadeIn("up", "spring", 0.5, 0.75)}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col gap-4 text-center"
      >
        <h1 className="text-4xl text-white font-semibold">Coming Soon!</h1>
        <CountdownTimer targetDate={targetDate!} />
      </motion.div>
    </div>
  );
};

export default ComingSoon;
