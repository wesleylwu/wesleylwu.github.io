"use client";

declare global {
  interface Window {
    submitted: boolean;
  }
}

import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const formContainerVariants = {
  hidden: { scale: 0.95, opacity: 0, x: 10 },
  visible: {
    scale: 1,
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, delay: 0.3 },
  },
};

const buttonHoverVariants = {
  hover: { scale: 1.05 },
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
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
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

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setFireflies(
      Array.from({ length: 12 }, (_, i) => {
        const size = 3 + Math.random() * 4;
        return {
          id: i,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 80 + 10}%`,
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
    <>
      <iframe
        name="hidden_iframe"
        id="hidden_iframe"
        style={{ display: "none" }}
        onLoad={() => {
          if (window.submitted) {
            setIsSubmitted(true);
            toast("Submitted ✅");
          }
        }}
      ></iframe>

      <motion.p
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-share text-lavender-primary mt-10 p-8 text-center text-lg tracking-wider uppercase md:text-xl"
        id="contact"
      >
        CONTACT
      </motion.p>

      <div className="relative w-full overflow-hidden pb-12">
        <StarField />

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

        <div className="relative z-10 mx-auto flex w-full justify-center px-4 pb-12">
          <motion.div
            className="bg-blue-accent/80 border-gray-primary/20 w-full max-w-sm rounded-4xl border-3 p-8 backdrop-blur-sm sm:max-w-lg md:w-2/3 md:max-w-xl"
            variants={formContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="font-noto flex flex-col items-center text-center text-lg sm:text-xl">
                Form Submitted!
              </div>
            ) : (
              <form
                action="https://docs.google.com/forms/d/e/1FAIpQLSeYyIU3k7Ln6LiohuWma4ZAqXxghR5Y_s12oObQr-8JEL_c-w/formResponse"
                onSubmit={() => (window.submitted = true)}
                target="hidden_iframe"
              >
                <div className="font-noto block text-sm font-bold text-white md:text-base">
                  Name
                </div>
                <input
                  name="entry.495580574"
                  type="text"
                  placeholder="Name"
                  className="font-noto mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 font-medium text-white placeholder-white/30 transition-all duration-200 outline-none focus:border-white/30 focus:bg-white/10"
                  required
                />

                <div className="font-noto mt-4 block text-sm font-bold text-white md:text-base">
                  Email
                </div>
                <input
                  name="entry.1903916603"
                  type="email"
                  placeholder="Email"
                  className="font-noto mt-2 w-full rounded-2xl border border-white/10 bg-white/5 p-3 font-medium text-white placeholder-white/30 transition-all duration-200 outline-none focus:border-white/30 focus:bg-white/10"
                  required
                />

                <div className="font-noto mt-4 block text-sm font-bold text-white md:text-base">
                  Message
                </div>
                <textarea
                  name="entry.477008615"
                  className="font-noto mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-6 font-medium text-white placeholder-white/30 transition-all duration-200 outline-none focus:border-white/30 focus:bg-white/10"
                  required
                />
                <motion.div variants={buttonHoverVariants} whileHover="hover">
                  <div className="mt-4 flex justify-center">
                    <button className="font-noto bg-blue-secondary/60 hover:bg-blue-secondary w-30 cursor-pointer rounded-2xl border border-white/10 p-2.5 text-center text-sm text-white transition-all duration-200 md:text-base">
                      Submit
                    </button>
                  </div>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
