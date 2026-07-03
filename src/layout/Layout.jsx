import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import Navbar from "../components/sections/Navbar";
import ScrollToTop from "../components/ui/ScrollToTop";
import Particles from "../components/ui/Particles";
import MouseGlow from "../components/ui/MouseGlow";
import ScrollProgress from "../components/ui/ScrollProgress";

const Layout = ({ children, onAchievementsClick }) => {
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

  return (
    <div className="relative min-h-screen bg-dark antialiased overflow-x-hidden">
      <ScrollProgress />
      <div className="bg-noise" aria-hidden="true" />
      <Particles />
      <MouseGlow />
      <Navbar onAchievementsClick={onAchievementsClick} />
      <main className="relative z-10">{children}</main>
      <ScrollToTop />
    </div>
  );
};

export default Layout;