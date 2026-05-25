import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './layout/Layout';
import Loader from './components/ui/Loader';
import Cursor from './components/ui/Cursor';
import Hero from './components/sections/Hero';
import TechMarquee from './components/ui/TechMarquee';
import Stats from './components/ui/Stats';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import StatusBar from './components/ui/StatusBar';
import CopyEmail from './components/ui/CopyEmail';
import Dock from './components/ui/Dock';
import ShareButton from './components/ui/ShareButton';
import Aura from './components/ui/Aura';
import CommandPalette from './components/ui/CommandPalette';
import ColorPicker from './components/ui/ColorPicker';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          <StatusBar />
          
          <div className="fixed top-24 left-6 z-40 hidden lg:block">
            <ColorPicker />
          </div>

          <Hero />
          <Stats />
          <TechMarquee />
          <Projects />
          <Skills />
          <Experience />
          <Contact />

          <Dock />
        </Layout>
      )}
    </>
  );
};

export default App;