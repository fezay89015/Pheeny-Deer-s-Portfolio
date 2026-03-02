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
          className="relative w-full max-w-5xl overflow-hidden rounded-3xl bg-teal-dark border border-white/10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 text-white/80 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col md:flex-row h-full max-h-[90vh] overflow-hidden">
            {/* Media Section */}
            <div className="flex-1 bg-black overflow-y-auto custom-scrollbar">
              {project.content && project.content.length > 0 ? (
                <div className="flex flex-col gap-4 p-4">
                  {project.content.map((item, index) => (
                    <div key={index} className="w-full">
                      {item.type === 'video' ? (
                        <iframe
                          src={item.value}
                          className="w-full aspect-video rounded-xl"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : item.type === 'image' ? (
                        <img
                          src={item.value}
                          alt={`${project.title} detail ${index}`}
                          className="w-full h-auto rounded-xl object-contain"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="p-6 text-off-white/80 leading-relaxed text-lg bg-white/5 rounded-xl">
                          {item.value}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex items-center justify-center">
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
              )}
            </div>

            {/* Info Section */}
            <div className="w-full md:w-96 p-6 md:p-8 flex flex-col bg-teal-dark border-l border-white/5 overflow-y-auto custom-scrollbar">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-gold/20 rounded-full text-gold-light">
                    {project.category}
                  </span>
                  {project.type === 'video' ? (
                    <Play className="w-4 h-4 text-gold-light fill-gold-light" />
                  ) : project.type === 'image' ? (
                    <ImageIcon className="w-4 h-4 text-gold-light" />
                  ) : (
                    <ExternalLink className="w-4 h-4 text-gold-light" />
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-off-white mb-4">
                  {project.title}
                </h2>
                <p className="text-off-white/60 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.url && project.type !== 'video' && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full py-4 bg-gold text-teal-dark font-bold rounded-2xl hover:bg-gold-light transition-colors"
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
