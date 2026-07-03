import React, { useState, useEffect, lazy, Suspense } from "react";
import { ArrowRight, FileText } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "../ui/BrandIcons";
import { HERO_CONTENT } from "../../constants";
import ProfileImage from "../ui/ProfileImage";
import Reveal from "../ui/Reveal";

const GithubStats = lazy(() => import("../ui/GithubStats"));

const TypingAnimation = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    let timeoutId;
    if (!isDeleting && currentText === word) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      const nextChar = isDeleting
        ? word.substring(0, currentText.length - 1)
        : word.substring(0, currentText.length + 1);
      timeoutId = setTimeout(
        () => setCurrentText(nextChar),
        isDeleting ? 50 : 100
      );
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-gradient">
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

const Hero = () => {
  const [nameFirst, nameLast] = HERO_CONTENT.name.split(" ");

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-24 pb-12">
      <div className="bg-grid absolute inset-0 -z-10 mask-radial" aria-hidden="true" />
      <div
        className="absolute top-1/4 left-1/4 w-100 h-100 rounded-full -z-20 blur-[160px] opacity-20"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="order-2 lg:order-1 flex-1 max-w-2xl">
            <Reveal>
              <div className="inline-flex items-center gap-2 chip mb-6">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full opacity-75 animate-pulse-soft" style={{ background: "var(--color-success)" }} />
                  <span className="relative inline-flex w-2 h-2 rounded-full" style={{ background: "var(--color-success)" }} />
                </span>
                <span className="text-xs font-mono">Available for opportunities</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-2">
                <span className="block text-white">{nameFirst}</span>
                <span className="block text-gradient">{nameLast}</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 h-8">
                <TypingAnimation words={HERO_CONTENT.roles} />
              </h2>
            </Reveal>

            <Reveal delay={300}>
              <p className="text-base md:text-lg text-muted mb-8 max-w-xl leading-relaxed">
                {HERO_CONTENT.description}
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="flex flex-wrap gap-3 mb-8">
                <a href="#projects" className="btn-primary">
                  View Projects
                  <ArrowRight size={16} />
                </a>
                <a href={HERO_CONTENT.resumeLink} className="btn-ghost" download>
                  <FileText size={16} />
                  Resume
                </a>
              </div>
            </Reveal>

            <Reveal delay={500}>
              <div className="flex items-center gap-3">
                <a
                  href={HERO_CONTENT.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-muted hover:text-white transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href={HERO_CONTENT.linkedinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-muted hover:text-white transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="order-1 lg:order-2 shrink-0">
            <Reveal delay={200}>
              <ProfileImage />
            </Reveal>
            <Suspense fallback={null}>
              <div className="hidden lg:block mt-8">
                <GithubStats />
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;