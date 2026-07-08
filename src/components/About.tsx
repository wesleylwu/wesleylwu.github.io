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
      className="mt-20 flex flex-col items-center justify-center gap-20 px-6 md:flex-row md:px-20"
      id="about"
    >
      <motion.div
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="image-glow-blue w-1/3 overflow-hidden rounded-full md:w-2/3 xl:w-1/5"
      >
        <Image src={pfp} alt="Profile Picture" className="rounded-full" />
      </motion.div>

      <motion.div
        variants={textContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex max-w-xl flex-col items-center md:max-w-2xl md:items-start"
      >
        <p className="font-share text-amber-gold text-2xl md:ml-5 lg:text-3xl">
          About
        </p>
        <p className="bg-blue-accent text-lavender-primary mt-5 w-full rounded-3xl p-6 text-sm md:p-8 md:text-base">
          Hi! My name is Wesley Wu. I’m a computer science student at the
          University of California, Riverside. On my free time, I enjoy
          listening to music, drawing, and playing volleyball. Thank you for
          stopping by!
        </p>
      </motion.div>
    </div>
  );
};

export default About;
