/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import {
  MemberPlaceholder,
  TeamHead,
  TeamHero,
} from "../../../../public/images";
import MemberCard from "./components/member-card";

const teamMembers = [
  {
    name: "Nonso Amadin",
    title: "Managing Director",
    image: MemberPlaceholder,
  },
  {
    name: "Russel Deep",
    title: "Head of Growth",
    image: MemberPlaceholder,
  },
  {
    name: "Nana Jojo",
    title: "Head of Accounts",
    image: MemberPlaceholder,
  },
  {
    name: "Gaga Graphix",
    title: "Head of Design",
    image: MemberPlaceholder,
  },
  {
    name: "Ibadin Gayrico",
    title: "Senior Developer",
    image: MemberPlaceholder,
  },
  {
    name: "Spanky D Man",
    title: "Senior Graphic Designer",
    image: MemberPlaceholder,
  },
  {
    name: "BIG MJ",
    title: "Graphic Designer",
    image: MemberPlaceholder,
  },
  {
    name: "Manuel",
    title: "Developer",
    image: MemberPlaceholder,
  },
];

export default function TeamPage() {
  return (
    <div>
      {/* HERO */}
      <div className="relative max-h-[80vh] h-[375px] lg:h-[900px] overflow-hidden flex items-center justify-center">
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
      <div className="px-4 sm:container mt-12">
        {" "}
        {/* MOBILE SCREENS HEADER */}
        <h3 className="text-3xl font-bold leading-8 mb-4 xl:hidden max-w-[350px] text-center mx-auto">
          Meet the head, of Kreative Cloud.
        </h3>
        {/* END MOBILE SCREENS HEADER */}
        <div className="flex flex-col xl:flex-row gap-x-24 text-sm lg:text-base">
          {/* IMAGE */}
          <div className="shrink-0">
            <Image
              src={TeamHead}
              alt=""
              width={630}
              height={500}
              className="w-full h-[300px] xl:w-[630px] lg:h-[500px] object-cover"
            />

            <div className="max-w-80 mt-6">
              <h3 className="text-[#FE922A] font-bold text-2xl mb-2.5">
                Liam Ibezim
              </h3>
              <p className="">
                Founder and CEO, Serial Entrepreneur, Creative Director,
                Marketing Machine
              </p>
            </div>
          </div>
          {/* END IMAGE */}

          {/* DESCRIPTION */}
          <div>
            {/* LARGE SCREENS HEADER */}
            <h3 className="text-5xl font-bold leading-10 max-xl:hidden">
              Meet the head, of Kreative Cloud.
            </h3>
            {/* END LARGE SCREENS HEADER */}
            <p className="text-justify mt-4">
              Liam Ibezim is a visionary serial entrepreneur, master networker,
              and creative director with a passion for transforming businesses
              through design and innovation. As the CEO of Black Diamond and
              Kreative Cloud, he has built platforms that bridge the gap between
              designers and entrepreneurs, empowering businesses with creative
              solutions that drive success.
            </p>
            <br />
            <p className="text-justify">
              With a mission to uplift design, influence industries, and spark
              meaningful collaborations, Liam founded Kreative Cloud—a dynamic
              ecosystem where creativity meets entrepreneurship. His work is not
              just about aesthetics; it's about impact, strategy, and the power
              of design to shape the future. A force of nature in the creative
              and business worlds, Liam Ibezim is redefining how brands connect,
              grow, and thrive.
            </p>
          </div>
          {/* END DESCRIPTION */}
        </div>
      </div>
      {/* END TEAM HEAD */}

      {/* TEAM MEMBERS */}
      <div className="px-4 sm:container mt-28 mb-24">
        <h3 className="font-bold text-3xl xl:text-4xl mx-auto text-center mb-12">
          Meet the Team
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-12">
          {teamMembers.map((member) => {
            return <MemberCard key={member.name} {...member} />;
          })}
        </div>
      </div>
      {/* END TEAM MEMBERS */}
    </div>
  );
}
