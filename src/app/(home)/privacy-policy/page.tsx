"use client";

import { motion } from "motion/react";
import {
  containerVariants,
  contentVariants,
  headerVariants,
} from "@/lib/animationVariants/contentVariant";
import Accordion from "@/components/shared/Accordion";
import { IoCloseSharp } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";

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

        <div className="md:w-[55%] flex flex-col gap-6">
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="1. Information We Collect"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <div className="flex flex-col gap-4">
                <p className="text-xs sm:text-sm xl:text-base font-sans">
                  We may collect the following types of information:
                </p>
                <p className="text-xs sm:text-sm xl:text-base font-sans">
                  a. Information You Provide:
                </p>
                <p className="text-xs sm:text-sm xl:text-base font-sans">
                  Account Registration: Name, email address, password, and other
                  details submitted during account creation. Purchase Details:
                  Billing information, payment method, and contact details when
                  making a purchase. Contact Forms: Any information you submit
                  when contacting us or filling out forms.
                </p>
                <p className="text-xs sm:text-sm xl:text-base font-sans">
                  b. Automatically Collected Information:
                </p>
                <p className="text-xs sm:text-sm xl:text-base font-sans">
                  Usage Data: IP address, browser type, operating system, pages
                  visited, and time spent on the Site. Cookies and Tracking:
                  Small files stored on your device to enhance user experience
                  and track usage patterns.
                </p>
              </div>
            </Accordion>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="2. How We Use Your Information"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <p className="text-xs sm:text-sm xl:text-base font-sans">
                Respectful alcohol consumption within legal limits and a
                smoke-free environment are our community priorities.
              </p>
            </Accordion>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="3. Sharing Your Information"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <p className="text-xs sm:text-sm xl:text-base font-sans">
                Respectful alcohol consumption within legal limits and a
                smoke-free environment are our community priorities.
              </p>
            </Accordion>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="4. Cookies and Tracking Technologies"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <div className="flex flex-col gap-4">
                <p className="text-xs sm:text-sm xl:text-base font-sans">
                  We use cookies and similar technologies to:
                </p>

                <div className="flex flex-col text-xs sm:text-sm xl:text-base font-sans">
                  <p>Enhance your experience on the Site.</p>
                  <p>Analyze website traffic and user behavior.</p>
                  <p>Provide tailored content and advertisements.</p>
                  <p>
                    You can manage your cookie preferences through your browser
                    settings.
                  </p>
                </div>
              </div>
            </Accordion>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="5. Data Security"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <p className="text-xs sm:text-sm xl:text-base font-sans">
                We implement industry-standard measures to protect your
                information from unauthorized access, alteration, disclosure, or
                destruction. However, no data transmission or storage can be
                guaranteed 100% secure.
              </p>
            </Accordion>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="6. Your Rights"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <div className="flex flex-col gap-4">
                <p className="text-xs sm:text-sm xl:text-base font-sans">
                  Depending on your jurisdiction, you may have the right to:
                </p>

                <div>
                  <p className="text-xs sm:text-sm xl:text-base font-sans">
                    Access, correct, or delete your personal information.
                  </p>
                  <p className="text-xs sm:text-sm xl:text-base font-sans">
                    Restrict or object to our processing of your data.
                  </p>
                  <p className="text-xs sm:text-sm xl:text-base font-sans">
                    Withdraw consent where applicable.
                  </p>
                  <p className="text-xs sm:text-sm xl:text-base font-sans">
                    To exercise your rights, please contact us.
                  </p>
                </div>
              </div>
            </Accordion>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="7. Retention of Data"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <p className="text-xs sm:text-sm xl:text-base font-sans">
                We retain your information for as long as necessary to fulfill
                the purposes outlined in this Privacy Policy or comply with
                legal obligations.
              </p>
            </Accordion>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="8. Third-Party Links"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <p className="text-xs sm:text-sm xl:text-base font-sans">
                Our Site may include links to third-party websites. We are not
                responsible for the privacy practices or content of these sites.
                Please review their privacy policies independently.
              </p>
            </Accordion>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="9. Children’s Privacy"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <p className="text-xs sm:text-sm xl:text-base font-sans">
                Our Site is not intended for individuals under the age of 13. We
                do not knowingly collect personal information from children.
              </p>
            </Accordion>
          </motion.div>

          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
          >
            <Accordion
              title="10. Updates to this Privacy Policy"
              closeIcon={<FiPlus className="w-6 h-6" />}
              openIcon={<IoCloseSharp className="w-6 h-6" />}
              className="border-[1px] border-[#333333] bg-[#151515] rounded-none"
            >
              <p className="text-xs sm:text-sm xl:text-base font-sans">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page, and the updated policy will
                indicate the effective date. Continued use of the Site after
                updates indicates your acceptance of the revised policy.
              </p>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PrivatePolicyPage;
