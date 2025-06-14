import Image, { StaticImageData } from "next/image";
import { FaStar } from "react-icons/fa";
import { RiVerifiedBadgeFill } from "react-icons/ri";

interface TestimonialCardProps {
  image: StaticImageData;
  name: string;
  tag: string;
  content: string;
  starNumber: number;
  social: React.ComponentType;
  date: string;
  verified?: boolean;
}

const TestimonialCard = ({
  image,
  name,
  content,
  tag,
  social: SocialIcon,
  date,
  verified = false,
}: TestimonialCardProps) => {
  return (
    <div className="h-full">
      <div className="px-6 2xs:px-4 lg:px-6 py-6 2xs:py-4 lg:py-6 w-full h-full flex flex-col bg-black rounded-2xl border border-dashed border-white/25">
        <div className="w-full flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="cursor-pointer relative w-10 h-10 overflow-hidden rounded-full">
              <Image
                src={image}
                alt="profile"
                fill
                className="z-0 object-cover"
                quality={100}
                priority
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <h2 className="text-base text-white font-bold">{name}</h2>
                {verified && <RiVerifiedBadgeFill className="text-[#1D9BF0]" />}
              </div>
              <p className="text-sm text-[#536471]">{tag}</p>
            </div>
          </div>
          <div className="text-2xl">
            <SocialIcon />
          </div>
        </div>

        <div className="flex items-center gap-0.5 text-xl text-[#F2E2A5] mb-4">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p className="text-base text-white font-light flex-grow">{content}</p>

        <p className="mt-1 flex self-end text-xs text-[#536471]">{date}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
