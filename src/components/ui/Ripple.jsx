import React from 'react';
import { useToast } from '../../context/ToastContext';

const Ripple = () => {
  const handleClick = (e) => {
    const ripple = document.createElement('div');
    const size = Math.max(e.target.offsetWidth, e.target.offsetHeight);
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      border-radius: 50%;
      background: rgba(var(--color-accent-rgb), 0.15);
      pointer-events: none;
      animation: ripple 0.6s ease-out forwards;
      z-index: 50;
    `;

    e.target.style.position = 'relative';
    e.target.style.overflow = 'hidden';
    e.target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
};

export default Ripple;
