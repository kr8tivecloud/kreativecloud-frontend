import { ServicePills } from "@/components/home/portfolio/ServicePills";
import React from "react";
import {
  GalleryImage,
  PortfolioGallery,
} from "../../../../../components/home/portfolio/PortfolioGallery";
import {
  NewPurposeCounsellingItem1,
  NewPurposeCounsellingItem2,
  NewPurposeCounsellingItem3,
  NewPurposeCounsellingItem4,
  NewPurposeCounsellingItem5,
} from "../../../../../../public/images";

const galleryImages: GalleryImage[] = [
  {
    src: NewPurposeCounsellingItem1,
    alt: "New Purpose Counselling Gallery 1",
    cols: 6,
  },
  {
    src: NewPurposeCounsellingItem2,
    alt: "New Purpose Counselling Gallery 2",
    cols: 2,
  },
  {
    src: NewPurposeCounsellingItem3,
    alt: "New Purpose Counselling Gallery 3",
    cols: 2,
  },
  {
    src: NewPurposeCounsellingItem4,
    alt: "New Purpose Counselling Gallery 4",
    cols: 2,
  },
  {
    src: NewPurposeCounsellingItem5,
    alt: "New Purpose Counselling Gallery 5",
    cols: 6,
  },
];

const services = ["Website", "UI/UX Design"];
const link = "https://gagagraphix.wixstudio.com/npcpllc";

export default function PageContent() {
  return (
    <div className="px-4 sm:container my-24">
      {/* TITLE */}
      <div>
        <h2 className="font-bold text-3xl">New Purpose Counselling</h2>
        <ServicePills services={services} />
        <p className="text-sm lg:text-base max-w-[670px]">
          New Purpose Counselling needed a warm, welcoming website to help
          clients find support and resources with ease. The project focused on
          creating a calming digital space that reflects the practice’s values
          and makes it simple for visitors to learn more, book sessions, and
          access helpful information.
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
