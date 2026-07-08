"use client";

import Image from "next/image";
import ExperienceDivder from "@/components/ExperienceDivider";
import experiences from "@/data/experience";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-glow-purple text-purple-neon mt-10 flex justify-center text-2xl md:mt-20 md:ml-30 md:justify-start lg:text-3xl"
        id="experience"
      >
        Experience
      </motion.p>
      <ExperienceDivder />
      {experiences.map(({ logo, alt, name, roles }, index) => (
        <div key={name}>
          {index !== 0 && <ExperienceDivder />}
          <div className="mx-auto mt-10 flex w-10/12 flex-col items-center gap-x-10 md:flex-row">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="flex flex-col items-center justify-center md:w-1/3"
            >
              {logo && (
                <Image
                  src={logo}
                  alt={alt}
                  className={`w-1/3 md:w-3/5 ${name === "Citrus Hack" ? "mr-5 md:mr-10 lg:mr-13" : ""}`}
                />
              )}
              <p className="mt-4 text-center text-sm font-bold md:text-base lg:text-lg">
                {name}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.2 }}
              className="mt-5 flex flex-col justify-center space-y-5 md:mt-0 md:w-2/3"
            >
              {roles.map(({ title, date, details }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-blue-accent rounded-3xl p-6 text-sm md:p-8 md:text-base"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-bold sm:text-base md:text-lg lg:text-xl">
                      {title}
                    </p>
                    <p className="text-gray-primary text-xs font-semibold sm:text-sm md:text-base">
                      {date}
                    </p>
                  </div>
                  <ul className="ml-5 list-disc space-y-2">
                    {details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
      <ExperienceDivder />
    </>
  );
};

export default Experience;
