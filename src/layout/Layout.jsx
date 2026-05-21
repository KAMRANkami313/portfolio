import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from '../components/sections/Navbar';

const Layout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark text-white antialiased">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-blue-500/10 blur-[120px] rounded-full" />
      </div>
      
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;