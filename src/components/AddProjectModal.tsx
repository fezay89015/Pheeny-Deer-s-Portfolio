import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Image as ImageIcon, Video, Link as LinkIcon, Loader2, Trash2, Type } from 'lucide-react';
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
    thumbnail: '',
    size: 'medium',
    content: [{ type: 'video', value: '' }] // Default one item
  });

  const categories = ['Motion Graphics', '影音特效', '插畫創作', '平面設計', '蠟線編織'];

  const addContentItem = () => {
    const newContent = [...(formData.content || []), { type: 'image', value: '' }];
    setFormData({ ...formData, content: newContent as any });
  };

  const removeContentItem = (index: number) => {
    const newContent = (formData.content || []).filter((_, i) => i !== index);
    setFormData({ ...formData, content: newContent });
  };

  const updateContentItem = (index: number, field: 'type' | 'value', value: string) => {
    const newContent = [...(formData.content || [])];
    newContent[index] = { ...newContent[index], [field]: value };
    setFormData({ ...formData, content: newContent as any });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((formData.content || []).length === 0) {
      alert('請至少新增一項內容');
      return;
    }
    setLoading(true);

    // Derive top-level type and url from the first content item for compatibility
    const firstItem = formData.content![0];
    const finalData = {
      ...formData,
      type: firstItem.type === 'text' ? 'link' : firstItem.type,
      url: firstItem.type !== 'text' ? firstItem.value : '',
      password
    };

    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData)
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
          size: 'medium',
          content: []
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
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-teal-modal border border-white/10 shadow-2xl p-8 custom-scrollbar"
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

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Info */}
              <div className="space-y-6">
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
                    <label className="text-xs font-bold text-gold uppercase tracking-widest">卡片尺寸 Size</label>
                    <select
                      value={formData.size}
                      onChange={(e) => setFormData({ ...formData, size: e.target.value as any })}
                      className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-3 text-off-white focus:border-gold outline-none transition-colors appearance-none"
                    >
                      <option value="small">Small (1x1)</option>
                      <option value="medium">Medium (預設)</option>
                      <option value="large">Large (大正方)</option>
                      <option value="wide">Wide (橫向加長)</option>
                      <option value="tall">Tall (直向加長)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Detailed Content List */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-gold uppercase tracking-widest">詳細內容清單 Detailed Content</label>
                  <button
                    type="button"
                    onClick={addContentItem}
                    className="flex items-center gap-2 text-xs font-bold text-gold hover:text-white transition-colors"
                  >
                    <Plus className="w-4 h-4" /> 新增項目 Add Item
                  </button>
                </div>

                <div className="space-y-4">
                  {(formData.content || []).map((item, index) => (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={index}
                      className="flex gap-4 items-start bg-black/20 p-4 rounded-2xl border border-white/5"
                    >
                      <div className="flex flex-col gap-2">
                        <select
                          value={item.type}
                          onChange={(e) => updateContentItem(index, 'type', e.target.value)}
                          className="bg-teal-dark border border-white/10 rounded-lg px-2 py-1 text-xs text-off-white outline-none"
                        >
                          <option value="image">圖片</option>
                          <option value="video">影片</option>
                          <option value="text">文字</option>
                        </select>
                      </div>
                      
                      <div className="flex-1">
                        {item.type === 'text' ? (
                          <textarea
                            value={item.value}
                            onChange={(e) => updateContentItem(index, 'value', e.target.value)}
                            className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-2 text-sm text-off-white outline-none h-20"
                            placeholder="輸入補充文字..."
                          />
                        ) : (
                          <input
                            type="text"
                            value={item.value}
                            onChange={(e) => updateContentItem(index, 'value', e.target.value)}
                            className="w-full bg-teal-dark/50 border border-white/10 rounded-xl px-4 py-2 text-sm text-off-white outline-none"
                            placeholder={item.type === 'image' ? "圖片網址 URL..." : "影片嵌入網址 URL..."}
                          />
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => removeContentItem(index)}
                        className="p-2 text-white/20 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ))}
                  
                  {(formData.content || []).length === 0 && (
                    <div className="text-center py-8 border-2 border-dashed border-white/5 rounded-2xl">
                      <p className="text-off-white/20 text-sm">尚未新增詳細內容項目</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Admin Password */}
              <div className="space-y-2 pt-6 border-t border-white/5">
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
