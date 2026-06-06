import React, { useState, useEffect, lazy, Suspense } from 'react';
import Layout from './layout/Layout';
import Hero from './components/sections/Hero';
import SectionDivider from './components/ui/SectionDivider';
import StatusBar from './components/ui/StatusBar';
import { useAchievement } from './context/AchievementContext';
import { useToast } from './context/ToastContext';

// Lazy-loaded UI components
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
const Dock = lazy(() => import('./components/ui/Dock'));

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

    window.addEventListener('scroll', handleScroll, { passive: true });
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
      {isLoading && (
        <Suspense fallback={
          <div className="fixed inset-0 z-200 flex items-center justify-center bg-dark">
            <div className="text-accent font-mono text-sm">Loading...</div>
          </div>
        }>
          <Loader finishLoading={() => setIsLoading(false)} />
        </Suspense>
      )}

      {!isLoading && (
        <Layout>
          <Suspense fallback={null}>
            <Aura />
          </Suspense>

          <Suspense fallback={null}>
            <CommandPalette />
          </Suspense>

          <Suspense fallback={null}>
            <Cursor />
          </Suspense>

          <Suspense fallback={null}>
            <CopyEmail />
          </Suspense>

          <Suspense fallback={null}>
            <ShareButton />
          </Suspense>

          <Suspense fallback={null}>
            <Performance />
          </Suspense>

          <StatusBar />

          <Suspense fallback={null}>
            <MusicWidget />
          </Suspense>

          <Suspense fallback={null}>
            <AIChatbot />
          </Suspense>

          <Suspense fallback={null}>
            <EasterEgg />
          </Suspense>

          <Suspense fallback={null}>
            <Confetti trigger={confettiTrigger} />
          </Suspense>

          <Suspense fallback={null}>
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

          <Suspense fallback={null}>
            <Dock onAchievementsClick={() => setShowAchievements(true)} />
          </Suspense>
        </Layout>
      )}

      <Suspense fallback={null}>
        <Achievements isOpen={showAchievements} onClose={() => setShowAchievements(false)} />
      </Suspense>
    </>
  );
};

export default App;