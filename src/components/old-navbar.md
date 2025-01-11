"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/assets/images/logo.svg";
import { NavLinkType } from "@/lib/types";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import { motion, useScroll, useTransform, Variants } from "motion/react";
import { AnimatedButton } from "./AnimatedButton";
import { usePathname } from "next/navigation";
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
// import { StaggeredFlipText } from "./StaggeredFlipText";
import FlipText from "./FlipText";

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
      delay: 0.3,
      bounce: 0,
    },
  },
};

const MotionLink = motion.create(Link);

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const windowWidth = useWindowSize();
  const pathname = usePathname();
  const navbarRef = (useRef < HTMLElement) | (null > null);

  const { scrollY } = useScroll();
  // Map scroll position (0-60px) to background color transition
  const backgroundColor = useTransform(
    scrollY,
    [0, 60],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );

  useEffect(() => {
    // automatically close navbar on navigation
    if (navbarOpen && windowWidth < 1024) {
      setNavbarOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // handle body scroll when navbar is open
  useEffect(() => {
    if (navbarRef.current) {
      if (navbarOpen && windowWidth < 1024) {
        disableBodyScroll(navbarRef.current);
      } else {
        enableBodyScroll(navbarRef.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [windowWidth, navbarOpen]);

  function handleOpenNavbar() {
    setNavbarOpen((state) => !state);
  }

  return (
    <motion.div
      //   animate={controls}
      style={{
        backgroundColor,
        // backgroundColor: backgroundOpacity.((o) => `rgba(0, 0, 0, ${o})`),
      }}
      className="fixed top-0 left-0 right-0 bg-black z-50"
      //   initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
    >
      <div className="container flex items-center justify-between py-6 gap-x-10">
        <Image src={Logo} alt="Logo" width={162} height={28} />

        <motion.nav
          ref={navbarRef}
          initial={"closed"}
          variants={sidebarVariants}
          animate={navbarOpen || windowWidth > 1024 ? "open" : "closed"}
          transition={{
            type: "spring",
            bounce: 0,
          }}
          className="max-lg:fixed max-lg:inset-0 max-lg:min-w-96 max-lg:bg-gray-950 max-lg:flex max-lg:flex-col"
        >
          <motion.ul
            variants={ulVariants}
            initial={"closed"}
            animate={navbarOpen || windowWidth > 1024 ? "open" : "closed"}
            exit={"closed"}
            className="flex items-center gap-x-10 uppercase font-bold text-sm max-lg:flex-col max-lg:text-3xl max-lg:pt-32 max-lg:items-start max-lg:gap-y-6 max-lg:px-6 max-lg:flex-1"
          >
            {navLinks.map((navLink) => {
              return (
                <motion.li variants={itemVariants} key={navLink.href}>
                  <Link
                    href={navLink.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    <FlipText text={navLink.title} />
                    {/* {navLink.title} */}
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
            className="bg-white text-black text-sm py-5 text-center font-bold mx-6 mb-20 hidden max-lg:block hover:bg-gray-300 transition-colors"
          >
            GET IN TOUCH
          </MotionLink>
          {/* END MOBILE GET IN TOUCH BUTTON */}

          {/* The navbar close icon should only be mounted if the navbar is open and if the window width is lesser than 1024px */}
          {navbarOpen && windowWidth < 1024 ? (
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-950"
              onClick={handleOpenNavbar}
            >
              <FaX />
            </button>
          ) : null}
        </motion.nav>

        <div>
          <AnimatedButton
            className="max-lg:hidden"
            variant="link"
            href={"/contact"}
          >
            GET IN TOUCH
          </AnimatedButton>

          <button onClick={handleOpenNavbar} className="min-[1024px]:hidden">
            <FaBars />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
