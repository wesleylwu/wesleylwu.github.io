import ACM from "@/public/experiences/acm.webp";
import citrusHack from "@/public/experiences/citrusHack.webp";
import suncreer from "@/public/experiences/suncreer.webp";
import handshake from "@/public/experiences/handshake.webp";
import mahoroba from "@/public/experiences/mahoroba.webp";

const experiences = [
  {
    logo: suncreer,
    alt: "Suncreer Logo",
    name: "Suncreer Inc.",
    location: "Tokyo",
    roles: [
      {
        title: "Software Engineer Intern",
        date: "Jun 2026 - Present",
        details: [
          "Developed a Next.js/TypeScript dashboard with an interactive template viewer, enabling users to audit and inline-edit OCR values in real time.",
          "Built Next.js API routes to orchestrate a serverless Python backend, integrating Claude API for automated document analysis.",
          "Architected a hybrid Vercel deployment using custom edge routing and vercel.json configurations to execute native Python serverless functions.",
        ],
      },
    ],
  },
  {
    logo: handshake,
    alt: "Handshake Logo",
    name: "Handshake",
    location: "Remote",
    roles: [
      {
        title: "Software Engineer AI Fellow",
        date: "May 2026 - Present",
        details: [
          "Evaluated AI model performance by running standardized coding tasks across different model outputs to compare logic, accuracy, and efficiency, while analyzing and grading code quality with written rationales.",
          "Managed isolated testing environments using Docker and CLI tools to execute, debug, and validate model-generated code in real time.",
          "Verified functional correctness by performing manual testing and using Git to track changes, ensuring all task-specific requirements were met.",
        ],
      },
    ],
  },
  {
    logo: citrusHack,
    alt: "Citrus Hack Logo",
    name: "Citrus Hack",
    location: "Riverside, CA",
    roles: [
      {
        title: "Software Engineer Lead",
        date: "Dec 2025 - Jun 2026",
        details: [
          "Built the official web platform for UC Riverside’s premier hackathon serving 300+ participants, developing a scalable frontend for registration and event workflows.",
          "Connected frontend features to a full-stack backend using Docker and PostgreSQL to support reliable data handling and system functionality.",
          "Worked in an agile team to implement features, improve UI/UX, and ensure smooth performance during high-traffic submission periods.",
        ],
      },
      {
        title: "Operations Committee Member",
        date: "Mar 2025 - Apr 2025",
        details: [
          "Supported planning of Citrus Hack, UCR’s 24-hour flagship hackathon with 300+ participants.",
          "Wrote the official Devpost project submission guide, detailing clear and accurate communication of rules, judging criteria, and event logistics.",
          "Helped streamline the hacker experience by outlining project expectations, deadlines, and submission procedures.",
        ],
      },
    ],
  },
  {
    logo: ACM,
    alt: "ACM Logo",
    name: "Association of Computing Machinery",
    location: "Riverside, CA",
    roles: [
      {
        title: "Project Lead",
        date: "Mar 2025 - Apr 2026",
        details: [
          "Led 4 teams of 10+ developers, teaching Tailwind, React, and TypeScript using Scrum practices to build and deploy websites while managing sprint execution and progress.",
          "Conducted code reviews, managed repositories, and coordinated development workflows through issue tracking and pull requests.",
          "Designed and prototyped user interfaces in Figma and collaborated with stakeholders to translate requirements into responsive, user-focused solutions.",
        ],
      },
      {
        title: "Vice President of Internal Affairs",
        date: "Apr 2025 - Jun 2025",
        details: [
          "Managed internal operations, including event planning, documentation, and board coordination.",
          "Coordinated and hosted quarterly industry panels for 50+ attendees featuring professionals from Google, Amazon, and Instagram to provide career mentorship and networking opportunities for the student body.",
          "Led and hosted socials to increase member engagement and strengthen community culture.",
        ],
      },
      {
        title: "Leadership Intern",
        date: "Mar 2025 - Apr 2025",
        details: [
          "Represented ACM at tabling events, engaging students, answering questions, and promoting membership and programs.",
          "Assisted in planning and logistics for UCR’s Computer Science Town Hall, coordinating with faculty and student leaders to improve communication and share curriculum updates and student resources.",
          "Promoted ACM events and opportunities through classroom announcements and direct outreach to increase student engagement.",
        ],
      },
      {
        title: "Front-End Developer",
        date: "Jan 2025 - Mar 2025",
        details: [
          "Collaborated with a team of developers to build the Chinese Students Association website using Next.js, TailwindCSS, and React, delivering intuitive user experience and responsiveness.",
          "Mapped design elements and user interface components to reusable templates while ensuring mobile responsiveness, improving code efficiency and consistency across the site.",
          "Participated in weekly Scrum meetings to engage with the development team and track project progress.",
        ],
      },
    ],
  },
  {
    logo: mahoroba,
    alt: "Mahoroba Japanese Bakery Logo",
    name: "Mahoroba Japanese Bakery",
    location: "West Sacramento, CA",
    roles: [
      {
        title: "Bakery Assistant",
        date: "Aug 2022 - Aug 2024",
        details: [
          "Trained and mentored new employees on bakery procedures, customer service, and food safety practices.",
          "Assisted with daily bakery operations, including food preparation, stocking, and maintaining cleanliness standards.",
          "Provided customer service by taking orders, handling transactions, and ensuring customer satisfaction.",
        ],
      },
    ],
  },
];

export default experiences;
