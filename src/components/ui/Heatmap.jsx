import React from 'react';
import { motion } from 'framer-motion';

const Heatmap = () => {
  const squares = Array.from({ length: 64 }, () => Math.floor(Math.random() * 4));

  return (
    <div className="mt-10 select-none">
      <div className="flex items-center justify-between mb-4">
        <p className="text-[10px] uppercase font-black tracking-[0.3em] text-white/30">Commit_Architecture_Heatmap</p>
        <div className="flex items-center gap-2">
           <span className="text-[8px] text-muted uppercase">Less</span>
           <div className="flex gap-1">
              <div className="w-2 h-2 rounded-sm bg-white/5" />
              <div className="w-2 h-2 rounded-sm bg-accent/30" />
              <div className="w-2 h-2 rounded-sm bg-accent/60" />
              <div className="w-2 h-2 rounded-sm bg-accent" />
           </div>
           <span className="text-[8px] text-muted uppercase">More</span>
        </div>
      </div>
      
      <div className="grid grid-cols-8 sm:grid-cols-16 gap-1.5">
        {squares.map((level, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.01 }}
            viewport={{ once: true }}
            className={`aspect-square rounded-sm transition-colors duration-500 hover:ring-1 hover:ring-white/40 ${
              level === 0 ? "bg-white/5" : 
              level === 1 ? "bg-accent/20" : 
              level === 2 ? "bg-accent/50" : "bg-accent"
            }`} 
          />
        ))}
      </div>
    </div>
  );
};

export default Heatmap;