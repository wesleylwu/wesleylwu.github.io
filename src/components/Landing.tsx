"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import socials from "@/data/socials";
import Link from "next/link";

const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function StarField() {
  const [stars, setStars] = useState<
    {
      id: number;
      x: number;
      y: number;
      r: number;
      delay: number;
      dur: number;
    }[]
  >([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 160 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 70,
        r: Math.random() * 1.6 + 0.4,
        delay: Math.random() * 6,
        dur: Math.random() * 3 + 2,
      })),
    );
  }, []);

  if (stars.length === 0) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      {stars.map((s) => (
        <circle
          key={s.id}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill="white"
          style={{
            animation: `starTwinkle ${s.dur}s ${s.delay}s ease-in-out infinite`,
            opacity: 0.7,
          }}
        />
      ))}
    </svg>
  );
}

function Moon() {
  return (
    <div
      className="absolute animate-[moonGlow_6s_infinite_ease-in-out] rounded-full"
      style={{ top: "9%", right: "12%", zIndex: 1 }}
      aria-hidden="true"
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 35%, #fff9e6, #f4e4a0 40%, #d4b96a)",
          boxShadow:
            "0 0 40px 16px rgba(244, 224, 120, 0.18), 0 0 80px 32px rgba(244, 200, 80, 0.09)",
        }}
      />
    </div>
  );
}

const Landing = () => {
  const fullText = "Welcome!";
  const [displayedText, setDisplayedText] = useState<string>("");
  const [fireflies, setFireflies] = useState<
    {
      id: number;
      left: string;
      top: string;
      width: number;
      height: number;
      dx: string;
      dy: string;
      dur: string;
      delay: string;
    }[]
  >([]);

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

  useEffect(() => {
    setFireflies(
      Array.from({ length: 18 }, (_, i) => {
        const size = 3 + Math.random() * 4;
        return {
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${30 + Math.random() * 55}%`,
          width: size,
          height: size,
          dx: `${(Math.random() - 0.5) * 80}px`,
          dy: `${(Math.random() - 0.5) * 60}px`,
          dur: `${6 + Math.random() * 8}s`,
          delay: `${Math.random() * 8}s`,
        };
      }),
    );
  }, []);

  return (
    <div
      className="relative flex h-[80vh] items-center justify-center overflow-hidden bg-transparent text-white md:h-screen"
      id="home"
    >
      <StarField />
      <Moon />

      {fireflies.map((f) => (
        <div
          key={f.id}
          className="firefly"
          style={
            {
              left: f.left,
              top: f.top,
              width: f.width,
              height: f.height,
              "--dx": f.dx,
              "--dy": f.dy,
              "--dur": f.dur,
              "--delay": f.delay,
              zIndex: 2,
            } as React.CSSProperties
          }
        />
      ))}

      <div className="z-10 flex flex-col items-center px-4 text-center md:-translate-y-10">
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="font-share text-lavender-primary text-sm tracking-widest uppercase md:text-base"
        >
          {displayedText}
          <span className="animate-pulse">|</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-chakra mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Wesley Wu
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-share text-lavender-primary mt-4 text-base tracking-widest uppercase sm:text-lg md:text-xl"
        >
          Software Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-8 flex flex-row justify-center gap-6"
        >
          {socials.map(({ Icon, link }, index) => (
            <Link
              key={index}
              href={link}
              target="_blank"
              className="hover:text-lavender-primary text-white transition-colors duration-300"
            >
              <Icon className="text-xl transition-transform hover:scale-110 md:text-2xl" />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Landing;
