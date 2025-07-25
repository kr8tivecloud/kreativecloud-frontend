"use client";

import React from "react";
import Image from "next/image";
import TopGradient from "@/assets/images/contact/top-gradient.svg";
import BottomGradient from "@/assets/images/contact/bottom-gradient.svg";
import { motion } from "motion/react";
import JoinUsForm from "./components/JoinUsForm";
// import RoomCanvas from "./components/3d/RoomCanvas";
import Room from "@/assets/images/careers/room.png";

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
      <motion.div
        layout
        className="px-4 sm:container flex md:items-center flex-col-reverse md:flex-row relative z-[1] gap-y-5 min-h-[calc(100vh_-_60px)]"
      >
        <div className="flex-1 min-w-0">
          <motion.h2
            initial={{ y: -20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: "all" }}
            className="text-5xl xl:text-8xl font-bold md:max-w-sm"
          >
            Your&nbsp;creativity deserves a&nbsp;home.
          </motion.h2>
        </div>

        {/* TODO: It is on top of every element on the page */}

        <Image
          src={Room}
          alt=""
          className="flex-1 w-80 max-w-[520px] object-contain"
        />
        {/* <RoomCanvas /> */}
      </motion.div>
      {/* END HERO SECTION */}

      {/* JON US FORM */}
      <JoinUsForm />
      {/* END JON US FORM */}
    </div>
  );
}
