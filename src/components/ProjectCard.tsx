import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { ChevronRight } from 'lucide-react';
import React from 'react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="group block">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-card-bg border border-line flex flex-col group hover:border-accent/40 transition-all duration-300"
      >
        <div className="aspect-[4/3] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 relative">
          <img 
            src={project.thumbnail} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          {/* Subtle pattern overlay from theme */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--color-line) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>

        <div className="p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-accent font-medium">
              {project.category}
            </span>
            <span className="w-1 h-1 rounded-full bg-accent/30" />
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-dim">
              {project.date}
            </span>
          </div>

          <h3 className="font-serif text-2xl mb-4 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          <p className="text-sm font-sans text-text-dim line-clamp-2 leading-relaxed mb-6">
            {project.shortDescription}
          </p>

          <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-300">
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold">Details</span>
            <ChevronRight className="w-3 h-3 text-accent" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;

