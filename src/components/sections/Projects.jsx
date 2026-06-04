import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../constants";
import { FiGithub, FiExternalLink, FiCpu, FiZap, FiTrendingUp } from "react-icons/fi";
import SpotlightCard from "../ui/SpotlightCard";
import { useScramble } from "../../hooks/useScramble";
import Architecture from "../ui/Architecture";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const scrambledTitle = useScramble("PROJECTS_V2.0", 400);

  const categories = ["All", "React", "Node.js", "React Native"];

  const filteredProjects = useMemo(() => {
    return filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tech.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-mono font-bold tracking-tighter text-accent">
              {scrambledTitle}
            </h2>
            <div className="flex items-center gap-3 mt-4">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent/20" />
              </div>
              <p className="text-muted font-mono text-xs uppercase tracking-widest">
                System_Audit: {filteredProjects.length} Units Found
              </p>
            </div>
          </div>

          <div className="flex gap-2 p-1.5 bg-surface/50 backdrop-blur-md border border-white/5 rounded-2xl flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all duration-300 ${
                  filter === cat
                    ? "bg-accent text-white shadow-lg shadow-accent/20"
                    : "text-muted hover:text-white hover:bg-white/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <SpotlightCard className="group flex flex-col h-full overflow-hidden border-white/5 hover:border-accent/30">
                  <div className="aspect-video overflow-hidden relative bg-muted/20">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {project.featured && (
                      <div className="absolute top-5 left-5">
                        <span className="px-3 py-1 bg-accent text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-full shadow-2xl flex items-center gap-2">
                          <FiZap size={10} /> Flagship_Build
                        </span>
                      </div>
                    )}
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-8 grow flex flex-col">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-3xl font-bold text-white tracking-tight group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-accent text-xs font-black mt-2 uppercase tracking-[0.3em] font-mono">
                          {project.subtitle}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/5 rounded-xl text-muted hover:text-white hover:bg-accent transition-all"
                        >
                          <FiGithub size={18} />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/5 rounded-xl text-muted hover:text-white hover:bg-accent transition-all"
                        >
                          <FiExternalLink size={18} />
                        </a>
                      </div>
                    </div>

                    <p className="text-muted leading-relaxed mb-6 text-sm md:text-base">
                      {project.description}
                    </p>

                    {/* Project Metrics */}
                    {project.metrics && (
                      <div className="flex gap-4 mb-6">
                        {project.metrics.map((metric, i) => (
                          <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-accent/5 border border-accent/10 rounded-lg">
                            <FiTrendingUp size={12} className="text-accent" />
                            <span className="text-[10px] font-mono font-bold text-accent">{metric.label}</span>
                            <span className="text-[10px] font-mono font-black text-white">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-[10px] font-mono font-bold bg-accent/5 text-accent rounded-md border border-accent/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-8 border-t border-white/5 bg-black/40 -mx-8 px-8">
                      <div className="flex items-center gap-2 mb-6">
                        <FiCpu className="text-accent animate-spin-slow" />
                        <span className="text-[10px] text-white/70 uppercase font-black tracking-[0.2em]">Engineering_Case_Study</span>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-6 mb-8">
                        <div className="space-y-2">
                          <p className="text-[10px] text-red-400 uppercase font-bold tracking-widest flex items-center gap-2">
                             <span className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                             Core_Challenge
                          </p>
                          <p className="text-xs text-muted leading-relaxed border-l-2 border-red-500/20 pl-4">
                            {project.challenge}
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <p className="text-[10px] text-green-400 uppercase font-bold tracking-widest flex items-center gap-2">
                             <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                             Technical_Solution
                          </p>
                          <p className="text-xs text-muted leading-relaxed border-l-2 border-green-500/20 pl-4">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {project.featured && <Architecture />}
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;