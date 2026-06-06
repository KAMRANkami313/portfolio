import React from 'react';
import profileWebp from '../../assets/profile.webp';
import profile400w from '../../assets/profile-400w.webp';
import profile800w from '../../assets/profile-800w.webp';

const ProfileImage = () => {
  return (
    <div className="relative w-52 h-52 md:w-64 md:h-64 mx-auto mb-12">
      {/* Glow */}
      <div className="absolute inset-0 bg-accent/15 blur-[100px] rounded-full" />

      {/* Main image container */}
      <div className="relative w-full h-full rounded-[2.5rem] border border-white/10 overflow-hidden backdrop-blur-md p-2 bg-surface/20 animate-fade-in-scale">
        <div className="w-full h-full rounded-4xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 hover:scale-105">
          <img
            src={profileWebp}
            srcSet={`${profile400w} 400w, ${profile800w} 800w, ${profileWebp} 537w`}
            sizes="(max-width: 768px) 208px, 256px"
            alt="Muhammad Kamran"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={537}
            height={536}
          />
        </div>
      </div>

      {/* Rotating border — pure CSS */}
      <div className="absolute -inset-3 rounded-[2.8rem] -z-10 animate-spin-slow">
        <div
          className="w-full h-full rounded-[2.8rem]"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, var(--color-accent, #6366f1) 10%, transparent 20%)',
            padding: '1px',
          }}
        >
          <div className="w-full h-full bg-dark rounded-[2.8rem]" />
        </div>
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