import React from 'react';
import { motion } from 'framer-motion';

const Reveal = ({ children, width = "fit-content" }) => {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
          visible: { opacity: 1, y: 0, filter: "blur(0px)" },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-50px" }}
      >
        {children}
      </motion.div>
      
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.6, ease: "easeIn" }}
        viewport={{ once: true }}
        className="absolute inset-y-0 left-0 right-0 bg-accent z-20 pointer-events-none opacity-20"
      />
    </div>
  );
};

export default Reveal;