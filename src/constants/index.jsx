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
  { name: "React.js", icon: <RiReactjsLine className="text-cyan-400" />, level: "Advanced", proficiency: 90 },
  { name: "Node.js", icon: <RiNodejsLine className="text-green-500" />, level: "Advanced", proficiency: 85 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: "Advanced", proficiency: 80 },
  { name: "Express", icon: <SiExpress className="text-white" />, level: "Advanced", proficiency: 85 },
  { name: "Tailwind", icon: <RiTailwindCssFill className="text-sky-400" />, level: "Expert", proficiency: 95 },
  { name: "Docker", icon: <SiDocker className="text-blue-500" />, level: "Intermediate", proficiency: 60 },
  { name: "Stripe", icon: <SiStripe className="text-indigo-500" />, level: "Integration", proficiency: 70 },
  { name: "Socket.io", icon: <SiSocketdotio className="text-white" />, level: "Real-time", proficiency: 75 },
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
    description: "A production-grade platform featuring real-time booking, Stripe payments, and QR code ticket generation. Built to handle high-concurrency event registrations with sub-200ms response times.",
    image: project1,
    tech: ["React", "Node.js", "MongoDB", "Stripe", "Socket.io", "Tailwind"],
    challenge: "Handling concurrent ticket bookings without race conditions and managing real-time seat availability across multiple users.",
    solution: "Implemented MongoDB transactions for ACID compliance during checkout and utilized Socket.io for instant broadcast of inventory changes.",
    github: "https://github.com/KAMRANkami313",
    live: "https://eventpulse-tawny.vercel.app/",
    featured: true,
    metrics: [{ label: "Response Time", value: "<200ms" }, { label: "Uptime", value: "99.9%" }],
  },
  {
    title: "Native Tasker",
    subtitle: "React Native Productivity App",
    description: "A cross-platform mobile application for task management with offline persistence, push notifications, and biometric authentication. Supports 10K+ tasks with smooth 60fps animations.",
    image: project2,
    tech: ["React Native", "Redux", "Node.js", "SQLite"],
    challenge: "Ensuring data consistency and a seamless UX when users transition from offline to online environments.",
    solution: "Developed an offline-first architecture using Redux Persist and SQLite, with a background synchronization engine to resolve conflicts.",
    github: "https://github.com/KAMRANkami313",
    live: "#",
    featured: false,
    metrics: [{ label: "Offline-First", value: "100%" }, { label: "Sync Engine", value: "Real-time" }],
  },
];

export const EXPERIENCE = [
  {
    year: "2024 - Present",
    title: "Full-Stack Specialization",
    company: "Personal Lab",
    description: "Architecting EventPulse, a scalable event management SaaS. Focusing on real-time systems using Socket.io and secure payment processing with Stripe.",
    tags: ["React", "Node.js", "Stripe", "Socket.io"],
  },
  {
    year: "2023 - 2024",
    title: "MERN Stack Development",
    company: "Self-Directed Learning",
    description: "Mastered React.js and Node.js ecosystem. Built various full-stack applications including social media clones and task management systems.",
    tags: ["Express", "MongoDB", "REST APIs"],
  },
  {
    year: "2022 - Present",
    title: "BS Computer Science",
    company: "Air University",
    description: "Focusing on Software Engineering principles, Data Structures, and Database Management Systems. Maintaining a strong academic foundation.",
    tags: ["DSA", "OOP", "DBMS"],
  },
  {
    year: "2022",
    title: "Started Web Development",
    company: "Frontend Basics",
    description: "Began journey with HTML, CSS, and JavaScript. Developed a passion for building clean and responsive user interfaces.",
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
    { name: "LinkedIn", href: "https://linkedin.com/in/muhammad-kamran-aa7620296", icon: <FiLinkedin /> },
    { name: "GitHub", href: "https://github.com/KAMRANkami313", icon: <FiGithub /> },
  ],
  resume: { label: "Download Resume", href: "/resume.pdf", icon: <FiFileText /> },
};

