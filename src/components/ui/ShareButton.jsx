import React from 'react';
import { FiShare2 } from 'react-icons/fi';

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Muhammad Kamran | MERN Engineer',
        url: window.location.href,
      });
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="fixed top-24 right-6 z-40 p-3 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full text-muted hover:text-accent transition-all md:flex hidden"
    >
      <FiShare2 />
    </button>
  );
};

export default ShareButton;