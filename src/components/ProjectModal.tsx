import { useEffect, useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Play, Image as ImageIcon, ExternalLink, Quote } from 'lucide-react';
import { Project } from '../data/projects';
import { cn } from '../lib/utils';

const getEmbedUrl = (url: string) => {
  if (!url) return '';
  if (url.includes('youtube.com/embed/')) return url;
  
  let videoId = '';
  if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1].split('?')[0];
  } else if (url.includes('youtube.com/shorts/')) {
    videoId = url.split('youtube.com/shorts/')[1].split('?')[0];
  } else if (url.includes('youtube.com/watch?v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  }

  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return url;
};

const LoadedImage = memo(({ src, alt, className, priority = false }: { src: string; alt: string; className?: string; priority?: boolean }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn(
      "relative overflow-hidden transition-all duration-500", 
      className, 
      !isLoaded && "animate-pulse bg-white/5 rounded-xl"
    )}>
      {/* Loading Placeholder with Thematic Gradient */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-dark/60 via-teal-bg/40 to-gold/5 flex items-center justify-center z-10">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
            <span className="text-[8px] uppercase tracking-[0.2em] text-gold/40 font-bold">Loading</span>
          </div>
        </div>
      )}
      
      <img
        src={src}
        alt={alt}
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "transition-all duration-1000 ease-out",
          className?.includes('object-contain') ? "" : "w-full h-auto",
          isLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-105 blur-2xl"
        )}
        onLoad={() => setIsLoaded(true)}
        referrerPolicy="no-referrer"
        decoding="async"
      />
    </div>
  );
});

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (project || activeLightboxImage) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project, activeLightboxImage]);

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
        className={cn(
          "relative w-full overflow-hidden rounded-2xl md:rounded-3xl bg-teal-modal border border-white/10 shadow-2xl flex flex-col md:flex-row h-full max-h-[95vh] md:max-h-[90vh]",
          project.id === 'tianyue-group' ? "max-w-[1400px]" : "max-w-7xl"
        )}
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
          <div className={cn(
            "flex-1 overflow-y-auto overscroll-contain custom-scrollbar bg-teal-modal",
            project.id === 'tianyue-group' ? "p-2 md:p-6" : "p-4 md:p-12"
          )}>
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
                  ? (project.id === 'house-unboxing' ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4")
                  : "flex flex-col gap-2"
              )}>
                {project.content.map((item, index) => (
                  <div key={index} className={cn(
                    "w-full",
                    (item.type === 'text' || item.type === 'grid' || item.type === 'caption' || item.type === 'divider') && 
                    project.aspectRatio === '9/16' && 
                    project.id !== 'house-unboxing' && 
                    "sm:col-span-2 lg:col-span-3"
                  )}>
                    {item.type === 'video-card' ? (
                      <div className="flex flex-col gap-3 mb-8 h-full">
                        <div className="bg-white/[0.05] rounded-lg border border-white/10 backdrop-blur-sm py-5 px-7 relative overflow-hidden sm:min-h-[110px] flex flex-col justify-center">
                          <div className="absolute top-0 left-0 h-full w-2.5 bg-gold" />
                          <Quote className="absolute top-3 right-5 w-8 h-8 text-gold/10 opacity-30" />
                          <p className="text-off-white text-lg sm:text-xl font-bold tracking-wide relative z-10 leading-relaxed">
                            {item.value[0]}
                          </p>
                        </div>
                        <div className="relative rounded-xl overflow-hidden bg-black/20 aspect-[9/16] shadow-xl border border-white/5">
                          <iframe
                            src={getEmbedUrl(item.value[1] as string)}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      </div>
                    ) : item.type === 'divider' ? (
                      <div className="py-8 flex items-center gap-4">
                        <div className="h-px flex-1 bg-white/10" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold/60 whitespace-nowrap">
                          {item.value}
                        </span>
                        <div className="h-px flex-1 bg-white/10" />
                      </div>
                    ) : item.type === 'video' ? (
                      <div className={cn(
                        "relative rounded-xl overflow-hidden bg-black/20 border border-white/5 shadow-lg",
                        project.aspectRatio === '9/16' ? "aspect-[9/16]" : "aspect-video"
                      )}>
                        {(item.value as string).endsWith('.mp4') ? (
                          <video
                            src={item.value as string}
                            className="absolute inset-0 w-full h-full object-cover"
                            controls
                            playsInline
                          />
                        ) : (
                          <iframe
                            src={getEmbedUrl(item.value as string)}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )}
                      </div>
                    ) : item.type === 'image' ? (
                      <div onClick={() => setActiveLightboxImage(item.value as string)} className="cursor-zoom-in">
                        <LoadedImage
                          src={item.value as string}
                          alt={`${project.title} detail ${index}`}
                          priority={index === 0}
                        />
                      </div>
                    ) : item.type === 'grid' ? (
                      <div className={cn(
                        "grid items-start",
                        project.id === 'tianyue-group' ? "grid-cols-2 gap-2 md:gap-4" : (
                          (item.value as string[]).length === 4 ? "grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6" : "grid-cols-2 gap-4 md:gap-6"
                        )
                      )}>
                        {(item.value as string[]).map((url, i) => {
                          const isVideo = url.includes('youtube.com') || url.includes('facebook.com') || url.includes('vimeo.com') || url.includes('fb.watch');
                          return isVideo ? (
                            <div key={i} className={cn(
                              "relative rounded-xl overflow-hidden bg-black/20 w-full shadow-lg",
                              project.aspectRatio === '9/16' ? "aspect-[9/16]" : "aspect-video"
                            )}>
                        {url.endsWith('.mp4') ? (
                          <video
                            src={url}
                            className="absolute inset-0 w-full h-full object-cover"
                            controls
                            playsInline
                          />
                        ) : (
                          <iframe
                            src={url}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        )}
                            </div>
                          ) : (
                            <div key={i} className="w-full cursor-zoom-in" onClick={() => setActiveLightboxImage(url)}>
                              <LoadedImage
                                src={url}
                                alt={`${project.title} grid ${i}`}
                                className="w-full h-auto rounded-xl"
                              />
                            </div>
                          );
                        })}
                      </div>
                    ) : item.type === 'row' ? (
                      <div className={cn(
                        "grid gap-4 md:gap-6",
                        project.id === 'tianyue-group' ? "grid-cols-1 sm:grid-cols-2" : (
                          (item.value as string[]).length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
                        )
                      )}>
                        {(item.value as string[]).map((img, i) => (
                          <div key={i} className="cursor-zoom-in" onClick={() => setActiveLightboxImage(img)}>
                            <LoadedImage
                              src={img}
                              alt={`${project.title} row ${i}`}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (item.type === 'text' || item.type === 'caption') ? (
                      <div className={cn(
                        "bg-white/[0.05] rounded-lg border border-white/10 backdrop-blur-sm relative overflow-hidden group transition-all",
                        index === 0 ? "mt-0" : (
                          (item.type === 'caption' && project.content[index-1]?.type === 'caption') ? "mt-2" : "mt-12"
                        ),
                        item.type === 'text' ? "py-5 px-7 mb-4" : "py-4 px-6 mb-2"
                      )}>
                        <div className={cn(
                          "absolute top-0 left-0 h-full bg-gold transition-colors",
                          item.type === 'text' ? "w-2.5" : "w-1.5"
                        )} />
                        {item.type === 'text' && (
                          <Quote className="absolute top-3 right-5 w-8 h-8 text-gold/10 opacity-30" />
                        )}
                        <p className={cn(
                          "text-off-white tracking-wide relative z-10 leading-relaxed",
                          item.type === 'text' ? "text-xl font-bold" : "text-[14px] font-normal opacity-80"
                        )}>
                          {item.value}
                        </p>
                      </div>
                    ) : (
                      <div className="hidden" />
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
                  <LoadedImage
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full"
                    priority={true}
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

      {/* Nested Image Lightbox */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/95 backdrop-blur-md cursor-zoom-out touch-none"
            onClick={() => setActiveLightboxImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveLightboxImage(null);
                }}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img 
                src={activeLightboxImage} 
                alt="Enlarged view" 
                className="max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
