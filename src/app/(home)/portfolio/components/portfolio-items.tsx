"use client";

import CategoryPicker from "@/components/CategoryPicker";
import React, { useState } from "react";
import {
  AtkinsMockup,
  BlackdiamondMockup,
  WnyICCMockup,
} from "../../../../../public/images";
import Image from "next/image";

const categories = [
  "All",
  "Fashion",
  "Beauty",
  "Health Care",
  "Music",
  "Entertainment",
  "Small Business",
];

const portfolioData = [
  {
    name: "Black Diamond Entertainment",
    image: BlackdiamondMockup,
    services: ["Website", "UI/UX Design", "Branding", "Marketing"],
  },
  {
    name: "Atkins Attire",
    image: AtkinsMockup,
    services: ["Website", "UI/UX Design"],
  },
  {
    name: "New Purpose Counselling PLLC",
    image: AtkinsMockup,
    services: ["Website", "UI/UX Design"],
  },
  {
    name: "WNYICC",
    image: WnyICCMockup,
    services: ["Website", "UI/UX Design"],
  },
];

export default function PortfolioItems() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  return (
    <div className="px-4 sm:container mt-4 mb-28">
      {/* CATEGORY PICKER */}
      <CategoryPicker
        categories={categories}
        selected={selectedCategories}
        setSelected={setSelectedCategories}
        className="mt-4 mb-6"
      />
      {/* END CATEGORY PICKER */}

      {/* PORTFOLIOS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-16">
        {portfolioData.map((item) => {
          return (
            <div key={item.name}>
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
          );
        })}
      </div>
      {/* END PORTFOLIOS */}
    </div>
  );
}
