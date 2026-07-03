import React from "react";
import { motion } from "framer-motion";
import { Target, Zap, Layers, Cpu, Rocket } from "lucide-react";
import { ABOUT_CARDS } from "../../constants";
import SpotlightCard from "../ui/SpotlightCard";

const ICONS = [Target, Zap, Layers, Cpu, Rocket];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono text-accent tracking-[0.3em] uppercase mb-2">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Engineering Principles
            </h2>
          </div>
          <p className="text-sm text-muted md:max-w-xs">
            The values I bring to every codebase, every commit, every conversation.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {ABOUT_CARDS.map((card, i) => {
            const Icon = ICONS[i] || Target;
            const isWide = i === 0;

            return (
              <motion.div
                key={card.tag}
                variants={itemVariants}
                className={isWide ? "md:col-span-2 lg:col-span-1" : ""}
              >
                <SpotlightCard className="card card-hover h-full p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">
                        {card.tag}
                      </p>
                      <h3 className="text-base font-bold text-white">{card.title}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{card.content}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;