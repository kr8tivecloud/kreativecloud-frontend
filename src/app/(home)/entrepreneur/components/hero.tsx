"use client";

import React from "react";
import Image from "next/image";
import images from "../../../../../public/images";

type SocialLink = {
  Icon: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  {
    Icon: images.socialLinks.facebook,
    href: "#",
  },
  {
    Icon: images.socialLinks.twitter,
    href: "#",
  },
  {
    Icon: images.socialLinks.instagram,
    href: "#",
  },
  {
    Icon: images.socialLinks.linkedin,
    href: "#",
  },
];

const Hero = () => {
  return (
    <div className="w-full flex items-center gap-2">
      <div className="relative w-1/2 aspect-[671/831]">
        <Image
          src={images.entrepreneurPage.enterprenuerHero}
          alt="hero Image"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      <div className="w-1/2 flex flex-col">
        <p>Alejandra Cruz is a designer and artist from Barcelona, Spain.</p>
        <p>Her new collection is out now.</p>

        <div className="">
          <ul className="inline-flex gap-x-6">
            {socialLinks.map((link, index) => {
              return (
                <li key={`${link.href}-${index}`}>
                  <Image
                    src={link.Icon}
                    alt={`${index} social link`}
                    width={24}
                    height={24}
                    className="w-6 h-6"
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
