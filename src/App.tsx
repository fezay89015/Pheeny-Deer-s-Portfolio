import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Star,
  ChevronDown,
  ArrowDown,
  Plus
} from 'lucide-react';
import { projects, Project } from './data/projects';
import { ProjectCard } from './components/ProjectCard';
import { ProjectModal } from './components/ProjectModal';
import { cn } from './lib/utils';

// --- Background Decorations ---
const FourPointStar = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
  </svg>
);

const SixPointStar = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0 L14.4 8.4 L12 5.5 L9.6 8.4 Z M24 12 L15.6 14.4 L18.5 12 L15.6 9.6 Z M12 24 L9.6 15.6 L12 18.5 L14.4 15.6 Z M0 12 L8.4 9.6 L5.5 12 L8.4 14.4 Z M14.4 8.4 L15.6 9.6 L18.5 12 L15.6 14.4 L14.4 15.6 L12 18.5 L9.6 15.6 L8.4 14.4 L5.5 12 L8.4 9.6 L9.6 8.4 L12 5.5 Z" />
  </svg>
);

const DiamondDot = ({ size = 6, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" fill="currentColor" className={className}>
    <path d="M4 0 L8 4 L4 8 L0 4 Z" />
  </svg>
);

interface StarConfig {
  type: "four" | "six" | "diamond";
  size: number;
  x: string;
  y: string;
  opacity: number;
  delay: number;
  rotate?: number;
}

const StarDecorations = ({ stars }: { stars: StarConfig[] }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: star.opacity, scale: 1 }}
          transition={{ duration: 1.2, delay: star.delay, ease: "easeOut" }}
          className="absolute text-gold"
          style={{ left: star.x, top: star.y, rotate: star.rotate ?? 0 }}
        >
          {star.type === "four" && <FourPointStar size={star.size} />}
          {star.type === "six" && <SixPointStar size={star.size} />}
          {star.type === "diamond" && <DiamondDot size={star.size} />}
        </motion.div>
      ))}
    </div>
  );
};

const heroStars: StarConfig[] = [
  { type: "four", size: 28, x: "8%", y: "15%", opacity: 0.25, delay: 0.5, rotate: 15 },
  { type: "six", size: 22, x: "85%", y: "12%", opacity: 0.2, delay: 0.8 },
  { type: "diamond", size: 8, x: "15%", y: "35%", opacity: 0.3, delay: 0.3 },
  { type: "four", size: 14, x: "92%", y: "40%", opacity: 0.18, delay: 1.0, rotate: 30 },
  { type: "diamond", size: 6, x: "78%", y: "25%", opacity: 0.25, delay: 0.6 },
  { type: "six", size: 16, x: "5%", y: "70%", opacity: 0.15, delay: 1.2 },
  { type: "four", size: 12, x: "88%", y: "75%", opacity: 0.2, delay: 0.9, rotate: 45 },
  { type: "diamond", size: 7, x: "25%", y: "80%", opacity: 0.22, delay: 0.7 },
  { type: "four", size: 18, x: "70%", y: "65%", opacity: 0.15, delay: 1.4, rotate: 10 },
  { type: "diamond", size: 5, x: "50%", y: "20%", opacity: 0.2, delay: 0.4 },
  { type: "six", size: 12, x: "40%", y: "85%", opacity: 0.12, delay: 1.6 },
  { type: "diamond", size: 6, x: "60%", y: "50%", opacity: 0.18, delay: 0.5 },
];

const portfolioStars: StarConfig[] = [
  { type: "four", size: 20, x: "3%", y: "5%", opacity: 0.15, delay: 0.2, rotate: 20 },
  { type: "diamond", size: 7, x: "95%", y: "8%", opacity: 0.2, delay: 0.4 },
  { type: "six", size: 14, x: "97%", y: "50%", opacity: 0.12, delay: 0.6 },
  { type: "four", size: 10, x: "2%", y: "60%", opacity: 0.18, delay: 0.8, rotate: 35 },
  { type: "diamond", size: 5, x: "90%", y: "90%", opacity: 0.15, delay: 1.0 },
];

