import React from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const codeLines = [
    { text: "const developer = {", color: "text-purple-400" },
    { text: "  name: 'Muhammad Kamran',", color: "text-blue-400" },
    { text: "  role: 'MERN Stack Engineer',", color: "text-blue-400" },
    { text: "  education: 'Air University, CS',", color: "text-blue-400" },
    { text: "  skills: ['React', 'Node', 'Docker', 'MongoDB'],", color: "text-yellow-400" },
    { text: "  hardWorker: true,", color: "text-green-400" },
    { text: "  problemSolver: true,", color: "text-green-400" },
    { text: "};", color: "text-purple-400" },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto mt-20 font-mono text-sm shadow-2xl rounded-xl overflow-hidden border border-white/10">
      <div className="bg-white/5 px-4 py-2 flex gap-2 border-b border-white/10">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
      </div>
      <div className="bg-surface/80 backdrop-blur-xl p-6">
        {codeLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex gap-4"
          >
            <span className="text-white/20 select-none">{i + 1}</span>
            <span className={line.color}>{line.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;