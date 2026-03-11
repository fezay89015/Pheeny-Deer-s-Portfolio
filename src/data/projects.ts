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
    type: 'image' | 'video' | 'text' | 'grid' | 'row' | 'caption' | 'divider' | 'video-card';
    value: string | string[];
  }[];
}

export const projects: Project[] = [
  {
    id: 'showreel-2024',
    title: '動態影像作品集 Showreel',
    description: '精選 2024 年度的動態影像作品，涵蓋 brand 動畫、插畫動態化與視覺特效實驗。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/f6VYCaD-5NA/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/f6VYCaD-5NA',
    categories: ['Motion Graphics', '影音特效'],
    size: 'large',
    date: '2030-01-01',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/f6VYCaD-5NA' }
    ]
  },
  /* {
    id: 'treecave-marketing',
    title: '壹陸樹洞慢活藝術餐廳 行銷設計',
    description: '為壹陸樹洞慢活藝術餐廳打造的全方位行銷設計，涵蓋實體刊物與線上社群內容，展現溫暖的手帳插畫風格。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/0cb0e4a9-13b0-4470-8870-85e22063153f',
    categories: ['平面設計', '插畫', '影音特效'],
    size: 'large',
    date: '2026-03-30',
    content: [
      { type: 'text', value: '實體刊物區' },
      { type: 'caption', value: '餐廳菜單設計 (預留空間)' },
      { type: 'caption', value: '小廚師活動 DM設計 (預留空間)' },
      { type: 'divider', value: '線上社群區' },
      { type: 'caption', value: '新年特輯 餐廳佈置展示Reels' },
      { type: 'video', value: 'https://www.instagram.com/reel/DUaYttGkugp/embed/' },
      { type: 'caption', value: '新年特輯 果我好運轉盤Reels' },
      { type: 'grid', value: [
        'https://www.instagram.com/reel/DUz-lyaknJI/embed/',
        'https://www.instagram.com/reel/DU92TkKkg5A/embed/',
        'https://www.instagram.com/reel/DVNv7a3ksvj/embed/'
      ]},
      { type: 'caption', value: '限時動態設計，以手帳插畫風格繪製限動' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/0cb0e4a9-13b0-4470-8870-85e22063153f',
        'https://github.com/user-attachments/assets/d5c80683-44be-49d1-b71f-fa004a1127df'
      ]}
    ]
  }, */
  {
    id: 'house-unboxing',
    title: '早知道就買這間房 建案開箱短影音',
    description: '一系列為建案開箱製作的短影音，透過動態特效與精確剪輯，帶領觀眾快速了解建案特色與地理優勢。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/h_kwyA9keK8/maxresdefault.jpg',
    aspectRatio: '9/16',
    categories: ['影音特效'],
    size: 'tall',
    date: '2025-03-05',
    content: [
      { type: 'video-card', value: ['#世座友樂町 #台北 #大同 #大稻埕', 'https://www.youtube.com/embed/h_kwyA9keK8'] },
      { type: 'video-card', value: ['#京城天湖 #蓮潭湖畔 #科技', 'https://www.youtube.com/embed/roOvrEvah9k'] },
      { type: 'video-card', value: ['#京城第一樂章 #左營核心地段', 'https://youtu.be/bV6N8fMUXzk?si=IOjUWui9POm2WxtO'] },
      { type: 'video-card', value: ['#綠廳院 #高雄 #三民區', 'https://www.youtube.com/embed/28XvHrFAJg0'] },
      { type: 'video-card', value: ['#仁山沐華 #台中 #水湳', 'https://www.youtube.com/embed/gcr6PsiiyCw'] },
      { type: 'video-card', value: ['#鼎佳謙美 #台中 #清水區', 'https://www.youtube.com/embed/sirUxxxI6Lc'] },
      { type: 'video-card', value: ['#達麗河蕴 #北市科重劃區 ', 'https://youtube.com/shorts/Mz9BytzNpGA?si=NxvOpAbnLwQckSw8'] },
      { type: 'video-card', value: ['#鼎佳謙美 #台中 #清水區', 'https://youtube.com/shorts/TujPiYFDUmc?si=O7F1N2TiFw3I7XNx'] }
    ]
  },
  {
    id: 'quest-sustainability',
    title: '投資必備百搭基本款： Quest全球永續股票策略',
    description: '瑞士百達資產管理Quest量化團隊品牌形象及服務介紹動畫，以簡潔明快的節奏呈現投資理念。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/XC9o8m_BKC8/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/XC9o8m_BKC8',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2025-07-30',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/XC9o8m_BKC8' }
    ]
  },
  {
    id: 'anlene-nutrition',
    title: '安怡營養科學 系列動畫',
    description: '安怡營養科學系列動態影像，包含優蛋白EX及代謝之鑰兩支產品的介紹。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/GVRKgrCDeKU/0.jpg',
    categories: ['Motion Graphics'],
    size: 'large',
    date: '2024-11-1',
    content: [
      { type: 'text', value: '優蛋白EX - 優蛋白升級篇' },
      { type: 'video', value: 'https://www.youtube.com/embed/GVRKgrCDeKU' },
      { type: 'text', value: '優蛋白EX - 健康好選擇篇' },
      { type: 'video', value: 'https://www.youtube.com/embed/NShgFVZoat4' },
      { type: 'text', value: '優蛋白EX - 好喝篇' },
      { type: 'video', value: 'https://www.youtube.com/embed/MMdT4jKtJJw' },
      { type: 'text', value: '代謝之鑰 - 喝水不夠篇' },
      { type: 'video', value: 'https://www.youtube.com/embed/IlJCeHzS4Kc' }
    ]
  },
  {
    id: 'kuang-chuan-tea',
    title: '光泉 朝露綠茶',
    description: '光泉朝露綠茶的動態影像作品，展現產品的清新與自然感。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/MSBPaazJetc/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/MSBPaazJetc',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2024-08-13',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/MSBPaazJetc' }
    ]
  },
  {
    id: 'adlink-tech',
    title: 'ADLINK Technology 影音作品',
    description: '為 ADLINK Technology 製作的官網動態 Banner 及 AI-ADAS 車隊安全解決方案說明影片。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/qxxQ8shjqTU/maxresdefault.jpg',
    categories: ['影音特效'],
    size: 'medium',
    date: '2024-08-06',
    content: [
      { type: 'text', value: '官網動態 Banner' },
      { type: 'video', value: 'https://cdn.adlinktech.com/webupd/en/Upload/about/edge-video.mp4' },
      { type: 'text', value: 'Elevate Your Fleet Safety by AI-ADAS Solution' },
      { type: 'video', value: 'https://www.youtube.com/embed/qxxQ8shjqTU' }
    ]
  },
  {
    id: 'neousys-tech',
    title: '宸曜科技 Neousys Technology 影音作品',
    description: '宸曜科技一系列關於 NVIDIA Jetson 電腦在 ADAS、影像分析及無人系統應用的專業影音展示。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/p97NGfV4yGk/maxresdefault.jpg',
    categories: ['Motion Graphics', '影音特效'],
    size: 'large',
    date: '2025-05-12',
    content: [
      { type: 'text', value: 'Enabling Off-road Vehicles ADAS with Neousys Rugged NVIDIA® Jetson Computers' },
      { type: 'video', value: 'https://www.youtube.com/embed/p97NGfV4yGk' },
      { type: 'text', value: 'Roadside Intelligent Video Analytics with Neousys Rugged NVIDIA Jetson™ Computers' },
      { type: 'video', value: 'https://www.youtube.com/embed/H7PZee5BFJM' },
      { type: 'text', value: 'SWaP-Optimized AI Mission Computer Enabling Unmanned System Applications' },
      { type: 'video', value: 'https://www.youtube.com/embed/LD03MHtgIRA' }
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
    date: '2022-06-16',
    content: [
      { type: 'text', value: '角色設計與動態習作' },
      { type: 'video', value: 'https://www.youtube.com/embed/nrFRVnPtBo0' },
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
      { type: 'text', value: '線上文宣 / 實體海報' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/87365d2f-5e6a-4681-ba7c-7dc30092fa2c',
        'https://github.com/user-attachments/assets/08ec9842-e9bc-4a0c-9678-d5e3d314c4d2'
      ]},
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
      { type: 'text', value: '迎新茶會海報 / 園遊會海報' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/10f42d08-e44b-439f-9e2f-4a116d7b5169',
        'https://github.com/user-attachments/assets/4331f46e-56e4-42b8-9a4f-1ec987cfed9e'
      ]}
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
    date: '2021-11-20',
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
    date: '2019-5-10',
    content: [
      { type: 'text', value: '嘉義高商 108年度會計人員研討手冊' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/ae2422bf-9f1d-4a78-9944-de1da35c52b3' },
      { type: 'text', value: '嘉義高商 畢業紀念冊封面' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/abb0243c-2031-4507-b9d0-1b6b71f5c6d0' }
    ]
  },
  {
    id: 'tarot-ar-creation',
    title: '塔羅牌：插畫創作 / AR互動展示',
    description: '探索傳統塔羅牌與現代技術的結合。透過 AR 互動展示，讓靜態插畫在數位空間中產生動態變化。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/5c694c31-dbad-44b2-ae55-0782b069cc4f',
    categories: ['插畫創作'],
    size: 'medium',
    date: '2023-07-10',
    content: [
      { type: 'text', value: '星星The Star / 世界 The World' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/5c694c31-dbad-44b2-ae55-0782b069cc4f' },
      { type: 'text', value: '魔術師The Magician / 戰車The Chariot' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/4648adc7-8b4a-46a7-92e3-32ff6a990b62' },
      { type: 'caption', value: 'AR互動 DEMO影片' },
      { type: 'video', value: 'https://www.youtube.com/embed/Z3D3Yqgn6Z0' }
    ]
  },
  {
    id: 'algal-reef-castle',
    title: '生態保育繪本：藻礁城堡',
    description: '以藻礁生態為主題的繪本創作。透過細膩的插畫與故事編排，引導讀者關注海洋生態保育。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/d0ec8491-3dcb-4dbd-8c6e-ff6428e269f4',
    categories: ['插畫創作'],
    size: 'medium',
    date: '2023-01-12',
    content: [
      { type: 'caption', value: '兩位小主角在宇宙探險中，發現台灣這座島上有非常漂亮的藻礁城堡。\n登陸後一看卻發現邪惡的企業資本家蓋了工廠，破壞廢氣汙水以及垃圾汙染造成海洋生態危機......\n於是台灣的島民們團結起來，一起組織行動，重新找回美麗的藻礁城堡' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/d8791eb4-cd29-4881-b6fb-acbe0fd447d6',
        'https://github.com/user-attachments/assets/d0ec8491-3dcb-4dbd-8c6e-ff6428e269f4'
      ]}
    ]
  },
  {
    id: 'mornin-illustration',
    title: 'mornin：作息燈',
    description: '「mornin」系列插畫作品，記錄清晨的寧靜與生活中的微小瞬間。',
    type: 'video',
    thumbnail: 'https://github.com/user-attachments/assets/1c453f8d-a992-414a-bbb5-26316d67dd58',
    url: 'https://www.youtube.com/embed/JlqcOT5Cy4Q',
    categories: ['插畫創作'],
    size: 'large',
    date: '2022-03-22',
    content: [
      { type: 'text', value: 'mornin：作息燈 App介面展示影片' },
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
    title: '斐尼鹿創作',
    description: '以個人原創 IP 『斐尼鹿』為核心，建構出居住在月之森林的精靈世界觀。將生活中的平凡日常，透過鹿精靈斐尼鹿與蜜蜂精靈法蘭克的視角重新詮釋，轉化為月之森林中靜謐且療癒的創作。',
    type: 'image',
    thumbnail: 'https://github.com/user-attachments/assets/8bca9da9-df81-4bcb-9406-f13158260735',
    categories: ['插畫創作'],
    size: 'small',
    date: '2026-02-14',
    content: [
      { type: 'text', value: '2026馬年方斗' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/8bca9da9-df81-4bcb-9406-f13158260735',
        'https://github.com/user-attachments/assets/0ed9e850-e186-4e9c-af3c-2c8fa1ad0625'
      ]},
      { type: 'text', value: '月之湖漫步 & 忙碌的小蜜蜂 - 法蘭克' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/8ab67241-b314-4bf5-8aa2-7501cd621ecc',
        'https://github.com/user-attachments/assets/c1578bef-97a7-44ce-9afe-a91d65a11e0f'
      ]}
    ]
  },
  {
    id: 'xibu-island-adventure',
    title: '昔布島探險記 The Adventures of Sitbut Island：AR實境探索導覽遊戲',
    description: '以 AR 實境與擬人化敘事，將生澀的植物導覽轉化為一場觸手可及的奇幻冒險。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/xm6N7kIbLpI/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/xm6N7kIbLpI',
    categories: ['插畫創作', '平面設計', '影音特效'],
    size: 'large',
    date: '2023-05-01',
    content: [
      { type: 'caption', value: '昔布島由不同環境背景的植物精靈部落組成，探險家受邀進入島嶼，與金狗毛蕨、沙漠玫瑰等角色共同籌備慶典。' },
      { type: 'video', value: 'https://www.youtube.com/embed/xm6N7kIbLpI' },
      { type: 'caption', value: '玩家需在使用AR的冒險過程中，解決植物精靈慶典的問題，同時學會台灣植物與生態相關的知識。' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/cf6b73f6-c8b3-46c5-9fc5-e5b00333a91c' },
      { type: 'text', value: 'APP UI介面設計' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/aae8ede0-9b92-4975-b975-b4c55bca3ba8' },
      { type: 'text', value: '圖騰卡片設計' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/2df6b12d-b341-4a60-a917-9f504ec7cc1c',
        'https://github.com/user-attachments/assets/dc1b403f-102f-4445-b9a2-070a46b3de4b',
        'https://github.com/user-attachments/assets/1f803fe3-8561-4a4c-9197-501c32eedb00',
        'https://github.com/user-attachments/assets/fac9799b-7826-4302-ba86-156d388c52f1'
      ]},
      { type: 'text', value: 'Particle Effects' },
      { type: 'row', value: [
        'https://github.com/user-attachments/assets/44f707ca-9246-4ba9-9f9b-9278098b18fb',
        'https://github.com/user-attachments/assets/057f51b1-ab21-4399-a056-54bf146376c3'
      ]}
    ]
  },
  {
    id: '100-design',
    title: '100 設計：居家生活的解決方案',
    description: '透過俐落的動態特效字卡與視覺節奏，將繁複的居家裝修資訊轉化為精緻且易於吸收的影音內容。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/33LLZoGx-cc/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/33LLZoGx-cc',
    categories: ['影音特效'],
    size: 'medium',
    date: '2025-05-22',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/33LLZoGx-cc' },
      { type: 'text', value: '小宅救星！SHARP左右開冰箱' },
      { type: 'video', value: 'https://www.youtube.com/embed/FxHzyJHsS04' },
      { type: 'text', value: '威佐開發 EGGER系統板材服務介紹' },
      { type: 'video', value: 'https://www.youtube.com/embed/RIuZgT3nx0k' },
      { type: 'text', value: '室內設計案例分享' }
    ]
  },
  {
    id: 'fibbo-hatchy',
    title: '斐寶樂學：兒歌律動',
    description: '針對親子幼教與學齡教育內容，運用2D動畫、特效將音樂舞蹈趣味化。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/xYeEFGoWFgw/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/xYeEFGoWFgw',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2025-04-11',
    content: [
      { type: 'text', value: '【斐寶樂學】奧運金牌大Fun Song：榮耀的瞬間' },
      { type: 'video', value: 'https://www.youtube.com/embed/xYeEFGoWFgw' },
      { type: 'text', value: '【斐寶樂學】虎力全開 冰原飄移舞' },
      { type: 'video', value: 'https://www.youtube.com/embed/K3zpqfTQ2HQ' },
      { type: 'text', value: '【斐寶樂學 x 啦啦蹦娛樂】小小冒險家：夢想啟程版' },
      { type: 'video', value: 'https://www.youtube.com/embed/CO4TZAg3mog' }
    ]
  },
  {
    id: 'tianyue-group',
    title: '天玉集團：品牌形象與生活圈短影音',
    description: '這一系列短影音是為天玉集團量身打造的社群內容。透過輕快節奏的字卡及特效，強化建商品牌的可愛社群形象，並塑造執行長、主持人及特約商家的親切感。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/-ZGARA8iBmU/maxresdefault.jpg',
    url: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1184889172758153%2F&show_text=0',
    aspectRatio: '9/16',
    categories: ['影音特效'],
    size: 'tall',
    date: '2025-01-12',
    content: [
      { type: 'text', value: '特約商店報報 🍚VASO 弘-肉燥飯舖' },
      { type: 'grid', value: [
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1184889172758153%2F&show_text=0',
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1225176865752750%2F&show_text=0'
      ]},
      { type: 'text', value: '特約商店報報 🍖 Uncle Shawn 燒肉餐酒館' },
      { type: 'grid', value: [
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1194431325722591%2F&show_text=0',
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F9773105786080551%2F&show_text=0'
      ]},
      { type: 'text', value: '萬仔視角👀揭秘執行長的一天✨ / ✨賞屋就送好禮⁉️天玉集團限量商品讓你帶回家' },
      { type: 'grid', value: [
        'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1212834423893805%2F&show_text=0',
        'https://www.youtube.com/embed/-ZGARA8iBmU'
      ]}
    ]
  },
  {
    id: 'yummy-newyear',
    title: '雅米創意：節慶動態視覺設計',
    description: '為雅米創意在蛇年時製作的新年賀卡動畫。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/rfTWVb7TBdw/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/rfTWVb7TBdw',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2025-01-24'
  },
  {
    id: 'tigerair-greeting',
    title: '台灣虎航：節慶祝賀動畫',
    description: '專為航空品牌打造的節慶動畫。由虎將為主角，穿梭在各個國家地標，帶給客戶不同節日的祝福。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/wRPQynZzROc/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/wRPQynZzROc',
    aspectRatio: '9/16',
    categories: ['Motion Graphics'],
    size: 'tall',
    date: '2024-12-25',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/wRPQynZzROc' },
      { type: 'video', value: 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D1685650812349570&show_text=0' }
    ]
  },
  {
    id: 'ntpc-rental-safety',
    title: '新北學生校外賃居安全 宣導動畫',
    description: '與新北市教育局合作的知識性宣導動畫。透過清新且易讀的扁平式動畫，協助學生及家長掌握租屋安全與法規。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/kqKNqXUMYwk/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/kqKNqXUMYwk',
    categories: ['Motion Graphics'],
    size: 'wide',
    date: '2024-08-07'
  },
  {
    id: 'ntuh-ai-medical',
    title: '台大醫院Ai遠距醫療智慧語音系統',
    description: '介紹台大醫院Ai智慧語音急診系統醫療科技。透過清晰的視覺流程圖文及模擬情境之動畫，詮釋AI語音辨識與大數據分析的新技術。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/IyeLS68CVLk/hqdefault.jpg',
    url: 'https://www.youtube.com/embed/IyeLS68CVLk',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2024-09-17'
  },
  {
    id: 'taichung-smart-manager',
    title: '台中樂居管家官網 介紹動畫',
    description: '以小橘的角色動畫為主軸，介紹台中樂居管家官網的操作引導動畫，及社宅相關活動事項。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/llj4ZFVdAVY/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/llj4ZFVdAVY',
    categories: ['Motion Graphics'],
    size: 'medium',
    date: '2025-07-15',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/llj4ZFVdAVY' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/f399e5cd-c1b6-4e9d-8b9f-73fefc26851c' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/bc13d0d9-bb69-41e6-900c-e0f87b42f644',
        'https://github.com/user-attachments/assets/fcb92cb3-903e-4b76-ad5a-6df192af0d62',
        'https://github.com/user-attachments/assets/8b77c625-de8a-4f92-980f-3770db83e652',
        'https://github.com/user-attachments/assets/0da5627b-2315-410d-a828-1da7ec389e1c'
      ]}
    ]
  },
  {
    id: 'university-works',
    title: '【繭:形而上】臺北科技大學108級互動設計系畢業展 宣傳概念影片',
    description: '記錄我動畫之路起點的選輯。包含了早期對角色敘事、動態節奏的各種嘗試。',
    type: 'video',
    thumbnail: 'https://img.youtube.com/vi/RW6ueSqWXqE/maxresdefault.jpg',
    url: 'https://www.youtube.com/embed/RW6ueSqWXqE',
    categories: ['Motion Graphics'],
    size: 'large',
    date: '2023-04-26',
    content: [
      { type: 'video', value: 'https://www.youtube.com/embed/RW6ueSqWXqE' },
      { type: 'image', value: 'https://github.com/user-attachments/assets/e21aa9d9-85ec-4029-873b-c3015e168f6a' },
      { type: 'caption', value: '互動設計是屬於人類的繭，賦予我們新生。在元宇宙的世界，形體，不再侷限於所見，我們能突破原有的限制，獲得全新的感官體驗。' },
      { type: 'grid', value: [
        'https://github.com/user-attachments/assets/405ab0ee-6b05-4297-8635-120b1c5430c7',
        'https://github.com/user-attachments/assets/c9f9b19f-975a-450a-9231-b9a2c54c70a1',
        'https://github.com/user-attachments/assets/213755ce-0241-4f9a-a66c-32b92a079655',
        'https://github.com/user-attachments/assets/29835820-3f80-4866-898d-0a2fa45376c6'
      ]}
    ]
  }
];
