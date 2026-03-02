import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LayoutGrid, Play, Image as ImageIcon, Github, Mail, Instagram, Twitter } from 'lucide-react';
import { projects, Project } from './data/projects';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { cn } from './lib/utils';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = useMemo(() => {
    const cats = projects.map((p) => p.category);
    return ['All', ...Array.from(new Set(cats))];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-xl border-bottom border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
              <LayoutGrid className="text-black w-6 h-6" />
            </div>
            <h1 className="text-xl font-bold tracking-tighter uppercase italic">
              Sketch Reel Box
            </h1>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
            {['Work', 'About', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Creative <span className="text-white/40 italic">Portfolio</span>
          </h2>
          <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-12">
            A curated collection of sketches, video reels, and digital designs. 
            Focused on visual storytelling and interactive experiences.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border",
                  activeCategory === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-white/60 border-white/10 hover:border-white/40 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Bento Grid */}
      <main className="px-6 pb-40 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-white/5 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <LayoutGrid className="text-black w-5 h-5" />
              </div>
              <h1 className="text-lg font-bold tracking-tighter uppercase italic">
                Sketch Reel Box
              </h1>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Building digital experiences that blend art and technology. 
              Available for freelance projects and collaborations.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/20">Social</h4>
            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" /> Instagram
              </a>
              <a href="#" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" /> Twitter
              </a>
              <a href="#" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                <Github className="w-5 h-5" /> GitHub
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white/20">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@sketchreelbox.com" className="text-white/60 hover:text-white transition-colors">
                hello@sketchreelbox.com
              </a>
              <p className="text-white/40 text-sm">
                Based in Taipei, Taiwan. <br />
                Working worldwide.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Sketch Reel Box. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/20 text-xs hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/20 text-xs hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
