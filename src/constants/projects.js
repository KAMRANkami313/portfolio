import eventpulse from "../assets/eventpulse.webp";
import todo from "../assets/todo.webp";

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
    github: "https://github.com/KAMRANkami313",
    live: "https://eventpulse-tawny.vercel.app/",
    featured: true,
    metrics: [
      { label: "Concurrent Users", value: "5K+" },
      { label: "API Latency", value: "<120ms" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
  {
    title: "Native Tasker",
    subtitle: "Cross-Platform Productivity App",
    description:
      "A React Native task manager with offline-first sync, smart reminders, and team collaboration features. Built to work seamlessly across iOS, Android, and web.",
    image: todo,
    tech: ["React Native", "Node.js", "MongoDB", "Express"],
    challenge:
      "Keeping data consistent across devices with unreliable connectivity while providing instant local feedback.",
    solution:
      "Used a local-first architecture with conflict-resolution via vector clocks and background sync when connectivity resumes.",
    github: "https://github.com/KAMRANkami313",
    live: "#",
    featured: false,
    metrics: [
      { label: "Platforms", value: "3" },
      { label: "Sync Speed", value: "<2s" },
      { label: "Offline-First", value: "Yes" },
    ],
  },
];