import { ServicePills } from "@/components/home/portfolio/ServicePills";
import React from "react";
import {
  GalleryImage,
  PortfolioGallery,
} from "../../../../../components/home/portfolio/PortfolioGallery";
import {
  BlackdiamondItem1,
  BlackdiamondItem2,
  BlackdiamondItem3,
  BlackdiamondItem4,
  BlackdiamondItem5,
  BlackdiamondItem6,
  BlackdiamondItem7,
  BlackdiamondItem8,
} from "../../../../../../public/images";

const galleryImages: GalleryImage[] = [
  {
    src: BlackdiamondItem1,
    alt: "Exhibition 1",
    cols: 6,
  },
  {
    src: BlackdiamondItem2,
    alt: "Exhibition 2",
    cols: 3,
  },
  {
    src: BlackdiamondItem3,
    alt: "Exhibition 3",
    cols: 3,
  },
  {
    src: BlackdiamondItem4,
    alt: "Exhibition 4",
    cols: 6,
  },
  {
    src: BlackdiamondItem5,
    alt: "Exhibition 5",
    cols: 2,
  },
  {
    src: BlackdiamondItem6,
    alt: "Exhibition 6",
    cols: 2,
  },
  {
    src: BlackdiamondItem7,
    alt: "Exhibition 7",
    cols: 2,
  },
  {
    src: BlackdiamondItem8,
    alt: "Exhibition 8",
    cols: 6,
  },
];

const services = ["Website", "UI/UX Design", "Branding", "Marketing"];
const link = "https://eventsbyblackdiamond.com";

export default function PageContent() {
  return (
    <div className="px-4 sm:container my-24">
      {/* TITLE */}
      <div>
        <h2 className="font-bold text-3xl">Black Diamond Entertainment</h2>
        <ServicePills services={services} />
        <p className="max-w-[670px]">
          Black Diamond Entertainment needed a modern, engaging, and easy-to-use
          website to showcase their services, highlight past events, and
          simplify the booking process.
          <br />
          <a target="_blank" href={link} className="underline text-[#FE922A]">
            view website
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
