"use client";
import { SectionWrapper } from "@/lib/hoc";
import { textVariant } from "@/lib/motion";
import { useInView, motion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import images from "../../../../public/images";
// import { useWindowSize } from "@/lib/hooks/useWindowSize";

const imagesPreview = [
  images.landingPage.portfolio1,
  images.landingPage.portfolio2,
  images.landingPage.portfolio3,
  images.landingPage.portfolio4,
  images.landingPage.portfolio5,
  images.landingPage.portfolio6,
  images.landingPage.portfolio7,
  images.landingPage.portfolio8,
  images.landingPage.portfolio9,
  images.landingPage.portfolio10,
  images.landingPage.portfolio11,
  images.landingPage.portfolio12,
];

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  // const width = useWindowSize();

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="w-full flex justify-center items-center pb-5 xs:pb-10"
    >
      <div className="w-full px-4 sm:px-12 flex flex-col gap-6 xs:gap-8 md:gap-10 xl:gap-12 ">
        <motion.div variants={textVariant(0.1)} className="w-[90%]">
          <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            Your creative partner for everything!{" "}
          </h1>
        </motion.div>

        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              disableOnInteraction: false,
              delay: 0,
            }}
            speed={3000}
            loop={true}
            slidesPerView="auto"
            spaceBetween={0}
            // spaceBetween={width < 640 ? 10 : 15}
            grabCursor={true}
            freeMode={true}
            allowTouchMove={false}
            className="w-full h-60 xs:h-72 lg:h-80 xl:h-96"
          >
            {[...imagesPreview, ...imagesPreview].map((image, index) => (
              <SwiperSlide key={index} className="!w-auto h-full">
                <Image
                  src={image}
                  alt="Portfolio preview"
                  className="h-full w-auto object-contain"
                  width={800}
                  height={600}
                  priority
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Portfolio, "portfolio");
