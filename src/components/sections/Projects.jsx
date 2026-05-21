import React from "react";
import { motion } from "framer-motion";
import { PROJECTS } from "../../constants";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SpotlightCard from "../ui/SpotlightCard";

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted max-w-2xl">
            A selection of my recent work, focusing on full-stack development and scalable architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="group transition-all duration-500 rounded-3xl bg-surface border border-white/5 overflow-hidden hover:border-accent/30">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-accent text-sm font-medium mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    <div className="flex gap-4 text-xl text-muted">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <FiGithub />
                      </a>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-white/5 text-muted rounded-full border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;