import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Image as ImageIcon, ExternalLink } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        />

        {/* Modal Content */}
        <motion.div
          layoutId={`project-${project.id}`}
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-zinc-900 border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/80 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col md:flex-row h-full max-h-[90vh]">
            {/* Media Section */}
            <div className="flex-1 bg-black flex items-center justify-center overflow-hidden">
              {project.type === 'video' && project.url ? (
                <iframe
                  src={project.url}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              )}
            </div>

            {/* Info Section */}
            <div className="w-full md:w-80 p-6 md:p-8 flex flex-col justify-between bg-zinc-900 border-l border-white/5">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/10 rounded-full text-white/80">
                    {project.category}
                  </span>
                  {project.type === 'video' ? (
                    <Play className="w-4 h-4 text-white/60 fill-white/60" />
                  ) : project.type === 'image' ? (
                    <ImageIcon className="w-4 h-4 text-white/60" />
                  ) : (
                    <ExternalLink className="w-4 h-4 text-white/60" />
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {project.title}
                </h2>
                <p className="text-white/60 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.url && project.type !== 'video' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-2xl hover:bg-zinc-200 transition-colors"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
