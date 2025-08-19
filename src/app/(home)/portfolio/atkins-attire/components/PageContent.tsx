import { ServicePills } from "@/components/home/portfolio/ServicePills";
import React from "react";
import {
  AtkinsAttireItem1,
  AtkinsAttireItem2,
  AtkinsAttireItem3,
  AtkinsAttireItem4,
  AtkinsAttireItem5,
  AtkinsAttireItem6,
  AtkinsAttireItem7,
  AtkinsAttireItem8,
} from "../../../../../../public/images";
import {
  GalleryImage,
  PortfolioGallery,
} from "@/components/home/portfolio/PortfolioGallery";
import { MdOutlineArrowOutward } from "react-icons/md";

const galleryImages: GalleryImage[] = [
  {
    src: AtkinsAttireItem1,
    alt: "Atkins Attire Gallery 1",
    cols: 6,
  },
  {
    src: AtkinsAttireItem2,
    alt: "Atkins Attire Gallery 2",
    cols: 3,
  },
  {
    src: AtkinsAttireItem3,
    alt: "Atkins Attire Gallery 3",
    cols: 3,
  },
  {
    src: AtkinsAttireItem4,
    alt: "Atkins Attire Gallery 4",
    cols: 6,
  },
  {
    src: AtkinsAttireItem5,
    alt: "Atkins Attire Gallery 5",
    cols: 2,
  },
  {
    src: AtkinsAttireItem6,
    alt: "Atkins Attire Gallery 6",
    cols: 2,
  },
  {
    src: AtkinsAttireItem7,
    alt: "Atkins Attire Gallery 7",
    cols: 2,
  },
  {
    src: AtkinsAttireItem8,
    alt: "Atkins Attire Gallery 8",
    cols: 6,
  },
];

const services = ["Website", "UI/UX Design", "Branding", "Marketing"];
const link = "https://atkinsattiregallery.com";

export default function PageContent() {
  return (
    <div className="px-4 sm:container my-24">
      {/* TITLE */}
      <div>
        <h2 className="font-bold text-3xl">Atkins Attire</h2>
        <ServicePills services={services} />
        <p className="text-sm lg:text-base max-w-[670px]">
          Atkins Attire needed a sleek, modern Shopify website to launch his
          clothing brand, tell his story, and make shopping effortless. As a
          solo entrepreneur, he wanted a bold digital space that showcased his
          collection, captured his brand vibe, and set the stage for growth.{" "}
          <br />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={link}
            className="inline-flex items-center gap-0.5 underline text-[#FE922A]"
          >
            View website
            <MdOutlineArrowOutward
              className="inline-block"
              aria-hidden="true"
            />
          </a>
        </p>
      </div>
      {/* END TITLE */}

      {/* PORTFOLIO GALLERY */}
      <PortfolioGallery images={galleryImages} />
      {/* END PORTFOLIO GALLERY */}
    </div>
  );
}
