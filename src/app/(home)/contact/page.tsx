import React from "react";
// import Contact3DImage from "@/assets/images/contact-3d.png";
// import Image from "next/image";
import EarthCanvas from "./components/3d/Earth";
import ContactForm from "./components/ContactForm";
import Image from "next/image";
import TopGradient from "@/assets/images/contact/top-gradient.svg";
import BottomGradient from "@/assets/images/contact/bottom-gradient.svg";

export default function ContactPage() {
  return (
    <div className="py-20 md:py-16 relative">
      {/* GRADIENTS */}
      <div className="absolute inset-0">
        {/* TOP GRADIENT */}
        <Image src={TopGradient} alt="" className="absolute top-0 right-0" />
        {/* END TOP GRADIENT */}

        {/* BOTTOM GRADIENT */}
        <Image
          src={BottomGradient}
          alt=""
          className="absolute bottom-0 left-0"
        />
      </div>
      {/* END GRADIENTS */}
      {/* HERO SECTION */}
      <div className="container flex items-center flex-col-reverse md:flex-row relative z-[1]">
        <div className="flex-1 min-w-0">
          <h2 className="text-5xl xl:text-8xl font-bold text-center md:text-left">
            Get your <br />
            discounted <br />
            website&nbsp;today!
          </h2>
          <p className="font-bold mt-3">
            Send us a message, lets schedule a meeting.
          </p>
        </div>

        {/* TODO: It is on top of every element on the page */}
        <EarthCanvas />
      </div>
      {/* END HERO SECTION */}

      {/* CONTACT FORM */}
      <ContactForm />
      {/* END CONTACT FORM */}
    </div>
  );
}
