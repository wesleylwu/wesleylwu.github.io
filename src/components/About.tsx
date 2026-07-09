"use client";

import Image from "next/image";
import pfp from "@/public/landing/profile.webp";
import { motion } from "framer-motion";

const imageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, delay: 0.2 } },
};

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center gap-20 px-6 pt-20 lg:flex-row lg:px-20"
      id="about"
    >
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-1/2 overflow-hidden rounded-3xl border border-white/10 transition-shadow duration-300 hover:shadow-[0_0_40px_rgba(196,181,253,0.15)] sm:w-1/3 lg:w-1/4"
      >
        <Image
          src={pfp}
          alt="Profile Picture"
          className="w-full rounded-3xl object-cover"
        />
      </motion.div>

      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex max-w-xl flex-col items-center lg:max-w-2xl lg:items-start"
      >
        <p className="font-share text-lavender-primary text-lg tracking-wider uppercase lg:pl-8 lg:text-xl">
          ABOUT
        </p>
        <p className="bg-blue-accent mt-5 w-full rounded-3xl p-6 text-sm text-white lg:p-8 lg:text-base">
          Hi! My name is Wesley Wu. I’m a computer science student at the
          University of California, Riverside. On my free time, I enjoy going on
          runs, bouldering, and playing volleyball. Thank you for stopping by!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
