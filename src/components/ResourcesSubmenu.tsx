import React, { useState } from "react";
import ServicesImage from "@/assets/images/navbar/services-image.png";
import PortfolioImage from "@/assets/images/navbar/portfolio-image.png";
import PrivacyPolicyImage from "@/assets/images/navbar/privacy-policy-image.png";
import TermsOfServiceImage from "@/assets/images/navbar/terms-of-service-image.png";
import OurTeamImage from "@/assets/images/navbar/our-team-image.png";
import Image, { StaticImageData } from "next/image";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

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
    title: "Our Team",
    href: "/team",
    image: OurTeamImage,
  },
  {
    title: "Privacy Policy",
    href: "/privacy-policy",
    image: PrivacyPolicyImage,
  },
  {
    title: "Terms of Service",
    href: "/terms",
    image: TermsOfServiceImage,
  },
];

export default function ResourcesSubmenu() {
  const [current, setCurrent] = useState(0);
  const pathname = usePathname();

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
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  `inline-flex items-center gap-x-1 text-[#999999] relative hover:text-[#FE922A] no-underline transition-[background-size] duration-500 
         [background:linear-gradient(#FE922A_0_0)_bottom_left/_var(--underline-width,0%)_0.1em_no-repeat]
         hover:[--underline-width:100%] [&:hover>svg]:opacity-100`,
                  isActive && "text-white"
                )}
                onMouseOver={() => setCurrent(index)}
              >
                <span>{link.title}</span>
                <MdOutlineArrowOutward
                  className={cn("opacity-0 transition-opacity")}
                />{" "}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
