import React from 'react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';

const App = () => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-accent/30">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
    </div>
  );
};

export default App;