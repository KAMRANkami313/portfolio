import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { CONTACT } from '../../constants';

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <button
        onClick={handleCopy}
        className="fixed bottom-24 left-6 z-40 p-3 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full text-muted hover:text-accent transition-all md:flex hidden group"
        aria-label="Copy email address"
      >
        <FiCopy className="group-hover:scale-110 transition-transform" />
        <span className="absolute left-full ml-4 px-2 py-1 bg-accent text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
          Copy Email
        </span>
      </button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-100 px-6 py-3 bg-accent text-white rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm"
          >
            <FiCheck />
            <span>Email Copied to Clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CopyEmail;