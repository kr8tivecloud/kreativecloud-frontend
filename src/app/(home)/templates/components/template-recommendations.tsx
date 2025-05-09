"use client";

import Image, { StaticImageData } from "next/image";
import React from "react";
import { templateImage } from "../../../../../public/images";

const recommendations: {
  id: string;
  image: string | StaticImageData;
  price: number;
  discount: number;
  name: string;
}[] = [
  {
    id: "1",
    name: "Acuity Scheduling Template",
    image: templateImage,
    discount: 40,
    price: 290,
  },
  {
    id: "2",
    name: "Canva Website Template",
    image: templateImage,
    discount: 25,
    price: 150,
  },
  {
    id: "3",
    name: "Hair Stylist Branding Kit",
    image: templateImage,
    discount: 10,
    price: 99,
  },
  {
    id: "4",
    name: "Beauty Salon Website Theme",
    image: templateImage,
    discount: 50,
    price: 350,
  },
  {
    id: "5",
    name: "Spa Appointment Scheduling",
    image: templateImage,
    discount: 30,
    price: 200,
  },
];

export default function TemplateRecommendations() {
  return (
    <div>
      <h2 className="font-bold text-3xl">You might also like</h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-5 mt-5">
        {recommendations.map((recommendation) => {
          return (
            <div key={recommendation.id}>
              <Image
                src={recommendation.image}
                alt={recommendation.name}
                width={300}
                height={200}
                className="w-full h-32 md:h-48 object-cover"
              />

              <p className="text-sm text-[#9F9F9F] mt-1 mb-1.5">
                {recommendation.name}
              </p>

              <div className="">
                <p className="font-bold">
                  USD
                  {recommendation.price -
                    recommendation.price * (recommendation.discount / 100)}
                </p>
                <p className="text-[#B7B7B7] text-sm">
                  <span className="line-through">
                    USD {recommendation.price}
                  </span>{" "}
                  <span> ({recommendation.discount}% off)</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
