import React, { useCallback } from 'react';

const Confetti = ({ trigger }) => {
  const createConfetti = useCallback(() => {
    const colors = [
      'var(--color-accent)',
      '#f59e0b',
      '#10b981',
      '#ec4899',
      '#8b5cf6',
      '#ef4444',
      '#06b6d4',
    ];

    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;inset:0;z-index:9999;pointer-events:none;overflow:hidden;';
    document.body.appendChild(container);

    for (let i = 0; i < 80; i++) {
      const piece = document.createElement('div');
      const size = Math.random() * 8 + 4;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const startX = Math.random() * 100;
      const endX = startX + (Math.random() - 0.5) * 40;
      const rotation = Math.random() * 720 - 360;
      const duration = 2 + Math.random() * 2;
      const delay = Math.random() * 0.5;
      const isCircle = Math.random() > 0.5;

      piece.style.cssText = `
        position: absolute;
        top: -10px;
        left: ${startX}%;
        width: ${size}px;
        height: ${isCircle ? size : size * 0.4}px;
        background: ${color};
        border-radius: ${isCircle ? '50%' : '2px'};
        opacity: 1;
        animation: confetti-fall ${duration}s ease-out ${delay}s forwards;
        --end-x: ${endX}%;
        --rotation: ${rotation}deg;
      `;

      container.appendChild(piece);
    }

    setTimeout(() => {
      container.remove();
    }, 5000);
  }, []);

  React.useEffect(() => {
    if (trigger) {
      createConfetti();
    }
  }, [trigger, createConfetti]);

  return null;
};

export default Confetti;