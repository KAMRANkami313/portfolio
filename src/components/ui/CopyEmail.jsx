import React, { useState } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';

const CopyEmail = ({ email }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button 
      onClick={handleCopy}
      className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-muted hover:text-white transition-all"
    >
      {copied ? <FiCheck className="text-green-500" /> : <FiCopy />}
      {copied ? "Copied!" : email}
    </button>
  );
};

export default CopyEmail;