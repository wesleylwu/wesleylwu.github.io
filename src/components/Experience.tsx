"use client";

import Image from "next/image";
import experiences from "@/data/experience";
import { motion } from "framer-motion";

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
    <>
      <motion.p
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-chakra text-glow-purple text-purple-neon mt-10 flex justify-center text-2xl md:mt-20 md:ml-30 md:justify-start lg:text-3xl"
        id="experience"
      >
        Experience
      </motion.p>

      <div className="mx-auto mt-10 flex w-10/12 flex-col gap-10 pb-16 md:w-8/12">
        {experiences.map(({ logo, alt, name, roles }, index) => (
          <motion.div
            key={name}
            custom={index}
            variants={companyBoxVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-blue-accent border-purple-neon/20 rounded-3xl border p-6 md:p-8"
          >
            <div className="mb-6 flex items-center gap-4">
              {logo && (
                <Image
                  src={logo}
                  alt={alt}
                  className="h-12 w-12 shrink-0 rounded-lg object-contain"
                />
              )}
              <h3 className="font-chakra text-base font-bold text-white md:text-lg lg:text-xl">
                {name}
              </h3>
            </div>

            <div className="space-y-6">
              {roles.map(({ title, date, details }, roleIndex) => (
                <div key={title} className="space-y-4">
                  {roleIndex !== 0 && (
                    <div className="border-purple-neon/15 my-6 border-t" />
                  )}
                  <div>
                    <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <p className="font-chakra text-blue-neon text-sm font-bold sm:text-base md:text-lg lg:text-xl">
                        {title}
                      </p>
                      <p className="font-share text-gray-primary text-xs font-semibold sm:text-sm md:text-base">
                        {date}
                      </p>
                    </div>
                    <ul className="list-none space-y-2 pl-0">
                      {details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-neon font-share flex-shrink-0 font-semibold select-none">
                            //
                          </span>
                          <span className="text-gray-200">{detail}</span>
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
    </>
  );
};

export default Experience;
