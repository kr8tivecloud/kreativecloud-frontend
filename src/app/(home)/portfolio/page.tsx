"use client";

import React from "react";
import Image from "next/image";
import { AnimatedButton } from "@/components/AnimatedButton";
import StaggeredFlipText2 from "@/components/StaggeredFlipText2";
import ShimmerParagraph from "@/components/ShimmerParagraph";
import { motion, Variants } from "motion/react";
import BlackdiamondMock from "@/assets/images/portfolio/websites/blackdiamond.png";
import AtkinsMock from "@/assets/images/portfolio/websites/atkins-attire.png";
import MekkachiMock from "@/assets/images/portfolio/websites/mekkachi.png";
import GraphicsTemplate from "@/assets/images/portfolio/graphic-design/flyers_or_banners.png";
import SobSnlLogo from "@/assets/images/portfolio/graphic-design/sob-snl.webp";
import TmentalLogo from "@/assets/images/portfolio/graphic-design/t-mental.gif";
import GunThudLogo from "@/assets/images/portfolio/graphic-design/gun-thud.gif";
import Pagination from "@/components/Pagination";

const MotionImage = motion.create(Image);

const mockupImageVariants: Variants = {
  default: {
    opacity: 0,
    scale: 0.5,
  },
  inView: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
};

export default function PortfolioPage() {
  return (
    <div className="pt-28 pb-14">
      <div className="px-4 sm:container">
        <div className="text-left lg:text-center">
          <h1 className="text-white text-5xl md:text-8xl font-bold">
            Every&nbsp;project tells&nbsp;a&nbsp;story <br />
            —here’s ours.
          </h1>
          {/* <p className="text-[#858585]">We offer the following services</p> */}
        </div>
      </div>

      {/* PORTFOLIO ITEMS */}
      <div className="px-4 sm:container mt-14 space-y-14">
        {/* WEBSITE DESIGN SECTION */}
        <div>
          <div className="text-[#F6F6F6] font-bold text-4xl md:text-5xl mb-4 sm:mb-6">
            Website Design
          </div>
          <div className="space-y-10 mb-14">
            {/* END BLACKDIAMOND ENTERTAINMENT */}
            <div className="flex items-center flex-col-reverse  lg:flex-row">
              {/* TEXT CONTENT */}
              <div className="flex-1 min-w-0">
                <div className="text-2xl sm:text-3xl font-bold flex items-center gap-x-2 flex-wrap">
                  <StaggeredFlipText2
                    className="whitespace-break-spaces"
                    text="Black Diamond Entertainment"
                    staggerDelay={0.035}
                  />
                </div>
                <ShimmerParagraph className="my-5 leading-7">
                  Black Diamond Entertainment, a premier party organizer,
                  partnered with us to elevate their online presence. Renowned
                  for hosting the most unforgettable events, their brand
                  demanded a website that radiated energy and sophistication.
                  Collaborating closely, we designed a dynamic concept that
                  captured their vibrant essence. The result? A sleek,
                  user-friendly website that showcases their expertise in
                  curating the best parties and events, all built to perfection.
                </ShimmerParagraph>
                <div className="flex items-center gap-x-5">
                  <AnimatedButton variant="solid" href="#" as={"link"}>
                    VIEW WEBSITE
                  </AnimatedButton>
                </div>
              </div>
              {/* END TEXT CONTENT */}

              <motion.div
                initial={"default"}
                variants={mockupImageVariants}
                whileInView={"inView"}
                viewport={{ once: true, amount: "some" }}
                className="overflow-hidden flex-1 min-w-0 max-w-full"
              >
                <MotionImage
                  src={BlackdiamondMock}
                  alt="Black Diamond Entertainment"
                  width={600}
                  height={460}
                  className="flex-1 min-w-0 max-w-full"
                />
              </motion.div>
            </div>
            {/* END BLACKDIAMOND ENTERTAINMENT */}
            {/* GRAPHIC DESIGN SECTION */}
            <div className="flex items-center flex-col-reverse  lg:flex-row-reverse">
              {/* TEXT CONTENT */}
              <div className="flex-1 min-w-0">
                <div className="text-2xl sm:text-3xl font-bold flex items-center gap-x-2 flex-wrap">
                  <StaggeredFlipText2
                    className="whitespace-break-spaces"
                    text="Mekkachi"
                  />
                </div>
                <ShimmerParagraph className="my-5 leading-7">
                  Mekkachi, a bold and visionary fashion brand, they partnered
                  with us to craft a digital presence that reflects their
                  celebration of culture, craftsmanship, and individuality.
                  Drawing from their African heritage and global influence, we
                  meticulously designed and developed a Shopify website that
                  embodies their mission of empowerment and sustainability. The
                  result is a seamless online experience that showcases
                  Mekkachi’s vibrant collections and honors their legacy of
                  storytelling through fashion.
                </ShimmerParagraph>

                <div className="flex items-center gap-x-5">
                  <AnimatedButton
                    variant="solid"
                    as={"link"}
                    href="https://eventsbyblackdiamond.com"
                    target="_blank"
                  >
                    VIEW WEBSITE
                  </AnimatedButton>
                </div>
              </div>
              {/* END TEXT CONTENT */}

              <motion.div
                initial={"default"}
                variants={mockupImageVariants}
                whileInView={"inView"}
                viewport={{ once: true, amount: "some" }}
                className="overflow-hidden flex-1 min-w-0 max-w-full"
              >
                <MotionImage
                  src={MekkachiMock}
                  alt="Mekkachi"
                  height={460}
                  viewport={{ amount: "some" }}
                  width={600}
                  className=""
                />
              </motion.div>
            </div>
            {/* END GRAPHIC DESIGN SECTION */}

            {/* BRANDING SECTION */}
            <div className="flex items-center flex-col-reverse  lg:flex-row">
              {/* TEXT CONTENT */}
              <div className="flex-1 min-w-0">
                <div className="text-2xl sm:text-3xl font-bold flex items-center gap-x-2 flex-wrap">
                  <StaggeredFlipText2
                    className="whitespace-break-spaces"
                    text="Atkins Attire"
                  />
                </div>

                <ShimmerParagraph className="my-5 leading-7">
                  Atkins Attire, a brand born from a journey of self-discovery,
                  partnered with us to bring their vision of casual luxury and
                  individuality to life. Embracing their ethos of blending
                  comfort with sophistication, we designed and developed a
                  Shopify website that reflects their commitment to artistic
                  freedom and connection. The site seamlessly showcases their
                  versatile sweatshirts and sweatsuits while celebrating the
                  brand’s unique identity and sense of community. The result is
                  an online space that feels as refined and personal as Atkins
                  Attire’s distinctive designs.
                </ShimmerParagraph>

                <div className="flex items-center gap-x-5">
                  <AnimatedButton variant="solid" href="#" as={"link"}>
                    VIEW WEBSITE
                  </AnimatedButton>
                </div>
              </div>
              {/* END TEXT CONTENT */}

              <motion.div
                initial={"default"}
                variants={mockupImageVariants}
                whileInView={"inView"}
                viewport={{ once: true, amount: "some" }}
                className="overflow-hidden flex-1 min-w-0 max-w-full"
              >
                <Image
                  src={AtkinsMock}
                  alt="Atkins Attire"
                  width={600}
                  height={460}
                  className="flex-1 min-w-0 max-w-full"
                />
              </motion.div>
            </div>
            {/* END BRANDING SECTION */}
          </div>

          <Pagination
            noOfPages={10}
            current={1}
            onNext={() => {}}
            onPrev={() => {}}
            gotoPage={() => {}}
          />
        </div>
        {/* END WEBSITE DESIGN SECTION */}

        {/* GRAPHIC DESIGN SECTION */}
        <div>
          <div className="text-[#F6F6F6] font-bold text-4xl md:text-5xl mb-6">
            Graphic Design
          </div>
          <div>
            <div className="space-y-10">
              {/* FLYERS/BANNERS */}
              <div>
                <p className="text-3xl font-bold mb-4">Flyers/Banners</p>
                <Image src={GraphicsTemplate} alt="Graphics Design Templates" />
              </div>
              {/* END FLYERS/BANNERS */}

              {/* 3D LOGOS */}
              <div>
                <p className="text-3xl font-bold mb-4">3D Logos</p>

                <div className="flex flex-col sm:flex-row items-stretch">
                  <div className="flex flex-col space-y-2 text-center">
                    <Image
                      className="flex-1"
                      src={TmentalLogo}
                      alt="Tmental"
                      unoptimized
                    />
                    <div className="font-bold">Tmental</div>
                  </div>
                  <div className="flex flex-col space-y-2 text-center">
                    <Image
                      className="flex-1"
                      src={SobSnlLogo}
                      alt="Sob SNL"
                      unoptimized
                    />
                    <div className="font-bold">Sob SNL</div>
                  </div>
                  <div className="flex flex-col space-y-2 text-center">
                    <Image
                      className="flex-1"
                      src={GunThudLogo}
                      alt="Gun Thud"
                      unoptimized
                    />
                    <div className="font-bold">Gun Thud</div>
                  </div>
                </div>
              </div>
              {/* END 3D LOGOS */}
            </div>
          </div>
        </div>
        {/* END GRAPHIC DESIGN SECTION */}
      </div>
      {/* END PORTFOLIO ITEMS */}
    </div>
  );
}
