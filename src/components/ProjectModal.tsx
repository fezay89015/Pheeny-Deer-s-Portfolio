import { useEffect } from 'react';
import { motion } from 'motion/react';
import { X, Play, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';
import { cn } from '../lib/utils';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-8">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/95 backdrop-blur-xl"
      />

      {/* Modal Content */}
      <motion.div
        layoutId={`project-${project.id}`}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-6xl overflow-hidden rounded-2xl md:rounded-3xl bg-teal-modal border border-white/10 shadow-2xl flex flex-col md:flex-row h-full max-h-[95vh] md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/50 text-white/80 hover:bg-white/20 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
          {/* Mobile Sticky Title */}
          <div className="md:hidden p-5 bg-teal-dark border-b border-white/5 z-20 shrink-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {project.categories.map((cat, i) => (
                <span key={i} className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-gold/10 border border-gold/20 rounded-full text-gold">
                  {cat}
                </span>
              ))}
            </div>
            <h2 className="text-xl font-bold text-off-white leading-tight">
              {project.title}
            </h2>
          </div>

          {/* Media & Mobile Description Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-6 bg-teal-modal">
            {/* Mobile-only Description (at the top of scroll) */}
            <div className="md:hidden mb-8 pb-8 border-b border-white/5 space-y-4">
              <p className="text-sm text-off-white/60 leading-relaxed">
                {project.description}
              </p>
              {project.url && project.type !== 'video' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-gold text-teal-dark font-bold rounded-2xl"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {project.content && project.content.length > 0 ? (
              <div className={cn(
                "w-full",
                project.aspectRatio === '9/16' 
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" 
                  : "flex flex-col gap-6"
              )}>
                {project.content.map((item, index) => (
                  <div key={index} className={cn(
                    "w-full",
                    item.type === 'text' && project.aspectRatio === '9/16' && "sm:col-span-2 lg:col-span-3"
                  )}>
                    {item.type === 'video' ? (
                      <div className={cn(
                        "relative rounded-xl overflow-hidden bg-black/20",
                        project.aspectRatio === '9/16' ? "aspect-[9/16]" : "aspect-video"
                      )}>
                        <iframe
                          src={item.value}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : item.type === 'image' ? (
                      <img
                        src={item.value}
                        alt={`${project.title} detail ${index}`}
                        className="w-full h-auto rounded-xl object-contain"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="p-6 text-off-white/80 leading-relaxed text-base bg-white/5 rounded-xl border border-white/5">
                        {item.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                {project.type === 'video' && project.url ? (
                  <div className={cn(
                    "relative rounded-xl overflow-hidden bg-black/20 w-full",
                    project.aspectRatio === '9/16' ? "aspect-[9/16] max-w-[350px]" : "aspect-video"
                  )}>
                    <iframe
                      src={project.url}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-contain rounded-xl"
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            )}
          </div>

          {/* Desktop Info Sidebar */}
          <div className="hidden md:flex w-72 lg:w-80 p-8 flex-col bg-teal-dark border-l border-white/5 overflow-y-auto custom-scrollbar shrink-0">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              {project.categories.map((cat, i) => (
                <span key={i} className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-gold/10 border border-gold/20 rounded-full text-gold">
                  {cat}
                </span>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4 leading-tight">
              {project.title}
            </h2>
            <p className="text-sm md:text-base text-off-white/60 leading-relaxed">
              {project.description}
            </p>

            {project.url && project.type !== 'video' && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-8 flex items-center justify-center gap-2 w-full py-4 bg-gold text-teal-dark font-bold rounded-2xl hover:bg-gold-light transition-colors"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
