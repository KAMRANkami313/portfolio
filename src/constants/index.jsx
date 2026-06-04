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
  roles: [
    "MERN Stack Developer",
    "Full-Stack Engineer",
    "SaaS Architect",
    "React Specialist",
    "Node.js Engineer",
  ],
  description:
    "I engineer scalable, production-ready full-stack applications — from real-time SaaS platforms to high-performance APIs — with an obsession for clean architecture and pixel-perfect UX.",
  resumeLink: "/resume.pdf",
  githubLink: "https://github.com/KAMRANkami313",
  linkedinLink: "https://linkedin.com/in/muhammad-kamran-aa7620296",
};

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SKILLS = [
  {
    name: "React.js",
    icon: <RiReactjsLine className="text-cyan-400" />,
    level: "Advanced",
    proficiency: 90,
  },
  {
    name: "Node.js",
    icon: <RiNodejsLine className="text-green-500" />,
    level: "Advanced",
    proficiency: 85,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600" />,
    level: "Advanced",
    proficiency: 80,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-white" />,
    level: "Advanced",
    proficiency: 85,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill className="text-sky-400" />,
    level: "Expert",
    proficiency: 95,
  },
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" />,
    level: "Intermediate",
    proficiency: 60,
  },
  {
    name: "Stripe",
    icon: <SiStripe className="text-indigo-500" />,
    level: "Integration",
    proficiency: 70,
  },
  {
    name: "Socket.io",
    icon: <SiSocketdotio className="text-white" />,
    level: "Real-time",
    proficiency: 75,
  },
];

export const SKILLS_CATEGORIES = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "React.js", proficiency: 90 },
      { name: "Next.js", proficiency: 70 },
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "Framer Motion", proficiency: 80 },
      { name: "Redux Toolkit", proficiency: 75 },
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express.js", proficiency: 85 },
      { name: "Socket.io", proficiency: 75 },
      { name: "REST APIs", proficiency: 90 },
      { name: "JWT Auth", proficiency: 85 },
    ]
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", proficiency: 80 },
      { name: "PostgreSQL", proficiency: 55 },
      { name: "Redis", proficiency: 50 },
      { name: "Docker", proficiency: 60 },
      { name: "AWS S3", proficiency: 55 },
    ]
  },
  {
    title: "Tools & Payments",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "Stripe API", proficiency: 70 },
      { name: "Postman", proficiency: 85 },
      { name: "Vercel", proficiency: 80 },
      { name: "Linux", proficiency: 65 },
    ]
  }
];

export const PROJECTS = [
  {
    title: "EventPulse",
    subtitle: "Full-Stack Event Management SaaS",
    description:
      "A production-grade platform featuring real-time booking, Stripe payments, and QR code ticket generation. Built to handle high-concurrency event registrations with sub-200ms response times.",
    image: project1,
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Stripe",
      "Socket.io",
      "Tailwind",
    ],
    challenge: "Handling concurrent ticket bookings without race conditions and managing real-time seat availability across multiple users.",
    solution: "Implemented MongoDB transactions for ACID compliance during checkout and utilized Socket.io for instant broadcast of inventory changes.",
    github: "https://github.com/KAMRANkami313",
    live: "https://eventpulse-tawny.vercel.app/",
    featured: true,
    metrics: [
      { label: "Response Time", value: "<200ms" },
      { label: "Uptime", value: "99.9%" },
    ]
  },
  {
    title: "Native Tasker",
    subtitle: "React Native Productivity App",
    description:
      "A cross-platform mobile application for task management with offline persistence, push notifications, and biometric authentication. Supports 10K+ tasks with smooth 60fps animations.",
    image: project2,
    tech: ["React Native", "Redux", "Node.js", "SQLite"],
    challenge: "Ensuring data consistency and a seamless UX when users transition from offline to online environments.",
    solution: "Developed an offline-first architecture using Redux Persist and SQLite, with a background synchronization engine to resolve conflicts.",
    github: "https://github.com/KAMRANkami313",
    live: "#",
    featured: false,
    metrics: [
      { label: "Offline-First", value: "100%" },
      { label: "Sync Engine", value: "Real-time" },
    ]
  },
];

export const EXPERIENCE = [
  {
    year: "2024 - Present",
    title: "Full-Stack Specialization",
    company: "Personal Lab",
    description:
      "Architecting EventPulse, a scalable event management SaaS. Focusing on real-time systems using Socket.io and secure payment processing with Stripe.",
    tags: ["React", "Node.js", "Stripe", "Socket.io"],
  },
  {
    year: "2023 - 2024",
    title: "MERN Stack Development",
    company: "Self-Directed Learning",
    description:
      "Mastered React.js and Node.js ecosystem. Built various full-stack applications including social media clones and task management systems.",
    tags: ["Express", "MongoDB", "REST APIs"],
  },
  {
    year: "2022 - Present",
    title: "BS Computer Science",
    company: "Air University",
    description:
      "Focusing on Software Engineering principles, Data Structures, and Database Management Systems. Maintaining a strong academic foundation.",
    tags: ["DSA", "OOP", "DBMS"],
  },
  {
    year: "2022",
    title: "Started Web Development",
    company: "Frontend Basics",
    description:
      "Began journey with HTML, CSS, and JavaScript. Developed a passion for building clean and responsive user interfaces.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Ahmed Raza",
    role: "Senior Developer",
    company: "Tech Solutions",
    text: "Kamran's ability to build production-ready applications is impressive. His EventPulse project demonstrates a deep understanding of real-time systems and payment integration that most junior developers lack.",
    avatar: "AR",
  },
  {
    name: "Sara Khan",
    role: "Project Manager",
    company: "Digital Agency",
    text: "Working with Kamran on our platform was a great experience. He consistently delivered clean, well-architected code and his attention to UX details made a real difference in our product quality.",
    avatar: "SK",
  },
  {
    name: "Usman Ali",
    role: "CS Classmate",
    company: "Air University",
    text: "Kamran stands out in our cohort for his dedication to writing scalable code. He's always exploring new technologies and applying best practices — a true engineer at heart.",
    avatar: "UA",
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
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Git Commits", value: 500, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
];