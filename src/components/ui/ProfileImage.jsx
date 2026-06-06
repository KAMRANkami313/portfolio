import React from 'react';
import profile400w from '../../assets/profile-400w.webp';
import profile800w from '../../assets/profile-800w.webp';

const ProfileImage = () => {
  return (
    <div className="relative w-52 h-52 md:w-64 md:h-64 mx-auto mb-12 animate-fade-scale-in will-animate">
      {/* Glow */}
      <div className="absolute inset-0 bg-accent/15 blur-[100px] rounded-full" />

      {/* Main image container */}
      <div className="relative w-full h-full rounded-[2.5rem] border border-white/10 overflow-hidden backdrop-blur-md p-2 bg-surface/20">
        <div className="w-full h-full rounded-4xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 hover:scale-105">
          <img
            src={profile400w}
            srcSet={`${profile400w} 400w, ${profile800w} 800w`}
            sizes="(max-width: 768px) 208px, 256px"
            alt="Muhammad Kamran"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={256}
            height={256}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Rotating border — pure CSS */}
      <div
        className="absolute -inset-3 rounded-[2.8rem] -z-10 animate-border-spin will-animate"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0%, var(--color-accent, #6366f1) 10%, transparent 20%)',
        }}
      >
        <div className="w-full h-full bg-dark rounded-[2.8rem]" />
      </div>

      {/* Status badge */}
      <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-surface border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl backdrop-blur-xl">
        <div className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;