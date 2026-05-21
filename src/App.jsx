import React from 'react';
import Layout from './layout/Layout';
import Hero from './components/sections/Hero';
import TechMarquee from './components/ui/TechMarquee'; // New
import Stats from './components/ui/Stats';           // New
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';

const App = () => {
  return (
    <Layout>
      <Hero />
      <Stats />      {/* Adds credibility */}
      <TechMarquee /> {/* Adds motion */}
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
};

export default App;