import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_CATEGORIES } from '../../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter italic">
            TECHNICAL_CAPABILITIES
          </h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {SKILLS_CATEGORIES.map((cat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="p-6 rounded-2xl bg-surface/30 border border-white/5 hover:border-accent/40 transition-colors"
            >
              <h3 className="text-accent text-xs font-bold uppercase tracking-widest mb-6">
                {cat.title}
              </h3>

              <ul className="space-y-3">
                {cat.skills.map((skill, j) => (
                  <li
                    key={j}
                    className="text-muted flex items-center gap-2 text-sm group"
                  >
                    <span className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-accent transition-colors" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;