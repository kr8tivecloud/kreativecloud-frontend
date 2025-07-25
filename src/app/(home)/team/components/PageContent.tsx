"use client";

import React from "react";
import Image from "next/image";
import {
  MemberPlaceholder,
  TeamHead,
  TeamHero,
} from "../../../../../public/images";
import MemberCard from "./../components/member-card";
import { motion } from "motion/react";
import { KreativeCloud } from "../../../../../public/images";
import ShimmerText from "@/components/ShimmerParagraph";

const teamMembers = [
  {
    name: "Munjie M.",
    title: "Product Director",
    image: MemberPlaceholder,
  },
  {
    name: "Esieboma G.",
    title: "Senior Product Designer",
    image: MemberPlaceholder,
  },
  {
    name: "Emmanuel E.",
    title: "Graphic Design Director",
    image: MemberPlaceholder,
  },
  {
    name: "Chiwuzo E.",
    title: "Fullstack Developer",
    image: MemberPlaceholder,
  },

  {
    name: "Adigwu C.",
    title: "Brand Director",
    image: MemberPlaceholder,
  },
  {
    name: "Russel D.",
    title: "Operations Director",
    image: MemberPlaceholder,
  },
  {
    name: "Opoku B.",
    title: "Marketing Director",
    image: MemberPlaceholder,
  },
  {
    name: "Akinola C.",
    title: "Brand Manager",
    image: MemberPlaceholder,
  },
  {
    name: "Abdulmajeed B.",
    title: "Graphic Designer",
    image: MemberPlaceholder,
  },
  {
    name: "Ibadin M.",
    title: "Fullstack Developer",
    image: MemberPlaceholder,
  },
  {
    name: "Autumn Owens",
    title: "Client Success Manager",
    image: MemberPlaceholder,
  },
];

const MotionMemberCard = motion(MemberCard);

export default function PageContent() {
  return (
    <div>
      {/* HERO */}
      <div className="relative h-screen min-h-[375px] overflow-hidden flex items-center justify-center">
        <Image
          src={TeamHero}
          alt=""
          className="absolute w-full h-full object-cover opacity-20"
        />
        <h1 className="relative z-[1] font-bold text-5xl xl:text-8xl">
          Our Team
        </h1>
      </div>
      {/* END HERO */}

      {/* TEAM HEAD */}
      <div className="px-4 sm:container xl:mt-12">
        {" "}
        {/* MOBILE SCREENS HEADER */}
        <h3 className="text-3xl font-bold leading-8 mb-4 xl:hidden max-w-[350px] text-center mx-auto">
          Meet the head, <br />
          of{" "}
          <Image
            src={KreativeCloud}
            alt=""
            height={26}
            width={0}
            className="inline-block mb-2.5 max-w-[200px]"
          />
          .
        </h3>
        {/* END MOBILE SCREENS HEADER */}
        <div className="flex flex-col md:flex-row gap-x-12 xl:gap-x-24 text-sm lg:text-base">
          {/* IMAGE */}
          <div className="shrink-0">
            <Image
              src={TeamHead}
              alt=""
              width={630}
              height={500}
              className="w-full max-w-full lg:w-[400px] max-h-screen min-h-[500px] h-[500px] object-cover object-top"
            />

            <div className="max-w-80 mt-6 xl:hidden">
              <h3 className="text-[#FE922A] font-bold text-2xl mb-2.5">
                Chuka Ibezim
              </h3>
              <ShimmerText className="">
                Founder & CEO | Creative Director
              </ShimmerText>
            </div>
          </div>
          {/* END IMAGE */}

          {/* DESCRIPTION */}
          <div>
            {/* LARGE SCREENS HEADER */}
            <h3 className="text-5xl font-bold leading-10 max-xl:hidden">
              Meet the head, <br />
              of{" "}
              <Image
                src={KreativeCloud}
                alt=""
                height={26}
                width={0}
                className="inline-block mb-2 h-[26px]"
              />
              .
            </h3>
            <div className="max-w-80 mt-6 max-xl:hidden">
              <h3 className="text-[#FE922A] font-bold text-2xl mb-1">
                Chuka Ibezim
              </h3>
              <ShimmerText className="">
                Founder & CEO | Creative Director
              </ShimmerText>
            </div>
            {/* END LARGE SCREENS HEADER */}
            <ShimmerText className="mt-4">
              Chuka Ibezim is a serial digital marketer, network developer, and
              creative director shaping the future of global creative
              collaboration. As the founder of Kreative Cloud, he is on a
              mission to disrupt the traditional brokerage model by building a
              streamlined platform that directly connects top tier creative
              talent with businesses and creators around the world.
            </ShimmerText>
            <br />
            <ShimmerText className="">
              Under Chuka’s leadership, Kreative Cloud has become more than a
              digital marketing agency, it’s a global ecosystem driven by
              innovation, empowerment, and purpose. From grassroots startups to
              corporate organizations, Chuka and his team help brands amplify
              their voice, achieve their goals, and grow with clarity and
              creativity. From web development and branding to digital design
              and app solutions, Chuka leads a team committed to delivering high
              quality, cost effective creative strategies that drive real
              results. Fueled by strategy, design, and impact, Chuka Ibezim is
              redefining how brands connect, grow, and thrive in a
              digital first world.
            </ShimmerText>
          </div>
          {/* END DESCRIPTION */}
        </div>
      </div>
      {/* END TEAM HEAD */}

      {/* TEAM MEMBERS */}
      <div className="px-4 sm:container mt-28 mb-24">
        <ShimmerText>
          <h3 className="font-bold text-3xl xl:text-4xl mx-auto text-center mb-12">
            Meet the Team
          </h3>
        </ShimmerText>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {teamMembers.map((member) => {
            return <MotionMemberCard key={member.name} {...member} />;
          })}
        </div>
      </div>
      {/* END TEAM MEMBERS */}
    </div>
  );
}
