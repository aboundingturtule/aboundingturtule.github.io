import { motion } from 'motion/react';
import { PROJECTS } from '../constants';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <div className="min-h-screen pb-20 bg-bg selection:bg-accent selection:text-bg">
      {/* Header / Logo Bar */}
      <header className="h-[100px] border-b border-line flex items-center justify-between px-8 lg:px-16 container mx-auto">
        <div className="font-serif italic text-2xl tracking-tight text-text-main">
          Archive / <span className="text-accent">Eng.</span>
        </div>
        <nav className="hidden md:flex gap-10">
          {['Works', 'Practice', 'About', 'Contact'].map((item, idx) => (
            <a 
              key={item} 
              href="#" 
              className={`text-[11px] uppercase tracking-[0.2em] transition-colors ${idx === 0 ? 'text-accent' : 'text-text-dim hover:text-text-main'}`}
            >
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-8 lg:px-16 py-16 lg:py-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 lg:mb-24"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.1] max-w-4xl tracking-tight text-text-main">
            Selected <span className="text-accent italic">Mechanical</span> & Systems Engineering Design Works 2021—2026
          </h1>
        </motion.div>

        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-accent" />
            <span className="font-sans text-[11px] uppercase tracking-[0.2em] text-accent">Selected Projects</span>
          </div>
          <span className="font-sans text-[11px] text-text-dim uppercase tracking-widest">
            {PROJECTS.length} Data Points
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="h-[80px] px-8 lg:px-16 flex items-center justify-between border-t border-line mt-20 text-[11px] text-text-dim font-sans tracking-widest uppercase">
        <div className="flex items-center gap-4">
          <div className="w-10 h-[1px] bg-accent" />
          <span>VIEW MORE PROJECTS</span>
        </div>
        <div className="hidden lg:block">© 2026 STERLING ARCHIVE. ALL RIGHTS RESERVED.</div>
        <div>PORTLAND / GLOBAL</div>
      </footer>
    </div>
  );
}

