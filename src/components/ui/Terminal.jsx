import React from 'react';
import { motion } from 'framer-motion';
import Heatmap from '../ui/Heatmap';

const Terminal = () => {
  const codeLines = [
    { text: "const developer = {", color: "text-purple-400" },
    { text: "  name: 'Muhammad Kamran',", color: "text-blue-400" },
    { text: "  role: 'MERN Stack Engineer',", color: "text-blue-400" },
    { text: "  focus: 'Scalable SaaS Architecture',", color: "text-blue-400" },
    { text: "  stack: ['React', 'Node', 'Docker', 'MongoDB'],", color: "text-yellow-400" },
    { text: "  performance_obsessed: true,", color: "text-green-400" },
    { text: "  status: 'Open for Internships',", color: "text-green-400" },
    { text: "};", color: "text-purple-400" },
  ];

  return (
    <div className="w-full max-w-3xl mx-auto mt-20 font-mono text-sm shadow-2xl rounded-2xl overflow-hidden border border-white/10 bg-surface/40 backdrop-blur-2xl">
      <div className="bg-white/5 px-6 py-4 flex items-center justify-between border-b border-white/10">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="text-[10px] text-muted uppercase tracking-[0.3em] font-bold">
          bash — 80x24 — kamran@dev-terminal
        </div>
        <div className="w-12" />
      </div>
      
      <div className="p-8">
        <div className="mb-6 flex items-center gap-3 text-xs text-accent/60">
          <span className="px-2 py-0.5 rounded border border-accent/20 bg-accent/5">SSH_ENCRYPTED</span>
          <span className="px-2 py-0.5 rounded border border-accent/20 bg-accent/5">V3.0.1_STABLE</span>
        </div>

        <div className="space-y-1">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.3 }}
              viewport={{ once: true }}
              className="flex gap-6 group"
            >
              <span className="w-4 text-white/10 select-none text-right font-bold group-hover:text-accent/30 transition-colors">
                {i + 1}
              </span>
              <span className={`${line.color} tracking-wide`}>{line.text}</span>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex gap-6 mt-4"
          >
             <span className="w-4 text-white/10 select-none text-right font-bold">9</span>
             <div className="flex items-center gap-2 text-accent">
                <span>$</span>
                <span className="w-2 h-4 bg-accent animate-pulse" />
             </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <Heatmap />
        </motion.div>
      </div>
    </div>
  );
};

export default Terminal;