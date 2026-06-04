import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../../constants";
import Reveal from "../ui/Reveal";
import ProfileImage from "../ui/ProfileImage";
import GithubStats from "../ui/GithubStats";
import { FiDownload, FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10 opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          <div className="w-full lg:w-1/2 text-left order-2 lg:order-1">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                   <div className="w-1 h-1 rounded-full bg-accent animate-ping" />
                   <div className="w-1 h-1 rounded-full bg-accent" />
                </div>
                <span className="px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                  Status: Available_For_Hire_2025
                </span>
              </div>
            </Reveal>

            <Reveal>
              <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 bg-linear-to-b from-white via-white to-white/30 bg-clip-text text-transparent leading-[0.9]">
                {HERO_CONTENT.name.split(" ")[0]}<br />
                {HERO_CONTENT.name.split(" ")[1]}
              </h1>
            </Reveal>

            <Reveal>
              <h2 className="text-xl md:text-3xl font-bold text-accent mb-8 uppercase tracking-[0.3em] font-mono">
                {HERO_CONTENT.role}
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-muted text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium italic border-l-2 border-white/5 pl-6">
                "{HERO_CONTENT.description}"
              </p>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <a
                href="#projects"
                className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>

              <a
                href={HERO_CONTENT.resumeLink}
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl font-black uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                <FiDownload /> Resume
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2">
            <ProfileImage />
            <div className="hidden lg:block mt-12 w-full max-w-md">
               <GithubStats />
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex lg:hidden items-center justify-center gap-10 mt-16"
        >
          <a href={HERO_CONTENT.githubLink} target="_blank" rel="noopener noreferrer" className="text-2xl text-muted hover:text-accent transition-all"><FiGithub /></a>
          <a href={HERO_CONTENT.linkedinLink} target="_blank" rel="noopener noreferrer" className="text-2xl text-muted hover:text-accent transition-all"><FiLinkedin /></a>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-20 w-150 h-150 bg-accent/5 blur-[160px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;