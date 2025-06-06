"use client";

import React, { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animationVariants/contentVariant";
import {
  imageVariants,
  itemVariants,
} from "@/lib/animationVariants/entreprenuerVariant";
import { SocialLink } from "@/lib/types";

const TypewriterText = ({
  text,
  animate = true,
}: {
  text: string;
  animate?: boolean;
}) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!animate) {
      setDisplayText(text);
      return;
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 80); // Adjust speed here

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, animate]);

  return (
    <motion.div
      className="text-4xl lg:text-5xl xl:text-6xl leading-[50px] lg:leading-[70px] xl:leading-[80px] font-sans w-[80%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayText}
      {animate && currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </motion.div>
  );
};

type HeroProps = {
  bgImage: StaticImageData;
  title: string;
  subtitle: string;
  socialLinks: SocialLink[];
  websiteLink: string;
};

const Hero: React.FC<HeroProps> = ({
  bgImage,
  title,
  subtitle,
  socialLinks,
  websiteLink,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // 768px is the md breakpoint
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row items-center gap-6 pt-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="relative w-full md:w-1/2 aspect-[671/831]"
        variants={imageVariants}
      >
        <Image
          src={bgImage}
          alt="hero Image"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </motion.div>

      <div className="sm:pl-5 lg:pl-10 w-full md:w-1/2 flex flex-col gap-4">
        <TypewriterText text={title} animate={!isMobile} />

        <motion.p variants={itemVariants}>{subtitle}</motion.p>

        <motion.div className="" variants={itemVariants}>
          <ul className="inline-flex gap-x-2 md:gap-x-4">
            {socialLinks.map((link, index) => (
              <motion.li
                className="cursor-pointer"
                key={`${link.href}-${index}`}
              >
                <Image
                  src={link.Icon}
                  alt={`${index} social link`}
                  width={24}
                  height={24}
                  className="w-4 h-4 md:w-6 md:h-6"
                />
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.a
          href={websiteLink}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-fit bg-transparent text-black hover:bg-[#C0C0C0] bg-white border-white font-bold text-sm font-sans py-3.5 md:py-4 px-5 md:px-6"
        >
          VISIT WEBSITE
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Hero;
