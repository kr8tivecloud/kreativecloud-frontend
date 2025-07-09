import { ServicePills } from "@/components/home/portfolio/ServicePills";
import React from "react";
import {
  GalleryImage,
  PortfolioGallery,
} from "../../../../../components/home/portfolio/PortfolioGallery";
import { WnyICCItem1, WnyICCItem2 } from "../../../../../../public/images";

const galleryImages: GalleryImage[] = [
  {
    src: WnyICCItem1,
    alt: "WNYICC Gallery 1",
    cols: 6,
  },
  {
    src: WnyICCItem2,
    alt: "WNYICC Gallery 2",
    cols: 6,
  },
];

const services = ["Website", "UI/UX Design", "Marketing"];
const link = "https://www.wnyicc.com/";

export default function PageContent() {
  return (
    <div className="px-4 sm:container my-24">
      {/* TITLE */}
      <div>
        <h2 className="font-bold text-3xl">WNYICC</h2>
        <ServicePills services={services} />
        <p className="text-sm lg:text-base max-w-[670px]">
          WNYICC needed a modern, accessible website to help patients and
          providers easily find information and resources. The project focused
          on creating a clean, professional digital presence that reflects the
          organization’s commitment to care and makes it simple for visitors to
          learn more, get in touch, and access important services.
          <br />
          <a target="_blank" href={link} className="underline text-[#FE922A]">
            {link}
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
