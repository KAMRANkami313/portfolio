import React, { useEffect, useState, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const trailRefs = useRef([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const posRef = useRef({ x: -100, y: -100 });
  const targetRef = useRef({ x: -100, y: -100 });

  // Trail positions for the glow trail effect
  const trailPositions = useRef(
    Array.from({ length: 5 }, () => ({ x: -100, y: -100 }))
  );

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

  // Smooth following animation with trailing glow
  useEffect(() => {
    let animationId;
    const ease = 0.12; // Lower = slower follow

    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * ease;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * ease;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px)`;
      }

      // Update trail positions — each trail point follows the previous one
      trailPositions.current.forEach((trail, i) => {
        const target = i === 0 ? posRef.current : trailPositions.current[i - 1];
        const trailEase = 0.08 - i * 0.01; // Each trail point is slower
        trail.x += (target.x - trail.x) * Math.max(trailEase, 0.03);
        trail.y += (target.y - trail.y) * Math.max(trailEase, 0.03);

        if (trailRefs.current[i]) {
          const size = 6 - i; // Trail gets smaller
          trailRefs.current[i].style.transform = `translate(${trail.x - size / 2}px, ${trail.y - size / 2}px)`;
        }
      });

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
    <div className="pointer-events-none fixed inset-0 z-9999 hidden md:block">
      {/* Trailing glow dots */}
      {trailPositions.current.map((_, i) => (
        <div
          key={i}
          ref={(el) => (trailRefs.current[i] = el)}
          className="fixed top-0 left-0 rounded-full pointer-events-none"
          style={{
            width: 6 - i,
            height: 6 - i,
            backgroundColor: 'var(--color-accent)',
            opacity: 0.15 - i * 0.025,
            filter: `blur(${1 + i}px)`,
            willChange: 'transform',
          }}
        />
      ))}

      {/* Main cursor dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none transition-[width,height,background-color,border-radius] duration-300 ease-out ${
          isHovering
            ? "w-10 h-10 bg-accent/10 border border-accent/40 rounded-full"
            : isClicking
            ? "w-3 h-3 bg-accent rounded-full"
            : "w-2 h-2 bg-accent/80 rounded-full"
        }`}
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default Cursor;