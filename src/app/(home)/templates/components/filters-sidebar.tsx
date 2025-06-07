"use client";

import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { useFilter } from "./filter-context-provider";
import { Sheet, SheetContent, SheetTitle } from "@/components/shared/Sheet";
import { useIsMobile } from "@/lib/hooks/use-mobile";
import Checkbox from "@/components/Checkbox";

export default function FiltersSidebar() {
  const { open, setOpen } = useFilter();
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={"left"} className="bg-black">
          <SheetTitle className="sr-only">Template filter sheet</SheetTitle>
          <FilterSidebarContent />
        </SheetContent>
      </Sheet>
    );
  } else {
    return (
      <>
        <FilterSidebarContent />
      </>
    );
  }
}

function FilterSidebarContent() {
  // State to manage checkbox values
  const [filters, setFilters] = useState({
    "Social Media Templates": true,
    "Acuity Scheduling Templates": true,
    "Logos/3D logos": false,
    "Canva Templates": false,
    "3D Mockups": true,
    "Party Banners-Flyers": false,
    "Shopify Themes": false,
  } as const);

  type FilterKeys = keyof typeof filters;

  // Handle checkbox change
  const handleCheckboxChange = (key: FilterKeys) => {
    setFilters((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className={cn("pr-6 whitespace-nowrap")}>
      <div className="text-[#F8F8F8] font-bold text-sm">TEMPLATES</div>

      <ul className="space-y-4 mt-4">
        {Object.entries(filters).map(([key, isChecked]) => (
          <li key={key} className="flex items-center">
            {/* 
             <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(key as FilterKeys)}
            />
            */}
            <Checkbox
              checked={isChecked}
              onChange={() => handleCheckboxChange(key as FilterKeys)}
              className="w-4 h-4 mr-2"
            />
            <label className="text-sm">{key}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
