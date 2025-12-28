import React from 'react';
import { motion } from 'framer-motion';
import { HERO_CONTENT } from '../../constants';
import { FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
              Available for Internships
            </span>
            <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              {HERO_CONTENT.name}
              <span className="block text-muted">{HERO_CONTENT.role}</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              {HERO_CONTENT.description}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#projects" className="px-8 py-4 bg-accent hover:bg-blue-600 text-white rounded-xl font-semibold transition-all shadow-lg shadow-accent/25">
              View My Work
            </a>
            <a href={HERO_CONTENT.resumeLink} className="flex items-center gap-2 px-8 py-4 bg-surface border border-white/10 hover:bg-white/5 rounded-xl font-semibold transition-all">
              <FiDownload /> Resume
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex gap-6 text-2xl text-muted"
          >
            <a href={HERO_CONTENT.githubLink} className="hover:text-white transition-colors"><FiGithub /></a>
            <a href={HERO_CONTENT.linkedinLink} className="hover:text-white transition-colors"><FiLinkedin /></a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute top-0 right-0 -z-10 w-125 h-125 bg-accent/20 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
    </section>
  );
};

export default Hero;