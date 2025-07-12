"use client";

import { CategoryPickerSingle } from "@/components/CategoryPicker";
import React, { useState } from "react";
import {
  AtkinsMockup,
  BlackdiamondMockup,
  WnyICCMockup,
} from "../../../../../public/images";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type PortfolioData = {
  name: string;
  image: StaticImageData;
  services: string[];
  category: string[];
  link: string;
};

const categories = [
  "All",
  "Fashion",
  "Beauty",
  "Health Care",
  "Music",
  "Entertainment",
  "Small Business",
];

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
    image: AtkinsMockup,
    services: ["Website", "UI/UX Design"],
    category: ["Health Care"],
    link: "/portfolio/new-purpose-counselling",
  },
  {
    name: "WNYICC",
    image: WnyICCMockup,
    services: ["Website", "UI/UX Design", "Marketing"],
    category: ["Health Care"],
    link: "/portfolio/wnyicc",
  },
];

export default function PortfolioItems() {
  // Use undefined for "All"
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    undefined
  );

  const filteredPortfolios = portfolioData.filter((portfolio) => {
    if (!selectedCategory || selectedCategory.toLowerCase() === "all") {
      return true;
    }
    return portfolio.category.includes(selectedCategory);
  });

  // Custom setter to treat "All" as undefined
  function handleSetSelectedCategory(value: string | undefined) {
    if (!value || !categories.includes(value)) {
      setSelectedCategory("All");
    } else {
      setSelectedCategory(value);
    }
  }

  return (
    <div className="px-4 sm:container mt-16 mb-28">
      {/* CATEGORY PICKER */}
      <CategoryPickerSingle
        categories={categories}
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
              <div>
                <Image src={item.image} alt="" width={652} height={384} />

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
