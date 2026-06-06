import React, { useState, useEffect, lazy, Suspense } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './layout/Layout';
import Hero from './components/sections/Hero';
import SectionDivider from './components/ui/SectionDivider';
import StatusBar from './components/ui/StatusBar';
import Dock from './components/ui/Dock';
import { useAchievement } from './context/AchievementContext';
import { useToast } from './context/ToastContext';

// Lazy-loaded UI components (not needed on initial render)
const Loader = lazy(() => import('./components/ui/Loader'));
const Aura = lazy(() => import('./components/ui/Aura'));
const Cursor = lazy(() => import('./components/ui/Cursor'));
const CommandPalette = lazy(() => import('./components/ui/CommandPalette'));
const Performance = lazy(() => import('./components/ui/Performance'));
const MusicWidget = lazy(() => import('./components/ui/MusicWidget'));
const AIChatbot = lazy(() => import('./components/ui/AIChatbot'));
const EasterEgg = lazy(() => import('./components/ui/EasterEgg'));
const Confetti = lazy(() => import('./components/ui/Confetti'));
const CopyEmail = lazy(() => import('./components/ui/CopyEmail'));
const ShareButton = lazy(() => import('./components/ui/ShareButton'));
const VisitorCounter = lazy(() => import('./components/ui/VisitorCounter'));
const Achievements = lazy(() => import('./components/ui/Achievements'));

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
        {isLoading && (
          <Suspense fallback={null}>
            <Loader finishLoading={() => setIsLoading(false)} />
          </Suspense>
        )}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <Suspense fallback={null}>
            <Aura />
            <CommandPalette />
            <Cursor />
            <CopyEmail />
            <ShareButton />
            <Performance />
            <MusicWidget />
            <AIChatbot />
            <EasterEgg />
            <Confetti trigger={confettiTrigger} />
            <VisitorCounter />
          </Suspense>

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

      <Suspense fallback={null}>
        <Achievements isOpen={showAchievements} onClose={() => setShowAchievements(false)} />
      </Suspense>
    </>
  );
};

export default App;