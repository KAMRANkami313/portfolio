import React, { useState, useEffect, lazy, Suspense } from "react";
import { HERO_CONTENT } from "../../constants";
import Reveal from "../ui/Reveal";
import ProfileImage from "../ui/ProfileImage";
import { FiDownload, FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";

const GithubStats = lazy(() => import("../ui/GithubStats"));

const TypingAnimation = ({ words, typingSpeed = 100, deletingSpeed = 50, pauseDuration = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(word.substring(0, currentText.length + 1));
        if (currentText === word) {
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        setCurrentText(word.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="relative">
      {currentText}
      <span className="absolute -right-0.5 top-0 bottom-0 w-0.75 bg-accent animate-typing-cursor" />
    </span>
  );
};

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
                  Status: Available_For_Hire
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
              <h2 className="text-xl md:text-3xl font-bold text-accent mb-8 uppercase tracking-[0.2em] font-mono min-h-10">
                <TypingAnimation words={HERO_CONTENT.roles} />
              </h2>
            </Reveal>

            <Reveal>
              <p className="text-muted text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-medium border-l-2 border-accent/20 pl-6">
                {HERO_CONTENT.description}
              </p>
            </Reveal>

            <div className="opacity-0 animate-hero-buttons will-animate flex flex-col sm:flex-row items-center gap-6">
              <a
                href="#projects"
                className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black rounded-2xl font-black uppercase tracking-widest overflow-hidden transition-transform hover:scale-105"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View Projects <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>

              <a
                href={HERO_CONTENT.resumeLink}
                className="flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-surface/50 backdrop-blur-md border border-white/10 rounded-2xl font-black uppercase tracking-widest hover:bg-white/5 hover:border-accent/30 transition-all"
              >
                <FiDownload /> Resume
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center order-1 lg:order-2">
            <ProfileImage />
            <div className="hidden lg:block mt-12 w-full max-w-md">
              <Suspense fallback={<div className="h-40" />}>
                <GithubStats />
              </Suspense>
            </div>
          </div>
        </div>

        <div className="opacity-0 animate-hero-social will-animate flex lg:hidden items-center justify-center gap-10 mt-16">
          <a href={HERO_CONTENT.githubLink} target="_blank" rel="noopener noreferrer" className="text-2xl text-muted hover:text-accent transition-all" aria-label="GitHub profile"><FiGithub /></a>
          <a href={HERO_CONTENT.linkedinLink} target="_blank" rel="noopener noreferrer" className="text-2xl text-muted hover:text-accent transition-all" aria-label="LinkedIn profile"><FiLinkedin /></a>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 -z-20 w-150 h-150 bg-accent/5 blur-[160px] rounded-full pointer-events-none" />
    </section>
  );
};

export default Hero;