import { StaticImageData } from "next/image";
import {
  acuity1,
  acuity2,
  acuity3,
  socialMedia1,
  socialMedia2,
  socialMedia3,
  socialMedia4,
  socialMedia5,
  socialMedia6,
  _3dMockup1,
  _3dMockup2,
  _3dMockup3,
} from "../../public/images";

export const templates: {
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
        image: acuity1,
      },
      {
        id: "2",
        title: "4X Fall Season Bundle Flyer, DIY...",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: acuity2,
      },
      {
        id: "3",
        title: "Halloween Beauty Salon Canva T...",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: acuity3,
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
        image: socialMedia1,
      },
      {
        id: "2",
        title: "200 Instagram Post Template for W...",
        price: 50,
        originalPrice: 100,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: socialMedia2,
      },
      {
        id: "3",
        title: "60 Social Media Bundle Flyer, DIY...",
        price: 50,
        originalPrice: 100,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: socialMedia3,
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
        image: socialMedia4,
      },
      {
        id: "2",
        title: "Creative Kit - Canva presentation...",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: socialMedia5,
      },
      {
        id: "3",
        title: "PowerPoint Presentation Templat...",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: socialMedia6,
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
        image: _3dMockup1,
      },
      {
        id: "2",
        title: "Kreative Cloud Sweats",
        price: 50,
        originalPrice: 100,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: _3dMockup2,
      },
      {
        id: "3",
        title: "Kreative Cloud Ski",
        price: 250,
        originalPrice: 500,
        discount: "50% off",
        type: "Digital Download",
        bestseller: false,
        image: _3dMockup3,
      },
    ],
  },
];
