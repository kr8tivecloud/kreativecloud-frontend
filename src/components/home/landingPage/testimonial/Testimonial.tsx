"use client";
import { SectionWrapper } from "@/lib/hoc";
import { textVariant } from "@/lib/motion";
import { useInView, motion } from "motion/react";
import { StaticImageData } from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import images from "../../../../../public/images";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import TestimonialCard from "./TestimonialCard";
import { FaXTwitter } from "react-icons/fa6";

interface TestimonialCardProps {
  image: StaticImageData;
  name: string;
  tag: string;
  content: string;
  starNumber: number;
  social: React.ComponentType;
}

const testimonials: TestimonialCardProps[] = [
  {
    image: images.landingPage.testimonial,
    name: "Puff Mo 💨",
    tag: "@Verta",
    content: "Stellar service! My website looks flawless and so user-friendly",
    starNumber: 5,
    social: FaXTwitter,
  },
  {
    image: images.landingPage.testimonial,
    name: "Ganga",
    tag: "@NGanga",
    content:
      "Working with Kreative Cloud has been a game-changer for my brand. I used their graphic design service, and I’m thrilled with the result. My logo looks sharp, and the social media graphics was fire. ",
    starNumber: 5,
    social: FaXTwitter,
  },

  {
    image: images.landingPage.testimonial,
    name: "Ganga",
    tag: "@NGanga",
    content:
      "Kreative Cloud’s design service was fantastic. They got my brand’s look perfectly!",
    starNumber: 5,
    social: FaXTwitter,
  },

  {
    image: images.landingPage.testimonial,
    name: "Ganga",
    tag: "@NGanga",
    content:
      "Working with Kreative Cloud has been a game-changer for my brand. I used their graphic design service, and I’m thrilled with the result. My logo looks sharp, and the social media graphics was fire. ",
    starNumber: 5,
    social: FaXTwitter,
  },
];

const testimonials2: TestimonialCardProps[] = [
  {
    image: images.landingPage.testimonial,
    name: "Blacka",
    tag: "@Blavckala",
    content:
      "Absolutely love the templates! They’re easy to use and saved me so much time. Highly recommended!",
    starNumber: 5,
    social: FaXTwitter,
  },

  {
    image: images.landingPage.testimonial,
    name: "Tbas",
    tag: "@TbasKing",
    content:
      "Honestly, best investment I made all year. Smooth process, killer designs. 💯",
    starNumber: 5,
    social: FaXTwitter,
  },

  {
    image: images.landingPage.testimonial,
    name: "Banama",
    tag: "@banama",
    content: "These guys understood the assignment! My website = goals. 🤩👏",
    starNumber: 5,
    social: FaXTwitter,
  },
  {
    image: images.landingPage.testimonial,
    name: "Ganga",
    tag: "@NGanga",
    content:
      "Kreative Cloud got my brand lookin’ 🔥! The templates saved my life 😍🙌",
    starNumber: 5,
    social: FaXTwitter,
  },
];

const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="w-full flex justify-center items-center gap-4 mt-0 2xs:mt-5">
      <div
        className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white text-white text-base cursor-pointer"
        onClick={() => swiper.slidePrev()}
      >
        <FiArrowLeft />
      </div>
      <div
        className="flex justify-center items-center w-10 h-10 rounded-full border-2 border-white text-white text-base cursor-pointer"
        onClick={() => swiper.slideNext()}
      >
        <FiArrowRight />
      </div>
    </div>
  );
};

const Testimonial = () => {
  const width = useWindowSize();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="w-full flex justify-center items-center py-5 xs:py-10 relative overflow-visible"
    >
      <div className="max-2xs:hidden absolute left-[-400px] top-[-50%] w-[1067px] h-[1500px] bg-gradient-to-t from-[#FF006B] to-[#FF6DC1] opacity-[0.15] blur-[250px] rotate-[60deg] mix-blend-screen pointer-events-none" />

      <div className="max-2xs:hidden absolute right-[-400px] top-[-50%] w-[728px] h-[1000px] bg-[#00E5FF] opacity-[0.15] blur-[250px] rotate-[60deg] mix-blend-screen pointer-events-none" />

      <div className="w-full flex flex-col gap-6 xs:gap-8 md:gap-10 xl:gap-12 relative">
        <motion.div
          variants={textVariant(0.1)}
          className="w-[90%]  px-4 sm:px-12"
        >
          <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            Testimonials{" "}
          </h1>
        </motion.div>

        <div className="max-xs:hidden w-full overflow-hidden flex flex-col gap-6 xl:gap-8">
          <Swiper
            modules={[Navigation]}
            slidesPerView={2.2}
            spaceBetween={width < 640 ? 12 : 15}
            autoplay={{
              disableOnInteraction: false,
            }}
            breakpoints={{
              200: {
                slidesPerView: 1.0,
              },
              330: {
                slidesPerView: 1.1,
              },
              800: {
                slidesPerView: 1.3,
              },
              1000: {
                slidesPerView: 1.6,
              },
              1200: {
                slidesPerView: 1.9,
              },
              1300: {
                slidesPerView: 2.3,
              },
            }}
            className="w-full text-white !grid"
          >
            <div className="swiper-wrapper !grid grid-cols-1">
              {testimonials.map((item, index) => (
                <SwiperSlide className="!grid h-full" key={index}>
                  <TestimonialCard {...item} />
                </SwiperSlide>
              ))}
            </div>
            {/* <SwiperNavButtons /> */}
          </Swiper>

          <Swiper
            modules={[Navigation]}
            slidesPerView={2.2}
            spaceBetween={width < 640 ? 12 : 15}
            autoplay={{
              disableOnInteraction: false,
            }}
            breakpoints={{
              200: {
                slidesPerView: 1.0,
              },
              300: {
                slidesPerView: 1.6,
              },
              800: {
                slidesPerView: 1.9,
              },
              900: {
                slidesPerView: 2.3,
              },
              1000: {
                slidesPerView: 2.6,
              },
              1200: {
                slidesPerView: 2.9,
              },
              1300: {
                slidesPerView: 3.2,
              },
            }}
            className="w-full text-white !grid"
          >
            <div className="swiper-wrapper !grid grid-cols-1">
              {testimonials2.map((item, index) => (
                <SwiperSlide className="!grid h-full" key={index}>
                  <TestimonialCard {...item} />
                </SwiperSlide>
              ))}
            </div>
            {/* <SwiperNavButtons /> */}
          </Swiper>
        </div>

        <div className="xs:hidden w-full overflow-hidden">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1.0}
            spaceBetween={width < 640 ? 12 : 15}
            autoplay={{
              disableOnInteraction: false,
            }}
            breakpoints={{
              200: {
                slidesPerView: 1.0,
              },
              480: {
                slidesPerView: 1.1,
              },
              800: {
                slidesPerView: 1.3,
              },
              1000: {
                slidesPerView: 1.6,
              },
              1200: {
                slidesPerView: 1.9,
              },
              1300: {
                slidesPerView: 2.3,
              },
            }}
            className="w-full text-white"
          >
            <div className="swiper-wrapper !flex">
              {[...testimonials, ...testimonials2].map((item, index) => (
                <SwiperSlide key={index} className="!flex !h-auto">
                  <div className="flex-1 flex">
                    <div className="flex-1">
                      <TestimonialCard {...item} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>

            <SwiperNavButtons />
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Testimonial, "testimonial");
