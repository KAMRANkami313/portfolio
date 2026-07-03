import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../../constants";
import SpotlightCard from "../ui/SpotlightCard";

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

const Testimonials = () => {
  return (
    <section id="testimonials" className="section relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-mono text-accent tracking-[0.3em] uppercase mb-2">
              Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Peer Reviews
            </h2>
          </div>
          <p className="text-sm text-muted md:max-w-xs">
            What colleagues and clients say about working with me.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div key={testimonial.name} variants={itemVariants}>
              <SpotlightCard className="card card-hover h-full p-6 flex flex-col">
                <Quote className="w-8 h-8 text-accent/40 mb-4 shrink-0" />

                <blockquote className="text-sm text-white/90 leading-relaxed mb-6 flex-1">
                  "{testimonial.text}"
                </blockquote>

                <figcaption className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 border border-accent/20 text-sm font-bold text-accent shrink-0"
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white truncate">{testimonial.name}</p>
                    <p className="text-xs text-muted truncate">
                      {testimonial.role} · {testimonial.company}
                    </p>
                  </div>
                </figcaption>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;