"use client";

import Image from "next/image";
import mtFujiAndMoon from "@/public/mtFujiAndMoon.webp";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Landing = () => {
  const fullText = "Welcome!";
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="bg-blue-secondary relative flex h-[80vh] items-center justify-center text-white md:h-screen"
      id="home"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-xl md:-translate-y-30 md:text-2xl lg:text-3xl xl:text-4xl"
      >
        {displayedText}
        <span className="animate-pulse">|</span>
      </motion.p>

      <Image
        src={mtFujiAndMoon}
        alt="Mount Fuji and Moon"
        className="absolute bottom-0 w-full"
      />
    </div>
  );
};

export default Landing;
