"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/logo.svg";
import { NavLinkType } from "@/lib/types";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useScroll,
  Variants,
} from "motion/react";
import { AnimatedButton } from "./AnimatedButton";
import { usePathname } from "next/navigation";

const navLinks: NavLinkType[] = [
  {
    title: "Templates",
    href: "/templates",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Portfolio",
    href: "/portfolio",
  },
];

const itemVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 150,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const ulVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const sidebarVariants: Variants = {
  open: {
    x: "0%",
  },
  closed: {
    x: "-100%",
    transition: {
      delay: 0.5,
      bounce: 0,
    },
  },
};

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const windowWidth = useWindowSize();
  const pathname = usePathname();

  const controls = useAnimationControls();
  const { scrollY } = useScroll();

  useEffect(() => {
    // Change navbar color based on scroll position
    const unsubscribe = scrollY.on("change", (currentY) => {
      if (currentY > 50) {
        controls.start({ backgroundColor: "rgba(0, 0, 0, 1)" });
      } else {
        controls.start({ backgroundColor: "rgba(0, 0, 0, 0)" });
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [controls, scrollY]);

  useEffect(() => {
    // automatically close navbar on navigation
    if (navbarOpen && windowWidth < 900) {
      setNavbarOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  function handleOpenNavbar() {
    setNavbarOpen((state) => !state);
  }

  return (
    <motion.div
      animate={controls}
      className="fixed top-0 left-0 right-0 flex items-center justify-between container py-6 gap-x-10 bg-black"
      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    >
      <Image src={Logo} alt="Logo" width={162} height={28} />

      <AnimatePresence>
        {/* The navbar should only be mounted if the navbar is open or if the window width is greater than 900px */}
        {navbarOpen || windowWidth > 900 ? (
          <motion.nav
            initial={"closed"}
            variants={sidebarVariants}
            animate={"open"}
            exit={"closed"}
            transition={{
              type: "spring",
              bounce: 0,
            }}
            className="max-[900px]:fixed max-[900px]:inset-0 max-[900px]:min-w-96 max-[900px]:bg-gray-950 max-[900px]:flex max-[900px]:flex-col"
          >
            <motion.ul
              variants={ulVariants}
              initial={"closed"}
              animate={"open"}
              exit={"closed"}
              className="flex items-center gap-x-10 uppercase font-bold text-sm max-[900px]:flex-col max-[900px]:text-3xl max-[900px]:pt-32 max-[900px]:items-start max-[900px]:gap-y-6 max-[900px]:px-6 max-[900px]:flex-1"
            >
              {navLinks.map((navLink) => {
                return (
                  <motion.li variants={itemVariants} key={navLink.href}>
                    <Link
                      href={navLink.href}
                      className="hover:text-gray-300 transition-colors"
                    >
                      {navLink.title}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>

            {/* MOBILE GET IN TOUCH BUTTON */}
            <MotionLink
              initial={{}}
              animate={{}}
              exit={{}}
              href={"/contact"}
              className="bg-white text-black text-sm py-5 text-center font-bold mx-6 mb-20 hidden max-[900px]:block hover:bg-gray-300 transition-colors"
            >
              GET IN TOUCH
            </MotionLink>
            {/* END MOBILE GET IN TOUCH BUTTON */}

            {/* The navbar close icon should only be mounted if the navbar is open and if the window width is lesser than 900px */}
            {navbarOpen && windowWidth < 900 ? (
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-950"
                onClick={handleOpenNavbar}
              >
                <FaX />
              </button>
            ) : null}
          </motion.nav>
        ) : null}
      </AnimatePresence>

      <div>
        <AnimatedButton
          className="max-[900px]:hidden"
          variant="link"
          href={"/contact"}
        >
          GET IN TOUCH
        </AnimatedButton>

        <button onClick={handleOpenNavbar} className="min-[900px]:hidden">
          <FaBars />
        </button>
      </div>
    </motion.div>
  );
}
