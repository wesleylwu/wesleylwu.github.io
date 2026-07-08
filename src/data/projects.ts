import CSA from "@/public/projects/csa.webp";
import PTSO from "@/public/projects/ptso.webp";
import AISC from "@/public/projects/aisc.webp";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFigma,
  SiPrettier,
  SiTypescript,
  SiGithub,
} from "react-icons/si";

const projects = [
  {
    website: CSA,
    alt: "Chinese Student Association Website",
    name: "Chinese Student Association",
    description:
      "Developed with a team of 10 developers to build a website for UC Riverside's Chinese Student Association.",
    github: "https://github.com/acm-ucr/csa-website",
    websiteLink: "https://csa.ucrhighlanders.org/",
    icons: [
      SiReact,
      SiNextdotjs,
      SiTailwindcss,
      SiFigma,
      SiPrettier,
      SiTypescript,
      SiGithub,
    ],
  },
  {
    website: PTSO,
    alt: "Pre-Therapy Student Organization Website",
    name: "Pre-Therapy Student Organization",
    description:
      "Led and developed with a team of 10 developers to build a website for UC Riverside's Pre-Therapy Student Organization.",
    github: "https://github.com/acm-ucr/ptso-website",
    websiteLink: "https://ptso.ucrhighlanders.org/",

    icons: [
      SiReact,
      SiNextdotjs,
      SiTailwindcss,
      SiFigma,
      SiPrettier,
      SiTypescript,
      SiGithub,
    ],
  },
  {
    website: AISC,
    alt: "AI Student Collective Website",
    name: "AI Student Collective",
    description:
      "Led and developed with a team of 11 developers to build a website for UC Riverside's AI Student Collective.",
    github: "https://github.com/acm-ucr/aisc-website",
    websiteLink: "https://acm-ucr.github.io/aisc-website/",

    icons: [
      SiReact,
      SiNextdotjs,
      SiTailwindcss,
      SiFigma,
      SiPrettier,
      SiTypescript,
      SiGithub,
    ],
  },
];

export default projects;
