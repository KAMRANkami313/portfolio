import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../constants';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic bg-linear-to-r from-white to-white/30 bg-clip-text text-transparent">
              Engineering_Roadmap
            </h2>
            <p className="mt-4 text-muted text-sm md:text-base leading-relaxed">
              A chronological trace of technical evolution, academic milestones, and professional development within the MERN ecosystem.
            </p>
          </div>
          <div className="hidden md:flex items-center gap-4 px-6 py-3 bg-surface/40 border border-white/5 rounded-2xl backdrop-blur-md">
            <div className="flex -space-x-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-dark bg-accent/20 flex items-center justify-center text-[10px] font-bold">
                  0{i + 1}
                </div>
              ))}
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-muted">Phase_Markers_Active</span>
          </div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-accent/50 via-white/10 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-20">
            {EXPERIENCE.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:block w-[45%]" />

                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20">
                  <motion.div 
                    whileInView={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-10 h-10 rounded-xl bg-dark border-2 border-accent flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                  >
                    <FiBriefcase className="text-accent text-sm" />
                  </motion.div>
                </div>

                <div className="w-full md:w-[45%] pl-16 md:pl-0">
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-accent/5 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                    
                    <div className="relative p-8 rounded-4xl bg-surface/40 backdrop-blur-2xl border border-white/5 group-hover:border-accent/30 transition-all duration-500 overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                        <FiBriefcase size={120} />
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full">
                          <FiCalendar className="text-accent text-[10px]" />
                          <span className="text-[10px] font-black text-accent uppercase tracking-widest">{item.year}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                          <FiMapPin className="text-muted text-[10px]" />
                          <span className="text-[10px] font-black text-muted uppercase tracking-widest">{item.company}</span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      
                      <div className="w-12 h-1 bg-accent/20 rounded-full mb-6 group-hover:w-24 group-hover:bg-accent transition-all duration-500" />

                      <p className="text-muted text-sm md:text-base leading-relaxed italic border-l-2 border-white/5 pl-6 group-hover:border-accent/30 transition-colors">
                        "{item.description}"
                      </p>

                      <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                         <span className="text-[9px] font-mono text-muted uppercase tracking-[0.2em]">Deployment_Status: Verified</span>
                         <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                              <div key={i} className="w-1 h-1 bg-accent/40 rounded-full" />
                            ))}
                         </div>
                      </div>
                    </div>
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