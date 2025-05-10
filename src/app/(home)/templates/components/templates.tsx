"use client";

import React from "react";
import { templateCalloutHero } from "../../../../../public/images";
import Image, { StaticImageData } from "next/image";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FaPlus } from "react-icons/fa6";
import { FiDownloadCloud } from "react-icons/fi";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { templates } from "@/lib/mock-data";

const adData = {
  id: "ad",
  category: "ad",
  items: [],
};

templates.splice(1, 0, adData);

export default function Templates() {
  return (
    <div className="flex-1">
      <div className="md:pl-6 border-0 md:border-l border-[#B7B7B7] space-y-6">
        {templates.map((template) => {
          if (template.id === "ad") {
            return (
              <div key={template.id}>
                {/* CUSTOM TEMPLATE AD */}
                <div className="flex flex-col-reverse lg:flex-row lg:items-stretch bg-[#1C1B1A] lg:max-h-[500px]">
                  <div className="max-w-full sm:max-w-96 mx-4 sm:mx-6 py-6 flex items-center">
                    <div>
                      <h2 className="font-bold text-2xl sm:text-4xl md:text-5xl">
                        Do you want a&nbsp;custom template?
                      </h2>
                      <p className="my-4 text-sm sm:text-base">
                        Get a professionally crafted custom template designed to
                        match your unique style and needs.
                      </p>
                      <AnimatedButton variant="outline">
                        GET STARTED
                      </AnimatedButton>
                    </div>
                  </div>
                  <div className="lg:flex-1">
                    <Image
                      src={templateCalloutHero}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* END CUSTOM TEMPLATE AD */}
              </div>
            );
          }
          return (
            <TemplateGroup
              key={template.id}
              title={template.category}
              items={template.items}
            />
          );
        })}
      </div>

      <div className="mt-10">
        <Pagination
          noOfPages={10}
          current={1}
          onNext={() => {}}
          onPrev={() => {}}
          gotoPage={() => {}}
        />
      </div>
    </div>
  );
}

type TemplateGroupProps = {
  title: string;
  items: {
    id: string;
    title: string;
    price: number;
    originalPrice: number;
    discount: string | null;
    type: string;
    bestseller: boolean;
    image: string | StaticImageData;
  }[];
};
function TemplateGroup({ title, items }: TemplateGroupProps) {
  const handleAddToCart = (id: string) => {
    // TODO: Implement add to cart functionality
    console.log("Add to cart:", id);
  };
  return (
    <div>
      <h3 className="font-bold text-base">{title}</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-3">
        {items.map((item) => {
          return (
            <div key={item.id}>
              <Link href={`/templates/${item.id}`} className="block w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={320}
                  height={320}
                  className="w-full"
                />
              </Link>
              <p className="text-sm text-[#9F9F9F] line-clamp-2 my-1">
                {item.title}
              </p>
              <p className="text-base text-[#B7B7B7]">USD {item.price}</p>
              <div className="flex items-center gap-x-1 mb-1">
                <FiDownloadCloud />

                <span className="text-[#B7B7B7] font-bold text-xs">
                  Digital Download
                </span>
              </div>

              <AnimatedButton
                onClick={() => handleAddToCart(item.id)}
                className="border-[#222222] flex items-center space-x-2 py-3 text-[#B7B7B7]"
              >
                <FaPlus size={14} />
                <span>Add to cart</span>
              </AnimatedButton>
            </div>
          );
        })}
      </div>
    </div>
  );
}
