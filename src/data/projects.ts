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
    id: 'showreel-2024',
    title: '動態影像作品集 Showreel 2024',
    description: '精選 2024 年度的動態影像作品，涵蓋 brand 動畫、插畫動態化與視覺特效實驗。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/f6VYCaD-5NA/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/f6VYCaD-5NA',
    categories: ['Motion Graphics', '影音特效'],
    size: 'large',
    date: '2026-03-08',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/f6VYCaD-5NA' }
    ]
  },
  {
    id: 'guigui-mg',
    title: '圭圭',
    description: '可愛風格的 MG 動畫作品展示。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/1e39ee82-3b39-49bf-9f32-4c4d56fb1ab9',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2024-03-08',
    content: [
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/1e39ee82-3b39-49bf-9f32-4c4d56fb1ab9',
        'https://github.com/user-attachments/assets/1fe36bc9-11a8-41b3-b165-cf91afb86052',
        'https://github.com/user-attachments/assets/55afed2b-8fc2-4505-9162-c360f5e40735',
        'https://github.com/user-attachments/assets/b98e1552-305d-4142-97ae-7db95dfb9970'
      ]}
    ]
  },
  {
    id: 'divine-light-divination',
    title: '祈光一刻 駐點占卜',
    description: '為「祈光一刻」駐點占卜活動設計的視覺元素。包含線上文宣、實體海報與現場展示照片，展現神秘且溫暖的視覺調性。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/87365d2f-5e6a-4681-ba7c-7dc30092fa2c',
    categories: ['插畫創作', '平面設計'],
    size: 'large',
    date: '2024-09-01',
    content: [
      { type: 'text', value: '線上文宣' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/87365d2f-5e6a-4681-ba7c-7dc30092fa2c' },
      { type: 'text', value: '實體海報' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/08ec9842-e9bc-4a0c-9678-d5e3d314c4d2' },
      { type: 'text', value: '實際照片：海報與桌上立牌' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/b2c09084-823e-4600-8f03-f3695b7eb89c',
        'https://github.com/user-attachments/assets/8e93594b-f81c-47c4-a79d-15875a8c6b8a'
      ]}
    ]
  },
  {
    id: 'ntut-tarot-promo',
    title: '北科霓享塔羅社 活動宣傳',
    description: '為北科霓享塔羅社製作的活動宣傳內容。包含 MG 動畫、迎新茶會海報及園遊會海報，結合手繪插畫與動態特效。',
    type: 'video',
    thumbnail: 'https://github.com/user-attachments/assets/b8cf1662-e564-47ba-a55b-d02d8312e1a8',
    url: 'https://www.youtube.com/embed/Lz_4Psxoo0k',
    categories: ['Motion Graphics', '插畫創作'],
    size: 'wide',
    date: '2024-12-15',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/Lz_4Psxoo0k' },
      { type: 'text', value: '動畫縮圖' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/b8cf1662-e564-47ba-a55b-d02d8312e1a8',
        'https://github.com/user-attachments/assets/e2377876-31e8-4480-bfef-68d3eda759b9',
        'https://github.com/user-attachments/assets/35895ee5-fa51-4197-8257-aa509d15043e',
        'https://github.com/user-attachments/assets/9df0de4d-770b-424b-9a33-3125501f5003'
      ]},
      { type: 'text', value: '7th迎新茶會海報' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/10f42d08-e44b-439f-9e2f-4a116d7b5169' },
      { type: 'text', value: '9th園遊會海報' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/4331f46e-56e4-42b8-9a4f-1ec987cfed9e' }
    ]
  },
  {
    id: 'illustration-collection',
    title: '其他插畫：系列插畫與風格習作',
    description: '各項插畫塗鴉的嘗試，探索插畫敘事的多種風格。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/17e456f1-96b3-4560-9c90-9125974e91b1',
    categories: ['插畫創作'],
    size: 'large',
    date: '2024-11-20',
    content: [
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/17e456f1-96b3-4560-9c90-9125974e91b1',
        'https://github.com/user-attachments/assets/4356b69d-609a-4072-acb9-fb80afc49b3e',
        'https://github.com/user-attachments/assets/c0bc72fe-bcc8-4fd1-8eea-30bf2cff567e',
        'https://github.com/user-attachments/assets/9d5628cf-9424-41eb-b845-618f2167d364'
      ]},
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/9bf740ff-ba68-4241-a882-8a64cd796591',
        'https://github.com/user-attachments/assets/e85379d6-e197-4622-acce-5dd3d77b4853',
        'https://github.com/user-attachments/assets/bf7086cb-5461-4837-aebc-839471204a6c'
      ]},
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/489de08c-b02c-49ef-a7dd-ebbc1830da95',
        'https://github.com/user-attachments/assets/926a6c99-54ee-4b6b-a6e4-2537ea61491f',
        'https://github.com/user-attachments/assets/2e254695-fc5e-4d20-9e6a-6651091cf1fd'
      ]}
    ]
  },
  {
    id: 'publication-covers',
    title: '刊物封面設計',
    description: '高中時期為學校的刊物設計封面，包含學校師長邀請我設計的研討手冊與當屆畢業紀念冊封面，使用當時流行的扁平化設計，。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/ae2422bf-9f1d-4a78-9944-de1da35c52b3',
    categories: ['平面設計'],
    size: 'medium',
    date: '2024-11-10',
    content: [
      { type: 'text', value: '嘉義高商 108年度會計人員研討手冊' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/ae2422bf-9f1d-4a78-9944-de1da35c52b3' },
      { type: 'text', value: '嘉義高商 畢業紀念冊封面' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/abb0243c-2031-4507-b9d0-1b6b71f5c6d0' }
    ]
  },
  {
    id: 'tarot-ar-creation',
    title: '塔羅牌插畫創作 / AR互動展示',
    description: '探索傳統塔羅牌與現代技術的結合。透過 AR 互動展示，讓靜態插畫在數位空間中產生動態變化。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/5c694c31-dbad-44b2-ae55-0782b069cc4f',
    categories: ['插畫創作'],
    size: 'medium',
    date: '2024-10-10',
    content: [
      { type: 'text', value: '星星The Star / 世界 The World' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/5c694c31-dbad-44b2-ae55-0782b069cc4f' },
      { type: 'text', value: '魔術師The Magician / 戰車The Chariot' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/4648adc7-8b4a-46a7-92e3-32ff6a990b62' },
      { type: 'text', value: 'AR互動 DEMO影片' },
      { type: 'video', value: 'https://www.youtube.com/embed/Z3D3Yqgn6Z0' }
    ]
  },
  {
    id: 'algal-reef-castle',
    title: '繪本製作 藻礁城堡',
    description: '以藻礁生態為主題的繪本創作。透過細膩的插畫與故事編排，引導讀者關注海洋生態保育。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/d0ec8491-3dcb-4dbd-8c6e-ff6428e269f4',
    categories: ['插畫創作'],
    size: 'medium',
    date: '2024-06-20',
    content: [
      { type: 'text', value: 'Mockup' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/d0ec8491-3dcb-4dbd-8c6e-ff6428e269f4' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/d8791eb4-cd29-4881-b6fb-acbe0fd447d6' }
    ]
  },
  {
    id: 'mornin-illustration',
    title: 'mornin',
    description: '「mornin」系列插畫作品，記錄清晨的寧靜與生活中的微小瞬間。',
    type: 'video',
    thumbnail: 'https://github.com/user-attachments/assets/1c453f8d-a992-414a-bbb5-26316d67dd58',
    url: 'https://www.youtube.com/embed/JlqcOT5Cy4Q',
    categories: ['插畫創作'],
    size: 'large',
    date: '2024-04-15',
    content: [
      { type: 'text', value: 'Demo影片' },
      { type: 'video', value: 'https://www.youtube.com/embed/JlqcOT5Cy4Q' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/1c453f8d-a992-414a-bbb5-26316d67dd58',
        'https://github.com/user-attachments/assets/77c81d6a-c8d8-4890-9b90-99dc86d20357'
      ]},
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/5fab54e0-40a7-44cf-98fb-620952c9e199',
        'https://github.com/user-attachments/assets/40a9f5a2-8d2f-4f1a-b961-e592f267e6cb',
        'https://github.com/user-attachments/assets/f6b8a272-d5e7-4aee-8422-6dec2e907ac8'
      ]}
    ]
  },
  {
    id: 'year-of-horse-square',
    title: '2026 馬年方斗',
    description: '為 2026 馬年設計的傳統方斗插畫，結合生肖元素與吉祥寓意。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/8bca9da9-df81-4bcb-9406-f13158260735',
    categories: ['插畫創作'],
    size: 'small',
    date: '2024-01-01',
    content: [
      { type: 'image', value: 'https://github.com/user-attachments/assets/8bca9da9-df81-4bcb-9406-f13158260735' }
    ]
  },
  {
    id: 'xibu-island-adventure',
    title: '【昔布島探險記 The Adventures of Sitbut Island】 | AR實境探索導覽遊戲',
    description: '全方位的數位創作計畫。包含動畫敘事、APP UI 介面設計、圖騰卡片設計以及粒子特效實驗。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/xm6N7kIbLpI/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/xm6N7kIbLpI',
    categories: ['插畫創作', '平面設計', '影音特效'],
    size: 'large',
    date: '2023-12-01',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/xm6N7kIbLpI' },
      { type: 'text', value: '封面照' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/cf6b73f6-c8b3-46c5-9fc5-e5b00333a91c' },
      { type: 'text', value: 'APP UI介面設計' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/aae8ede0-9b92-4975-b975-b4c55bca3ba8' },
      { type: 'text', value: '圖騰卡片設計(田字排版)' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/2df6b12d-b341-4a60-a917-9f504ec7cc1c',
        'https://github.com/user-attachments/assets/dc1b403f-102f-4445-b9a2-070a46b3de4b',
        'https://github.com/user-attachments/assets/1f803fe3-8561-4a4c-9197-501c32eedb00',
        'https://github.com/user-attachments/assets/fac9799b-7826-4302-ba86-156d388c52f1'
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
    title: '台中樂居管家官網 介紹動畫',
    description: '針對台中市政府推出的智慧管理平台製作的操作引導動畫。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/llj4ZFVdAVY/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/llj4ZFVdAVY',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2023-03-15',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/llj4ZFVdAVY' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/f399e5cd-c1b6-4e9d-8b9f-73fefc26851c',
        'https://github.com/user-attachments/assets/bc13d0d9-bb69-41e6-900c-e0f87b42f644',
        'https://github.com/user-attachments/assets/fcb92cb3-903e-4b76-ad5a-6df192af0d62',
        'https://github.com/user-attachments/assets/8b77c625-de8a-4f92-980f-3770db83e652',
        'https://github.com/user-attachments/assets/0da5627b-2315-410d-a828-1da7ec389e1c'
      ]}
    ]
  },
  {
    id: 'university-works',
    title: '【繭:形而上】| 臺北科技大學108級畢業展 | 繭 | 宣傳概念影片',
    description: '記錄我動畫之路起點的選輯。包含了早期對角色敘事、動態節奏的各種嘗試。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/RW6ueSqWXqE/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/RW6ueSqWXqE',
    categories: ['Motion Graphics'],
    size: 'large',
    date: '2021-06-30',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/RW6ueSqWXqE' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/e21aa9d9-85ec-4029-873b-c3015e168f6a',
        'https://github.com/user-attachments/assets/405ab0ee-6b05-4297-8635-120b1c5430c7',
        'https://github.com/user-attachments/assets/c9f9b19f-975a-450a-9231-b9a2c54c70a1',
        'https://github.com/user-attachments/assets/213755ce-0241-4f9a-a66c-32b92a079655',
        'https://github.com/user-attachments/assets/29835820-3f80-4866-898d-0a2fa45376c6'
      ]}
    ]
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
