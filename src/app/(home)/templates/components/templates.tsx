"use client";

import React from "react";
import {
  templateCalloutHero,
  templateImage,
} from "../../../../../public/images";
import Image, { StaticImageData } from "next/image";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FaPlus } from "react-icons/fa6";
import { FiDownloadCloud } from "react-icons/fi";
import Link from "next/link";

const templates: {
  id: string;
  category: string;
  items: {
    id: string;
    title: string;
    price: number;
    originalPrice: number;
    discount: string | null;
    type: string;
    bestseller: boolean;
    image: StaticImageData;
  }[];
}[] = [
  {
    id: "1",
    category: "Acuity Scheduling Templates",
    items: [
      {
        id: "1",
        title: "The braid house appointment prep...",
        price: 150,
        originalPrice: 0,
        discount: null,
        type: "Digital Download",
        bestseller: true,
        image: templateImage,
      },
      {
        id: "2",
        title: "4X Fall Season Bundle Flyer, DIY...",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
      {
        id: "3",
        title: "Halloween Beauty Salon Canva T...",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
    ],
  },
  {
    id: "2",
    category: "Social Media Templates",
    items: [
      {
        id: "1",
        title: "60 Social Media Bundle Flyer, DIY...",
        price: 50,
        originalPrice: 100,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
      {
        id: "2",
        title: "200 Instagram Post Template for W...",
        price: 50,
        originalPrice: 100,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
      {
        id: "3",
        title: "60 Social Media Bundle Flyer, DIY...",
        price: 50,
        originalPrice: 100,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
    ],
  },
  {
    id: "3",
    category: "Website Templates",
    items: [
      {
        id: "1",
        title: "ZX Fall Season Shopify Website Te...",
        price: 250,
        originalPrice: 1000,
        discount: "75% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
      {
        id: "2",
        title: "Creative Kit - Canva presentation...",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
      {
        id: "3",
        title: "PowerPoint Presentation Templat...",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
    ],
  },
  {
    id: "4",
    category: "3D Mockups",
    items: [
      {
        id: "1",
        title: "Kreative Cloud T-shirt",
        price: 150,
        originalPrice: 0,
        discount: "0%",
        type: "Digital Download",
        bestseller: true,
        image: templateImage,
      },
      {
        id: "2",
        title: "Kreative Cloud Sweats",
        price: 50,
        originalPrice: 100,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
      {
        id: "3",
        title: "Kreative Cloud Ski",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: templateImage,
      },
    ],
  },
];

export default function Templates() {
  return (
    <div className="md:pl-6 border-[#B7B7B7] space-y-6">
      {/* CUSTOM TEMPLATE */}
      <div className="flex flex-col-reverse lg:flex-row lg:items-stretch bg-[#1C1B1A]">
        <div className="max-w-full sm:max-w-96 mx-4 sm:mx-6 py-6">
          <h2 className="font-bold text-2xl sm:text-4xl">
            Do you want a custom template?
          </h2>
          <p className="my-4 text-sm sm:text-base">
            Get a professionally crafted custom template designed to match your
            unique style and needs.
          </p>
          <AnimatedButton variant="outline">GET STARTED</AnimatedButton>
        </div>
        <div>
          <Image
            src={templateCalloutHero}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* END CUSTOM TEMPLATE */}

      {templates.map((template) => {
        return (
          <TemplateGroup
            key={template.id}
            title={template.category}
            items={template.items}
          />
        );
      })}
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
              <p className="text-sm text-[#9F9F9F] line-clamp-1 my-1">
                {item.title}
              </p>
              <p className="text-base text-[#B7B7B7]">USD {item.price}</p>
              <div className="flex items-center gap-x-1 mb-2">
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
