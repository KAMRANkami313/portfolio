import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Navbar from "../components/sections/Navbar";
import { motion, useScroll, useSpring } from "framer-motion";
import ScrollToTop from "../components/ui/ScrollToTop";
import Particles from "../components/ui/Particles";
import Ripple from "../components/ui/Ripple";
import ClickSparkle from "../components/ui/ClickSparkle";

const Layout = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy?.();
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark text-white antialiased overflow-x-hidden">
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-linear-to-r from-accent via-violet-400 to-fuchsia-400 z-100 origin-left"
        style={{ scaleX }}
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