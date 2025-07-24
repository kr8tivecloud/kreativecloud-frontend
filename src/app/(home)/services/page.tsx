/* eslint-disable react/no-unescaped-entities */
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
import BulletIcon from "@/assets/images/services/list-icon.svg";

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

// Custom List with Bullet Image
function BulletList({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-1">
      {React.Children.map(children, (child, idx) => {
        const element = child as React.ReactElement<{
          children: React.ReactNode;
        }>;

        return React.isValidElement(child) ? (
          <li className="flex items-start gap-x-2 ml-3" key={idx}>
            <Image
              src={BulletIcon}
              alt="•"
              width={16}
              height={16}
              className="mt-1 w-4 h-4 flex-shrink-0"
            />
            <span>{element.props.children}</span>
          </li>
        ) : null;
      })}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="px-4 sm:container">
        <div className="text-left lg:text-center">
          <h1 className="text-white text-5xl font-bold">Services </h1>
          <p className="text-[#858585]">We offer the following services</p>
        </div>
      </div>

      {/* SERVICES */}
      <div className="px-4 sm:container space-y-10 mt-5">
        {/* WEBSITE DESIGN SECTION */}
        <div className="flex items-center flex-col-reverse  lg:flex-row">
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
            <ShimmerParagraph className="my-5 leading-7">
              We design sleek, responsive websites tailored to your brand’s
              aesthetic, identity, and goals. Whether launching from scratch or
              upgrading an outdated platform, we ensure smooth functionality,
              modern visuals, and mobile optimization.
              <br />
              <div className="mt-3">
                <span className="font-bold">Includes:</span>
                <BulletList>
                  <li>Custom layout &amp; UX/UI design</li>
                  <li>Mobile optimization</li>
                  <li>Shopify, WordPress, Wix, and other platform support</li>
                  <li>eCommerce integration &amp; product page setup</li>
                  <li>Domain, hosting, and technical launch assistance</li>
                </BulletList>
              </div>
            </ShimmerParagraph>
            <div className="flex items-center gap-x-5">
              <AnimatedButton variant="outline" as={"link"} href="/contact">
                HIRE US
              </AnimatedButton>
              <AnimatedButton variant="solid" as={"link"} href="/coming-soon">
                BUY SHOPIFY THEME
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
        <div className="flex items-center flex-col-reverse  lg:flex-row-reverse">
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
            <ShimmerParagraph className="my-5 leading-7">
              We craft powerful visuals that communicate your message with
              clarity and creativity. From marketing materials to product
              mockups, we ensure consistency across all platforms.
              <br />
              <div className="mt-3 ">
                <span className="font-bold">Includes:</span>
                <BulletList>
                  <li>Logos, icons, and typography design</li>
                  <li>Flyers, brochures, posters, and business cards</li>
                  <li>Branded pitch decks and presentations</li>
                  <li>Product packaging, labels & 3D mockups</li>
                  <li>Digital graphics for ads, websites, and social</li>
                </BulletList>
              </div>
            </ShimmerParagraph>

            <div className="flex items-center gap-x-5">
              <AnimatedButton as="link" href="/contact">
                HIRE US
              </AnimatedButton>
              <AnimatedButton variant="solid" as="link" href="/coming-soon">
                BUY TEMPLATE
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
        <div className="flex items-center flex-col-reverse  lg:flex-row">
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

            <ShimmerParagraph className="my-5 leading-7">
              We will bring your brand to life. Our branding services include
              creating unique and memorable logos, color palettes and typography
              that represent your style and values. We'll provide comprehensive
              brand guidelines to ensure consistency across all platforms. We
              also offer rebranding services to update outdated visuals and
              messaging to align with your current goals.
              <br />
              <div className="mt-3">
                <span className="font-bold">Includes:</span>
                <BulletList>
                  <li>Logo suite, color palette &amp; type system</li>
                  <li>Brand personality and messaging tone</li>
                  <li>Comprehensive brand guidelines (PDF &amp; web-ready)</li>
                  <li>Rebranding for established businesses</li>
                  <li>Naming, tagline, and positioning strategy</li>
                </BulletList>
              </div>
            </ShimmerParagraph>

            <div className="flex items-center gap-x-5">
              <AnimatedButton variant="outline" as="link" href="/contact">
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
        <div className="flex items-center flex-col-reverse  lg:flex-row-reverse">
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

            <ShimmerParagraph className="my-5 leading-7">
              We create and manage marketing campaigns that amplify your reach
              and drive engagement. Whether you're launching a product,
              promoting a service, or running an event, our strategies are
              tailored for impact.
              <br />
              <div className="mt-3">
                <span className="font-bold">Includes:</span>
                <BulletList>
                  <li>Digital &amp; email campaign development</li>
                  <li>Paid advertising setup (Google Ads, Meta, LinkedIn)</li>
                  <li>Influencer outreach &amp; brand collaborations</li>
                  <li>Event and product promotion strategy</li>
                  <li>Ad performance analytics &amp; optimization</li>
                </BulletList>
              </div>
            </ShimmerParagraph>
            <div className="flex items-center gap-x-5">
              <AnimatedButton variant="outline" as="link" href="/contact">
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
        <div className="flex items-center flex-col-reverse  lg:flex-row">
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
            <ShimmerParagraph className="my-5 leading-7">
              We produce original content that captures attention and
              communicates value. Whether you're educating, inspiring, or
              selling, we help you tell your story with clarity and consistency.
              <br />
              <div className="mt-3">
                <span className="font-bold">Includes:</span>
                <BulletList>
                  <li>Blog posts, newsletters, and copywriting</li>
                  <li>Product descriptions &amp; service content</li>
                  <li>Short-form video scripts (Reels, TikToks, ads)</li>
                  <li>Visual content (carousels, infographics, quote cards)</li>
                  <li>Content calendar development &amp; rollout strategy</li>
                </BulletList>
              </div>
            </ShimmerParagraph>
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
        <div className="flex items-center flex-col-reverse  lg:flex-row-reverse">
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

            <ShimmerParagraph className="my-5 leading-7">
              We manage your social presence with strategic planning, content
              creation, and community engagement. Our goal: consistent posting,
              strong branding, and measurable growth.
              <br />
              <div className="mt-3">
                <span className="font-bold">Includes:</span>
                <BulletList>
                  <li>Social platform setup or revamp</li>
                  <li>Weekly content creation, scheduling &amp; captions</li>
                  <li>Audience engagement &amp; hashtag research</li>
                  <li>Direct message &amp; comment management</li>
                  <li>Monthly reporting &amp; performance insight</li>
                </BulletList>
              </div>
            </ShimmerParagraph>

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
