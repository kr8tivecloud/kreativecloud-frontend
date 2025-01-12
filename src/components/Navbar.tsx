"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { NavLinkType } from "@/lib/types";
import { useWindowSize } from "@/lib/hooks/useWindowSize";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  Variants,
} from "motion/react";
import { usePathname } from "next/navigation";
import {
  enableBodyScroll,
  disableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
// import { StaggeredFlipText } from "./StaggeredFlipText";
import FlipText from "./FlipText";
import TemplatesSubmenu from "./TemplatesSubmenu";
import ResourcesSubmenu from "./ResourcesSubmenu";
import NavSubmenu from "./NavSubmenu";
import { FiChevronDown } from "react-icons/fi";
import images from "../../public/images";

const navLinks: NavLinkType[] = [
  {
    title: "Templates",
    href: "/templates",
    subMenu: TemplatesSubmenu,
  },
  {
    title: "Resources",
    href: "/resources",
    subMenu: ResourcesSubmenu,
  },
  {
    title: "Careers",
    href: "/careers",
  },
].map((item, index) => ({ ...item, id: index + 1 })); // Id must start from 1 else it can be falsy

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
  const navbarRef = useRef<HTMLElement | null>(null);

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
      if (navbarOpen && windowWidth < 1024) {
        setNavbarOpen(false);
      }
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
      style={{
        backgroundColor,
      }}
      className="fixed top-0 left-0 right-0 bg-black z-50"
    >
      <div className="px-4 sm:px-12 flex items-center justify-between py-6 gap-x-10">
        <Link href={"/"}>
          <Image
            src={images.logo}
            alt="Logo"
            width={162}
            height={28}
            className="relative z-[1]"
          />
        </Link>

        <MobileNav
          handleOpenNavbar={handleOpenNavbar}
          navbarOpen={navbarOpen}
        />
        <Nav />

        <div className="relative z-[1]">
          <MotionLink
            href={"/contact"}
            className="max-lg:hidden font-bold text-[#FE922A] hover:text-white transition-colors duration-300"
          >
            GET IN TOUCH
          </MotionLink>

          <button onClick={handleOpenNavbar} className="w-7 h-5 lg:hidden">
            <motion.div
              initial={{ y: -5, rotate: 0 }}
              animate={navbarOpen ? { y: 0, rotate: 45 } : undefined}
              transition={{ bounce: 0.25 }}
              className="block w-full h-[3px] bg-white shrink-0"
            />
            <motion.div
              initial={{ opacity: 1 }}
              animate={navbarOpen ? { opacity: 0 } : undefined}
              transition={{ duration: 0 }}
              className="block w-full h-[3px] bg-white shrink-0"
            />
            <motion.div
              initial={{ y: 5, rotateX: 0 }}
              animate={navbarOpen ? { y: -5, rotate: -45 } : undefined}
              transition={{ bounce: 0.25 }}
              className="block w-full h-[3px] bg-white shrink-0"
            />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

type MobileNavProps = {
  navbarOpen: boolean;
  handleOpenNavbar: () => void;
};

function MobileNav({ navbarOpen }: MobileNavProps) {
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const windowWidth = useWindowSize();
  const [selected, setSelected] = useState<number | null>(null);

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

  return (
    <motion.nav
      initial={"closed"}
      variants={sidebarVariants}
      animate={navbarOpen ? "open" : "closed"}
      transition={{
        type: "spring",
        bounce: 0,
      }}
      className="fixed flex flex-col lg:hidden inset-0 min-w-96 bg-black"
    >
      <div className="h-20 bg-black"></div>
      <div
        ref={navbarRef}
        className="px-4 sm:container h-full flex flex-col gap-y-20 pb-20 overflow-y-auto"
      >
        <motion.ul
          variants={ulVariants}
          initial={"closed"}
          animate={navbarOpen ? "open" : "closed"}
          exit={"closed"}
          className="flex gap-x-10 uppercase font-bold flex-col text-base max-lg:text-xl pt-10 items-start gap-y-1 flex-1"
        >
          {navLinks.map((navLink) => {
            return (
              <motion.li
                variants={itemVariants}
                key={navLink.href}
                className="block w-full"
              >
                <Link
                  onClick={(e) => {
                    if (navLink.subMenu) {
                      e.preventDefault();
                      setSelected((prevState) => {
                        if (prevState === navLink.id) {
                          return null;
                        } else {
                          return navLink.id;
                        }
                      });
                    }
                  }}
                  href={navLink.href}
                  // before:absolute before:inset-0 before:bg-yellow-900 before:scale-y-0 hover:before:scale-y-100 before:transition-transform before:delay-200
                  className="hover:text-gray-300 transition-colors flex items-center gap-1 relative z-[1] py-3"
                >
                  <FlipText text={navLink.title} />
                  {navLink.subMenu ? (
                    <FiChevronDown
                      className={`transition-transform delay-150 ${
                        selected === navLink.id ? "rotate-180" : ""
                      }`}
                    />
                  ) : null}
                  {/* {navLink.title} */}
                </Link>

                <AnimatePresence>
                  {navLink.subMenu && selected === navLink.id ? (
                    <motion.div
                      initial={{
                        y: -20,
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{ y: 0, opacity: 1, height: "auto" }}
                      exit={{
                        // y: -100,
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        bounce: 0,
                      }}
                      className="overflow-hidden"
                    >
                      {/* TODO: This animation is not yet fluid */}
                      <motion.div className="py-2 px-2">
                        {/* <div className="py-6"> */}
                        <navLink.subMenu />
                        {/* </div> */}
                      </motion.div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
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
          className="bg-white text-black text-sm py-5 text-center font-bold block hover:bg-gray-300 transition-colors"
        >
          GET IN TOUCH
        </MotionLink>
        {/* END MOBILE GET IN TOUCH BUTTON */}

        {/* The navbar close icon should only be mounted if the navbar is open and if the window width is lesser than 1024px */}
        {/* {navbarOpen ? (
          <button
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-950"
            onClick={handleOpenNavbar}
          >
            <FaX />
          </button>
        ) : null} */}
      </div>
    </motion.nav>
  );
}

function Nav() {
  const [selected, setSelected] = useState<number | null>(0);
  const [dir, setDir] = useState<"r" | "l" | null>(null);
  const submenuRef = useRef<HTMLDivElement>(null);

  // handle body scroll when navbar is open
  useEffect(() => {
    if (submenuRef.current) {
      if (selected) {
        disableBodyScroll(submenuRef.current);
      } else {
        enableBodyScroll(submenuRef.current);
      }
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [selected]);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <nav className="max-lg:hidden" onMouseLeave={() => handleSetSelected(null)}>
      <ul className="flex items-center gap-x-10 uppercase font-bold text-sm relative z-[1]">
        {navLinks.map((navLink) => {
          return (
            <li
              key={navLink.href}
              id={`shift-nav-${navLink.id}`}
              onMouseEnter={() => handleSetSelected(navLink.id)}
              onClick={() => handleSetSelected(navLink.id)}
            >
              <Link
                onClick={(e) => {
                  if (navLink.subMenu) {
                    e.preventDefault();
                    setSelected(navLink.id);
                  }
                }}
                href={navLink.href}
                className="hover:text-gray-300 transition-colors flex items-center gap-1"
              >
                <FlipText text={navLink.title} />
                {navLink.subMenu ? (
                  <FiChevronDown
                    className={`transition-transform delay-150 ${
                      selected === navLink.id ? "rotate-180" : ""
                    }`}
                  />
                ) : null}
                {/* {navLink.title} */}
              </Link>
            </li>
          );
        })}
      </ul>

      <AnimatePresence>
        {selected && navLinks[selected - 1].subMenu && (
          <NavSubmenu
            ref={submenuRef}
            tabs={navLinks}
            dir={dir}
            selected={selected}
          />
        )}
      </AnimatePresence>

      {/* MOBILE GET IN TOUCH BUTTON */}
      <MotionLink
        href={"/contact"}
        className="bg-white text-black text-sm py-5 text-center font-bold mx-6 mb-20 hidden max-lg:block hover:bg-gray-300 transition-colors"
      >
        GET IN TOUCH
      </MotionLink>
      {/* END MOBILE GET IN TOUCH BUTTON */}
    </nav>
  );
}
