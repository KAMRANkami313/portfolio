import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../../constants";
import Reveal from "../ui/Reveal";
import ProfileImage from "../ui/ProfileImage";
import GithubStats from "../ui/GithubStats";
import {
  FiDownload,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10" />

      <div className="container mx-auto px-6 text-center">
        <ProfileImage />

        <Reveal>
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-accent mb-6">
            Building the future of MERN SaaS
          </span>
        </Reveal>

        <Reveal>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-linear-to-b from-white to-white/40 bg-clip-text text-transparent">
            {HERO_CONTENT.name}
          </h1>
        </Reveal>

        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold text-accent mb-6">
            {HERO_CONTENT.role}
          </h2>
        </Reveal>

        <Reveal>
          <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            {HERO_CONTENT.description}
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-bold overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10">
              Explore Projects
            </span>

            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href={HERO_CONTENT.resumeLink}
            className="flex items-center gap-2 px-8 py-4 bg-surface border border-white/10 rounded-full font-bold hover:bg-white/5 transition-all"
          >
            <FiDownload />
            Download Resume
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-8 mt-12"
        >
          <GithubStats />
          
          <div className="flex items-center justify-center gap-6 text-2xl text-muted">
            <a
              href={HERO_CONTENT.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FiGithub />
            </a>

            <a
              href={HERO_CONTENT.linkedinLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 w-200 h-200 bg-accent/10 blur-[150px] rounded-full" />
    </section>
  );
};

export default Hero;