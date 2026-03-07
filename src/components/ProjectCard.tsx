import { memo } from 'react';
import { motion } from 'motion/react';
import { Play, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  key?: string | number;
}

export const ProjectCard = memo(({ project, onClick }: ProjectCardProps) => {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={() => onClick(project)}
      className="group relative overflow-hidden rounded-2xl bg-teal-dark/40 cursor-pointer border border-white/10 aspect-[4/5] sm:aspect-video"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Background Image */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />

      {/* Overlay - Lighter and focused at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-40 transition-opacity duration-300 group-hover:opacity-70" />

      {/* Content - Positioned at bottom */}
      <div className="absolute inset-x-0 bottom-0 p-3 md:p-5 flex flex-col justify-end">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {project.categories.map((cat, i) => (
            <span key={i} className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-gold text-teal-dark rounded-full">
              {cat}
            </span>
          ))}
        </div>
        
        <h3 className="text-base md:text-lg font-bold text-white leading-tight line-clamp-2 transition-colors group-hover:text-white">
          {project.title}
        </h3>
        
        {/* Description - Only on hover, slide up effect */}
        <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-in-out">
          <p className="mt-2 text-[11px] text-off-white/60 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
});
