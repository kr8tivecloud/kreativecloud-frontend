import { ServicePills } from "@/components/home/portfolio/ServicePills";
import React from "react";
import {
  GalleryImage,
  PortfolioGallery,
} from "../../../../../components/home/portfolio/PortfolioGallery";
import {
  PhyllisGunningItem1,
  PhyllisGunningItem2,
  PhyllisGunningItem3,
  PhyllisGunningItem4,
  PhyllisGunningItem5,
} from "../../../../../../public/images";

const galleryImages: GalleryImage[] = [
  {
    src: PhyllisGunningItem1,
    alt: "Exhibition 1",
    cols: 6,
  },
  {
    src: PhyllisGunningItem2,
    alt: "Exhibition 2",
    cols: 6,
  },
  {
    src: PhyllisGunningItem3,
    alt: "Exhibition 3",
    cols: 3,
  },
  {
    src: PhyllisGunningItem4,
    alt: "Exhibition 4",
    cols: 3,
  },
  {
    src: PhyllisGunningItem5,
    alt: "Exhibition 5",
    cols: 6,
  },
];

const services = ["Website", "UI/UX Design", "Branding"];
const link = "https://gagagraphix.wixstudio.com/pgunning";

export default function PageContent() {
  return (
    <div className="px-4 sm:container my-24">
      {/* TITLE */}
      <div>
        <h2 className="font-bold text-3xl">Phyllis Gunning, LLC</h2>
        <ServicePills services={services} />
        <p className="max-w-[670px]">
          We helped Phyllis Gunning, LLC bring new life to their website,
          keeping the original tone but adding energy, motion, and a refreshed
          feel.
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
