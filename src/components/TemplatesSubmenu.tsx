import React from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";
import { AnimatedOutlineButton } from "./AnimatedOutlineButton";
import { AnimatedButton } from "./AnimatedButton";

export default function TemplatesSubmenu() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col lg:flex-row items-start gap-x-5 justify-between">
      <p className="text-sm lg:text-3xl max-w-72">
        What templates are you looking for?
      </p>

      <form className="min-w-80 border border-[#151515] p-2 mt-1">
        <Input placeholder="Search for templates" className="w-full" />

        <p className="text-xs mt-4 mb-2">Popular Templates</p>

        <ul className="text-sm space-y-4">
          <li className="flex items-center gap-x-2">
            <Checkbox />
            <span>Social Media Templates</span>
          </li>
          <li className="flex items-center gap-x-2">
            <Checkbox />
            <span>Acuity Scheduling Templates</span>
          </li>
          <li className="flex items-center gap-x-2">
            <Checkbox />
            <span>Logos/ 3D logos</span>
          </li>
          <li className="flex items-center gap-x-2">
            <Checkbox />
            <span>3D Mockups</span>
          </li>
          <li className="flex items-center gap-x-2">
            <Checkbox />
            <span>Party Banners/Flyers</span>
          </li>
          <li className="flex items-center gap-x-2">
            <Checkbox />
            <span>Shopify Themes</span>
          </li>
        </ul>

        <div className="w-full flex items-center gap-x-6 mt-5">
          <AnimatedButton className="w-full font-normal">Skip</AnimatedButton>
          <AnimatedButton className="w-full font-normal">Search</AnimatedButton>
        </div>
      </form>
    </div>
  );
}
