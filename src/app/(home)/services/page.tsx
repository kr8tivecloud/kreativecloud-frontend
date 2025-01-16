"use client";

import React from "react";
import Image from "next/image";
import { AnimatedButton } from "@/components/AnimatedButton";
import WebsiteDesign from "@/assets/images/services/website-design.png";
import GraphicDesign from "@/assets/images/services/graphic-design.png";
import Branding from "@/assets/images/services/branding.png";
import Marketing from "@/assets/images/services/marketing.png";
import ContentCreation from "@/assets/images/services/content-creation.png";
import SocialMediaManagement from "@/assets/images/services/social-media-management.png";
import StaggeredFlipText2 from "@/components/StaggeredFlipText2";
import ShimmerParagraph from "@/components/ShimmerParagraph";
import { motion, Variants } from "motion/react";

const MotionImage = motion.create(Image);

const brandImageVariants: Variants = {
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

export default function ServicesPage() {
  return (
    <div className="pt-28">
      <div className="px-4 sm:container">
        <div className="text-left lg:text-center">
          <h1 className="text-white text-5xl font-bold">Services </h1>
          <p className="text-[#858585]">We offer the following services</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="px-4 sm:container space-y-20 lg:space-y-10 mt-5">
        {/* WEBSITE DESIGN SECTION */}
        <div className="flex items-center flex-col mt-8 lg:mt-0 lg:flex-row">
          {/* TEXT CONTENT */}
          <div className="flex-1 min-w-0">
            <div className="text-2xl sm:text-3xl font-bold flex items-center gap-x-2 flex-wrap">
              <StaggeredFlipText2
                className="whitespace-break-spaces"
                text="Website Design"
              />{" "}
              <span className="text-[#858585] bg-[#2C2C2C] border px-2 py-0.5 rounded-full border-[#393939] text-xs font-normal align-middle whitespace-nowrap">
                Starts at $400
              </span>
            </div>
            <ShimmerParagraph
              className="my-5 leading-7"
              text="We will create a custom website design tailored to your brand with
              Intuitive user experience (UX) and navigation. We deliver seamless
              and visually appealing online experiences that reflects your
              brand’s identity. Whether you want to build from scratch, leverage
              on any platform or revamp the aesthetics of your site, we got you!"
            />
            <div className="flex items-center gap-x-5">
              <AnimatedButton variant="outline" as={"link"} href="#">
                HIRE US
              </AnimatedButton>
              <AnimatedButton variant="solid">BUY SHOPIFY THEME</AnimatedButton>
            </div>
          </div>
          {/* END TEXT CONTENT */}

          <motion.div
            initial={"default"}
            variants={brandImageVariants}
            whileInView={"inView"}
            viewport={{ once: true, amount: "all" }}
            className="overflow-hidden flex-1 min-w-0 max-w-full"
          >
            <MotionImage
              src={WebsiteDesign}
              alt="Website design"
              width={600}
              height={460}
              className="flex-1 min-w-0 max-w-full"
            />
          </motion.div>
        </div>
        {/* END WEBSITE DESIGN SECTION */}

        {/* GRAPHIC DESIGN SECTION */}
        <div className="flex items-center flex-col mt-8 lg:mt-0 lg:flex-row-reverse">
          {/* TEXT CONTENT */}
          <div className="flex-1 min-w-0">
            <div className="text-2xl sm:text-3xl font-bold flex items-center gap-x-2 flex-wrap">
              <StaggeredFlipText2
                className="whitespace-break-spaces"
                text="Graphic Design"
              />{" "}
              <span className="text-[#858585] bg-[#2C2C2C] border px-2 py-0.5 rounded-full border-[#393939] text-xs font-normal align-middle whitespace-nowrap">
                Starts at $50
              </span>
            </div>
            <ShimmerParagraph
              className="my-5 leading-7"
              text="We will bring your brand to life through compelling visuals and
              impactful designs that communicate your message clearly. Whether
              you need logos, marketing materials, concept designs, 3D elements,
              mockups or digital content, our creative team ensures your brand
              stands out and makes a lasting impression."
            />

            <div className="flex items-center gap-x-5">
              <AnimatedButton>HIRE US</AnimatedButton>
              <AnimatedButton variant="solid">BUY SHOPIFY THEME</AnimatedButton>
            </div>
          </div>
          {/* END TEXT CONTENT */}

          <motion.div
            initial={"default"}
            variants={brandImageVariants}
            whileInView={"inView"}
            viewport={{ once: true, amount: "all" }}
            className="overflow-hidden flex-1 min-w-0 max-w-full"
          >
            <MotionImage
              src={GraphicDesign}
              alt="Graphic design"
              height={460}
              viewport={{ amount: "all" }}
              width={600}
              className=""
            />
          </motion.div>
        </div>
        {/* END GRAPHIC DESIGN SECTION */}

        {/* BRANDING SECTION */}
        <div className="flex items-center flex-col mt-8 lg:mt-0 lg:flex-row">
          {/* TEXT CONTENT */}
          <div className="flex-1 min-w-0">
            <div className="text-2xl sm:text-3xl font-bold flex items-center gap-x-2 flex-wrap">
              <StaggeredFlipText2
                className="whitespace-break-spaces"
                text="Branding"
              />{" "}
              <span className="text-[#858585] bg-[#2C2C2C] border px-2 py-0.5 rounded-full border-[#393939] text-xs font-normal align-middle whitespace-nowrap">
                Starts at $100
              </span>
            </div>

            <ShimmerParagraph
              className="my-5 leading-7"
              text="We will bring your brand to life. Our branding services include
              creating unique and memorable logos, color palettes and typography
              that represent your style and values. We’ll provide comprehensive
              brand guidelines to ensure consistency across all platforms. We
              also offer rebranding services to update outdated visuals and
              messaging to align with your current goals."
            />

            <div className="flex items-center gap-x-5">
              <AnimatedButton variant="outline">HIRE US</AnimatedButton>
            </div>
          </div>
          {/* END TEXT CONTENT */}

          <motion.div
            initial={"default"}
            variants={brandImageVariants}
            whileInView={"inView"}
            viewport={{ once: true, amount: "all" }}
            className="overflow-hidden flex-1 min-w-0 max-w-full"
          >
            <Image
              src={Branding}
              alt="Branding"
              width={600}
              height={460}
              className="flex-1 min-w-0 max-w-full"
            />
          </motion.div>
        </div>
        {/* END BRANDING SECTION */}

        {/* MARKETING SECTION */}
        <div className="flex items-center flex-col mt-8 lg:mt-0 lg:flex-row-reverse">
          {/* TEXT CONTENT */}
          <div className="flex-1 min-w-0">
            <div className="text-2xl sm:text-3xl font-bold flex items-center gap-x-2 flex-wrap">
              <StaggeredFlipText2
                className="whitespace-break-spaces"
                text="Marketing"
              />{" "}
              <span className="text-[#858585] bg-[#2C2C2C] border px-2 py-0.5 rounded-full border-[#393939] text-xs font-normal align-middle whitespace-nowrap">
                Starts at $200
              </span>
            </div>

            <ShimmerParagraph
              className="my-5 leading-7"
              text="We will bring your brand to life through compelling visuals and
              impactful designs that communicate your message clearly. Whether
              you need logos, marketing materials, concept designs, 3D elements,
              mockups or digital content, our creative team ensures your brand
              stands out and makes a lasting impression."
            />
            <div className="flex items-center gap-x-5">
              <AnimatedButton variant="outline">HIRE US</AnimatedButton>
            </div>
          </div>
          {/* END TEXT CONTENT */}

          <motion.div
            initial={"default"}
            variants={brandImageVariants}
            whileInView={"inView"}
            viewport={{ once: true, amount: "all" }}
            className="overflow-hidden flex-1 min-w-0 max-w-full"
          >
            <Image
              src={Marketing}
              alt="Marketing"
              width={600}
              height={460}
              className="flex-1 min-w-0 max-w-full"
            />
          </motion.div>
        </div>
        {/* END MARKETING SECTION */}

        {/* CONTENT CREATION SECTION */}
        <div className="flex items-center flex-col mt-8 lg:mt-0 lg:flex-row">
          {/* TEXT CONTENT */}
          <div className="flex-1 min-w-0">
            <div className="text-2xl sm:text-3xl font-bold flex items-center gap-x-2 flex-wrap">
              <StaggeredFlipText2
                className="whitespace-break-spaces"
                text="Content Creation"
              />
              <span className="text-[#858585] bg-[#2C2C2C] border px-2 py-0.5 rounded-full border-[#393939] text-xs font-normal align-middle whitespace-nowrap">
                Starts at $100
              </span>
            </div>
            <ShimmerParagraph
              className="my-5 leading-7"
              text="We create content that connects with your audience and gets them
              talking. From coming up with viral ideas to making sure everything
              matches your brand, we’ve got you covered. We’ll write blog posts,
              copies, scripts and product descriptions that are clear and
              engaging. We can also plan your content calendar and handle the
              graphics, videos, or any other media you need to bring your ideas
              to life."
            />
            <div className="flex items-center gap-x-5">
              <AnimatedButton as={"link"} variant="outline" href="#">
                HIRE US
              </AnimatedButton>
            </div>
          </div>
          {/* END TEXT CONTENT */}

          <motion.div
            initial={"default"}
            variants={brandImageVariants}
            whileInView={"inView"}
            viewport={{ once: true, amount: "all" }}
            className="overflow-hidden flex-1 min-w-0 max-w-full"
          >
            <Image
              src={ContentCreation}
              alt="Content Creation"
              width={600}
              height={460}
              className="flex-1 min-w-0 max-w-full"
            />
          </motion.div>
        </div>
        {/* END CONTENT CREATION SECTION */}

        {/* SOCIAL MEDIA MANAGEMENT SECTION */}
        <div className="flex items-center flex-col mt-8 lg:mt-0 lg:flex-row-reverse">
          {/* TEXT CONTENT */}
          <div className="flex-1 min-w-0">
            <div className="text-2xl sm:text-3xl font-bold flex items-center gap-x-2 flex-wrap">
              <StaggeredFlipText2
                className="whitespace-break-spaces"
                text="Social Media Management"
              />{" "}
              <span className="text-[#858585] bg-[#2C2C2C] border px-2 py-0.5 rounded-full border-[#393939] text-xs font-normal align-middle whitespace-nowrap">
                Starts at $100
              </span>
            </div>

            <ShimmerParagraph
              className="my-5 leading-7"
              text="We will create a custom website design tailored to your brand with
              Intuitive user experience (UX) and navigation. We deliver seamless
              and visually appealing online experiences that reflects your
              brand’s identity. Whether you want to build from scratch, leverage
              on any platform or revamp the aesthetics of your site, we got you!"
            />

            <div className="flex items-center gap-x-5">
              <AnimatedButton variant="outline" as={"link"} href="#">
                HIRE US
              </AnimatedButton>
            </div>
          </div>
          {/* END TEXT CONTENT */}

          <motion.div
            initial={"default"}
            variants={brandImageVariants}
            whileInView={"inView"}
            viewport={{ once: true, amount: "all" }}
            className="overflow-hidden flex-1 min-w-0 max-w-full"
          >
            <Image
              src={SocialMediaManagement}
              alt="SocialMediaManagement"
              width={600}
              height={460}
              className="flex-1 min-w-0 max-w-full"
            />
          </motion.div>
        </div>
        {/* END SOCIAL MEDIA MANAGEMENT SECTION */}
      </div>
      {/* END SERVICES */}
    </div>
  );
}
