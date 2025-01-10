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
          className="absolute inset-0 bg-black/10 flex items-center justify-center"
          variants={overlayVariants}
          initial="initial"
          whileInView="inView"
        >
          <div className="text-white text-center">
            <p className="text-5xl font-sans xl:leading-[60px]">
              {overlayText}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MiddleSection;
