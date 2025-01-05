import React from "react";
// import Contact3DImage from "@/assets/images/contact-3d.png";
// import Image from "next/image";
import EarthCanvas from "./components/3d/Earth";
import ContactForm from "./components/ContactForm";

export default function ContactPage() {
  return (
    <div className="pb-10 md:py-16">
      {/* HERO SECTION */}
      <div className="container flex items-center flex-col-reverse md:flex-row">
        <div>
          <h2 className="text-5xl lg:text-8xl font-bold text-center md:text-left">
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
