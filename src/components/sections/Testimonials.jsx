import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../../constants';
import SpotlightCard from '../ui/SpotlightCard';
import { FiMessageSquare, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="relative">
            <div className="absolute -left-4 top-0 w-1 h-full bg-accent/20 rounded-full" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic bg-linear-to-r from-white via-white to-white/20 bg-clip-text text-transparent">
              Signal_Logs
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-[10px] font-mono font-black text-accent uppercase tracking-[0.4em]">Peer_Verification_v2.0</span>
              <div className="h-px w-12 bg-accent/30" />
            </div>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-[10px] font-mono text-muted uppercase tracking-widest">Reputation_Score: Verified</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <SpotlightCard className="h-full p-8 flex flex-col justify-between group border-white/5 hover:border-accent/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <FiMessageSquare className="text-accent text-xl" />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <FiStar key={j} size={10} className="text-accent/60 fill-accent/60" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-muted leading-relaxed text-sm md:text-base mb-8 border-l-2 border-accent/20 pl-4">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-sm font-black text-accent">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{testimonial.name}</p>
                    <p className="text-[10px] font-mono text-muted uppercase tracking-wider">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="w-1 h-1 bg-accent rounded-full" />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-accent">VERIFIED_SIGNAL</span>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;