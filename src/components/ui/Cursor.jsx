import React, { useEffect, useState, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });

  // Track real cursor position (the system cursor moves instantly)
  useEffect(() => {
    const handleMouseMove = (e) => {
      targetRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  // Smooth following animation — the dot chases the real cursor slowly
  useEffect(() => {
    let animationId;
    const ease = 0.12; // Lower = slower follow. Try 0.08 for even slower

    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * ease;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  // Detect hover on interactive elements
  useEffect(() => {
    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleUnhover);
      });
    };

    attachListeners();
    const interval = setInterval(attachListeners, 3000);

    return () => {
      clearInterval(interval);
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className={`cursor-dot fixed top-0 left-0 pointer-events-none z-9999 hidden md:block transition-[width,height,background-color,border-radius] duration-300 ease-out ${
        isHovering
          ? "w-10 h-10 bg-accent/10 border border-accent/40 rounded-full"
          : isClicking
          ? "w-3 h-3 bg-accent rounded-full"
          : "w-2 h-2 bg-accent/80 rounded-full"
      }`}
      style={{ willChange: 'transform' }}
    />
  );
};

export default Cursor;