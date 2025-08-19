import { ServicePills } from "@/components/home/portfolio/ServicePills";
import React from "react";
import {
  GalleryImage,
  PortfolioGallery,
} from "../../../../../components/home/portfolio/PortfolioGallery";
import {
  RawConnectionItem1,
  RawConnectionItem2,
  RawConnectionItem3,
  RawConnectionItem4,
} from "../../../../../../public/images";

const galleryImages: GalleryImage[] = [
  {
    src: RawConnectionItem1,
    alt: "Exhibition 1",
    cols: 6,
  },
  {
    src: RawConnectionItem2,
    alt: "Exhibition 2",
    cols: 3,
  },
  {
    src: RawConnectionItem3,
    alt: "Exhibition 3",
    cols: 3,
  },
  {
    src: RawConnectionItem4,
    alt: "Exhibition 4",
    cols: 6,
  },
];

const services = ["Website", "UI/UX Design", "Branding"];
const link = " https://rawconnection.myshopify.com/";

export default function PageContent() {
  return (
    <div className="px-4 sm:container my-24">
      {/* TITLE */}
      <div>
        <h2 className="font-bold text-3xl">Raw Connection</h2>
        <ServicePills services={services} />
        <p className="max-w-[670px]">
          Raw Connection needed a reliable Shopify setup to sell their products
          online, so they turned to us. We built a clean, scalable store
          tailored to their brand and business goals.
          <br />
          <a target="_blank" href={link} className="underline text-[#FE922A]">
            View website
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
