import React, { useState } from 'react';
import { FiShare2, FiCheck } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const ShareButton = () => {
  const [shared, setShared] = useState(false);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Muhammad Kamran | MERN Engineer',
          url: window.location.href,
        });
      } catch (err) {
        copyFallback();
      }
    } else {
      copyFallback();
    }
  };

  const copyFallback = () => {
    navigator.clipboard.writeText(window.location.href);
    setShared(true);
    setTimeout(() => setShared(false), 2000);
  };

  return (
    <div className="fixed top-24 right-6 z-40">
      <button 
        onClick={handleShare}
        className="p-3.5 bg-surface/60 backdrop-blur-xl border border-white/10 rounded-2xl text-muted hover:text-accent hover:border-accent/40 transition-all shadow-2xl group flex items-center gap-3"
        aria-label="Share this portfolio"
      >
        <FiShare2 className="group-hover:rotate-12 transition-transform" />
        <span className="hidden lg:block text-[9px] font-black uppercase tracking-widest">Share_Node</span>
      </button>

      <AnimatePresence>
        {shared && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-0 right-full mr-4 px-4 py-2.5 bg-accent text-white rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 shadow-2xl whitespace-nowrap"
          >
            <FiCheck /> Link_Copied_To_Clipboard
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShareButton;