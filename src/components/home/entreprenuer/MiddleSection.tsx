"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "motion/react";
import {
  textContainerVariants,
  textVariants,
  middleSectionImageVariants,
  overlayVariants,
} from "@/lib/animationVariants/entreprenuerVariant";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

type MiddleSectionProps = {
  title: string;
  subtitle: string;
  bgImage: StaticImageData;
  overlayText: string;
};

const MiddleSection: React.FC<MiddleSectionProps> = ({
  title,
  subtitle,
  bgImage,
  overlayText,
}) => {
  return (
    <div className="w-full flex flex-col gap-10">
      <motion.div
        className="md:text-center flex flex-col md:items-center gap-2"
        variants={textContainerVariants}
        initial="initial"
        whileInView="animate"
        // viewport={{ once: true, margin: "-50px" }}
      >
        <motion.p
          className="w-[90%] md:w-[45%] lg:w-[40%] xl:w-[45%] text-3xl lg:text-4xl xl:text-5xl leading-[40px] lg:leading-[50px] xl:leading-[60px] font-sans"
          variants={textVariants}
        >
          {title}
        </motion.p>
        <motion.p
          className="w-[95%] md:w-[50%] text-sm leading-[30px] md:leading-[25px] font-sans"
          variants={textVariants}
        >
          {subtitle}
        </motion.p>
      </motion.div>

      <motion.div
        className="relative w-full h-[600px]"
        variants={middleSectionImageVariants}
        initial="initial"
        whileInView="inView"
      >
        <Image
          src={bgImage}
          alt="Fashion Image"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={overlayVariants}
          initial="initial"
          whileInView="inView"
        >
          <div className="flex justify-center items-center relative w-full">
            <div className="flex items-start text-white text-center gap-1">
              <FaQuoteLeft className="text-white mt-1 lg:mt-1.5 xl:mt-2.5 w-2.5 md:w-3 h-2.5 md:h-3" />
              <p className="text-3xl md:text-4xl lg:text-5xl font-sans xl:leading-[60px]">
                {overlayText}
              </p>
              <FaQuoteRight className="text-white mt-1 lg:mt-1.5 xl:mt-2.5 w-2.5 md:w-3 h-2.5 md:h-3" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MiddleSection;
