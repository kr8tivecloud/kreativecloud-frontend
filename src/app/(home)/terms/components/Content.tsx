import React from "react";
import { motion } from "motion/react";
import { contentVariants } from "@/lib/animationVariants/contentVariant";

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
      <h4 className="text-[12px] md:text-[16px] font-sans">{title}</h4>
      <p className="text-[12px] md:text-[16px] font-sans">{body}</p>
    </motion.div>
  );
};

export default Content;
