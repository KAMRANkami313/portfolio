import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpg'; 

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-12"
    >
      <div className="absolute inset-0 bg-accent/20 blur-[80px] rounded-full animate-pulse" />
      
      <div className="relative w-full h-full rounded-[3rem] border border-white/10 overflow-hidden backdrop-blur-md p-3 bg-surface/30">
        <div className="w-full h-full rounded-[2.2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 hover:scale-105">
          <img 
            src={profileImg} 
            alt="Muhammad Kamran" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute -inset-4 border border-dashed border-accent/20 rounded-full -z-10"
      />
      
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