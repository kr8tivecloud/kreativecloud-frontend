import React from "react";
import { FaX } from "react-icons/fa6";

const selectedCategories = [
  "Acuity Scheduling Templates",
  "Social Media Templates",
  "3D Mockups",
];

export default function SelectedCategories() {
  return (
    <div className="flex flex-1 flex-wrap gap-2 max-w-full">
      {selectedCategories.map((item) => {
        return (
          <div
            key={item}
            className="inline-flex items-center text-[#B7B7B7] text-sm border border-[#222222] rounded-md overflow-hidden"
          >
            <span className="px-2 py-1 sm:px-3 sm:py-2 whitespace-nowrap">
              {item}
            </span>
            <button className="p-1 sm:p-2 hover:bg-zinc-800">
              <FaX size={10} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
