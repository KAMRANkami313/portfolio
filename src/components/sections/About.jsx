import React from 'react';
import { motion } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';
import { FiTarget, FiZap, FiBox, FiCpu, FiCoffee, FiMusic } from 'react-icons/fi';

const About = () => {
  const cards = [
    {
      title: "The Mission",
      content: "Architecting high-performance MERN ecosystems with a focus on real-time data integrity, modular scalability, and developer experience that makes a difference.",
      icon: <FiTarget />,
      className: "md:col-span-2 md:row-span-1",
      tag: "CORE_PURPOSE"
    },
    {
      title: "Education",
      content: "BS Computer Science at Air University, Islamabad. Specialized in Software Engineering, Database Systems, and Data Structures with a strong academic foundation.",
      icon: <FiZap />,
      className: "md:col-span-1 md:row-span-1",
      tag: "ACADEMIC_PATH"
    },
    {
      title: "Current Focus",
      content: "Deep diving into Docker orchestration, Microservices architecture, and Cloud Native deployment strategies. Exploring system design patterns for distributed applications.",
      icon: <FiBox />,
      className: "md:col-span-1 md:row-span-1",
      tag: "RESEARCH_DEV"
    },
    {
      title: "Core Principles",
      content: "Scalability First, Clean Architecture, and User-Centric Design. Every line of code is written with maintainability, performance, and the end-user in mind.",
      icon: <FiCpu />,
      className: "md:col-span-1 md:row-span-1",
      tag: "ENGINEERING_ETHOS"
    },
    {
      title: "When Not Coding",
      content: "Exploring new tech trends, contributing to open-source, and brewing the perfect cup of chai while debugging async/await chains at 2 AM.",
      icon: <FiCoffee />,
      className: "md:col-span-1 md:row-span-1",
      tag: "OFF_DUTY_MODE"
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
             <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic bg-linear-to-r from-white to-white/20 bg-clip-text text-transparent">
               System_Overview
             </h2>
             <p className="text-accent text-xs font-mono font-bold mt-2 tracking-[0.4em] uppercase">
               Operational_Blueprints_v3.0
             </p>
          </div>
          <div className="h-px grow bg-white/5 mx-8 hidden md:block mb-4" />
          <div className="text-right font-mono text-[10px] text-muted leading-none">
            LOC: 12,492<br />
            UPTIME: 99.9%
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={card.className}
            >
              <SpotlightCard className="h-full p-8 flex flex-col justify-between group border-white/5 hover:border-accent/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-2xl text-accent p-3 bg-accent/5 rounded-2xl border border-accent/10">
                      {card.icon}
                    </div>
                    <span className="text-[10px] font-mono font-black text-muted tracking-widest uppercase">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{card.title}</h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">
                    {card.content}
                  </p>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="w-1 h-1 bg-accent rounded-full" />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-accent">DATA_READ_SUCCESS</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;