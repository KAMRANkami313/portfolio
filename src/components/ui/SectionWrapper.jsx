import React from 'react';
import { motion } from "framer-motion";

const SectionWrapper = ({ children, id, className = "" }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1 }}
      className={`relative py-24 md:py-32 overflow-hidden ${className}`}
    >
      <div className="container mx-auto px-6 relative z-10">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;