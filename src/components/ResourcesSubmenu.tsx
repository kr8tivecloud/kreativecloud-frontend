import React, { useState } from "react";
import ServicesImage from "@/assets/images/navbar/services-image.png";
import PortfolioImage from "@/assets/images/navbar/portfolio-image.png";
import PrivacyPolicyImage from "@/assets/images/navbar/privacy-policy-image.png";
import TermsOfServiceImage from "@/assets/images/navbar/terms-of-service-image.png";
import Image, { StaticImageData } from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

type ResourcesLink = {
  title: string;
  href: string;
  image: StaticImageData;
};

const resourcesLinks: ResourcesLink[] = [
  {
    title: "Services",
    href: "/services",
    image: ServicesImage,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    image: PortfolioImage,
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    image: PrivacyPolicyImage,
  },
  {
    title: "Terms of Service",
    href: "/terms-of-service",
    image: TermsOfServiceImage,
  },
];

export default function ResourcesSubmenu() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="max-w-3xl mx-auto flex items-start gap-x-16 justify-between">
      {/* Animat the changing of the image */}
      <Image
        src={resourcesLinks[current].image}
        className="max-w-[450px] h-[354px] max-lg:hidden"
        alt=""
      />

      <ul className="flex-1 text-sm lg:text-3xl whitespace-nowrap space-y-2 lg:space-y-8">
        {resourcesLinks.map((link, index) => {
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex items-center text-[#999999] relative hover:text-white no-underline transition-[background-size] duration-500 
         [background:linear-gradient(#ffffff_0_0)_bottom_left/_var(--underline-width,0%)_0.1em_no-repeat]
         hover:[--underline-width:100%]"
                onMouseOver={() => setCurrent(index)}
              >
                <span>{link.title}</span>
                <MdOutlineArrowOutward className=" hover:underline" />{" "}
                {/* Make it an animated underline, and add animations to the hover of the menu */}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
