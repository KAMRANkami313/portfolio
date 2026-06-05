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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [confettiTrigger, setConfettiTrigger] = useState(0);

  const handleContactSubmit = () => {
    setConfettiTrigger(prev => prev + 1);
  };

  useEffect(() => {
    console.log(
      "%c HIRE ME? %c kamrank.dev ",
      "background: #6366f1; color: white; font-weight: bold; padding: 4px 8px; border-radius: 4px 0 0 4px;",
      "background: #111; color: #6366f1; padding: 4px 8px; border-radius: 0 4px 4px 0; border: 1px solid #6366f1;"
    );
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

          <Hero />
          
          <div className="container mx-auto px-6 mb-24">
            <Terminal />
          </div>

          <About />
          <Stats />
          <TechMarquee />
          <Projects />
          <Skills />
          <Experience />
          <Testimonials />
          <Contact onFormSubmit={handleContactSubmit} />

          <Dock />
        </Layout>
      )}
    </>
  );
};

export default App;