import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS } from '../../constants';

const TechMarquee = () => {
  const doubledSkills = [...SKILLS, ...SKILLS];

  return (
    <div className="relative flex w-full overflow-hidden py-10">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {doubledSkills.map((skill, index) => (
          <div key={index} className="flex items-center gap-4 text-2xl font-bold text-muted/40 hover:text-accent transition-colors cursor-default">
            <span className="text-4xl">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-dark to-transparent z-10" />
    </div>
  );
};

export default TechMarquee;