import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The Journey</h2>
          <p className="mt-4 text-muted">A timeline of my professional growth and educational background.</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-linear-to-b from-accent/50 via-white/10 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center justify-between w-full flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-5/12" />

                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-dark border-2 border-accent z-10">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                </div>

                <div className="w-full md:w-5/12 pl-12 md:pl-0">
                  <div className="p-6 rounded-2xl bg-surface border border-white/5 hover:border-white/10 transition-colors">
                    <span className="text-accent text-sm font-semibold">{item.year}</span>
                    <h3 className="text-xl font-bold mt-1">{item.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{item.company}</p>
                    <p className="text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;