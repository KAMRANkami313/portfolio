import React, { useEffect, useState, lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import Hero from "./components/sections/Hero";
import Footer from "./components/sections/Footer";
import { useAchievement } from "./context/AchievementContext";

const CommandPalette = lazy(() => import("./components/ui/CommandPalette"));
const Achievements = lazy(() => import("./components/ui/Achievements"));

const About = lazy(() => import("./components/sections/About"));
const Stats = lazy(() => import("./components/ui/Stats"));
const TechMarquee = lazy(() => import("./components/ui/TechMarquee"));
const Projects = lazy(() => import("./components/sections/Projects"));
const Skills = lazy(() => import("./components/sections/Skills"));
const Experience = lazy(() => import("./components/sections/Experience"));
const Testimonials = lazy(() => import("./components/sections/Testimonials"));
const Contact = lazy(() => import("./components/sections/Contact"));

const App = () => {
  const [showAchievements, setShowAchievements] = useState(false);
  const { unlock } = useAchievement();

  useEffect(() => {
    unlock("first_visit");
  }, [unlock]);

  useEffect(() => {
    let halfReached = false;
    let fullReached = false;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent >= 0.5 && !halfReached) {
        halfReached = true;
        unlock("scrolled_half");
      }
      if (scrollPercent >= 0.95 && !fullReached) {
        fullReached = true;
        unlock("scrolled_full");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [unlock]);

  useEffect(() => {
    const sectionIds = ["about", "projects", "skills", "experience", "testimonials", "contact"];
    const visited = new Set();
    const observed = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visited.add(entry.target.id);
            if (entry.target.id === "projects") unlock("viewed_projects");
            if (visited.size >= sectionIds.length) unlock("visited_all_sections");
          }
        });
      },
      { threshold: 0.2 }
    );

    const tryObserve = () => {
      sectionIds.forEach((id) => {
        if (observed.has(id)) return;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observed.add(id);
        }
      });
    };

    tryObserve();
    const interval = setInterval(tryObserve, 500);
    const timeout = setTimeout(() => clearInterval(interval), 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, [unlock]);

  return (
    <Layout onAchievementsClick={() => setShowAchievements(true)}>
      <Hero />

      <Suspense fallback={<div className="h-32" />}>
        <About />
        <Stats />
      </Suspense>

      <Suspense fallback={<div className="h-32" />}>
        <TechMarquee />
        <Projects />
      </Suspense>

      <Suspense fallback={<div className="h-32" />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<div className="h-32" />}>
        <Experience />
      </Suspense>

      <Suspense fallback={<div className="h-32" />}>
        <Testimonials />
      </Suspense>

      <Suspense fallback={<div className="h-32" />}>
        <Contact />
      </Suspense>

      <Footer />

      <Suspense fallback={null}>
        <CommandPalette />
      </Suspense>

      <Suspense fallback={null}>
        <Achievements isOpen={showAchievements} onClose={() => setShowAchievements(false)} />
      </Suspense>
    </Layout>
  );
};

export default App;