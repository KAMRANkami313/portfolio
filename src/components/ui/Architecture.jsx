import React from 'react';
import { motion } from 'framer-motion';

const Architecture = () => {
  const layers = [
    { name: "Frontend_Layer", tech: "React 19 / Tailwind 4", color: "bg-blue-500" },
    { name: "Logic_Gateway", tech: "Node / Express / JWT", color: "bg-purple-500" },
    { name: "Real-time_Pipe", tech: "Socket.io / Redis", color: "bg-red-500" },
    { name: "Data_Persistence", tech: "MongoDB / AWS S3", color: "bg-green-500" }
  ];

  return (
    <div className="py-12 px-8 bg-black/40 border border-white/5 rounded-[2.5rem] mt-10 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 font-mono text-[8px] text-accent/20 uppercase tracking-[0.5em] rotate-90 origin-right">
        SYSTEM_SCHEMATIC_v2.0
      </div>
      
      <h4 className="text-[10px] font-black text-accent uppercase tracking-[0.4em] mb-10 text-center flex items-center justify-center gap-4">
        <span className="w-8 h-px bg-accent/20" />
        Infrastructure_Stack
        <span className="w-8 h-px bg-accent/20" />
      </h4>

      <div className="flex flex-col items-center gap-3">
        {layers.map((layer, i) => (
          <React.Fragment key={i}>
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="max-w-md w-full p-5 rounded-2xl border border-white/10 bg-surface/80 flex justify-between items-center relative group hover:border-accent/40 transition-colors"
            >
              <div className={`absolute left-0 top-3 bottom-3 w-1 rounded-full ${layer.color}`} />
              <div className="flex flex-col ml-4">
                <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Layer_{i+1}</span>
                <span className="text-sm font-bold">{layer.name}</span>
              </div>
              <span className="text-[10px] font-mono text-accent font-bold px-3 py-1 bg-accent/5 rounded-lg border border-accent/10">{layer.tech}</span>
            </motion.div>
            {i < layers.length - 1 && (
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 20 }}
                viewport={{ once: true }}
                className="w-px bg-white/10 relative"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-accent/40 rounded-full" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Architecture;