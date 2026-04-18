import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../constants';
import { ArrowLeft, ExternalLink, Cpu, Calendar, Tag } from 'lucide-react';
import { useEffect } from 'react';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center font-serif text-text-dim">
        <p>PROJECT NOT FOUND</p>
        <Link to="/" className="ml-4 underline text-accent">RETURN TO WORKS</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-32 bg-bg selection:bg-accent selection:text-bg">
      {/* Navigation Rail */}
      <nav className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-line px-8 lg:px-16 py-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-sans tracking-[0.3em] uppercase">
          <Link to="/" className="flex items-center gap-3 text-text-dim hover:text-accent transition-colors">
             BACK TO PORTFOLIO
          </Link>
          <div className="hidden lg:block text-accent/50">{project.title} — {project.category}</div>
          <div className="text-accent font-bold">0{PROJECTS.indexOf(project) + 1}</div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 lg:px-16 mt-16 lg:mt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-accent" />
                <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-accent font-bold">Project File</span>
              </div>

              <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-text-main mb-12">
                {project.title}
              </h1>

              <div className="space-y-8 text-text-main/80 leading-relaxed font-sans max-w-2xl mb-24">
                <p className="text-2xl font-serif italic text-text-dim leading-relaxed">
                  {project.shortDescription}
                </p>
                <div className="h-[1px] w-full bg-line" />
                <p className="text-lg opacity-80 leading-loose">
                  {project.fullDescription}
                </p>
              </div>

              {/* Gallery Section */}
              <section className="space-y-12">
                <div className="flex items-center justify-between border-b border-line pb-4">
                  <h2 className="font-sans text-[10px] uppercase tracking-[0.4em] text-text-dim">Visual Documentation</h2>
                  <span className="font-mono text-[10px] text-accent opacity-40">IMG.SET_0{project.images.length}</span>
                </div>
                <div className="grid grid-cols-1 gap-12">
                  {project.images.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="border border-line p-1 bg-card-bg"
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} documentation ${idx + 1}`}
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"
                        referrerPolicy="no-referrer"
                      />
                    </motion.div>
                  ))}
                </div>
              </section>
            </motion.div>
          </div>

          {/* Right Column: Technical Specs */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-40 space-y-16">
              
              {/* Technical Parameters */}
              {project.stats && (
                <div className="space-y-6">
                  <div className="flex items-center gap-3 font-sans text-[10px] text-accent uppercase tracking-[0.3em] font-bold">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" /> System Specs
                  </div>
                  <div className="border-t border-line space-y-0">
                    {project.stats.map(stat => (
                      <div key={stat.label} className="flex justify-between items-baseline py-5 border-b border-line group">
                        <span className="font-sans text-[10px] text-text-dim uppercase tracking-widest">{stat.label}</span>
                        <span className="font-serif text-lg text-text-main group-hover:text-accent transition-colors">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stack */}
              <div className="space-y-6">
                <div className="font-sans text-[10px] text-text-dim uppercase tracking-[0.3em]">Stack Inventory</div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map(tech => (
                    <span key={tech} className="px-4 py-1.5 border border-line text-[10px] uppercase tracking-[0.1em] text-text-dim hover:border-accent hover:text-accent transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-accent text-bg px-8 py-5 font-sans text-[11px] uppercase tracking-[0.3em] font-bold hover:scale-[1.02] active:scale-[0.98] transition-transform flex items-center justify-center gap-4">
                View Repository <ExternalLink className="w-4 h-4" />
              </button>

            </div>
          </aside>

        </div>
      </main>
    </div>
  );
}

