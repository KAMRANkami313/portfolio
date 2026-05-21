import React from 'react'

const App = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-accent/30">
      <div className="fixed inset-0 -z-10 bg-dark" />
      <div className="container mx-auto px-6">
        <nav className="flex h-20 items-center justify-between">
          <div className="text-xl font-bold tracking-tighter">MK.</div>
          <div className="hidden md:flex gap-8 text-sm text-muted">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </nav>
        <main className="pt-20">
          <h1 className="text-5xl font-bold tracking-tight">Muhammad Kamran</h1>
          <p className="mt-4 text-muted max-w-md">MERN Stack Developer building production-grade web applications.</p>
        </main>
      </div>
    </div>
  )
}

export default App