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
        className="font-share text-lavender-primary p-8 text-center text-lg tracking-wider uppercase md:mt-10 md:text-xl"
        id="projects"
      >
        PROJECTS
      </motion.p>

      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
        {projects.map(
          (
            { website, alt, name, description, icons, github, websiteLink },
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
                className="flex h-full flex-col items-center"
              >
                <div className="bg-blue-accent border-gray-primary/20 flex h-full w-5/6 max-w-[290px] flex-col overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(196,181,253,0.22)] sm:w-3/4 md:w-full">
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

                  <div className="flex flex-1 flex-col justify-between p-6">
                    <p className="font-chakra mt-2 text-center text-base font-bold text-white lg:text-lg">
                      {name}
                    </p>
                    <p className="font-noto mt-2 text-xs text-white sm:text-sm">
                      {description}
                    </p>
                    <div className="font-noto mt-4 flex items-center justify-between text-sm sm:text-base md:text-lg">
                      <div className="flex space-x-4">
                        {leftIcons.map((Icon, index) => (
                          <Icon key={index} className="text-white" />
                        ))}
                      </div>
                      {githubIndex !== -1 && (
                        <Link
                          href={github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <SiGithub className="text-white/70 transition-colors duration-200 ease-in-out hover:text-white" />
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
