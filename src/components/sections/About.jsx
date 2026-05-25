import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold tracking-tighter mb-12 italic">SYSTEM_OVERVIEW</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SpotlightCard className="md:col-span-2 p-8 h-64 flex flex-col justify-end">
            <h3 className="text-2xl font-bold mb-2">The Mission</h3>
            <p className="text-muted text-sm max-w-md">Building production-grade MERN applications with a focus on real-time data and scalable architectures.</p>
          </SpotlightCard>
          
          <SpotlightCard className="p-8 h-64 flex flex-col justify-center items-center text-center">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="font-bold">Air University</h3>
            <p className="text-xs text-muted mt-2">BS Computer Science</p>
          </SpotlightCard>

          <SpotlightCard className="p-8 h-64 bg-accent/5">
            <h3 className="font-bold mb-4">Core Principles</h3>
            <ul className="text-xs space-y-3 text-muted">
              <li>• Scalability First</li>
              <li>• Clean Architecture</li>
              <li>• User-Centric Design</li>
            </ul>
          </SpotlightCard>

          <SpotlightCard className="md:col-span-2 p-8 h-64 flex items-center justify-between">
            <div>
               <h3 className="text-2xl font-bold mb-2">Current Focus</h3>
               <p className="text-muted text-sm">Deep diving into Docker and Microservices.</p>
            </div>
            <div className="text-6xl opacity-20">🐳</div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
};

export default About;