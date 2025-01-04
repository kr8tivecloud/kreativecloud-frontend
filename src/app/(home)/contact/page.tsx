import React from "react";
import Contact3DImage from "@/assets/images/contact-3d.png";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="container">
      {/* HERO SECTION */}
      <div className="flex items-center">
        <h2 className="text-8xl font-bold">
          Get your <br />
          discounted <br />
          website today!
        </h2>

        <Image src={Contact3DImage} alt="" width={535} height={503} />
      </div>
      {/* END HERO SECTION */}
    </div>
  );
}
