import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { Hexagon, Cpu, Layers, Database, Wrench } from "lucide-react";
import { SKILLS_CATEGORIES } from "../../constants";

const CATEGORY_ICONS = {
  "Frontend Engineering": Layers,
  "Backend & Systems": Cpu,
  "Database & Cloud": Database,
  "Tools & Payments": Wrench,
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Skills = () => {
  const totalSkills = useMemo(
    () => SKILLS_CATEGORIES.reduce((sum, cat) => sum + cat.skills.length, 0),
    []
  );

  return (
    <section id="skills" className="section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono text-accent tracking-[0.3em] uppercase mb-2">
              Skills
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Technical Capabilities
            </h2>
          </div>
          <p className="text-sm text-muted md:max-w-xs">
            <span className="text-white font-semibold">{totalSkills}</span> modules loaded across {SKILLS_CATEGORIES.length} domains.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SKILLS_CATEGORIES.map((cat) => {
            const Icon = CATEGORY_ICONS[cat.title] || Hexagon;
            return (
              <motion.div key={cat.title} variants={itemVariants}>
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="text-sm font-bold text-white leading-tight">{cat.title}</h3>
                  </div>

                  <ul className="space-y-3">
                    {cat.skills.map((skill) => (
                      <li key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-white">{skill.name}</span>
                          <span className="text-xs font-mono text-muted">{skill.proficiency}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-surface-light overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{
                              background: "linear-gradient(to right, var(--color-accent), var(--color-accent-soft))",
                            }}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;