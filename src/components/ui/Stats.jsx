import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../../constants';

const Stats = () => {
  return (
    <div className="py-20 bg-surface/20 border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4">
          {STATS.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-2">
                <h4 className="text-4xl md:text-5xl font-black text-white tracking-tighter group-hover:text-accent transition-colors duration-500">
                  {stat.value}
                </h4>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-1 bg-accent group-hover:w-full transition-all duration-500" />
              </div>
              <p className="text-[10px] font-mono font-black text-muted uppercase tracking-[0.4em] mt-4">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;