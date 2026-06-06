import React, { useState } from 'react';
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

      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-100 px-6 py-3 bg-accent text-white rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-sm transition-all duration-300 will-animate ${
          copied
            ? 'opacity-100 translate-y-0 scale-100'
            : 'opacity-0 translate-y-5 scale-95 pointer-events-none'
        }`}
      >
        <FiCheck />
        <span>Email Copied to Clipboard!</span>
      </div>
    </>
  );
};

export default CopyEmail;