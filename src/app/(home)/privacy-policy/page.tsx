"use client";

import React from "react";
import { motion } from "motion/react";
import {
  containerVariants,
  contentVariants,
  headerVariants,
} from "@/lib/animationVariants/contentVariant";

const PrivatePolicyPage = () => {
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
          Privacy Policy
        </motion.h1>

        <div className="md:w-[62%] flex flex-col gap-6">
          <motion.p
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="text-[12px] md:text-[16px] font-sans"
          >
            Kreative Cloud (“we,” “our,” or “us”) values your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and share your information when
            you access or use the Kreative Cloud website (the “Site”).
          </motion.p>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              1. Information We Collect
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              We may collect the following types of information:
            </p>
          </motion.div>

          <motion.p
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="text-[12px] md:text-[16px] font-sans"
          >
            a. Information You Provide:
          </motion.p>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              Account Registration: Name, email address, password, and other
              details submitted during account creation. Purchase Details:
              Billing information, payment method, and contact details when
              making a purchase. Contact Forms: Any information you submit when
              contacting us or filling out forms.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              b. Automatically Collected Information:
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              Usage Data: IP address, browser type, operating system, pages
              visited, and time spent on the Site. Cookies and Tracking: Small
              files stored on your device to enhance user experience and track
              usage patterns.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              2. How We Use Your Information
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              We use your information for the following purposes:
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              To provide and manage your access to the Site and services.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              To process purchases, payments, and refunds.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              To communicate with you about your account, transactions, and
              updates.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              To improve the Site and ensure its security.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              To comply with legal obligations and enforce our Terms of Service.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              3. Sharing Your Information
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              We do not sell or rent your personal information. However, we may
              share your information with:
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              Service Providers: Third parties that assist with payment
              processing, hosting, and analytics.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              Legal Authorities: When required to comply with applicable laws or
              respond to legal processes.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              Business Transfers: In the event of a merger, acquisition, or sale
              of assets.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              4. Cookies and Tracking Technologies
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              We use cookies and similar technologies to:
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              Enhance your experience on the Site.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              Analyze website traffic and user behavior.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              Provide tailored content and advertisements.
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              You can manage your cookie preferences through your browser
              settings.
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              5. Data Security
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              We implement industry-standard measures to protect your
              information from unauthorized access, alteration,
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              disclosure, or destruction. However, no data transmission or
              storage can be guaranteed 100% secure.
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              6. Your Rights
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              Depending on your jurisdiction, you may have the right to:
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              7. Retention of Data
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              We retain your information for as long as necessary to fulfill the
              purposes outlined in this Privacy Policy or comply with legal
              obligations.
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              8. Third-Party Links
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              Our Site may include links to third-party websites. We are not
              responsible for the privacy practices or content of these sites.
              Please review their privacy policies independently
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              9. Children’s Privacy
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              Our Site is not intended for individuals under the age of 13. We
              do not knowingly collect personal information from children.
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              10. Updates to this Privacy Policy
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and the updated policy will indicate
              the effective date. Continued use of the Site after updates
              indicates your acceptance of the revised policy.
            </p>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-[12px] md:text-[16px] font-sans">
              11. Contact Us
            </p>
            <p className="text-[12px] md:text-[16px] font-sans">
              If you have questions about this Privacy Policy or your data,
              please contact us at: support@kreativecloud.com.
            </p>
          </motion.div>

          <motion.p
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="text-[12px] md:text-[16px] font-sans"
          >
            This Privacy Policy is part of Kreative Cloud’s commitment to
            transparency and compliance with privacy standards.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivatePolicyPage;
