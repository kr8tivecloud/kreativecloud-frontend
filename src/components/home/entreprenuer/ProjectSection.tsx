"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { zoomIn } from "@/lib/motion";
import {
  textContainerVariants,
  textVariants,
} from "@/lib/animationVariants/entreprenuerVariant";
import { ProjectCaptureProps } from "@/lib/types";

type ProjectSectionProps = {
  title: string;
  subtitle: string;
  projectCaptures: ProjectCaptureProps[];
};

const ProjectSection = ({
  title,
  subtitle,
  projectCaptures,
}: ProjectSectionProps) => {
  return (
    <motion.div
      variants={textContainerVariants}
      initial="initial"
      whileInView="animate"
      className="w-full flex flex-col gap-4"
    >
      <motion.h3 variants={textVariants} className="text-4xl">
        {title}
      </motion.h3>
      <motion.p variants={textVariants} className="w-full md:w-[50%]">
        {subtitle}
      </motion.p>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 items-center gap-3">
        {projectCaptures?.map((project, index) => {
          return (
            <motion.div
              variants={zoomIn(0.3, index * 0.5)}
              initial="hidden"
              whileInView="show"
              key={index}
              className="w-full flex flex-col gap-2"
            >
              <div className="relative h-[510.3px]">
                <Image
                  src={project.Icon}
                  alt={project.text}
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
              </div>
              <p className="text-white">{project.text}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ProjectSection;
