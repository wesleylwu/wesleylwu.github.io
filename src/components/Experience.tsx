"use client";

import Image from "next/image";
import experiences from "@/data/experience";
import { motion } from "motion/react";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const companyBoxVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: index * 0.1 },
  }),
};

const Experience = () => {
  return (
    <div id="experience" className="pt-10 md:pt-20">
      <motion.p
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-share text-lavender-primary flex justify-center text-lg tracking-wider uppercase md:text-xl"
      >
        EXPERIENCE
      </motion.p>

      <div className="mx-auto mt-10 flex w-10/12 flex-col gap-10 pb-16 md:w-8/12">
        {experiences.map(({ logo, alt, name, location, roles }, index) => (
          <motion.div
            key={name}
            custom={index}
            variants={companyBoxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-accent border-gray-primary/20 rounded-3xl border p-6 md:p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              {logo && (
                <Image
                  src={logo}
                  alt={alt}
                  className="h-12 w-12 shrink-0 rounded-lg object-contain"
                />
              )}
              <div>
                <h3 className="font-noto text-base font-bold text-white md:text-lg lg:text-xl">
                  {name}
                </h3>
                <p className="font-noto mt-0.5 text-xs text-white/50 md:text-sm">
                  {location}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {roles.map(({ title, date, details }, roleIndex) => (
                <div key={title} className="space-y-4">
                  {roleIndex !== 0 && (
                    <div className="border-gray-primary/10 my-6 border-t" />
                  )}
                  <div>
                    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <p className="font-chakra text-sm font-bold text-white sm:text-base md:text-lg lg:text-xl">
                        {title}
                      </p>
                      <p className="font-noto text-xs font-semibold text-white/70 sm:text-sm md:text-base">
                        {date}
                      </p>
                    </div>
                    <ul className="list-none space-y-2 pl-0">
                      {details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="font-noto flex-shrink-0 font-semibold text-white select-none">
                            •
                          </span>
                          <span className="text-white">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
