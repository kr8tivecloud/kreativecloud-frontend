import React from "react";
import { FaX } from "react-icons/fa6";

const selectedCategories = [
  "Acuity Scheduling Templates",
  "Social Media Templates",
  "3D Mockups",
];

export default function SelectedCategories() {
  return (
    <div className="flex flex-wrap gap-2">
      {selectedCategories.map((item) => {
        return (
          <div
            key={item}
            className="inline-flex items-center text-[#B7B7B7] text-sm border border-[#222222]"
          >
            <span className="p-2">{item}</span>
            <button className="p-2">
              <FaX size={12} />
            </button>
          </div>
        );
      })}
    </div>
  );
}
