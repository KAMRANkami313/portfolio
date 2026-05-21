import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT } from '../../constants';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
              Let's Build Something <span className="text-accent">Great.</span>
            </h2>
            <p className="text-muted text-lg mb-12 leading-relaxed">
              I am currently looking for internship opportunities. If you have a project in mind or just want to connect, feel free to reach out.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${CONTACT.email}`}
              className="w-full md:w-auto px-8 py-4 bg-white text-black rounded-2xl font-bold flex items-center justify-center gap-3 transition-colors hover:bg-neutral-200"
            >
              Get In Touch
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CONTACT.resume.href}
              className="w-full md:w-auto px-8 py-4 bg-surface border border-white/10 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-colors hover:bg-white/5"
            >
              {CONTACT.resume.icon} {CONTACT.resume.label}
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-16 flex items-center justify-center gap-8"
          >
            {CONTACT.socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-2xl text-muted hover:text-white transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          <div className="mt-24 pt-8 border-t border-white/5 text-muted text-sm">
            <p>© {new Date().getFullYear()} Muhammad Kamran. All rights reserved.</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl h-64 bg-accent/10 blur-[120px] rounded-full" />
    </section>
  );
};

export default Contact;