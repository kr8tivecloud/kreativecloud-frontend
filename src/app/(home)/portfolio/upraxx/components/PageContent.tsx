import { ServicePills } from "@/components/home/portfolio/ServicePills";
import React from "react";
import {
  GalleryImage,
  PortfolioGallery,
} from "../../../../../components/home/portfolio/PortfolioGallery";
import {
  UpraxxItem1,
  UpraxxItem2,
  UpraxxItem3,
  UpraxxItem4,
  UpraxxItem5,
} from "../../../../../../public/images";

const galleryImages: GalleryImage[] = [
  {
    src: UpraxxItem1,
    alt: "Exhibition 1",
    cols: 6,
  },
  {
    src: UpraxxItem2,
    alt: "Exhibition 2",
    cols: 3,
  },
  {
    src: UpraxxItem3,
    alt: "Exhibition 3",
    cols: 3,
  },
  {
    src: UpraxxItem4,
    alt: "Exhibition 4",
    cols: 6,
  },
  {
    src: UpraxxItem5,
    alt: "Exhibition 5",
    cols: 6,
  },
];

const services = ["Website", "UI/UX Design", "Branding", "Marketing"];
const link = "https://www.upraxx.com/";

export default function PageContent() {
  return (
    <div className="px-4 sm:container my-24">
      {/* TITLE */}
      <div>
        <h2 className="font-bold text-3xl">Upraxx</h2>
        <ServicePills services={services} />
        <p className="max-w-[670px]">
          Upraxx wanted more than a template, they needed a custom-built site to
          showcase their bold clothing brand, so we delivered a fully tailored
          platform with dynamic visuals and a smooth user flow.
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
