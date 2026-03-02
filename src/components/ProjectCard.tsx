import { motion } from 'motion/react';
import { Play, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';
import { cn } from '../lib/utils';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
  key?: string | number;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-2 row-span-1',
    large: 'col-span-2 row-span-2',
    wide: 'col-span-2 row-span-1',
    tall: 'col-span-1 row-span-2',
  };

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      onClick={() => onClick(project)}
      className={cn(
        'group relative overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer border border-white/5',
        sizeClasses[project.size]
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {/* Background Image */}
      <img
        src={project.thumbnail}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
        referrerPolicy="no-referrer"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-1 text-[10px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-md rounded-full text-white/80 border border-white/10">
            {project.category}
          </span>
          {project.type === 'video' ? (
            <Play className="w-3 h-3 text-white/60 fill-white/60" />
          ) : project.type === 'image' ? (
            <ImageIcon className="w-3 h-3 text-white/60" />
          ) : (
            <ExternalLink className="w-3 h-3 text-white/60" />
          )}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-white/60 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}
