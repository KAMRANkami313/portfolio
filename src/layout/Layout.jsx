import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import Navbar from "../components/sections/Navbar";
import ScrollToTop from "../components/ui/ScrollToTop";
import Particles from "../components/ui/Particles";
import Ripple from "../components/ui/Ripple";
import ClickSparkle from "../components/ui/ClickSparkle";

const Layout = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    return () => {
      lenis.destroy?.();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // CSS-only scroll progress — uses passive listener + CSS transform (GPU composited)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark text-white antialiased overflow-x-hidden">
      {/* Scroll progress bar — CSS transform, no framer-motion */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-accent via-violet-400 to-fuchsia-400 z-100 origin-left will-animate"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <div className="noise" />

      <Particles />

      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(var(--color-accent-rgb, 99, 102, 241), 0.04), transparent 80%)`,
        }}
      />

      <Ripple />
      <ClickSparkle />

      <Navbar />
      <main className="relative z-10">{children}</main>
      <ScrollToTop />
    </div>
  );
};

export default Layout;