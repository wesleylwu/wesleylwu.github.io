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
          <div className="mx-auto mt-10 w-10/12 md:w-8/12">
            {/* Company Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="mb-6 flex items-center gap-4"
            >
              {logo && (
                <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-1">
                  <Image
                    src={logo}
                    alt={alt}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <h3 className="text-base font-bold text-white md:text-lg lg:text-xl">
                {name}
              </h3>
            </motion.div>

            {/* Roles Container */}
            <div className="space-y-6">
              {roles.map(({ title, date, details }, roleIndex) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1 + roleIndex * 0.05,
                  }}
                  className="bg-blue-accent border-blue-secondary/30 rounded-3xl border p-6 text-sm md:p-8 md:text-base"
                >
                  <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                    <p className="text-sm font-bold text-white sm:text-base md:text-lg lg:text-xl">
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
            </div>
          </div>
        </div>
      ))}
      <ExperienceDivder />
    </>
  );
};

export default Experience;
