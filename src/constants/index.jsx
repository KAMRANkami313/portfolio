import project1 from "../assets/eventpulse.webp";
import project2 from "../assets/todo.webp";

import {
  RiReactjsLine,
  RiNodejsLine,
  RiTailwindCssFill,
} from "react-icons/ri";

import {
  SiMongodb,
  SiExpress,
  SiDocker,
  SiStripe,
  SiSocketdotio,
} from "react-icons/si";

import {
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFileText,
} from "react-icons/fi";

export const HERO_CONTENT = {
  name: "Muhammad Kamran",
  role: "MERN Stack Developer",
  description:
    "I build scalable, production-ready full-stack applications with a focus on performance and user experience.",
  resumeLink: "/resume.pdf",
  githubLink: "https://github.com/KAMRANkami313",
  linkedinLink: "https://linkedin.com/in/muhammad-kamran-aa7620296",
};

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    name: "React.js",
    icon: <RiReactjsLine className="text-cyan-400" />,
    level: "Advanced",
  },
  {
    name: "Node.js",
    icon: <RiNodejsLine className="text-green-500" />,
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    level: "Intermediate",
  },
  {
    name: "Express",
    icon: <SiExpress className="text-white" />,
    level: "Intermediate",
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="text-sky-400" />,
    level: "Expert",
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" />,
    level: "Beginner",
  },
  {
    name: "Stripe",
    icon: <SiStripe className="text-indigo-500" />,
    level: "Integration",
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="text-white" />,
    level: "Real-time",
  },
];

export const PROJECTS = [
  {
    title: "EventPulse",
    subtitle: "Full-Stack Event Management SaaS",
    description:
      "A production-grade platform featuring real-time booking, Stripe payments, and QR code ticket generation. Built to handle high-concurrency event registrations.",
    image: project1,
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Socket.io",
      "Tailwind",
    ],
    github: "https://github.com/KAMRANkami313",
    live: "https://eventpulse-tawny.vercel.app/",
  },
  {
    title: "Native Tasker",
    subtitle: "React Native Productivity App",
    description:
      "A cross-platform mobile application for task management with offline persistence, push notifications, and biometric authentication.",
    image: project2,
    tech: ["React Native", "Redux", "Node.js", "SQLite"],
    github: "https://github.com/KAMRANkami313",
    live: "https://eventpulse-tawny.vercel.app/",
  },
];

export const EXPERIENCE = [
  {
    year: "2024 - Present",
    title: "Full-Stack Specialization",
    company: "Personal Lab",
    description:
      "Architecting EventPulse, a scalable event management SaaS. Focusing on real-time systems using Socket.io and secure payment processing with Stripe.",
  },
  {
    year: "2023 - 2024",
    title: "MERN Stack Development",
    company: "Self-Directed Learning",
    description:
      "Mastered React.js and Node.js ecosystem. Built various full-stack applications including social media clones and task management systems.",
  },
  {
    year: "2022 - Present",
    title: "BS Computer Science",
    company: "Air University",
    description:
      "Focusing on Software Engineering principles, Data Structures, and Database Management Systems. Maintaining a strong academic foundation.",
  },
  {
    year: "2022",
    title: "Started Web Development",
    company: "Frontend Basics",
    description:
      "Began journey with HTML, CSS, and JavaScript. Developed a passion for building clean and responsive user interfaces.",
  },
];

export const CONTACT = {
  email: "232501@students.au.edu.pk",
  socials: [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/muhammad-kamran-aa7620296",
      icon: <FiLinkedin />,
    },
    {
      name: "GitHub",
      href: "https://github.com/KAMRANkami313",
      icon: <FiGithub />,
    },
  ],
  resume: {
    label: "Download Resume",
    href: "/resume.pdf",
    icon: <FiFileText />,
  },
};
export const STATS = [
  { label: "Projects Completed", value: "10+" },
  { label: "Git Commits", value: "500+" },
  { label: "Years Experience", value: "2+" },
  { label: "Technologies", value: "15+" },
];