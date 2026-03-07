export interface Project {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'video' | 'link';
  thumbnail: string;
  url?: string;
  aspectRatio?: '16/9' | '9/16';
  categories: string[];
  size: 'small' | 'medium' | 'large' | 'wide' | 'tall';
  date: string; // YYYY-MM-DD
  content?: {
    type: 'image' | 'video' | 'text';
    value: string;
  }[];
}

export const projects: Project[] = [
  {
    id: '100-design',
    title: '100 設計：居家生活的解決方案',
    description: '這系列作品與「100 室內設計」合作，將複雜的居家規劃轉化為直覺的影像資訊。製作重點在於精準傳達品牌的專業深度，同時保有生活感的視覺溫度。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/33LLZoGx-cc/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/33LLZoGx-cc',
    categories: ['影音特效'],
    size: 'large',
    date: '2024-12-01',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/33LLZoGx-cc' },
      { type: 'video', value: 'https://www.youtube.com/embed/FxHzyJHsS04' },
      { type: 'video', value: 'https://www.youtube.com/embed/RIuZgT3nx0k' },
      { type: 'text', value: '製作重點在於精準傳達品牌的專業深度，同時保有生活感的視覺溫度。' }
    ]
  },
  {
    id: 'fibbo-hatchy',
    title: '斐寶樂學 x 哈奇派趣：兒歌律動',
    description: '針對幼兒教育市場設計的動態內容。我們結合了節奏感強烈的原創兒歌與充滿活力的角色律動。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/xYeEFGoWFgw/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/xYeEFGoWFgw',
    categories: ['Motion Graphics'],
    size: 'wide',
    date: '2024-11-15',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/xYeEFGoWFgw' },
      { type: 'video', value: 'https://www.youtube.com/embed/K3zpqfTQ2HQ' },
      { type: 'video', value: 'https://www.youtube.com/embed/CO4TZAg3mog' }
    ]
  },
  {
    id: 'tianyue-group',
    title: '天玉集團：品牌形象與生活圈經營',
    description: '這一系列 Reels 與短影音是為天玉集團量身打造的社群內容。透過快速節奏與輕快的視覺語言，將房地產資訊轉化為有趣的社群亮點。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/-ZGARA8iBmU/maxresdefault.jpg',
    url: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1184889172758153%2F&show_text=0',
    aspectRatio: '9/16',
    categories: ['影音特效'],
    size: 'tall',
    date: '2024-10-20',
    content: [
      { type: 'video', value: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1184889172758153%2F&show_text=0' },
      { type: 'video', value: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1225176865752750%2F&show_text=0' },
      { type: 'video', value: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1212834423893805%2F&show_text=0' },
      { type: 'video', value: 'https://www.youtube.com/embed/-ZGARA8iBmU' }
    ]
  },
  {
    id: 'yummy-newyear',
    title: '雅米創意：節慶動態視覺設計',
    description: '農曆新年賀卡動畫。在極短的時間內，透過流暢的圖形變換傳遞品牌生命力。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/rfTWVb7TBdw/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/rfTWVb7TBdw',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2024-02-01'
  },
  {
    id: 'tigerair-greeting',
    title: '台灣虎航：品牌節慶問候動畫',
    description: '專為航空品牌打造的社群節慶動畫。注重品牌識別色的應用與氛圍的營造。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/wRPQynZzROc/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/wRPQynZzROc',
    aspectRatio: '9/16',
    categories: ['Motion Graphics'],
    size: 'tall',
    date: '2024-01-15',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/wRPQynZzROc' },
      { type: 'video', value: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1685650812349570&show_text=0' }
    ]
  },
  {
    id: 'ntpc-rental-safety',
    title: '公部門宣導：新北學生租賃安全',
    description: '與新北市教育局合作的知識性宣導動畫。透過清新且易讀的插畫風格協助學生掌握租屋安全。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/kqKNqXUMYwk/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/kqKNqXUMYwk',
    categories: ['Motion Graphics'],
    size: 'wide',
    date: '2023-09-10'
  },
  {
    id: 'ntuh-ai-medical',
    title: '專業系統展示：台大醫院 AI 遠距醫療',
    description: '介紹高度專業的醫療科技。透過清晰的視覺流程圖詮釋 AI 語音辨識與大數據分析。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/IyeLS68CVLk/hqdefault.jpg',
    url: 'https://www.youtube.com/embed/IyeLS68CVLk',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2023-05-20'
  },
  {
    id: 'taichung-smart-manager',
    title: '台中樂居管家：社區智慧管理',
    description: '針對台中市政府推出的智慧管理平台製作的操作引導動畫。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/llj4ZFVdAVY/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/llj4ZFVdAVY',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2023-03-15'
  },
  {
    id: 'university-works',
    title: '創作初衷：大學時期動畫實驗',
    description: '記錄我動畫之路起點的選輯。包含了早期對角色敘事、動態節奏的各種嘗試。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/nrFRVnPtBo0/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/nrFRVnPtBo0',
    categories: ['Motion Graphics'],
    size: 'large',
    date: '2021-06-30'
  },
  {
    id: 'illustration-divine-light',
    title: '祈光一刻：駐點占卜視覺設計',
    description: '為「祈光一刻」駐點占卜活動設計的視覺元素。',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/divine/800/600',
    categories: ['插畫創作'],
    size: 'medium',
    date: '2024-05-10'
  },
  {
    id: 'illustration-tarot-club',
    title: '霓享塔羅社：社團視覺識別',
    description: '為北科霓享塔羅社打造的品牌視覺。',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/tarotclub/800/600',
    categories: ['插畫創作'],
    size: 'medium',
    date: '2024-03-20'
  },
  {
    id: 'design-poster-1',
    title: '平面設計實驗：幾何構成',
    description: '探索幾何圖形與色彩對比的平面設計作品。',
    type: 'image',
    thumbnail: 'https://picsum.photos/seed/design1/800/1200',
    categories: ['平面設計', '插畫創作'],
    size: 'tall',
    date: '2024-08-15'
  }
];
