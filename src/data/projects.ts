import CSA from "@/public/projects/csa.webp";
import PTSO from "@/public/projects/ptso.webp";
import AISC from "@/public/projects/aisc.webp";
import Redefined from "@/public/projects/redefined.jpeg";
import MockTrial from "@/public/projects/mockTrial.jpeg";
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
    alt: "Artificial Intelligence Student Collective Website",
    name: "Artificial Intelligence Student Collective",
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
  {
    website: Redefined,
    alt: "Redefined Website",
    name: "Redefined",
    description:
      "Led and developed with a team of 7 developers to build a website for UC Riverside's Redefined student organization.",
    github: "https://github.com/acm-ucr/redefined-website",
    websiteLink: "https://redefined.ucrhighlanders.org/",
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
    website: MockTrial,
    alt: "Mock Trial Website",
    name: "Mock Trial",
    description:
      "Led and developed with a team of 10 developers to build a website for UC Riverside's Mock Trial student organization.",
    github: "https://github.com/acm-ucr/mock-trial-website",
    websiteLink: "https://mocktrial.ucrhighlanders.org/",
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
