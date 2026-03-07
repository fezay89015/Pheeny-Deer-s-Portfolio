import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Image as ImageIcon, Video, Link as LinkIcon, Loader2 } from 'lucide-react';
import { Project } from '../data/projects';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProjectAdded: (project: Project) => void;
}

export function AddProjectModal({ isOpen, onClose, onProjectAdded }: AddProjectModalProps) {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    description: '',
    category: 'Motion Graphics',
    type: 'video',
    thumbnail: '',
    url: '',
    size: 'medium'
  });

  const categories = ['Motion Graphics', '影音特效', '插畫創作', '平面設計', '蠟線編織'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, password })
      });

      if (response.ok) {
        const newProject = await response.json();
        onProjectAdded(newProject);
        onClose();
        setPassword('');
        setFormData({
          title: '',
          description: '',
          category: 'Motion Graphics',
          type: 'video',
          thumbnail: '',
          url: '',
          size: 'medium'
        });
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to add project');
      }
    } catch (error) {
      console.error('Error adding project:', error);
      alert('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-teal-modal border border-white/10 shadow-2xl p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full bg-black/20 text-white/60 hover:bg-white/10 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-3xl font-bold text-off-white mb-8 flex items-center gap-3">
              <Plus className="w-8 h-8 text-gold" />
              新增作品 <span className="text-gold italic text-xl">Add New Work</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">作品標題 Title</label>
                  <input
                    required
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-3 text-off-white focus:border-gold outline-none transition-colors"
                    placeholder="輸入作品標題..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">作品分類 Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-3 text-off-white focus:border-gold outline-none transition-colors appearance-none"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gold uppercase tracking-widest">作品說明 Description</label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-3 text-off-white focus:border-gold outline-none transition-colors h-24 resize-none"
                  placeholder="輸入作品詳細說明..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">作品類型 Type</label>
                  <div className="flex gap-3">
                    {[
                      { id: 'video', icon: Video, label: '影片' },
                      { id: 'image', icon: ImageIcon, label: '圖片' },
                      { id: 'link', icon: LinkIcon, label: '連結' }
                    ].map(type => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, type: type.id as any })}
                        className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                          formData.type === type.id 
                            ? 'bg-gold border-gold text-teal-dark font-bold' 
                            : 'bg-teal-dark/50 border-white/10 text-off-white/60 hover:border-gold/40'
                        }`}
                      >
                        <type.icon className="w-4 h-4" />
                        <span className="text-xs">{type.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">卡片尺寸 Size</label>
                  <select
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value as any })}
                    className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-3 text-off-white focus:border-gold outline-none transition-colors appearance-none"
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="wide">Wide</option>
                    <option value="tall">Tall</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gold uppercase tracking-widest">縮圖網址 Thumbnail URL</label>
                <input
                  required
                  type="url"
                  value={formData.thumbnail}
                  onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                  className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-3 text-off-white focus:border-gold outline-none transition-colors"
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gold uppercase tracking-widest">內容網址 Content URL (影片/連結)</label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-3 text-off-white focus:border-gold outline-none transition-colors"
                  placeholder="https://www.youtube.com/embed/..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gold uppercase tracking-widest">管理密碼 Admin Password</label>
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-3 text-off-white focus:border-gold outline-none transition-colors"
                  placeholder="輸入管理密碼以發佈..."
                />
              </div>

              <button
                disabled={loading}
                type="submit"
                className="w-full py-4 bg-gold text-teal-dark font-bold rounded-2xl hover:bg-gold-light transition-all shadow-lg shadow-gold/20 flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Plus className="w-5 h-5" />}
                發佈作品 Publish Work
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
