import React, { useState } from "react";
import { motion } from "motion/react";
import { contentVariants } from "@/lib/animationVariants/contentVariant";
import Accordion from "@/components/shared/Accordion";
import { FiPlus } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";

type ContentProps = {
  title: string;
  body: string;
};

const Content: React.FC<ContentProps> = ({ title, body }) => {
  return (
    <motion.div
      variants={contentVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col gap-1"
    >
      <Accordion
        title={title}
        closeIcon={<FiPlus className="w-6 h-6" />}
        openIcon={<IoCloseSharp className="w-6 h-6" />}
        className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
      >
        {body}
      </Accordion>
    </motion.div>
  );
};

export default Content;
