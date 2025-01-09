"use client";
import { SectionWrapper } from "@/lib/hoc";
import { fadeIn, textVariant } from "@/lib/motion";
import { useInView, motion } from "motion/react";
import { useRef, useState, useEffect } from "react";
import "swiper/css/pagination";

const creativeServices = [
  {
    id: 1,
    title: "Graphic Design",
    description: "We create stunning visuals for your brand.",
  },
  {
    id: 2,
    title: "Website Design",
    description: "We create stunning visuals for your brand.",
  },
  {
    id: 3,
    title: "Brand Development",
    description: "We create stunning visuals for your brand.",
  },
];

const marketingServices = [
  {
    id: 1,
    title: "Social Media Management",
    description: "We create stunning visuals for your brand.",
  },
  {
    id: 2,
    title: "Content Creation",
    description: "We create stunning visuals for your brand.",
  },
  {
    id: 3,
    title: "Backend ad management",
    description: "We create stunning visuals for your brand.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });
  const [hoveredCreative, setHoveredCreative] = useState<number | null>(null);
  const [hoveredMarketing, setHoveredMarketing] = useState<number | null>(null);
  const [iconSize, setIconSize] = useState(46);

  useEffect(() => {
    const handleResize = () => {
      setIconSize(window.innerWidth <= 640 ? 32 : 46);
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleOutsideClick = () => {
    setHoveredCreative(null);
    setHoveredMarketing(null);
  };

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="w-full flex justify-center items-center py-5 xs:py-10"
      onClick={handleOutsideClick}
    >
      <div
        className="w-full px-4 sm:px-12 flex max-lg:flex-col gap-16 xl:gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full lg:w-[50%]">
          <motion.div
            variants={textVariant(0.1)}
            className="w-full 2xs:w-[80%] lg:w-[70%] flex flex-col items-start justify-start gap-2 xs:gap-2.5 md:gap-4"
          >
            <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
              Forward together{" "}
            </h1>
            <p className="text-sm font-bold text-[#9797A2]">
              We’ve outlined a few of our key services. If you’re not sure about
              what services you want, we’d love to chat and explore how we can
              assist you!
            </p>
          </motion.div>
        </div>

        <div className="w-full lg:w-[50%] flex gap-3 2xs:gap-4 xl:gap-6 h-full">
          <div className="w-[50%] flex flex-col gap-4 2xs:gap-6 xl:gap-8">
            <p className="text-sm 2xs:text-base border-l border-[#00E5FF] px-3 font-bold mb-3.5 xs:mb-2.5">
              Creative Services
            </p>
            {creativeServices.map((service, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn("right", "easeInOut", 0.3, 0.1)} // ease in fade
                className="cursor-pointer flex flex-col justify-between h-40 2xs:h-44 xs:h-48 sm:h-52 xl:h-56 px-4 2xs:px-6 xs:px-8 py-6 xs:py-8 bg-[#15151D99] border-t-[1.25px] border-[#00E5FF] relative transition-all duration-300 group"
                onHoverStart={() => setHoveredCreative(index)}
                onHoverEnd={() => setHoveredCreative(null)}
                onClick={() =>
                  setHoveredCreative(index === hoveredCreative ? null : index)
                }
              >
                <div
                  className={`absolute inset-0 border-t-[1.25px] border-[#00E5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:absolute before:inset-0 before:border-t-[1.25px] before:border-[#00E5FF] before:animate-borderPulse`}
                ></div>

                <div className="w-fit flex justify-center items-center bg-[#15151D] p-2 xs:p-2.5 xl:p-3.5 rounded-full">
                  {index === 0 && (
                    <svg
                      width={iconSize}
                      height={iconSize}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity={hoveredCreative === index ? "1" : "0.3"}
                        d="M36.0156 21.3799H39.7656C40.8012 21.3799 41.6406 22.2193 41.6406 23.2549C41.6406 24.2904 40.8012 25.1299 39.7656 25.1299H36.0156C34.9801 25.1299 34.1406 24.2904 34.1406 23.2549C34.1406 22.2193 34.9801 21.3799 36.0156 21.3799ZM6.01562 21.3799H9.76562C10.8012 21.3799 11.6406 22.2193 11.6406 23.2549C11.6406 24.2904 10.8012 25.1299 9.76562 25.1299H6.01562C4.98009 25.1299 4.14062 24.2904 4.14062 23.2549C4.14062 22.2193 4.98009 21.3799 6.01562 21.3799ZM22.8906 4.50488C23.9262 4.50488 24.7656 5.34435 24.7656 6.37988V10.1299C24.7656 11.1654 23.9262 12.0049 22.8906 12.0049C21.8551 12.0049 21.0156 11.1654 21.0156 10.1299V6.37988C21.0156 5.34435 21.8551 4.50488 22.8906 4.50488ZM22.8906 34.5049C23.9262 34.5049 24.7656 35.3443 24.7656 36.3799V40.1299C24.7656 41.1654 23.9262 42.0049 22.8906 42.0049C21.8551 42.0049 21.0156 41.1654 21.0156 40.1299V36.3799C21.0156 35.3443 21.8551 34.5049 22.8906 34.5049Z"
                        fill="#6A6E87"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        opacity={hoveredCreative === index ? "1" : "0.3"}
                        d="M22.8906 27.0049C24.9617 27.0049 26.6406 25.326 26.6406 23.2549C26.6406 21.1838 24.9617 19.5049 22.8906 19.5049C20.8196 19.5049 19.1406 21.1838 19.1406 23.2549C19.1406 25.326 20.8196 27.0049 22.8906 27.0049Z"
                        fill="#6A6E87"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        d="M22.8906 32.6299C28.0683 32.6299 32.2656 28.4326 32.2656 23.2549C32.2656 18.0772 28.0683 13.8799 22.8906 13.8799C17.713 13.8799 13.5156 18.0772 13.5156 23.2549C13.5156 28.4326 17.713 32.6299 22.8906 32.6299ZM22.8906 36.3799C15.6419 36.3799 9.76562 30.5036 9.76562 23.2549C9.76562 16.0061 15.6419 10.1299 22.8906 10.1299C30.1394 10.1299 36.0156 16.0061 36.0156 23.2549C36.0156 30.5036 30.1394 36.3799 22.8906 36.3799Z"
                        fill={hoveredCreative === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                    </svg>
                  )}

                  {index === 1 && (
                    <svg
                      width={iconSize}
                      height={iconSize}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity={hoveredCreative === index ? "1" : "0.3"}
                        d="M19.1406 10.7341C19.1406 9.18083 17.8814 7.92163 16.3281 7.92163C14.7748 7.92163 13.5156 9.18083 13.5156 10.7341V29.4841C13.5156 31.0374 14.7748 32.2966 16.3281 32.2966C17.8814 32.2966 19.1406 31.0374 19.1406 29.4841V10.7341Z"
                        fill="#6A6E87"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        opacity={hoveredCreative === index ? "1" : "0.3"}
                        d="M28.5156 20.1091C28.5156 18.5558 27.2564 17.2966 25.7031 17.2966C24.1498 17.2966 22.8906 18.5558 22.8906 20.1091V29.4841C22.8906 31.0374 24.1498 32.2966 25.7031 32.2966C27.2564 32.2966 28.5156 31.0374 28.5156 29.4841V20.1091Z"
                        fill="#6A6E87"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        d="M9.76562 36.0466H37.8906C38.9262 36.0466 39.7656 36.8861 39.7656 37.9216C39.7656 38.9572 38.9262 39.7966 37.8906 39.7966H7.89062C6.85509 39.7966 6.01562 38.9572 6.01562 37.9216V7.92163C6.01562 6.8861 6.85509 6.04663 7.89062 6.04663C8.92616 6.04663 9.76562 6.8861 9.76562 7.92163V36.0466Z"
                        fill={hoveredCreative === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        opacity={hoveredCreative === index ? "1" : "0.3"}
                        d="M37.8906 23.8591C37.8906 22.3058 36.6314 21.0466 35.0781 21.0466C33.5248 21.0466 32.2656 22.3058 32.2656 23.8591V29.4841C32.2656 31.0374 33.5248 32.2966 35.0781 32.2966C36.6314 32.2966 37.8906 31.0374 37.8906 29.4841V23.8591Z"
                        fill="#6A6E87"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                    </svg>
                  )}

                  {index === 2 && (
                    <svg
                      width={iconSize}
                      height={iconSize}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity={hoveredCreative === index ? "1" : "0.3"}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.89062 7.58846L22.1995 4.90554C22.6563 4.8199 23.125 4.8199 23.5817 4.90554L37.8906 7.58846V24.9941C37.8906 30.4961 35.0563 35.6099 30.3906 38.526L23.8844 42.5924C23.2764 42.9724 22.5049 42.9724 21.8969 42.5924L15.3906 38.526C10.725 35.6099 7.89062 30.4961 7.89062 24.9941V7.58846Z"
                        fill="#6A6E87"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.6406 33.8384L30.3906 21.4634H26.0156V13.2134L17.2656 25.5884H21.6406V33.8384Z"
                        fill={hoveredCreative === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                    </svg>
                  )}
                </div>

                <p className="text-xs 2xs:text-sm font-bold uppercase text-white">
                  {service.title}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="w-[50%] flex flex-col gap-4 2xs:gap-6 xl:gap-8">
            <p className="text-sm 2xs:text-base border-l border-[#CC0B0B] px-3 font-bold mb-3.5 xs:mb-2.5">
              Marketing Services
            </p>

            {marketingServices.map((service, index: number) => (
              <motion.div
                key={index}
                variants={fadeIn("right", "easeInOut", 0.3, 0.1)} // ease in fade
                className="cursor-pointer flex flex-col justify-between h-40 2xs:h-44 xs:h-48 sm:h-52 xl:h-56 px-4 2xs:px-6 xs:px-8 py-6 xs:py-8 bg-[#15151D99] border-t-[1.25px] border-[#CC0B0B] relative transition-all duration-300 group"
                onHoverStart={() => setHoveredMarketing(index)}
                onHoverEnd={() => setHoveredMarketing(null)}
                onClick={() =>
                  setHoveredMarketing(index === hoveredMarketing ? null : index)
                }
              >
                <div
                  className={`absolute inset-0 border-t-[1.25px] border-[#CC0B0B] opacity-0 group-hover:opacity-100 transition-opacity duration-300 before:absolute before:inset-0 before:border-t-[1.25px] before:border-[#CC0B0B] before:animate-borderPulse`}
                ></div>

                <div className="w-fit flex justify-center items-center bg-[#15151D] p-2 xs:p-2.5 xl:p-3.5 rounded-full">
                  {index === 0 && (
                    <svg
                      width={iconSize}
                      height={iconSize}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity={hoveredMarketing === index ? "1" : "0.3"}
                        d="M25.7031 6.37988C25.7031 5.34435 24.8637 4.50488 23.8281 4.50488C22.7926 4.50488 21.9531 5.34435 21.9531 6.37988V10.1299C21.9531 11.1654 22.7926 12.0049 23.8281 12.0049C24.8637 12.0049 25.7031 11.1654 25.7031 10.1299V6.37988Z"
                        fill="#6A6E87"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        opacity={hoveredMarketing === index ? "1" : "0.3"}
                        d="M25.7031 32.6299C25.7031 31.5943 24.8637 30.7549 23.8281 30.7549C22.7926 30.7549 21.9531 31.5943 21.9531 32.6299V38.2549C21.9531 39.2904 22.7926 40.1299 23.8281 40.1299C24.8637 40.1299 25.7031 39.2904 25.7031 38.2549V32.6299Z"
                        fill="#6A6E87"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M29.4408 15.8374C28.9183 15.1724 28.2355 14.6439 27.3923 14.2521C26.5492 13.8602 25.7358 13.6642 24.952 13.6642C24.5483 13.6642 24.1386 13.6999 23.723 13.7711C23.3073 13.8424 22.9333 13.9789 22.6008 14.1808C22.2683 14.3827 21.9892 14.6439 21.7636 14.9646C21.538 15.2852 21.4252 15.6949 21.4252 16.1936C21.4252 16.6211 21.5142 16.9774 21.6923 17.2624C21.8705 17.5474 22.1317 17.7967 22.4761 18.0105C22.8205 18.2242 23.2302 18.4202 23.7052 18.5983C24.1802 18.7764 24.7145 18.9605 25.3083 19.1505C26.1633 19.4355 27.0539 19.7502 27.9802 20.0946C28.9064 20.4389 29.7495 20.8961 30.5095 21.4661C31.2695 22.0361 31.8989 22.7427 32.3977 23.5858C32.8964 24.4289 33.1458 25.4799 33.1458 26.7386C33.1458 28.1874 32.8786 29.4402 32.3442 30.4971C31.8098 31.5539 31.0914 32.4267 30.1889 33.1155C29.2864 33.8042 28.2533 34.3149 27.0895 34.6474C25.9258 34.9799 24.7264 35.1461 23.4914 35.1461C21.6864 35.1461 19.9408 34.8314 18.2545 34.202C16.5683 33.5727 15.167 32.6761 14.0508 31.5124L18.0408 27.4511C18.6583 28.2111 19.4717 28.8464 20.4811 29.3571C21.4905 29.8677 22.4939 30.123 23.4914 30.123C23.9427 30.123 24.382 30.0755 24.8095 29.9805C25.237 29.8855 25.6111 29.7311 25.9317 29.5174C26.2523 29.3036 26.5077 29.0186 26.6977 28.6624C26.8877 28.3061 26.9827 27.8786 26.9827 27.3799C26.9827 26.9049 26.8639 26.5011 26.6264 26.1686C26.3889 25.8361 26.0505 25.5333 25.6111 25.2602C25.1717 24.9871 24.6255 24.7377 23.9723 24.5121C23.3192 24.2864 22.577 24.043 21.7458 23.7817C20.9383 23.5205 20.1486 23.2117 19.3767 22.8555C18.6048 22.4992 17.9161 22.0421 17.3105 21.4839C16.7048 20.9258 16.218 20.2489 15.8498 19.4533C15.4817 18.6577 15.2977 17.6899 15.2977 16.5499C15.2977 15.1486 15.5827 13.9492 16.1527 12.9517C16.7227 11.9542 17.4708 11.1349 18.397 10.4936C19.3233 9.85236 20.3683 9.3833 21.532 9.08643C22.6958 8.78955 23.8714 8.64111 25.0589 8.64111C26.4839 8.64111 27.9386 8.90236 29.423 9.42486C30.9074 9.94737 32.2077 10.7192 33.3239 11.7405L29.4408 15.8374Z"
                        fill={hoveredMarketing === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                    </svg>
                  )}

                  {index === 1 && (
                    <svg
                      width={iconSize}
                      height={iconSize}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        opacity={hoveredMarketing === index ? "1" : "0.3"}
                        d="M28.5156 41.6716C33.6933 41.6716 37.8906 37.4743 37.8906 32.2966C37.8906 27.119 33.6933 22.9216 28.5156 22.9216C23.338 22.9216 19.1406 27.119 19.1406 32.2966C19.1406 37.4743 23.338 41.6716 28.5156 41.6716Z"
                        fill={hoveredMarketing === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        opacity={hoveredMarketing === index ? "1" : "0.3"}
                        d="M17.2656 41.6716C22.4433 41.6716 26.6406 37.4743 26.6406 32.2966C26.6406 27.119 22.4433 22.9216 17.2656 22.9216C12.088 22.9216 7.89062 27.119 7.89062 32.2966C7.89062 37.4743 12.088 41.6716 17.2656 41.6716Z"
                        fill={hoveredMarketing === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        opacity={hoveredMarketing === index ? "1" : "0.3"}
                        d="M13.5156 30.4216C18.6933 30.4216 22.8906 26.2243 22.8906 21.0466C22.8906 15.869 18.6933 11.6716 13.5156 11.6716C8.33796 11.6716 4.14062 15.869 4.14062 21.0466C4.14062 26.2243 8.33796 30.4216 13.5156 30.4216Z"
                        fill={hoveredMarketing === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        opacity={hoveredMarketing === index ? "1" : "0.3"}
                        d="M32.2656 30.4216C37.4433 30.4216 41.6406 26.2243 41.6406 21.0466C41.6406 15.869 37.4433 11.6716 32.2656 11.6716C27.088 11.6716 22.8906 15.869 22.8906 21.0466C22.8906 26.2243 27.088 30.4216 32.2656 30.4216Z"
                        fill={hoveredMarketing === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        opacity={hoveredMarketing === index ? "1" : "0.3"}
                        d="M22.8906 22.9216C28.0683 22.9216 32.2656 18.7243 32.2656 13.5466C32.2656 8.36896 28.0683 4.17163 22.8906 4.17163C17.713 4.17163 13.5156 8.36896 13.5156 13.5466C13.5156 18.7243 17.713 22.9216 22.8906 22.9216Z"
                        fill={hoveredMarketing === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                    </svg>
                  )}

                  {index === 2 && (
                    <svg
                      width={iconSize}
                      height={iconSize}
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M26.051 35.1664C30.2245 33.499 35.4211 32.4314 41.6407 31.9635C41.6407 31.8369 41.6407 24.6534 41.6407 10.4128H41.6406C41.6406 9.89505 41.2209 9.47534 40.7032 9.47534C40.6952 9.47534 40.6873 9.47544 40.6794 9.47564C35.3748 9.60993 30.0702 10.8559 24.7657 13.2135C24.7657 13.2969 24.7657 20.3243 24.7657 34.2958H24.7656C24.7656 34.8136 25.1854 35.2333 25.7032 35.2333C25.8223 35.2333 25.9403 35.2106 26.051 35.1664Z"
                        fill={hoveredMarketing === index ? "#fff" : "#6A6E87"}
                        style={{ transition: "fill 0.3s ease" }}
                      />
                      <path
                        opacity={hoveredMarketing === index ? "1" : "0.3"}
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.7303 35.1664C15.5568 33.499 10.3602 32.4314 4.14062 31.9635C4.14062 31.8369 4.14062 24.6534 4.14062 10.4128H4.14067C4.14067 9.89505 4.56038 9.47534 5.07812 9.47534C5.08603 9.47534 5.09394 9.47544 5.10185 9.47564C10.4064 9.60993 15.711 10.8559 21.0156 13.2135C21.0156 13.2969 21.0156 20.3243 21.0156 34.2958H21.0157C21.0157 34.8136 20.5959 35.2333 20.0781 35.2333C19.959 35.2333 19.8409 35.2106 19.7303 35.1664Z"
                        fill="#6A6E87"
                        style={{ transition: "fill 0.3s ease" }}
                      />
                    </svg>
                  )}
                </div>

                <p className="text-xs 2xs:text-sm font-bold uppercase text-white">
                  {service.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Services, "services");
