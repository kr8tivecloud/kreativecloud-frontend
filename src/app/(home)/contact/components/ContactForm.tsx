import { AnimatedOutlineButton } from "@/components/AnimatedOutlineButton";
import Input from "@/components/Input";
import ServiceCategoryPill from "@/components/ServiceCategoryPill";
import React from "react";

export default function ContactForm() {
  return (
    <section>
      <div className="container py-16">
        <div className="text-center">
          <h3 className="text-5xl text-white font-bold">Get in touch</h3>
          <p className="text-[#E7E9F7] text-sm mt-1">
            Looking to create, or have a question?
          </p>
        </div>

        <form action="" className="max-w-2xl mx-auto mt-4 space-y-4">
          <div className="flex gap-x-4 min-w-0">
            <Input className="flex-1 min-w-0" placeholder="First name" />
            <Input className="flex-1 min-w-0" placeholder="Last name" />
          </div>

          <Input type="email" placeholder="Email" className="w-full" />

          <Input placeholder="Phone Number" className="w-full" />

          <Input placeholder="Your business name" className="w-full" />

          <p className="font-bold text-sm">You need help with:</p>
          {/* SERVICE CATEGORY */}
          <ServiceCategoryPill />
          {/* END SERVICE CATEGORY */}

          <textarea
            placeholder="Tell us about your idea"
            rows={4}
            className="bg-[#15151D]/60 text-sm text-white p-4 outline outline-1 outline-white/25 focus:outline-white/50 transition-colors w-full"
          ></textarea>

          <AnimatedOutlineButton className="w-full">SEND</AnimatedOutlineButton>
        </form>
      </div>
    </section>
  );
}
