import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './layout/Layout';
import Loader from './components/ui/Loader';
import Cursor from './components/ui/Cursor';
import Hero from './components/sections/Hero';
import SectionDivider from './components/ui/SectionDivider';
import StatusBar from './components/ui/StatusBar';
import CopyEmail from './components/ui/CopyEmail';
import Dock from './components/ui/Dock';
import ShareButton from './components/ui/ShareButton';
import Aura from './components/ui/Aura';
import CommandPalette from './components/ui/CommandPalette';
import Performance from './components/ui/Performance';
import MusicWidget from './components/ui/MusicWidget';
import AIChatbot from './components/ui/AIChatbot';
import EasterEgg from './components/ui/EasterEgg';
import Confetti from './components/ui/Confetti';
import Ripple from './components/ui/Ripple';
import ClickSparkle from './components/ui/ClickSparkle';
import VisitorCounter from './components/ui/VisitorCounter';
import Achievements from './components/ui/Achievements';
import { useAchievement } from './context/AchievementContext';
import { useToast } from './context/ToastContext';

// Lazy-loaded sections (below the fold)
const About = lazy(() => import('./components/sections/About'));
const Terminal = lazy(() => import('./components/ui/Terminal'));
const TechMarquee = lazy(() => import('./components/ui/TechMarquee'));
const Stats = lazy(() => import('./components/ui/Stats'));
const Projects = lazy(() => import('./components/sections/Projects'));
const Skills = lazy(() => import('./components/sections/Skills'));
const Experience = lazy(() => import('./components/sections/Experience'));
const Testimonials = lazy(() => import('./components/sections/Testimonials'));
const Contact = lazy(() => import('./components/sections/Contact'));

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [confettiTrigger, setConfettiTrigger] = useState(0);
  const [showAchievements, setShowAchievements] = useState(false);
  const { unlock } = useAchievement();
  const { addToast } = useToast();

  const handleContactSubmit = () => {
    setConfettiTrigger(prev => prev + 1);
    unlock('sent_message');
    addToast('Message sent successfully!', 'success');
  };

  // Achievement: first visit
  useEffect(() => {
    unlock('first_visit');
  }, []);

  // Achievement: scroll tracking
  useEffect(() => {
    let halfReached = false;
    let fullReached = false;

    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (scrollPercent >= 0.5 && !halfReached) {
        halfReached = true;
        unlock('scrolled_half');
      }
      if (scrollPercent >= 0.95 && !fullReached) {
        fullReached = true;
        unlock('scrolled_full');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Achievement: section tracking via IntersectionObserver
  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'experience', 'testimonials', 'contact'];
    const visited = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visited.add(entry.target.id);
            if (entry.target.id === 'projects') unlock('viewed_projects');
            if (visited.size >= sectionIds.length) unlock('visited_all_sections');
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <Aura />
          <CommandPalette />
          <Cursor />
          <CopyEmail />
          <ShareButton />
          <Performance />
          <StatusBar />
          <MusicWidget />
          <AIChatbot />
          <EasterEgg />
          <Confetti trigger={confettiTrigger} />
          <Ripple />
          <ClickSparkle />
          <VisitorCounter />

          <Hero />

          <SectionDivider variant="wave" />

          <Suspense fallback={<div className="h-40" />}>
            <div className="container mx-auto px-6 mb-24">
              <Terminal />
            </div>
          </Suspense>

          <SectionDivider variant="dots" />

          <Suspense fallback={<div className="h-40" />}>
            <About />
            <Stats />
          </Suspense>

          <SectionDivider variant="line" />

          <Suspense fallback={<div className="h-40" />}>
            <TechMarquee />
            <Projects />
          </Suspense>

          <SectionDivider variant="wave" />

          <Suspense fallback={<div className="h-40" />}>
            <Skills />
          </Suspense>

          <SectionDivider variant="dots" />

          <Suspense fallback={<div className="h-40" />}>
            <Experience />
          </Suspense>

          <SectionDivider variant="line" />

          <Suspense fallback={<div className="h-40" />}>
            <Testimonials />
            <Contact onFormSubmit={handleContactSubmit} />
          </Suspense>

          <Dock onAchievementsClick={() => setShowAchievements(true)} />
        </Layout>
      )}

      <Achievements isOpen={showAchievements} onClose={() => setShowAchievements(false)} />
    </>
  );
};

export default App;