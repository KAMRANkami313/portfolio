import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../../assets/profile.jpg'; 

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0, 0.71, 0.2, 1.01] }}
      className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8"
    >
      <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full animate-pulse" />
      
      <div className="relative w-full h-full rounded-full border-2 border-white/10 overflow-hidden backdrop-blur-sm p-2">
        <div className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
          <img 
            src={profileImg} 
            alt="Muhammad Kamran" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-surface border border-white/10 rounded-2xl flex items-center justify-center text-2xl shadow-2xl">
        
      </div>
    </motion.div>
  );
};

export default ProfileImage;