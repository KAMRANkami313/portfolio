import React, { useCallback } from 'react';

const ClickSparkle = () => {
  const handleClick = useCallback((e) => {
    const count = 8;
    for (let i = 0; i < count; i++) {
      const sparkle = document.createElement('div');
      const angle = (i / count) * 360;
      const distance = 20 + Math.random() * 30;
      const tx = Math.cos((angle * Math.PI) / 180) * distance;
      const ty = Math.sin((angle * Math.PI) / 180) * distance;
      const size = 3 + Math.random() * 4;

      sparkle.style.cssText = `
        position: fixed;
        left: ${e.clientX - size / 2}px;
        top: ${e.clientY - size / 2}px;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: var(--color-accent);
        pointer-events: none;
        z-index: 9998;
        animation: sparkle 0.8s ease-out forwards;
        --tx: ${tx}px;
        --ty: ${ty}px;
        opacity: 0.8;
      `;

      document.body.appendChild(sparkle);
      setTimeout(() => sparkle.remove(), 800);
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [handleClick]);

  return null;
};

export default ClickSparkle;