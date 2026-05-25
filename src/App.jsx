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

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <Layout>
          <Cursor />
          <CopyEmail />
          <Hero />
          <Stats />
          <StatusBar />
          <TechMarquee />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </Layout>
      )}
    </>
  );
};

export default App;