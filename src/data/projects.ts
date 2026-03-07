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
    type: 'image' | 'video' | 'text' | 'grid' | 'row';
    value: string | string[];
  }[];
}

export const projects: Project[] = [
  {
    id: 'divine-light-divination',
    title: '祈光一刻 駐點占卜',
    description: '為「祈光一刻」駐點占卜活動設計的視覺元素。包含線上文宣、實體海報與現場展示照片，展現神秘且溫暖的視覺調性。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/533fc1c4-8624-486c-b29b-6384a5f31d98',
    categories: ['插畫創作', '平面設計'],
    size: 'large',
    date: '2025-03-01',
    content: [
      { type: 'text', value: '線上文宣' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/533fc1c4-8624-486c-b29b-6384a5f31d98' },
      { type: 'text', value: '實體海報' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/fc013615-25fe-45d3-bd7b-cee0c947da3a' },
      { type: 'text', value: '實際照片：海報與桌上立牌' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/22f6ca00-8be7-446c-9bf7-8d6cd0c7d693',
        'https://github.com/user-attachments/assets/a9aa34de-dac6-4385-803b-9f10b0cef659'
      ]}
    ]
  },
  {
    id: 'ntut-tarot-promo',
    title: '北科霓享塔羅社 活動宣傳',
    description: '為北科霓享塔羅社製作的活動宣傳內容。包含 MG 動畫、迎新茶會海報及園遊會海報，結合手繪插畫與動態特效。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/Lz_4Psxoo0k/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/Lz_4Psxoo0k',
    categories: ['Motion Graphics', '插畫創作'],
    size: 'wide',
    date: '2024-12-15',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/Lz_4Psxoo0k' },
      { type: 'text', value: '動畫縮圖' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/d869787f-9f84-4bbd-a908-e3233166ba0b',
        'https://github.com/user-attachments/assets/5fdf467f-4542-49ea-8e4b-c736449b5812',
        'https://github.com/user-attachments/assets/16311b14-5655-4078-8bcf-b6272d387fa5',
        'https://github.com/user-attachments/assets/62b6e2dc-b2b6-42df-8ba0-51fe478c749a'
      ]},
      { type: 'text', value: '活動海報設計' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/57f0fad4-bb01-4edb-afbf-38b513b4f68b',
        'https://github.com/user-attachments/assets/53608098-716a-4648-8a4b-104d6cb3a27a'
      ]}
    ]
  },
  {
    id: 'illustration-collection',
    title: '插畫選輯：多元風格與視覺探索',
    description: '這系列作品展示了在不同主題下的插畫嘗試，從細膩的線條到大膽的色彩運用，探索視覺敘事的多種可能性。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/df8096b0-49ee-4662-9655-38d3bb01b7ac',
    categories: ['插畫創作'],
    size: 'large',
    date: '2024-11-20',
    content: [
      { type: 'text', value: '風格習作：田字排版展示' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/df8096b0-49ee-4662-9655-38d3bb01b7ac',
        'https://github.com/user-attachments/assets/9e6d9330-9264-4952-973a-8677369bb3e9',
        'https://github.com/user-attachments/assets/8fa02208-4124-4bf6-9bc9-2146c4c4b673',
        'https://github.com/user-attachments/assets/c93f7cb0-3caf-408e-adca-94bbde2cb9af'
      ]},
      { type: 'text', value: '系列插畫並排展示' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/5b694022-86bc-4ece-af4f-60fb6122593b',
        'https://github.com/user-attachments/assets/6b1e3d8d-1a29-4321-898a-bb11060213d3',
        'https://github.com/user-attachments/assets/bd7813b3-b462-4da3-9f55-b2c11af6c7ca'
      ]},
      { type: 'image', value: 'https://github.com/user-attachments/assets/2023f969-a06f-4e91-b84d-1ef4a760325e' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/c1109612-a7d0-4282-a3f4-29f79a7772d4' }
    ]
  },
  {
    id: 'publication-covers',
    title: '刊物封面設計',
    description: '為各類刊物設計的封面，包含學術研討手冊與畢業紀念冊，注重排版美感與資訊傳達的平衡。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/d59b3621-65d8-4632-bed0-c99afbef10c1',
    categories: ['平面設計'],
    size: 'medium',
    date: '2024-11-10',
    content: [
      { type: 'text', value: '嘉義高商 108年度會計人員研討手冊' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/d59b3621-65d8-4632-bed0-c99afbef10c1' },
      { type: 'text', value: '嘉義高商 畢業紀念冊封面' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/fc6664ca-612c-423b-938c-bffa58b0d351' }
    ]
  },
  {
    id: 'tarot-ar-creation',
    title: '塔羅牌插畫創作 / AR互動展示',
    description: '探索傳統塔羅牌與現代技術的結合。透過 AR 互動展示，讓靜態插畫在數位空間中產生動態變化。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/fe1f98d6-b86c-41ba-b437-a8dbbf79dbcc',
    categories: ['插畫創作'],
    size: 'medium',
    date: '2024-10-10',
    content: [
      { type: 'text', value: '星星 The Star / 世界 The World' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/fe1f98d6-b86c-41ba-b437-a8dbbf79dbcc' },
      { type: 'text', value: '魔術師 The Magician / 戰車 The Chariot' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/8d356acb-6f0a-4697-95eb-db4098ab5d98' },
      { type: 'text', value: 'AR 互動 DEMO 影片' },
      { type: 'video', value: 'https://www.youtube.com/embed/Z3D3Yqgn6Z0' }
    ]
  },
  {
    id: 'algal-reef-castle',
    title: '繪本製作 藻礁城堡',
    description: '以藻礁生態為主題的繪本創作。透過細膩的插畫與故事編排，引導讀者關注海洋生態保育。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/5e28d715-8e54-4f78-a7a3-342556b4a28c',
    categories: ['插畫創作'],
    size: 'medium',
    date: '2024-06-20',
    content: [
      { type: 'text', value: 'Mockup 展示' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/5e28d715-8e54-4f78-a7a3-342556b4a28c' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/775fd19b-8f2d-4029-8dc2-441d59a0aa6f' }
    ]
  },
  {
    id: 'mornin-illustration',
    title: 'mornin',
    description: '「mornin」系列插畫作品，記錄清晨的寧靜與生活中的微小瞬間。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/JlqcOT5Cy4Q/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/JlqcOT5Cy4Q',
    categories: ['插畫創作'],
    size: 'large',
    date: '2024-04-15',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/JlqcOT5Cy4Q' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/5a4d58a8-21c7-48c1-9393-c957a061cf39',
        'https://github.com/user-attachments/assets/31378785-56e1-4d47-b470-749402a49478'
      ]},
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/a1fe0359-1e30-4096-8474-0ff6304d6739',
        'https://github.com/user-attachments/assets/6f209111-a93f-4182-80e1-557890028a58',
        'https://github.com/user-attachments/assets/351d107c-6b81-4035-8ec8-bec13ae17f4b'
      ]}
    ]
  },
  {
    id: 'year-of-horse-square',
    title: '2026 馬年方斗',
    description: '為 2026 馬年設計的傳統方斗插畫，結合生肖元素與吉祥寓意。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/5ec2aa5c-6e5e-4d68-be93-d844329e2125',
    categories: ['插畫創作'],
    size: 'small',
    date: '2024-01-01',
    content: [
      { type: 'image', value: 'https://github.com/user-attachments/assets/5ec2aa5c-6e5e-4d68-be93-d844329e2125' }
    ]
  },
  {
    id: 'xibu-island-adventure',
    title: '昔布島探險記',
    description: '全方位的數位創作計畫。包含動畫敘事、APP UI 介面設計、圖騰卡片設計以及粒子特效實驗。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/Aaey0Ec-qoE/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/Aaey0Ec-qoE',
    categories: ['插畫創作', '平面設計', '影音特效'],
    size: 'large',
    date: '2023-12-01',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/Aaey0Ec-qoE' },
      { type: 'text', value: '封面與 APP UI 介面設計' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/570335e3-0641-4579-9206-cfd5103163f2' },
      { type: 'text', value: '圖騰卡片設計' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/ad3b4b48-d252-4633-b946-93851209c565',
        'https://github.com/user-attachments/assets/ad4cce6a-c72d-4329-b322-dcc2e6f8d7e1',
        'https://github.com/user-attachments/assets/5883d3cf-7ba8-41f0-a1a3-4e5344cffd05',
        'https://github.com/user-attachments/assets/1e2a7414-18c3-432c-bcdc-85ac59e726ad'
      ]},
      { type: 'text', value: 'Particle Effect 設計' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/44f707ca-9246-4ba9-9f9b-9278098b18fb',
        'https://github.com/user-attachments/assets/057f51b1-ab21-4399-a056-54bf146376c3'
      ]}
    ]
  },
  {
    id: '100-design',
    title: '100 設計：居家生活的解決方案',
    description: '這系列作品與「100 室內設計」合作，將複雜的居家規劃轉化為直覺的影像資訊。製作重點在於精準傳達品牌的專業深度，同時保有生活感的視覺溫度。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/33LLZoGx-cc/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/33LLZoGx-cc',
    categories: ['影音特效'],
    size: 'medium',
    date: '2024-05-01',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/33LLZoGx-cc' },
      { type: 'video', value: 'https://www.youtube.com/embed/FxHzyJHsS04' },
      { type: 'video', value: 'https://www.youtube.com/embed/RIuZgT3nx0k' }
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
    size: 'medium',
    date: '2024-02-15',
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
