"use client";
import { SectionWrapper } from "@/lib/hoc";
import { scaleVariants, textVariant } from "@/lib/motion";
import { useInView, motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import images from "../../../../public/images";
import useNavigate from "@/lib/hooks/useNavigate";

const entrepreneurs = [
  {
    id: 1,
    title: "Start small, think big",
    description:
      "Young entrepreneur Gojo launched his fashion label with Kreative Cloud, building a website and quickly growing her online presence.",
    imgUrl: images.entrepreneurPage.pastEntre1,
    name: "Gojo Satoru",
    profession: "Fashion Designer",
  },
  {
    id: 2,
    title: "Expand your horizons",
    description:
      "What started as a hobby turned into a flourishing hair business. With Kreative Cloud, Aliyah scaled quickly and landed prestigious clients.",
    imgUrl: images.entrepreneurPage.pastEntre2,
    name: "Aliyah Thompson",
    profession: "Hair Stylist",
  },
  {
    id: 3,
    title: "Take it to the next level",
    description:
      "From logo to web development, Kreative Cloud supports growing businesses. With Kreative Cloud, Aby creates powerful visuals and build impactful digital experiences.",
    imgUrl: images.entrepreneurPage.pastEntre3,
    name: "Aby Rodriguez",
    profession: "Web Developer",
  },

  {
    id: 4,
    title: "Take it to the next level",
    description:
      "From logo to web development, Kreative Cloud supports growing businesses. With Kreative Cloud, Aby creates powerful visuals and build impactful digital experiences.",
    imgUrl: images.entrepreneurPage.pastEntre4,
    name: "Aby Rodriguez",
    profession: "Web Developer",
  },

  {
    id: 5,
    title: "Expand your horizons",
    description:
      "What started as a hobby turned into a flourishing hair business. With Kreative Cloud, Aliyah scaled quickly and landed prestigious clients.",
    imgUrl: images.entrepreneurPage.pastEntre5,
    name: "Aliyah Thompson",
    profession: "Hair Stylist",
  },

  {
    id: 6,
    title: "Start small, think big",
    description:
      "Young entrepreneur Gojo launched his fashion label with Kreative Cloud, building a website and quickly growing her online presence.",
    imgUrl: images.entrepreneurPage.pastEntre6,
    name: "Gojo Satoru",
    profession: "Fashion Designer",
  },
];

const PastFeatures = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  const [hovered, setHovered] = useState<number | null>(null);

  const handleOutsideClick = () => {
    setHovered(null);
  };

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="w-full flex justify-center items-center py-5 xs:py-10"
      onClick={handleOutsideClick}
    >
      <div className="w-full flex flex-col gap-6 xs:gap-8 md:gap-10 xl:gap-12">
        <motion.div
          variants={textVariant(0.1)}
          className="w-full 2xs:w-[90%] xs:w-[80%] sm:w-[70%] md:w-[60%] lg:w-[50%] flex flex-col items-start justify-start gap-2 xs:gap-2.5 md:gap-4"
        >
          <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
            Past Entrepreneurs{" "}
          </h1>
          <p className="text-sm text-[#9797A2]">
            Their journeys continue—follow their success stories.{" "}
          </p>
        </motion.div>
        <div className="w-full">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 2xl:gap-12">
            {entrepreneurs.map((item, index) => (
              <div
                key={index}
                className="h-full flex flex-col gap-4 xs:gap-6 lg:gap-8"
              >
                <motion.div
                  variants={scaleVariants}
                  whileInView={scaleVariants.whileInView()}
                  className="cursor-pointer relative w-full h-60 md:h-80 overflow-hidden shadow-lg"
                  onHoverStart={() => setHovered(index)}
                  onHoverEnd={() => {
                    setHovered(null);
                  }}
                  onClick={() => {
                    setHovered(index === hovered ? null : index);
                    navigate("/entrepreneur/1", "push");
                  }}
                >
                  <div
                    className={` absolute inset-0 bg-black ${
                      hovered === index ? "opacity-80" : "opacity-10"
                    } z-10 transition-opacity duration-300 backdrop-blur-sm`}
                  ></div>
                  <Image
                    src={item.imgUrl}
                    alt={`${item.id} image`}
                    fill
                    objectFit="cover"
                    className="z-0"
                    style={{
                      objectPosition: index === 1 ? "50% 20%" : "",
                    }}
                    quality={100}
                    priority
                  />

                  {hovered === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute z-20 top-3 px-4 flex flex-col items-center justify-center w-full h-full"
                    >
                      <h2 className="text-white text-2xl font-bold">
                        {item.name}
                      </h2>
                      <p className="text-white text-base">{item.profession}</p>
                    </motion.div>
                  )}
                </motion.div>

                <motion.div
                  variants={textVariant(0.1)}
                  className="flex flex-col items-start justify-start gap-1 xs:gap-2 lg:gap-3"
                >
                  <h4 className="text-base font-bold">{item.title}</h4>
                  <p className="text-sm text-[#9797A2]">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(PastFeatures, "past-features");
