"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Logo from "@/assets/images/logo.svg";
import { IconNavLinkType, NavLinkType } from "@/lib/types";
import Link from "next/link";
import {
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa6";

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
  const blockSize = 50; // Size of grid cells
  const highlightDuration = 500; // Highlight duration in ms

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const highlightContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const highlightContainer = highlightContainerRef.current!;
    const ctx = canvas.getContext("2d")!;
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    canvas.width = screenWidth;
    canvas.height = screenHeight;

    const columns = Math.ceil(screenWidth / blockSize);
    const rows = Math.ceil(screenHeight / blockSize);

    // Draw the grid
    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
      ctx.lineWidth = 1;

      for (let x = 0; x < columns * blockSize; x += blockSize) {
        for (let y = 0; y < rows * blockSize; y += blockSize) {
          ctx.beginPath();
          ctx.rect(x, y, blockSize, blockSize);
          ctx.stroke();
        }
      }
    };

    // Highlight a box
    const highlightBox = (x: number, y: number) => {
      const gridX = Math.floor(x / blockSize);
      const gridY = Math.floor(y / blockSize);
      const overlayX = gridX * blockSize;
      const overlayY = gridY * blockSize;

      const highlightBox = document.createElement("div");
      highlightBox.className =
        "absolute border-2 border-white bg-black pointer-events-none";
      highlightBox.style.width = `${blockSize}px`;
      highlightBox.style.height = `${blockSize}px`;
      highlightBox.style.left = `${overlayX}px`;
      highlightBox.style.top = `${overlayY}px`;
      highlightBox.style.transition = "opacity 0.5s ease";

      highlightContainer.appendChild(highlightBox);

      setTimeout(() => {
        highlightBox.style.opacity = "0";
        setTimeout(() => highlightContainer.removeChild(highlightBox), 500);
      }, highlightDuration);
    };

    // Handle mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      highlightBox(x, y);
    };

    // Resize handler
    const handleResize = () => {
      screenWidth = window.innerWidth;
      screenHeight = window.innerHeight;
      canvas.width = screenWidth;
      canvas.height = screenHeight;
      drawGrid();
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    drawGrid();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <footer className="bg-black relative">
        <div className="absolute inset-0">
          {/* Canvas for the grid */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
          />

          {/* Overlay container for highlights */}
          <div
            ref={highlightContainerRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
          />
        </div>
        <div className="relative z-[1] px-4 sm:container my-16 flex flex-col min-h-[350px]">
          {/* FOOTER TOP */}
          <div className="flex gap-x-6 gap-y-6 flex-1 items-start flex-col md:flex-row">
            {/* LOGO */}
            <div className="flex-1">
              <Image src={Logo} alt="Logo" width={172} height={29} />
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
