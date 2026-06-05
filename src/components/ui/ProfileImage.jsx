import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpg'; 

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-52 h-52 md:w-64 md:h-64 mx-auto mb-12"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-accent/15 blur-[100px] rounded-full" />
      
      {/* Main image container */}
      <div className="relative w-full h-full rounded-[2.5rem] border border-white/10 overflow-hidden backdrop-blur-md p-2 bg-surface/20">
        <div className="w-full h-full rounded-4xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 hover:scale-105">
          <img 
            src={profileImg} 
            alt="Muhammad Kamran" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Rotating border */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-3 rounded-[2.8rem] -z-10"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, var(--color-accent, #6366f1) 10%, transparent 20%)',
          padding: '1px',
        }}
      >
        <div className="w-full h-full bg-dark rounded-[2.8rem]" />
      </motion.div>
      
      {/* Status badge */}
      <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-surface border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileImage;