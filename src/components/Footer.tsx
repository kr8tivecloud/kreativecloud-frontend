"use client";

import Image from "next/image";
import React from "react";
import { IconNavLinkType, NavLinkType } from "@/lib/types";
import Link from "next/link";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";
import images from "../../public/images";

const serviceLinks: NavLinkType[] = [
  {
    title: "Get in touch",
    href: "/contact",
  },
  {
    title: "Careers",
    href: "/careers",
  },
].map((link, index) => ({ ...link, id: index + 1 }));

const resourceLinks: NavLinkType[] = [
  {
    title: "Portfolio",
    href: "/portfolio",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Templates",
    href: "/templates",
  },
].map((link, index) => ({ ...link, id: index + 1 }));

const policyLinks: NavLinkType[] = [
  {
    title: "Privacy policy",
    href: "/privacy-policy",
  },
  {
    title: "Terms of services",
    href: "/terms",
  },
].map((link, index) => ({ ...link, id: index + 1 }));

const socialLinks: IconNavLinkType[] = [
  {
    Icon: FaFacebookF,
    href: "#",
  },
  {
    Icon: FaXTwitter,
    href: "#",
  },
  {
    Icon: FaInstagram,
    href: "#",
  },
  {
    Icon: FaLinkedinIn,
    href: "#",
  },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-black">
        <div className="relative px-4 sm:px-12 my-16 flex flex-col gap-y-12 min-h-[350px]">
          {/* FOOTER TOP */}
          <div className="flex gap-x-6 gap-y-6 flex-1 items-start flex-col md:flex-row">
            {/* LOGO */}
            <div className="flex-1">
              <Image src={images.logo} alt="Logo" width={172} height={29} />
            </div>
            {/* END LOGO */}

            {/* SERVICES */}
            <nav className="flex-1">
              <p className="font-bold">Services</p>

              <ul className="md:mt-6 space-y-2 md:space-y-4 mt-2">
                {serviceLinks.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        className="text-[#999999] hover:text-gray-300 transition-colors"
                        href={link.href}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {/* END SERVICES */}

            {/* RESOURCES */}
            <nav className="flex-1">
              <p className="font-bold">Resources</p>

              <ul className="md:mt-6 space-y-2 md:space-y-4 mt-2">
                {resourceLinks.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        className="text-[#999999] hover:text-gray-300 transition-colors"
                        href={link.href}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {/* END RESOURCES */}

            {/* POLICIES */}
            <nav className="flex-1">
              <p className="font-bold">Policies</p>

              <ul className="md:mt-6 space-y-2 md:space-y-4 mt-2">
                {policyLinks.map((link) => {
                  return (
                    <li key={link.href}>
                      <Link
                        className="text-[#999999] hover:text-gray-300 transition-colors"
                        href={link.href}
                      >
                        {link.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {/* END POLICIES */}
          </div>
          {/* END FOOTER TOP */}

          {/* FOOTER BOTTOM */}
          <div className="text-[#999999] text-sm flex justify-between flex-col-reverse md:flex-row gap-y-4 gap-x-6">
            {/* COPYRIGHT NOTICE */}
            <p className="flex-1">
              &copy; {new Date().getFullYear()} Kreative Cloud. All rights
              reserved
            </p>
            {/* END COPYRIGHT NOTICE */}

            {/* SOCIALS */}
            <nav className="flex-1 flex md:justify-center">
              <ul className="inline-flex gap-x-6">
                {socialLinks.map((link, index) => {
                  return (
                    <li key={`${link.href}-${index}`}>
                      <Link
                        href={link.href}
                        className="size-12 rounded-full grid place-items-center border border-[#F8F8F8] hover:bg-[#F8F8F8] hover:text-black transition-colors"
                      >
                        <link.Icon />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {/* END SOCIALS */}

            {/* LAYOUT FIX */}
            <div className="flex-1"></div>
            {/* END LAYOUT FIX */}
          </div>
          {/* ENd FOOTER BOTTOM */}
        </div>
      </footer>
    </>
  );
}
