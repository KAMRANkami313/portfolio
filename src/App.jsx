import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './layout/Layout';
import Loader from './components/ui/Loader';
import Cursor from './components/ui/Cursor';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Terminal from './components/ui/Terminal';
import TechMarquee from './components/ui/TechMarquee';
import Stats from './components/ui/Stats';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
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
import SectionDivider from './components/ui/SectionDivider';
import VisitorCounter from './components/ui/VisitorCounter';
import Achievements from './components/ui/Achievements';
import { useAchievement } from './context/AchievementContext';
import { useToast } from './context/ToastContext';

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

          <div className="container mx-auto px-6 mb-24">
            <Terminal />
          </div>

          <SectionDivider variant="dots" />

          <About />
          <Stats />

          <SectionDivider variant="line" />

          <TechMarquee />
          <Projects />

          <SectionDivider variant="wave" />

          <Skills />

          <SectionDivider variant="dots" />

          <Experience />

          <SectionDivider variant="line" />

          <Testimonials />
          <Contact onFormSubmit={handleContactSubmit} />

          <Dock onAchievementsClick={() => setShowAchievements(true)} />
        </Layout>
      )}

      <Achievements isOpen={showAchievements} onClose={() => setShowAchievements(false)} />
    </>
  );
};

export default App;