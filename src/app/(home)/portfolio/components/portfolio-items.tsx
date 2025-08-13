"use client";

import { CategoryPickerSingle } from "@/components/CategoryPicker";
import React, { useState } from "react";
import {
  AtkinsMockup,
  BlackdiamondMockup,
  NewPurposeCounsellingItem1 as NewPurposeMockup,
  CafeItem1 as CafeMockup,
  CestDeLartItem1 as CestDeLartMockup,
  MekkachItem1 as MekkachiMockup,
  PhyllisGunningItem1 as PhyllisGunningMockup,
  RawConnectionItem1 as RawConnectionMockup,
  UpraxxItem1 as UpraxxMockup,

  // WnyICCMockup,
} from "../../../../../public/images";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

const categories = [
  "All",
  "Fashion",
  "Beauty",
  "Health Care",
  "Music",
  "Entertainment",
  "Small Business",
] as const;

type Category = (typeof categories)[number];

type PortfolioData = {
  name: string;
  image: StaticImageData;
  services: string[];
  category: Exclude<(typeof categories)[number], "All">[];
  link: string;
};

const portfolioData: PortfolioData[] = [
  {
    name: "Black Diamond Entertainment",
    image: BlackdiamondMockup,
    services: ["Website", "UI/UX Design", "Branding", "Marketing"],
    category: ["Entertainment"],
    link: "/portfolio/blackdiamond",
  },
  {
    name: "Atkins Attire",
    image: AtkinsMockup,
    services: ["Website", "UI/UX Design"],
    category: ["Fashion", "Small Business"],
    link: "/portfolio/atkins-attire",
  },
  {
    name: "New Purpose Counselling PLLC",
    image: NewPurposeMockup,
    services: ["Website", "UI/UX Design"],
    category: ["Health Care"],
    link: "/portfolio/new-purpose-counselling",
  },
  {
    name: "Cafe",
    image: CafeMockup,
    services: ["Website", "UI/UX Design"],
    category: ["Fashion", "Small Business"],
    link: "/portfolio/cafe",
  },
  {
    name: "C’est de L’art",
    image: CestDeLartMockup,
    services: ["Website", "UI/UX Design", "Branding"],
    category: ["Fashion", "Small Business"],
    link: "/portfolio/cest-de-lart",
  },
  {
    name: "Mekkachi",
    image: MekkachiMockup,
    services: ["Website", "UI/UX Design", "Branding", "Marketing"],
    category: ["Fashion", "Small Business"],
    link: "/portfolio/mekkachi",
  },
  {
    name: "Raw Connection",
    image: RawConnectionMockup,
    services: ["Website", "UI/UX Design", "Branding"],
    category: ["Small Business"],
    link: "/portfolio/raw-connection",
  },
  {
    name: "Phyllis Gunning, LLC",
    image: PhyllisGunningMockup,
    services: ["Website", "UI/UX Design", "Branding"],
    category: ["Small Business"],
    link: "/portfolio/phyllis-gunning",
  },
  {
    name: "Upraxx",
    image: UpraxxMockup,
    services: ["Website", "UI/UX Design", "Branding", "Marketing"],
    category: ["Fashion", "Small Business"],
    link: "/portfolio/upraxx",
  },
  // {
  //   name: "WNYICC",
  //   image: WnyICCMockup,
  //   services: ["Website", "UI/UX Design", "Marketing"],
  //   category: ["Health Care"],
  //   link: "/portfolio/wnyicc",
  // },
];

export default function PortfolioItems() {
  // Use undefined for "All"
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(undefined);

  const filteredPortfolios = portfolioData.filter((portfolio) => {
    if (!selectedCategory || selectedCategory === "All") {
      return true;
    }
    return portfolio.category.includes(selectedCategory);
  });

  // Custom setter to treat "All" as undefined
  function handleSetSelectedCategory(value: string | undefined) {
    if (!value || !categories.includes(value as Category)) {
      setSelectedCategory("All");
    } else {
      setSelectedCategory(value as Category);
    }
  }

  return (
    <div className="px-4 sm:container mb-28">
      {/* CATEGORY PICKER */}
      <CategoryPickerSingle
        categories={categories as unknown as string[]}
        selected={selectedCategory ?? "All"}
        setSelected={handleSetSelectedCategory}
        className="mt-4 mb-6"
      />
      {/* END CATEGORY PICKER */}

      {/* PORTFOLIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
        {filteredPortfolios.map((item) => {
          return (
            <Link key={item.name} href={item.link}>
              {/* <div className="w-full h-full flex flex-col">
                <Image
                  src={item.image}
                  alt=""
                  width={652}
                  height={384}
                  className="flex-1"
                /> */}
              <div>
                <Image
                  src={item.image}
                  alt=""
                  width={652}
                  height={384}
                  className="aspect-video object-cover"
                />

                <div className="mt-4">
                  <div className="font-bold text-2xl lg:text-3xl">
                    {item.name}
                  </div>
                  <div className="text-sm lg:text-base text-white/50 mt-0.5">
                    {item.services?.join(" / ")}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* END PORTFOLIOS */}
    </div>
  );
}
