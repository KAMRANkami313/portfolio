import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';
import { useAudio } from '../../hooks/useAudio';

const TechMarquee = () => {
  const { playHover } = useAudio();
  const [isPaused, setIsPaused] = useState(false);
  const doubledSkills = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="relative w-full overflow-hidden py-16 bg-surface/20 border-y border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-1 bg-accent/10 border-x border-b border-accent/20 rounded-b-xl z-20">
        <span className="text-[9px] font-black font-mono text-accent uppercase tracking-[0.4em]">Integrated_Tech_Stack</span>
      </div>

      <motion.div
        onHoverStart={() => setIsPaused(true)}
        onHoverEnd={() => setIsPaused(false)}
        animate={{ x: isPaused ? undefined : ["0%", "-33.33%"] }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap gap-12 px-12"
      >
        {doubledSkills.map((skill, index) => (
          <div 
            key={index} 
            onMouseEnter={playHover}
            className="flex items-center gap-6 px-8 py-4 rounded-2xl bg-white/5 border border-white/5 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 group cursor-default"
          >
            <span className="text-4xl group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              {skill.icon}
            </span>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white/40 group-hover:text-white transition-colors">
                {skill.name}
              </span>
              <span className="text-[9px] font-mono text-accent/0 group-hover:text-accent transition-all uppercase tracking-tighter">
                {skill.level}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
      
      <div className="absolute inset-y-0 left-0 w-48 bg-linear-to-r from-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-48 bg-linear-to-l from-dark to-transparent z-10 pointer-events-none" />
    </div>
  );
};

export default TechMarquee;