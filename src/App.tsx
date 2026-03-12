import { useState, useMemo, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  Mail, 
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
// --- Configuration: Update your image URLs here ---
const LOGO_URL = "https://github.com/user-attachments/assets/e40b1e8e-baaa-4c44-ac1e-19c844574f0d"; 
const ABOUT_IMAGE_URL = "https://github.com/user-attachments/assets/12e3a0e7-13de-497d-964a-3e8838b20acc";

// --- Background Decorations ---
const FourPointStar = memo(({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
  </svg>
));

const SixPointStar = memo(({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0 L14.4 8.4 L12 5.5 L9.6 8.4 Z M24 12 L15.6 14.4 L18.5 12 L15.6 9.6 Z M12 24 L9.6 15.6 L12 18.5 L14.4 15.6 Z M0 12 L8.4 9.6 L5.5 12 L8.4 14.4 Z M14.4 8.4 L15.6 9.6 L18.5 12 L15.6 14.4 L14.4 15.6 L12 18.5 L9.6 15.6 L8.4 14.4 L5.5 12 L8.4 9.6 L9.6 8.4 L12 5.5 Z" />
  </svg>
));

const DiamondDot = memo(({ size = 6, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 8 8" fill="currentColor" className={className}>
    <path d="M4 0 L8 4 L4 8 L0 4 Z" />
  </svg>
));

const RoundedCrossStar = memo(({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C12 8 16 12 24 12C16 12 12 16 12 24C12 16 8 12 0 12C8 12 12 8 12 0Z" />
  </svg>
));

interface StarConfig {
  type: "four" | "six" | "diamond";
  size: number;
  x: string;
  y: string;
  opacity: number;
  delay: number;
  rotate?: number;
}

const StarDecorations = memo(({ stars }: { stars: StarConfig[] }) => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Shooting Stars */}
      <div className="shooting-star" style={{ top: '10%', left: '20%', animationDelay: '0s' }} />
      <div className="shooting-star" style={{ top: '30%', left: '70%', animationDelay: '2s' }} />
      <div className="shooting-star" style={{ top: '60%', left: '40%', animationDelay: '4s' }} />
      <div className="shooting-star" style={{ top: '15%', left: '85%', animationDelay: '1s' }} />
      
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: star.opacity, scale: 1 }}
          transition={{ duration: 1.2, delay: star.delay, ease: "easeOut" }}
          className="absolute text-gold"
          style={{ 
            left: star.x, 
            top: star.y, 
            rotate: star.rotate ?? 0,
            willChange: 'opacity, transform'
          }}
        >
          {star.type === "four" && <FourPointStar size={star.size} />}
          {star.type === "six" && <SixPointStar size={star.size} />}
          {star.type === "diamond" && <DiamondDot size={star.size} />}
        </motion.div>
      ))}
    </div>
  );
});

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

  // Sequential Image Preloading
  useEffect(() => {
    const preloadImages = () => {
      // 1. Preload About Photo immediately after initial load
      const aboutImg = new Image();
      aboutImg.src = ABOUT_IMAGE_URL;
      
      // 2. Preload only the first 8 Project Thumbnails to save bandwidth for active interactions
      const timer = setTimeout(() => {
        projects.slice(0, 8).forEach(project => {
          if (project.thumbnail) {
            const img = new Image();
            img.src = project.thumbnail;
          }
        });
      }, 2000);

      return () => clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      preloadImages();
    } else {
      window.addEventListener('load', preloadImages);
      return () => window.removeEventListener('load', preloadImages);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = ['ALL', 'Motion Graphics', '影音特效', '插畫創作', '平面設計'];

  const filteredProjects = useMemo(() => {
    const filtered = activeCategory === 'ALL' 
      ? projects 
      : projects.filter(p => p.categories.includes(activeCategory));
    
    // Sort by date descending
    return [...filtered].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [activeCategory]);

  const displayedProjects = useMemo(() => {
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount]);

  const preloadProjectContent = (project: Project) => {
    if (!project.content) return;
    project.content.forEach(item => {
      if (item.type === 'image') {
        const img = new Image();
        img.src = item.value as string;
      } else if (item.type === 'grid' || item.type === 'row') {
        (item.value as string[]).forEach(src => {
          const img = new Image();
          img.src = src;
        });
      }
    });
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return (
    <div className="min-h-screen bg-teal-bg text-off-white selection:bg-gold selection:text-teal-dark">
      {/* Header */}
      <header className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
        isScrolled ? "bg-teal-bg/30 backdrop-blur-xl py-4" : "bg-transparent pt-14 pb-8"
      )}>
        <div className="max-w-7xl mx-auto px-12 flex items-center justify-end">
          <nav className="flex items-center gap-12 font-serif">
            <a href="#home" className="text-sm font-medium tracking-widest text-off-white/60 hover:text-gold transition-colors uppercase">Home</a>
            <a href="#works" className="text-sm font-medium tracking-widest text-off-white/60 hover:text-gold transition-colors uppercase">Works</a>
            <a href="#about" className="text-sm font-medium tracking-widest text-off-white/60 hover:text-gold transition-colors uppercase">About</a>
          </nav>
        </div>
      </header>

      {/* Home Section */}
      <section id="home" className="h-screen flex items-center justify-center p-2 md:p-6 relative overflow-hidden">
        <StarDecorations stars={heroStars} />
        <div className="home-border w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center z-10"
          >
            {/* Logo */}
            <div className="w-32 h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-12 relative">
              <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center overflow-hidden">
                  <img 
                    src={LOGO_URL} 
                    alt="Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                    decoding="async"
                    fetchPriority="high"
                  />
              </div>
            </div>

            <div className="flex flex-col items-center mb-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-[0.1em] font-script leading-none opacity-60">
                Pheeny's
              </h2>
              <h2 className="text-7xl md:text-9xl font-bold tracking-[0.1em] font-script leading-none">
                PORTFOLIO
              </h2>
            </div>
            
            <p className="text-3xl md:text-5xl text-gold font-ming font-black mb-6 tracking-[0.2em]">
              斐尼鹿 作品集
            </p>

            <p className="text-base md:text-lg text-off-white/60 tracking-[0.4em] font-light px-6 md:px-0">
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

      {/* Showreels Section */}
      <section id="showreels" className="py-32 px-6 max-w-7xl mx-auto relative">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">Showreels</h2>
          <div className="w-12 h-1 bg-gold rounded-full" />
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/20 group">
          <iframe
            src="https://www.youtube.com/embed/f6VYCaD-5NA"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
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
                    ? "bg-gold text-teal-dark border-gold shadow-lg shadow-gold/40"
                    : "bg-white/5 text-off-white/60 border-white/20 hover:border-gold/60 hover:text-gold hover:bg-white/10"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onClick={setSelectedProject}
                onMouseEnter={() => preloadProjectContent(project)}
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
          <div className="flex flex-col md:grid md:grid-cols-12 gap-12 lg:gap-24 items-start">
            
            {/* Left Column: Photo & Skills */}
            <div className="md:col-span-5 lg:col-span-4 w-full space-y-12 lg:sticky lg:top-32">
              {/* Photo */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group max-w-[280px] md:max-w-full mx-auto"
              >
                <div className="absolute -inset-4 bg-gold/5 rounded-[40px] blur-2xl group-hover:bg-gold/10 transition-all" />
                <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[32px] overflow-hidden border border-white/10 shadow-2xl bg-teal-dark/50 flex items-center justify-center">
                  <img 
                    src={ABOUT_IMAGE_URL} 
                    alt="陳宏威" 
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 md:w-20 md:h-20 bg-gold rounded-full flex items-center justify-center shadow-xl border-4 border-teal-bg">
                  <RoundedCrossStar size={32} className="text-teal-dark" />
                </div>
              </motion.div>

              {/* Skills */}
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

            {/* Right Column: About & Experience */}
            <div className="md:col-span-7 lg:col-span-8 w-full space-y-16">
              {/* About Me */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">關於我 <span className="text-gold italic">About Me</span></h2>
                <div className="space-y-6 text-lg text-off-white/70 leading-relaxed">
                  <p>
                    我是陳宏威。高中開始對動畫產生興趣，大學進入北科大互動系後正式學習 After Effects。曾於台北擔任一年動態影像設計師，負責 2D Motion Graphics 與影音特效後製，這段經歷讓我熟悉了從腳本到製作實務上的專案節奏，也更清楚如何處理畫面中的細節。
                  </p>
                  <p>
                    動態設計、插畫是我最習慣的表達形式。設計專業外，在跳舞對律動和音樂拆解的理解、在塔羅神祕學對人事物的觀察力、在手作編織對細膩手工的耐心，這些元素都是我創作的一部分，讓我能從不同維度切入創作的可能性。
                  </p>
                  <p>
                    目前我在一間藝術餐廳任職行銷設計，工作之餘正著手規劃原創角色「斐尼鹿」的系列插畫，並嘗試與編織等手作形式結合。未來我會繼續在動態影像領域深耕，透過各種形式的美，創造能讓人感受到療癒的作品。
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-10">
                <div className="flex items-center gap-3 text-gold">
                  <Briefcase className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">經歷 Experience</h3>
                </div>
                
                <div className="space-y-8 relative ml-4 pb-32">
                  {/* Timeline Line */}
                  <div 
                    className="absolute left-[-1px] top-2 bottom-0 w-[2px]" 
                    style={{
                      background: 'linear-gradient(to bottom, rgba(212, 182, 124, 0.2) 0%, rgba(212, 182, 124, 0.2) 46%, rgba(212, 182, 124, 1) 46%, rgba(212, 182, 124, 1) 69%, transparent 100%)'
                    }}
                  />
                  
                  {/* Past: 北科熱舞 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-[-17px] top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold/75 group-hover:border-gold flex items-center justify-center z-10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gold/75 group-hover:bg-gold transition-colors" />
                    </div>
                    <span className="text-gold/60 group-hover:text-gold font-mono text-xs tracking-widest transition-colors">2020</span>
                    <h4 className="text-gold/60 group-hover:text-gold/80 text-sm font-medium mt-2 transition-colors">北科熱舞社</h4>
                    <p className="text-lg font-bold text-off-white/90 group-hover:text-off-white transition-colors">Jazz組教學長 / Hug全國舞蹈大賽 總召</p>
                  </div>

                  {/* Past: 霓享塔羅 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-[-17px] top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold/75 group-hover:border-gold flex items-center justify-center z-10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gold/75 group-hover:bg-gold transition-colors" />
                    </div>
                    <span className="text-gold/60 group-hover:text-gold font-mono text-xs tracking-widest transition-colors">2022</span>
                    <h4 className="text-gold/60 group-hover:text-gold/80 text-sm font-medium mt-2 transition-colors">北科霓享塔羅社</h4>
                    <p className="text-lg font-bold text-off-white/90 group-hover:text-off-white transition-colors">美宣長 / 攝影長</p>
                  </div>

                  {/* Past: 雅米 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-[-17px] top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold/75 group-hover:border-gold flex items-center justify-center z-10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gold/75 group-hover:bg-gold transition-colors" />
                    </div>
                    <span className="text-gold/60 group-hover:text-gold font-mono text-xs tracking-widest transition-colors">2024 - 2025</span>
                    <h4 className="text-gold/60 group-hover:text-gold/80 text-sm font-medium mt-2 transition-colors">雅米創意有限公司</h4>
                    <p className="text-lg font-bold text-off-white/90 group-hover:text-off-white transition-colors">動畫影像設計師</p>
                  </div>

                  {/* Past: 北科塔羅講師 */}
                  <div className="relative pl-12 group">
                    <div className="absolute left-[-17px] top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold/75 group-hover:border-gold flex items-center justify-center z-10 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-gold/75 group-hover:bg-gold transition-colors" />
                    </div>
                    <span className="text-gold/60 group-hover:text-gold font-mono text-xs tracking-widest transition-colors">2025</span>
                    <h4 className="text-gold/60 group-hover:text-gold/80 text-sm font-medium mt-2 transition-colors">北科霓享塔羅社</h4>
                    <p className="text-lg font-bold text-off-white/90 group-hover:text-off-white transition-colors">蠟線礦石手鍊 編織體驗課 課堂講師</p>
                  </div>

                  {/* Current: 卓蘭 */}
                  <div className="relative pl-12">
                    <div className="absolute left-[-17px] top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold/75 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-gold/75" />
                    </div>
                    <span className="text-gold font-mono text-sm tracking-widest">2025 - 至今</span>
                    <h4 className="text-gold/80 text-sm md:text-base font-medium mt-2">國立卓蘭高級中等學校</h4>
                    <p className="text-lg md:text-2xl font-bold">高中部熱舞社 社團活動指導老師</p>
                  </div>

                  {/* Current: 丞筠 */}
                  <div className="relative pl-12">
                    <div className="absolute left-[-17px] top-2 w-8 h-8 rounded-full bg-teal-bg border border-gold/75 flex items-center justify-center z-10">
                      <div className="w-2 h-2 rounded-full bg-gold/75" />
                    </div>
                    <span className="text-gold font-mono text-sm tracking-widest">2026 - 至今</span>
                    <h4 className="text-gold/80 text-sm md:text-base font-medium mt-2">丞筠科研生技股份有限公司</h4>
                    <p className="text-lg md:text-2xl font-bold">行銷設計專員</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section - Full width on tablet, column on desktop */}
            <div className="md:col-span-12 lg:col-start-5 lg:col-span-8 mt-16 lg:mt-0">
              <div className="space-y-10">
                <div className="flex items-center gap-3 text-gold">
                  <GraduationCap className="w-6 h-6" />
                  <h3 className="text-xl font-bold uppercase tracking-widest">教育 Education</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-teal-dark/40 border border-white/5">
                    <span className="text-gold font-mono text-sm">2019 - 2023</span>
                    <h4 className="text-lg font-bold mt-2">國立臺北科技大學</h4>
                    <p className="text-off-white/60 text-sm mb-4">互動設計系</p>
                    <ul className="text-xs text-off-white/40 space-y-1 list-disc pl-4">
                      <li>2023 台灣燈會在台北 濾鏡APP製作</li>
                      <li>2023 金典新秀贊助特別獎 － 繭：形而上</li>
                    </ul>
                  </div>
                  <div className="p-6 rounded-2xl bg-teal-dark/40 border border-white/5">
                    <span className="text-gold font-mono text-sm">2016 - 2019</span>
                    <h4 className="text-lg font-bold mt-2">嘉義高商</h4>
                    <p className="text-off-white/60 text-sm mb-4">廣告設計科</p>
                    <ul className="text-xs text-off-white/40 space-y-1 list-disc pl-4">
                      <li>全國技藝競賽 網頁設計金手獎</li>
                    </ul>
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
          {/* Left: Description */}
          <div className="max-w-md">
            <p className="text-off-white/60 text-lg leading-relaxed font-light">
              每一次意識的跳躍，都是在數位的流光與手作的質地中，編織在森林深處，能讓眾人心靈共振的圖騰。
            </p>
          </div>

          {/* Right: Social & Contact */}
          <div className="flex flex-col gap-6 md:items-end">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gold/40">Contact</h4>
            <div className="flex flex-col gap-4 md:items-end">
              <a href="https://www.instagram.com/pheeny_deer" target="_blank" className="inline-flex items-center gap-4 text-off-white/80 hover:text-gold transition-all group">
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium tracking-widest uppercase">@pheeny_deer</span>
              </a>
              <a href="mailto:hare2353363@gmail.com" className="inline-flex items-center gap-4 text-off-white/80 hover:text-gold transition-all group">
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium tracking-widest lowercase">hare2353363@gmail.com</span>
              </a>
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
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
