import { ServicePills } from "@/components/home/portfolio/ServicePills";
import React from "react";
import {
  GalleryImage,
  PortfolioGallery,
} from "../../../../../components/home/portfolio/PortfolioGallery";
import {
  CestDeLartItem1,
  CestDeLartItem2,
  CestDeLartItem3,
  CestDeLartItem4,
  CestDeLartItem5,
} from "../../../../../../public/images";

const galleryImages: GalleryImage[] = [
  {
    src: CestDeLartItem1,
    alt: "Exhibition 1",
    cols: 6,
  },
  {
    src: CestDeLartItem2,
    alt: "Exhibition 2",
    cols: 3,
  },
  {
    src: CestDeLartItem3,
    alt: "Exhibition 3",
    cols: 3,
  },
  {
    src: CestDeLartItem4,
    alt: "Exhibition 4",
    cols: 6,
  },
  {
    src: CestDeLartItem5,
    alt: "Exhibition 5",
    cols: 6,
  },
];

const services = ["Website", "UI/UX Design", "Branding"];
const link = " https://cestdelart.myshopify.com/";

export default function PageContent() {
  return (
    <div className="px-4 sm:container my-24">
      {/* TITLE */}
      <div>
        <h2 className="font-bold text-3xl">C’est de L’art</h2>
        <ServicePills services={services} />
        <p className="max-w-[670px]">
          C’est de l’art needed a refined Shopify store to reflect the artistic
          spirit of their clothing brand—so we delivered a tailored, elegant
          ecommerce platform that blends fashion with function.
          <br />
          <a target="_blank" href={link} className="underline text-[#FE922A]">
            View website
          </a>
        </p>

        {/* PASSWORD */}
        <div className="mt-4 bg-[#0F0E14] border border-white/25 inline-block px-4 py-2 rounded-full text-sm">
          Password: <span className="text-white font-bold">open</span>
        </div>
        {/* END PASSWORD */}
      </div>
      {/* END TITLE */}

      {/* PORTFOLIO GALLERY */}
      <PortfolioGallery images={galleryImages} />
      {/* END PORTFOLIO GALLERY */}
    </div>
  );
}
