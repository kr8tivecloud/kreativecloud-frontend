import Image from "next/image";
import React from "react";
import { templateImage } from "../../../../../public/images";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FaCheck, FaChevronDown, FaChevronUp } from "react-icons/fa6";
import TemplateRecommendations from "../components/template-recommendations";
import Accordion from "@/components/shared/Accordion";

const overviewImages = [
  templateImage,
  templateImage,
  templateImage,
  templateImage,
  templateImage,
  templateImage,
];

export default function TemplateDetailsPage() {
  return (
    <div className="pt-28 relative">
      <div className="px-4 sm:container">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_490px] gap-x-10 mb-16 lg:mb-56">
          <div>
            <Image
              src={templateImage}
              alt="Template image"
              width={660}
              height={561}
              className="w-full"
            />

            {/* OVERVIEW IMAGES */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(128px,1fr))] gap-3 mt-4">
              {overviewImages.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative after:absolute after:inset-0 after:bg-black/20"
                  >
                    <Image
                      src={image}
                      alt=""
                      width={150}
                      height={150}
                      className="w-full h-32 object-cover"
                    />
                  </div>
                );
              })}
            </div>
            {/* END OVERVIEW IMAGES */}
          </div>

          <div className="mt-6 lg:mt-0">
            {/* KEYWORDS */}
            <p className="font-bold text-xl leading-5">
              Acuity Scheduling Template, Hair Stylist Acuity Scheduling
              Template, Hair Stylist Branding, Hair Stylist Website, Canva
              Templates
            </p>
            {/* END KEYWORDS */}

            {/* PRICE */}
            <p className="mt-4 mb-5">$200.56 USD</p>
            {/* END PRICE */}

            {/* ACTIONS */}
            <div className="mt-6 space-y-2.5">
              <AnimatedButton className="w-full">Add to cart</AnimatedButton>
              <AnimatedButton className="w-full" variant="solid">
                Buy it Now
              </AnimatedButton>
            </div>
            {/* END ACTIONS */}

            {/* FEATURES */}
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-x-2">
                <FaCheck className="text-[#FE922A]" size={20} />
                <span className="font-bold">Instant Download Access</span>
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck className="text-[#FE922A]" size={20} />
                <span className="font-bold">One Time Payment</span>
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck className="text-[#FE922A]" size={20} />
                <span className="font-bold">Digital download</span>
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck className="text-[#FE922A]" size={20} />
                <span className="font-bold">Digital file type(s): 1 PDF</span>
              </li>
              <li className="flex items-center gap-x-2">
                <FaCheck className="text-[#FE922A]" size={20} />
                <span className="font-bold">Hair Acuity Template</span>
              </li>
            </ul>
            {/* END FEATURES */}

            {/* COLLAPSIBLES */}
            <div className="mt-4">
              {/* DESCRIPTION */}
              <Accordion
                title="DESCRIPTION"
                closeIcon={<FaChevronDown />}
                openIcon={<FaChevronUp />}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Debitis, quibusdam amet veniam accusamus tempora ipsam ipsa
                similique ratione numquam ex rerum enim! Suscipit delectus
                iusto, maiores animi quis eum nesciunt.
              </Accordion>

              {/* END DESCRIPTION */}

              {/* HOW TO USE */}
              <Accordion
                title="HOW TO USE"
                closeIcon={<FaChevronDown />}
                openIcon={<FaChevronUp />}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                veniam fugiat modi doloremque tempore? Minus suscipit odit
                tempore autem? Soluta autem consequatur, mollitia eius animi
                earum iusto. Pariatur, animi harum.
              </Accordion>
              {/* END HOW TO USE */}
            </div>
            {/* END COLLAPSIBLES */}
          </div>
        </div>

        {/* RECOMMENDATIONS */}
        <TemplateRecommendations />
        {/* END RECOMMENDATIONS */}
      </div>
    </div>
  );
}
