import React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Database, Cloud } from "lucide-react";

const LAYERS = [
  { name: "Presentation Layer", tech: "React · Tailwind · Framer Motion", Icon: Monitor },
  { name: "Application Layer", tech: "Node.js · Express · JWT · Socket.io", Icon: Server },
  { name: "Data Layer", tech: "MongoDB · Redis · PostgreSQL", Icon: Database },
  { name: "Infrastructure Layer", tech: "Vercel · AWS · Docker · CI/CD", Icon: Cloud },
];

const Architecture = () => {
  return (
    <div className="mt-5 pt-4 border-t border-white/10">
      <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-3">
        System Architecture
      </p>
      <div className="space-y-1.5">
        {LAYERS.map((layer, i) => (
          <motion.div
            key={layer.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.08 }}
            className="flex items-center gap-3 p-2 rounded-lg bg-surface-light"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
              <layer.Icon className="w-4 h-4 text-accent" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-white">{layer.name}</p>
              <p className="text-[10px] text-muted font-mono truncate">{layer.tech}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Architecture;