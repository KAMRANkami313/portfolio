import React from "react";
import { motion } from "framer-motion";
import { Building2, Calendar, MapPin, FileText, CheckCircle2, Loader2, ExternalLink } from "lucide-react";
import { INTERNSHIPS } from "../../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Internships = () => {
  return (
    <section id="internships" className="section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono text-accent tracking-[0.3em] uppercase mb-2">
              Internships
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Professional Experience
            </h2>
          </div>
          <p className="text-sm text-muted md:max-w-xs">
            Selected for competitive internship programs in full stack and AI engineering.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {INTERNSHIPS.map((intern) => (
            <motion.div key={intern.company} variants={itemVariants}>
              <div className="card card-hover h-full p-6 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-xl shrink-0"
                      style={{
                        backgroundColor: `${intern.color}15`,
                        border: `1px solid ${intern.color}30`,
                      }}
                    >
                      <Building2 className="w-6 h-6" style={{ color: intern.color }} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{intern.company}</h3>
                      <p className="text-sm" style={{ color: intern.color }}>
                        {intern.role}
                      </p>
                    </div>
                  </div>
                  <span
                    className="chip text-[10px] shrink-0"
                    style={{
                      backgroundColor: intern.status === "current" ? "rgba(16, 185, 129, 0.1)" : "rgba(99, 102, 241, 0.1)",
                      borderColor: intern.status === "current" ? "rgba(16, 185, 129, 0.3)" : "rgba(99, 102, 241, 0.3)",
                      color: intern.status === "current" ? "#10b981" : "#6366f1",
                    }}
                  >
                    {intern.status === "current" ? (
                      <>
                        <Loader2 size={10} className="animate-spin" />
                        In Progress
                      </>
                    ) : (
                      <>
                        <CheckCircle2 size={10} />
                        Completed
                      </>
                    )}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="chip text-[11px]">
                    <Calendar size={11} />
                    {intern.period}
                  </span>
                  <span className="chip text-[11px]">
                    <MapPin size={11} />
                    {intern.location}
                  </span>
                  <span className="chip text-[11px]">{intern.duration}</span>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4">
                  {intern.description}
                </p>

                <div className="mb-4">
                  <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2">
                    Key Highlights
                  </p>
                  <ul className="space-y-1.5">
                    {intern.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted">
                        <span
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: intern.color }}
                        />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {intern.tech.map((tech) => (
                    <span key={tech} className="chip text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={intern.document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-auto self-start text-xs"
                >
                  <FileText size={14} />
                  {intern.document.label}
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Internships;