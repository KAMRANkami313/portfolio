import eventpulse from "../assets/eventpulse.webp";
import shopverse from "../assets/shopverse.webp";
import socialMedia from "../assets/social-media.webp";
import projectManagement from "../assets/project-management.webp";
import nativeTasker from "../assets/native-tasker.webp";
import learnhub from "../assets/learnhub.webp";
import hybridOsScheduler from "../assets/hybrid-os-scheduler.webp";

export const PROJECTS = [
  {
    title: "EventPulse",
    subtitle: "Real-Time Event Management Platform",
    description:
      "A full-stack SaaS platform for event organizers to create, manage, and broadcast events with real-time attendee engagement, live updates, and analytics.",
    image: eventpulse,
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe", "TailwindCSS"],
    challenge:
      "Coordinating real-time updates across thousands of concurrent attendees while keeping the admin dashboard responsive under heavy load.",
    solution:
      "Implemented Socket.io rooms for scoped event broadcasts, Redis-backed queues for offline writes, and optimistic UI updates on the client to keep interactions instant.",
    github: "https://github.com/KAMRANkami313/EventPulse-MERN-Project",
    live: "https://eventpulse-tawny.vercel.app/",
    featured: true,
    metrics: [
      { label: "Concurrent Users", value: "5K+" },
      { label: "API Latency", value: "<120ms" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    title: "ShopVerse",
    subtitle: "Full-Stack E-Commerce Store",
    description:
      "A production-grade e-commerce platform with product catalog, cart, checkout, Stripe payments, order tracking, and an admin dashboard for inventory management.",
    image: shopverse,
    tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    challenge:
      "Building a secure checkout flow that handles payment failures gracefully while keeping cart state consistent across sessions and devices.",
    solution:
      "Used Stripe webhooks for idempotent order confirmation, JWT-based session recovery for cart persistence, and optimistic stock updates with server-side reconciliation.",
    github: "https://github.com/KAMRANkami313/CodeAlpha_EcommerceStore",
    live: "https://shopverse-ecommerce-store.vercel.app",
    featured: true,
    metrics: [
      { label: "Products", value: "100+" },
      { label: "Payment", value: "Stripe" },
      { label: "Auth", value: "JWT" },
    ],
  },
  {
    title: "Social Media Platform",
    subtitle: "Real-Time Social Network",
    description:
      "A social media platform with user profiles, posts, comments, likes, real-time messaging, notifications, and a personalized feed with content aggregation.",
    image: socialMedia,
    tech: ["React", "Node.js", "MongoDB", "Socket.io", "Express", "TailwindCSS"],
    challenge:
      "Delivering a personalized feed efficiently while supporting real-time notifications and messaging without overwhelming the database.",
    solution:
      "Implemented a denormalized feed model with Redis caching, Socket.io event channels for notifications, and cursor-based pagination for infinite scroll.",
    github: "https://github.com/KAMRANkami313/CodeAlpha_SocialMediaPlatform",
    live: "https://social-media-platform-gray.vercel.app",
    featured: false,
    metrics: [
      { label: "Real-Time", value: "Socket.io" },
      { label: "Feed", value: "Personalized" },
      { label: "Auth", value: "JWT" },
    ],
  },
  {
    title: "Project Management Tool",
    subtitle: "Team Collaboration & Task Tracking",
    description:
      "A project management application with Kanban boards, task assignment, team workspaces, real-time updates, and progress analytics for development teams.",
    image: projectManagement,
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    challenge:
      "Keeping task state consistent across multiple team members editing simultaneously without conflicts or lost updates.",
    solution:
      "Used operational transformation for conflict resolution, Socket.io for live cursor and task presence, and MongoDB transactions for atomic board updates.",
    github: "https://github.com/KAMRANkami313/CodeAlpha_ProjectManagementTool",
    live: "https://project-management-tool-beryl.vercel.app",
    featured: false,
    metrics: [
      { label: "Boards", value: "Kanban" },
      { label: "Real-Time", value: "Live" },
      { label: "Teams", value: "Multi" },
    ],
  },
  {
    title: "Native Tasker",
    subtitle: "Cross-Platform Productivity App",
    description:
      "A React Native task manager with offline-first sync, smart reminders, and team collaboration features. Built to work seamlessly across iOS, Android, and web.",
    image: nativeTasker,
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    challenge:
      "Keeping data consistent across devices with unreliable connectivity while providing instant local feedback.",
    solution:
      "Used a local-first architecture with conflict-resolution via vector clocks and background sync when connectivity resumes.",
    github: "https://github.com/KAMRANkami313/my-first-react-native-todo-app",
    live: "#",
    featured: false,
    metrics: [
      { label: "Platforms", value: "3" },
      { label: "Sync Speed", value: "<2s" },
      { label: "Offline-First", value: "Yes" },
    ],
  },
  {
    title: "LearnHub",
    subtitle: "Next.js Learning Platform",
    description:
      "An educational platform built with Next.js featuring course management, progress tracking, video lessons, and interactive quizzes with server-side rendering for SEO.",
    image: learnhub,
    tech: ["Next.js", "React", "TypeScript", "TailwindCSS", "Prisma"],
    challenge:
      "Delivering fast, SEO-friendly course pages while supporting authenticated progress tracking and interactive content.",
    solution:
      "Leveraged Next.js App Router with server components for static content, client islands for interactivity, and Prisma for type-safe database access.",
    github: "https://github.com/KAMRANkami313/learnhub",
    live: "#",
    featured: false,
    metrics: [
      { label: "Framework", value: "Next.js" },
      { label: "SSR", value: "Yes" },
      { label: "Type Safe", value: "TS" },
    ],
  },
  {
    title: "Hybrid OS Scheduler",
    subtitle: "Operating System Scheduling Simulator",
    description:
      "A simulation tool implementing multiple CPU scheduling algorithms (FCFS, SJF, Round Robin, Priority) with visual Gantt charts and performance metrics comparison.",
    image: hybridOsScheduler,
    tech: ["Python", "C++", "C#", "Algorithms"],
    challenge:
      "Accurately simulating preemptive and non-preemptive scheduling with correct context switching and fair metric comparison across algorithms.",
    solution:
      "Built a modular algorithm engine with a shared process model, visual Gantt chart renderer, and statistical analyzer for average wait time and throughput.",
    github: "https://github.com/KAMRANkami313/Hybrid-OS-Scheduler-Pro",
    live: "#",
    featured: false,
    metrics: [
      { label: "Algorithms", value: "4+" },
      { label: "Languages", value: "3" },
      { label: "Visual", value: "Gantt" },
    ],
  },
];

export const PROJECT_CATEGORIES = ["All", "React", "Node.js", "Next.js", "React Native", "Python"];