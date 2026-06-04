import React, { useEffect, useState, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';

const Cursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  const handleMouseMove = useCallback((e) => {
    mouseX.set(e.clientX - 16);
    mouseY.set(e.clientY - 16);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    const handleHover = () => setIsHovering(true);
    const handleUnhover = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const attachListeners = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.addEventListener('mouseenter', handleHover);
        el.addEventListener('mouseleave', handleUnhover);
      });
    };

    attachListeners();

    // Re-attach listeners every 2 seconds to catch dynamically added elements
    const interval = setInterval(attachListeners, 2000);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.querySelectorAll('a, button, [role="button"], input, textarea, select').forEach(el => {
        el.removeEventListener('mouseenter', handleHover);
        el.removeEventListener('mouseleave', handleUnhover);
      });
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{ x: mouseX, y: mouseY }}
        className={`fixed top-0 left-0 w-8 h-8 rounded-full border pointer-events-none z-9999 hidden md:block transition-all duration-300 ${
          isHovering 
            ? "border-accent bg-accent/10 scale-150" 
            : isClicking
            ? "border-accent/50 bg-accent/20 scale-75"
            : "border-accent/50 bg-transparent scale-100"
        }`}
      />
      {/* Inner dot */}
      <motion.div
        style={{ 
          x: mouseX, 
          y: mouseY,
          transition: { type: "spring", stiffness: 800, damping: 35 }
        }}
        className={`fixed top-0 left-0 pointer-events-none z-9999 hidden md:block transition-all duration-200 ${
          isHovering ? "w-1.5 h-1.5 bg-accent" : "w-2 h-2 bg-white"
        } rounded-full`}
        // Center the dot
        initial={{ x: 0, y: 0 }}
      />
    </>
  );
};

export default Cursor;