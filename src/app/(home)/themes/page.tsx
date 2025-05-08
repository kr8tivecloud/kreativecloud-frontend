import { AnimatedButton } from "@/components/AnimatedButton";
import Image from "next/image";
import React from "react";
import {
  cloudStartImage,
  cloudyBg,
  shopifyLogo,
} from "../../../../public/images";
// import

export default function ThemesPage() {
  return (
    <div className="pt-28 relative">
      {/* HERO  */}
      <div className="relative overflow-hidden">
        <div className="px-4 sm:container min-h-dvh pt-10 pb-32">
          <Image
            src={cloudyBg}
            alt=""
            className="absolute left-0 right-0 top-0 object-fill h-full w-full"
            style={{ objectFit: "cover" }}
          />
          <div className="relative z-[1]">
            <Image
              src={shopifyLogo}
              alt=""
              className="mx-auto max-w-xs sm:max-w-md"
            />
            <h1 className="font-bold text-2xl sm:text-4xl text-center max-w-3xl mx-auto">
              A straightforward and professional theme designed specifically for{" "}
              <br />
              <span className="bg-gradient-to-r from-[#0051B8] via-[#0B2C3E] to-[#5ABA1D] bg-clip-text text-transparent">
                new brands and startups
              </span>
            </h1>
            <p className="my-4 mx-auto text-center max-w-2xl">
              Best for startups, solopreneurs, and small businesses looking for
              a simple yet professional online presence without breaking the
              bank.
            </p>

            <div className="text-center my-10 space-y-2">
              <Image
                src={cloudStartImage}
                alt=""
                className="w-48 sm:w-72 mx-auto"
              />
              <p className="font-bold text-xl">Cloud Start</p>
            </div>

            <div className="flex items-center justify-center gap-x-6">
              <AnimatedButton variant="outline">DOWNLOAD NOW</AnimatedButton>
              <AnimatedButton variant="solid">VIEW LIVE DEMO</AnimatedButton>
            </div>
          </div>
        </div>
      </div>
      {/* END HERO */}

      <div className="px-4 sm:container py-10">
        <p className="font-bold text-3xl sm:text-4xl max-w-xl mx-auto text-center">
          Maximize your online impact —&nbsp;affordable, feature-packed, and
          powerful.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-x-10 max-w-3xl mx-auto mt-16 text-[#86868B] font-bold">
          <ul className="space-y-5">
            <li>
              <span className="text-white">Simple</span> and straightforward to
              use
            </li>
            <li>
              Extremely <span className="text-white">affordable</span> compared
              to most premium Shopify themes available.
            </li>
            <li>
              Clean, modern, and professional design{" "}
              <span className="text-white">ideal for new brands.</span>
            </li>
          </ul>
          <ul className="space-y-5">
            <li>
              <span className="text-white">SEO-ready</span> with essential meta
              tags for better visibility on search engines, helping you attract
              more customers
            </li>
            <li>
              Fully <span className="text-white">responsive</span>, ensuring
              seamless browsing experience across mobile, tablet, and desktop
              devices.
            </li>
          </ul>
        </div>
      </div>

      {/* CLOUD START FEATURES */}
      <div className="mt-20">
        <h2 className="font-bold text-2xl sm:text-4xl text-center bg-gradient-to-r from-[#0051B8] via-[#0B2C3E] to-[#5ABA1D] bg-clip-text text-transparent">
          Cloud Start Features
        </h2>
      </div>
      {/* END CLOUD START FEATURES */}
    </div>
  );
}
