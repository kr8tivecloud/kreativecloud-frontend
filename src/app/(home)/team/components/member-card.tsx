import ShimmerText from "@/components/ShimmerParagraph";
import { StaticImageData } from "next/image";
import React from "react";

interface MemberCardProps {
  name: string;
  title: string;
  image: string | StaticImageData;
}

export default function MemberCard({
  // image,
  name,
  title,
}: MemberCardProps) {
  return (
    <div>
      {/* IMAGE */}
      {/* <Image src={image} alt="" width={280} height={400} className="w-full" /> */}
      {/* END IMAGE */}

      {/* DETAILS */}
      <div className="mt-5 space-y-2">
        <div className="text-[#FE922A] font-bold text-2xl">{name}</div>
        <ShimmerText className="text-lg">{title}</ShimmerText>
      </div>
      {/* END DETAILS */}
    </div>
  );
}
