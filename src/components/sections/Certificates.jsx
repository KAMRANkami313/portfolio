import React from "react";
import { motion } from "framer-motion";
import { Award, FileText, ExternalLink, BadgeCheck, Calendar } from "lucide-react";
import { CERTIFICATES } from "../../constants";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Certificates = () => {
  return (
    <section id="certificates" className="section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono text-accent tracking-[0.3em] uppercase mb-2">
              Certificates
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Certifications & Programs
            </h2>
          </div>
          <p className="text-sm text-muted md:max-w-xs">
            Verified completions of engineering job simulations and professional programs.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {CERTIFICATES.map((cert) => (
            <motion.div key={cert.credentialId} variants={itemVariants}>
              <div className="card card-hover h-full p-6 flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 shrink-0">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  {cert.verified && (
                    <span className="chip text-[10px]" style={{ color: "#10b981", borderColor: "rgba(16, 185, 129, 0.3)", backgroundColor: "rgba(16, 185, 129, 0.1)" }}>
                      <BadgeCheck size={10} />
                      Verified
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-white mb-1 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">
                  {cert.issuer}
                  <span className="text-muted font-normal"> · {cert.issuerType}</span>
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="chip text-[11px]">
                    <Calendar size={11} />
                    {cert.date}
                  </span>
                  <span className="chip text-[11px] font-mono">
                    ID: {cert.credentialId}
                  </span>
                </div>

                <p className="text-sm text-muted leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="mb-4">
                  <p className="text-[10px] font-mono text-accent uppercase tracking-widest mb-2">
                    Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="chip text-[10px]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={cert.document.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost mt-auto self-start text-xs"
                >
                  <FileText size={14} />
                  {cert.document.label}
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

export default Certificates;