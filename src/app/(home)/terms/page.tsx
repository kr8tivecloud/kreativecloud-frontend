"use client";

import React from "react";
import Content from "./components/Content";
import { motion } from "motion/react";
import {
  containerVariants,
  headerVariants,
} from "@/lib/animationVariants/contentVariant";

const TermsPage = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full h-full flex justify-center items-center p-4 pt-6"
    >
      <div className="w-full flex flex-col items-center justify-center gap-6 md:gap-12">
        <motion.h1
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-white font-sans text-2xl md:text-4xl lg:text-5xl leading-10 text-[48px] text-center"
        >
          Terms of Service
        </motion.h1>

        <div className="md:w-[62%] flex flex-col gap-6">
          {/* ACCEPTANCE OF TERM */}
          <Content
            title="Acceptance of Terms"
            body="By accessing and using the Kreative Cloud website (the 'Site'), you agree to comply with and be bound by these Terms of Service (the 'Terms'). If you do not agree with these Terms, please refrain from using our Site."
          />

          {/* USE OF SITE */}
          <Content
            title="Use of the Site"
            body="You agree to use the Site only for lawful purposes and in a way that does not violate the rights of others or limit their use and enjoyment of the Site. Prohibited behavior includes harassing others, transmitting inappropriate content, or disrupting the Site’s normal operations."
          />

          {/* ACCOUNT REGISTRATION */}
          <Content
            title="Account Registration"
            body="Certain services on the Site may require you to create an account. During registration, you must provide accurate and complete information. You are responsible for maintaining the security of your account and for all activities that occur under it."
          />

          {/* SERVICE PURCHASES */}
          <Content
            title="Service Purchases"
            body="All purchases made on Kreative Cloud are subject to availability and acceptance. Once your payment is processed, you will receive a confirmation email with purchase details. All sales are final, with refunds or exchanges offered only under specific conditions, as outlined in our refund policy."
          />

          {/* PRICING AND PAYMENT */}
          <Content
            title="Pricing and Payment"
            body="Prices for our services are listed on the Site and may include applicable fees. Kreative Cloud reserves the right to modify pricing at any time without notice. Payments must be made through the available methods on the Site, and by making a purchase, you confirm authorization to use the selected payment method."
          />

          {/* SERVICE CHNAGES AND CANCELLATIONS */}
          <Content
            title="Service Changes and Cancellations"
            body="Kreative Cloud is not responsible for changes to the availability of services. In the case of changes or cancellations, we will notify you as soon as possible and provide information about alternative options or refunds as applicable."
          />

          {/* INTELLECTUAL PROPERTY */}
          <Content
            title="Intellectual Property"
            body="All content on the Site, including text, graphics, logos, and images, is the property of Kreative Cloud or its licensors and is protected by intellectual property laws. You may not reproduce or distribute any content without written permission from Kreative Cloud."
          />

          {/* LIMITATION OF LIABILITY */}
          <Content
            title="Limitation of Liability"
            body="Kreative Cloud will not be held liable for any damages, including direct, indirect, incidental, or consequential damages, arising from your use of the Site or our services. This includes, but is not limited to, loss of data, profits, or goodwill."
          />

          {/* IDENMIFICATION */}
          <Content
            title="Indemnification"
            body="You agree to indemnify and hold Kreative Cloud and its affiliates harmless from any claims or damages resulting from your use of the Site or violation of these Terms"
          />

          {/* PRIVACY */}
          <Content
            title="Privacy"
            body="Your use of the Site is also governed by our Privacy Policy, which explains how we handle your personal information. By using the Site, you agree to our Privacy Policy."
          />

          {/* GOVERNING LAW */}
          <Content
            title="Governing Law"
            body="These Terms are governed by the laws of [Your Jurisdiction], and any disputes will be resolved in the courts of [Your Jurisdiction]."
          />

          {/* CHANGES TO TERM */}
          <Content
            title="Changes to the Terms"
            body="Kreative Cloud reserves the right to update these Terms at any time. Changes will take effect upon posting on the Site, and continued use after changes are posted indicates your acceptance of the new Terms."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default TermsPage;
