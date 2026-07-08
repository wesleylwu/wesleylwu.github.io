"use client";

import { useState } from "react";
import navBar from "@/data/navBar";
import Divider from "@/components/Divider";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50">
      <div className="font-quicksand bg-blue-primary flex items-center justify-between px-8 py-6 text-sm md:px-16 md:text-base">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          offset={-100}
          className="text-blue-neon text-glow-blue neon-pulse cursor-pointer"
        >
          Wesley Wu
        </ScrollLink>

        <div className="md:hidden">
          <RiMenu2Fill
            className="cursor-pointer text-2xl text-white"
            onClick={toggleNav}
          />
        </div>

        <div className="hidden flex-row-reverse gap-15 text-white md:flex">
          {[...navBar].reverse().map(({ text, link }, index) => (
            <ScrollLink
              to={link}
              key={index}
              smooth={true}
              duration={500}
              className="cursor-pointer font-medium transition-transform duration-300 ease-in-out hover:scale-105"
              spy={true}
              offset={-130}
              activeClass="text-blue-dark"
            >
              {text}
            </ScrollLink>
          ))}
        </div>
      </div>

      <Divider />

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex md:hidden"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
          >
            <div className="bg-blue-primary flex h-full w-[80vw] flex-col gap-6 p-8">
              <div className="flex justify-end">
                <RiCloseFill
                  className="cursor-pointer text-2xl text-white"
                  onClick={toggleNav}
                />
              </div>

              {navBar.map(({ text, link }, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: (index + 1) * 0.05 + 0.4,
                    duration: 0.3,
                    ease: "easeIn",
                  }}
                >
                  <ScrollLink
                    to={link}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    onClick={toggleNav}
                    className="cursor-pointer text-lg font-medium text-white transition-colors hover:scale-105"
                    spy={true}
                    activeClass="font-bold"
                  >
                    {text}
                  </ScrollLink>
                </motion.div>
              ))}
            </div>

            <div
              className="h-full w-[20vw] bg-black opacity-30"
              onClick={toggleNav}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
