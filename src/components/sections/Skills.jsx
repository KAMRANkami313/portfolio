import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CATEGORIES } from '../../constants';
import { FiHexagon, FiCpu, FiLayers, FiDatabase, FiTool } from 'react-icons/fi';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};

const categoryIcons = {
  "Frontend Engineering": <FiLayers />,
  "Backend & Systems": <FiCpu />,
  "Database & Cloud": <FiDatabase />,
  "Tools & Payments": <FiTool />
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-accent/20 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic bg-linear-to-r from-white via-white to-white/20 bg-clip-text text-transparent">
              Technical_Capabilities
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] font-mono font-black text-accent uppercase tracking-[0.4em]">Engine_Core_v4.0</span>
              <div className="h-px w-12 bg-accent/30" />
            </div>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Modules_Loaded: 20</span>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SKILLS_CATEGORIES.map((cat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative group h-full"
            >
              <div className="absolute inset-0 bg-accent/5 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative h-full p-8 rounded-4xl bg-surface/40 backdrop-blur-xl border border-white/5 group-hover:border-accent/40 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
                  <div className="text-6xl text-accent rotate-12">
                    {categoryIcons[cat.title] || <FiHexagon />}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-xl text-accent shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                    {categoryIcons[cat.title] || <FiHexagon />}
                  </div>
                  <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">
                    {cat.title.split(' ')[0]}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {cat.skills.map((skill, j) => (
                    <li
                      key={j}
                      className="flex flex-col gap-1 group/item"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className="w-1.5 h-1.5 rounded-full bg-white/10 group-hover/item:bg-accent transition-colors" />
                           <span className="text-sm font-bold text-muted group-hover/item:text-white transition-colors">{skill.name}</span>
                        </div>
                        <span className="text-[8px] font-black font-mono text-accent/0 group-hover/item:text-accent transition-all uppercase">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden mt-1">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + (j * 0.1) }}
                          viewport={{ once: true }}
                          className="h-full bg-linear-to-r from-accent/20 to-accent rounded-full" 
                        />
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                   <span className="text-[9px] font-mono text-muted uppercase">Latency: 0ms</span>
                   <div className="flex gap-1">
                      {[...Array(3)].map((_, dot) => (
                        <div key={dot} className="w-1 h-1 rounded-full bg-accent/30" />
                      ))}
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;