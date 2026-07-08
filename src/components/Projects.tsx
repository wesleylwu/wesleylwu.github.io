"use client";

import projects from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

const projectCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: index * 0.2 },
  }),
};

const Projects = () => {
  return (
    <>
      <motion.p
        variants={fadeInVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="font-share text-amber-gold p-8 text-center text-2xl md:mt-10 lg:text-3xl"
        id="projects"
      >
        Projects
      </motion.p>

      <div className="mx-auto flex max-w-7xl grid-cols-2 flex-col gap-8 md:grid">
        {projects.map(
          (
            {
              website,
              alt,
              name,
              description,
              icons,
              github,
              websiteLink,
              gradient,
            },
            index,
          ) => {
            const githubIndex = icons.indexOf(SiGithub);
            const leftIcons =
              githubIndex !== -1
                ? icons.filter((_, i) => i !== githubIndex)
                : icons;

            return (
              <motion.div
                key={name}
                custom={index}
                variants={projectCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-blue-accent border-gray-primary/20 flex w-2/3 flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(196,181,253,0.22)] md:w-2/3">
                  <div
                    className="h-1 w-full"
                    style={{ background: gradient }}
                  />

                  <Link
                    href={websiteLink}
                    target="_blank"
                    className="w-full overflow-hidden"
                  >
                    <Image
                      src={website}
                      alt={alt}
                      className="w-full object-cover"
                    />
                  </Link>

                  <div className="p-6">
                    <p className="font-chakra mt-2 text-center text-base font-bold text-white lg:text-lg">
                      {name}
                    </p>
                    <p className="font-noto text-lavender-primary mt-2 text-xs sm:text-sm">
                      {description}
                    </p>
                    <div className="font-noto mt-4 flex items-center justify-between text-sm sm:text-base md:text-lg">
                      <div className="flex space-x-4">
                        {leftIcons.map((Icon, index) => (
                          <Icon key={index} className="text-lavender-primary" />
                        ))}
                      </div>
                      {githubIndex !== -1 && (
                        <Link
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="text-lavender-primary transition-colors duration-200 ease-in-out hover:text-white" />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          },
        )}
      </div>
    </>
  );
};

export default Projects;
