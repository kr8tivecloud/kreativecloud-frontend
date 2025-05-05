"use client";

import React, { useState } from "react";

export default function Filters() {
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
    <div className="pr-6 hidden sm:block border-0 border-r whitespace-nowrap">
      <div className="text-[#F8F8F8] font-bold text-sm">TEMPLATES</div>

      <ul className="space-y-4 mt-4">
        {Object.entries(filters).map(([key, isChecked]) => (
          <li key={key} className="flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleCheckboxChange(key as FilterKeys)}
              className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2 mr-2"
            />
            <label className="text-sm">{key}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
