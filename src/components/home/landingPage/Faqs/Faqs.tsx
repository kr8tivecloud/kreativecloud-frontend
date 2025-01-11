"use client";

import { useRef, useState } from "react";
import Accordion from "./Accordion";
import { motion, useInView } from "framer-motion";
import { SectionWrapper } from "@/lib/hoc";
import { textVariant } from "@/lib/motion";

const Faqs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.25 });

  const AccordionsData = [
    {
      title: "Why should I have a website?",
      content:
        "A website is the first step toward growing an online presence for your business or passion project, whether you’re looking to sell online or create a portfolio. With Squarespace, you can get started with a best-in-class website template for nearly any use case and customize it to fit your brand. Our all-in-one platform also makes it easy to add a blog, an online store, or appointment scheduling to your website and leverage marketing tools to reach your audience.",
    },
    {
      title: "What features do you offer with Kreative Cloud?",
      content:
        "Kreative Cloud offers a comprehensive suite of features including website hosting, custom domain management, SSL certificates, automated backups, analytics dashboard, SEO tools, and integrated marketing solutions. Our platform also includes collaboration tools, version control, and 24/7 technical support.",
    },
    {
      title: "Is Kreative Cloud right for me?",
      content:
        "Kreative Cloud is perfect for entrepreneurs, small businesses, freelancers, and creative professionals who want a reliable, user-friendly platform to build and manage their online presence. Whether you're a beginner or an experienced developer, our scalable solutions adapt to your needs and grow with your business.",
    },
    {
      title: "How do I start building my website?",
      content:
        "Getting started is easy! Choose from our collection of professional templates, customize your design using our drag-and-drop builder, add your content, and publish. Our step-by-step guide will walk you through the process, and our support team is always available to help you create the perfect website.",
    },
    {
      title: "Can you help me with my business ideas?",
      content:
        "Absolutely! Our team of experts provides consultations to help refine your business ideas and create an effective online strategy. We can assist with market research, competitor analysis, digital marketing planning, and choosing the right tools and features to achieve your business goals.",
    },
    {
      title: "How do I get a custom domain for my website?",
      content:
        "You can purchase a custom domain directly through Kreative Cloud or connect an existing domain. We offer competitive pricing on new domains and provide free SSL certificates. Our team will handle the technical setup, including DNS configuration and domain mapping, to ensure a smooth transition.",
    },
    {
      title: "How do I start selling online?",
      content:
        "Start selling online by activating our e-commerce features. You'll get access to a secure shopping cart, multiple payment gateways, inventory management, shipping integration, and order tracking. We also provide tools for product listings, discount codes, and customer management to help grow your online store.",
    },
  ];

  const handleAccordionToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <motion.div
      ref={ref}
      animate={isInView ? "show" : "hidden"}
      initial="hidden"
      className="w-full flex justify-center items-center py-5 xs:py-10 mb-20"
    >
      <div
        className="w-full px-4 sm:px-12 flex max-lg:flex-col gap-10 xl:gap-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full lg:w-[50%]">
          <motion.div
            variants={textVariant(0.1)}
            className="w-full 2xs:w-[80%] lg:w-[70%] flex flex-col items-start justify-start gap-2 xs:gap-2.5 md:gap-4"
          >
            <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold">
              Frequently asked questions{" "}
            </h1>
          </motion.div>
        </div>
        <div className="w-full lg:w-[50%] flex flex-col items-start">
          {AccordionsData.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              isOpen={activeIndex === index}
              onToggle={() => handleAccordionToggle(index)}
              index={index}
              lastIndex={AccordionsData.length - 1}
            >
              {item.content}
            </Accordion>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Faqs, "faqs");
