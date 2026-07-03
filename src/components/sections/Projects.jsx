import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, AlertCircle, Cpu, Zap, TrendingUp, FolderOpen } from "lucide-react";
import { GithubIcon as Github } from "../ui/BrandIcons";
import { PROJECTS } from "../../constants";
import SpotlightCard from "../ui/SpotlightCard";
import Architecture from "../ui/Architecture";

const CATEGORIES = ["All", "React", "Node.js", "MongoDB", "React Native"];

const METRIC_ICONS = [Cpu, Zap, TrendingUp];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (filter === "All") return PROJECTS;
    return PROJECTS.filter((p) => p.tech.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono text-accent tracking-[0.3em] uppercase mb-2">
              Projects
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Featured Work
            </h2>
          </div>
          <p className="text-sm text-muted md:max-w-xs">
            A selection of production-grade applications I've engineered end-to-end.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              aria-pressed={filter === cat}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                filter === cat
                  ? "bg-accent text-white"
                  : "text-muted hover:text-white bg-surface-light border border-white/10 hover:border-accent/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <FolderOpen className="w-12 h-12 text-muted mb-4" />
            <p className="text-lg font-medium text-white mb-1">No projects found</p>
            <p className="text-sm text-muted">
              Try selecting a different filter.
            </p>
          </div>
        ) : (
          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                >
                  <SpotlightCard className="card card-hover h-full p-0 overflow-hidden">
                    <div className="relative aspect-video overflow-hidden bg-surface-light">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                      {project.featured && (
                        <div className="absolute top-3 left-3 chip" style={{ background: "rgba(var(--color-accent-rgb), 0.9)", borderColor: "transparent", color: "#fff" }}>
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                          <p className="text-sm text-muted">{project.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-muted hover:text-white transition-colors"
                            aria-label={`View ${project.title} source on GitHub`}
                          >
                            <Github size={18} />
                          </a>
                          {project.live !== "#" && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 text-muted hover:text-white transition-colors"
                              aria-label={`Visit ${project.title} live site`}
                            >
                              <ExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>

                      <p className="text-sm text-muted leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {project.metrics && project.metrics.length > 0 && (
                        <div className="grid grid-cols-3 gap-3 mb-4 p-3 rounded-lg bg-surface-light">
                          {project.metrics.map((metric, i) => {
                            const Icon = METRIC_ICONS[i] || TrendingUp;
                            return (
                              <div key={metric.label} className="text-center">
                                <Icon className="w-4 h-4 text-accent mx-auto mb-1" />
                                <p className="text-lg font-bold text-white">{metric.value}</p>
                                <p className="text-[10px] text-muted uppercase tracking-wider">{metric.label}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tech.map((tech) => (
                          <span key={tech} className="chip text-[11px]">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="space-y-3 pt-4 border-t border-white/10">
                        <div>
                          <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-1">
                            Challenge
                          </p>
                          <p className="text-sm text-muted leading-relaxed">{project.challenge}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-1">
                            Solution
                          </p>
                          <p className="text-sm text-muted leading-relaxed">{project.solution}</p>
                        </div>
                      </div>

                      {project.featured && <Architecture />}
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;