const aboutStars: StarConfig[] = [
  { type: "six", size: 18, x: "90%", y: "10%", opacity: 0.18, delay: 0.3 },
  { type: "four", size: 14, x: "5%", y: "20%", opacity: 0.15, delay: 0.5, rotate: 25 },
  { type: "diamond", size: 7, x: "85%", y: "45%", opacity: 0.2, delay: 0.7 },
  { type: "four", size: 22, x: "8%", y: "80%", opacity: 0.12, delay: 0.9, rotate: 15 },
  { type: "diamond", size: 6, x: "92%", y: "85%", opacity: 0.18, delay: 1.1 },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [isScrolled, setIsScrolled] = useState(false);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['ALL', 'Motion Graphics', '影音特效', '插畫創作', '平面設計'];

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'ALL') return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  return (
    <div className="min-h-screen bg-teal-bg text-off-white selection:bg-gold selection:text-teal-dark">
      {/* Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        isScrolled ? "bg-teal-bg/30 backdrop-blur-xl py-4" : "bg-transparent py-8"
      )}>
        <div className="max-w-7xl mx-auto px-12 flex items-center justify-end">
          <nav className="flex items-center gap-12">
            <a href="#home" className="text-sm font-medium tracking-widest text-off-white/60 hover:text-gold transition-colors uppercase">Home</a>
            <a href="#works" className="text-sm font-medium tracking-widest text-off-white/60 hover:text-gold transition-colors uppercase">Works</a>
            <a href="#about" className="text-sm font-medium tracking-widest text-off-white/60 hover:text-gold transition-colors uppercase">About</a>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center p-6 relative overflow-hidden">
        <StarDecorations stars={heroStars} />
        <div className="home-border w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center z-10"
          >
            {/* Logo Placeholder */}
            <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-12 relative">
              <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/deer-logo/200/200" 
                  alt="Logo" 
                  className="w-full h-full object-cover opacity-80 grayscale sepia brightness-125"
                />
              </div>
            </div>

            <div className="flex items-center gap-4 text-off-white/60 text-sm font-medium tracking-[0.3em] mb-6">
              <span>✦</span> 歡迎來到我的作品集 <span>✦</span>
            </div>

            <h2 className="text-7xl md:text-9xl font-bold tracking-tight mb-4">
              陳宏威
            </h2>
            <p className="text-3xl md:text-4xl text-gold italic font-medium mb-12 tracking-wide">
              Chen HongWei
            </p>

            <p className="text-lg md:text-xl text-off-white/60 tracking-[0.5em] font-light">
              動態影像 ‧ 插畫 ‧ 平面設計
            </p>
          </motion.div>

          {/* Scroll Down */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 flex flex-col items-center gap-2 text-off-white/30"
          >
            <span className="text-[10px] uppercase tracking-[0.3em]">探索作品</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="px-6 py-40 max-w-7xl mx-auto relative">
        <StarDecorations stars={portfolioStars} />
        <div className="flex flex-col items-center mb-16 gap-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(6); // Reset count on category change
                }}
                className={cn(
                  "px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 border uppercase tracking-widest",
                  activeCategory === cat
                    ? "bg-gold text-teal-dark border-gold shadow-lg shadow-gold/20"
                    : "bg-transparent text-off-white/40 border-white/10 hover:border-gold/40 hover:text-gold"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px] md:auto-rows-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-16 flex justify-center">
            <button 
              onClick={handleLoadMore}
              className="flex items-center gap-3 px-10 py-4 rounded-full border border-gold/40 text-gold font-bold text-sm uppercase tracking-widest hover:bg-gold hover:text-teal-dark transition-all group"
            >
              <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
              顯示更多作品
            </button>
          </div>
        )}
      </section>

      {/* Resume Section (About) */}
      <section id="about" className="py-32 px-6 bg-teal-dark/30 border-y border-white/5 relative">
        <StarDecorations stars={aboutStars} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Photo & Skills */}
            <div className="lg:col-span-4 space-y-16 lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gold/5 rounded-[40px] blur-2xl group-hover:bg-gold/10 transition-all" />
                <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&q=80&w=1200&h=1600" 
                    alt="陳宏威" 
                    className="w-full h-full object-cover grayscale-[0.1] contrast-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-xl border-4 border-teal-bg">
                  <Star className="w-10 h-10 text-teal-dark fill-teal-dark" />
                </div>
              </motion.div>

              <div className="space-y-8">
                <div className="flex items-center gap-3 text-gold">
                  <BookOpen className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">主要技能 Skills</h3>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    { label: '平面 / 插畫', skills: ['Ps', 'Ai', 'Procreate'] },
                    { label: 'MG 動畫', skills: ['Ae', 'Blender'] },
                    { label: '影音編輯', skills: ['Pr', 'Au'] }
                  ].map(group => (
                    <div key={group.label} className="p-4 rounded-xl bg-teal-dark/40 border border-white/5">
                      <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-3">{group.label}</h4>
                      <div className="flex flex-wrap gap-2">
                        {group.skills.map(s => (
                          <span key={s} className="px-3 py-1 rounded-lg bg-gold/10 text-gold text-xs font-bold border border-gold/20">{s}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Info & Experience */}
            <div className="lg:col-span-8 space-y-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">關於我 <span className="text-gold italic">About Me</span></h2>
                <div className="space-y-6 text-lg text-off-white/70 leading-relaxed">
                  <p>
                    我是<span className="text-off-white font-bold">陳宏威 (Chen HongWei)</span>，曾任職動態影像設計師並有動畫接案經驗，熟悉電腦操作與軟體學習能力快。
                  </p>
                  <p>
                    在北科大互動設計系就讀時，參與多次跨領域專案，培養了協作與獨立解決問題的能力。曾擔任熱舞社教學長與舞蹈大賽總召，能規劃活動並應對現場突發狀況。
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div className="flex items-center gap-4 text-gold">
                  <Briefcase className="w-8 h-8" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">經歷 Experience</h3>
                </div>
                
                <div className="space-y-12 relative">
                  {/* Timeline Line */}
                  <div className="absolute left-[15px] top-2 bottom-0 w-px timeline-line-solid" />
                  
                  {/* Past: 雅米 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold/30 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-gold/30" />
                    </div>
                    <span className="text-gold/40 font-mono text-xs tracking-widest">2024 - 2025</span>
                    <h4 className="text-lg font-bold mt-2 text-off-white/60">雅米創意有限公司</h4>
                    <p className="text-gold/40 text-sm font-medium">動畫影像設計師</p>
                  </div>

                  {/* Past: 北科塔羅 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold/30 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-gold/30" />
                    </div>
                    <span className="text-gold/40 font-mono text-xs tracking-widest">2025</span>
                    <h4 className="text-lg font-bold mt-2 text-off-white/60">北科霓享塔羅社</h4>
                    <p className="text-gold/40 text-sm font-medium">課堂講師 / 美宣攝影</p>
                  </div>

                  {/* Current: 卓蘭 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span className="text-gold font-mono text-sm tracking-widest">2025 - 至今</span>
                    <h4 className="text-2xl font-bold mt-2">國立卓蘭高級中等學校</h4>
                    <p className="text-gold/80 text-base font-medium">社團活動指導老師</p>
                  </div>

                  {/* Current: 丞筠 */}
                  <div className="relative pl-12">
                    <div className="absolute left-0 top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                    </div>
                    <span className="text-gold font-mono text-sm tracking-widest">2026 - 至今</span>
                    <h4 className="text-2xl font-bold mt-2">丞筠科研生技股份有限公司</h4>
                    <p className="text-gold/80 text-base font-medium">行銷設計專員</p>
                  </div>

                  {/* Down Arrow at bottom of timeline */}
                  <div className="absolute left-[7px] -bottom-8 text-gold opacity-30">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-3 text-gold">
                  <GraduationCap className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">教育 Education</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-teal-dark/40 border border-white/5">
                    <span className="text-gold font-mono text-sm">2019 - 2023</span>
                    <h4 className="text-lg font-bold mt-2">國立臺北科技大學</h4>
                    <p className="text-off-white/60 text-sm">互動設計系</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-teal-dark/40 border border-white/5">
                    <span className="text-gold font-mono text-sm">2016 - 2019</span>
                    <h4 className="text-lg font-bold mt-2">嘉義高商</h4>
                    <p className="text-off-white/60 text-sm">廣告設計科</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-dark/40 border-t border-white/5 py-24 px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
          {/* Left: Description & Social */}
          <div className="max-w-md space-y-6">
            <p className="text-off-white/40 text-lg leading-relaxed font-light italic">
              "融合設計、動態與手作的視覺創作者。<br />
              致力於在數位與感性之間尋找完美的平衡點。"
            </p>
            <a href="https://www.instagram.com/pheeny_deer" target="_blank" className="inline-flex items-center gap-3 text-off-white/60 hover:text-gold transition-all group">
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium tracking-widest">@pheeny_deer</span>
            </a>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col gap-6 md:items-end">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold/40">Contact</h4>
            <div className="flex flex-col gap-3 md:items-end">
              <a href="mailto:hare2353363@gmail.com" className="text-lg text-off-white/70 hover:text-gold transition-colors font-medium">
                hare2353363@gmail.com
              </a>
              <p className="text-sm text-off-white/40 tracking-widest">
                0905981157 ‧ Taipei, Taiwan
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/5 flex justify-between items-center">
          <p className="text-white/10 text-[10px] uppercase tracking-[0.5em]">
            © {new Date().getFullYear()} Pheey' Portfolio
          </p>
          <div className="flex gap-8">
            <Star className="w-3 h-3 text-white/5 fill-white/5" />
            <Star className="w-3 h-3 text-white/5 fill-white/5" />
            <Star className="w-3 h-3 text-white/5 fill-white/5" />
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
