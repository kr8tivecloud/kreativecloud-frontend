import React from "react";
import { templateImage } from "../../../../../public/images";
import Image from "next/image";

const recentlyViewed = [
  {
    id: "1",
    title: "Acuity Scheduling Template",
    price: 140,
    discount: 40,
    image: templateImage,
  },
  {
    id: "2",
    title: "Acuity Scheduling Site Tem",
    price: 140,
    discount: 40,
    image: templateImage,
  },
];

export default function RecentlyViewedTemplates() {
  return (
    <div className="mt-12">
      <h3 className="font-bold text-base">Recently Viewed</h3>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-5 mt-3">
        {recentlyViewed.map((item) => (
          <div key={item.id}>
            <Image
              src={item.image}
              alt={item.title}
              width={220}
              height={180}
              className="w-full h-44"
            />
            <p className="text-sm text-[#9F9F9F] line-clamp-1 my-1">
              {item.title}
            </p>
            <p className="text-base text-[#B7B7B7]">
              USD {((item.price * (100 - item.discount)) / 100).toFixed(2)}
            </p>
            {item.discount > 0 && (
              <div className="flex items-center gap-x-1 mb-2 text-[#B7B7B7] text-sm">
                <span className="line-through">USD {item.price}</span> (
                {item.discount}% off)
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
