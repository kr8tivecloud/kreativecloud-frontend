import React from "react";
import Image from "next/image";
import {
  BlackdiamondItem1,
  BlackdiamondItem2,
  BlackdiamondItem3,
  BlackdiamondItem4,
  BlackdiamondItem5,
  BlackdiamondItem6,
  BlackdiamondItem7,
  BlackdiamondItem8,
} from "../../../../../public/images";

const services = ["Website", "UI/UX Design", "Branding", "Marketing"];

export default function PortfolioDetailsPage() {
  return (
    <div className="px-4 sm:container my-24">
      {/* TITLE */}
      <div>
        <h2 className="font-bold text-3xl">Black Diamond Entertainment</h2>

        <div className="flex flex-wrap gap-2 sm:gap-3 my-2">
          {services.map((service) => {
            return (
              <div
                key={service}
                className="bg-[#15151D] bg-opacity-25 border border-white/25 py-1 px-2.5 text-white/75"
              >
                {service}
              </div>
            );
          })}
        </div>

        <p className="max-w-[670px]">
          She designs from the point of view of outcasts and misfits, bringing a
          new perspective and incisive wit to her tales of relationships gone
          wrong. With a smoky voice trained on{" "}
        </p>
      </div>
      {/* END TITLE */}

      {/* PORTFOLIO GALLERY */}
      <div className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-[min(740px,_80vh)_min(637px,_60vh)_min(740px,_80vh)_min(460px,_60vh)_min(740px,_80vh)] gap-4 lg:gap-6 mt-8">
        <Image
          src={BlackdiamondItem1}
          alt="Exhibition 1"
          className="w-full h-full object-cover max-h-[80vh] lg:col-span-6"
        />
        <Image
          src={BlackdiamondItem2}
          alt="Exhibition 2"
          className="w-full h-full object-cover max-h-[80vh] lg:col-span-3"
        />
        <Image
          src={BlackdiamondItem3}
          alt="Exhibition 3"
          className="w-full h-full object-cover max-h-[80vh] lg:col-span-3"
        />
        <Image
          src={BlackdiamondItem4}
          alt="Exhibition 4"
          className="w-full h-full object-cover max-h-[80vh] lg:col-span-6"
        />
        <Image
          src={BlackdiamondItem5}
          alt="Exhibition 5"
          className="w-full h-full object-cover max-h-[80vh] lg:col-span-2"
        />
        <Image
          src={BlackdiamondItem6}
          alt="Exhibition 6"
          className="w-full h-full object-cover max-h-[80vh] lg:col-span-2"
        />
        <Image
          src={BlackdiamondItem7}
          alt="Exhibition 7"
          className="w-full h-full object-cover max-h-[80vh] lg:col-span-2"
        />
        <Image
          src={BlackdiamondItem8}
          alt="Exhibition 8"
          className="w-full h-full object-cover max-h-[80vh] lg:col-span-6"
        />
      </div>
      {/* END PORTFOLIO GALLERY */}
    </div>
  );
}
