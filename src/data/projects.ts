export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'link';
  thumbnail: string;
  url?: string; // For video or external link
  category: string;
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  content?: {
    type: 'image' | 'video' | 'text';
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: '2D Motion Graphics Reel',
    description: '精選 2D 動態圖形作品集，展現流暢的動畫節奏與視覺美感。這是一個長篇描述的範例，用來測試當文字內容非常多時，模態視窗（Modal）是否能正確處理滾動條以及排版。我們希望確保即使在行動裝置上，使用者也能輕鬆閱讀所有細節。',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/mg1/800/600',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Motion Graphics',
    size: 'large',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
      { type: 'text', value: '這是作品的詳細介紹第一段。這裡可以放置非常多的文字，用來描述創作理念、使用的工具以及製作過程。' },
      { type: 'image', value: 'https://picsum.photos/seed/mg-detail1/1200/800' },
      { type: 'text', value: '這是第二段文字，接在圖片後面。我們支持多種媒體類型的混合排列，讓你的作品集更像是一個專業的案例研究（Case Study）。' },
      { type: 'image', value: 'https://picsum.photos/seed/mg-detail2/1200/800' },
    ]
  },
  {
    id: '2',
    title: '插畫創作：奇幻生物',
    description: '一系列結合神祕學元素的插畫作品，探索未知世界的視覺語彙。',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/sketch1/800/600',
    category: '插畫創作',
    size: 'wide',
  },
  {
    id: '3',
    title: '平面設計：品牌視覺',
    description: '為虛擬品牌設計的完整視覺識別系統，包含 Logo、名片與標準字。',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/design1/400/300',
    category: '平面設計',
    size: 'small',
  },
  {
    id: '4',
    title: '影音特效後製專案',
    description: '專業的影音後製處理，包含調色、特效合成與動態標題。',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/post1/400/600',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: '影音特效',
    size: 'tall',
  },
  {
    id: '5',
    title: 'Motion Graphics: Cyberpunk',
    description: '賽博龐克風格的動態影像設計，運用大量的霓虹色彩與故障藝術。',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/cyber1/800/400',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Motion Graphics',
    size: 'medium',
  },
  {
    id: '6',
    title: '插畫研究：符號學',
    description: '探討符號在現代插畫中的應用與隱喻。',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/occult1/400/300',
    category: '插畫創作',
    size: 'small',
  },
  {
    id: '7',
    title: '平面設計：海報系列',
    description: '一系列實驗性質的海報設計，挑戰排版與色彩的極限。',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/poster1/400/600',
    category: '平面設計',
    size: 'tall',
  },
  {
    id: '8',
    title: '影音特效：魔法粒子',
    description: '使用粒子系統製作的魔法施放特效。',
    type: 'video',
    thumbnail: 'https://picsum.photos/seed/magic1/800/600',
    url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: '影音特效',
    size: 'large',
  },
  {
    id: '9',
    title: '插畫創作：森林之靈',
    description: '以森林為主題的系列插畫，展現自然界的生命力。',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/forest1/600/400',
    category: '插畫創作',
    size: 'medium',
  },
  {
    id: '10',
    title: '平面設計：雜誌排版',
    description: '時尚雜誌的內頁排版設計，強調留白與網格系統。',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/mag1/400/300',
    category: '平面設計',
    size: 'small',
  },
];