export const STATS = [
  { label: "Projects Completed", value: 10, suffix: "+" },
  { label: "Git Commits", value: 500, suffix: "+" },
  { label: "Years Experience", value: 2, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
];

// ===================== AI CHATBOT KNOWLEDGE BASE =====================
export const CHATBOT_KNOWLEDGE = [
  {
    patterns: ['skill', 'tech stack', 'technologies', 'what can you do', 'what do you know', 'tools', 'languages'],
    responses: [
      "Kamran's core tech stack is MERN (MongoDB, Express, React, Node.js). He's advanced in React.js (90%), Node.js (85%), Express (85%), and MongoDB (80%). He's also an expert in Tailwind CSS (95%) and has experience with Docker, Stripe, and Socket.io for real-time features. 🔥",
      "His primary weapons: React.js + Node.js + MongoDB + Express = The MERN Stack. But he also knows Docker for containerization, Stripe for payments, Socket.io for real-time, and Tailwind CSS for pixel-perfect UIs. He's a full-stack powerhouse! 💪",
    ]
  },
  {
    patterns: ['project', 'portfolio', 'built', 'created', 'made', 'work sample'],
    responses: [
      "Kamran's flagship project is EventPulse — a full-stack event management SaaS with real-time booking, Stripe payments, and QR code tickets. It handles concurrent bookings with MongoDB transactions and Socket.io for instant updates. Response time? Under 200ms! 🚀",
      "His main showcase is EventPulse, a production-grade SaaS platform. He also built Native Tasker, a React Native productivity app with offline-first architecture and background sync. Both demonstrate his ability to ship real products! 📦",
    ]
  },
  {
    patterns: ['experience', 'work history', 'career', 'job', 'professional', 'employment'],
    responses: [
      "Kamran has 2+ years of development experience. He's currently focused on full-stack specialization, building production SaaS apps like EventPulse. Before that, he mastered the MERN stack through self-directed learning. He's also pursuing BS Computer Science at Air University, Islamabad. 🎓",
      "His journey started in 2022 with frontend basics, evolved into full MERN stack mastery by 2023, and now he's architecting scalable SaaS platforms. He's actively seeking internship opportunities to take his career to the next level! 📈",
    ]
  },
  {
    patterns: ['education', 'university', 'degree', 'study', 'student', 'academic'],
    responses: [
      "Kamran is pursuing BS Computer Science at Air University, Islamabad. He's specialized in Software Engineering, Database Systems, and Data Structures. His academic foundation complements his practical full-stack skills perfectly! 🎓",
      "He's a CS student at Air University, Islamabad — combining academic rigor with real-world engineering. He believes in learning by building, which is why he has production-grade projects to show! 🏗️",
    ]
  },
  {
    patterns: ['contact', 'email', 'reach', 'hire', 'connect', 'talk', 'message'],
    responses: [
      "You can reach Kamran at 232501@students.au.edu.pk 📧. He's also on LinkedIn (Muhammad Kamran) and GitHub (@KAMRANkami313). Or just scroll down to the contact section and send him a message directly! He responds within 24 hours. ⚡",
      "The best way to connect: email him at 232501@students.au.edu.pk, find him on LinkedIn, or check out his GitHub @KAMRANkami313. He's actively looking for internship opportunities and collaborations! 🤝",
    ]
  },
  {
    patterns: ['available', 'hiring', 'internship', 'freelance', 'open to work', 'looking for'],
    responses: [
      "Great news — Kamran is currently AVAILABLE FOR HIRE! 🟢 He's actively seeking internship opportunities and is open to full-time roles, freelance projects, and collaborations. He's especially interested in SaaS development and real-time systems. Reach out now! 💼",
      "Yes! Kamran is actively looking for opportunities — internships, full-time positions, or freelance work. He's ready to contribute to a team that values clean architecture and production-quality code. Don't miss out! 🎯",
    ]
  },
  {
    patterns: ['react', 'frontend', 'ui', 'user interface', 'design'],
    responses: [
      "React.js is Kamran's strongest skill at 90% proficiency! He builds component-driven, performant UIs with React 19, Redux Toolkit for state management, Framer Motion for animations, and Tailwind CSS for styling. He's also experienced with Next.js for SSR/SSG. ⚛️",
      "On the frontend, Kamran is a React specialist. He leverages React 19, Tailwind CSS 4, Framer Motion for smooth animations, and Redux Toolkit for complex state. His UIs are pixel-perfect and production-ready! 🎨",
    ]
  },
  {
    patterns: ['node', 'backend', 'server', 'api', 'express'],
    responses: [
      "Kamran's backend game is strong! He builds RESTful APIs with Node.js and Express at 85% proficiency. He implements JWT authentication, Socket.io for real-time features, and integrates payment systems like Stripe. His APIs deliver sub-200ms response times! 🔧",
      "On the backend, Kamran architects scalable APIs with Node.js + Express. He implements real-time features with Socket.io, handles payments via Stripe, and ensures security with JWT authentication. Performance is always a priority! 🖥️",
    ]
  },
  {
    patterns: ['database', 'mongodb', 'storage', 'data', 'db'],
    responses: [
      "Kamran's primary database is MongoDB at 80% proficiency, using Mongoose ODM for elegant schema design. He's also familiar with PostgreSQL (55%), Redis for caching (50%), and AWS S3 for file storage. He uses MongoDB transactions for data integrity! 🗄️",
      "MongoDB is his go-to database — he uses transactions for ACID compliance, indexing for performance, and aggregation pipelines for complex queries. He also knows PostgreSQL, Redis, and cloud storage solutions. Data integrity is his middle name! 💾",
    ]
  },
  {
    patterns: ['eventpulse', 'event pulse', 'saas', 'booking', 'ticket'],
    responses: [
      "EventPulse is Kamran's flagship SaaS project! It's a full-stack event management platform with: real-time booking via Socket.io, Stripe payment integration, QR code ticket generation, MongoDB transactions for data integrity, and sub-200ms response times. It's deployed on Vercel and handles concurrent bookings like a champ! 🎫✨",
      "EventPulse = Event Management on steroids. Built with React + Node.js + MongoDB + Stripe + Socket.io. Features include real-time seat availability, instant booking confirmations, secure payments, and QR code tickets. It's production-grade and battle-tested! 🏟️",
    ]
  },
  {
    patterns: ['docker', 'deploy', 'devops', 'cloud', 'hosting'],
    responses: [
      "Kamran is growing his DevOps skills! He uses Docker (60% proficiency) for containerization, Vercel (80%) for frontend deployment, and is exploring cloud-native patterns. He believes in CI/CD pipelines and automated deployments for reliable releases! ☁️",
      "His deployment stack: Vercel for React apps, Docker for containerization, and he's diving deeper into AWS and Kubernetes. He practices infrastructure-as-code principles and automated deployment workflows! 🐳",
    ]
  },
  {
    patterns: ['real-time', 'socket', 'websocket', 'live', 'instant'],
    responses: [
      "Real-time is Kamran's specialty! He uses Socket.io (75% proficiency) to build live features like instant booking updates, live chat, and real-time notifications. In EventPulse, he broadcasts seat availability changes instantly to all connected users! ⚡",
      "Kamran implements real-time features with Socket.io — live updates, instant notifications, and real-time data sync. It's what makes EventPulse feel alive and responsive! Users see changes the moment they happen. 🔴",
    ]
  },
  {
    patterns: ['payment', 'stripe', 'checkout', 'transaction', 'money'],
    responses: [
      "Kamran integrates Stripe (70% proficiency) for secure payment processing. In EventPulse, he handles checkout flows, webhook events, and refund logic. He implements MongoDB transactions during checkout to ensure ACID compliance — no double bookings ever! 💳",
      "Stripe integration is one of his strong suits. He handles payment intents, webhook verification, subscription models, and secure checkout flows. Financial data integrity is a top priority in his implementations! 🔒",
    ]
  },
  {
    patterns: ['github', 'open source', 'contribution', 'repository', 'code'],
    responses: [
      "Check out Kamran's GitHub at github.com/KAMRANkami313! He's got 500+ commits across multiple repositories, actively contributing to the developer community. His code is clean, well-documented, and follows best practices! 🐱",
      "His GitHub (@KAMRANkami313) showcases production-quality code with clean commit histories and well-structured repositories. He believes in writing code that other developers can understand and build upon! 💻",
    ]
  },
  {
    patterns: ['who are you', 'your name', 'about you', 'introduce', 'tell me about', 'who is kamran'],
    responses: [
      "I'm KAMI_AI, an AI assistant built into Kamran's portfolio! I know everything about Muhammad Kamran — a MERN Stack Developer based in Islamabad, Pakistan. He's a CS student at Air University, a full-stack engineer, and he builds production-grade SaaS applications. Ask me anything! 🤖",
      "I'm KAMI_AI, Kamran's portfolio chatbot! Muhammad Kamran is a MERN Stack Developer specializing in scalable SaaS applications. He combines academic CS knowledge with real-world engineering skills. Want to know about his projects, skills, or experience? Just ask! 🚀",
    ]
  },
  {
    patterns: ['location', 'where', 'country', 'city', 'based', 'from'],
    responses: [
      "Kamran is based in Islamabad, Pakistan 🇵🇰. He's open to remote work opportunities worldwide and local positions in Islamabad/Rawalpindi area. Timezone: PKT (UTC+5). 🌍",
      "He's located in Islamabad, Pakistan and is available for remote work globally. He's flexible with timezones for international teams! 🗺️",
    ]
  },
  {
    patterns: ['salary', 'pay', 'rate', 'compensation', 'budget'],
    responses: [
      "For compensation details, it's best to reach out to Kamran directly through the contact section or email him at 232501@students.au.edu.pk. He's open to discussing competitive offers based on the role and responsibilities! 💰",
      "That's something to discuss directly with Kamran! Drop him a message through the contact form or email — he's reasonable and values fair compensation for quality work. 📊",
    ]
  },
  {
    patterns: ['resume', 'cv', 'download', 'document'],
    responses: [
      "You can download Kamran's resume by clicking the 'Resume' button in the hero section or the contact section. It has all his skills, projects, and experience detailed! 📄",
      "Hit the 'Resume' button at the top of the page to download his CV. It covers his full MERN stack expertise, project portfolio, and academic background! 📋",
    ]
  },
];