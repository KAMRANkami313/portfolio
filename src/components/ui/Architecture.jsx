import React from 'react';
import { motion } from 'framer-motion';

const Architecture = () => {
  const layers = [
    { name: "Frontend", tech: "React / Tailwind", color: "bg-blue-500" },
    { name: "API Gateway", tech: "Node / Express", color: "bg-purple-500" },
    { name: "Real-time", tech: "Socket.io / Redis", color: "bg-red-500" },
    { name: "Database", tech: "MongoDB / S3", color: "bg-green-500" }
  ];

  return (
    <div className="py-12 px-6 bg-surface/20 border border-white/5 rounded-3xl mt-10">
      <h4 className="text-xs font-bold text-accent uppercase tracking-[0.3em] mb-8 text-center">System Architecture (EventPulse)</h4>
      <div className="flex flex-col items-center gap-2">
        {layers.map((layer, i) => (
          <React.Fragment key={i}>
            <motion.div 
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: "100%", opacity: 1 }}
              viewport={{ once: true }}
              className="max-w-md w-full p-4 rounded-xl border border-white/10 bg-surface flex justify-between items-center relative overflow-hidden"
            >
              <div className={`absolute left-0 top-0 bottom-0 w-1 ${layer.color}`} />
              <span className="text-sm font-bold ml-2">{layer.name}</span>
              <span className="text-[10px] font-mono text-muted">{layer.tech}</span>
            </motion.div>
            {i < layers.length - 1 && (
              <motion.div 
                initial={{ height: 0 }}
                whileInView={{ height: 20 }}
                viewport={{ once: true }}
                className="w-px bg-accent/30" 
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Architecture;