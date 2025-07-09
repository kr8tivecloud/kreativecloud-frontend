import React from "react";
import Slider from "react-slick";
import images from "../../../../../public/images";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Prepare the sampleImages array with src and alt for each image
const sampleImages = [
  {
    src: images.landingPage.portfolio1,
    alt: "Portfolio 1",
  },
  {
    src: images.landingPage.portfolio2,
    alt: "Portfolio 2",
  },
  {
    src: images.landingPage.portfolio3,
    alt: "Portfolio 3",
  },
  {
    src: images.landingPage.portfolio4,
    alt: "Portfolio 4",
  },
  {
    src: images.landingPage.portfolio5,
    alt: "Portfolio 5",
  },
  {
    src: images.landingPage.portfolio6,
    alt: "Portfolio 6",
  },
  {
    src: images.landingPage.portfolio7,
    alt: "Portfolio 7",
  },
  {
    src: images.landingPage.portfolio8,
    alt: "Portfolio 8",
  },
  {
    src: images.landingPage.portfolio9,
    alt: "Portfolio 9",
  },
  {
    src: images.landingPage.portfolio10,
    alt: "Portfolio 10",
  },
  {
    src: images.landingPage.portfolio11,
    alt: "Portfolio 11",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 4000, // Transition speed
  slidesToShow: 4, // Number of images visible at once
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0, // Continuous movement
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  pauseOnFocus: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const InfiniteImageCarousel = () => {
  return (
    <div className="relative">
      <Slider {...settings}>
        {sampleImages.map((image, index) => (
          <div key={index} className="">
            <div className="flex-shrink-0 overflow-hidden duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                className="h-80 xs:h-72 lg:h-80 xl:h-96 object-cover w-full"
                width={0}
                height={256}
                // sizes="(max-width: 768px) 100vw, 50vw"
                // style={{ width: "auto", height: "256px" }}
                priority={index < 3}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default InfiniteImageCarousel;
