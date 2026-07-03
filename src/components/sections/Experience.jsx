import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { EXPERIENCE } from "../../constants";

const Experience = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);

    const handler = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section id="experience" className="section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono text-accent tracking-[0.3em] uppercase mb-2">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Engineering Roadmap
            </h2>
          </div>
          <p className="text-sm text-muted md:max-w-xs">
            {EXPERIENCE.length} chapters of building, shipping, and learning.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
            style={{ background: "linear-gradient(to bottom, var(--color-accent), transparent)" }}
            aria-hidden="true"
          />

          {EXPERIENCE.map((item, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className={`relative flex items-start mb-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    className="flex items-center justify-center w-9 h-9 rounded-full bg-surface border-2"
                    style={{
                      borderColor: "var(--color-accent)",
                      boxShadow: `0 0 20px rgba(var(--color-accent-rgb), 0.3)`,
                    }}
                    animate={
                      reducedMotion
                        ? {}
                        : { scale: [1, 1.15, 1] }
                    }
                    transition={
                      reducedMotion
                        ? {}
                        : { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }
                  >
                    <Briefcase className="w-4 h-4 text-accent" />
                  </motion.div>
                </div>

                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="card card-hover p-5">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="chip text-[11px]">
                        <Calendar size={11} />
                        {item.year}
                      </span>
                      <span className="chip text-[11px]">
                        <MapPin size={11} />
                        {item.company}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-3">
                      {item.description}
                    </p>

                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="chip text-[10px]">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;